var hours = ['10 am', '11 am', '12pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'];
// var locations = [];

function CookieStand(storeLocation, minCustHr, maxCustHr, avgCookies) {

  this.storeLocation = storeLocation;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookies = avgCookies;
  this.hourlySales = [];
  this.dailyTotal = 0;
  // locations.push(this);

  this.calcRandCust = function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  };

  this.calcHourlySales = function() {
      for (var i = 0; i < hours.length; i++) {
        this.hourlySales.push(Math.floor(this.avgCookies * this.calcRandCust()));
        this.dailyTotal += this.hourlySales[i];
      }
    };

  this.displayData = function() {
    this.calcHourlySales();

    var row = document.createElement('tr');
    var location = document.createElement('th');
    location.textContent = this.storeLocation;
    row.appendChild(location);

    for(var i = 0; i < hours.length; i++) {
      var numCookie = document.createElement('td');
      numCookie.textContent = this.hourlySales[i];
      row.appendChild(numCookie);
      tbl.appendChild(row);
    }
      var totalCookies = document.createElement('tr');
      totalCookies.textContent = this.dailyTotal;
      row.appendChild(totalCookies);
      tbl.appendChild(row);
  }
};

var pikePlace = new CookieStand("Pike Place Market", 17, 88, 5.2);
var seaTac = new CookieStand("Sea Tac Airport", 6, 44, 1.2);
var southCenter = new CookieStand("Southcenter Mall", 11, 38, 1.9);
var bellevueSquare = new CookieStand("Bellevue Square Mall", 20, 48, 3.3);
var alki = new CookieStand("Alki Beach", 3, 24, 2.6);

//this is where I am making the table
var tbl = document.createElement('table');
var headerRow = document.createElement('thead');
var emptyCell = document.createElement('td')
    headerRow.appendChild(emptyCell);

for (var i = 0; i < hours.length; i++) {
  var td = document.createElement('td');
  td.innerHTML = hours[i];
  headerRow.appendChild(td);
};
  var dailyTotal = document.createElement('th');
  dailyTotal.textContent = "Total";
  headerRow.appendChild(dailyTotal);
  tbl.appendChild(headerRow);

// for (var i = 0; i < locations.length; i++) {
//   locations[i].displayData();
// }
pikePlace.displayData();
seaTac.displayData();
southCenter.displayData();
bellevueSquare.displayData();
alki.displayData();
document.body.appendChild(tbl);
