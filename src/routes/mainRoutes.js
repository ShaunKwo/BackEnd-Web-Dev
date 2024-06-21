const express = require('express');
const router = express.Router();

const taskRoutes = require('./taskRoutes');
const taskProgressRoutes = require('./taskProgressRoutes');
const userRoutes = require('./userRoutes');
const questsRoutes =require('./questsRoutes');
const questProgressRoutes= require('./questProgressRoutes');
const itemsRoutes= require('./itemsRoutes');
const inventoryRoutes=require('./inventoryRoutes');
const planetRoutes=require('./planetRoutes');
const coloniesRoutes=require('./coloniesRoutes');
const abilityRoutes= require('./abilityRoutes')


router.use("/tasks", taskRoutes);
router.use("/task_progress", taskProgressRoutes);
router.use("/users", userRoutes);
router.use("/quest", questsRoutes);
router.use("/questProgress", questProgressRoutes);
router.use("/item", itemsRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/planet", planetRoutes);
router.use("/colonies", coloniesRoutes);
router.use("/ability", abilityRoutes);
module.exports = router;