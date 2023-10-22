const result = document.querySelector(".result");
let pointsHuman = document.querySelector(".sua-pontuação");
const humanScore = document.querySelector(".sua-pontuação");
const machineScore = document.querySelector(".robo-pontuação");
let humanScoreNumber = 0;
let machineScoreNumber = 0;
const playHuman = (humanChoice) => {
  playGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = [`rock`, `paper`, `scissor`];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playGame = (human, machine) => {
  console.log(`Você: ` + human, `Computador: ` + machine);

  if (human === machine) {
    result.innerHTML = "Deu empate!";
  } else if (
    (human === `paper` && machine === `rock`) ||
    (human === `scissor` && machine === `paper`) ||
    (human === `rock` && machine === `scissor`)
  ) {
    result.innerHTML = "Parabéns,você ganhou!";
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
  } else {
    result.innerHTML = "Você perdeu!";
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
  }
};

// pedra > tesoura > papel
// tesoura > papel > pedra
// papel > pedra > tesoura
