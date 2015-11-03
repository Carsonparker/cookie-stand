var hours = ['10 am', '11 am', 'Noon', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'];

var pikePlace = {
  minCustHr: 17,
  maxCustHr: 88,
  avgCookies: 5.2,
  hourlySales: [],
  dailyTotal: 0,

  calcRandCust: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcHourlySales: function() {
    return Math.floor(this.avgCookies * this.calcRandCust());
  },
  calcCookiesHr: function() {
    for (var i = 0; i < hours.length; i++) {
      //pikePlace.hourlySales.push(pikePlace.calcHourlySales())
      var singleHour = this.calcHourlySales();
      this.hourlySales.push(singleHour);
      this.dailyTotal += singleHour;
      console.log((10+i) + ' o\'clock: ' + singleHour);
      console.log(this.hourlySales);
      console.log('The total so far is ' + this.dailyTotal);
    }
  },
  display: function() {
    for (var i = 0; i < pikePlace.hourlySales.length; i++) {
      var node = document.createElement('li');
      var textnode = document.createTextNode(hours[i] + ': ' + this.hourlySales[i]);
      node.appendChild(textnode);
      document.getElementById('pikeplace').appendChild(node);
    }
    var node = document.createElement('li');
    var textnode = document.createTextNode('Total: ' + this.dailyTotal);
    node.appendChild(textnode);
    document.getElementById('pikeplace').appendChild(node);
  }
}
pikePlace.calcCookiesHr();
pikePlace.display()

var seaTac = {
  minCustHr: 6,
  maxCustHr: 44,
  avgCookies: 1.2,
  hourlySales: [],
  dailyTotal: 0,

  calcRandCust: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcHourlySales: function() {
    return Math.floor(this.avgCookies * this.calcRandCust());
  },
  calcCookiesHr: function() {
    for (var i = 0; i < hours.length; i++) {
      //pikePlace.hourlySales.push(pikePlace.calcHourlySales())
      var singleHour = this.calcHourlySales();
      this.hourlySales.push(singleHour);
      this.dailyTotal += singleHour;
      console.log((10+i) + ' o\'clock: ' + singleHour);
      console.log(this.hourlySales);
      console.log('The total so far is ' + this.dailyTotal);
    }
  },
  display: function() {
    for (var i = 0; i < seaTac.hourlySales.length; i++) {
      var node = document.createElement('li');
      var textnode = document.createTextNode(hours[i] + ': ' + this.hourlySales[i]);
      node.appendChild(textnode);
      document.getElementById('seatac').appendChild(node);
    }
    var node = document.createElement('li');
    var textnode = document.createTextNode('Total: ' + this.dailyTotal);
    node.appendChild(textnode);
    document.getElementById('seatac').appendChild(node);
  }
}
seaTac.calcCookiesHr();
seaTac.display()

var southCenter = {
  minCustHr: 6,
  maxCustHr: 44,
  avgCookies: 1.2,
  hourlySales: [],
  dailyTotal: 0,

  calcRandCust: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcHourlySales: function() {
    return Math.floor(this.avgCookies * this.calcRandCust());
  },
  calcCookiesHr: function() {
    for (var i = 0; i < hours.length; i++) {
      //pikePlace.hourlySales.push(pikePlace.calcHourlySales())
      var singleHour = this.calcHourlySales();
      this.hourlySales.push(singleHour);
      this.dailyTotal += singleHour;
      console.log((10+i) + ' o\'clock: ' + singleHour);
      console.log(this.hourlySales);
      console.log('The total so far is ' + this.dailyTotal);
    }
  },
  display: function() {
    for (var i = 0; i < southCenter.hourlySales.length; i++) {
      var node = document.createElement('li');
      var textnode = document.createTextNode(hours[i] + ': ' + this.hourlySales[i]);
      node.appendChild(textnode);
      document.getElementById('southcenter').appendChild(node);
    }
    var node = document.createElement('li');
    var textnode = document.createTextNode('Total: ' + this.dailyTotal);
    node.appendChild(textnode);
    document.getElementById('southcenter').appendChild(node);
  }
}
southCenter.calcCookiesHr();
southCenter.display()

var bellevueSquare = {
  minCustHr: 6,
  maxCustHr: 44,
  avgCookies: 1.2,
  hourlySales: [],
  dailyTotal: 0,

  calcRandCust: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcHourlySales: function() {
    return Math.floor(this.avgCookies * this.calcRandCust());
  },
  calcCookiesHr: function() {
    for (var i = 0; i < hours.length; i++) {
      //pikePlace.hourlySales.push(pikePlace.calcHourlySales())
      var singleHour = this.calcHourlySales();
      this.hourlySales.push(singleHour);
      this.dailyTotal += singleHour;
      console.log((10+i) + ' o\'clock: ' + singleHour);
      console.log(this.hourlySales);
      console.log('The total so far is ' + this.dailyTotal);
    }
  },
  display: function() {
    for (var i = 0; i < bellevueSquare.hourlySales.length; i++) {
      var node = document.createElement('li');
      var textnode = document.createTextNode(hours[i] + ': ' + this.hourlySales[i]);
      node.appendChild(textnode);
      document.getElementById('bellevue').appendChild(node);
    }
    var node = document.createElement('li');
    var textnode = document.createTextNode('Total: ' + this.dailyTotal);
    node.appendChild(textnode);
    document.getElementById('bellevue').appendChild(node);
  }
}
bellevueSquare.calcCookiesHr();
bellevueSquare.display()

var alki = {
  minCustHr: 6,
  maxCustHr: 44,
  avgCookies: 1.2,
  hourlySales: [],
  dailyTotal: 0,

  calcRandCust: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcHourlySales: function() {
    return Math.floor(this.avgCookies * this.calcRandCust());
  },
  calcCookiesHr: function() {
    for (var i = 0; i < hours.length; i++) {
      //pikePlace.hourlySales.push(pikePlace.calcHourlySales())
      var singleHour = this.calcHourlySales();
      this.hourlySales.push(singleHour);
      this.dailyTotal += singleHour;
      console.log((10+i) + ' o\'clock: ' + singleHour);
      console.log(this.hourlySales);
      console.log('The total so far is ' + this.dailyTotal);
    }
  },
  display: function() {
    for (var i = 0; i < alki.hourlySales.length; i++) {
      var node = document.createElement('li');
      var textnode = document.createTextNode(hours[i] + ': ' + this.hourlySales[i]);
      node.appendChild(textnode);
      document.getElementById('alkilist').appendChild(node);
    }
    var node = document.createElement('li');
    var textnode = document.createTextNode('Total: ' + this.dailyTotal);
    node.appendChild(textnode);
    document.getElementById('alkilist').appendChild(node);
  }
}
alki.calcCookiesHr();
alki.display()
