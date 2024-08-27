/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { StorageService } from "../storage.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { StorageCreateInput } from "./StorageCreateInput";
import { Storage } from "./Storage";
import { StorageFindManyArgs } from "./StorageFindManyArgs";
import { StorageWhereUniqueInput } from "./StorageWhereUniqueInput";
import { StorageUpdateInput } from "./StorageUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class StorageControllerBase {
  constructor(
    protected readonly service: StorageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Storage })
  @nestAccessControl.UseRoles({
    resource: "Storage",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createStorage(
    @common.Body() data: StorageCreateInput
  ): Promise<Storage> {
    return await this.service.createStorage({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        capacity: true,
        createdAt: true,
        id: true,
        location: true,
        updatedAt: true,
        usedSpace: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Storage] })
  @ApiNestedQuery(StorageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Storage",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async storages(@common.Req() request: Request): Promise<Storage[]> {
    const args = plainToClass(StorageFindManyArgs, request.query);
    return this.service.storages({
      ...args,
      select: {
        capacity: true,
        createdAt: true,
        id: true,
        location: true,
        updatedAt: true,
        usedSpace: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Storage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Storage",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async storage(
    @common.Param() params: StorageWhereUniqueInput
  ): Promise<Storage | null> {
    const result = await this.service.storage({
      where: params,
      select: {
        capacity: true,
        createdAt: true,
        id: true,
        location: true,
        updatedAt: true,
        usedSpace: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Storage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Storage",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateStorage(
    @common.Param() params: StorageWhereUniqueInput,
    @common.Body() data: StorageUpdateInput
  ): Promise<Storage | null> {
    try {
      return await this.service.updateStorage({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          capacity: true,
          createdAt: true,
          id: true,
          location: true,
          updatedAt: true,
          usedSpace: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Storage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Storage",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteStorage(
    @common.Param() params: StorageWhereUniqueInput
  ): Promise<Storage | null> {
    try {
      return await this.service.deleteStorage({
        where: params,
        select: {
          capacity: true,
          createdAt: true,
          id: true,
          location: true,
          updatedAt: true,
          usedSpace: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
