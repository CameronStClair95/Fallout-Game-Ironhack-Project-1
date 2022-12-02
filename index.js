const holdingScreen = document.querySelector('.holding-screen');
holdingScreen.addEventListener('click',()=>{
  holdingScreen.style.opacity = 0;
  setTimeout(()=>{
    holdingScreen.classList.add('hidden')
  },610)
})

function displayQuiz(){
  const startQuiz = document.getElementById('quiz');
  startQuiz.style.display = 'block'
}


const quizQuestions = [
  {
      question: "Which famous monument did Shah Jahān build to immortalize his wife??",
      a: "Taj Mahal",
      b: "Angkor Wat",
      c: "The Jãmeh Mosque of Isfahān ",
      d: "Golestan Palace",
      correct: "a",
  },
  {
      question: "Which two Asian countries are divided by the 38th parallel?",
      a: "North and South Vietnam",
      b: "North and South Korea",
      c: "Thailand and Malaysia",
      d: "Laos and Cambodia",
      correct: "b",
  },
  {
      question: "How many presidents were born before the United States became a nation?",
      a: "8",
      b: "5",
      c: "12",
      d: "10",
      correct: "a",
  },
  {
      question: "Which peasant girl led the French army at Orléans during the Hundred Years’ War?",
      a: "Elizabeth I",
      b: "Joan of Arc",
      c: "Eleanor of Aquitaine",
      d: "none of the above",
      correct: "b",
  },
  {
    question: "Who was the architect who rebuilt London after the Great Fire of 1666?",
    a: "Christopher Wren",
    b: "Christopher Columbus",
    c: "I.M. Pei",
    d: "Christopher Robin",
    correct: "a",
},{
  question: "Who was the wartime nurse known as the 'Lady with the Lamp'?",
  a: "Florence Nightingale",
  b: "Edith Cavell",
  c: "Mother Theresa",
  d: "Flora Macdonald",
  correct: "a",
},{
  question: "What American president is associated with the Teddy Bear?",
  a: "Theodore Roosevelt",
  b: "Ted Kennedy",
  c: "Richard Nixon",
  d: "Woodrow Wilson",
  correct: "a",
},{
  question: "Which era immediately followed the American Civil War?",
  a: "Reconstruction",
  b: "Gilded Age",
  c: "Renaissance",
  d: "Reformation",
  correct: "a",
},{
  question: "In what country did the Battle of Waterloo take place?",
  a: "Belgium",
  b: "France",
  c: "Germany",
  d: "The Netherlands",
  correct: "a",
},
{
  question: "What was American abolitionist Harriet Tubman’s original name?",
  a: "Araminta Ross",
  b: "Harriet Jones",
  c: "Anges Tubman",
  d: "Chloe Abernathy",
  correct: "a",
},
];

// currentQuizTings
// currentQuizData = quizData


let currentQuizTings = 0
let quizScore = 0
const myQuiz = document.getElementById('quiz')
const quizAnswers = document.querySelectorAll('.answer')
const quizQuestion = document.getElementById('question')
const question_a = document.getElementById('question_a')
const question_b = document.getElementById('question_b')
const question_c = document.getElementById('question_c')
const question_d = document.getElementById('question_d')
const submitButton = document.getElementById('submit')
loadQuiz()

function loadQuiz() {
  uncheckedAnswers()
  const quizData = quizQuestions[currentQuizTings]
  quizQuestion.innerText = quizData.question
  question_a.innerText = quizData.a
  question_b.innerText = quizData.b
  question_c.innerText = quizData.c
  question_d.innerText = quizData.d
}

function uncheckedAnswers() {
  quizAnswers.forEach(quizAnswers => quizAnswers.checked = false)
}

function checkedAnswer() {
  let answer
  quizAnswers.forEach(quizAnswers => {
      if(quizAnswers.checked) {
          answer = quizAnswers.id
      }
  })
  return answer
}

submitButton.addEventListener('click', () => {
  const answer = checkedAnswer()

  if(answer) {
     if(answer === quizQuestions[currentQuizTings].correct) {
         quizScore++
     }
     currentQuizTings++
     if(currentQuizTings < quizQuestions.length) {
         loadQuiz()
     } else {
        checkScore()
     }
  }
})

function checkScore(){
  myQuiz.innerHTML =  `<h3>You answered ${quizScore} out of ${quizQuestions.length} questions correctly.<h3>`
  if(quizScore > 7){
    myQuiz.innerHTML += `You have been selected for the next round` 
  } else {
    myQuiz.innerHTML += `You have not been selected for the next round. Better luck next time`  }
}