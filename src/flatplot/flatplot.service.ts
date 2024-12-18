/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client' 

const prisma = new PrismaClient();
@Injectable()
export class FlatplotService {

async findMany(societyId: number) { 
    return prisma.flatPlot.findMany({
    where: { societyId },
});
    }

 
async findOne(flatplotId: number) {
    return prisma.flatPlot.findFirst({
    where : { id: flatplotId },
})
}
    
   
}
