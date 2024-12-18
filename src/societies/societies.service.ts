/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { Society } from './dto/societies.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { json } from 'stream/consumers';

const prisma = new PrismaClient()

@Injectable()
export class SocietiesService { 

  async findAll() {

    const allSociety = await prisma.society.findMany()
    return allSociety;
  }

  async findOne(societyId: number) {
  try {
    const society = await prisma.society.findFirst({
      where: { id: societyId }, // Find society where id matches
    });

    return society; // Return the society record or null if not found
  } catch (error) {
    // Handle error appropriately
    throw new Error(`Error finding society with ID ${societyId}: ${error.message}`);
  }
}

  async create(data: Society) {
        await prisma.society.create({
        data,
        })
  const allUsers = await prisma.society.findMany()
    return allUsers;
  }

  async update(societyId: number, data: Society) {
  try {
    const updatedField = await prisma.society.update({
      where: { id: societyId },
      data,
    });
    return updatedField;  // Return the updated society record if successful
  } catch (error) {
     throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message || 'Internal server error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }
}

  async delete(societyId: number) {
     const deletedSociety = await prisma.society.delete({
      where: { id: societyId },
    });
    return deletedSociety; 
  }
}
