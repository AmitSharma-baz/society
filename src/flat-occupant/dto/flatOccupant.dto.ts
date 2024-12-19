import { IsNotEmpty, IsNumber, IsOptional, IsString, IsEnum, IsDateString } from "class-validator";
import { OccupantType } from "@prisma/client"; // Importing the OccupantType enum from Prisma

export class CreateOccupantDto {
  @IsNumber()
  @IsNotEmpty()
  flatPlotId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  relation?: string; // Optional, only for family members

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsEnum(OccupantType)
  @IsNotEmpty()
  type: OccupantType; // "Family" or "Renter"

  // Rental-specific fields (only for renters)
  @IsOptional()
  @IsDateString()
  rentalStart?: string; // Start date (only for renters)

  @IsOptional()
  @IsDateString()
  rentalEnd?: string; // End date (only for renters)

  @IsOptional()
  @IsNumber()
  rentAmount?: number; // Rent amount (only for renters)
}

export class UpdateOccupantDto {
  @IsOptional()
  @IsNumber()
  flatPlotId?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  relation?: string; // Optional, only for family members

  @IsOptional()
  @IsString()
  contact?: string;

  @IsOptional()
  @IsEnum(OccupantType)
  type?: OccupantType; // "Family" or "Renter"

  // Rental-specific fields (only for renters)
  @IsOptional()
  @IsDateString()
  rentalStart?: string; // Start date (only for renters)

  @IsOptional()
  @IsDateString()
  rentalEnd?: string; // End date (only for renters)

  @IsOptional()
  @IsNumber()
  rentAmount?: number; // Rent amount (only for renters)
}
