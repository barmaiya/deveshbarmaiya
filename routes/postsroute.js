const express = require("express");
const app = express();
const router = express.Router();

const postModel = require('../models/posts');

router.get('/post', (request, response) => {
    postModel.find(function (err, data) {
        if (err) {
            response.json("{Message : Error Occured.}")
        }
        response.json(data);
    });
})


router.post('/post', (request, response) => {
    if (!request.body) {
        respond.send("Please enter post .");
    }
    let model = new postModel(request.body);
    model.save().then(game => {
        response.send(request.body);
    })
});


router.delete("/post/:id", (req, res, next) => {
    postModel.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "Post deleted!" });
    });
  });


module.exports = router;

