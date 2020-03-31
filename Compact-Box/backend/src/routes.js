const express = require("express");
const routes = express.Router();

const UsersController = require("./controller/UserController");
const DevicesController = require("./controller/DevicesController");

routes.post("/session", (request, response) => {
    return response.json({msg: "Por enquanto tá tudo tranquilo"});
});

routes.post("/users", UsersController.create);

// CRUD Devices
routes.post("/devices", DevicesController.create);
routes.get("/devices", DevicesController.read);
routes.put("/devices/:id", DevicesController.update);
routes.delete("/devices/:id");

module.exports = routes;
