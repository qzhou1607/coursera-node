var express = require('express');
var bodyParser = require('body-parser');
var leadershipRouter = express.Router();

leadershipRouter.use(bodyParser.json());

leadershipRouter.route('/')
  .all(function(req,res,next) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
  })
  .get(function(req,res,next) {
    res.end('Will send all the leadershipes to you');
  })
  .post(function(req,res,next) {
    res.end('Will add the leadership:' + req.body.name + ' with description' + req.body.description);
  })
  .delete(function(req,res,next) {
    res.end('Deleting all leadershipes');
  });

leadershipRouter.route('/:leadershipId')
  .get(function(req,res,next) {
    res.end('Will send details of the leadership:' + req.params.leadershipId + ' to you!');
  })
  .put(function(req,res,next) {
    res.end('Will update the leadership ' + req.params.leadershipId + 'with ' + req.body.description);
  })
  .delete(function(req,res,next) {
    res.end('Deleting leadership: ' + req.params.leadershipId);
  });

module.exports = leadershipRouter;
