(function() {
  var createStrikes, drawPeople;

  document.addEventListener('DOMContentLoaded', function(e) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://fast-shelf-3507.herokuapp.com/api/most-recent', true);
    xhttp.send();
    return xhttp.onreadystatechange = function() {
      var data;
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        data = JSON.parse(xhttp.responseText);
        console.log(data);
        return createStrikes(data);
      }
    };
  });

  createStrikes = function(strikes) {
    var adults, children, results, strike, strikeCanvas;
    results = [];
    for (strike in strikes) {
      strike = strike;
      adults = parseInt(strikes[strike].deaths) - parseInt(strikes[strike].children);
      children = parseInt(strikes[strike].children);
      strikeCanvas = document.createElement('CANVAS');
      strikeCanvas.dataset.id = strikes[strike]._id;
      results.push(drawPerson(strikeCanvas, adults, children));
    }
    return results;
  };

  drawPeople = function(canvas, adults, children) {
    return document.getElementById('strikes-container').appendChild(canvas);
  };

}).call(this);
