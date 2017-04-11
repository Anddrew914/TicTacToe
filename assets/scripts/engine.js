const board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                 [0, 3, 6], [1, 4, 7], [2, 5, 8],
                 [0, 4, 8], [6, 4, 2]]

const xArray = []
const oArray = []

let currentplayer = 'x'

const xwinner = function () {
  $.each(winning, function (index, value) {
    if (xArray.includes(value[0]) &&
      xArray.includes(value[1]) &&
      xArray.includes(value[2])) {
      console.log('winner!')
    }
  })
}

const owinner = function () {
  $.each(winning, function (index, value) {
    if (oArray.includes(value[0]) &&
      oArray.includes(value[1]) &&
      oArray.includes(value[2])) {
      console.log('winner!')
    }
  })
}

// Click controller
$('#playarea').on('click', 'img', function (evt) {
  const idnumber = $(evt.target).data('id')
  if (currentplayer === 'x') {
    $(this).attr('src', 'assets/styles/images/exes.png')
    xArray.push(idnumber)
    currentplayer = 'o'
    return xwinner()
  } else {
    $(this).attr('src', 'assets/styles/images/ohs.png')
    oArray.push(idnumber)
    currentplayer = 'x'
    return owinner()
  }
})
