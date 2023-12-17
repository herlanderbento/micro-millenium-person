"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personRoutes = void 0;
const controller_1 = require("../../person/controller");
const swagger_1 = require("../swagger");
const application_1 = require("../../../core/person/application");
const infra_1 = require("../../../core/person/infra");
const createPersonController = new controller_1.CreatePersonController(new application_1.CreatePersonUseCase(new infra_1.PersonPrismaRepository()));
const listPersonsController = new controller_1.ListPersonsController();
const deletePersonController = new controller_1.DeletePersonController();
const getPersonController = new controller_1.GetPersonController();
const updatePersonController = new controller_1.UpdatePersonController();
const getAllPersonsController = new controller_1.GetAllPersonsController();
const updatePersonAvatarController = new controller_1.UpdatePersonAvatarController();
async function personRoutes(app) {
    app.post('', swagger_1.createPersonSchema, createPersonController.handle);
    app.get('', swagger_1.listPersonsSchema, listPersonsController.handle);
    app.get('/:id', swagger_1.getPersonSchema, getPersonController.handle);
    app.get('/all', swagger_1.getAllPersonsSchema, getAllPersonsController.handle);
    app.put('/:id', swagger_1.updatePersonSchema, updatePersonController.handle);
    app.patch('/:id/avatar', swagger_1.updateAvatarPersonSchema, updatePersonAvatarController.handle);
    app.delete('/:id', swagger_1.deletePersonSchema, deletePersonController.handle);
}
exports.personRoutes = personRoutes;
