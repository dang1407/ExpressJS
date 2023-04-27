const news = require('./news');
const site = require('./site');
function route(app) {
    // app.get('/', (req, res)=>{
    //       res.render('home');
    // })
    app.use('/news', news);
    app.use('/', site);
}

module.exports = route;
