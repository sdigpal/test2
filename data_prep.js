const file = require('fs');  
var prep = [];


exports.initialize = () =>{
    return new Promise ((resolve, reject) =>{
        file.readFile('./data/departments.json', (err,data)=> {
            if (err) {
                reject ('unable to fetch data');
            }
            else {
                prep = JSON.parse(data);
            }
        });    
        resolve();
    })
};

exports.getCpa = () => {
    return new Promise ((resolve, reject) => {
        var cpa = students.filter(program => program.isCPA == true);
        if (cpa.length == 0) {
            reject('unable to fetch data');
        }
        resolve(cpa);
    })
};

exports.getHighGpa = () => {
    return new Promise ((resolve, reject) => {
        var highGPA = students.filter(gpa => gpa.is4 == true);
        if (highGPA.length == 0) {
            reject('unable to fetch data');
        }
        resolve(highGPA);
    })
};
