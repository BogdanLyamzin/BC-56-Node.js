import Movie from "../models/Movie.js";

import { HttpError } from "../helpers/index.js";

import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res) => {
    const result = await Movie.find();
    res.json(result);
}

// const getById = async (req, res) => {
//     const { id } = req.params;
//     const result = await movieService.getMovieById(id);
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }
//     res.json(result);
// }

const add = async (req, res) => {
    const result = await Movie.create(req.body);
    res.status(201).json(result)
}

// const updateById = async (req, res) => {
//     const { id } = req.params;
//     const result = await movieService.updateMovieById(id, req.body);
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }

//     res.json(result);
// }

// const deleteById = async (req, res) => {
//     const { id } = req.params;
//     const result = await movieService.deleteById(id);
//     if (!result) {
//         throw HttpError(404, `Movie with id=${id} not found`);
//     }

//     // res.status(204).send() - response.body not send

//     res.json({
//         message: "Delete success"
//     })
// }

export default {
    getAll: ctrlWrapper(getAll),
    // getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    // updateById: ctrlWrapper(updateById),
    // deleteById: ctrlWrapper(deleteById),
}
