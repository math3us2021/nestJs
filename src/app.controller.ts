import { Body, Controller, Post } from "@nestjs/common";
import { CreateUser } from "./models/user";
import { UserRepository } from "./repository/userRepository";

@Controller()
export class AppController {
  constructor(private userRepository: UserRepository) {}
  @Post('user')

  async getHello(@Body() body: CreateUser) {
    console.log(body);
      const {name, email, function: memberFunction} = body;
      await this.userRepository.create(name, email, memberFunction);
  }
}
