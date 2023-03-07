const { Areas, Business, Categories, Expenses, Owners, ExpensesTypes, PaymentsTypes, Products, ProductsInTable, Providers, Roles, Tables, Uniforms, Users } = require('./index');

const initModels = () => {

    /*---------------------------------------------------------------------*/
    /*------------------------- Owners -------------------------------------*/
    /*---------------------------------------------------------------------*/

    Owners.hasMany(Business, {as: 'business', foreignKey: 'owner_id' });
    Business.belongsTo(Owners, {as: 'owner', foreignKey: 'owner_id' });

    /*---------------------------------------------------------------------*/
    /*------------------------- Business ----------------------------------*/
    /*---------------------------------------------------------------------*/

    Business.hasMany(Areas, {as: 'areas', foreignKey: 'business_id' });
    Areas.belongsTo(Business, {as: 'business', foreignKey: 'business_id' });

    Business.hasMany(Users, {as: 'users', foreignKey: 'business_id' });
    Users.belongsTo(Business, {as: 'business', foreignKey: 'business_id' });

    Business.hasMany(Products, {as: 'products', foreignKey: 'business_id' });
    Products.belongsTo(Business, {as: 'business', foreignKey: 'business_id' });

    Business.hasMany(Providers, {as: 'providers', foreignKey: 'business_id' });
    Providers.belongsTo(Business, {as: 'business', foreignKey: 'business_id' });

    Business.hasMany(Tables, {as: 'tables', foreignKey: 'business_id' });
    Tables.belongsTo(Business, {as: 'business', foreignKey: 'business_id' });

    Business.hasMany(Uniforms, {as: 'uniforms', foreignKey: 'business_id' });
    Uniforms.belongsTo(Business, {as: 'business', foreignKey: 'business_id' });

    Business.hasMany(Expenses, {as: 'expenses', foreignKey: 'business_id' });
    Expenses.belongsTo(Business, {as: 'business', foreignKey: 'business_id' });

    Business.hasMany(ExpensesTypes, {as: 'expensesTypes', foreignKey: 'business_id' });
    ExpensesTypes.belongsTo(Business, {as: 'business', foreignKey: 'business_id' });

    Business.hasMany(PaymentsTypes, {as: 'paymentsTypes', foreignKey: 'business_id' });
    PaymentsTypes.belongsTo(Business, {as: 'business', foreignKey: 'business_id' });

    Business.hasMany(Roles, {as: 'roles', foreignKey: 'business_id' });
    Roles.belongsTo(Business, {as: 'business', foreignKey: 'business_id' });

    Business.hasMany(Categories, {as: 'categories', foreignKey: 'business_id' });
    Categories.belongsTo(Business, {as: 'business', foreignKey: 'business_id' });

    Business.hasMany(ProductsInTable, {as: 'productsInTable', foreignKey: 'business_id' });
    ProductsInTable.belongsTo(Business, {as: 'business', foreignKey: 'business_id' });

    /*------------------------- Areas - Tables ----------------------------------*/

    Tables.belongsTo(Areas, {as: 'area', foreignKey: 'area_id' });
    Areas.hasMany(Tables, {as: 'tables', foreignKey: 'area_id' });

    /*------------------------- Users - Roles ----------------------------------*/
    
    Users.belongsTo(Roles, {as: 'role', foreignKey: 'role_id' });
    Roles.hasMany(Users, {as: 'user', foreignKey: 'role_id' });

    /*------------------------- Users - Uniforms ----------------------------------*/
    
    Uniforms.belongsTo(Users, {as: 'person', foreignKey: 'user_id' });
    Users.hasOne(Uniforms, {as: 'uniform', foreignKey: 'user_id' });

    /*------------------------- Products - ProductsInTable ----------------------------------*/

    ProductsInTable.belongsTo(Products, {as: 'product', foreignKey: 'product_id' });
    Products.hasMany(ProductsInTable, {as: 'productsInTable', foreignKey: 'product_id' });

    /*------------------------- Tables - ProductsInTable ----------------------------------*/
    
    ProductsInTable.belongsTo(Tables, {as: 'table', foreignKey: 'table_id' });
    Tables.hasMany(ProductsInTable, {as: 'productsInTable', foreignKey: 'table_id' });

    /*------------------------- Users - ProductsInTable ----------------------------------*/

    ProductsInTable.belongsTo(Users, {as: 'creator', foreignKey: 'creator_id' });
    Users.hasMany(ProductsInTable, {as: 'productsInTable', foreignKey: 'creator_id' });

    /*------------------------- Expenses - Providers ----------------------------------*/

    Expenses.belongsTo(Providers, {as: 'provider', foreignKey: 'vendor_id' });
    Providers.hasMany(Expenses, {as: 'expenses', foreignKey: 'vendor_id' });

    /*------------------------- Expenses - Users ----------------------------------*/

    Expenses.belongsTo(Users, {as: 'user', foreignKey: 'user_id' });
    Users.hasMany(Expenses, {as: 'expenses', foreignKey: 'user_id' });

    /*------------------------- Expenses - ExpensesTypes ----------------------------------*/

    Expenses.belongsTo(ExpensesTypes, {as: 'expenseTypeName', foreignKey: 'expenses_type' });
    ExpensesTypes.hasMany(Expenses, {as: 'expense', foreignKey: 'expenses_type' });

    /*------------------------- Expenses - PaymentsTypes ----------------------------------*/

    Expenses.belongsTo(PaymentsTypes, {as: 'paymentTypeName', foreignKey: 'payment_type' });
    PaymentsTypes.hasMany(Expenses, {as: 'expense', foreignKey: 'payment_type' });

    /*------------------------- Products - Categories ----------------------------------*/

    Products.belongsTo(Categories, {as: 'category', foreignKey: 'category_id' });
    Categories.hasMany(Products, {as: 'products', foreignKey: 'category_id' });
};

module.exports = initModels;
