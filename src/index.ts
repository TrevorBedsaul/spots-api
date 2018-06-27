import {SpotsApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {SpotsApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new SpotsApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
