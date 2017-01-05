//Load the request module
var request = require('request');

//Lets configure and request
request({
    url: 'http://btc.blockr.io/api/v1/tx/info/60c1f1a3160042152114e2bba45600a5045711c3a8a458016248acec59653471', //URL to hit
    qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'GET', //Specify the method
    headers: { //We can define headers too
        'Content-Type': 'MyContentType',
        'Custom-Header': 'Custom Value'
    }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
        //console.log(typeof body)
        //console.log(body.indexOf("\"block\":")+1) 

        var index =(body.indexOf("\"block\":")+8)

        body.charAt (index)


        var blockstring = ""
 
        while(body.charAt(index) != ',')
        {
           blockstring += body.charAt(index)
           index += 1
        }
 
        console.log(blockstring)

                

        index =(body.indexOf("\"confirmations\":")+16)
        
        body.charAt (index)


        var confirmstring = ""
 
        while(body.charAt(index) != ',')
        {
           confirmstring += body.charAt(index)
           index += 1
        }

        console.log(confirmstring)


        
      
        parseInt("confirmstring") + "<br>"
        parseInt("blockstring") + "<br>"

    }
});