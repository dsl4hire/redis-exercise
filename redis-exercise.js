var redis = require('redis');
async function main() {
    try {
        const clientA = redis.createClient();
            //     '6379', '18.222.123.50',
            //     {return_buffers: true}
            // ).on('error', err => {console.error('ERR:REDIS:' + err);throw err});
        // console.log(clientA.connectionOption);
        // console.log(clientA.options);
        // const key = 'values';
        var i;
        for (i = 1; i <=100; i++) { 
            result = await clientA.lpush(key, i);
            console.log('lpush result ' +  i + ' = ' + result);
        }
        // const clientB =  redis.createClient("3.14.64.102");
        // const values = await clientB.lrange(key, 0, -1);
        const values = await clientA.lrange(key, 0, -1);
        values.forEach(v => console.log(v));
    } catch (error) {
        console.error("Uncaught Exception: " + error);
    }
}

main();
