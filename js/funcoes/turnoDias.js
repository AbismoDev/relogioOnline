    const celula = document.querySelector('.relogio-celula')      

    function dia(){
        document.body.classList.add('dia')       
        document.getElementById('inserirData').classList.add('msg-dia')   
        document.querySelector('.msg').classList.add('msg-dia')     
        document.querySelector('.titulo').classList.add('msg-dia')  
        document.querySelector('.creditos').classList.add('msg-dia')
        document.querySelector('.nav-rodape').classList.add('msg-dia')
        document.querySelector('.icon-coracao').src = './assets/icon-coracao-grafite.svg'
        celula.classList.add('dia-celula')
    }

    function tarde(){
        document.body.classList.add('tarde') 
        document.getElementById('inserirData').classList.add('msg-tarde')       
        document.querySelector('.titulo').classList.add('msg-tarde')  
        document.querySelector('.msg').classList.add('msg-tarde')       
        document.querySelector('.nav-rodape').classList.add('msg-tarde')
        document.querySelector('.creditos').classList.add('msg-tarde')
        document.querySelector('.icon-coracao').src = './assets/icon-coracao-grafite.svg'
        celula.classList.add('tarde-celula')
    }

    function noite(){
        document.body.classList.add('noite')
        document.getElementById('inserirData').classList.add('msg-noite')
        document.querySelector('.titulo').classList.add('msg-noite')
        document.querySelector('.msg').classList.add('msg-noite')
        celula.classList.add('noite-celula')
    }

    function turno(horas){
        if(horas >= 6 && horas <= 12){
            dia();
            return msg.innerHTML = 'Bom Dia!'
        }
        else if(horas > 12 && horas <= 18){
            tarde()
            return msg.innerHTML = 'Boa Tarde!'
        }
        else{
            noite()
            return msg.innerHTML = 'Boa Noite!'
        }
    }

    export default turno