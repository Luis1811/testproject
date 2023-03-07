const { Owners, Business } = require('../models');
const BusinessServices = require('./business.services');

class OwnerServices {
    static async getAllOwners() {
        try {
            const result = await Owners.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getOwnerById(id) {
        try {
            const result = await Owners.findByPk(id);
            if (!result) throw new Error('Owner does not exist');
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async deleteOwner(ownerId) {
        try {
            const business = await Business.findAll({ where: { ownerId } })
            business.map(async busines => await BusinessServices.deleteBusiness(busines.id));
            await Owners.destroy({ where: { id: ownerId } })
            return { ownersDeleted: true };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OwnerServices;