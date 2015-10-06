(function() {
  var dataFromPlanets, planetContainers, printPlanets, rotatePlanets, sizePlanets, sortable, spacePlanets;

  sortable = [];

  planetContainers = void 0;

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
    var childNode, i, node;
    i = 0;
    while (i < sortable.length) {
      node = document.createElement('DIV');
      childNode = document.createElement('DIV');
      node.className = 'planet-container';
      childNode.className = 'planet ' + sortable[i][0];
      childNode.dataset.distance = sortable[i][1];
      childNode.dataset.size = sortable[i][2];
      childNode.dataset.rev = sortable[i][3];
      node.appendChild(childNode);
      document.getElementById('planets').appendChild(node);
      i++;
    }
    planetContainers = document.getElementsByClassName('planet-container');
    return sizePlanets();
  };

  document.addEventListener('DOMContentLoaded', function(e) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'data/planets.json', true);
    xhttp.send();
    return xhttp.onreadystatechange = function() {
      var data;
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        data = JSON.parse(xhttp.responseText);
        return dataFromPlanets(data);
      }
    };
  });

  sizePlanets = function() {
    var _this, i, width;
    i = 0;
    while (i < planetContainers.length) {
      _this = planetContainers[i];
      width = parseInt(_this.children[0].dataset.size) / 700;
      _this.children[0].style.width = width + 'px';
      _this.children[0].style.height = width + 'px';
      i++;
    }
    return spacePlanets();
  };

  spacePlanets = function() {
    var _this, i, width;
    i = 0;
    while (i < planetContainers.length) {
      _this = planetContainers[i];
      width = _this.children[0].dataset.distance / 1000000;
      _this.style.width = width + 'px';
      _this.style.height = width + 'px';
      i++;
    }
    return rotatePlanets();
  };

  rotatePlanets = function() {
    var _this, i, results, revTime;
    i = 0;
    results = [];
    while (i < planetContainers.length) {
      _this = planetContainers[i];
      revTime = _this.children[0].dataset.rev * 3 + 's';
      _this.style.animation = 'spinner';
      _this.style.animationDuration = revTime;
      _this.style.animationIterationCount = 'infinite';
      _this.style.animationTimingFunction = 'linear';
      results.push(i++);
    }
    return results;
  };

}).call(this);
