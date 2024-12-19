import { Module } from '@nestjs/common';
import { FlatOccupantController } from './flat-occupant.controller';
import { FlatOccupantService } from './flat-occupant.service';

@Module({
  controllers: [FlatOccupantController],
  providers: [FlatOccupantService]
})
export class FlatOccupantModule {}
