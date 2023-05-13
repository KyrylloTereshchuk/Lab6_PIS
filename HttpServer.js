const http = require("http");

http.createServer(function(request, response){

    response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
    if(request.url === "/home" || request.url === "/"){
        response.write("<h2>Welcome</h2>");
    }
    else if(request.url == "/is-11fiot-21-127"){
        response.write("<h2>Терещук Кирило</h2>");       
        response.write("<p>2 курс, група ІС-11</p>");
    }
    else{
        response.write("<h2>Not found</h2>");
    }
    response.end();

}).listen(3000, () =>{
    console.log("done");
}
    );