import { GlobalService } from "./../shared/global.service";
import { Injectable } from "@nestjs/common";
import { AuthService } from "src/middleware/auth.service";

@Injectable()
export class AccountService {
  constructor(
    private authService: AuthService,
    private globalService: GlobalService
  ) {}
  async login(bodyData: any) {
    return this.authService.generateToken(bodyData);
  }

  async readTOken(token: string) {
    return this.globalService.readAuthToken(token);
  }
}
