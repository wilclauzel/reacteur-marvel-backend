const uid2 = require("uid2");
const md5 = require("crypto-js/md5");

const getBaseUrl = (route) => {
  const ts = uid2(16);
  const hash = md5(
    ts + process.env.MARVEL_API_SECRET_KEY + process.env.MARVEL_API_PUBLIC_KEY
  );

  return `${process.env.MARVEL_URL}${route}?ts=${ts}&apikey=${process.env.MARVEL_API_PUBLIC_KEY}&hash=${hash}`;
};
module.exports = { getBaseUrl };
