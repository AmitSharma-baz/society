import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
      throw new HttpException("Token is required", HttpStatus.BAD_REQUEST);
    }

    const token = request.headers.authorization.replace("Bearer ", "");

    if (!token) {
      throw new HttpException("Token is required", HttpStatus.BAD_REQUEST);
    }

    try {
      await this.authService.verifyToken(token);
      return true;
    } catch (error) {
      Logger.error(error.message, undefined, "AuthGuard");
      throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
    }
  }
}
