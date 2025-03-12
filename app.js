// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombre ingresados
let amigos = [];

function agregarAmigo(){
    let inputAmigo= document.getElementById("amigo").value;
    //console.log(inputAmigo)

    if(inputAmigo == ''){
        alert("Por favor, inserte un nombre.")
    }else{
        amigos.push(inputAmigo);
        //console.log(amigos);
        actualizarLista();
    }
    document.querySelector('#amigo').value = '';

};
agregarAmigo();

function actualizarLista(){
    let lista= document.getElementById('listaAmigos');
    lista.innerHTML= '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li')
        li.textContent = amigos[i]; 
        lista.appendChild(li);   
    }
}