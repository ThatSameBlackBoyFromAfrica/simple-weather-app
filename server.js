var cors_proxy = require('cors-anywhere');
cors_proxy.createServer().listen(8080, '0.0.0.0', function() {
    console.log('Running CORS Anywhere on ' );
});