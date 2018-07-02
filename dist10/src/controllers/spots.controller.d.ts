import { SpotRepository } from "../repositories/spot.repository";
import { Spot } from "../models/spot";
export declare class SpotsController {
    private spotRepo;
    constructor(spotRepo: SpotRepository);
    getCharitiesList(): Promise<Array<Spot>>;
    getCharityByID(id: number): Promise<Spot>;
}
