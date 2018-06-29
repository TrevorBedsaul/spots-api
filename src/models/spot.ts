import { Entity, property, model } from '@loopback/repository';

@model({
    name: "spot"
})
export class Spot extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    name: string;

    @property({
        type: 'number',
        required: true
    })
    going: number;

    @property({
        type: 'number',
        required: true,
    })
    there: number;

    @property({
        type: 'string',
        required: true
    })
    address: string;

    
    @property({
        type: 'string',
        required: true
    })
    category: string;

    
    @property({
        type: 'string',
        required: true
    })
    logoUrl: string;

    
    @property({
        type: 'string',
        required: true
    })
    imageUrl: string;

    getId() {
        return this.id;
    }
}