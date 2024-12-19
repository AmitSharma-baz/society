import { CreateOccupantDto, UpdateOccupantDto } from "./dto/flatOccupant.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class FlatOccupantService {
  async findRentalsInSociety(societyId: number) {
    return prisma.occupant.findMany({
      where: {
        flatPlot: {
          societyId: societyId,
        },
        type: "Renter", // Filter for renters
      },
    });
  }

  async findMany(FlatID: number) {
    return prisma.occupant.findMany({
      where: { flatPlotId: FlatID },
    });
  }

  async create(createOccupantDto: CreateOccupantDto) {
    const { flatPlotId, name, relation, contact, type, rentalStart, rentalEnd, rentAmount } = createOccupantDto;

    await prisma.occupant.create({
      data: {
        flatPlotId,
        name,
        relation,
        contact,
        type,
        rentalStart,
        rentalEnd,
        rentAmount,
      },
    });

    return prisma.occupant.findFirst({
      where: { flatPlotId },
    });
  }

  async update(idnumber: number, updateOccupantDto: UpdateOccupantDto) {
    const { flatPlotId, name, relation, contact, type, rentalStart, rentalEnd, rentAmount } = updateOccupantDto;

    const existingOccupant = prisma.occupant.findFirst({
      where: {
        id: idnumber,
      },
    });

    if (!existingOccupant) {
      throw new HttpException(`Occupant not found`, HttpStatus.NOT_FOUND);
    }

    await prisma.occupant.update({
      where: {
        id: idnumber,
      },
      data: { flatPlotId, name, relation, contact, type, rentalStart, rentalEnd, rentAmount },
    });

    return prisma.occupant.findFirst({
      where: {
        id: idnumber,
      },
    });
  }

  async delete(occupantID: number) {
    const existingOccupant = prisma.occupant.findFirst({
      where: {
        id: occupantID,
      },
    });

    if (!existingOccupant) {
      throw new HttpException(`Occupant member not found.`, HttpStatus.NOT_FOUND);
    }

    const deletedOccupant = await prisma.occupant.delete({
      where: { id: occupantID },
    });
    return `Deleted Successfully ${deletedOccupant.name}, Type : ${deletedOccupant.type}.`;
  }
}
