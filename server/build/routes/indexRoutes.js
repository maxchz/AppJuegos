"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        //Usamos el enrutador creado en config() para agregar la ruta en public router
        this.config();
    }
    config() {
        // Enrutador: Creamos la ruta get, para cuando visitamos la ruta incial devlvemos 'hola' 
        this.router.get('/', (req, res) => {
            res.send('Hola!!!');
        });
    }
}
//Instanciamos la clase
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
