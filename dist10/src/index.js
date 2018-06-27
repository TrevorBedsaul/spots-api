"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.SpotsApiApplication = application_1.SpotsApiApplication;
async function main(options) {
    const app = new application_1.SpotsApiApplication(options);
    await app.boot();
    await app.start();
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map