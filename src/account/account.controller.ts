import { Get, HttpStatus, Headers, UseGuards } from "@nestjs/common";
import { HttpException } from "@nestjs/common";
import { Body, Controller, Post } from "@nestjs/common";
import { AuthGuard } from "src/middleware/auth.guard";
import { AccountService } from "./account.service";

@Controller("account")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post("login")
  async login(@Body() bodyData: any) {
    try {
      return this.accountService.login(bodyData);
    } catch (error) {
      throw new HttpException(error.message, error?.status || HttpStatus.NOT_IMPLEMENTED);
    }
  }

  @Get("read-token")
  @UseGuards(AuthGuard)
  async readToken(@Headers("Authorization") Authorization: string) {
    try {
      return this.accountService.readTOken(Authorization);
    } catch (error) {
      throw new HttpException(error.message, error?.status || HttpStatus.NOT_IMPLEMENTED);
    }
  }
}
