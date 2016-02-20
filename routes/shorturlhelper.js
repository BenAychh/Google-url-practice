module.exports = function (url) {
  var obj = {};
  obj['title'] = 'We got a url from google!';
  obj['response'] = 'Here is your url!';
  obj['url'] = '<a href="' + url + '">' +  url + '</a>';
  console.log(obj.url);
  return obj;
};
