let app = require('./config/express')();
require('./config/database')('mongodb://<admin>:<JJ8G338HfG6Ug8x>@ds155076.mlab.com:55076/tere360');

app.listen(app.get('port'), () => {
    console.log(`Express Server on port ${app.get('port')}`);
});