sortable = []

dataFromPlanets = (data) ->
  for planet of data.planets
    distance = data.planets[planet].distance
    name = planet.toLowerCase()
    size = data.planets[planet].diameter
    revTime = data.planets[planet].revTime
    sortable.push [name,distance, size, revTime]
  sortable.sort (a,b) ->
    a[1] - b[1]
  printPlanets()

printPlanets = () ->
  i = 0
  while i < sortable.length
    $('#planets').append '<div class="planet-container"><div class="planet ' + sortable[i][0] + '" data-distance=' + sortable[i][1] + ' data-size=' + sortable[i][2] + '" data-rev="' + sortable[i][3] + '"></div></div>'
    i++
  sizePlanets()

$ ->
  $.ajax
    method: 'GET',
    url: 'data/planets.json'
    dataType: 'json',
    success: (data) ->
      dataFromPlanets(data)
      return

  # $.ajax
  #   method: 'GET',
  #   url: 'http://nssdc.gsfc.nasa.gov/planetary/factsheet/'
  #   dataType: 'jsonp',
  #   success: (data) ->
  #     console.log data
  #     return

sizePlanets = () ->
  $.each $('.planet'), ->
    _this = $(this)
    width = parseInt(_this.attr('data-size'))/700
    console.log width
    _this.css('width', width).css('height', width)
    return
  spacePlanets()

spacePlanets = () ->
  $.each $('.planet-container'), ->
    _this = $(this)
    width = _this.find('.planet').attr('data-distance')/1000000
    _this.css('width', width).css('height', width)
    return
  rotatePlanets()

rotatePlanets = () ->
  $.each $('.planet-container'), ->
    _this = $(this)
    revTime = _this.find('.planet').attr('data-rev')*3 + 's'
    console.log revTime
    _this.css
      '-webkit-animation': 'spinner'
      '-webkit-animation-duration': revTime
      '-webkit-animation-iteration-count': 'infinite'
      '-webkit-animation-timing-function': 'linear'
