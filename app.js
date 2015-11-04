var hours = ['Location', '10 am', '11 am', 'Noon', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'];

var stores = [];

function CookieStand(storeLocation, minCustHr, maxCustHr, avgCookies) {

  this.storeLocation = storeLocation;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookies = avgCookies;
  this.hourlySales = [];
  this.dailyTotal = 0;
  // stores.push(this);


  this.calcRandCust = function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  };

  this.calcHourlySales = function() {
      return Math.floor(this.avgCookies * this.calcRandCust());
  };

  this.calcCookiesHr = function() {
      for (var i = 0; i < hours.length; i++) {
        //pikePlace.hourlySales.push(pikePlace.calcHourlySales())
        var singleHour = this.calcHourlySales();
        this.hourlySales.push(singleHour);
        this.dailyTotal += singleHour;
        console.log((10+i) + ' o\'clock: ' + singleHour);
        console.log(this.hourlySales);
        console.log('The total so far is ' + this.dailyTotal);
  }
};

  this.display = function() {
    this.calcHourlySales();
    var cookieTable = document.createElement("table");
    var cookieTr = document.createElement("tr");
    for(var i = 0; i < hours.length; i++) {
    var cookieHd = document.createElement("th");
    var cookieTd = document.createElement("td");
      cookieTd.textContent = hours[i];
      cookieHd.appendChild(cookieTd);
      cookieTr.appendChild(cookieHd);
      console.log(i);
    }
    cookieTable.appendChild(cookieTr);

    for(var i = 0; i < this.hourlySales.length; i++) {
    var cookieTr = document.createElement("tr");
    var cookieTd = document.createElement("td");
      cookieTd.textContent = this.hourlySales[i];
      cookieTr.appendChild(cookieTd);
      console.log(i);
    }
    cookieTable.appendChild(cookieTr);
    // var cookieTr = document.createElement("tr");
    // table.appendChild(cookieTr);

    // var cookieTd = document.createElement("td");
    // cookieTr.appendChild(cookieTd);

    document.body.appendChild(cookieTable);
      // for (var i = 0; i < this.hourlySales.length; i++) {
    //     var ulElement = document.createElement('ul');
    //     var node = document.createElement('li');
    //     var textnode = document.createTextNode(hours[i] + ': ' + this.hourlySales[i]);
    //     node.appendChild(textnode);
    //     ulElement.appendChild(node);
    //     document.getElementById("stores").appendChild(ulElement);
    //   }
    //   var ulElement = document.createElement('ul');
    //   var node = document.createElement('li');
    //   var textnode = document.createTextNode('Total: ' + this.dailyTotal);
    //   node.appendChild(textnode);
    //   ulElement.appendChild(node);
    //   document.getElementById("stores").appendChild(ulElement);
    // }
  // }
  }
}


var pikePlace = new CookieStand("Pike Place Market", 17, 88, 5.2);
var seaTac = new CookieStand("Sea Tac Airport", 6, 44, 1.2);
var southCenter = new CookieStand("Southcenter Mall", 11, 38, 1.9);
var bellevueSquare = new CookieStand("Bellevue Square Mall", 20, 48, 3.3);
var alki = new CookieStand("Alki Beach", 3, 24, 2.6);

pikePlace.display();
// for (var i = 0; i < stores.length; i++){
//   stores[i].calcCookiesHr();
//   stores[i].display();
// }

// makeTable = function() {
//   this.calcCookiesHr();
//   table = document.createElement('table');
//   var thElement = document.createElement('th')
//   var trElement = document.createElement('tr');

//   for (var i =0; i < hours.length; i++) {
//     var tdElement = document.createElement('td');
//     thElement.textContent = hours[i];
//     trElement.appendChild(tdElement);
//   }
//   table.appendChild(trElement);

//   document.body.appendChild(table);
// }







// var pikePlace = {
//   minCustHr: 17,
//   maxCustHr: 88,
//   avgCookies: 5.2,
//   hourlySales: [],
//   dailyTotal: 0,

//   calcRandCust: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//   },
//   calcHourlySales: function() {
//     return Math.floor(this.avgCookies * this.calcRandCust());
//   },
//   calcCookiesHr: function() {
//     for (var i = 0; i < hours.length; i++) {
//       //pikePlace.hourlySales.push(pikePlace.calcHourlySales())
//       var singleHour = this.calcHourlySales();
//       this.hourlySales.push(singleHour);
//       this.dailyTotal += singleHour;
//       console.log((10+i) + ' o\'clock: ' + singleHour);
//       console.log(this.hourlySales);
//       console.log('The total so far is ' + this.dailyTotal);
//     }
//   },
//   display: function() {
//     for (var i = 0; i < pikePlace.hourlySales.length; i++) {
//       var node = document.createElement('li');
//       var textnode = document.createTextNode(hours[i] + ': ' + this.hourlySales[i]);
//       node.appendChild(textnode);
//       document.getElementById('pikeplace').appendChild(node);
//     }
//     var node = document.createElement('li');
//     var textnode = document.createTextNode('Total: ' + this.dailyTotal);
//     node.appendChild(textnode);
//     document.getElementById('pikeplace').appendChild(node);
//   }
// }
// pikePlace.calcCookiesHr();
// pikePlace.display()

// var seaTac = {
//   minCustHr: 6,
//   maxCustHr: 44,
//   avgCookies: 1.2,
//   hourlySales: [],
//   dailyTotal: 0,

//   calcRandCust: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//   },
//   calcHourlySales: function() {
//     return Math.floor(this.avgCookies * this.calcRandCust());
//   },
//   calcCookiesHr: function() {
//     for (var i = 0; i < hours.length; i++) {
//       //pikePlace.hourlySales.push(pikePlace.calcHourlySales())
//       var singleHour = this.calcHourlySales();
//       this.hourlySales.push(singleHour);
//       this.dailyTotal += singleHour;
//       console.log((10+i) + ' o\'clock: ' + singleHour);
//       console.log(this.hourlySales);
//       console.log('The total so far is ' + this.dailyTotal);
//     }
//   },
//   display: function() {
//     for (var i = 0; i < seaTac.hourlySales.length; i++) {
//       var node = document.createElement('li');
//       var textnode = document.createTextNode(hours[i] + ': ' + this.hourlySales[i]);
//       node.appendChild(textnode);
//       document.getElementById('seatac').appendChild(node);
//     }
//     var node = document.createElement('li');
//     var textnode = document.createTextNode('Total: ' + this.dailyTotal);
//     node.appendChild(textnode);
//     document.getElementById('seatac').appendChild(node);
//   }
// }
// seaTac.calcCookiesHr();
// seaTac.display()

// var southCenter = {
//   minCustHr: 6,
//   maxCustHr: 44,
//   avgCookies: 1.2,
//   hourlySales: [],
//   dailyTotal: 0,

//   calcRandCust: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//   },
//   calcHourlySales: function() {
//     return Math.floor(this.avgCookies * this.calcRandCust());
//   },
//   calcCookiesHr: function() {
//     for (var i = 0; i < hours.length; i++) {
//       //pikePlace.hourlySales.push(pikePlace.calcHourlySales())
//       var singleHour = this.calcHourlySales();
//       this.hourlySales.push(singleHour);
//       this.dailyTotal += singleHour;
//       console.log((10+i) + ' o\'clock: ' + singleHour);
//       console.log(this.hourlySales);
//       console.log('The total so far is ' + this.dailyTotal);
//     }
//   },
//   display: function() {
//     for (var i = 0; i < southCenter.hourlySales.length; i++) {
//       var node = document.createElement('li');
//       var textnode = document.createTextNode(hours[i] + ': ' + this.hourlySales[i]);
//       node.appendChild(textnode);
//       document.getElementById('southcenter').appendChild(node);
//     }
//     var node = document.createElement('li');
//     var textnode = document.createTextNode('Total: ' + this.dailyTotal);
//     node.appendChild(textnode);
//     document.getElementById('southcenter').appendChild(node);
//   }
// }
// southCenter.calcCookiesHr();
// southCenter.display()

// var bellevueSquare = {
//   minCustHr: 6,
//   maxCustHr: 44,
//   avgCookies: 1.2,
//   hourlySales: [],
//   dailyTotal: 0,

//   calcRandCust: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//   },
//   calcHourlySales: function() {
//     return Math.floor(this.avgCookies * this.calcRandCust());
//   },
//   calcCookiesHr: function() {
//     for (var i = 0; i < hours.length; i++) {
//       //pikePlace.hourlySales.push(pikePlace.calcHourlySales())
//       var singleHour = this.calcHourlySales();
//       this.hourlySales.push(singleHour);
//       this.dailyTotal += singleHour;
//       console.log((10+i) + ' o\'clock: ' + singleHour);
//       console.log(this.hourlySales);
//       console.log('The total so far is ' + this.dailyTotal);
//     }
//   },
//   display: function() {
//     for (var i = 0; i < bellevueSquare.hourlySales.length; i++) {
//       var node = document.createElement('li');
//       var textnode = document.createTextNode(hours[i] + ': ' + this.hourlySales[i]);
//       node.appendChild(textnode);
//       document.getElementById('bellevue').appendChild(node);
//     }
//     var node = document.createElement('li');
//     var textnode = document.createTextNode('Total: ' + this.dailyTotal);
//     node.appendChild(textnode);
//     document.getElementById('bellevue').appendChild(node);
//   }
// }
// bellevueSquare.calcCookiesHr();
// bellevueSquare.display()

// var alki = {
//   minCustHr: 6,
//   maxCustHr: 44,
//   avgCookies: 1.2,
//   hourlySales: [],
//   dailyTotal: 0,

//   calcRandCust: function() {
//     return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
//   },
//   calcHourlySales: function() {
//     return Math.floor(this.avgCookies * this.calcRandCust());
//   },
//   calcCookiesHr: function() {
//     for (var i = 0; i < hours.length; i++) {
//       //pikePlace.hourlySales.push(pikePlace.calcHourlySales())
//       var singleHour = this.calcHourlySales();
//       this.hourlySales.push(singleHour);
//       this.dailyTotal += singleHour;
//       console.log((10+i) + ' o\'clock: ' + singleHour);
//       console.log(this.hourlySales);
//       console.log('The total so far is ' + this.dailyTotal);
//     }
//   },
//   display: function() {
//     for (var i = 0; i < alki.hourlySales.length; i++) {
//       var node = document.createElement('li');
//       var textnode = document.createTextNode(hours[i] + ': ' + this.hourlySales[i]);
//       node.appendChild(textnode);
//       document.getElementById('alkilist').appendChild(node);
//     }
//     var node = document.createElement('li');
//     var textnode = document.createTextNode('Total: ' + this.dailyTotal);
//     node.appendChild(textnode);
//     document.getElementById('alkilist').appendChild(node);
//   }
// }
// alki.calcCookiesHr();
// alki.display()
