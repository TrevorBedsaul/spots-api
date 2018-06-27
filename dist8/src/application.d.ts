import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
import { Booter, Binding } from '@loopback/boot';
declare const SpotsApiApplication_base: (new (...args: any[]) => {
    [x: string]: any;
    projectRoot: string;
    bootOptions?: import("../../../../../../../Users/student/Desktop/HTML/iX/spots-api/node_modules/@loopback/boot/dist8/src/interfaces").BootOptions | undefined;
    boot(): Promise<void>;
    booters(...booterCls: import("../../../../../../../Users/student/Desktop/HTML/iX/spots-api/node_modules/@loopback/context/dist8/src/value-promise").Constructor<Booter>[]): Binding<any>[];
    component(component: import("../../../../../../../Users/student/Desktop/HTML/iX/spots-api/node_modules/@loopback/context/dist8/src/value-promise").Constructor<{}>): void;
    mountComponentBooters(component: import("../../../../../../../Users/student/Desktop/HTML/iX/spots-api/node_modules/@loopback/context/dist8/src/value-promise").Constructor<{}>): void;
}) & typeof RestApplication;
export declare class SpotsApiApplication extends SpotsApiApplication_base {
    constructor(options?: ApplicationConfig);
    start(): Promise<void>;
}
export {};
