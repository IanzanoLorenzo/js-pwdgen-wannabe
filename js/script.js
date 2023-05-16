let nome = prompt('Qual è il tuo nome?');
let cognome = prompt('Qual è il tuo cognome?')
let colorePreferito = prompt('Qual è il tuo colore preferito?')
document.getElementById('password').innerHTML = `La tua password è: ${nome + cognome + colorePreferito}21`