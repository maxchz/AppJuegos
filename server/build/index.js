"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
// Definimos una clase que iniciara el servidor
class Server {
    // El constructor inicializa express que devuleve un objeto
    constructor() {
        this.app = (0, express_1.default)();
        //Ejecutamos los metodos de abajo cuando se instancien la clases
        this.config();
        this.routes();
    }
    // Configura el app
    config() {
        //Configuramos el puerto, si existe un puerto definido lo toma, sino toma el puerto 3000
        //'port' es una variable de app que puede ser accedido desde app
        this.app.set('port', process.env.PORT || 3000);
        //usamos morgan para ver las peticiones en la consola de VSC, tambien podemos verla en la consola del navegador
        this.app.use((0, morgan_1.default)('dev'));
        //Usamos cors para que angular pueda pedir datos al servidor
        this.app.use((0, cors_1.default)());
        //agregamos el metodo JSON para que express acepte los formatos json que se envian desde el front
        this.app.use(express_1.default.json());
        //metodo para tomar entradas desde un formulario html
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //PAra definir las rutas del servidor, usamos la calse instaciada  creada en indexRoutes
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use(gamesRoutes_1.default);
    }
    //Metodo para inicializar el servidor, para que empiece a escuchar
    // Accedemos a la variable 'port' y usamos una funcion para mostrar mensaje si el server escucha el puerto
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Escuchando puerto', this.app.get('port'));
        });
    }
}
// Instanciamos la calse Server para que trabajemos con el objeto y se ejecute el constructor de la calse que 
//devuelve un objeto y la asignamos en la variable server
const server = new Server();
server.start();
