import { formataDiaSemana, formataMes, insereData } from "./funcoes/formataDias.js"
import tempoRelogio from "./funcoes/tempoRelogio.js"

let dataAtual = new Date()        
let diaMes = dataAtual.getDate()
let diaSemana = dataAtual.getDay()
let mes = dataAtual.getMonth()
let ano = dataAtual.getFullYear()   

setInterval(tempoRelogio, 1000) 

let nomeSemana = formataDiaSemana(diaSemana)
let nomeMes = formataMes(mes)
let inserirData = insereData(diaMes, nomeSemana, nomeMes, ano)

document.getElementById('inserirData').innerHTML = inserirData