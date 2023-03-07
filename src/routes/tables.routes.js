const { Router } = require('express');
const { createTable, getTableById, getAllTables, updateTable, deleteTable } = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

/**
* @openapi
* /api/v1/table:
*   post:
*     security:
*       - bearerAuth: []
*     summary: Create new table
*     tags: [Tables]
*     requestBody:
*      required: true
*      content:
*       application/json:
*        schema:
*         type: object
*         $ref: '#/components/schemas/CreateTable'
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               ref: '#/components/schemas/Table'
*       404:
*         description: The business was not found
* /api/v1/table/{id}:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get table by id
*     tags: [Tables]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The table id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               ref: '#/components/schemas/Table'
*       404:
*         description: The business was not found
* /api/v1/tables:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get all tables
*     tags: [Tables]
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               ref: '#/components/schemas/Tables'
*       404:
*         description: The business was not found
* /api/v1/table/{id}/update:
*   put:
*     security:
*       - bearerAuth: []
*     summary: Update a table
*     tags: [Tables]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The table id
*     requestBody:
*      required: true
*      content:
*       application/json:
*        schema:
*         type: object
*         $ref: '#/components/schemas/UpdateTable'
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               ref: '#/components/schemas/Business'
*       404:
*         description: The business was not found
* /api/v1/table/{id}/delete:
*   delete:
*     security:
*       - bearerAuth: []
*     summary: Delete a table
*     tags: [Tables]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The table id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               ref: '#/components/schemas/DeleteTable'
*       404:
*         description: The business was not found
*/

router.post('/table', authenticate, createTable);

router.get('/table/:id', authenticate, getTableById);

router.get('/tables', authenticate, getAllTables);

router.put('/table/:id/update', authenticate, updateTable);

router.delete('/table/:id/delete', authenticate, deleteTable);

module.exports = router;
