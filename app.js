var hours = ['10 am', '11 am', '12pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'];
var locations = [];
var tbl = document.createElement('table');

function CookieStand(storeLocation, minCustHr, maxCustHr, avgCookies) {

  this.storeLocation = storeLocation;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookies = avgCookies;
  this.hourlySales = [];
  this.dailyTotal = 0;
  locations.push(this);

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
    var tableHeader = document.createElement('th');
    var locations = document.createElement('td');
    locations.textContent = this.storeLocation;
    row.appendChild(locations);
    for(var i = 0; i < hours.length; i++) {
      var numCookie = document.createElement('td');
      numCookie.textContent = this.hourlySales[i];
      row.appendChild(numCookie);
      tbl.appendChild(row);
    }
      var totalCookies = document.createElement('td');
      totalCookies.textContent = this.dailyTotal;
      row.appendChild(totalCookies);
      tbl.appendChild(row);

      document.body.appendChild(tbl);
  }
}
var pikePlace = new CookieStand("Pike Place Market", 17, 88, 5.2);
var seaTac = new CookieStand("Sea Tac Airport", 6, 44, 1.2);
var southCenter = new CookieStand("Southcenter Mall", 11, 38, 1.9);
var bellevueSquare = new CookieStand("Bellevue Square Mall", 20, 48, 3.3);
var alki = new CookieStand("Alki Beach", 3, 24, 2.6);

//this is where I am making the table


var headerRow = document.createElement('thead');
var emptyCell = document.createElement('td')
    headerRow.appendChild(emptyCell);

for (var i = 0; i < hours.length; i++) {
  var td = document.createElement('td');
  td.textContent = hours[i];
  headerRow.appendChild(td);
};
  var dailyTotal = document.createElement('th');
  dailyTotal.textContent = "Total";
  headerRow.appendChild(dailyTotal);
  tbl.appendChild(headerRow);

// for (var i = 0; i < locations.length; i++) {
//   locations[i].displayData();
// }
// pikePlace.displayData();
// seaTac.displayData();
// southCenter.displayData();
// bellevueSquare.displayData();
// alki.displayData();



displayAllLocations = function() {
  for (var i = 0; i < locations.length; i++) {
    locations[i].displayData();
  }
}

displayAllLocations();
var newStandForm = function(event) {
    event.preventDefault();

    if (!event.target.standname.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value) {
      return alerts('Fields cannot be empty!');
    }
    var stand = event.target.standname.value;
    var minC = event.target.min.value;
    var maxC = event.target.max.value;
    var avgC = Number(event.target.avg.value);
//Setting up variables for DOM access
// var standname = document.getElementByName('standname');
// var min = document.getElementByName('min');
// var max = document.getElementByName('max');
// var avg = document.getElementByName('avg');

var newStand = new CookieStand(stand, minC, maxC, avgC);
locations.push(newStand);
newStand.displayData();
  }
var form = document.getElementById('new-cookie-stand');
form.addEventListener('submit', newStandForm);





