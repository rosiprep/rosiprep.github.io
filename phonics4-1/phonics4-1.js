const heading = document.getElementById('heading')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const soundButton = document.getElementById('sound-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const answerList = [ //list of available answers, capitalized alphabets in this case.
  {
    answerid: 1,
    letter: 'A',
    correct: false
  },
  {
    answerid: 2,
    letter: 'B',
    correct: false
  },
  {
    answerid: 3,
    letter: 'C',
    correct: false
  },
  {
    answerid: 4,
    letter: 'D',
    correct: false
  },
  {
    answerid: 5,
    letter: 'E',
    correct: false
  },
  {
    answerid: 6,
    letter: 'F',
    correct: false
  },
  {
    answerid: 7,
    letter: 'G',
    correct: false
  },
  {
    answerid: 8,
    letter: 'H',
    correct: false
  },
  {
    answerid: 9,
    letter: 'I',
    correct: false
  },
  {
    answerid: 10,
    letter: 'J',
    correct: false
  },
  {
    answerid: 11,
    letter: 'K',
    correct: false
  },
  {
    answerid: 12,
    letter: 'L',
    correct: false
  },
  {
    answerid: 13,
    letter: 'M',
    correct: false
  },
  {
    answerid: 14,
    letter: 'N',
    correct: false
  },
  {
    answerid: 15,
    letter: 'O',
    correct: false
  },
  {
    answerid: 16,
    letter: 'P',
    correct: false
  },
  {
    answerid: 17,
    letter: 'Q',
    correct: false
  },
  {
    answerid: 18,
    letter: 'R',
    correct: false
  },
  {
    answerid: 19,
    letter: 'S',
    correct: false
  },
  {
    answerid: 20,
    letter: 'T',
    correct: false
  },
  {
    answerid: 21,
    letter: 'U',
    correct: false
  },
  {
    answerid: 22,
    letter: 'V',
    correct: false
  },
  {
    answerid: 23,
    letter: 'W',
    correct: false
  },
  {
    answerid: 24,
    letter: 'X',
    correct: false
  },
  {
    answerid: 25,
    letter: 'Y',
    correct: false
  },
  {
    answerid: 26,
    letter: 'Z',
    correct: false
  }
]
let shuffledQuestions, shuffledAnswerList, choiceList = [] 
let currentQuestionIndex = 0

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  answerList[shuffledQuestions[currentQuestionIndex].answer-1].correct = false
  soundButton.removeEventListener('click', playAudio[shuffledQuestions[currentQuestionIndex].audioIndex])
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz() {
  choiceList = []
  currentQuestionIndex = 0
  startButton.classList.add('hide') //hide start button
  heading.classList.add('hide') //hide heading
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  questionContainer.classList.remove('hide') //show question container
  setNextQuestion()
}
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(Q) {
  soundButton.addEventListener('click', playAudio[Q.audioIndex]);playAudio[Q.audioIndex]()
  shuffledAnswerList = JSON.parse(JSON.stringify(answerList))
  shuffle(shuffledAnswerList)
  for(let i=0, j=0;j < 4;i++) {
    if(shuffledAnswerList[i].answerid != Q.answer){
      choiceList.push(shuffledAnswerList[i])
      j++
    } else {
      //do nothing
    }
  }
  choiceList.push(answerList[Q.answer-1])
  choiceList[4].correct = true
  shuffle(choiceList)
  choiceList.forEach(choice => {
    const button = document.createElement('button')
    button.innerText = choice.letter
    button.classList.add('btn')
    if(choice.correct){
      button.dataset.correct = choice.correct
    }

    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  choiceList = []
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  if(correct) soundCorrect.play()
  else soundIncorrect.play()
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(questions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  } else {
    answerList[shuffledQuestions[currentQuestionIndex].answer-1].correct = false
    soundButton.removeEventListener('click', playAudio[shuffledQuestions[currentQuestionIndex].audioIndex])
    startButton.innerText = '다시 하기'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if(correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const audio = [
  new Audio("/mp3/phonics4/basket.mp3"),        //0 
  new Audio("/mp3/phonics4/bear.mp3"),          //1 
  new Audio("/mp3/phonics4/bed.mp3"),           //2 
  new Audio("/mp3/phonics4/beetle.mp3"),        //3 
  new Audio("/mp3/phonics4/bubbles.mp3"),       //4 
  new Audio("/mp3/phonics4/candle.mp3"),        //5 
  new Audio("/mp3/phonics4/cloud.mp3"),         //6 
  new Audio("/mp3/phonics4/comb.mp3"),          //7 
  new Audio("/mp3/phonics4/cow.mp3"),           //8 
  new Audio("/mp3/phonics4/crown.mp3"),         //9 
  new Audio("/mp3/phonics4/deer.mp3"),          //10
  new Audio("/mp3/phonics4/dinosaur.mp3"),      //11
  new Audio("/mp3/phonics4/dog.mp3"),           //12
  new Audio("/mp3/phonics4/dot.mp3"),           //13
  new Audio("/mp3/phonics4/drum.mp3"),          //14
  new Audio("/mp3/phonics4/face.mp3"),          //15
  new Audio("/mp3/phonics4/fire.mp3"),          //16
  new Audio("/mp3/phonics4/flower.mp3"),        //17
  new Audio("/mp3/phonics4/football.mp3"),      //18
  new Audio("/mp3/phonics4/forest.mp3"),        //19
  new Audio("/mp3/phonics4/game.mp3"),          //20
  new Audio("/mp3/phonics4/glasses.mp3"),       //21
  new Audio("/mp3/phonics4/globe.mp3"),         //22
  new Audio("/mp3/phonics4/gloves.mp3"),        //23
  new Audio("/mp3/phonics4/grapes.mp3")         //24
]
const soundCorrect = new Audio("/mp3/sound_correct.mp3")
const soundIncorrect = new Audio("/mp3/sound_incorrect.mp3")
soundIncorrect.volume = 0.3

let playAudio = []
for(let i=0;i<audio.length;i++){
  playAudio.push(function() {audio[i].play()})
}

const questions = [
  { //basket
    audioIndex: 0,
    answer: 2
  },
  { //
    audioIndex: 1,
    answer: 2
  },
  { //
    audioIndex: 2,
    answer: 2
  },
  { //
    audioIndex: 3,
    answer: 2
  },
  { //
    audioIndex: 4,
    answer: 2
  },
  { //
    audioIndex: 5,
    answer: 3
  },
  { //
    audioIndex: 6,
    answer: 3
  },
  { //
    audioIndex: 7,
    answer: 3
  },
  { //
    audioIndex: 8,
    answer: 3
  },
  {
    audioIndex: 9,
    answer: 3
  },
  { //
    audioIndex: 10,
    answer: 4
  },
  {
    audioIndex: 11,
    answer: 4
  },
  { //
    audioIndex: 12,
    answer: 4
  },
  {
    audioIndex: 13,
    answer: 4
  },
  {
    audioIndex: 14,
    answer: 4
  },
  {
    audioIndex: 15,
    answer: 6
  },
  {
    audioIndex: 16,
    answer: 6
  },
  {
    audioIndex: 17,
    answer: 6
  },
  { //
    audioIndex: 18,
    answer: 6
  },
  {
    audioIndex: 19,
    answer: 6
  },
  {
    audioIndex: 20,
    answer: 7
  },
  { //
    audioIndex: 21,
    answer: 7
  },
  {
    audioIndex: 22,
    answer: 7
  },
  { //
    audioIndex: 23,
    answer: 7
  },
  { //
    audioIndex: 24,
    answer: 7
  }
]
