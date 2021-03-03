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
  new Audio("/mp3/phonics4/grapes.mp3"),        //24
  new Audio("/mp3/phonics4/hair.mp3"),          //25
  new Audio("/mp3/phonics4/hand.mp3"),          //26
  new Audio("/mp3/phonics4/helmet.mp3"),        //27
  new Audio("/mp3/phonics4/hive.mp3"),          //28
  new Audio("/mp3/phonics4/horn.mp3"),          //29
  new Audio("/mp3/phonics4/jam.mp3"),           //30
  new Audio("/mp3/phonics4/jelly.mp3"),         //31
  new Audio("/mp3/phonics4/jewel.mp3"),         //32
  new Audio("/mp3/phonics4/jug.mp3"),           //33
  new Audio("/mp3/phonics4/juice.mp3"),         //34
  new Audio("/mp3/phonics4/ketchup.mp3"),       //35
  new Audio("/mp3/phonics4/key.mp3"),           //36
  new Audio("/mp3/phonics4/kids.mp3"),          //37
  new Audio("/mp3/phonics4/kiss.mp3"),          //38
  new Audio("/mp3/phonics4/koala.mp3"),         //39
  new Audio("/mp3/phonics4/ladder.mp3"),        //40
  new Audio("/mp3/phonics4/lamp.mp3"),          //41
  new Audio("/mp3/phonics4/leaf.mp3"),          //42
  new Audio("/mp3/phonics4/lemon.mp3"),         //43
  new Audio("/mp3/phonics4/log.mp3"),           //44
  new Audio("/mp3/phonics4/mask.mp3"),          //45
  new Audio("/mp3/phonics4/mirror.mp3"),        //46
  new Audio("/mp3/phonics4/mittens.mp3"),       //47
  new Audio("/mp3/phonics4/moon.mp3"),          //48
  new Audio("/mp3/phonics4/mouth.mp3"),         //49
  new Audio("/mp3/phonics4/nail.mp3"),          //50
  new Audio("/mp3/phonics4/necktie.mp3"),       //51
  new Audio("/mp3/phonics4/notes.mp3"),         //52
  new Audio("/mp3/phonics4/numbers.mp3"),       //53
  new Audio("/mp3/phonics4/nuts.mp3"),          //54
  new Audio("/mp3/phonics4/pepper.mp3"),        //55
  new Audio("/mp3/phonics4/plant.mp3"),         //56
  new Audio("/mp3/phonics4/pool.mp3"),          //57
  new Audio("/mp3/phonics4/pot.mp3"),           //58
  new Audio("/mp3/phonics4/puppy.mp3"),         //59
  new Audio("/mp3/phonics4/quail.mp3"),         //60
  new Audio("/mp3/phonics4/quarter.mp3"),       //61
  new Audio("/mp3/phonics4/queen.mp3"),         //62
  new Audio("/mp3/phonics4/question mark.mp3"), //63
  new Audio("/mp3/phonics4/quiet.mp3"),         //64
  new Audio("/mp3/phonics4/radish.mp3"),        //65
  new Audio("/mp3/phonics4/raisin.mp3"),        //66
  new Audio("/mp3/phonics4/raspberry.mp3"),     //67
  new Audio("/mp3/phonics4/rice.mp3"),          //68
  new Audio("/mp3/phonics4/roast beef.mp3"),    //69
  new Audio("/mp3/phonics4/scarf.mp3"),         //70
  new Audio("/mp3/phonics4/skateboard.mp3"),    //71
  new Audio("/mp3/phonics4/soccer ball.mp3"),   //72
  new Audio("/mp3/phonics4/socks.mp3"),         //73
  new Audio("/mp3/phonics4/sweater.mp3"),       //74
  new Audio("/mp3/phonics4/ten.mp3"),           //75
  new Audio("/mp3/phonics4/tent.mp3"),          //76
  new Audio("/mp3/phonics4/tooth.mp3"),         //77
  new Audio("/mp3/phonics4/truck.mp3"),         //78
  new Audio("/mp3/phonics4/turtle.mp3"),        //79
  new Audio("/mp3/phonics4/van.mp3"),           //80
  new Audio("/mp3/phonics4/vase.mp3"),          //81
  new Audio("/mp3/phonics4/vest.mp3"),          //82
  new Audio("/mp3/phonics4/violet.mp3"),        //83
  new Audio("/mp3/phonics4/volcano.mp3"),       //84
  new Audio("/mp3/phonics4/watermelon.mp3"),    //85
  new Audio("/mp3/phonics4/wing.mp3"),          //86
  new Audio("/mp3/phonics4/winter.mp3"),        //87
  new Audio("/mp3/phonics4/wolf.mp3"),          //88
  new Audio("/mp3/phonics4/worm.mp3"),          //89
  new Audio("/mp3/phonics4/yacht.mp3"),         //90
  new Audio("/mp3/phonics4/yak.mp3"),           //91
  new Audio("/mp3/phonics4/yam.mp3"),           //92
  new Audio("/mp3/phonics4/yarn.mp3"),          //93
  new Audio("/mp3/phonics4/yell.mp3"),          //94
  new Audio("/mp3/phonics4/zebra.mp3"),         //95
  new Audio("/mp3/phonics4/zero.mp3"),          //96
  new Audio("/mp3/phonics4/zigzag.mp3"),        //97
  new Audio("/mp3/phonics4/zipper.mp3"),        //98
  new Audio("/mp3/phonics4/zucchini.mp3")       //99
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
  },
  {
    audioIndex: 25,
    answer: 8
  },
  { //
    audioIndex: 26,
    answer: 8
  },
  { //
    audioIndex: 27,
    answer: 8
  },
  { //
    audioIndex: 28,
    answer: 8
  },
  { //
    audioIndex: 29,
    answer: 8
  },
  { //
    audioIndex: 30,
    answer: 10
  },
  { //
    audioIndex: 31,
    answer: 10
  },
  { //
    audioIndex: 32,
    answer: 10
  },
  { //
    audioIndex: 33,
    answer: 10
  },
  {
    audioIndex: 34,
    answer: 10
  },
  {
    audioIndex: 35,
    answer: 11
  },
  {
    audioIndex: 36,
    answer: 11
  },
  {
    audioIndex: 37,
    answer: 11
  },
  {
    audioIndex: 38,
    answer: 11
  },
  {
    audioIndex: 39,
    answer: 11
  },
  {
    audioIndex: 40,
    answer: 12
  },
  {
    audioIndex: 41,
    answer: 12
  },
  {
    audioIndex: 42,
    answer: 12
  },
  {
    audioIndex: 43,
    answer: 12
  },
  {
    audioIndex: 44,
    answer: 12
  },
  {
    audioIndex: 45,
    answer: 13
  },
  { //
    audioIndex: 46,
    answer: 13
  },
  { //
    audioIndex: 47,
    answer: 13
  },
  { //
    audioIndex: 48,
    answer: 13
  },
  { //
    audioIndex: 49,
    answer: 13
  },
  { //
    audioIndex: 50,
    answer: 14
  },
  {  
    audioIndex: 51,
    answer: 14
  },
  {
    audioIndex: 52,
    answer: 14
  },
  {
    audioIndex: 53,
    answer: 14
  },
  {
    audioIndex: 54,
    answer: 14
  },
  {
    audioIndex: 55,
    answer: 16
  },
  { //
    audioIndex: 56,
    answer: 16
  },
  {
    audioIndex: 57,
    answer: 16
  },
  {
    audioIndex: 58,
    answer: 16
  },
  {
    audioIndex: 59,
    answer: 16
  },
  {
    audioIndex: 60,
    answer: 17
  },
  {
    audioIndex: 61,
    answer: 17
  },
  {
    audioIndex: 62,
    answer: 17
  },
  {
    audioIndex: 63,
    answer: 17
  },
  {
    audioIndex: 64,
    answer: 17
  },
  {
    audioIndex: 65,
    answer: 18
  },
  {
    audioIndex: 66,
    answer: 18
  },
  {
    audioIndex: 67,
    answer: 18
  },
  {
    audioIndex: 68,
    answer: 18
  },
  {
    audioIndex: 69,
    answer: 18
  },
  {
    audioIndex: 70,
    answer: 19
  },
  {
    audioIndex: 71,
    answer: 19
  },
  {
    audioIndex: 72,
    answer: 19
  },
  {
    audioIndex: 73,
    answer: 19
  },
  {
    audioIndex: 74,
    answer: 19
  },
  {
    audioIndex: 75,
    answer: 20
  },
  {
    audioIndex: 76,
    answer: 20
  },
  {
    audioIndex: 77,
    answer: 20
  },
  {
    audioIndex: 78,
    answer: 20
  },
  {
    audioIndex: 79,
    answer: 20
  },
  {
    audioIndex: 80,
    answer: 22
  },
  {
    audioIndex: 81,
    answer: 22
  },
  {
    audioIndex: 82,
    answer: 22
  },
  {
    audioIndex: 83,
    answer: 22
  },
  {
    audioIndex: 84,
    answer: 22
  },
  {
    audioIndex: 85,
    answer: 23
  },
  {
    audioIndex: 86,
    answer: 23
  },
  {
    audioIndex: 87,
    answer: 23
  },
  {
    audioIndex: 88,
    answer: 23
  },
  {
    audioIndex: 89,
    answer: 23
  },
  {
    audioIndex: 90,
    answer: 25
  },
  {
    audioIndex: 91,
    answer: 25
  },
  {
    audioIndex: 92,
    answer: 25
  },
  {
    audioIndex: 93,
    answer: 25
  },
  {
    audioIndex: 94,
    answer: 25
  },
  {
    audioIndex: 95,
    answer: 26
  },
  {
    audioIndex: 96,
    answer: 26
  },
  {
    audioIndex: 97,
    answer: 26
  },
  {
    audioIndex: 98,
    answer: 26
  },
  {
    audioIndex: 99,
    answer: 26
  }
]
