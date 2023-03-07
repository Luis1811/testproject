const { } = require('../services');

const createTable = async (req, res, next) => {
    try {
        const newUser = req.body;

        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al crear',
            errorContent: error
        })
    }
};

const getTableById = async (req, res, next) => {
    try {
        const id = req.params.id;

        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al obtener los usuarios',
            errorContent: error
        })
    }
};

const getAllTables = async (req, res, next) => {
    try {

        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al obtener los usuarios',
            errorContent: error
        })
    }
};

const updateTable = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;

        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al actualizar',
            errorContent: error
        })
    }
};

const deleteTable = async (req, res, next) => {
    try {
        const id = req.params.id;

        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al eliminar',
            errorContent: error
        })
    }
};

module.exports = { createTable, getTableById, getAllTables, updateTable, deleteTable }