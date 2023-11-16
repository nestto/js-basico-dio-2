// Função 
const nomeHeroi = "Ernestinho";
calculoSaldoRankeadas(0, 0);

function calculoSaldoRankeadas(vitorias, derrotas) {
  let resultadoRankeadas = vitorias - derrotas;

  if (vitorias <= 0) {
    resultado = "Complete mais partidas para obter um resultado";
  } else if (vitorias < 10) {
    resultado = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    resultado = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    resultado = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    resultado = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    resultado = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    resultado = "Lendário";
  } else {
    resultado = "Imortal";
  }
  return resultadoRankeadas;
}

// Exibindo mensagem de 
console.log(`${nomeHeroi} está no ranking: ${resultado}`);
