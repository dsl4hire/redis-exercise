var redis = require('redis');
async function main() {
    try {
        const clientA = redis.createClient();
        const key = 'values';
        // delete old values
        clientA.del( key );

        // add 1-100 as values
        var i;
        for (i = 1; i <=100; i++) { 
            result = clientA.lpush(key, i);
            console.log('added ' +  i + ' to values list');
        }

        // retrieve new values in reverse order vs was entered
        // was supposed to retrieve from replica, but had connectivity issues
        // const clientB =  redis.createClient("3.14.64.102");
        // const values = clientB.lrange(key, 0, -1
        const values = clientA.lrange(key, 0, -1, function (err, replies) {
            console.log(replies.length + " replies:");
            replies.forEach(function (reply, i) {
                console.log("    " + i + ": " + reply);
            });
            clientA.quit();});
    } catch (error) {
        console.error("Uncaught Exception: " + error);
    }
}

main();
