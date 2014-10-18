phantom = require 'phantom'

config = require path.resolve process.argv[1]

phantom.create (ph) ->
  ph.createPage (page) ->
    for site in config.sites
      page.open site.url, status
      page.render "#{config.device}/#{site.name}.png", (result) ->
        console.log result
        ph.exit()
