import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class CreateCommitteeDto {
  @IsString()
  @IsNotEmpty()
  post: string; // e.g., President, Secretary

  @IsString()
  @IsNotEmpty()
  memberName: string;

  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @IsNumber()
  @IsNotEmpty()
  societyId: number;

  @IsNumber()
  iOrder?: number;
}

export class UpdateCommitteeDto {
  @IsString()
  @IsOptional()
  post?: string; // e.g., President, Secretary

  @IsString()
  @IsOptional()
  memberName?: string;

  @IsString()
  @IsOptional()
  contactNumber?: string;

  @IsNumber()
  @IsOptional()
  societyId?: number;

  @IsNumber()
  @IsOptional()
  iOrder?: number;
}
