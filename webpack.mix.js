let mix = require('laravel-mix'); 
mix.setPublicPath('./'); 
mix.sass('src/scss/style.scss', 'dist/styles');
