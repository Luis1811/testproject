const { UserServices } = require('../services');

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.createUser(newUser);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al crear el usuario',
            errorContent: error
        })
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const result = await UserServices.getAllUsers();
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al obtener los usuarios',
            errorContent: error
        })
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = req.body;
        const result = await UserServices.updateUser(id, user);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al actualizar el usuario',
            errorContent: error
        })
    }
};

const updateUserRole = async (req, res, next) => {
    try {
        const { id } = req.params;
        const update = req.body;
        const result = await UserServices.updateUserRole(id, update);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al actualizar el rol del usuario',
            errorContent: error
        })
    }
};

const updateUserPassword = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await UserServices.updateUserPassword(id, data);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al actualizar la contraseña del usuario',
            errorContent: error
        })
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const result = await UserServices.deleteUser(id, userId);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: 'Error al eliminar el usuario',
            errorContent: error
        })
    }
};

module.exports = { createUser, getAllUsers, updateUser, updateUserRole, updateUserPassword, deleteUser }