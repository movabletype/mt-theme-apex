# this configuration for generating sass source maps
# we can only generate them the following pre libraries now.
# gem install compass-sourcemaps --pre
# gem install sass --pre
# and then
# compass compile --config compass_configs/sourcemap.rb

http_path = "/"
sass_dir = "build/scss"
css_dir = "themes/apex/static/css/"
images_dir = "../"
output_style = :expanded
line_comments = false;
sass_options = { :sourcemap => true }
