const board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                 [0, 3, 6], [1, 4, 7], [2, 5, 8],
                 [0, 4, 8], [6, 4, 2]]

const x = []

const winner = function () {
  $.each(winning, function (index, value) {
    if (x.includes(value[0]) &&
      x.includes(value[1]) &&
      x.includes(value[2])) {
      console.log('winner!')
    }
  })
}
// Changes image
$('#playarea').on('click', 'img', function (evt) {
  $(this).attr('src', 'assets/styles/images/ohs.png')
  const idnumber = $(evt.target).data('id')
  x.push(idnumber)
  return winner()
})
