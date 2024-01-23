import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
} from "class-validator";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(32)
  public email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(10)
  public password: string;
}
