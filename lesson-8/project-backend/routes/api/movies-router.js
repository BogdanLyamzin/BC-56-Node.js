import express from "express";

import moviesController from "../../controllers/movies-controller.js";

import {validateBody} from "../../decorators/index.js";

import { movieAddSchema, movieUpdateSchema, movieUpdateFavoriteSchema } from "../../models/Movie.js";

import {isValidId} from "../../middlewares/index.js"

const moviesRouter = express.Router();

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id", isValidId, moviesController.getById);

moviesRouter.post("/", validateBody(movieAddSchema), moviesController.add);

moviesRouter.put("/:id", isValidId, validateBody(movieUpdateSchema), moviesController.updateById);

moviesRouter.patch("/:id/favorite", isValidId, validateBody(movieUpdateFavoriteSchema), moviesController.updateFavorite)

moviesRouter.delete("/:id", isValidId, moviesController.deleteById);

export default moviesRouter;