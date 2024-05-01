
const usuarioUno = {
    nombres : 'Nicolas Arroyave',
    correo:'niarroyave@poligran.edu.co',
    contraseña:'Prueba2530',
}
const usuarioDos = {
    nombres : 'Arley Rios',
    correo:'arriosme@poligran.edu.co',
    contraseña:'Prueba2024',
}

const usuarioTres = {
    nombres : 'Hermes Fernando',
    correo:'heamaris@poligran.edu.co',
    contraseña:'Prueba2023',
}


//convertimos el objeto a un string para poderlo guardar 
const usuarioUnoString = JSON.stringify(usuarioUno);
//Agregamos el objeto a local storage
localStorage.setItem('usuarioUno', usuarioUnoString);


//convertimos el objeto a un string para poderlo guardar 
const usuarioDosString = JSON.stringify(usuarioDos);
//Agregamos el objeto a local storage
localStorage.setItem('usuarioDos', usuarioDosString);


//convertimos el objeto a un string para poderlo guardar 
const usuarioTresString = JSON.stringify(usuarioTres);
//Agregamos el objeto a local storage
localStorage.setItem('usuarioTres', usuarioTresString);




