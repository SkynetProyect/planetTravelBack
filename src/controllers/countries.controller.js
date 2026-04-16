const service = require("../services/countries.service");

exports.getAllCountries = (req, res) => {
  res.json(service.getAllCountries());
};

exports.getCountryByCode = (req, res) => {
  const { code } = req.params;
  res.json(service.getCountryByCode(code));
};

exports.getCountryByName = (req, res) => {
  const { name } = req.query;
  res.json(service.getCountryByName(name));
};

exports.getDistance = (req, res) => {
  const { from, to } = req.query;
  res.json({ distance: service.getDistance(from, to) });
};