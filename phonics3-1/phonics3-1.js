const heading = document.getElementById('heading')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const soundButton = document.getElementById('sound-btn')
const questionContainer = document.getElementById('question-container')
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
  new Audio("/mp3/phonics3-1/bad.mp3"),
  new Audio("/mp3/phonics3-1/bag.mp3"),
  new Audio("/mp3/phonics3-1/ban.mp3"),
  new Audio("/mp3/phonics3-1/bat.mp3"),
  new Audio("/mp3/phonics3-1/bed.mp3"),
  new Audio("/mp3/phonics3-1/beg.mp3"),
  new Audio("/mp3/phonics3-1/Ben.mp3"),
  new Audio("/mp3/phonics3-1/bet.mp3"),
  new Audio("/mp3/phonics3-1/big.mp3"),
  new Audio("/mp3/phonics3-1/bin.mp3"),
  new Audio("/mp3/phonics3-1/bit.mp3"),
  new Audio("/mp3/phonics3-1/box.mp3"),
  new Audio("/mp3/phonics3-1/bud.mp3"),
  new Audio("/mp3/phonics3-1/bug.mp3"),
  new Audio("/mp3/phonics3-1/bum.mp3"),
  new Audio("/mp3/phonics3-1/bun.mp3"),
  new Audio("/mp3/phonics3-1/bus.mp3"),
  new Audio("/mp3/phonics3-1/but.mp3"),
  new Audio("/mp3/phonics3-1/cab.mp3"),
  new Audio("/mp3/phonics3-1/can.mp3"),
  new Audio("/mp3/phonics3-1/cap.mp3"),
  new Audio("/mp3/phonics3-1/cat.mp3"),
  new Audio("/mp3/phonics3-1/cob.mp3"),
  new Audio("/mp3/phonics3-1/cog.mp3"),
  new Audio("/mp3/phonics3-1/cop.mp3"),
  new Audio("/mp3/phonics3-1/cot.mp3"),
  new Audio("/mp3/phonics3-1/cub.mp3"),
  new Audio("/mp3/phonics3-1/cup.mp3"),
  new Audio("/mp3/phonics3-1/cut.mp3"),
  new Audio("/mp3/phonics3-1/dad.mp3"),
  new Audio("/mp3/phonics3-1/den.mp3"),
  new Audio("/mp3/phonics3-1/did.mp3"),
  new Audio("/mp3/phonics3-1/dig.mp3"),
  new Audio("/mp3/phonics3-1/dim.mp3"),
  new Audio("/mp3/phonics3-1/dip.mp3"),
  new Audio("/mp3/phonics3-1/doc.mp3"),
  new Audio("/mp3/phonics3-1/Don.mp3"),
  new Audio("/mp3/phonics3-1/dot.mp3"),
  new Audio("/mp3/phonics3-1/dud.mp3"),
  new Audio("/mp3/phonics3-1/dug.mp3"),
  new Audio("/mp3/phonics3-1/fad.mp3"),
  new Audio("/mp3/phonics3-1/fan.mp3"),
  new Audio("/mp3/phonics3-1/fat.mp3"),
  new Audio("/mp3/phonics3-1/fax.mp3"),
  new Audio("/mp3/phonics3-1/fed.mp3"),
  new Audio("/mp3/phonics3-1/fig.mp3"),
  new Audio("/mp3/phonics3-1/fin.mp3"),
  new Audio("/mp3/phonics3-1/fit.mp3"),
  new Audio("/mp3/phonics3-1/fix.mp3"),
  new Audio("/mp3/phonics3-1/fog.mp3"),
  new Audio("/mp3/phonics3-1/fox.mp3"),
  new Audio("/mp3/phonics3-1/fun.mp3"),
  new Audio("/mp3/phonics3-1/gag.mp3"),
  new Audio("/mp3/phonics3-1/gas.mp3"),
  new Audio("/mp3/phonics3-1/get.mp3"),
  new Audio("/mp3/phonics3-1/got.mp3"),
  new Audio("/mp3/phonics3-1/gum.mp3"),
  new Audio("/mp3/phonics3-1/gun.mp3"),
  new Audio("/mp3/phonics3-1/gut.mp3"),
  new Audio("/mp3/phonics3-1/had.mp3"),
  new Audio("/mp3/phonics3-1/ham.mp3"),
  new Audio("/mp3/phonics3-1/hat.mp3"),
  new Audio("/mp3/phonics3-1/hem.mp3"),
  new Audio("/mp3/phonics3-1/hen.mp3"),
  new Audio("/mp3/phonics3-1/hid.mp3"),
  new Audio("/mp3/phonics3-1/him.mp3"),
  new Audio("/mp3/phonics3-1/hip.mp3"),
  new Audio("/mp3/phonics3-1/hit.mp3"),
  new Audio("/mp3/phonics3-1/hog.mp3"),
  new Audio("/mp3/phonics3-1/hop.mp3"),
  new Audio("/mp3/phonics3-1/hot.mp3"),
  new Audio("/mp3/phonics3-1/hub.mp3"),
  new Audio("/mp3/phonics3-1/hut.mp3"),
  new Audio("/mp3/phonics3-1/jet.mp3"),
  new Audio("/mp3/phonics3-1/jig.mp3"),
  new Audio("/mp3/phonics3-1/jim.mp3"),
  new Audio("/mp3/phonics3-1/job.mp3"),
  new Audio("/mp3/phonics3-1/jog.mp3"),
  new Audio("/mp3/phonics3-1/jot.mp3"),
  new Audio("/mp3/phonics3-1/jug.mp3"),
  new Audio("/mp3/phonics3-1/keg.mp3"),
  new Audio("/mp3/phonics3-1/kid.mp3"),
  new Audio("/mp3/phonics3-1/kit.mp3"),
  new Audio("/mp3/phonics3-1/lab.mp3"),
  new Audio("/mp3/phonics3-1/lad.mp3"),
  new Audio("/mp3/phonics3-1/lap.mp3"),
  new Audio("/mp3/phonics3-1/led.mp3"),
  new Audio("/mp3/phonics3-1/leg.mp3"),
  new Audio("/mp3/phonics3-1/let.mp3"),
  new Audio("/mp3/phonics3-1/lid.mp3"),
  new Audio("/mp3/phonics3-1/lip.mp3"),
  new Audio("/mp3/phonics3-1/lit.mp3"),
  new Audio("/mp3/phonics3-1/log.mp3"),
  new Audio("/mp3/phonics3-1/lot.mp3"),
  new Audio("/mp3/phonics3-1/lox.mp3"),
  new Audio("/mp3/phonics3-1/man.mp3"),
  new Audio("/mp3/phonics3-1/map.mp3"),
  new Audio("/mp3/phonics3-1/mat.mp3"),
  new Audio("/mp3/phonics3-1/meg.mp3"),
  new Audio("/mp3/phonics3-1/men.mp3"),
  new Audio("/mp3/phonics3-1/met.mp3"),
  new Audio("/mp3/phonics3-1/mob.mp3"),
  new Audio("/mp3/phonics3-1/mom.mp3"),
  new Audio("/mp3/phonics3-1/mop.mp3"),
  new Audio("/mp3/phonics3-1/mug.mp3"),
  new Audio("/mp3/phonics3-1/nap.mp3"),
  new Audio("/mp3/phonics3-1/ned.mp3"),
  new Audio("/mp3/phonics3-1/net.mp3"),
  new Audio("/mp3/phonics3-1/nod.mp3"),
  new Audio("/mp3/phonics3-1/not.mp3"),
  new Audio("/mp3/phonics3-1/nun.mp3"),
  new Audio("/mp3/phonics3-1/nut.mp3"),
  new Audio("/mp3/phonics3-1/pad.mp3"),
  new Audio("/mp3/phonics3-1/pan.mp3"),
  new Audio("/mp3/phonics3-1/peg.mp3"),
  new Audio("/mp3/phonics3-1/pen.mp3"),
  new Audio("/mp3/phonics3-1/pig.mp3"),
  new Audio("/mp3/phonics3-1/pin.mp3"),
  new Audio("/mp3/phonics3-1/pit.mp3"),
  new Audio("/mp3/phonics3-1/pod.mp3"),
  new Audio("/mp3/phonics3-1/pop.mp3"),
  new Audio("/mp3/phonics3-1/pot.mp3"),
  new Audio("/mp3/phonics3-1/pub.mp3"),
  new Audio("/mp3/phonics3-1/pun.mp3"),
  new Audio("/mp3/phonics3-1/pup.mp3"),
  new Audio("/mp3/phonics3-1/ram.mp3"),
  new Audio("/mp3/phonics3-1/ran.mp3"),
  new Audio("/mp3/phonics3-1/rap.mp3"),
  new Audio("/mp3/phonics3-1/rat.mp3"),
  new Audio("/mp3/phonics3-1/red.mp3"),
  new Audio("/mp3/phonics3-1/rid.mp3"),
  new Audio("/mp3/phonics3-1/rig.mp3"),
  new Audio("/mp3/phonics3-1/rim.mp3"),
  new Audio("/mp3/phonics3-1/rip.mp3"),
  new Audio("/mp3/phonics3-1/rob.mp3"),
  new Audio("/mp3/phonics3-1/rod.mp3"),
  new Audio("/mp3/phonics3-1/ron.mp3"),
  new Audio("/mp3/phonics3-1/rot.mp3"),
  new Audio("/mp3/phonics3-1/rub.mp3"),
  new Audio("/mp3/phonics3-1/rug.mp3"),
  new Audio("/mp3/phonics3-1/run.mp3"),
  new Audio("/mp3/phonics3-1/sad.mp3"),
  new Audio("/mp3/phonics3-1/sag.mp3"),
  new Audio("/mp3/phonics3-1/sat.mp3"),
  new Audio("/mp3/phonics3-1/sax.mp3"),
  new Audio("/mp3/phonics3-1/set.mp3"),
  new Audio("/mp3/phonics3-1/sin.mp3"),
  new Audio("/mp3/phonics3-1/sip.mp3"),
  new Audio("/mp3/phonics3-1/sis.mp3"),
  new Audio("/mp3/phonics3-1/sit.mp3"),
  new Audio("/mp3/phonics3-1/six.mp3"),
  new Audio("/mp3/phonics3-1/sob.mp3"),
  new Audio("/mp3/phonics3-1/sox.mp3"),
  new Audio("/mp3/phonics3-1/sub.mp3"),
  new Audio("/mp3/phonics3-1/sum.mp3"),
  new Audio("/mp3/phonics3-1/sun.mp3"),
  new Audio("/mp3/phonics3-1/tag.mp3"),
  new Audio("/mp3/phonics3-1/tan.mp3"),
  new Audio("/mp3/phonics3-1/tap.mp3"),
  new Audio("/mp3/phonics3-1/tax.mp3"),
  new Audio("/mp3/phonics3-1/ted.mp3"),
  new Audio("/mp3/phonics3-1/ten.mp3"),
  new Audio("/mp3/phonics3-1/tex.mp3"),
  new Audio("/mp3/phonics3-1/tim.mp3"),
  new Audio("/mp3/phonics3-1/tin.mp3"),
  new Audio("/mp3/phonics3-1/tip.mp3"),
  new Audio("/mp3/phonics3-1/tom.mp3"),
  new Audio("/mp3/phonics3-1/top.mp3"),
  new Audio("/mp3/phonics3-1/tot.mp3"),
  new Audio("/mp3/phonics3-1/tub.mp3"),
  new Audio("/mp3/phonics3-1/tug.mp3"),
  new Audio("/mp3/phonics3-1/tux.mp3"),
  new Audio("/mp3/phonics3-1/van.mp3"),
  new Audio("/mp3/phonics3-1/vet.mp3"),
  new Audio("/mp3/phonics3-1/wag.mp3"),
  new Audio("/mp3/phonics3-1/wax.mp3"),
  new Audio("/mp3/phonics3-1/web.mp3"),
  new Audio("/mp3/phonics3-1/wed.mp3"),
  new Audio("/mp3/phonics3-1/wes.mp3"),
  new Audio("/mp3/phonics3-1/wet.mp3"),
  new Audio("/mp3/phonics3-1/wig.mp3"),
  new Audio("/mp3/phonics3-1/win.mp3"),
  new Audio("/mp3/phonics3-1/yam.mp3"),
  new Audio("/mp3/phonics3-1/yes.mp3"),
  new Audio("/mp3/phonics3-1/yet.mp3"),
  new Audio("/mp3/phonics3-1/yuk.mp3"),
  new Audio("/mp3/phonics3-1/yum.mp3"),
  new Audio("/mp3/phonics3-1/zap.mp3"),
  new Audio("/mp3/phonics3-1/zen.mp3"),
  new Audio("/mp3/phonics3-1/zip.mp3"),
  new Audio("/mp3/phonics3-1/med.mp3")
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
    answer: 'bad'
  },
  {
    audioIndex: 1,
    answer: 'bag'
  },
  {
    audioIndex: 2,
    answer: 'ban'
  },
  {
    audioIndex: 3,
    answer: 'bat'
  },
  {
    audioIndex: 4,
    answer: 'bed'
  },
  {
    audioIndex: 5,
    answer: 'beg'
  },
  {
    audioIndex: 6,
    answer: 'ben'
  },
  {
    audioIndex: 7,
    answer: 'bet'
  },
  {
    audioIndex: 8,
    answer: 'big'
  },
  {
    audioIndex: 9,
    answer: 'bin'
  },
  {
    audioIndex: 10,
    answer: 'bit'
  },
  {
    audioIndex: 11,
    answer: 'box'
  },
  {
    audioIndex: 12,
    answer: 'bud'
  },
  {
    audioIndex: 13,
    answer: 'bug'
  },
  {
    audioIndex: 14,
    answer: 'bum'
  },
  {
    audioIndex: 15,
    answer: 'bun'
  },
  {
    audioIndex: 16,
    answer: 'bus'
  },
  {
    audioIndex: 17,
    answer: 'but'
  },
  {
    audioIndex: 18,
    answer: 'cab'
  },
  {
    audioIndex: 19,
    answer: 'can'
  },
  {
    audioIndex: 20,
    answer: 'cap'
  },
  {
    audioIndex: 21,
    answer: 'cat'
  },
  {
    audioIndex: 22,
    answer: 'cob'
  },
  {
    audioIndex: 23,
    answer: 'cog'
  },
  {
    audioIndex: 24,
    answer: 'cop'
  },
  {
    audioIndex: 25,
    answer: 'cot'
  },
  {
    audioIndex: 26,
    answer: 'cub'
  },
  {
    audioIndex: 27,
    answer: 'cup'
  },
  {
    audioIndex: 28,
    answer: 'cut'
  },
  {
    audioIndex: 29,
    answer: 'dad'
  },
  {
    audioIndex: 30,
    answer: 'den'
  },
  {
    audioIndex: 31,
    answer: 'did'
  },
  {
    audioIndex: 32,
    answer: 'dig'
  },
  {
    audioIndex: 33,
    answer: 'dim'
  },
  {
    audioIndex: 34,
    answer: 'dip'
  },
  {
    audioIndex: 35,
    answer: 'doc'
  },
  {
    audioIndex: 36,
    answer: 'don'
  },
  {
    audioIndex: 37,
    answer: 'dot'
  },
  {
    audioIndex: 38,
    answer: 'dud'
  },
  {
    audioIndex: 39,
    answer: 'dug'
  },
  {
    audioIndex: 40,
    answer: 'fad'
  },
  {
    audioIndex: 41,
    answer: 'fan'
  },
  {
    audioIndex: 42,
    answer: 'fat'
  },
  {
    audioIndex: 43,
    answer: 'fax'
  },
  {
    audioIndex: 44,
    answer: 'fed'
  },
  {
    audioIndex: 45,
    answer: 'fig'
  },
  {
    audioIndex: 46,
    answer: 'fin'
  },
  {
    audioIndex: 47,
    answer: 'fit'
  },
  {
    audioIndex: 48,
    answer: 'fix'
  },
  {
    audioIndex: 49,
    answer: 'fog'
  },
  {
    audioIndex: 50,
    answer: 'fox'
  },
  {
    audioIndex: 51,
    answer: 'fun'
  },
  {
    audioIndex: 52,
    answer: 'gag'
  },
  {
    audioIndex: 53,
    answer: 'gas'
  },
  {
    audioIndex: 54,
    answer: 'get'
  },
  {
    audioIndex: 55,
    answer: 'got'
  },
  {
    audioIndex: 56,
    answer: 'gum'
  },
  {
    audioIndex: 57,
    answer: 'gun'
  },
  {
    audioIndex: 58,
    answer: 'gut'
  },
  {
    audioIndex: 59,
    answer: 'had'
  },
  {
    audioIndex: 60,
    answer: 'ham'
  },
  {
    audioIndex: 61,
    answer: 'hat'
  },
  {
    audioIndex: 62,
    answer: 'hem'
  },
  {
    audioIndex: 63,
    answer: 'hen'
  },
  {
    audioIndex: 64,
    answer: 'hid'
  },
  {
    audioIndex: 65,
    answer: 'him'
  },
  {
    audioIndex: 66,
    answer: 'hip'
  },
  {
    audioIndex: 67,
    answer: 'hit'
  },
  {
    audioIndex: 68,
    answer: 'hog'
  },
  {
    audioIndex: 69,
    answer: 'hop'
  },
  {
    audioIndex: 70,
    answer: 'hot'
  },
  {
    audioIndex: 71,
    answer: 'hub'
  },
  {
    audioIndex: 72,
    answer: 'hut'
  },
  {
    audioIndex: 73,
    answer: 'jet'
  },
  {
    audioIndex: 74,
    answer: 'jig'
  },
  {
    audioIndex: 75,
    answer: 'jim'
  },
  {
    audioIndex: 76,
    answer: 'job'
  },
  {
    audioIndex: 77,
    answer: 'jog'
  },
  {
    audioIndex: 78,
    answer: 'jot'
  },
  {
    audioIndex: 79,
    answer: 'jug'
  },
  {
    audioIndex: 80,
    answer: 'keg'
  },
  {
    audioIndex: 81,
    answer: 'kid'
  },
  {
    audioIndex: 82,
    answer: 'kit'
  },
  {
    audioIndex: 83,
    answer: 'lab'
  },
  {
    audioIndex: 84,
    answer: 'lad'
  },
  {
    audioIndex: 85,
    answer: 'lap'
  },
  {
    audioIndex: 86,
    answer: 'led'
  },
  {
    audioIndex: 87,
    answer: 'leg'
  },
  {
    audioIndex: 88,
    answer: 'let'
  },
  {
    audioIndex: 89,
    answer: 'lid'
  },
  {
    audioIndex: 90,
    answer: 'lip'
  },
  {
    audioIndex: 91,
    answer: 'lit'
  },
  {
    audioIndex: 92,
    answer: 'log'
  },
  {
    audioIndex: 93,
    answer: 'lot'
  },
  {
    audioIndex: 94,
    answer: 'lox'
  },
  {
    audioIndex: 95,
    answer: 'man'
  },
  {
    audioIndex: 96,
    answer: 'map'
  },
  {
    audioIndex: 97,
    answer: 'mat'
  },
  {
    audioIndex: 98,
    answer: 'meg'
  },
  {
    audioIndex: 99,
    answer: 'men'
  },
  {
    audioIndex: 100,
    answer: 'met'
  },
  {
    audioIndex: 101,
    answer: 'mob'
  },
  {
    audioIndex: 102,
    answer: 'mom'
  },
  {
    audioIndex: 103,
    answer: 'mop'
  },
  {
    audioIndex: 104,
    answer: 'mug'
  },
  {
    audioIndex: 105,
    answer: 'nap'
  },
  {
    audioIndex: 106,
    answer: 'ned'
  },
  {
    audioIndex: 107,
    answer: 'net'
  },
  {
    audioIndex: 108,
    answer: 'nod'
  },
  {
    audioIndex: 109,
    answer: 'not'
  },
  {
    audioIndex: 110,
    answer: 'nun'
  },
  {
    audioIndex: 111,
    answer: 'nut'
  },
  {
    audioIndex: 112,
    answer: 'pad'
  },
  {
    audioIndex: 113,
    answer: 'pan'
  },
  {
    audioIndex: 114,
    answer: 'peg'
  },
  {
    audioIndex: 115,
    answer: 'pen'
  },
  {
    audioIndex: 116,
    answer: 'pig'
  },
  {
    audioIndex: 117,
    answer: 'pin'
  },
  {
    audioIndex: 118,
    answer: 'pit'
  },
  {
    audioIndex: 119,
    answer: 'pod'
  },
  {
    audioIndex: 120,
    answer: 'pop'
  },
  {
    audioIndex: 121,
    answer: 'pot'
  },
  {
    audioIndex: 122,
    answer: 'pub'
  },
  {
    audioIndex: 123,
    answer: 'pun'
  },
  {
    audioIndex: 124,
    answer: 'pup'
  },
  {
    audioIndex: 125,
    answer: 'ram'
  },
  {
    audioIndex: 126,
    answer: 'ran'
  },
  {
    audioIndex: 127,
    answer: 'rap'
  },
  {
    audioIndex: 128,
    answer: 'rat'
  },
  {
    audioIndex: 129,
    answer: 'red'
  },
  {
    audioIndex: 130,
    answer: 'rid'
  },
  {
    audioIndex: 131,
    answer: 'rig'
  },
  {
    audioIndex: 132,
    answer: 'rim'
  },
  {
    audioIndex: 133,
    answer: 'rip'
  },
  {
    audioIndex: 134,
    answer: 'rob'
  },
  {
    audioIndex: 135,
    answer: 'rod'
  },
  {
    audioIndex: 136,
    answer: 'ron'
  },
  {
    audioIndex: 137,
    answer: 'rot'
  },
  {
    audioIndex: 138,
    answer: 'rub'
  },
  {
    audioIndex: 139,
    answer: 'rug'
  },
  {
    audioIndex: 140,
    answer: 'run'
  },
  {
    audioIndex: 141,
    answer: 'sad'
  },
  {
    audioIndex: 142,
    answer: 'sag'
  },
  {
    audioIndex: 143,
    answer: 'sat'
  },
  {
    audioIndex: 144,
    answer: 'sax'
  },
  {
    audioIndex: 145,
    answer: 'set'
  },
  {
    audioIndex: 146,
    answer: 'sin'
  },
  {
    audioIndex: 147,
    answer: 'sip'
  },
  {
    audioIndex: 148,
    answer: 'sis'
  },
  {
    audioIndex: 149,
    answer: 'sit'
  },
  {
    audioIndex: 150,
    answer: 'six'
  },
  {
    audioIndex: 151,
    answer: 'sob'
  },
  {
    audioIndex: 152,
    answer: 'sox'
  },
  {
    audioIndex: 153,
    answer: 'sub'
  },
  {
    audioIndex: 154,
    answer: 'sum'
  },
  {
    audioIndex: 155,
    answer: 'sun'
  },
  {
    audioIndex: 156,
    answer: 'tag'
  },
  {
    audioIndex: 157,
    answer: 'tan'
  },
  {
    audioIndex: 158,
    answer: 'tap'
  },
  {
    audioIndex: 159,
    answer: 'tax'
  },
  {
    audioIndex: 160,
    answer: 'ted'
  },
  {
    audioIndex: 161,
    answer: 'ten'
  },
  {
    audioIndex: 162,
    answer: 'tex'
  },
  {
    audioIndex: 163,
    answer: 'tim'
  },
  {
    audioIndex: 164,
    answer: 'tin'
  },
  {
    audioIndex: 165,
    answer: 'tip'
  },
  {
    audioIndex: 166,
    answer: 'tom'
  },
  {
    audioIndex: 167,
    answer: 'top'
  },
  {
    audioIndex: 168,
    answer: 'tot'
  },
  {
    audioIndex: 169,
    answer: 'tub'
  },
  {
    audioIndex: 170,
    answer: 'tug'
  },
  {
    audioIndex: 171,
    answer: 'tux'
  },
  {
    audioIndex: 172,
    answer: 'van'
  },
  {
    audioIndex: 173,
    answer: 'vet'
  },
  {
    audioIndex: 174,
    answer: 'wag'
  },
  {
    audioIndex: 175,
    answer: 'wax'
  },
  {
    audioIndex: 176,
    answer: 'web'
  },
  {
    audioIndex: 177,
    answer: 'wed'
  },
  {
    audioIndex: 178,
    answer: 'wes'
  },
  {
    audioIndex: 179,
    answer: 'wet'
  },
  {
    audioIndex: 180,
    answer: 'wig'
  },
  {
    audioIndex: 181,
    answer: 'win'
  },
  {
    audioIndex: 182,
    answer: 'yam'
  },
  {
    audioIndex: 183,
    answer: 'yes'
  },
  {
    audioIndex: 184,
    answer: 'yet'
  },
  {
    audioIndex: 185,
    answer: 'yuk'
  },
  {
    audioIndex: 186,
    answer: 'yum'
  },
  {
    audioIndex: 187,
    answer: 'zap'
  },
  {
    audioIndex: 188,
    answer: 'zen'
  },
  {
    audioIndex: 189,
    answer: 'zip'
  },
  {
    audioIndex: 190,
    answer: 'med'
  }
]
