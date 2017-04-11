'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
})

// $( "#square_0_2" ).click(function() {
//   alert( "Handler for .click() called." );
// });

// $('img').on({
//   'click': function () {
//     $('img').attr('src', 'assets/styles/images/ohs.png')
//   }
// })
//
// $('document').on({
//   'click': function () {
//     $(this).children('img').attr('src', 'assets/styles/images/ohs.png')
//   }
// })
// $('document').on({
//   'click': function () {
//     console.log($(this).children('img').attr('src')
//   }
// })
