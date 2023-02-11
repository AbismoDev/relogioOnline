import turno from "./turnoDias.js"

function tempoRelogio(){
    let dataRelogio = new Date()
    let horas = dataRelogio.getHours()
    let minutos = dataRelogio.getMinutes()
    let segundos = dataRelogio.getSeconds()
    let msg = document.getElementById('msg')

    document.getElementById('relogio').innerHTML = `${horas} : ${minutos} : ${segundos}`

    turno(horas)
}

window.addEventListener('load', tempoRelogio)

export default tempoRelogio