// Create web server
print("Starting web server");
var server = new Server(8080);
server.addPathHandler("/comments", function(request) {
    var response = new Response();
    response.setBody("Hello World");
    return response;
});
server.start();
