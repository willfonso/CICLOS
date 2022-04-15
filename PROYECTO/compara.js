var baseDatos = [];

class Mercaderia {
    constructor(codigo, descripcion, rubro, costo, rentabilidad, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.rubro = rubro;
        this.costo = costo;
        this.rentabilidad = rentabilidad;
        this.precio = precio;
    }
}

function agregar(e) {
    let codigoAgregar = document.getElementById("codigo").value;
    var descripcionAgregar = document.getElementById("descripcion").value.toUpperCase();
    var rubroAgregar = document.getElementById("rubro").value.toUpperCase();
    var costoAgregar = document.getElementById("costo").value;
    var rentabilidadAgregar = document.getElementById("rentabilidad").value;
    var precioAgregar = document.getElementById("precio").value;

    nuevaMercaderia = new Mercaderia(
        codigoAgregar,
        descripcionAgregar,
        rubroAgregar,
        costoAgregar,
        rentabilidadAgregar,
        precioAgregar
    );

    console.log(nuevaMercaderia);
    baseDatos.push(nuevaMercaderia);

       document.getElementById("tbody").innerHTML += `
        <tr>
            <th>${nuevaMercaderia.codigo}</th>
            <th>${nuevaMercaderia.descripcion}</th>
            <th>${nuevaMercaderia.rubro}</th>
            <th>${nuevaMercaderia.costo}</th>
            <th>${nuevaMercaderia.rentabilidad}</th>
            <th>${nuevaMercaderia.precio}</th>
            <button id="eliminar" class="btn btn-danger">Eliminar</button>

        </tr>
    `;


    document.getElementById('eliminar').addEventListener('click', function(e){
        const ui = new UI();
        ui.eliminarProducto(element.target);
        });
    }