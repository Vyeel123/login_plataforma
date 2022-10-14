var fichaInscripcion =[];

function addInscripcion(pNombres, pApellidoP, pApellidoM, pEmail, pCelular, pFechaNacimiento, pGenero, pNacionalidad, pDepartamento, pUsuario, pContraseña){
    
    var newInscripcion ={
        nombres: pNombres,
        apellidoP: pApellidoP,
        apellidoM: pApellidoM,
        email:pEmail,
        celular:pCelular,
        fechaNacimiento: pFechaNacimiento,
        genero: pGenero,
        nacionalidad: pNacionalidad,
        departamento: pDepartamento,
        usuario: pUsuario,
        contraseña: pContraseña
    };

    console.log(newInscripcion);
    fichaInscripcion.push(newInscripcion);
    localStorageJsonInscripcion(fichaInscripcion);
}

function getInscripcion(){
    var storedList=localStorage.getItem('localInscripcion');
    if(storedList==null){
        fichaInscripcion = [];
    }
    else{
        fichaInscripcion = JSON.parse(storedList);
    }

    return fichaInscripcion;
}

function localStorageJsonInscripcion(pDatos){
    localStorage.setItem('localInscripcion', JSON.stringify(pDatos));
}