"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.miraRoutes = void 0;
const controller_1 = require("../../person/controller");
const swagger_1 = require("../swagger");
const createPersonController = new controller_1.CreatePersonController();
const listPersonsController = new controller_1.ListPersonsController();
const deletePersonController = new controller_1.DeletePersonController();
const getPersonController = new controller_1.GetPersonController();
const updatePersonController = new controller_1.UpdatePersonController();
const getAllPersonsController = new controller_1.GetAllPersonsController();
const updatePersonAvatarController = new controller_1.UpdatePersonAvatarController();
async function miraRoutes(app) {
    app.post('', swagger_1.createPersonSchema, createPersonController.handle);
    app.get('', swagger_1.listPersonsSchema, listPersonsController.handle);
    app.get('/:id', swagger_1.getPersonSchema, getPersonController.handle);
    app.get('/all', swagger_1.getAllPersonsSchema, getAllPersonsController.handle);
    app.put('/:id', swagger_1.updatePersonSchema, updatePersonController.handle);
    app.patch('/:id/avatar', swagger_1.updateAvatarPersonSchema, updatePersonAvatarController.handle);
    app.delete('/:id', swagger_1.deletePersonSchema, deletePersonController.handle);
}
exports.miraRoutes = miraRoutes;
