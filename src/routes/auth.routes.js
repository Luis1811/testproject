const { Router } = require("express");
const { userLogin } = require("../controllers");

const router = Router();

/** 
* @openapi
* /api/v1/auth/login:
*   post:
*     summary: Login a user
*     tags: [Login]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             $ref: '#/components/schemas/LoginUser'
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
*                     $ref: '#/components/schemas/LoginUser'
*       400:
*         description: Error al iniciar sesión 
*/

router.post("/auth/login", userLogin);

module.exports = router;