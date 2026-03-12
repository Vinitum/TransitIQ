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
exports.DriverOpsController = void 0;
const common_1 = require("@nestjs/common");
const driver_ops_service_1 = require("./driver-ops.service");
const driver_ops_dto_1 = require("./dto/driver-ops.dto");
const swagger_1 = require("@nestjs/swagger");
let DriverOpsController = class DriverOpsController {
    driverOpsService;
    constructor(driverOpsService) {
        this.driverOpsService = driverOpsService;
    }
    getTodayTrips(req) {
        const tenantId = req.user.tenantId;
        const driverId = req.user.id;
        return this.driverOpsService.getTodayTrips(tenantId, driverId);
    }
    updateTripStatus(req, tripId, updateTripStatusDto) {
        const tenantId = req.user.tenantId;
        const driverId = req.user.id;
        return this.driverOpsService.updateTripStatus(tenantId, driverId, tripId, updateTripStatusDto);
    }
    logLocation(req, tripId, locationDto) {
        const tenantId = req.user.tenantId;
        const driverId = req.user.id;
        return this.driverOpsService.logLocation(tenantId, driverId, tripId, locationDto);
    }
    createExpense(req, tripId, createExpenseDto) {
        const tenantId = req.user.tenantId;
        const driverId = req.user.id;
        return this.driverOpsService.createExpense(tenantId, driverId, tripId, createExpenseDto);
    }
};
exports.DriverOpsController = DriverOpsController;
__decorate([
    (0, common_1.Get)('trips/today'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DriverOpsController.prototype, "getTodayTrips", null);
__decorate([
    (0, common_1.Patch)('trips/:tripId/status'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('tripId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, driver_ops_dto_1.UpdateTripStatusDto]),
    __metadata("design:returntype", void 0)
], DriverOpsController.prototype, "updateTripStatus", null);
__decorate([
    (0, common_1.Post)('trips/:tripId/location'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('tripId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, driver_ops_dto_1.LocationDto]),
    __metadata("design:returntype", void 0)
], DriverOpsController.prototype, "logLocation", null);
__decorate([
    (0, common_1.Post)('trips/:tripId/expenses'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('tripId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, driver_ops_dto_1.CreateExpenseDto]),
    __metadata("design:returntype", void 0)
], DriverOpsController.prototype, "createExpense", null);
exports.DriverOpsController = DriverOpsController = __decorate([
    (0, swagger_1.ApiTags)('Driver Operations'),
    (0, common_1.Controller)('driver-ops'),
    __metadata("design:paramtypes", [driver_ops_service_1.DriverOpsService])
], DriverOpsController);
//# sourceMappingURL=driver-ops.controller.js.map