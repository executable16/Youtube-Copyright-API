module.exports = function (str) {
  var module = {};
  console.log("we are printing this at info");
  console.log(str);
  for (var i = 0; i < str.length; ++i) {
    console.log("array element is " + str[i]);
  }
}
