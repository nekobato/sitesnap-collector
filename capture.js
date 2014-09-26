var system = require('system');

var config = require('./' + system.args[1]);

var page = require('webpage').create();

page.viewportSize  = config.page.viewportSize;
page.customHeaders = config.page.customHeaders;

open = function() {
  var u = config.urls.shift();
  page.open(config.baseUrl + u.url, function() {
    page.render(config.device + "/" + u.name + '.png');
    console.log("rendered: " + u.name);
    if (config.urls.length) {
      open();
    } else {
      return phantom.exit();
    }
  });
}

open();
