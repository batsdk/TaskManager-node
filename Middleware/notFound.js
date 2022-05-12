const notFound = (req, res) => {
  res.status(404).send("Route Does not EXIST");
};

module.exports = notFound;
