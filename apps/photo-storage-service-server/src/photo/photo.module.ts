import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PhotoModuleBase } from "./base/photo.module.base";
import { PhotoService } from "./photo.service";
import { PhotoController } from "./photo.controller";
import { PhotoResolver } from "./photo.resolver";

@Module({
  imports: [PhotoModuleBase, forwardRef(() => AuthModule)],
  controllers: [PhotoController],
  providers: [PhotoService, PhotoResolver],
  exports: [PhotoService],
})
export class PhotoModule {}
