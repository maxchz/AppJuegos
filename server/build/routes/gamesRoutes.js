"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        //Usamos el enrutador creado en config() para agregar la ruta en public router
        this.config();
    }
    config() {
        // Enrutador: Creamos la ruta get, para cuando visitamos la ruta incial devlvemos 'hola' 
        this.router.get('/api/games', (req, res) => {
            res.send('Games!!!');
        });
    }
}
//Instanciamos la clase
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
