let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

// I made the choice to make the number of exams flexible, in case the functions were to be re-used in other contexts. This came at the cost of another variable since the only other alternative was to tightly couple the number of objects in the 'exams' property's array with the values in the input data: it is currently the only way of knowing, by looking at how many exams each student took in this data. Then what happens if a certain student missed an exam?)

function generateClassRecordSummary(scores, numberOfExams = 4) {
  return {
    studentGrades: calculateStudentGrades(scores),
    exams: processExamData(scores, numberOfExams),
  };
}

function calculateStudentGrades(studentData) {
  return Object.keys(studentData).map(student => {
    const examAverage = mean(studentData[student].scores.exams);
    const exerciseTotals = sum(studentData[student].scores.exercises);
    const weightedScore = Math.round(applyWeights([examAverage, exerciseTotals]))

    return `${weightedScore} (${selectGrade(weightedScore)})`
  });
}

function processExamData(studentData, numberOfExams) {
  return [...(' '.repeat(numberOfExams))].map((_, examIndex) => { // number of exams no longer hard-coded
    let currentMin = 100;
    let currentMax = 0;
    let allScores = [];

    Object.keys(studentData).forEach(student => {  
      const examScore = studentData[student].scores.exams[examIndex];

      allScores.push(examScore);

      currentMin = Math.min.apply(0, [currentMin, examScore]);
      currentMax = Math.max.apply(0, [currentMax, examScore]);
    });

    return {
      average: +(mean(allScores).toFixed(1)),
      minimum: currentMin,
      maximum: currentMax,
    } 
  });
}

function selectGrade(results) {
  switch (true) {
    case results > 92 :
      return "A"
    case results <= 92 && results > 84 :
      return "B"
    case results <= 84 && results > 76 :
      return "C"
    case results <= 76 && results > 68 :
      return "D"
    case results <= 68 && results > 59 :
      return "E"
    default: return "F"
  }
}

function applyWeights(scoresArray, weightsArray = [0.65, 0.35]) {
  return scoresArray.reduce( (totalScore, currentScore, index) => totalScore + weightsArray[index] * currentScore, 0)
}

function sum(array) {
  return array.reduce((total, num) => total + num)
}

function mean(array) {
  return sum(array) / array.length
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }