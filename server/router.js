const { Router } = require('express');
const { parse } = require('url');
const server = require('../');

const router = Router();

router.get('/', async (req, res) => {
  const parsedUrl = parse(req.url, true);
  await server.handle(req, res, parsedUrl);
});

module.exports = router;
