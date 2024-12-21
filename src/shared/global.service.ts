import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AuthService } from "src/middleware/auth.service";

@Injectable()
export class GlobalService {
  constructor(private authService: AuthService) {}

  async readAuthToken(token: string) {
    // Remove bearer from token
    token = token.replace("Bearer ", "").replace("bearer", "").trim();

    // validate token
    if (!token) {
      throw new Error("No token provided");
    }

    try {
      const user = await this.authService.verifyToken(token);
      return user;
    } catch (error) {
      throw new HttpException("Token is not valid", HttpStatus.UNAUTHORIZED);
    }
  }
}
