const { Router } = require('express');
const { getAllOwners, getOwner, deleteOwner } = require('../controllers');
const { authorizationOwner } = require('../middlewares/auth.middleware');

const router = Router();

/**
* @openapi
* /api/v1/owners:
*   get:
*     summary: Get all owners
*     tags: [Owner]
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               ref: '#/components/schemas/Business'
*       404:
*         description: The business was not found
* /api/v1/owner/{id}:
*   get:
*     summary: Get a owner by id
*     tags: [Owner]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The owner id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               ref: '#/components/schemas/Business'
*       404:
*         description: The business was not found
* /api/v1/owner/{id}/delete:
*   delete:
*     security:
*       - bearerAuth: []
*     summary: Delete owner by id
*     tags: [Owner]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The owner id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               ref: '#/components/schemas/Business'
*       404:
*         description: The business was not found
*/

router.get('/owners', getAllOwners);

router.get('/owner/:id', getOwner);

router.delete('/owner/:id/delete', authorizationOwner, deleteOwner);

module.exports = router;