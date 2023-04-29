// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser');
// const port = 3001;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


// app.post('/add', (req, res) => {
//     const a = parseInt(req.body.N1);
//     const b = parseInt(req.body.N2);
//     const sum = a + b;
//     res.send({ result: sum });
// });


// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });

var express = require('express');
var router = express.Router();

router.get('/:N1/and/:N2', function(req, res, next) {
    console.log(req.params.N1 + req.params.N2);
    let N1 = parseInt(req.params.N1), N2 = parseInt(req.params.N2);
    res.json({"Addition" : N1 + N2});
});

module.exports = router;



