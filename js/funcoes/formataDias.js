    let listaSemana = ['Domingo', 'Segunda-Feira','Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    let listaMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    
    function formataDiaSemana(diaSemana){
        return listaSemana[diaSemana]
    }

    function formataMes(mes){
        return listaMes[mes]
    } 

    function insereData(diaMes, diaSemana, mes, ano){
        return `${diaSemana}, ${diaMes} de ${mes} de ${ano}`
    }

    export {formataDiaSemana, formataMes, insereData}