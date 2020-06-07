exports.index = function (req, res, next) {
  res.render("index", { title: "Express", h1: "Something" });
};
