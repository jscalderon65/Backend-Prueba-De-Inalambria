const app = require('./server.js');

app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
})

