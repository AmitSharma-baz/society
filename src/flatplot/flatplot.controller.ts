/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { FlatplotService } from './flatplot.service'; 
import { CreateFlatPlotdto, UpdateFlatPlotdto } from './dto/flatplot.dto';

@Controller('flatplot')
export class FlatplotController {

constructor(private readonly flatplotService: FlatplotService) {}

  

  @Get()
  findaAll(@Query('societyId', ParseIntPipe) societyId: number) {
    return this.flatplotService.findaAll(societyId);
  }

  @Get(':FlatID')
  findOne(@Param('FlatID') FlatID: number) {
    return this.flatplotService.findOne(Number(FlatID));
  }


  @Post()
  create(@Body() createflatplotdto: CreateFlatPlotdto) {
     return this.flatplotService.create(createflatplotdto)
  }
  
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateflatplotDto: UpdateFlatPlotdto) {
    return this.flatplotService.update(Number(id), updateflatplotDto);
  } 

  @Delete(':flatid')
  delete(@Param('flatid') flatid: number) {
    return this.flatplotService.delete(Number(flatid))
  } 


}
