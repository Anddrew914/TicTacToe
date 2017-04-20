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
let currentplayerdata = 'O'

const clearBoard = function () {
  xArray.length = 0
  oArray.length = 0
  over = false
  $('div.text-box').text('')
  currentplayer = 'X'
  currentplayerdata = 'O'
}

const xwinner = function () {
  $.each(winning, function (index, value) {
    if (xArray.includes(value[0]) &&
      xArray.includes(value[1]) &&
      xArray.includes(value[2])) {
      over = true
      $('div.text-box').text('X wins!')
      setTimeout(function () {
        $('div.text-box').text('')
      }, 3000)
    }
  })
}

const owinner = function () {
  $.each(winning, function (index, value) {
    if (oArray.includes(value[0]) &&
      oArray.includes(value[1]) &&
      oArray.includes(value[2])) {
      over = true
      $('div.text-box').text('O wins!')
      setTimeout(function () {
        $('div.text-box').text('')
      }, 3000)
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
    return
  }
  if (clickcheck() === true) {
    return
  }
  const idnumber = $(this).data('id')
  if (currentplayer === 'X') {
    $(this).attr('src', 'https://raw.githubusercontent.com/Anddrew914/TicTacToe/master/assets/images/exes1.png')
    xArray.push(idnumber)
    currentplayer = 'O'
    currentplayerdata = 'X'
    xwinner()
  } else {
    $(this).attr('src', 'https://raw.githubusercontent.com/Anddrew914/TicTacToe/master/assets/images/ohs1.png')
    oArray.push(idnumber)
    currentplayer = 'X'
    currentplayerdata = 'O'
    owinner()
  }
  const gameData = {
    'game': {
      'cell': {
        'index': idnumber,
        'value': currentplayerdata
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
  $('#sign-in').hide()
})
$('.btn-group').on('click', '.signIn', function (evt) {
  $('#sign-in').toggle()
  $('#sign-up').hide()
})
$('#create-game').on('submit', clearBoard)

const addHandlers = () => {
  $('img').on('click', gamePlay)
}
module.exports = {
  addHandlers
}
