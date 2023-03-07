const { Users, Roles } = require("../models");


class UserServices {
    static async createUser(newUser) {
        try {
            const role = await Roles.findAll();
            if(role.length === 0) {
                const roles = ['owner', 'admin', 'camarero', 'cocinero'];
                await Roles.bulkCreate(roles.map(role => ({ name: role })));
            }
            newUser.photo = newUser.photo || 'https://www.asofiduciarias.org.co/wp-content/uploads/2018/06/sin-foto.png';
            newUser.roleId = newUser.roleId || 2;
            const result = await Users.create(newUser);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getAllUsers() {
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async updateUser(id, user) {
        try {
            const result = await Users.update(user, { where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async updateUserRole(id, update) {
        try {
            const { userId, role } = update;
            const { roleId } = await Users.findOne({ where: { id }, attributes: ['roleId'] });
            if(roleId === 1) return await Users.update({roleId: role}, { where: { id: userId } });
            throw 'No tienes permisos para realizar esta acción';
        } catch (error) {
            throw error;
        }
    }
    static async updateUserPassword(id, data) {
        try {
            const { password } = await Users.findOne({ where: { id }, attributes: ['password'] });
            const { oldPassword, newPassword } = data;
            if(password) {
                const isValid = bcrypt.compareSync(oldPassword, password);
                if(isValid) {
                    const hash = bcrypt.hashSync(newPassword, 8);
                    return await Users.update({ password: hash }, { where: { id } });
                }
                throw 'La contraseña actual no es correcta';
            }
            throw 'El usuario no existe';
        } catch (error) {
            throw error;
        }
    }
    static async deleteUser(id, userId) {
        try {
            const { roleId } = await Users.findOne({ where: { id }, attributes: ['roleId'] });  
            if(roleId === 1) return await Users.destroy({ where: { id: userId } });
            throw 'No tienes permisos para realizar esta acción';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;