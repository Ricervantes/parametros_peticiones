console.log("Entro al main.js");
const base_url_api = "http://ucamp.alumnos.dev4humans.com.mx";
const tblUsuarios = document.getElementById("tblUsuraios");
function agregarUsuario() {
    ""
    fetch(base_url_api +"/Main/alumnos")
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            tblUsuarios.innerHTML = "";
            for (const usuario of result.data) {
                let tr = `<tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.id}</td>
                    <td>${usuario.id}</td>
                    <td>${usuario.id}</td>
                    <td>${usuario.id}</td>
                </tr>`
                tblUsuarios.innerHTML += tr;
            }
        })
 .catch ((error)=> {
        console.log("error detectado!");
    });
}


function agregarUsuario() {
    console.log("entro a agregarUsuario");
    let form_data = new FormData();
    form_data.append("nombre", document.getElementById("nombre").value);
    form_data.append("paterno", document.getElementById("paterno").value);
    form_data.append("materno", document.getElementById("materno").value);
    form_data.append("e-mail", document.getElementById("e-mail").value);
    fetch(base_url_api + "/Main/alumnos"
    {
        method:"POST",
        body: form_data
    }
    )
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
        tblUsuarios.innerHTML = "";
        for (const usuario of result.data) {
            let tr = `<tr>
                <td>${usuario.id}</td>
                <td>${usuario.id}</td>
                <td>${usuario.id}</td>
                <td>${usuario.id}</td>
                <td>${usuario.id}</td>
            </tr>`
            tblUsuarios.innerHTML += tr;
        }
  console.log(form_data);
  
}

cargarUsuarios();