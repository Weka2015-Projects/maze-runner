'use strict'
import $ from 'jquery'

$('#new-game').on('submit', (e) => {
  e.preventDefault()
  let gameName = $('#new-game input[name=name]').val()
  $.post('http://localhost:3000/scores', {name: gameName})
})

// $(document).ajaxComplete(function() {
//   $(".log").text("Loaded to DB")
// })
