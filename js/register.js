const register= document.querySelector(".register"),
 userReg=document.querySelector("#userReg"),
 passReg=document.querySelector("#passReg"),
 email=document.querySelector("#email"),
 btnRegistrar=document.querySelector("#registrar");

 let usuarios;
 if (localStorage.getItem("usuarios")){
    usuarios= JSON.parse(localStorage.getItem("usuarios"));
}
else{usuarios=[];}

/* constructor usuario */
class Usuario{
    constructor(usuario,password,email){
        this.usuario=usuario;
        this.password=password;
        this.email=email;
    }
}

function limpiarCampos(){
    userReg.value="";
    passReg.value="";
    email.value="";
}

function guardarUsuario(usuario){
    return usuarios.push(usuario);
}

function guardarEnStorage (usuario){
    let ls=localStorage.setItem("usuarios",JSON.stringify(usuario));
    return ls;
}

btnRegistrar.addEventListener("click",(e)=>{
    e.preventDefault();
    let newUser= new Usuario(
        userReg.value,
        passReg.value,
        email.value
    );
    guardarUsuario(newUser);
    limpiarCampos();
    guardarEnStorage(usuarios);
    Swal.fire(
        'Registro Exitoso!',
        'Toca OK para continuar!',
        'success'
      ).then(()=> {
        window.location = "index.html";
    });
});
