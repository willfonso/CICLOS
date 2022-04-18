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

    let index = baseDatos.length;
if (codigoAgregar ==='' || descripcionAgregar === '' || rubroAgregar === '' || costoAgregar === '' || rentabilidadAgregar === ''){
    return alert('Debes completar los campos');

}
       document.getElementById("tbody").innerHTML += `
        <tr>
            <th>${nuevaMercaderia.codigo}</th>
            <th>${nuevaMercaderia.descripcion}</th>
            <th>${nuevaMercaderia.rubro}</th>
            <th>${nuevaMercaderia.costo}</th>
            <th>${nuevaMercaderia.rentabilidad}</th>
            <th>${nuevaMercaderia.precio}</th>
            <th><button data-index="${index}" type="button" name="eliminar" class="btn btn-danger btn-delete">Eliminar</button></th>
        </tr>
    `;
   function reiniciarFormulario() {
        document.getElementById('formulario').reset();
    }
    reiniciarFormulario();
    mostrarMensaje();



    var list = document.getElementsByClassName("btn-delete");
    for (var i = 0; i < list.length; i++) {
        list[i].onclick = null;
        list[i].addEventListener('click', function(e){
            e.target.parentElement.parentElement.remove();
        });
    }

   
}

function mostrarMensaje(message , cssClass){
    const div = document.createElement('div');
    div.className =`alert alert-${cssClass}`;
    div.appendChild(document.createTextNode(message));

   const container = document.querySelector('.container py-2');
   const p = document.querySelector('#formulario');
   const msg = container.insertBefore(div,p);

   

}