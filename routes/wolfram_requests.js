const router = require("express").Router();
const axios = require("axios");

router.get("/paths/:city/:astronomicalBody", (req, res) => {
  const { city, astronomicalBody } = req.params;
  axios
    .get(
      `http://api.wolframalpha.com/v2/query?appid=${process.env.API_KEY}&input=${astronomicalBody}+${city}&output=json`
    )
    .then(response => {
      // get related pod
      let searchValue =
        astronomicalBody === "sun"
          ? "SunDayPlot:StarData"
          : "MoonPathFromLocation";
      let result = "";
      response.data.queryresult.pods.forEach(pod => {
        if (pod.id === searchValue) {
          result = pod.subpods[0].img;
        }
      });
      return res.json(result);
    })
    .catch(error => {
      console.log(error);
      res.status(400).json({ message: "Something went wrong 😓." });
    });
});

module.exports = router;
