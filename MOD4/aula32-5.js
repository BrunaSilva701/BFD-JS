// 1. Importa o módulo 'os' nativo do Node.js
const os = require('os');

// --- Funções para obter as informações ---

// 2. Nome do sistema operacional
const nomeSO = os.type();

// 3. Tempo de atividade do sistema (uptime)
// O os.uptime() retorna o tempo em segundos. Vamos converter para horas, minutos e segundos para melhor leitura.
const tempoEmSegundos = os.uptime();
const horas = Math.floor(tempoEmSegundos / 3600);
const minutos = Math.floor((tempoEmSegundos % 3600) / 60);
const segundos = Math.floor(tempoEmSegundos % 60);
const tempoAtividade = `${horas} horas, ${minutos} minutos e ${segundos} segundos`;

// 4. Pasta principal do usuário
const pastaPrincipal = os.homedir();


// --- Exibindo as informações no terminal ---

console.log("--- Informações do Sistema ---");
console.log(`Nome do Sistema Operacional: ${nomeSO}`);
console.log(`Tempo de Atividade do Sistema: ${tempoAtividade}`);
console.log(`Pasta Principal do Usuário: ${pastaPrincipal}`);
console.log("------------------------------");