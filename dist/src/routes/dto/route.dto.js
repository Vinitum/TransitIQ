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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRouteDto = exports.CreateRouteDto = void 0;
const class_validator_1 = require("class-validator");
class CreateRouteDto {
    title;
    startLocation;
    endLocation;
    basePrice;
    taxRate;
}
exports.CreateRouteDto = CreateRouteDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRouteDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRouteDto.prototype, "startLocation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateRouteDto.prototype, "endLocation", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRouteDto.prototype, "basePrice", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRouteDto.prototype, "taxRate", void 0);
class UpdateRouteDto {
    title;
    startLocation;
    endLocation;
    basePrice;
    taxRate;
}
exports.UpdateRouteDto = UpdateRouteDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", String)
], UpdateRouteDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", String)
], UpdateRouteDto.prototype, "startLocation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", String)
], UpdateRouteDto.prototype, "endLocation", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateRouteDto.prototype, "basePrice", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_2.IsOptional)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateRouteDto.prototype, "taxRate", void 0);
const class_validator_2 = require("class-validator");
//# sourceMappingURL=route.dto.js.map