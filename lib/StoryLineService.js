var util = require("./util");
var DateRangeService = util.DateRangeService;
var createTimeEndpoint = util.createTimeEndpoint;
var createPastDaysEndpoint = util.createPastDaysEndpoint;
var doubleDigit = util.doubleDigit;

module.exports = StoryLineService;

function StoryLineService (client) {
  this.client = client;

  // Example use of range:
  //     client.storyline.range
  //       .from(2011, 10, 2)
  //       .to(2011, 10, 5, function (err, storylines) {
  //         console.log(err, storylines);
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
 * @param {Boolean} [opts.trackPoints]
 * @param {Function} cb(err, storylines)
 *
 */
StoryLineService.prototype.day = createTimeEndpoint(function createPath(year, month, day) {
  return "/user/storyline/daily/" + year + doubleDigit(month) + doubleDigit(day);
});

/**
 * @param {Number} year
 * @param {Number} week
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Boolean} [opts.trackPoints]
 * @param {Function} cb(err, storylines)
 *
 */
StoryLineService.prototype.week = createTimeEndpoint(function createPath(year, week) {
  return "/user/storyline/daily/" + year + "-" + doubleDigit(week);
});

/**
 * @param {Number} year
 * @param {Number} month
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Boolean} [opts.trackPoints]
 * @param {Function} cb(err, storylines)
 *
 */
StoryLineService.prototype.month = createTimeEndpoint(function createPath(year, month) {
  return "/user/storyline/daily/" + year + doubleDigit(month);
});

/**
 * @param {Number} days
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Boolean} [opts.trackPoints]
 * @param {Function} cb(err, storylines)
 *
 */
StoryLineService.prototype.pastDays = createPastDaysEndpoint("/user/storyline/daily");
