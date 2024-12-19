import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { CommitteeService } from "./committee.service";
import { CreateCommitteeDto, UpdateCommitteeDto } from "./dto/committee.dto";

@Controller("committee")
export class CommitteeController {
  constructor(private readonly committeeService: CommitteeService) {}

  @Get()
  findaAll(@Query("societyId", ParseIntPipe) societyId: number) {
    return this.committeeService.findaAll(societyId);
  }

  @Get(":committeeID")
  findOne(@Param("committeeID", ParseIntPipe) committeeID: number) {
    return this.committeeService.findOne(Number(committeeID));
  }

  @Post()
  create(@Body() createCommitteeDto: CreateCommitteeDto) {
    return this.committeeService.create(createCommitteeDto);
  }

  @Patch(":Societyid")
  update(@Param("Societyid") Societyid: number, @Body() updateCommitteeDto: UpdateCommitteeDto) {
    return this.committeeService.update(Number(Societyid), updateCommitteeDto);
  }

  @Delete(":committeeID")
  delete(@Param("committeeID") committeeID: number) {
    return this.committeeService.delete(Number(committeeID));
  }
}
