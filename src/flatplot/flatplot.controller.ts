/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { FlatplotService } from './flatplot.service'; 
import { FlatPlot } from './dto/flatplot.dto';

@Controller('flatplot')
export class FlatplotController {

constructor(private readonly flatplotService: FlatplotService) {}

  @Get()
  async findMany(@Query('societyId', ParseIntPipe) societyId: number) {
    return this.flatplotService.findMany(societyId);
  }


@Get()
  async findOne(@Query('flatplotId', ParseIntPipe) flatplotId: number) {
    return this.flatplotService.findOne(flatplotId);
  }

  // @Post() //POST /societies
  // create(@Body(ValidationPipe) data: FlatPlot) {
  //   return this.flatplotService.create(data);
  // }

//   @Patch(':id') //PATCH /societies/:id
//   update(@Param('id') id: string, @Body(ValidationPipe) updateSociety: Society) {
//     return this.flatplotService.update(Number(id), updateSociety);
//   }

//   @Delete(':id') //DELETE /soc
//   delete(@Param('id') id: string) {
//     return this.flatplotService.delete(Number(id));
//   }
}
