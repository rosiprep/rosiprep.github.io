const heading = document.getElementById('heading')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const soundButton = document.getElementById('sound-btn')
const questionContainer = document.getElementById('question-container')
const letterContainer = document.getElementById('letter-container')
const questionElement = document.getElementById('question')
const textInput = document.getElementById('text-input')
const submitButton = document.getElementById('submit-btn')

let shuffledQuestions
let currentQuestionIndex = 0

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  soundButton.removeEventListener('click', playAudio[shuffledQuestions[currentQuestionIndex].audioIndex])
  currentQuestionIndex++
  setNextQuestion()
})
submitButton.addEventListener('click', submitAnswer)

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
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(Q) {
  soundButton.addEventListener('click', playAudio[Q.audioIndex]);playAudio[Q.audioIndex]()
  for(let i=0;i<Q.letters;i++){
    letterContainer.innerHTML += 'ㅡ '
  }
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
    }
    setStatusClass(document.body, correct)
    
    if(questions.length > currentQuestionIndex + 1){
      nextButton.classList.remove('hide')
    } else {
      soundButton.removeEventListener('click', playAudio[shuffledQuestions[currentQuestionIndex].audioIndex])
      startButton.innerText = '다시 하기'
      startButton.classList.remove('hide')
    }
  }
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  textInput.value = ''
  letterContainer.innerHTML = '글자 수: '
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
  new Audio("/mp3/phonics3/alligator.mp3"),  //0 A
  new Audio("/mp3/phonics3/banch.mp3"),      //1 B
  new Audio("/mp3/phonics3/bench.mp3"),      //2 B
  new Audio("/mp3/phonics3/blame.mp3"),    //3 B
  new Audio("/mp3/phonics3/black.mp3"),      //4 B
  new Audio("/mp3/phonics3/blade.mp3"),      //5 B
  new Audio("/mp3/phonics3/blame.mp3"),      //6 B
  new Audio("/mp3/phonics3/branch.mp3"),     //7 B
  new Audio("/mp3/phonics3/brick.mp3"),      //8 B
  new Audio("/mp3/phonics3/bride.mp3"),      //9 B
  new Audio("/mp3/phonics3/brush.mp3"),      //10B
  new Audio("/mp3/phonics3/cage.mp3"),       //11C
  new Audio("/mp3/phonics3/short.mp3"),      //12C
  new Audio("/mp3/phonics3/chin.mp3"),       //13C
  new Audio("/mp3/phonics3/chip.mp3"),       //14C
  new Audio("/mp3/phonics3/chop.mp3"),       //15C
  new Audio("/mp3/phonics3/shut.mp3"),       //16C
  new Audio("/mp3/phonics3/clap.mp3"),       //17C
  new Audio("/mp3/phonics3/cliff.mp3"),      //18C
  new Audio("/mp3/phonics3/cold.mp3"),       //19C
  new Audio("/mp3/phonics3/crab.mp3"),       //20C
  new Audio("/mp3/phonics3/crime.mp3"),      //21C
  new Audio("/mp3/phonics3/cross.mp3"),      //22C
  new Audio("/mp3/phonics3/cut.mp3"),        //23C
  new Audio("/mp3/phonics3/drab.mp3"),       //24D
  new Audio("/mp3/phonics3/dress.mp3"),      //25D
  new Audio("/mp3/phonics3/drum.mp3"),       //26D
  new Audio("/mp3/phonics3/shine.mp3"),       //27F
  new Audio("/mp3/phonics3/fish.mp3"),       //28F
  new Audio("/mp3/phonics3/flag.mp3"),       //29F
  new Audio("/mp3/phonics3/frame.mp3"),      //30F
  new Audio("/mp3/phonics3/frog.mp3"),       //31F
  new Audio("/mp3/phonics3/from.mp3"),       //32F
  new Audio("/mp3/phonics3/swam.mp3"),    //33G
  new Audio("/mp3/phonics3/glass.mp3"),      //34G
  new Audio("/mp3/phonics3/globe.mp3"),      //35G
  new Audio("/mp3/phonics3/gold.mp3"),       //36G
  new Audio("/mp3/phonics3/grape.mp3"),      //37G
  new Audio("/mp3/phonics3/grass.mp3"),      //38G
  new Audio("/mp3/phonics3/shame.mp3"),        //39G
  new Audio("/mp3/phonics3/flame.mp3"),        //40G
  new Audio("/mp3/phonics3/lunch.mp3"),      //41L
  new Audio("/mp3/phonics3/plan.mp3"),       //42P
  new Audio("/mp3/phonics3/shape.mp3"),      //43S
  new Audio("/mp3/phonics3/ship.mp3"),       //44S
  new Audio("/mp3/phonics3/shop.mp3"),       //45S
  new Audio("/mp3/phonics3/slave.mp3"),      //46S
  new Audio("/mp3/phonics3/sled.mp3"),       //47S
  new Audio("/mp3/phonics3/slid.mp3"),       //48S
  new Audio("/mp3/phonics3/slide.mp3"),      //49S
  new Audio("/mp3/phonics3/slime.mp3"),      //50S
  new Audio("/mp3/phonics3/sell.mp3"),      //51S
  new Audio("/mp3/phonics3/smile.mp3"),      //52S
  new Audio("/mp3/phonics3/snack.mp3"),      //53S
  new Audio("/mp3/phonics3/snake.mp3"),      //54S
  new Audio("/mp3/phonics3/spade.mp3"),      //55S
  new Audio("/mp3/phonics3/spin.mp3"),       //56S
  new Audio("/mp3/phonics3/spine.mp3"),      //57S
  new Audio("/mp3/phonics3/stone.mp3"),      //58S
  new Audio("/mp3/phonics3/stove.mp3"),      //59S
  new Audio("/mp3/phonics3/swim.mp3"),       //60S
  new Audio("/mp3/phonics3/swing.mp3"),      //61S
  new Audio("/mp3/phonics3/wish.mp3"),       //62W
  new Audio("/mp3/phonics3/wine.mp3")        //63W
]
const soundCorrect = new Audio("/mp3/sound_correct.mp3")
const soundIncorrect = new Audio("/mp3/sound_incorrect.mp3")
soundIncorrect.volume = 0.3

let playAudio = []
for(let i=0;i<audio.length;i++){
  playAudio.push(function() {audio[i].play()})
}

const questions = [
  { //alligator
    audioIndex: 0,
    letters: 9,
    answer: 'alligator'
  },
  { //banch
    audioIndex: 1,
    letters: 5,
    answer: 'banch'
  },
  { //bench
    audioIndex: 2,
    letters: 5,
    answer: 'bench'
  },
  { //bicycle
    audioIndex: 3,
    letters: 5,
    answer: 'blame'
  },
  { //black
    audioIndex: 4,
    letters: 5,
    answer: 'black'
  },
  { //blade
    audioIndex: 5,
    letters: 5,
    answer: 'blade'
  },
  { //blame
    audioIndex: 6,
    letters: 5,
    answer: 'blame'
  },
  { //branch
    audioIndex: 7,
    letters: 6,
    answer: 'branch'
  },
  { //brick
    audioIndex: 8,
    letters: 5,
    answer: 'brick'
  },
  {
    audioIndex: 9,
    letters: 5,
    answer: 'bride'
  },
  { //brush
    audioIndex: 10,
    letters: 5,
    answer: 'brush'
  },
  {
    audioIndex: 11,
    letters: 4,
    answer: 'cage'
  },
  { //candy
    audioIndex: 12,
    letters: 5,
    answer: 'short'
  },
  {
    audioIndex: 13,
    letters: 4,
    answer: 'chin'
  },
  {
    audioIndex: 14,
    letters: 4,
    answer: 'chip'
  },
  {
    audioIndex: 15,
    letters: 4,
    answer: 'chop'
  },
  {
    audioIndex: 16,
    letters: 4,
    answer: 'shut'
  },
  {
    audioIndex: 17,
    letters: 4,
    answer: 'clap'
  },
  { //cliff
    audioIndex: 18,
    letters: 5,
    answer: 'cliff'
  },/*
  {
    audioIndex: 19,
    letters: 4,
    answer: 'cold'
  },*/
  {
    audioIndex: 20,
    letters: 4,
    answer: 'crab'
  },
  { //crime
    audioIndex: 21,
    letters: 5,
    answer: 'crime'
  },
  {
    audioIndex: 22,
    letters: 5,
    answer: 'cross'
  },
  { //cut
    audioIndex: 23,
    letters: 3,
    answer: 'cut'
  },
  { //drab
    audioIndex: 24,
    letters: 4,
    answer: 'drab'
  },
  {
    audioIndex: 25,
    letters: 5,
    answer: 'dress'
  },
  { //drum
    audioIndex: 26,
    letters: 4,
    answer: 'drum'
  },
  { //face
    audioIndex: 27,
    letters: 5,
    answer: 'shine'
  },
  { //fish
    audioIndex: 28,
    letters: 4,
    answer: 'fish'
  },
  { //flag
    audioIndex: 29,
    letters: 4,
    answer: 'flag'
  },
  { //frame
    audioIndex: 30,
    letters: 5,
    answer: 'frame'
  },
  { //frog
    audioIndex: 31,
    letters: 4,
    answer: 'frog'
  },
  { //from
    audioIndex: 32,
    letters: 4,
    answer: 'from'
  },
  { //giraffe
    audioIndex: 33,
    letters: 4,
    answer: 'swam'
  },
  {
    audioIndex: 34,
    letters: 5,
    answer: 'glass'
  },
  {
    audioIndex: 35,
    letters: 5,
    answer: 'globe'
  },
  {
    audioIndex: 36,
    letters: 4,
    answer: 'gold'
  },
  {
    audioIndex: 37,
    letters: 5,
    answer: 'grape'
  },
  {
    audioIndex: 38,
    letters: 5,
    answer: 'grass'
  },
  {
    audioIndex: 39,
    letters: 5,
    answer: 'shame'
  },
  {
    audioIndex: 40,
    letters: 5,
    answer: 'flame'
  },
  {
    audioIndex: 41,
    letters: 5,
    answer: 'lunch'
  },
  {
    audioIndex: 42,
    letters: 4,
    answer: 'plan'
  },
  {
    audioIndex: 43,
    letters: 5,
    answer: 'shape'
  },
  {
    audioIndex: 44,
    letters: 4,
    answer: 'ship'
  },
  {
    audioIndex: 45,
    letters: 4,
    answer: 'shop'
  },
  { //slave
    audioIndex: 46,
    letters: 5,
    answer: 'slave'
  },
  { //sled
    audioIndex: 47,
    letters: 4,
    answer: 'sled'
  },
  { //slid
    audioIndex: 48,
    letters: 4,
    answer: 'slid'
  },
  { //slide
    audioIndex: 49,
    letters: 5,
    answer: 'slide'
  },
  { //slime
    audioIndex: 50,
    letters: 5,
    answer: 'slime'
  },
  {  
    audioIndex: 51,
    letters: 4,
    answer: 'sell'
  },
  {
    audioIndex: 52,
    letters: 5,
    answer: 'smile'
  },
  {
    audioIndex: 53,
    letters: 5,
    answer: 'snack'
  },
  {
    audioIndex: 54,
    letters: 5,
    answer: 'snake'
  },
  {
    audioIndex: 55,
    letters: 5,
    answer: 'spade'
  },
  { //spin
    audioIndex: 56,
    letters: 4,
    answer: 'spin'
  },
  {
    audioIndex: 57,
    letters: 5,
    answer: 'spine'
  },
  {
    audioIndex: 58,
    letters: 5,
    answer: 'stone'
  },
  {
    audioIndex: 59,
    letters: 5,
    answer: 'stove'
  },
  {
    audioIndex: 60,
    letters: 4,
    answer: 'swim'
  },
  {
    audioIndex: 61,
    letters: 5,
    answer: 'swing'
  },
  {
    audioIndex: 62,
    letters: 4,
    answer: 'wish'
  },
  {
    audioIndex: 63,
    letters: 4,
    answer: 'wine'
  }
]
