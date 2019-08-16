var friendsList = require('../data/friends.js');
var path = require("path");

module.exports = function(app){

    app.get('/api/friends', function (req, res){
        res.json(friendsList);
    });

    app.post('/api/friends', function (req, response){

    var newFriend = req.body;
    var responses = newFriend.answers;
    
    var bestMatch ={
        name: " ",
        photo: " ",
        friendDifference: 100
    }
    var totalDifference = 0; 
    //checking the list of friends and each of their answers and finding the differnce 
    // between that person's and our user's (newFriend) answers to find a match
    for(var i = 0; i < friendsList.lenght; i++){

        totalDifference = 0;
        for (var j = 0; j < friendsList[i].answers[j]; j++){
            totalDifference += Math.abs(parseInt(responses[j])- parseInt(friendsList[i].answers[j]));
        if (totalDifference <= bestMatch.friendDifference){
           //choose the bestMatch 
           bestMatch.name = friendsList[i].name;
           bestMatch.photo = friendsList[i].photo;
           bestMatch.friendDifference= totalDifference;
           bestMatch = friendsList[i];
        }
    }  
}

friendsList.push(newFriend);

return response.json(friendsList[i]);
});

}
