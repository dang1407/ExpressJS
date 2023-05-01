const Course = require('../models/Course');

class SiteController {
    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [GET] /
    async home(req, res) {
        Course.find()
            .then((course) => {
                res.send(course);
            })
            .catch((error) => {
                console.log(error);
            })
        
    }
}

module.exports = new SiteController();
