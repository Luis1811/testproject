const { Router } = require('express');
const { createUser, getAllUsers, updateUser, updateUserRole, updateUserPassword, deleteUser } = require('../controllers');
const {authenticate} = require('../middlewares/auth.middleware');

const router = Router();

/**
* @openapi
* /api/v1/user/register:
*   post:
*     summary: Create a new user
*     tags: [User]
*     requestBody:
*      required: true
*      content:
*       application/json:
*        schema:
*         type: object
*         $ref: '#/components/schemas/CreateUser'
*     responses:
*       201:
*         description: Successful Operation
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   type: array
*                   items:
*                     type: object
*                     $ref: '#/components/schemas/User'
*       400:
*         description: Error al crear el usuario
* /api/v1/users:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get all users
*     tags: [User]
*     responses:
*       200:
*         description: Successful Operation
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   type: array
*                   items:
*                     type: object
*                     $ref: '#/components/schemas/GetAllUsers'
*       400:
*         description: Error al obtener los usuarios
* /api/v1/user/{id}/update:
*   put:
*     security:
*       - bearerAuth: []
*     summary: Update a user
*     tags: [User]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The user's id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/UpdateUser'
*     responses:
*       200:
*         description: Successful Operation
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   type: array
*                   items:
*                     type: object
*                     $ref: '#/components/schemas/UpdateUser'
*       400:
*         description: Error al actualizar el usuario
* /api/v1/user/{id}/update/role:
*   put:
*     security:
*       - bearerAuth: []
*     summary: Update a user's role
*     tags: [User]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The user's id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/UpdateUserRole'
*     responses:
*       200:
*         description: Successful Operation
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   type: array
*                   items:
*                     type: object
*                     $ref: '#/components/schemas/UpdateUserRole'
*       400:
*         description: Error al actualizar el rol del usuario
* /api/v1/user/{id}/update/password:
*   put:
*     security:
*       - bearerAuth: []
*     summary: Update a user's password
*     tags: [User]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The user's id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/UpdateUserPassword'
*     responses:
*       200:
*         description: Successful Operation
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   type: array
*                   items:
*                     type: object
*                     $ref: '#/components/schemas/UpdateUserPassword'
*       400:
*         description: Error al actualizar la contraseña del usuario
* /api/v1/user/{id}/delete:
*   delete:
*     security:
*       - bearerAuth: []
*     summary: Delete a user
*     tags: [User]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The user's id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/DeleteUser'
*     responses:
*       200:
*         description: Successful Operation
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   type: array
*                   items:
*                     type: object
*                     $ref: '#/components/schemas/DeleteUser'
*       400:
*         description: Error al eliminar el usuario
*/

router.post('/user/register', authenticate, createUser);

router.get('/users', authenticate, getAllUsers);

router.put('/user/:id/update', authenticate, updateUser);

router.put('/user/:id/update/role', authenticate, updateUserRole);

router.put('/user/:id/update/password', authenticate, updateUserPassword);

router.delete('/user/:id/delete', authenticate, deleteUser);

module.exports = router;