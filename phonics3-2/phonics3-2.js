const heading = document.getElementById('heading')
const startButton = document.getElementById('start-btn')
const showButton = document.getElementById('show-btn')
const nextButton = document.getElementById('next-btn')
const soundButton = document.getElementById('sound-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const textInput = document.getElementById('text-input')
const submitButton = document.getElementById('submit-btn')

let shuffledQuestions
let currentQuestionIndex = 0

startButton.addEventListener('click', startQuiz)
soundButton.addEventListener('click', showQuestion)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
submitButton.addEventListener('click', submitAnswer)
showButton.addEventListener('click', showAnswer)
textInput.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    submitButton.click();
  }
});

function startQuiz() {
  currentQuestionIndex = 0
  startButton.classList.add('hide') //hide start button
  heading.classList.add('hide') //hide heading
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  questionContainer.classList.remove('hide') //show question container
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion()
}

function showQuestion() {
  playAudio[shuffledQuestions[currentQuestionIndex].audioIndex]()
}

function submitAnswer() {
  let correct
  let currentQuestion = shuffledQuestions[currentQuestionIndex]
  if(textInput.value == ''){
    alert("답을 입력해주세요.")
  } else {
    if(textInput.value.toLowerCase() == currentQuestion.answer){
      correct = true
      soundCorrect.play()
    } else {
      correct=false
      soundIncorrect.play()
      showButton.classList.remove('hide')
    }
    setStatusClass(document.body, correct)
    
    if(questions.length > currentQuestionIndex + 1){
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = '다시 하기'
      startButton.classList.remove('hide')
    }
  }
}

function showAnswer() {
  alert("정답은 " + shuffledQuestions[currentQuestionIndex].answer + " 입니다.")
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  showButton.classList.add('hide')
  textInput.value = ''
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

const audio = [
  new Audio("/mp3/phonics3-2/bane.mp3"),
  new Audio("/mp3/phonics3-2/bite.mp3"),
  new Audio("/mp3/phonics3-2/bone.mp3"),
  new Audio("/mp3/phonics3-2/fume.mp3"),
  new Audio("/mp3/phonics3-2/cabe.mp3"),
  new Audio("/mp3/phonics3-2/cape.mp3"),
  new Audio("/mp3/phonics3-2/cope.mp3"),
  new Audio("/mp3/phonics3-2/cote.mp3"),
  new Audio("/mp3/phonics3-2/cube.mp3"),
  new Audio("/mp3/phonics3-2/cute.mp3"),
  new Audio("/mp3/phonics3-2/dade.mp3"),
  new Audio("/mp3/phonics3-2/dide.mp3"),
  new Audio("/mp3/phonics3-2/dime.mp3"),
  new Audio("/mp3/phonics3-2/dude.mp3"),
  new Audio("/mp3/phonics3-2/dune.mp3"),
  new Audio("/mp3/phonics3-2/fade.mp3"),
  new Audio("/mp3/phonics3-2/fane.mp3"),
  new Audio("/mp3/phonics3-2/fate.mp3"),
  new Audio("/mp3/phonics3-2/fine.mp3"),
  new Audio("/mp3/phonics3-2/fite.mp3"),
  new Audio("/mp3/phonics3-2/hide.mp3"),
  new Audio("/mp3/phonics3-2/hope.mp3"),
  new Audio("/mp3/phonics3-2/kite.mp3"),
  new Audio("/mp3/phonics3-2/late.mp3"),
  new Audio("/mp3/phonics3-2/lipe.mp3"),
  new Audio("/mp3/phonics3-2/mape.mp3"),
  new Audio("/mp3/phonics3-2/mate.mp3"),
  new Audio("/mp3/phonics3-2/mule.mp3"),
  new Audio("/mp3/phonics3-2/mone.mp3"),
  new Audio("/mp3/phonics3-2/mune.mp3"),
  new Audio("/mp3/phonics3-2/mute.mp3"),
  new Audio("/mp3/phonics3-2/nade.mp3"),
  new Audio("/mp3/phonics3-2/nape.mp3"),
  new Audio("/mp3/phonics3-2/node.mp3"),
  new Audio("/mp3/phonics3-2/tune.mp3"),
  new Audio("/mp3/phonics3-2/duke.mp3"),
  new Audio("/mp3/phonics3-2/pane.mp3"),
  new Audio("/mp3/phonics3-2/june.mp3"),
  new Audio("/mp3/phonics3-2/pope.mp3"),
  new Audio("/mp3/phonics3-2/rake.mp3"),
  new Audio("/mp3/phonics3-2/rane.mp3"),
  new Audio("/mp3/phonics3-2/rate.mp3"),
  new Audio("/mp3/phonics3-2/ride.mp3"),
  new Audio("/mp3/phonics3-2/ripe.mp3"),
  new Audio("/mp3/phonics3-2/robe.mp3"),
  new Audio("/mp3/phonics3-2/rote.mp3"),
  new Audio("/mp3/phonics3-2/rune.mp3"),
  new Audio("/mp3/phonics3-2/sade.mp3"),
  new Audio("/mp3/phonics3-2/lane.mp3"),
  new Audio("/mp3/phonics3-2/tape.mp3"),
  new Audio("/mp3/phonics3-2/tine.mp3"),
  new Audio("/mp3/phonics3-2/tube.mp3"),
  new Audio("/mp3/phonics3-2/line.mp3"),
  new Audio("/mp3/phonics3-2/date.mp3")
]
const soundCorrect = new Audio("/mp3/sound_correct.mp3")
const soundIncorrect = new Audio("/mp3/sound_incorrect.mp3")
soundIncorrect.volume = 0.3

let playAudio = []
for(let i=0;i<audio.length;i++){
  playAudio.push(function() {audio[i].play()})
}

const questions = [
  {
    audioIndex: 0,
    answer: 'bane'
  },
  {
    audioIndex: 1,
    answer: 'bite'
  },
  {
    audioIndex: 2,
    answer: 'bone'
  },
  {
    audioIndex: 3,
    answer: 'fume'
  },
  {
    audioIndex: 4,
    answer: 'cabe'
  },
  {
    audioIndex: 5,
    answer: 'cape'
  },
  {
    audioIndex: 6,
    answer: 'cope'
  },
  {
    audioIndex: 7,
    answer: 'cote'
  },
  {
    audioIndex: 8,
    answer: 'cube'
  },
  {
    audioIndex: 9,
    answer: 'cute'
  },
  {
    audioIndex: 10,
    answer: 'dade'
  },
  {
    audioIndex: 11,
    answer: 'dide'
  },
  {
    audioIndex: 12,
    answer: 'dime'
  },
  {
    audioIndex: 13,
    answer: 'dude'
  },
  {
    audioIndex: 14,
    answer: 'dune'
  },
  {
    audioIndex: 15,
    answer: 'fade'
  },
  {
    audioIndex: 16,
    answer: 'fane'
  },
  {
    audioIndex: 17,
    answer: 'fate'
  },
  {
    audioIndex: 18,
    answer: 'fine'
  },
  {
    audioIndex: 19,
    answer: 'fite'
  },
  {
    audioIndex: 20,
    answer: 'hide'
  },
  {
    audioIndex: 21,
    answer: 'hope'
  },
  {
    audioIndex: 22,
    answer: 'kite'
  },
  {
    audioIndex: 23,
    answer: 'late'
  },
  {
    audioIndex: 24,
    answer: 'lipe'
  },
  {
    audioIndex: 25,
    answer: 'mape'
  },
  {
    audioIndex: 26,
    answer: 'mate'
  },
  {
    audioIndex: 27,
    answer: 'mule'
  },
  {
    audioIndex: 28,
    answer: 'mone'
  },
  {
    audioIndex: 29,
    answer: 'mune'
  },
  {
    audioIndex: 30,
    answer: 'mute'
  },
  {
    audioIndex: 31,
    answer: 'nade'
  },
  {
    audioIndex: 32,
    answer: 'nape'
  },
  {
    audioIndex: 33,
    answer: 'node'
  },
  {
    audioIndex: 34,
    answer: 'tune'
  },
  {
    audioIndex: 35,
    answer: 'duke'
  },
  {
    audioIndex: 36,
    answer: 'pane'
  },
  {
    audioIndex: 37,
    answer: 'june'
  },
  {
    audioIndex: 38,
    answer: 'pope'
  },
  {
    audioIndex: 39,
    answer: 'rake'
  },
  {
    audioIndex: 40,
    answer: 'rane'
  },
  {
    audioIndex: 41,
    answer: 'rate'
  },
  {
    audioIndex: 42,
    answer: 'ride'
  },
  {
    audioIndex: 43,
    answer: 'ripe'
  },
  {
    audioIndex: 44,
    answer: 'robe'
  },
  {
    audioIndex: 45,
    answer: 'rote'
  },
  {
    audioIndex: 46,
    answer: 'rune'
  },
  {
    audioIndex: 47,
    answer: 'sade'
  },
  {
    audioIndex: 48,
    answer: 'lane'
  },
  {
    audioIndex: 49,
    answer: 'tape'
  },
  {
    audioIndex: 50,
    answer: 'tine'
  },
  {
    audioIndex: 51,
    answer: 'tube'
  },
  {
    audioIndex: 52,
    answer: 'line'
  },
  {
    audioIndex: 53,
    answer: 'date'
  }
]
