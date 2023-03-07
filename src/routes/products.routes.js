const { Router } = require('express');
const { createProduct, createProductsMultiples, getAllProducts, getProductsById, updateProducts, deleteProducts } = require('../controllers');
const {authenticate} = require('../middlewares/auth.middleware');

const router = Router();

/**
* @openapi
* /api/v1/product:
*   post:
*     security:
*       - bearerAuth: []
*     tags:
*       [Products]
*     summary: Create a new product
*     description: Create a new product
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/createProduct'
*     responses:
*       201:
*         description: Product created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/products'
*       400:
*         description: Bad request
* /api/v1/product/multiple:
*   post:
*     security:
*       - bearerAuth: []
*     tags:
*       [Products]
*     summary: Create multiple products
*     description: Create multiple products
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/createProductsMultiples'
*     responses:
*       201:
*         description: Products created
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/products'
*       400:
*         description: Bad request
* /api/v1/business/{id}/products:
*   get:
*     security:
*       - bearerAuth: []
*     tags:
*       [Products]
*     summary: Get all products
*     description: Get all products
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The business id
*     responses:
*       200:
*         description: Products found
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/products'
*       404:
*         description: Products not found
* /api/v1/product/{id}:
*   put:
*     security:
*       - bearerAuth: []
*     tags:
*       [Products]
*     summary: Update a product
*     description: Update a product
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The product id
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/updateProduct'
*     responses:
*       200:
*         description: Product updated
*         content:
*           application/json:
*             schema:
*               properties:
*                 message:
*                   type: string
*                   description: The message of the response.
*                   example: "Product updated"
*       400:
*         description: Bad request
* /api/v1/product/{id}/delete:
*   delete:
*     security:
*       - bearerAuth: []
*     tags:
*       [Products]
*     summary: Delete a product
*     description: Delete a product
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The product id
*     responses:
*       200:
*         description: Product deleted
*         content:
*           application/json:
*             schema:
*               properties:
*                 message:
*                   type: string
*                   description: The message of the response.
*                   example: "Product deleted"
*       400:
*         description: Bad request
*/

router.post('/product', authenticate, createProduct );

router.post('/product/multiple', authenticate, createProductsMultiples );

router.get('/business/:id/products', authenticate, getAllProducts );

router.put('/product/:id', authenticate, updateProducts );

router.delete('/product/:id/delete', authenticate, deleteProducts );

module.exports = router;