var util = require("./util");
var DateRangeService = util.DateRangeService;
var createTimeEndpoint = util.createTimeEndpoint;
var createPastDaysEndpoint = util.createPastDaysEndpoint;
var doubleDigit = util.doubleDigit;

module.exports = PlaceService;

function PlaceService (client) {
  this.client = client;


  // Example use of range:
  //     client.places.range
  //       .from(2011, 10, 2)
  //       .to(2011, 10, 5, function (err, places) {
  //         console.log(err, places);
  //       });
  this.range = new DateRangeService(this.client, "/user/places/daily");
}

/**
 * @param {Number} year
 * @param {Number} month
 * @param {Number} day
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Function} cb(err, places)
 *
 */
PlaceService.prototype.day = createTimeEndpoint(function createPath(year, month, day) {
  return "/user/places/daily/" + year + doubleDigit(month) + doubleDigit(day);
});

/**
 * @param {Number} year
 * @param {Number} week
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Function} cb(err, places)
 *
 */
PlaceService.prototype.week = createTimeEndpoint(function createPath(year, week) {
  return "/user/places/daily/" + year + "-" + doubleDigit(week);
});

/**
 * @param {Number} year
 * @param {Number} month
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Function} cb(err, placess)
 *
 */
PlaceService.prototype.month = createTimeEndpoint(function createPath(year, month) {
  return "/user/places/daily/" + year + doubleDigit(month);
});

/**
 * @param {Number} days
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Function} cb(err, placess)
 *
 */
PlaceService.prototype.pastDays = createPastDaysEndpoint("/user/places/daily");
