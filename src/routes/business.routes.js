const { Router } = require('express');
const { createBusiness, getBusiness, getBusinessByOwner, updateBusiness, updateBusinessStatus, deleteBusiness } = require('../controllers');
const {authenticate, authorizationOwner} = require('../middlewares/auth.middleware');

const router = Router();

/**
* @openapi
* /api/v1/business/owner/{id}:
*   post:
*     summary: Create a business
*     tags: [Business]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: false
*         description: The user id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/createBusiness'
*     responses:
*       201:
*         description: The business was successfully created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Business'
*       400:
*         description: The business was not created
* /api/v1/business/{id}:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get a business by id
*     tags: [Business]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The business id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 id:
*                   type: integer
*                   description: The auto-generated id of the business.
*                 nameBusiness:
*                   type: string
*                   description: The name of the business.
*                 owner:
*                   type: string
*                   description: The owner of the business.
*                 moneda:
*                   type: string
*                   description: The currency of the business.
*                 closingTime:
*                   type: string
*                   format: time
*                   description: The closing time of the business.
*                 user:
*                   type: object
*                   properties:
*                     id:
*                       type: integer
*                       description: The auto-generated id of the user.
*                     name:
*                       type: string
*                       description: The name of the user.
*                     surname:
*                       type: string
*                       description: The surname of the user.
*                     email:
*                       type: string
*                       format: email
*                       description: The email of the user.
*                     password:
*                       type: string
*                       description: The password of the user.
*                     phoneNumber:
*                       type: string
*                       description: The phone number of the user.
*                     roleId:
*                       type: integer
*                       description: The role of the user.
*                     businessId:
*                       type: integer
*                       description: The business id of the user.
*                     dni:
*                       type: string
*                       description: The dni of the user.
*                     salary:
*                       type: string
*                       description: The salary of the user.
*                 categories:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       id:
*                         type: integer
*                         description: The auto-generated id of the category.
*                       name:
*                         type: string
*                         description: The name of the category.
*                       businessId:
*                         type: integer
*                         description: The business id of the category.
*                 areas:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       id:
*                         type: integer
*                         description: The auto-generated id of the area.
*                       name:
*                         type: string
*                         description: The name of the area.
*                       businessId:
*                         type: integer
*                         description: The business id of the area.
*                 roles:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       id:
*                         type: integer
*                         description: The auto-generated id of the role.
*                       name:
*                         type: string
*                         description: The name of the role.
*                       permissions:
*                         type: array
*                         items:
*                           type: string
*                         description: The permissions of the role.
*                       businessId:
*                         type: integer
*                         description: The business id of the role.
*                 tables:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       id:
*                         type: integer
*                         description: The auto-generated id of the table.
*                       name:
*                         type: string
*                         description: The name of the table.
*                       businessId:
*                         type: integer
*                         description: The business id of the table.
*                       areaId:
*                         type: integer
*                         description: The area id of the table.
*                 products:
*                   type: array
*                   example: []
*                 expenses:
*                   type: array
*                   example: []
*                 prviders:
*                   type: array
*                   example: []
*       404:
*         description: The business was not found
* /api/v1/business/all/owner/{id}:
*   get:
*     summary: Get all business by owner
*     security:
*       - bearerAuth: []
*     tags: [Business]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*           required: true
*           description: The business id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 id:
*                   type: integer
*                   description: The auto-generated id of the business.
*                 nameBusiness:
*                   type: string
*                   description: The name of the business.
*                 owner:
*                   type: string
*                   description: The owner of the business.
* /api/v1/business/{id}/update:
*   put:
*     summary: Update a business by id
*     security:
*       - bearerAuth: []
*     description: You can update the business name, owner and closing time of the business by id
*     tags: [Business]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The business id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/updateBusiness'
*     responses:
*       200:
*         description: The business was successfully updated
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/updatedBusiness'
*       404:
*         description: The business was not found
* /api/v1/business/{id}/update/status:
*   put:
*     summary: Update status of a business
*     security:
*       - bearerAuth: []
*     tags: [Owner]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The business id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               isActive:
*                 type: boolean
*     responses:
*       200:
*         description: The business was successfully deleted
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/updatedBusiness'
*       401:
*         description: The business was not found
* /api/v1/business/{id}/delete:
*   delete:
*     summary: Delete a business by id
*     security:
*       - bearerAuth: []
*     tags: [Business]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The business id
*     responses:
*       200:
*         description: The business was successfully deleted
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/deleteBusiness'
*       404:
*         description: The business was not found
*/

router.post('/business/owner/:id', createBusiness );

router.get('/business/:id', authenticate, getBusiness );

router.get('/business/all/owner/:id', authenticate, getBusinessByOwner)

router.put('/business/:id/update', authenticate, updateBusiness );

router.put('/business/:id/update/status', authorizationOwner, updateBusinessStatus)

router.delete('/business/:id/delete', authenticate, deleteBusiness);

module.exports = router;