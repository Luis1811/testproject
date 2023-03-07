const { userLogin } = require('../controllers/auth.controller.js');
const { getAllOwners, getOwner, deleteOwner } = require('../controllers/owner.controller.js')
const { createUser, getAllUsers, updateUser, updateUserRole, updateUserPassword, deleteUser } = require('../controllers/users.controller.js');
const { createBusiness, getBusiness, getBusinessByOwner, updateBusiness, updateBusinessStatus, deleteBusiness } = require('../controllers/business.controller.js');
const { createProduct, createProductsMultiples, getAllProducts, getProductsById, updateProducts, deleteProducts } = require('../controllers/products.controller.js');
const { createTable, getTableById, getAllTables, updateTable, deleteTable } = require('../controllers/table.controller.js')


module.exports = {
    userLogin,
    getAllOwners, getOwner, deleteOwner,
    createUser, getAllUsers, updateUser, updateUserRole, updateUserPassword, deleteUser,
    createBusiness, getBusiness, getBusinessByOwner, updateBusiness, updateBusinessStatus, deleteBusiness,
    createProduct, createProductsMultiples, getAllProducts, getProductsById, updateProducts, deleteProducts,
    createTable, getTableById, getAllTables, updateTable, deleteTable
};
