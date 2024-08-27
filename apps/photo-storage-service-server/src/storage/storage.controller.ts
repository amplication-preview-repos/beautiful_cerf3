import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StorageService } from "./storage.service";
import { StorageControllerBase } from "./base/storage.controller.base";

@swagger.ApiTags("storages")
@common.Controller("storages")
export class StorageController extends StorageControllerBase {
  constructor(
    protected readonly service: StorageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
