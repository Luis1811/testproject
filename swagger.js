const swaggerJSDOC = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi:"3.0.0",
        info:{
            title: "Alfa API",
            version: process.env.API_VERSION,
            description: "API con la funcionalidad de la aplicación Alfa",
        }

    },
    apis: [
        "./src/routes/*.routes.js",
        "./src/models/*.models.js"
      ],
    
}

const swaggerSpec = swaggerJSDOC(options);

const swaggerDocs = (app, port) => {
    //documentation route
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    //Docs on JSON format
    app.get("api/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec)
    });
    console.log(`Documentation available in ${process.env.HOST}/api/v1/docs`)
}

module.exports = swaggerDocs
