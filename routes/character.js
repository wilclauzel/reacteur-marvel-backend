const express = require("express");
const axios = require("axios");
const { getBaseUrl } = require("../services/connect");

const {
  getErrorMessage,
  updateServerErrorResponse,
} = require("../services/error");

/* Initialize */
const router = express.Router();

let charactersData = null;
let characterData = null;
let charactersComicsData = null;

/* Routes */
router.get("/characters", async (req, res) => {
  try {
    const { offset, limit, nameStartsWith, orderBy } = req.query;
    let params = "";
    params +=
      offset && Number(offset) ? `&offset=${Number(offset).toFixed(0)}` : "";
    params +=
      limit && Number(limit) ? `&limit=${Number(limit).toFixed(0)}` : "";
    params += nameStartsWith ? `&nameStartsWith=${nameStartsWith}` : "";
    params += orderBy ? `&orderBy=${orderBy}` : "";
    const url = getBaseUrl("characters") + params;

    // Code pour Debug avec limitation des appels API Marvel
    // console.log(url);
    // if (!charactersData) {
    //   console.log("###################### APPEL MARVEL ######################");
    //   const response = await axios.get(url);
    //   // const response = "hulkData";
    //   //console.log(response.data.data);
    //   charactersData = response.data.data;
    // }
    // console.log("###################### APPEL MARVEL ######################");
    const response = await axios.get(url);
    charactersData = response.data.data;

    if (charactersData) {
      res.status(200).json(charactersData);
    } else {
      res.status(400).json(getErrorMessage("None response from Marvel"));
    }
  } catch (error) {
    updateServerErrorResponse(res, error);
  }
});

router.get("/characters/:characterId", async (req, res) => {
  try {
    if (req.params.characterId) {
      const url = getBaseUrl(`characters/${req.params.characterId}`);

      // Code pour Debug avec limitation des appels API Marvel
      // console.log(url);
      // if (!characterData) {
      //   console.log(
      //     "###################### APPEL MARVEL ######################"
      //   );
      //   const response = await axios.get(url);
      //   // const response = "vide";
      //   //console.log(response.data.data);
      //   characterData = response.data.data;
      // }
      // console.log("###################### APPEL MARVEL ######################");
      const response = await axios.get(url);
      characterData = response.data.data;

      if (characterData) {
        res.status(200).json(characterData);
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

router.get("/characters/:characterId/comics", async (req, res) => {
  try {
    if (req.params.characterId) {
      const { offset, limit, orderBy } = req.query;
      let params = "";
      params +=
        offset && Number(offset) ? `&offset=${Number(offset).toFixed(0)}` : "";
      params +=
        limit && Number(limit) ? `&limit=${Number(limit).toFixed(0)}` : "";
      params += orderBy ? `&orderBy=${orderBy}` : "";
      const url =
        getBaseUrl(`characters/${req.params.characterId}/comics`) + params;

      // Code pour Debug avec limitation des appels API Marvel
      // console.log(url);
      // if (!charactersComicsData) {
      //   console.log(
      //     "###################### APPEL MARVEL ######################"
      //   );
      //   const response = await axios.get(url);
      //   // const response = "vide";
      //   //console.log(response.data.data);
      //   charactersComicsData = response.data.data;
      // }
      // console.log("###################### APPEL MARVEL ######################");
      const response = await axios.get(url);
      charactersComicsData = response.data.data;

      if (charactersComicsData) {
        res.status(200).json(charactersComicsData);
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
