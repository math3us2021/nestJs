import { IsNotEmpty } from "class-validator";

export class CreateUser {
  @IsNotEmpty({
    message: 'Name is required',
  })
  name: string;
  @IsNotEmpty({
    message: 'Email is required',
  })
  email: string;
  @IsNotEmpty({
    message: 'function is required',
  })
  function: string;
}