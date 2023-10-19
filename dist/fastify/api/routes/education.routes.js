"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationRoutes = void 0;
const controller_1 = require("../../education/controller");
const swagger_1 = require("../swagger");
const createEducationController = new controller_1.CreateEducationController();
const listEducationsController = new controller_1.ListEducationsController();
const getEducationController = new controller_1.GetEducationController();
const deleteEducationController = new controller_1.DeleteEducationController();
const updateEducationController = new controller_1.UpdateEducationController();
async function educationRoutes(app) {
    app.post('', swagger_1.createEducationSchema, createEducationController.handle);
    app.get('', swagger_1.listEducationsSchema, listEducationsController.handle);
    app.get('/:id', swagger_1.getEducationSchema, getEducationController.handle);
    app.put('/:id', swagger_1.updateEducationSchema, updateEducationController.handle);
    app.delete('/:id', swagger_1.deleteEducationSchema, deleteEducationController.handle);
}
exports.educationRoutes = educationRoutes;
