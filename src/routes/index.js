import express from "express";
const router = express.Router();

import db from "../queries.js";
import Clients from "../queries/Clients";

// Puppies Routes
router.get("/puppies", db.getAllPuppies);
router.get("/puppies/:id", db.getSinglePuppy);
router.post("/puppies", db.createPuppy);
router.put("/puppies/:id", db.updatePuppy);
router.delete("/puppies/:id", db.removePuppy);

//Clients Routes
router.get("/clients", Clients.getAllClients);
router.get("/clients/:id", Clients.getSingleClient);
router.post("/clients", Clients.createClient);
router.put("/clients/:id", Clients.updateClient);
router.delete("/clients/:id", Clients.removeClient);

export default router;
