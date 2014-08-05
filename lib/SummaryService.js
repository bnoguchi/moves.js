var util = require("./util");
var DateRangeService = util.DateRangeService;
var createTimeEndpoint = util.createTimeEndpoint;
var createPastDaysEndpoint = util.createPastDaysEndpoint;
var doubleDigit = util.doubleDigit;

module.exports = SummaryService;

function SummaryService (client) {
  this.client = client;

  // Example use of range:
  //     client.summary.range
  //       .from(2011, 10, 2)
  //       .to(2011, 10, 5, function (err, summaries) {
  //         console.log(err, summaries);
  //       });
  this.range = new DateRangeService(this.client, "/user/summary/daily");
}

/**
 * @param {Number} year
 * @param {Number} month
 * @param {Number} day
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Function} cb(err, summaries)
 *
 */
SummaryService.prototype.day = createTimeEndpoint(function createPath(year, month, day) {
  return "/user/summary/daily/" + year + doubleDigit(month) + doubleDigit(day);
});

/**
 * @param {Number} year
 * @param {Number} week
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Function} cb(err, summaries)
 *
 */
SummaryService.prototype.week = createTimeEndpoint(function createPath(year, week) {
  return "/user/summary/daily/" + year + "-" + doubleDigit(week);
});

/**
 * @param {Number} year
 * @param {Number} month
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Function} cb(err, summaries)
 *
 */
SummaryService.prototype.month = createTimeEndpoint(function createPath(year, month) {
  return "/user/summary/daily/" + year + doubleDigit(month);
});

/**
 * @param {Number} days
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Function} cb(err, summaries)
 *
 */
SummaryService.prototype.pastDays = function (days, opts, cb) {
  if (arguments.length === 2) {
    cb = opts;
    opts = {};
  }
  opts.pastDays = days;
  this.client._request("/user/summary/daily", opts, cb);
};
