const api = require('./auth/api')
const ui = require('./auth/ui')
// const board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                 [0, 3, 6], [1, 4, 7], [2, 5, 8],
                 [0, 4, 8], [6, 4, 2]]

const xArray = []
const oArray = []
let over = false
let currentplayer = 'X'

const xwinner = function () {
  $.each(winning, function (index, value) {
    if (xArray.includes(value[0]) &&
      xArray.includes(value[1]) &&
      xArray.includes(value[2])) {
      over = true
      console.log('winner!')
    }
  })
}

const owinner = function () {
  $.each(winning, function (index, value) {
    if (oArray.includes(value[0]) &&
      oArray.includes(value[1]) &&
      oArray.includes(value[2])) {
      over = true
      console.log('winner!')
    }
  })
}

const clickcheck = function () {
  if ($(event.target).attr('src') === 'https://raw.githubusercontent.com/Anddrew914/TicTacToe/master/assets/images/exes1.png' ||
      $(event.target).attr('src') === 'https://raw.githubusercontent.com/Anddrew914/TicTacToe/master/assets/images/ohs1.png') {
    return true
  }
}

// Click controller
const gamePlay = function () {
  if (over === true) {
    console.log("Game's over!")
    return
  }
  if (clickcheck() === true) {
    console.log("I can't do that here!")
    return
  }
  const idnumber = $(this).data('id')
  if (currentplayer === 'X') {
    $(this).attr('src', 'https://raw.githubusercontent.com/Anddrew914/TicTacToe/master/assets/images/exes1.png')
    xArray.push(idnumber)
    currentplayer = 'O'
    xwinner()
  } else {
    $(this).attr('src', 'https://raw.githubusercontent.com/Anddrew914/TicTacToe/master/assets/images/ohs1.png')
    oArray.push(idnumber)
    currentplayer = 'X'
    owinner()
  }
  const gameData = {
    'game': {
      'cell': {
        'index': idnumber,
        'value': currentplayer
      },
      'over': over
    }
  }
  api.update(gameData)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

$('.btn-group').on('click', '.signUp', function (evt) {
  $('#sign-up').toggle()
})
$('.btn-group').on('click', '.signIn', function (evt) {
  $('#sign-in').toggle()
})
const addHandlers = () => {
  $('img').on('click', gamePlay)
}
module.exports = {
  addHandlers
}
