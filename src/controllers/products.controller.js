const { ProductsServices } = require('../services');

const createProduct = async (req, res, next) => {
    try {
        const newProduct = req.body;
        const result = await ProductsServices.createProduct(newProduct);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            message: error.message,
            errorContent: error
        });
    }
};

const createProductsMultiples = async (req, res, next) => {
    try {
        const newProducts = req.body;
        const result = await ProductsServices.createProductsMultiples(newProducts);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            message: error.message,
            errorContent: error
        });
    }
};

const getAllProducts = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await ProductsServices.getAllProducts(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: error.message,
            errorContent: error
        });
    }
};

const getProductsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await ProductsServices.getProductsById(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: error.message,
            errorContent: error
        });
    }
};

const updateProducts = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const result = await ProductsServices.updateProducts(id, product);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: error.message,
            errorContent: error
        });
    }
};

const deleteProducts = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await ProductsServices.deleteProducts(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            message: error.message,
            errorContent: error
        });
    }
};

module.exports = {
    createProduct,
    createProductsMultiples,
    getAllProducts,
    getProductsById,
    updateProducts,
    deleteProducts
};