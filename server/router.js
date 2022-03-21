const { Router } = require('express');
const { parse } = require('url');
const server = require('../');

const router = Router();

router.get('/', async (req, res) => {
  const parsedUrl = parse(req.url, true);
  await server.handle(req, res, parsedUrl);
});

router.get('/error', async (req, res) => {
  return res.status(500).send("Unknown server error.");
})

module.exports = router;
