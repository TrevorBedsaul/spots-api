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
const repository_1 = require("@loopback/repository");
const spot_repository_1 = require("../repositories/spot.repository");
const rest_1 = require("@loopback/rest");
let SpotsController = class SpotsController {
    constructor(spotRepo) {
        this.spotRepo = spotRepo;
    }
    async getCharitiesList() {
        return await this.spotRepo.find();
    }
    async getCharityByID(id) {
        try {
            return await this.spotRepo.findById(id);
        }
        catch (_a) {
            throw new rest_1.HttpErrors.Unauthorized('spot does not exist');
        }
    }
};
__decorate([
    rest_1.get('/spots'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpotsController.prototype, "getCharitiesList", null);
__decorate([
    rest_1.get('/spots/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SpotsController.prototype, "getCharityByID", null);
SpotsController = __decorate([
    __param(0, repository_1.repository(spot_repository_1.SpotRepository)),
    __metadata("design:paramtypes", [spot_repository_1.SpotRepository])
], SpotsController);
exports.SpotsController = SpotsController;
//# sourceMappingURL=spots.controller.js.map