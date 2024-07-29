const express = require("express");
const { parseHeaders } = require("./../controllers/parseHeadersController");

const router = express.Router();

router.route("/whoami").get(parseHeaders);

module.exports = router;
