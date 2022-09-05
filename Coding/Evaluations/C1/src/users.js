const express= require('express');
const router = express.Router();

router.get('/', function(req, res) {
        // res.render('index');
        console.log('getting')
        res.send("you are getting data")
        });
router.post('/', function(req, res) {
        // res.render('index');
        res.send("you are posting data")

        console.log('adding')
        });


router.get('/:id', function(req, res) {
                // res.render('index');
                let id=req.params.id;
                console.log('getting by id',id)
                res.send("Partincular users data")

        });


router.delete('/:id', function(req, res) {
                // res.render('index');
                let id=req.params.id;
                console.log('removing by id',id)
                res.send("you are deleting data");
        });
module.exports = router;