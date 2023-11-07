function cargarCondicionesPreExistentes() {
    let panelCondiciones = document.querySelector("#condiciones");
    let linea;
    let condicion;
    let labelCondicion;
    let textoLabelCondicion;
    let nombreCondicion;

    fetch("http://localhost/FormularioPacientes/js/json/condicionesPreExistentes.json")
        .then(res => res.json())
        .then(data => {
            data["condiciones"].forEach(cond => {
                nombreCondicion = cond.nombre;
                linea = document.createElement("li");
                condicion = document.createElement("input");
                labelCondicion = document.createElement("label");
                textoLabelCondicion = document.createTextNode(" " + nombreCondicion);

                condicion.setAttribute("type","checkbox");
                condicion.setAttribute("name","condicion");
                condicion.setAttribute("value",nombreCondicion);
                
                labelCondicion.appendChild(textoLabelCondicion);
                linea.appendChild(condicion);
                linea.appendChild(labelCondicion);

                panelCondiciones.appendChild(linea);
            });
    });
    
}

function inicio() {
    cargarCondicionesPreExistentes()
}

window.addEventListener('load',inicio,false);