"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverOpsModule = void 0;
const common_1 = require("@nestjs/common");
const driver_ops_service_1 = require("./driver-ops.service");
const driver_ops_controller_1 = require("./driver-ops.controller");
let DriverOpsModule = class DriverOpsModule {
};
exports.DriverOpsModule = DriverOpsModule;
exports.DriverOpsModule = DriverOpsModule = __decorate([
    (0, common_1.Module)({
        providers: [driver_ops_service_1.DriverOpsService],
        controllers: [driver_ops_controller_1.DriverOpsController]
    })
], DriverOpsModule);
//# sourceMappingURL=driver-ops.module.js.map