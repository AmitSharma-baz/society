import { CreateOccupantDto } from "./dto/flatOccupant.dto";
import { FlatOccupantService } from "./flat-occupant.service";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";

@Controller("flat-occupant")
export class FlatOccupantController {
  constructor(private readonly flatOccupantService: FlatOccupantService) {}

  @Get()
  findRentalsInSociety(@Query("societyId", ParseIntPipe) societyId: number) {
    return this.flatOccupantService.findRentalsInSociety(societyId);
  }

  @Get(":FlatID")
  findOne(@Param("FlatID") FlatID: number) {
    return this.flatOccupantService.findMany(Number(FlatID));
  }

  @Post()
  create(@Body() createOccupantDto: CreateOccupantDto) {
    return this.flatOccupantService.create(createOccupantDto);
  }

  @Patch(":FlatID")
  update(@Param("FlatID") FlatID: number, @Body() createOccupantDto: CreateOccupantDto) {
    return this.flatOccupantService.update(Number(FlatID), createOccupantDto);
  }

  @Delete(":occupantID")
  delete(@Param("occupantID") occupantID: number) {
    return this.flatOccupantService.delete(Number(occupantID));
  }
}
