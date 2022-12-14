# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :relative_assets
set :relative_links, true
activate :livereload
activate :directory_indexes
activate :inline_svg

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :external_pipeline,
  name: :webpack,
  command: build? ? 'NODE_ENV=production ./node_modules/webpack/bin/webpack.js --bail' : 'NODE_ENV=development ./node_modules/webpack/bin/webpack.js --watch --color',
  source: ".tmp/dist",
  latency: 1

activate :blog do |blog|
  # see: https://github.com/middleman/middleman-blog/blob/master/lib/middleman-blog/extension.rb
  blog.prefix = "podcast"
  # URI prefix
  blog.permalink = "{episode}-{title}.html"
  blog.sources   = "{year}-{month}-{day}-{episode}-{title}.html"
end

configure :build do
  set :js_dir, '/'
  set :css_dir, '/'
  config[:host] = "https://gui-gui.github.io/mm-test"
end
