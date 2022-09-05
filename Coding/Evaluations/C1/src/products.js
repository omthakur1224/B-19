const express= require('express');
const router = express.Router();

router.get('/', function(req, res) {
        // res.render('index');
        console.log('getting')
        });
router.post('/', function(req, res) {
        // res.render('index');
        
        console.log('adding')
        });


router.get('/:id', function(req, res) {
                // res.render('index');
                let id=req.params.id;
         console.log('getting by id',id)
        });


router.delete('/:id', function(req, res) {
                // res.render('index');
                let id=req.params.id;
                console.log('removing by id',id)
        });
module.exports = router;