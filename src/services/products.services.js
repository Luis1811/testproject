const { Products } = require("../models");


class ProductsServices {
    static async createProduct(newProduct) {
        try {
            const result = await Products.create(newProduct);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
    static async createProductsMultiples(newProducts) {
        try {
            let count = 0
            newProducts.forEach(product => {
                if(!product.codeQr) product.codeQr = Number(new Date()) + 'L' + count
                count ++
            });
            const result = await Products.bulkCreate(newProducts);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getAllProducts(id) {
        try {
            const result = await Products.findAll({
                where: {
                    businessId: id
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async updateProducts(id, updateProduct) {
        try {
            const products = {}
            for (let key in updateProduct) {
                if (updateProduct[key] !== null) products[key] = updateProduct[key]
            }
            const result = await Products.update(products, {
                where: { id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async deleteProducts(id) {
        try {
            const result = await Products.destroy({
                where: { id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductsServices;