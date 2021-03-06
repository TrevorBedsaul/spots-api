import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Spot } from '../models/spot';

export class SpotRepository extends DefaultCrudRepository<
    Spot,
    typeof Spot.prototype.id
    > {
    constructor(@inject('datasources.db') protected datasource: DataSource) {
        super(Spot, datasource);
    }
}