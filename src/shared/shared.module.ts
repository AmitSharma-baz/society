import { JwtService } from "@nestjs/jwt";
import { Module } from "@nestjs/common";
import { AuthService } from "src/middleware/auth.service";
import { GlobalService } from "./global.service";

@Module({
  imports: [],
  controllers: [],
  providers: [GlobalService, AuthService, JwtService],
  exports: [GlobalService],
})
export class SharedModule {}
