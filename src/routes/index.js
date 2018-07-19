import express from 'express';
const router = express.Router()

import db from '../queries'



router.get('/puppies', db.getAllPuppies);
router.get('/puppies/:id', db.getSinglePuppy);
router.post('/puppies', db.createPuppy);
router.put('/puppies/:id', db.updatePuppy);
router.delete('/puppies/:id', db.removePuppy);

export default router
