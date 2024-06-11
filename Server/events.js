const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();
var responses = []

module.exports.eventEmitter = eventEmitter

module.exports.EventHandler = (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*"
    });

    responses.push(res)

    try{
        req?.on('close', ( closeData ) => {
            console.log('===========================>>>>>>>>> Request Close', closeData)
            res?.end()
        })
    } catch(error) { console.log('===================>>>>>>>>> Error',  error ) }
    finally {
        console.log('Responses ===================================>>>>>>>>>>', responses.length )
    }
};

const sendResponse = (data, event) => {
    for (let response of responses) {
        response.write(`event: ${event}\n`);
        response.write(`data: ${JSON.stringify(data)}`);
        response.write("\n\n");
    }
};


eventEmitter.on("ping", () =>
    console.log('events connected')
);

eventEmitter.on("new-appointment", (data) => {
    sendResponse(data, "new-appointment")
});

eventEmitter.on("re-appointment", (data) =>
    sendResponse(data, "re-appointment")
);

eventEmitter.on("status", (data) =>
    sendResponse(data, "status")
);

eventEmitter.on("booking-status", (data) =>
    sendResponse(data, "booking-status")
);


