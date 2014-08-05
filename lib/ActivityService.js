var util = require("./util");
var DateRangeService = util.DateRangeService;
var createTimeEndpoint = util.createTimeEndpoint;
var createPastDaysEndpoint = util.createPastDaysEndpoint;
var doubleDigit = util.doubleDigit;

module.exports = ActivityService;

function ActivityService (client) {
  this.client = client;


  // Example use of range:
  //     client.activities.range
  //       .from(2011, 10, 2)
  //       .to(2011, 10, 5, function (err, activities) {
  //         console.log(err, activities);
  //       });
  this.range = new DateRangeService(this.client, "/user/activities/daily");
}

/**
 * @param {Number} year
 * @param {Number} month
 * @param {Number} day
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Function} cb(err, activities)
 *
 */
ActivityService.prototype.day = createTimeEndpoint(function createPath(year, month, day) {
  return "/user/activities/daily/" + year + doubleDigit(month) + doubleDigit(day);
});

/**
 * @param {Number} year
 * @param {Number} week
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Function} cb(err, activities)
 *
 */
ActivityService.prototype.week = createTimeEndpoint(function createPath(year, week) {
  return "/user/activities/daily/" + year + "-" + doubleDigit(week);
});

/**
 * @param {Number} year
 * @param {Number} month
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Function} cb(err, activitiess)
 *
 */
ActivityService.prototype.month = createTimeEndpoint(function createPath(year, month) {
  return "/user/activities/daily/" + year + doubleDigit(month);
});

/**
 * @param {Number} days
 * @param {Object} opts
 * @param {Date} [opts.updatedSince]
 * @param {String} [opts.timeZone]
 * @param {Function} cb(err, activitiess)
 *
 */
ActivityService.prototype.pastDays = createPastDaysEndpoint("/user/activities/daily");
