/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FlatplotController } from './flatplot.controller';
import { FlatplotService } from './flatplot.service';

@Module({
    controllers: [FlatplotController],
    providers: [FlatplotService],
})
export class FlatplotModule {}
