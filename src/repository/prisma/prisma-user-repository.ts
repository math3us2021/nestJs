import { UserRepository } from "../userRepository";
import { PrismaService } from "../../database/prisma.service";
import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {
  }

  async create(name: string, email: string, memberFunction: string): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        email,
        function: memberFunction

      }
    });
  }
}