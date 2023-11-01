import express from "express";

import moviesController from "../../controllers/movies-controller.js";

import {validateBody} from "../../decorators/index.js";

import { movieAddSchema, movieUpdateSchema, movieUpdateFavoriteSchema } from "../../models/Movie.js";

import {authenticate, upload, isValidId} from "../../middlewares/index.js"

const moviesRouter = express.Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id", isValidId, moviesController.getById);

// upload.fields([{name: "poster", maxCount: 1}])
// upload.array("poster", 8)
moviesRouter.post("/", upload.single("poster"), validateBody(movieAddSchema), moviesController.add);

moviesRouter.put("/:id", isValidId, validateBody(movieUpdateSchema), moviesController.updateById);

moviesRouter.patch("/:id/favorite", isValidId, validateBody(movieUpdateFavoriteSchema), moviesController.updateFavorite)

moviesRouter.delete("/:id", isValidId, moviesController.deleteById);

export default moviesRouter;