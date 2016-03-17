"use strict";

// THIS IS A DEMO FOR USING CREST REST INTERFACE
// https://github.com/cordazar/crest
var dbServiceUrl = "http://localhost:3500";
var dbName = "yelp-data";
var collectionName = "tip";

var url = dbServiceUrl + "/" + dbName + "/" + collectionName + "?";

var queryUrl = url + "limit=5";

d3.json(queryUrl)
  .get(function(error, response) {
    if (!error) {
      d3.select('#getLimitedDataUrl').node().innerHTML = 'URL: ' + queryUrl;
      d3.select('#getLimitedDataResponse').node().innerHTML = JSON.stringify(response, null, 4);

      setTimeout(function() {
        getDataWithQueryEQUALSTO();
      }, 0);
    }
  });

function getDataWithQueryEQUALSTO() {
  var query = '{"likes":10}';

  queryUrl = url + "query=" + encodeURI(query);

  d3.json(queryUrl)
    .get(function(error, response) {
      if (!error) {
        d3.select('#getQueryDataUrl').node().innerHTML = 'URL: ' + queryUrl;
        d3.select('#getQueryDataResponse').node().innerHTML = JSON.stringify(response, null, 4);
      }

      setTimeout(function() {
        getDataWithQueryINRANGE();
      }, 0);

    });
}

function getDataWithQueryINRANGE() {
  var query = '{"likes":{"$lte": 10, "$gt": 7}}';

  queryUrl = url + "query=" + encodeURI(query);

  d3.json(queryUrl)
    .get(function(error, response) {
      if (!error) {
        d3.select('#getQueryDataInRangeUrl').node().innerHTML = 'URL: ' + queryUrl;
        d3.select('#getQueryDataInRangeResponse').node().innerHTML = JSON.stringify(response, null, 4);
      }
    });
}
