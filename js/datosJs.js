document.querySelector('#guardarDatos').addEventListener('click', guardarInscripcion);

function guardarInscripcion(){
    var sNombres = document.querySelector('#txtNombres').value,
        sApellidoP = document.querySelector('#txtApellidoP').value,
        sApellidoM = document.querySelector('#txtApellidoM').value,
        sEmail = document.querySelector('#txtEmail').value,
        sTelefono = document.querySelector('#txtTelefono').value,
        sFechaNacimiento = document.querySelector('#txtFechaNacimiento').value,
        sGenero = document.querySelector('#txtGenero').value,
        sNacionalidad = document.querySelector('#txtNacionalidad').value,
        sDepartamento = document.querySelector('#txtDepartamento').value,
        sUsuario = document.querySelector('#txtUsuario').value,
        sContraseña = document.querySelector('#txtContraseña').value;

    addInscripcion(sNombres, sApellidoP, sApellidoM, sEmail, sTelefono, sFechaNacimiento, sGenero, sNacionalidad, sDepartamento, sUsuario, sContraseña);

}