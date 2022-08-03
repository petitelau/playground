const express = require("express");
const router = new express.Router();
const path = require('path');
const { hbsProperties } = require("../config/app.config");
const log4js = require("../services/log4j");
let logger = log4js.getLogger("playground");

// --- Chat pages ---
router.get("", (req, res) => {
  logger.info(`access to 'main' page`);
  res.render("home", { ...hbsProperties, title: "Playground" });
});

router.get("/home", (req, res) => {
  logger.info(`access to 'main' page`);
  res.render("home", { ...hbsProperties, title: "Playground" });
});


router.get("/um", (req, res) => {
  logger.info(`go umbrella`); 
  res.redirect("/umbrella.html");
});


router.get("/fun", (req, res) => {
  logger.info(`access to 'fun' page`);
  res.render("fun", { ...hbsProperties, title: "CSS Challenges" });
});

router.get("/ball", (req, res) => {
  logger.info(`access to 'ball' page`);
  res.render("ball", { ...hbsProperties, title: "Ball" });
});

router.get("/umbrella",(req,res)=>{
  logger.info(`access to 'umbrella' page`);
  res.render("umbrella", { ...hbsProperties, title: "Balance" });
})


router.get("/about", (req, res) => {
  logger.info(`access to 'about' page`);
  res.render("about", { ...hbsProperties, title: "About my Playground" });
});

router.get("/links", (req, res) => {
  logger.info(`access to 'links' page`);
  res.render("links", {
    ...hbsProperties,
    title: "Links to my sites",
  });
});

module.exports = router;
