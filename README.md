moves.js
========

Moves API client for node.js

## Up and running

```javascript
var Moves = require("moves.js");

var client = new Moves(accessToken);

/* Activities */

client.activities.day(2014, 8, 5, function (err, activities) {
  console.log(err, activities);
});

client.activities.week(2014, 40, function (err, activities) {
  console.log(err, activities);
});

client.activities.month(2014, 3, function (err, activities) {
  console.log(err, activities);
});

client.activities.range
.from(2014, 8, 1)
.to(2014, 8, 5, function (err, activities) {
  console.log(err, activities);
});

client.activities.pastDays(31, function (err, activities) {
  console.log(err, activities);
});

/* Places */

client.places.day(2014, 8, 5, function (err, places) {
  console.log(err, places);
});

client.places.week(2014, 40, function (err, places) {
  console.log(err, places);
});

client.places.month(2014, 3, function (err, places) {
  console.log(err, places);
});

client.places.range
.from(2014, 8, 1)
.to(2014, 8, 5, function (err, places) {
  console.log(err, places);
});

client.places.pastDays(31, function (err, places) {
  console.log(err, places);
});

/* Storyline */

client.storyline.day(2014, 8, 5, function (err, storyline) {
  console.log(err, storyline);
});

client.storyline.week(2014, 40, function (err, storyline) {
  console.log(err, storyline);
});

client.storyline.month(2014, 3, function (err, storyline) {
  console.log(err, storyline);
});

client.storyline.range
.from(2014, 8, 1)
.to(2014, 8, 5, function (err, storyline) {
  console.log(err, storyline);
});

client.storyline.pastDays(31, function (err, storyline) {
  console.log(err, storyline);
});

/* Summaries */

client.summary.day(2014, 8, 5, function (err, summaries) {
  console.log(err, summaries);
});

client.summary.week(2014, 40, function (err, summaries) {
  console.log(err, summaries);
});

client.summary.month(2014, 3, function (err, summaries) {
  console.log(err, summaries);
});

client.summary.range
.from(2014, 8, 1)
.to(2014, 8, 5, function (err, summaries) {
  console.log(err, summaries);
});

client.summary.pastDays(31, function (err, summaries) {
  console.log(err, summaries);
});
```

## Authorization and Access Tokens

To acquire an access token via Moves' OAuth2 service, see
[everyauth-moves](https://github.com/everyauth/everyauth-moves) or another
similar npm module.
