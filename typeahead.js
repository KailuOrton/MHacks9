var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');

//The type ahead api
module.exports = function(req, res){
    var term = req.query.text.trim();
    if(!term){
        res.json([{
            title: '<i>(Enter a Search Term)</i>',
            text: ''
        }]);
        return;
    }
    request({
        url: 'http://devpost.com',
        qs: {
            q: term,
            limit: 15,
            api_key: key
        },
        gzip: true,
        json: true,
        timeout: 10*1000
    }, function(err, response) {
        if(err || response.statusCode !== 200 || !response.body || !response.body.data){
/*            console.log(response.body);
            console.log(response.statusCode);
            res.status(500).send('Error');
            return;*/
            
        }

        var results = _.chain(response.body.data)
            .reject(function(image) {
                return !image || !image.images || !image.images.fixed_height_small;
            })
        .map(function(image) {
            return{
                title: '<img style="height:75px" src = "' + image.images.fixed_height_small.url + '">',
                text: 'http://devpost.com/' + image.id
            };
        })
        .value();

        if(results.length == 0){
            res.json([{
                title: '<i>(no results!)</i>',
                text: ''
            }]);
        }else{
            res.json(results);
        }
    });
};





