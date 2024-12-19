/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { SocietiesService } from "./societies.service";
import { Society } from "./dto/societies.dto";

@Controller("societies")
export class SocietiesController {
  constructor(private readonly societiesService: SocietiesService) {}

  @Get() //Get /societies
  findAll() {
    return this.societiesService.findAll();
  }

  @Get(":societyID") //Get /societies/:id
  findOne(@Param("societyID") societyID: string) {
    return this.societiesService.findOne(Number(societyID));
  }

  @Post() //POST /societies
  create(@Body(ValidationPipe) society: Society) {
    return this.societiesService.create(society);
  }

  @Patch(":id") //PATCH /societies/:id
  update(@Param("id") id: string, @Body(ValidationPipe) updateSociety: Society) {
    return this.societiesService.update(Number(id), updateSociety);
  }

  @Delete(":id") //DELETE /soc
  delete(@Param("id") id: string) {
    return this.societiesService.delete(Number(id));
  }
}
