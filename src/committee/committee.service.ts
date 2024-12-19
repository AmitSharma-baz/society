import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateCommitteeDto, UpdateCommitteeDto } from "./dto/committee.dto";

const prisma = new PrismaClient();

@Injectable()
export class CommitteeService {
  async findaAll(societyId: number) {
    const existingCommitteeList = prisma.committee.findMany({
      where: { societyId },
    });

    if (!existingCommitteeList) {
      throw new HttpException(`Committee not formed.`, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return existingCommitteeList;
  }

  async findOne(committeeID: number) {
    const existingCommittee = prisma.committee.findFirst({
      where: { id: committeeID },
    });

    if (!existingCommittee) {
      throw new HttpException(`Committee member not exist.`, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return existingCommittee;
  }

  async create(createCommitteeDto: CreateCommitteeDto) {
    const { memberName, post, iOrder, contactNumber, societyId } = createCommitteeDto;
    const existingCommittee = await prisma.committee.findFirst({
      where: {
        societyId,
        memberName,
        post,
      },
    });

    if (existingCommittee) {
      throw new HttpException(`Society Committee member exist.`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    await prisma.committee.create({
      data: { memberName, post, iOrder, contactNumber, societyId },
    });

    return "New Committee member is created : " + memberName;
  }

  async update(idnumber: number, updateCommitteeDto: UpdateCommitteeDto) {
    const { memberName, post, iOrder, contactNumber, societyId } = updateCommitteeDto;

    const existingCommittee = prisma.committee.findFirst({
      where: {
        id: idnumber,
      },
    });

    if (!existingCommittee) {
      throw new HttpException(`Committee member not found.`, HttpStatus.NOT_FOUND);
    }

    await prisma.committee.update({
      where: {
        id: idnumber,
      },
      data: { memberName, post, iOrder, contactNumber, societyId },
    });

    return prisma.committee.findFirst({
      where: {
        id: idnumber,
      },
    });
  }

  async delete(committeeID: number) {
    const existingCommittee = prisma.committee.findFirst({
      where: {
        id: committeeID,
      },
    });

    if (!existingCommittee) {
      throw new HttpException(`Committee member not found.`, HttpStatus.NOT_FOUND);
    }

    const deletedcommitteeMember = await prisma.committee.delete({
      where: { id: committeeID },
    });
    return `Deleted Successfully ${deletedcommitteeMember.memberName}, post : ${deletedcommitteeMember.post}.`;
  }
}
