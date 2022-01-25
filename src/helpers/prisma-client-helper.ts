import { PrismaClient } from '@prisma/client';

export class PrismaClientHelper extends PrismaClient {
  constructor() {
    super();
    this.$connect();
  }
}
