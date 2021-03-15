const express = require("express");
const https = require("https");
const body = require("body-parser")
const app = express();


app.use(body.urlencoded({extended: false}))

let counter = 0;
app.get("/", (req, res)=>{
    counter +=1;

    https.get("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ea468c722a4601f08806754e47e8d196", (anoir)=>{

console.log(anoir.statusCode);
anoir.on("data", (datainfo)=>{
    const dataver = JSON.parse(datainfo)
    let lijst = dataver.weather[0].main
    

    res.send(`<h1>Het weer in london is:${lijst}</h1>`)
})

})


   //res.send("<h1>ja wij zijn live</h1>" );



console.log(`pageview is nu ${counter}`)
    });

app.listen(process.env.PORT || 80, ()=>{
    console.log("server is aan het luisteren...");
});


