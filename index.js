const express = require('express');
const app = express();
const router = require('./router');
const snapshotHandler = require('./tools/snapshot-handler');
const PORT = 7000;

app.use(express.static(__dirname + '/views'));

app.use(router);

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Listening at port ${PORT}`);
});

// Every one minute
snapshotHandler.scheduleLogWrite(1 * 60 * 1000);