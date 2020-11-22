const express = require("express");
const axios = require("axios");
const { getBaseUrl } = require("../services/connect");

const {
  getErrorMessage,
  updateServerErrorResponse,
} = require("../services/error");

/* Initialize */
const router = express.Router();

let comicsData = null;
let comicData = null;
let comicsCharactersData = null;

/* Routes */
router.get("/comics", async (req, res) => {
  try {
    const { offset, limit, titleStartsWith, orderBy } = req.query;
    let params = "";
    params +=
      offset && Number(offset) ? `&offset=${Number(offset).toFixed(0)}` : "";
    params +=
      limit && Number(limit) ? `&limit=${Number(limit).toFixed(0)}` : "";
    params += titleStartsWith ? `&titleStartsWith=${titleStartsWith}` : "";
    params += orderBy ? `&orderBy=${orderBy}` : "";
    const url = getBaseUrl("comics") + params;

    // Code pour Debug avec limitation des appels API Marvel
    // console.log(url);
    // if (!comicsData) {
    //   console.log("###################### APPEL MARVEL ######################");
    //   const response = await axios.get(url);
    //   // const response = "hulkData";
    //   //console.log(response.data.data);
    //   comicsData = response.data.data;
    // }
    // console.log("###################### APPEL MARVEL ######################");
    const response = await axios.get(url);
    comicsData = response.data.data;

    if (comicsData) {
      res.status(200).json(comicsData);
    } else {
      res.status(400).json(getErrorMessage("None response from Marvel"));
    }
  } catch (error) {
    updateServerErrorResponse(res, error);
  }
});

router.get("/comics/:comicId", async (req, res) => {
  try {
    if (req.params.comicId) {
      const url = getBaseUrl(`comics/${req.params.comicId}`);

      // Code pour Debug avec limitation des appels API Marvel
      // console.log(url);
      // if (!comicData) {
      //   console.log(
      //     "###################### APPEL MARVEL ######################"
      //   );
      //   const response = await axios.get(url);
      //   // const response = "vide";
      //   //console.log(response.data.data);
      //   comicData = response.data.data;
      // }
      // console.log("###################### APPEL MARVEL ######################");
      const response = await axios.get(url);
      comicData = response.data.data;

      if (comicData) {
        res.status(200).json(comicData);
      } else {
        res.status(400).json(getErrorMessage("None response from Marvel"));
      }
    } else {
      res.status(400).json(getErrorMessage("Missing mandatory parameter"));
    }
  } catch (error) {
    updateServerErrorResponse(res, error);
  }
});

router.get("/comics/:comicId/characters", async (req, res) => {
  try {
    if (req.params.comicId) {
      const { offset, limit, orderBy } = req.query;
      let params = "";
      params +=
        offset && Number(offset) ? `&offset=${Number(offset).toFixed(0)}` : "";
      params +=
        limit && Number(limit) ? `&limit=${Number(limit).toFixed(0)}` : "";
      params += orderBy ? `&orderBy=${orderBy}` : "";
      const url =
        getBaseUrl(`comics/${req.params.comicId}/characters`) + params;

      // Code pour Debug avec limitation des appels API Marvel
      // console.log(url);
      // if (!comicsCharactersData) {
      //   console.log(
      //     "###################### APPEL MARVEL ######################"
      //   );
      //   const response = await axios.get(url);
      //   // const response = "vide";
      //   //console.log(response.data.data);
      //   comicsCharactersData = response.data.data;
      // }
      // console.log("###################### APPEL MARVEL ######################");
      const response = await axios.get(url);
      comicsCharactersData = response.data.data;

      if (comicsCharactersData) {
        res.status(200).json(comicsCharactersData);
      } else {
        res.status(400).json(getErrorMessage("None response from Marvel"));
      }
    } else {
      res.status(400).json(getErrorMessage("Missing mandatory parameter"));
    }
  } catch (error) {
    updateServerErrorResponse(res, error);
  }
});

module.exports = router;
