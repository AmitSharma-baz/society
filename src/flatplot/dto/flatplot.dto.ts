import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFlatPlotdto {
  @IsString()
  @IsNotEmpty()
  flatNumber: string;

  @IsString()
  @IsOptional()
  contactNumber?: string;

  @IsString()
  @IsOptional()
  ownerName?: string;

  @IsNumber()
  @IsNotEmpty()
  societyId: number;
}

export class UpdateFlatPlotdto {
  @IsString()
  @IsOptional()
  flatNumber?: string;

  @IsString()
  @IsOptional()
  contactNumber?: string;

  @IsString()
  @IsOptional()
  ownerName?: string;

  @IsNumber()
  @IsOptional()
  societyId?: number;
}

//   @IsString()
//   @IsNotEmpty()
//   ownerName: string;

//   @IsString()
//   @IsNotEmpty()
//   contactNumber: string;

//   @IsInt()
//   @IsNotEmpty()
//   societyId: number;
// }
