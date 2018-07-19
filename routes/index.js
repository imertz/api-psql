import express from "express";
const router = express.Router();

import db from "../queries.js";
import Clients from "../queries/Clients";

// Puppies Routes
router.get("/api/puppies", db.getAllPuppies);
router.get("/api/puppies/:id", db.getSinglePuppy);
router.post("/api/puppies", db.createPuppy);
router.put("/api/puppies/:id", db.updatePuppy);
router.delete("/api/puppies/:id", db.removePuppy);

//Clients Routes
router.get("/api/clients", Clients.getAllClients);
router.get("/api/clients/:id", Clients.getSingleClient);
router.post("/api/clients", Clients.createClient);
router.put("/api/clients/:id", Clients.updateClient);
router.delete("/api/clients/:id", Clients.removeClient);

export default router;
