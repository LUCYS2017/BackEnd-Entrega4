class ProductosApi{
    constructor(){
        this.productos = [];
        this.id = 0
    }

    listar(id){
        const productos = this.productos;              
        for(const item of productos){
            if(id == item.id){
                return item;
                break;
            }            
        } 
    }

    listarAll(){         
        return this.productos;        
    }

    guardar(pro){
        const productos = this.productos;
        let id = 1;
        if(productos.length>0){
            for(const item of productos){
                id= item.id +1;
            }
        }
        this.productos.push({id:id, title:pro.title, price:pro.price,thumbnail:pro.thumbnail}); 
    }

    actualizar(prod,id){
        const productos = this.productos;  
        this.productos=[];     
        for(const item of productos){
            if(id == item.id){
                this.productos.push({id:id, title:prod.title, price:prod.price,thumbnail:prod.thumbnail});     
            }
            else{
                this.productos.push(item);
            }
        }        
    }
    borrar(id){
        const productos = this.productos;  
        this.productos=[];     
        for(const item of productos){
            if(id != item.id){
                this.productos.push(item);
            }            
        }       
    }
}

module.exports = {
    ProductosApi,
  };

