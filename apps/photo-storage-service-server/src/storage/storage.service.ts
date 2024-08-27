import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StorageServiceBase } from "./base/storage.service.base";

@Injectable()
export class StorageService extends StorageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
