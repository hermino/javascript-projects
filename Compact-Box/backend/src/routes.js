const express = require("express");
const routes = express.Router();

routes.post("/session", (request, response) => {
    return response.json({msg: "Por enquanto tá tudo tranquilo"});
});

routes.post("/users");

// CRUD Devices
routes.post("/devices");
routes.get("/devices");
routes.put("/devices");
routes.delete("/devices");

module.exports = routes;
