import { repository, WhereBuilder } from "@loopback/repository";
import { request } from "http";
import { UserRepository } from "../repositories/user.repository";
import { SpotRepository } from "../repositories/spot.repository";
import { post, get, requestBody, param, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import { Spot } from "../models/spot";

export class SpotsController {

    constructor(
        @repository(SpotRepository) private spotRepo: SpotRepository, 
    ) { }

    @get('/spots')
    async getCharitiesList(): Promise<Array<Spot>> {
        return await this.spotRepo.find();
    }

    @get('/spots/{id}')
    async getCharityByID(@param.path.number('id') id: number): Promise<Spot> {
        try {
            return await this.spotRepo.findById(id);
        }
        catch{
            throw new HttpErrors.Unauthorized('spot does not exist');
        }
    }
}