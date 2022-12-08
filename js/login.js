const btnIngresar=document.querySelector("#ingresar"),
    user=document.querySelector("#user"),
    pass=document.querySelector("#pass"),
    check=document.querySelector("#recordar");

function inicioSesion(usuarios){
    let userFound= usuarios.find(usuario=>{
        return usuario.usuario == user.value && usuario.password== pass.value
    })
if(userFound){
    window.location.href="./ejercicios.html"
}
else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario y/o contraseña incorrecta!',
       
      })
  
}
    return userFound;
}

function recuperarLS(){
    let datos= JSON.parse(localStorage.getItem("usuarios"));
    return datos;
}

const usuariosLS= recuperarLS();

btnIngresar.addEventListener("click", (e)=>{
    e.preventDefault();
    inicioSesion(usuariosLS)
});