const models = require("../models");

exports.get_landing = function (req, res, next) {
  res.render("landing", { title: "Express" });
};

exports.submit_lead = function (req, res, next) {
  // console.log("Lead Email:");
  // console.log("lead email:", req.body.lead_email);
  // res.redirect("/");

  return models.Lead.create({ email: req.body.lead_email }).then((lead) => {
    res.redirect("/leads");
  });
};

exports.show_leads = function (req, res, next) {
  models.Lead.findAll().then(leads => {
    res.render('landing', { title: 'Express', leads: leads });
  })

};