import {Router} from 'express';

class GamesRoutes {
    public router: Router = Router();

    constructor (){
        //Usamos el enrutador creado en config() para agregar la ruta en public router
        this.config();


    }

    config(): void {
        // Enrutador: Creamos la ruta get, para cuando visitamos la ruta incial devlvemos 'hola' 
        this.router.get('/api/games',(req, res)=>{
            res.send('Games!!!');
        })
    }
}

//Instanciamos la clase
const gamesRoutes = new GamesRoutes();

export default gamesRoutes.router;