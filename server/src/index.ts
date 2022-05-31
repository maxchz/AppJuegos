import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import gamesRoutes from './routes/gamesRoutes';
import indexRoutes from './routes/indexRoutes';

// Definimos una clase que iniciara el servidor
 
class Server {

    public app: Application; 

    // El constructor inicializa express que devuleve un objeto
    constructor (){
        this.app= express();
        //Ejecutamos los metodos de abajo cuando se instancien la clases
        this.config();
        this.routes();
    }
    // Configura el app
    config():void {
        //Configuramos el puerto, si existe un puerto definido lo toma, sino toma el puerto 3000
        //'port' es una variable de app que puede ser accedido desde app
        this.app.set('port',process.env.PORT || 3000);
        //usamos morgan para ver las peticiones en la consola de VSC, tambien podemos verla en la consola del navegador
        this.app.use(morgan('dev'));
        //Usamos cors para que angular pueda pedir datos al servidor
        this.app.use(cors());
        //agregamos el metodo JSON para que express acepte los formatos json que se envian desde el front
        this.app.use(express.json());
        //metodo para tomar entradas desde un formulario html
        this.app.use(express.urlencoded({extended: false}));

    }

    //PAra definir las rutas del servidor, usamos la calse instaciada  creada en indexRoutes
    routes(): void {
        this.app.use(indexRoutes);
        this.app.use(gamesRoutes);

    }

    //Metodo para inicializar el servidor, para que empiece a escuchar
// Accedemos a la variable 'port' y usamos una funcion para mostrar mensaje si el server escucha el puerto
    start(): void {
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Escuchando puerto', this.app.get('port'));

        })

    }
}

// Instanciamos la calse Server para que trabajemos con el objeto y se ejecute el constructor de la calse que 
//devuelve un objeto y la asignamos en la variable server
const server = new Server();
server.start();