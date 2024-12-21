import { JwtService } from "@nestjs/jwt";
import { AuthService } from "./../middleware/auth.service";
import { Module } from "@nestjs/common";
import { AccountService } from "./account.service";
import { AccountController } from "./account.controller";
import { SharedModule } from "src/shared/shared.module";

@Module({
  imports: [SharedModule],
  controllers: [AccountController],
  providers: [AccountService, AuthService, JwtService],
})
export class AccountModule {}
