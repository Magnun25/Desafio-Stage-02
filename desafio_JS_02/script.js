const studants = [
  {
    name: "Rodrigo",
    firstGrade: 8,
    secundGrade: 3,
  },
  {
    name: "Nicolas",
    firstGrade: 9,
    secundGrade: 7,
  },
  {
    name: "Davi",
    firstGrade: 8,
    secundGrade: 10,
  },
  {
    name: "Cristiane",
    firstGrade: 4,
    secundGrade: 6,
  },
];

let averageGrade = (studant) => {
  let average = (studant.firstGrade + studant.secundGrade) / 2;
  return average;
};

function approvalTest(studant) {
  if (averageGrade(studant) >= 7) {
    return `Parabéns ${studant.name}! Você foi aprovado(a) no concurso!`;
  } else {
    return `Não foi desta vez, ${studant.name}! Tente novamente!`;
  }
}

for (const studant of studants) {
  alert(
    `A média do(a) aluno(a) ${studant.name} é: ${averageGrade(studant)}
    ${approvalTest(studant)}`
  );
}
