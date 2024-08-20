import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";

interface IUserLoginDTO {
  id: string;
  email: string;
  phone_number: string;
  created_at: Date;
  updated_at: Date;
}

export class UserLoginDTO {
  @IsString()
  id: string;

  @IsString()
  email: string;

  @IsString()
  phone_number: string;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;

  constructor(data: IUserLoginDTO) {
    this.id = data.id;
    this.email = data.email;
    this.phone_number = data.phone_number;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}

interface IUserLoginBodyDTO {
  email: string;
  password: string;
}

export class UserLoginBodyDTO {
  @IsString()
  @IsNotEmpty({ message: "Email is required" })
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty({ message: "Password is required" })
  password: string;

  constructor(data: IUserLoginBodyDTO) {
    this.email = data.email;
    this.password = data.password;
  }
}

interface IUserRegisterBodyDTO {
  email: string;
  password: string;
  phone_number: string;
}

export class UserRegisterBodyDTO {
  @IsString()
  @IsNotEmpty({ message: "Email is required" })
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty({ message: "Password is required" })
  password: string;

  @IsString()
  @IsNotEmpty({ message: "Phone number is required" })
  phone_number: string;

  constructor(data: IUserRegisterBodyDTO) {
    this.email = data.email;
    this.password = data.password;
    this.phone_number = data.phone_number;
  }
}
