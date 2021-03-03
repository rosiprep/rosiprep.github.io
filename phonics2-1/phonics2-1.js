const heading = document.getElementById('heading')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const alphabetGrid = document.getElementById('alphabet-grid')
const alphabetGridElements = [
  document.getElementById('alphabet-1'),
  document.getElementById('alphabet-2'),
  document.getElementById('alphabet-3'),
  document.getElementById('alphabet-4'),
  document.getElementById('alphabet-5'),
  document.getElementById('alphabet-6'),
  document.getElementById('alphabet-7'),
  document.getElementById('alphabet-8'),
  document.getElementById('alphabet-9'),
  document.getElementById('alphabet-10'),
  document.getElementById('alphabet-11'),
  document.getElementById('alphabet-12'),
  document.getElementById('alphabet-13'),
  document.getElementById('alphabet-14'),
  document.getElementById('alphabet-15'),
  document.getElementById('alphabet-16'),
  document.getElementById('alphabet-17'),
  document.getElementById('alphabet-18'),
  document.getElementById('alphabet-19'),
  document.getElementById('alphabet-20'),
  document.getElementById('alphabet-21'),
  document.getElementById('alphabet-22'),
  document.getElementById('alphabet-23'),
  document.getElementById('alphabet-24'),
  document.getElementById('alphabet-25'),
  document.getElementById('alphabet-26')  
]
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

let shuffledAnswerList, choiceList = []
let currentQuestionIndex = 0

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz() {
  choiceList = []
  currentQuestionIndex = 0
  for(let i=0;i<26;i++) {
    alphabetGridElements[i].classList.add('hide')
    let emptyItem = document.createElement('div')
    emptyItem.innerHTML= i+1
    emptyItem.classList.add('alphabet-grid-item-empty')
    alphabetGrid.appendChild(emptyItem)
  }
  startButton.classList.add('hide') //hide start button
  heading.classList.add('hide') //hide heading
  questionContainer.classList.remove('hide') //show question container
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(questions[currentQuestionIndex])
}

function showQuestion(Q) {
  questionElement.innerText = Q.question;
  let correctAnswer = Q.answer
  shuffledAnswerList = JSON.parse(JSON.stringify(answerList))
  shuffle(shuffledAnswerList)
  for(let i=0, j=0;j < 4;i++) {
    if(shuffledAnswerList[i].answerid != correctAnswer){
      choiceList.push(shuffledAnswerList[i])
      j++
    } else {
      //do nothing
    }
  }
  choiceList.push(answerList[correctAnswer-1])
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
  if(currentQuestionIndex != 0) answerList[currentQuestionIndex-1].correct = false
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
  alphabetGridElements[currentQuestionIndex].classList.remove('hide')
  alphabetGrid.removeChild(alphabetGrid.children[26])
  if(questions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  } else {
    answerList[currentQuestionIndex].correct = false
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

const soundCorrect = new Audio("/mp3/sound_correct.mp3")
const soundIncorrect = new Audio("/mp3/sound_incorrect.mp3")
soundIncorrect.volume = 0.3

const questions = [
  {
    question: '알파벳 순서에서 1번째 알파벳을 고르세요.',
    answer: 1
  },
  {
    question: '알파벳 순서에서 2번째 알파벳을 고르세요.',
    answer: 2
  },
  {
    question: '알파벳 순서에서 3번째 알파벳을 고르세요.',
    answer: 3
  },
  {
    question: '알파벳 순서에서 4번째 알파벳을 고르세요.',
    answer: 4
  },
  {
    question: '알파벳 순서에서 5번째 알파벳을 고르세요.',
    answer: 5
  },
  {
    question: '알파벳 순서에서 6번째 알파벳을 고르세요.',
    answer: 6
  },
  {
    question: '알파벳 순서에서 7번째 알파벳을 고르세요.',
    answer: 7
  },
  {
    question: '알파벳 순서에서 8번째 알파벳을 고르세요.',
    answer: 8
  },
  {
    question: '알파벳 순서에서 9번째 알파벳을 고르세요.',
    answer: 9
  },
  {
    question: '알파벳 순서에서 10번째 알파벳을 고르세요.',
    answer: 10
  },
  {
    question: '알파벳 순서에서 11번째 알파벳을 고르세요.',
    answer: 11
  },
  {
    question: '알파벳 순서에서 12번째 알파벳을 고르세요.',
    answer: 12
  },
  {
    question: '알파벳 순서에서 13번째 알파벳을 고르세요.',
    answer: 13
  },
  {
    question: '알파벳 순서에서 14번째 알파벳을 고르세요.',
    answer: 14
  },
  {
    question: '알파벳 순서에서 15번째 알파벳을 고르세요.',
    answer: 15
  },
  {
    question: '알파벳 순서에서 16번째 알파벳을 고르세요.',
    answer: 16
  },
  {
    question: '알파벳 순서에서 17번째 알파벳을 고르세요.',
    answer: 17
  },
  {
    question: '알파벳 순서에서 18번째 알파벳을 고르세요.',
    answer: 18
  },
  {
    question: '알파벳 순서에서 19번째 알파벳을 고르세요.',
    answer: 19
  },
  {
    question: '알파벳 순서에서 20번째 알파벳을 고르세요.',
    answer: 20
  },
  {
    question: '알파벳 순서에서 21번째 알파벳을 고르세요.',
    answer: 21
  },
  {
    question: '알파벳 순서에서 22번째 알파벳을 고르세요.',
    answer: 22
  },
  {
    question: '알파벳 순서에서 23번째 알파벳을 고르세요.',
    answer: 23
  },
  {
    question: '알파벳 순서에서 24번째 알파벳을 고르세요.',
    answer: 24
  },
  {
    question: '알파벳 순서에서 25번째 알파벳을 고르세요.',
    answer: 25
  },
  {
    question: '알파벳 순서에서 26번째 알파벳을 고르세요.',
    answer: 26
  }
]
