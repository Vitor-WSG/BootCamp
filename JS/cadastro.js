window.addEventListener('load',start); //evendo de load garante que seja executado soemente quand a pagina estiver carregada.

//escopo gobal:
var globalNames=['Um','Dois','Três','Quatro'];

function start(){
   /*  password = document.querySelector('#password') Ler os valores do campo de senha */
    InputName = document.querySelector('#inputName')//Cursor barra de pesquisa

    //Funçoes que deverm ser iniciadas
    preventFormSubmit();
    activateInput(); //Cursor barra de pesquisa
    //render();
}
function preventFormSubmit(){
    function handleFormSubmit(event){
        event.preventDefault();

    }
    var form = document.querySelector('form');
    form.addEventListener('submit',handleFormSubmit)
}
//Cursor barra de pesquisa
function activateInput(){
    function insertName(newname){
        globalNames.push(newname)
        /* console.log(globalNames) //Mostra os incrementos dos valores do vetor */
    }
    function handletyping(event){
        if (event.key === 'Enter'){
            insertName(event.target.value)
        }
    }
    InputName.addEventListener('keyup',handletyping);
    InputName.focus();
   /*  password.addEventListener('keyup',handletyping); Campo para ler os valores digitados em senha*/
    
}
 function render(){

    function createDeleteButton(Index){
        function deleteName(){
            globalNames.splice(Index,1);
            render();
        }
        var button = document.createElement('button');
        button.classList.add('deletebutton')//adicionaando o CSS via JavaScript
        button.textContent='X';
        button.addEventListener('click',deleteName);
        return button;
    }

    function createSpan(name){
        function editItem(){
            InputName.value=name;
            InputName.focus();
        }
        var span = document.createElement('span');
        span.classList.add('clickble');
        span.textContent= name;
        span.addEventListener('click',editItem)
        return span;

    }

    var divNames = document.querySelector('#names');
    divNames.innerHTML='';
    var ul = document.createElement('ul');//criar elementos no HTML
    

    for (var i=0; i < globalNames.length; i++)//Equanto o vetor I for menor que globalNames
    {
        
        var button = createDeleteButton();
        var span = createSpan(currentName);
        var currentName = globalNames[i];
        var li=document.createElement('li');

        li.appendChild(button)
        li.appendChild(span)

        ul.appendChild(li)
    }
    divNames.appendChild(ul);
    clearInput();
}
function clearInput(){
    InputName.value= ' ';
    InputName.focus();
}
