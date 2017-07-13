var pen = require("../hacks.json");
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
               }
