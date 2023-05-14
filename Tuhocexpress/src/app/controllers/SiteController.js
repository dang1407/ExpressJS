const Course = require('../models/Course');

class SiteController {
    // [GET] /search
    // search(req, res) {
    //     res.render('search');
    // }

    // [GET] /
    home(req, res) {
        // res.send()
        // console.log(req.query)
        // res.send("Hello World!")
        Course.find()
            .then((courses) => {
                courses = courses.map(course => course.toObject());
                // res.render('home', {courses});
                res.json(courses)
            })
            .catch((error) => {
                console.log(error);
            })
        // res.json(Course.find())
    }

    search(req, res){
        const id = req.params.id
        Course.find()
            .then((course) => {
               res.send(course)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    postCourse(req, res) {
        
    }
}

module.exports = new SiteController();
