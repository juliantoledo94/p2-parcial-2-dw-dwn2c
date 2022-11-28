

/*
 *  APELLIDOS
 */

let producto_1;
let producto_2;
let producto_3;
let producto_4;
let producto_5;
let producto_6;



class Producto{
    #id;
    #nombre;
    #descripcion;
    #precio;
    #imagen;
    #categoria;
    #cantidad;
    

        constructor(id, nombre,descripcion,precio,imagen,categoria,cantidad){
            this.#id =id;
            this.#nombre = nombre;
            this.#descripcion = descripcion;
            this.#precio = precio;
            this.#imagen = imagen;
            this.#categoria = categoria;
            this.#cantidad =cantidad;
        }

        set setId(id){
            this.#id =id;
        }

        set setNombre(nombre){
            this.#nombre = nombre;
        }

        set setDescripcion(descripcion){
            this.#descripcion = descripcion;
        }

        set setPrecio(precio){
            this.#precio = precio;
        }

        set setImagen(imagen){
            this.#imagen= imagen;
        }

        set setCategoria(categoria){
            this.#categoria = categoria;
        }

        set setCantidad(cantidad){
            this.#cantidad = cantidad;
        }

        get getId(){
            return this.#id;
        }

        get getNombre(){
            return this.#nombre;
        }

        get getDescripcion(){
            return this.#descripcion;
        }

        get getPrecio(){
            return this.#precio;
        }

        get getImagen(){
            return this.#imagen;
        }

        get getCategoria(){
            return this.#categoria;
        }

        get getCantidad(){
            return this.#cantidad;
        }

        crearHTML(){
            // esta funcion por cada producto que tenga en el array me arma un div y me lo devuelve.
           
        }

        toJSON(){

            return {
            "getId" : this.#id,
            "getNombre" : this.#nombre,
            "getDescripcion" : this.#descripcion,
            "getPrecio" : this.#precio,
            "getImagen" : this.#imagen,
            "getCategoria" : this.#categoria,
            "getCantidad" : this.#cantidad

            }
            

        }
}


producto_1= new Producto(1,"Iphone 13","Nuestro sistema de dos cámaras más avanzado y un chip superrápido que deja atrás a la competencia.",529.991,"imagenes/iphone13.png",["Iphone","todas"],1);
producto_2= new Producto(2,"Iphone 13 pro","Un sistema de cámaras mucho más poderoso. Una pantalla con respuesta inmediata en cada interacción. El chip de smartphone más rápido del mundo. Un diseño increíblemente resistente. Y un gran salto en duración de batería.",659.989,"imagenes/iPhone_13_Pro.png",["Iphone","todas"],1);
producto_3= new Producto(3,"AirPods (3ra Generación)","Nuevo diseño con audio espacial para un sonido envolvente y ecualización adaptativa que ajusta la música a tus oídos.",53.999,"imagenes/airpods.jpg",["Audio","todas"],1);
producto_4= new Producto(4,"AirPods Max","Presentamos los AirPods Max. El equilibrio perfecto entre un audio de alta fidelidad increíble y la mágica facilidad de uso de los AirPods. Tus próximos audífonos ya están aquí para brindarte una experiencia de audio inigualable.",184.799,"imagenes/Airpods_Max.jpg",["Audio","todas"],1);
producto_5= new Producto(5,"iPad Air 10.9″ Wi-Fi (5ta Generación)","El iPad es versátil y está listo para todo. Es una forma divertida y poderosa de trabajar, estudiar, jugar y hacer lo que te imagines.",219.999,"imagenes/iPad_Air.jpg",["iPad","todas"],1)
producto_6= new Producto(6,"iPad mini Wi-Fi","Por qué el iPad. Hace de todo. Y un poco más.El iPad es versátil y está listo para todo. Es una forma divertida y poderosa de trabajar, estudiar, jugar y hacer lo que te imagines. Estas son algunas de las miles de cosas que puedes hacer con él.",519.999,"imagenes/iPad_mini.jpg",["iPad","todas"],1);


let productos = [producto_1,producto_2,producto_3,producto_4,producto_5,producto_6];

const contenedor_carrito = document.getElementById("contenedor");

const boton_vaciar = document.getElementById("vaciar_carrito");

const contador_carrito= document.getElementById("contador_carrito");

const precio_total = document.getElementById("precioTotal");



let carrito = JSON.parse(localStorage.getItem("carrito")) || [];







let principal=document.querySelector("#productos");

let divG = document.createElement("div");
divG.classList.add("card-group");
principal.appendChild(divG);

productos.forEach((producto)=>{

// hasta aca va original
    let div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("style","width: 18rem;");
    divG.appendChild(div); //esto borrar y volver a activar lo de abajo
    //principal.appendChild(div);

    let imagen = document.createElement("img");
    imagen.classList.add("card-img-top")
    imagen.src= producto.getImagen;
    div.appendChild(imagen);

    let div2= document.createElement("div");
    div2.classList.add("card-body");
    div.appendChild(div2);

    let h5= document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerText = producto.getNombre;
    div2.appendChild(h5);

    let p = document.createElement("p");
    p.classList.add("card-text");
    p.innerText = producto.getDescripcion;
    div2.appendChild(p);

    let ul= document.createElement("ul");
    ul.classList.add("list-group","list-group-flush");
            

    let li= document.createElement("li");
    li.classList.add("list-group-item")
    li.innerText ="Precio: " + producto.getPrecio;
    ul.appendChild(li);

    let li2= document.createElement("li");
    li2.classList.add("list-group-item");

    li2.innerText =producto.getId;
    ul.appendChild(li2);

    let li3= document.createElement("li");
    li3.classList.add("list-group-item")
    li3.innerText ="Categoria: " + producto.getCategoria[0];
    ul.appendChild(li3);

    div.appendChild(ul);



    let btn = document.createElement("button");

    btn.classList.add("btn", "btn-primary");
    btn.innerText = "Agregar al carrito";
    btn.setAttribute("name","boton");



    div.appendChild(btn);




    btn.addEventListener("click",() =>{
        //console.log(producto.getId);
        

        agregarProducto(producto.getId);


    //                                                                                                  cargo carrito
    
    
});




boton_vaciar.addEventListener("click",()=>{
    carrito.length = 0;

    localStorage.removeItem("carrito");

    actualizarCarrito();
});





});

function agregarProducto(id){  

    const item = productos.find((producto) => producto.getId === id);

    carrito.push(item);
    item == "";
    
    localStorage.setItem("carrito",JSON.stringify(carrito));
    
    
    actualizarCarrito();
    
    console.log(carrito);  
    
}


const eliminarDelCarrito = (id) =>{

    const item = carrito.find((producto) => producto.getId === id);
    

    const indice = carrito.indexOf(item);

    // Splice recibe el indice y cantidad de elementos a borrar.
    carrito.splice(indice, 1);
       
    removerLocal(indice);
    
    actualizarCarrito()
}

function actualizarCarrito(){

    contenedor_carrito.innerHTML="";

    carrito.forEach((producto)=>{

        let div = document.createElement("div");
        contenedor_carrito.appendChild(div);

        let nombre = document.createElement("p");
        nombre.innerText =`Producto: ${producto.getNombre}`;
        
        div.appendChild(nombre);

        let precio = document.createElement("p");
        precio.innerText=`Precio: ${producto.getPrecio}`;
        div.appendChild(precio);

        let cantidad = document.createElement("p");
        cantidad.innerText=`cantidad ${1}`;
        div.appendChild(cantidad);

        btn = document.createElement("button");
        btn.innerText = "eliminar del carrito";
        div.appendChild(btn);

        btn.addEventListener("click",()=>{

            eliminarDelCarrito(producto.getId);
            

        });

        
 

    });
    

    contador_carrito.innerText= carrito.length;

    // por cada producto que ingresa en mi carrito le digo al acumulador que me lo sume
    precio_total.innerText = carrito.reduce((acc,producto)=> acc+producto.getPrecio,0); 


}


//                                                                                    SECTOR FILTRADO DE PRODUCTOS



/* Agregar que si el producto es un string vacio ( en elija una categoria) retorna true,  */

document.querySelector("select").addEventListener("change",(e) =>{

    

    let categoria= e.target.value;

    

    let filtrado = productos.filter((producto) =>{
        // preguntar si el producto es todos, entonces return true; va a ser el array entero.


        let categorias= producto.getCategoria;
        

    return categorias.includes((categoria));
    });

    console.log(filtrado);

    let divs= filtrado.crearHTML();

    document.querySelector("#productos").replaceChildren(...divs);
    

});





Array.prototype.crearHTML = function(){

    divG.innerHTML = "";
    
    return this.map((producto) =>{

        let div = document.createElement("div");
        div.classList.add("card");
        div.setAttribute("style","width: 18rem;");
        divG.appendChild(div);
        
        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top")
        imagen.src= producto.getImagen;
        div.append(imagen);

        let div2= document.createElement("div");
        div2.classList.add("card-body");
        div.append(div2)
        

        let h5= document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerText = producto.getNombre;
        div2.append(h5);

        let p = document.createElement("p");
        p.classList.add("card-text");
        p.innerText = producto.getDescripcion;
        div2.append(p);

        let ul= document.createElement("ul");
        ul.classList.add("list-group","list-group-flush");
        

        let li= document.createElement("li");
        li.classList.add("list-group-item")
        li.innerText ="Precio: " + producto.getPrecio;
        ul.append(li);

        let li2= document.createElement("li");
        li2.classList.add("list-group-item")
        li2.innerText ="ID: " + producto.getId;
        ul.append(li2);

        let li3= document.createElement("li");
        li3.classList.add("list-group-item")
        li3.innerText ="Categoria: " + producto.getCategoria;
        ul.append(li3);

        div.append(ul);

        let btn = document.createElement("button");

        btn.classList.add("btn", "btn-primary");
        btn.innerText = "Agregar al carrito";
        btn.setAttribute("name","boton");

        div.appendChild(btn);
  

    btn.addEventListener("click",() =>{
        //console.log(producto.getId);
        agregarProducto(producto.getId);
        
        
        
    });

    function agregarProducto(id){  

        const item = productos.find((producto) => producto.getId === id);

        carrito.push(item);
        
        item == "";
        localStorage.setItem("carrito",JSON.stringify(carrito));

        
        
        actualizarCarrito();
        
        
        console.log(carrito);  
        
    }




    const actualizarCarrito = () => {

        contenedor_carrito.innerHTML="";

        carrito.forEach((producto)=>{

            let div = document.createElement("div");
            contenedor_carrito.appendChild(div);

            let nombre = document.createElement("p");
            nombre.innerText =`Producto: ${producto.getNombre}`;
            
            div.appendChild(nombre);

            let precio = document.createElement("p");
            precio.innerText=`Precio: ${producto.getPrecio}`;
            div.appendChild(precio);

            let cantidad = document.createElement("p");
            cantidad.innerText=`cantidad ${1}`;
            div.appendChild(cantidad);

            btn = document.createElement("button");
            btn.innerText = "eliminar del carrito";
            div.appendChild(btn);

            btn.addEventListener("click",()=>{

                eliminarDelCarrito(producto.getId);

            });

          
    

        });
        

        contador_carrito.innerText= carrito.length;

        // por cada producto que ingresa en mi carrito le digo al acumulador que me lo sume
        precio_total.innerText = carrito.reduce((acc,producto)=> acc+producto.getPrecio,0); 


    }



    const eliminarDelCarrito = (id) =>{

        const item = carrito.find((producto) => producto.getId === id);
        

        const indice = carrito.indexOf(item);

        // Splice recibe el indice y cantidad de elementos a borrar.
        carrito.splice(indice, 1);

        removerLocal(indice);
        
        
        actualizarCarrito()
        
    }

    boton_vaciar.addEventListener("click",()=>{
        carrito.length = 0;
        localStorage.removeItem("carrito");
        
        actualizarCarrito();
       

    });
    
            
            return divG;

        });

        

        
    }


   

    

document.addEventListener("DOMContentLoaded",()=>{
    if(localStorage.getItem("carrito")){
            carrito = JSON.parse(localStorage.getItem("carrito"));
            actualizarCarrito();
    }
        
    });




//localStorage.setItem("carrito",JSON.stringify(carrito));
function removerLocal(i){
    let local = JSON.parse(localStorage.getItem("carrito"));
    local.splice(i, 1);
    localStorage.setItem("carrito", JSON.stringify(local));
    }
