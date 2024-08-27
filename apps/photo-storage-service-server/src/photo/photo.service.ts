import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PhotoServiceBase } from "./base/photo.service.base";

@Injectable()
export class PhotoService extends PhotoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
