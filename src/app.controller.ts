import { Body, Controller, Get } from "@nestjs/common";
import { PrismaService } from "./database/prisma.service";
import { randomUUID } from 'node:crypto';
import { CreateUser } from "./models/user";

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}
  @Get('user')

  async getHello(@Body() body: CreateUser) {
    console.log(body);
      const {name, email, function: memberFunction} = body;
    const member = await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        email,
        function: memberFunction ,
      }
    });
    return {
      member,
    }
  }
}
