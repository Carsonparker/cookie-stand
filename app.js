var hours = ['10 am', '11 am', 'Noon', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'];



var pikePlace = {
  minCustHr: 17,
  maxCustHr: 88,
  avgCookies: 5.2,
  hourlySales: [],

  calcRandCust: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcHourlySales: function() {
    return Math.floor(this.avgCookies * this.calcRandCust());
  },

};
  for (var i = 0; i < hours.length; i++) {
    pikePlace.hourlySales.push(pikePlace.calcHourlySales())
  }
  for (var i = 0; i < pikePlace.hourlySales.length; i++) {
    var node = document.createElement('li')
    var textnode = document.createTextNode(hours[i] + ': ' + pikePlace.hourlySales[i]);
    node.appendChild(textnode);
    document.getElementById('list').appendChild(node);
  }
  console.log(pikePlace.calcRandCust(pikePlace.minCustHr, pikePlace.maxCustHr))



