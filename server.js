var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var dataservice = require(__dirname + "/data_prep.js");
onHttpStart = ()=>{
    console.log('Express http server listening on port ' + HTTP_PORT);
}
app.use(express.static('public'));

app.get("/", function(req, res){
    let resText = "<h2>Declaration</h2> <br> <br>";
    resText += "The rest text is diplayed in the paragraph as shown in the screenshot.<br><br>"; 
    resText += "I acknowledge the College's academic integrity policy - and my own integrity - remain in effect whether my work is done remotely or onsite. Any test or assingnment is in act of trust between me and my instructor, and specially with my classmates... even when no one is watching. I Declare I will not break that trust.<br><br>"; 
    resText += "Name: Sandeep Digpal<br><br>";
    resText += "Student Number: 126454214<br><br>";
})

app.get("/Click to visit CPA Students",(req,res)=>{
    dataservice.getCpa().then((data) =>{
        res.json({data});
    }).catch((err)=>{
        res.json({message: err});
    })
})

app.get("/Click to see who has the highest GPA",(req,res)=>{
    dataservice.getHighGpa().then((data) =>{
        res.json({data});
    }).catch((err)=>{
        res.json({message: err});
    })
})

app.use((req, res)=>{
    res.status(404).end('PAGE NOT FOUND');
});
dataservice.initialize().then(() => {
    app.listen(HTTP_PORT, onHttpStart());
}).catch (() => {
    console.log('promises not stisfied');
});

app.listen(8080);