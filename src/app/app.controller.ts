import { IAppController, dependency } from '@foal/core';

import { PrismaService } from './services'

export class AppController implements IAppController {
  @dependency
  prisma: PrismaService

  async init() {
    await this.prisma.$connect()
  }
}
