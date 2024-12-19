/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client' 
import { CreateFlatPlotdto, UpdateFlatPlotdto } from './dto/flatplot.dto';

const prisma = new PrismaClient();
@Injectable()
export class FlatplotService {

async findaAll(societyId: number) { 
    return prisma.flatPlot.findMany({
    where: { societyId },
});

    }
 
async findOne(FlatID: number) {
    return prisma.flatPlot.findFirst({
        where: { id: FlatID },
    });
}
    
async create(createflatplotDto: CreateFlatPlotdto)
{
    const { flatNumber, ownerName, contactNumber, societyId } = createflatplotDto;
    const existingFlatPlot = await prisma.flatPlot.findFirst({
        where: {
            flatNumber,
            societyId
        }
    })

    if (existingFlatPlot) {
        throw new HttpException(`Flat number ${flatNumber} already exists in society ID ${societyId}`,HttpStatus.INTERNAL_SERVER_ERROR,
    );
    }
    await prisma.flatPlot.create({
        data: { flatNumber, ownerName, contactNumber, societyId }
    });

    return 'New flat is created of number : ' + flatNumber;
    }
    
    async update(idnumber: number, updateFlatPlotdto: UpdateFlatPlotdto) {
        const { flatNumber, ownerName, contactNumber, societyId } = updateFlatPlotdto;

        const existingFlatPlot = prisma.flatPlot.findFirst({
            where: {
                id: idnumber
            }
        });

        if (!existingFlatPlot) {
            throw new HttpException(`Flat plot with id ${flatNumber} not found`, HttpStatus.NOT_FOUND);
        }

        await prisma.flatPlot.update({
           where: {
                id: idnumber
            },
            data: { flatNumber, ownerName, contactNumber, societyId }
        })

        return prisma.flatPlot.findFirst({
            where: {
                id: idnumber
            }
        })
    }

  async delete(flatid: number) {
     const deletedFlatPlot = await prisma.flatPlot.delete({
      where: { id: flatid },
    });
    return deletedFlatPlot; 
  }
    
}
