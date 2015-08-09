(function() {
  var dataFromPlanets, printPlanets, rotatePlanets, sizePlanets, sortable, spacePlanets;

  sortable = [];

  dataFromPlanets = function(data) {
    var distance, name, planet, revTime, size;
    for (planet in data.planets) {
      distance = data.planets[planet].distance;
      name = planet.toLowerCase();
      size = data.planets[planet].diameter;
      revTime = data.planets[planet].revTime;
      sortable.push([name, distance, size, revTime]);
    }
    sortable.sort(function(a, b) {
      return a[1] - b[1];
    });
    return printPlanets();
  };

  printPlanets = function() {
    var i;
    i = 0;
    while (i < sortable.length) {
      $('#planets').append('<div class="planet-container"><div class="planet ' + sortable[i][0] + '" data-distance=' + sortable[i][1] + ' data-size=' + sortable[i][2] + '" data-rev="' + sortable[i][3] + '"></div></div>');
      i++;
    }
    return sizePlanets();
  };

  $(function() {
    return $.ajax({
      method: 'GET',
      url: 'data/planets.json',
      dataType: 'json',
      success: function(data) {
        dataFromPlanets(data);
      }
    });
  });

  sizePlanets = function() {
    $.each($('.planet'), function() {
      var _this, width;
      _this = $(this);
      width = parseInt(_this.attr('data-size')) / 700;
      console.log(width);
      _this.css('width', width).css('height', width);
    });
    return spacePlanets();
  };

  spacePlanets = function() {
    $.each($('.planet-container'), function() {
      var _this, width;
      _this = $(this);
      width = _this.find('.planet').attr('data-distance') / 1000000;
      _this.css('width', width).css('height', width);
    });
    return rotatePlanets();
  };

  rotatePlanets = function() {
    return $.each($('.planet-container'), function() {
      var _this, revTime;
      _this = $(this);
      revTime = _this.find('.planet').attr('data-rev') * 3 + 's';
      console.log(revTime);
      return _this.css({
        '-webkit-animation': 'spinner',
        '-webkit-animation-duration': revTime,
        '-webkit-animation-iteration-count': 'infinite',
        '-webkit-animation-timing-function': 'linear'
      });
    });
  };

}).call(this);
