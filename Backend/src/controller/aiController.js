const aiService = require("../services/aiServices");

module.exports.getReview = async (req, res) => {
  const code = req.body.code;
  console.log(req.body);
  if (!code)
    return res.status(400).json({
      success: false,
      message: "Please provide your code",
    });
  const response = await aiService(code);

  res.status(200).json({
    success: true,
    data: response,
  });
};
