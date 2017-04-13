// const board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                 [0, 3, 6], [1, 4, 7], [2, 5, 8],
                 [0, 4, 8], [6, 4, 2]]

const xArray = []
const oArray = []
let gameState = open
let currentplayer = 'x'

const xwinner = function () {
  $.each(winning, function (index, value) {
    if (xArray.includes(value[0]) &&
      xArray.includes(value[1]) &&
      xArray.includes(value[2])) {
      gameState = 'over'
      console.log('winner!')
    }
  })
}

const owinner = function () {
  $.each(winning, function (index, value) {
    if (oArray.includes(value[0]) &&
      oArray.includes(value[1]) &&
      oArray.includes(value[2])) {
      gameState = 'over'
      console.log('winner!')
    }
  })
}

const clickcheck = function () {
  if ($(event.target).attr('src') === 'assets/styles/images/exes1.png' ||
      $(event.target).attr('src') === 'assets/styles/images/ohs1.png') {
    return true
  }
}

const statecheck = function () {
  if (gameState === 'over') {
    return true
  }
}

// Click controller
$('#playarea').on('click', 'img', function (evt) {
  if (statecheck() === true) {
    console.log("Game's over!")
    return
  }
  if (clickcheck() === true) {
    console.log("I can't do that here!")
    return
  }
  const idnumber = $(evt.target).data('id')
  if (currentplayer === 'x') {
    $(this).attr('src', 'assets/styles/images/exes1.png')
    xArray.push(idnumber)
    currentplayer = 'o'
    return xwinner()
  } else {
    $(this).attr('src', 'assets/styles/images/ohs1.png')
    oArray.push(idnumber)
    currentplayer = 'x'
    return owinner()
  }
})

$('.btn-group').on('click', '.signUp', function (evt) {
  $('#sign-up').toggle()
})
$('.btn-group').on('click', '.signIn', function (evt) {
  $('#sign-in').toggle()
})
// $('.btn-group').on('click', '.signIn', function (evt) {
//   $('#sign-in').toggle()
// })
