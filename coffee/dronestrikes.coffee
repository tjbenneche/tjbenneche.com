document.addEventListener 'DOMContentLoaded', (e) ->
  xhttp = new XMLHttpRequest()
  xhttp.open 'GET', 'http://fast-shelf-3507.herokuapp.com/api/most-recent', true
  xhttp.send()
  xhttp.onreadystatechange = ->
    if xhttp.readyState == 4 and xhttp.status == 200
      data = JSON.parse(xhttp.responseText)
      console.log(data)
      createStrikes(data)


createStrikes = (strikes) ->
  for strike of strikes
    `strike = strike`
    adults = parseInt(strikes[strike].deaths) - parseInt(strikes[strike].children)
    children = parseInt(strikes[strike].children)
    strikeCanvas = document.createElement('CANVAS')
    strikeCanvas.dataset.id = strikes[strike]._id
    drawPerson(strikeCanvas, adults, children)


drawPeople = (canvas, adults, children) ->
  
  document.getElementById('strikes-container').appendChild(canvas)
