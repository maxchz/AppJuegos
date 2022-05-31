import {Router} from 'express';

class IndexRoutes {
    public router: Router = Router();

    constructor (){
        //Usamos el enrutador creado en config() para agregar la ruta en public router
        this.config();


    }

    config(): void {
        // Enrutador: Creamos la ruta get, para cuando visitamos la ruta incial devlvemos 'hola' 
        this.router.get('/',(req, res)=>{
            res.send('Hola!!!');
        })
    }
}

//Instanciamos la clase
const indexRoutes = new IndexRoutes();

export default indexRoutes.router;