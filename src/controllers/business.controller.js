const { BusinessServices } = require('../services');

const createBusiness = async (req, res, next) => {
    try {
        const id = req.params.id;
        const newBusiness = req.body;
        const result = await BusinessServices.createBusiness(id, newBusiness);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            message: error.message,
            errorContent: error
        })
    }
};

const getBusiness = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await BusinessServices.getBusiness(id);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(401).json("Business is not active")
        }
    } catch (error) {
        next({
            status: 404,
            message: error.message,
            errorContent: error
        })
    }
};

const getBusinessByOwner = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await BusinessServices.getBusinessByOwner(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 404,
            message: error.message,
            errorContent: error
        })
    }
}

const updateBusiness = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updtaeBusiness = req.body;
        const result = await BusinessServices.updateBusiness(id, updtaeBusiness);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 404,
            message: error.message,
            errorContent: error
        })
    }
};

const updateBusinessStatus = async (req, res, next) => {
    try {
        const id = req.params.id;
        const newStatus = req.body;
        const result = await BusinessServices.updateBusinessStatus(id, newStatus);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 404,
            message: error.message,
            errorContent: error
        })
    }
}

const deleteBusiness = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await BusinessServices.deleteBusiness(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 404,
            message: error.message,
            errorContent: error
        })
    }
};

module.exports = {
    createBusiness,
    getBusiness,
    getBusinessByOwner,
    updateBusiness,
    updateBusinessStatus,
    deleteBusiness
};