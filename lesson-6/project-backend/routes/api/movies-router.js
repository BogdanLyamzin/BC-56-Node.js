import express from "express";

import moviesController from "../../controllers/movies-controller.js";

import {validateBody} from "../../decorators/index.js";

import { movieAddSchema, movieUpdateSchema } from "../../models/Movie.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesController.getAll);

// moviesRouter.get("/:id", moviesController.getById);

moviesRouter.post("/", validateBody(movieAddSchema), moviesController.add);

// moviesRouter.put("/:id", validateBody(movieUpdateSchema), moviesController.updateById);

// moviesRouter.delete("/:id", moviesController.deleteById);

export default moviesRouter;