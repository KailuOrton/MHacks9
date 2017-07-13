var obj = require("../hacks.json");
var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');

// The API that returns the in-email representation.
console.log("before function resolver");
module.exports = function(req, res){
    console.log("inside function resolver");
    var term = req.query.text.trim();
    console.log(term);
    if(!term){
        return;
    }
    for(var myKey in obj){
        console.log(myKey);
        if(myKey == term){
            var hack = obj[myKey];
            var html = '<p>' + '<img src ="' +  hack.logo + '">' + '<br>' + '<br>' +  "Details for " + hack.name + " :" + '<br>' + '<br>' + "Dates : " + hack.date + '<br>' + '<br>' + "The location of the hackathon: " + hack.location + '<br>' + '<br>' + "For further details, visit: " + '<a href ="' +  hack.link + '"/>'+ hack.name + '</a>'  + '</p>';
            res.json({
                body: html
            });
        }
        }

            var html = '<p>' + "Nothing found!" + '</p>';
            res.json({
                body: html
            });
    
};


