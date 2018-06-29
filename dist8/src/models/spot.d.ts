import { Entity } from '@loopback/repository';
export declare class Spot extends Entity {
    id?: number;
    name: string;
    going: number;
    there: number;
    address: string;
    category: string;
    logoUrl: string;
    imageUrl: string;
    getId(): number | undefined;
}
