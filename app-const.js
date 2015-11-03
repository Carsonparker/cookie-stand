var hours = ['', '10 am', '11 am', 'Noon', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'];



function CookieStand(storeLocation, minCust, maxCust, avgCookiesPer) {
  this.storeLocation = storeLocation;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPer = avgCookiesPer;
  this.totalCookies = [];
  this.total = 0;

  calcRandCust: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  }
};


var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevueSquare = new CookieStand('Bellevue Square Mall', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6);
