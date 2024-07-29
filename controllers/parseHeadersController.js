const parseHeaders = (req, res) => {
  const ipaddress = req.ip;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({
    ipaddress,
    language,
    software,
  });
};

module.exports = { parseHeaders };
