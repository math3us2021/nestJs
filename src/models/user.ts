import { IsNotEmpty, Length } from "class-validator";

export class CreateUser {
  @IsNotEmpty({
    message: "Name is required"
  })
  @Length(3, 20, {
    message: "Name must be between 3 and 20 characters"
  })
  name: string;
  @IsNotEmpty({
    message: "Email is required"
  })
  email: string;
  @IsNotEmpty({
    message: "function is required"
  })
  function: string;
}