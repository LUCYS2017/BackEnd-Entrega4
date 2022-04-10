const express= require('express');
const { onErrorResumeNext } = require('rxjs');
const { Router }  = express;
const { ProductosApi }   = require('./api/productos.js');

const productosApi = new ProductosApi();

const productosRouter = new Router();
productosRouter.use(express.json());
productosRouter.use(express.urlencoded({extended: true}));

//Metodos
const app = express();

productosRouter.get('/', (req, res) => {
    res.send(productosApi.listarAll());    
});

productosRouter.get('/:id', (req, res) => {
    res.send(productosApi.listar(req.params.id));    
});

productosRouter.post('/', (req, res) => {  
    productosApi.guardar(req.body);  
    res.send(req.body);
});

productosRouter.put('/:id', (req, res) => {  
    productosApi.actualizar(req.body);  
    res.send(req.body);
});

productosRouter.delete('/:id', (req, res) => {
    res.send(productosApi.borrar(req.params.id));   
});


app.use(express.static('public'));
app.use('/api/productos', productosRouter)

const PORT= 8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor http en el puerto ${server.address().port}`);
});
server.on("error",error=>console.log(`Error en servidor ${error}`));
