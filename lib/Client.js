var request = require("request");
var ActivityService = require("./ActivityService");
var PlaceService = require("./PlaceService");
var StoryLineService = require("./StoryLineService");
var SummaryService = require("./SummaryService");

module.exports = Client;

function Client (accessToken) {
  this.accessToken = accessToken;

  this.activities = new ActivityService(this);
  this.places = new PlaceService(this);
  this.storyline = new StoryLineService(this);
  this.summary = new SummaryService(this);
}

Client.prototype.apiVersion = 1.1;
Client.prototype.baseUrl = "https://api.moves-app.com/api/1.1";

Client.prototype.activityList = function (cb) {
  request.get({url: this.baseUrl + "/activities", oauth: this.accessToken}, function (err, res, body) {
    cb(err, body);
  });
};

Client.prototype._request = function (path, opts, cb) {
  request.get({url: this.baseUrl + path, oauth: this.accessToken}, function (err, res, body) {
    cb(err, body);
  });
};
