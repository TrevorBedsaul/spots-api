import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Spot } from '../models/spot';
export declare class SpotRepository extends DefaultCrudRepository<Spot, typeof Spot.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
