import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";

interface IVolunteerLoginDTO {
  id: string;
  volunteer_id: number;
  role_id: string;
  created_at: Date;
  updated_at: Date;
}

export class VolunteerLoginDTO {
  @IsString()
  id: string;

  @IsNumber()
  volunteer_id: number;

  @IsString()
  role_id: string;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;

  constructor(data: IVolunteerLoginDTO) {
    this.id = data.id;
    this.volunteer_id = data.volunteer_id;
    this.role_id = data.role_id;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}

interface IVolunteerLoginBodyDTO {
  volunteer_id: number;
  password: string;
}

export class VolunteerLoginBodyDTO {
  @IsNotEmpty({ message: "ID is required" })
  @IsNumber()
  volunteer_id: number;

  @IsString()
  @IsNotEmpty({ message: "Password is required" })
  password: string;

  constructor(data: IVolunteerLoginBodyDTO) {
    this.volunteer_id = data.volunteer_id;
    this.password = data.password;
  }
}

interface IVolunteerRegisterBodyDTO {
  volunteer_id: number;
  password: string;
  role_id: string;
}

export class VolunteerRegisterBodyDTO {
  @IsNumber()
  @IsNotEmpty({ message: "ID is required" })
  volunteer_id: number;

  @IsString()
  @IsNotEmpty({ message: "Password is required" })
  password: string;

  @IsString()
  @IsNotEmpty({ message: "Role is required" })
  role_id: string;

  constructor(data: IVolunteerRegisterBodyDTO) {
    this.volunteer_id = data.volunteer_id;
    this.password = data.password;
    this.role_id = data.role_id;
  }
}
