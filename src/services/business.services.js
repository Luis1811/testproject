const handleError = require('../middlewares/error.middleware');
const { Business, Users, Owners, Roles, Categories, Areas, Tables, Products, Expenses, Providers, ProductsInTable, PaymentsTypes, ExpensesTypes, Uniforms } = require('../models');

class BusinessServices {
    static async createBusiness(id, newBusiness) {
        try {
            let ownerId = null
            const { email, password, phoneNumber, owner, areas, categories } = newBusiness;
            if (id !== ",") {
                const ownerFound = await Owners.findOne({ where: { id } });
                ownerId = ownerFound.id
            } else {
                const newOwner = { name: owner.split(' ')[0], surname: owner.split(' ')[1], email, password, phoneNumber };
                const ownerCreated = await Owners.create(newOwner);
                ownerId = ownerCreated.id
            }

            const newAreas = areas;
            const newCategories = categories;

            const roles = [
                { role: 'admin', permissions: ['all'] },
                { role: 'cashier', permissions: ['tables', 'kitchen', 'takeoutOrders', 'menu', 'inventory', 'dailyClosing', 'expenses', 'clients', 'invoices'] },
                { role: 'waiter', permissions: ['tables', 'kitchen', 'takeoutOrders', 'clients'] },
                { role: 'cook', permissions: ['kitchen'] }
            ];

            ['email', 'password', 'phoneNumber', 'owner', 'areas', 'categories'].forEach(key => delete newBusiness[key])

            const business = await Business.create({ ...newBusiness, ownerId: ownerId });

            const promises = [
                Categories.bulkCreate(newCategories.map(category => ({ name: category, businessId: business.id }))),
                Roles.bulkCreate(roles.map(role => ({ name: role.role, permissions: role.permissions, businessId: business.id }))),
            ];

            const promisesAll = await Promise.all(promises);

            for (const area of newAreas) {
                const { name, numberTables } = area;
                const { id } = await Areas.create({ name, numberTables, businessId: business.id });
                for (let i = 1; i <= area.numberTables; i++) {
                    await Tables.create({ name: `Mesa ${i}`, areaId: id, businessId: business.id });
                }
            }

            return { business: business, owner: promisesAll[0] };
        } catch (error) {
            throw error
        }
    }
    static async getBusiness(id) {
        try {
            const result = await Business.findByPk(id, {
                include: [
                    {
                        model: Owners,
                        as: 'owner',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: Categories,
                        as: 'categories',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: Areas,
                        as: 'areas',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: Roles,
                        as: 'roles',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: Tables,
                        as: 'tables',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        include: [
                            {
                                model: ProductsInTable,
                                as: 'productsInTable',
                                attributes: {
                                    exclude: ['createdAt', 'updatedAt']
                                }
                            }
                        ]
                    },
                    {
                        model: Products,
                        as: 'products',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: Expenses,
                        as: 'expenses',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        include: [
                            {
                                model: ExpensesTypes,
                                as: 'expenseTypeName',
                                attributes: {
                                    exclude: ['createdAt', 'updatedAt']
                                }
                            },
                            {
                                model: PaymentsTypes,
                                as: 'paymentTypeName',
                                attributes: {
                                    exclude: ['createdAt', 'updatedAt']
                                }
                            }
                        ]
                    },
                    {
                        model: Providers,
                        as: 'providers',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: Products,
                        as: 'products',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    },
                ]
            });
            if (!result) throw new Error('Business does not exist');
            if (!result.isActive) return result.isActive;
            return result;
        } catch (error) {
            throw error
        }
    }
    static async getBusinessByOwner(id) {
        try {
            const result = await Business.findAll({
                where: { owner_id: id },
                attributes: {
                    exclude: ["createdAt", "updatedAt", "owner_id", "ownerId"]
                }
            });
            if (result.length <= 0) throw new Error('Owner or Business does not exist');
            return result;
        } catch (error) {
            throw error
        }
    }
    static async updateBusiness(id, updateBusiness) {
        try {
            if (updateBusiness.isActive) throw new Error('The isActive property is not valid for this user');
            const promises = [
                Business.update(updateBusiness, { where: { id } }),
                Business.findByPk(id)
            ];
            const promisesAll = await Promise.all(promises);

            if (!promisesAll[1]) throw new Error('The business does not exist');
            if (promisesAll[0][0] !== 1) throw new Error('Business not updated');
            return { message: 'Business updated successfully' };
        } catch (error) {
            throw error
        }
    }
    static async updateBusinessStatus(id, isActive) {
        try {
            const result = await Business.update(isActive, { where: { id } });
            return { message: 'Business updated successfully' };
        } catch (error) {
            throw error
        }
    }
    static async deleteBusiness(id) {
        try {
            const promisesDelete = [
                Uniforms.destroy({ where: { businessId: id } }),
                Categories.destroy({ where: { businessId: id } }),
                ExpensesTypes.destroy({ where: { businessId: id } }),
                PaymentsTypes.destroy({ where: { businessId: id } }),
                ProductsInTable.destroy({ where: { businessId: id } }),
                Areas.destroy({ where: { businessId: id } }),
                Roles.destroy({ where: { businessId: id } }),
                Tables.destroy({ where: { businessId: id } }),
                Products.destroy({ where: { businessId: id } }),
                Providers.destroy({ where: { businessId: id } }),
                Expenses.destroy({ where: { businessId: id } }),
                Users.destroy({ where: { businessId: id } }),
                Business.destroy({ where: { id } })
            ]

            const promisesAll = await Promise.all(promisesDelete);

            return { message: 'Business deleted successfully' };
        } catch (error) {
            throw error
        }
    }
}

module.exports = BusinessServices;