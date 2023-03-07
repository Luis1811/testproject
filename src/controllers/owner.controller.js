const { OwnerServices } = require('../services');

const getAllOwners = async (req, res, next) => {
    try {
        const result = await OwnerServices.getAllOwners();
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al obtener los usuarios',
            errorContent: error
        })
    }
};

const getOwner = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await OwnerServices.getOwnerById(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al obtener los usuarios',
            errorContent: error
        })
    }
};

const deleteOwner = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await OwnerServices.deleteOwner(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al eliminar',
            errorContent: error
        })
    }
};

module.exports = { getAllOwners, getOwner, deleteOwner };