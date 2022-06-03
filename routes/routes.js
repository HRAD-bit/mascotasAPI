module.exports = (app) => {
  const mascotas = require("../controllers/mascotas.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", mascotas.create);
  // Retrieve all Tutorials
  router.get("/", mascotas.findAll);
  // Retrieve a single Tutorial with id
  router.get("/:id", mascotas.findOne);
  // Update a Tutorial with id
  router.put("/:id", mascotas.update);
  // Delete a Tutorial with id
  router.delete("/:id", mascotas.delete);
  // Delete all Tutorials
  router.delete("/", mascotas.deleteAll);
  app.use("/api/mascotas", router);
};
