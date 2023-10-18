require('dotenv').config();
express = require('express');
routerWeb = require("./routes/web");
configViewEngine = require("./config/view-engine");
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;



configViewEngine(app);
app.use('/', routerWeb);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}: ${hostname}:${port}`)
})