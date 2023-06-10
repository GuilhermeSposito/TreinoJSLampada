let div = document.getElementById('container')


function acender(){

    div.innerHTML=''

    let img = document.createElement('img')
    img.setAttribute('src' , 'lampada (1).png')

    div.appendChild(img)

    document.body.style.backgroundColor = 'black'

    let inputNovo = document.createElement('input')
    inputNovo.setAttribute('type' , 'button')
    inputNovo.setAttribute('value' , 'Apagar')
    inputNovo.style.backgroundColor = 'white'
    inputNovo.style.color = 'black'

    div.appendChild(inputNovo)

    inputNovo.addEventListener('click' , apagar)

    function apagar(){
        div.innerHTML = ''
        document.body.style.backgroundColor = 'white'

        
        img.setAttribute('src' , 'lampada.png')

        div.appendChild(img)

        inputNovo.setAttribute('value' , 'acender')
        inputNovo.style.backgroundColor = 'black'
        inputNovo.style.color = 'white'
        inputNovo.addEventListener('click' , acender) 

        div.appendChild(inputNovo)

    }


}