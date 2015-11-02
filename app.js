var pikePlace = {
  minCustHr: 17,
  maxCustHr: 88,
  avgCookies: 5.2,

  calcRandCust: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;

  },
  calcHourlySales: function() {
    return this.avgCookies * Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
};
console.log(pikePlace.calcRandCust(pikePlace.minCustHr, pikePlace.maxCustHr))



