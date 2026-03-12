"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesController = void 0;
const common_1 = require("@nestjs/common");
const routes_service_1 = require("./routes.service");
const route_dto_1 = require("./dto/route.dto");
const swagger_1 = require("@nestjs/swagger");
let RoutesController = class RoutesController {
    routesService;
    constructor(routesService) {
        this.routesService = routesService;
    }
    create(req, createRouteDto) {
        const tenantId = req.user?.tenantId || 'dummy-tenant-id';
        return this.routesService.create(tenantId, createRouteDto);
    }
    findAll(req) {
        const tenantId = req.user?.tenantId || 'dummy-tenant-id';
        return this.routesService.findAll(tenantId);
    }
    findOne(req, id) {
        const tenantId = req.user?.tenantId || 'dummy-tenant-id';
        return this.routesService.findOne(tenantId, id);
    }
    update(req, id, updateRouteDto) {
        const tenantId = req.user?.tenantId || 'dummy-tenant-id';
        return this.routesService.update(tenantId, id, updateRouteDto);
    }
    remove(req, id) {
        const tenantId = req.user?.tenantId || 'dummy-tenant-id';
        return this.routesService.remove(tenantId, id);
    }
};
exports.RoutesController = RoutesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, route_dto_1.CreateRouteDto]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, route_dto_1.UpdateRouteDto]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "remove", null);
exports.RoutesController = RoutesController = __decorate([
    (0, swagger_1.ApiTags)('Routes'),
    (0, common_1.Controller)('routes'),
    __metadata("design:paramtypes", [routes_service_1.RoutesService])
], RoutesController);
//# sourceMappingURL=routes.controller.js.map