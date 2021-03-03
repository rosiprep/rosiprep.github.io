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
  answerList[shuffledQuestions[currentQuestionIndex]-1].correct = false
  soundButton.removeEventListener('click', playAudio[shuffledQuestions[currentQuestionIndex]-1])
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
  soundButton.addEventListener('click', playAudio[Q-1]);playAudio[Q-1]()
  shuffledAnswerList = JSON.parse(JSON.stringify(answerList))
  shuffle(shuffledAnswerList)
  for(let i=0, j=0;j < 3;i++) {
    if(shuffledAnswerList[i].answerid != Q){
      choiceList.push(shuffledAnswerList[i])
      j++
    } else {
      //do nothing
    }
  }
  choiceList.push(answerList[Q-1])
  choiceList[3].correct = true
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
    answerList[shuffledQuestions[currentQuestionIndex]-1].correct = false
    soundButton.removeEventListener('click', playAudio[shuffledQuestions[currentQuestionIndex]-1])
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
  new Audio("/mp3/phonics1/audioA.mp3"),
  new Audio("/mp3/phonics1/audioB.mp3"),
  new Audio("/mp3/phonics1/audioC.mp3"),
  new Audio("/mp3/phonics1/audioD.mp3"),
  new Audio("/mp3/phonics1/audioE.mp3"),
  new Audio("/mp3/phonics1/audioF.mp3"),
  new Audio("/mp3/phonics1/audioG.mp3"),
  new Audio("/mp3/phonics1/audioH.mp3"),
  new Audio("/mp3/phonics1/audioI.mp3"),
  new Audio("/mp3/phonics1/audioJ.mp3"),
  new Audio("/mp3/phonics1/audioK.mp3"),
  new Audio("/mp3/phonics1/audioL.mp3"),
  new Audio("/mp3/phonics1/audioM.mp3"),
  new Audio("/mp3/phonics1/audioN.mp3"),
  new Audio("/mp3/phonics1/audioO.mp3"),
  new Audio("/mp3/phonics1/audioP.mp3"),
  new Audio("/mp3/phonics1/audioQ.mp3"),
  new Audio("/mp3/phonics1/audioR.mp3"),
  new Audio("/mp3/phonics1/audioS.mp3"),
  new Audio("/mp3/phonics1/audioT.mp3"),
  new Audio("/mp3/phonics1/audioU.mp3"),
  new Audio("/mp3/phonics1/audioV.mp3"),
  new Audio("/mp3/phonics1/audioW.mp3"),
  new Audio("/mp3/phonics1/audioX.mp3"),
  new Audio("/mp3/phonics1/audioY.mp3"),
  new Audio("/mp3/phonics1/audioZ.mp3")
]
const soundCorrect = new Audio("/mp3/sound_correct.mp3")
const soundIncorrect = new Audio("/mp3/sound_incorrect.mp3")
soundIncorrect.volume = 0.3

let playAudio = []
for(let i=0;i<26;i++){
  playAudio.push(function() {audio[i].play()})
}

const questions = []
for(let i=1;i<27;i++) questions.push(i)
