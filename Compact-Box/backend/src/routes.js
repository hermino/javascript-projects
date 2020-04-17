const express = require("express");
const routes = express.Router();

const UsersController = require("./controller/UserController");
const DevicesController = require("./controller/DevicesController");

routes.post("/session", (request, response) => {
    return response.json({msg: "Por enquanto tá tudo tranquilo"});
});

routes.post("/users", UsersController.create);
routes.get("/users", UsersController.read);

// CRUD Devices
routes.post("/devices", DevicesController.create);
routes.get("/devices", DevicesController.read);
routes.put("/devices/:idDevice", DevicesController.update);
routes.put("/devices/:idDevice/:comodoDevice", DevicesController.update);

routes.delete("/devices/:id", DevicesController.delete);

module.exports = routes;
