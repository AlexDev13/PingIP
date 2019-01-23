const ping=require('ping');
var session=ping.createSession();
session.pingHost(target,function(error,target){
    if(error){
        console.log(target + ": " + error.toString ());
    }
    else
        console.log (target + ": Alive");
})
session.pingHost ("192.168.137.1", function (error, target) {
    if (error)
        if (error instanceof ping.RequestTimedOutError)
            console.log (target + ": Not alive");
        else
            console.log (target + ": " + error.toString ());
    else
        console.log (target + ": Alive");
});