let context = require.context(".", false, /\.jpg$/);

export default {
  bg1: context("./bg1.jpg"),
  night_woods: context("./night_woods.jpg")
};