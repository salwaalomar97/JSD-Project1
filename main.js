//q1
var myArray=[2,5,4,2,5,6,3,23,4,34,34,432,4,34,23,4,45,45,309];

function myFunction(myArray,number){
    for (x=0; x <= myArray.length; x++){
        if(myArray[x]===number){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(myFunction(myArray,9898));

//q2

function time(hrs,mins){
    var sec=(hrs*60*60)+(mins*60);
    return sec;
}
console.log(time(6,3));

//q3

var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}
console.log(aquarium.capacityInGallons);
aquarium.numberOfRocks+=2;
console.log(aquarium.numberOfRocks);
console.log(aquarium.fish[2]);
console.log(aquarium.fish[1].size);
aquarium.fish[0].size = "4 inches";
console.log(aquarium.fish[0].size);
aquarium.fish.push(
    {
        type:'Blue Starfish',
        size:'5 inches',
        color:'blue'
    }
);
console.log(aquarium.fish);

//q4
let data = {
    "people": [
      {
          "name": "Luke Skywalker",
          "height": "172",
          "mass": "77",
          "hair_color": "blond",
          "skin_color": "fair",
          "eye_color": "blue",
          "birth_year": "19BBY",
          "gender": "male"
      }, {
          "name": "C-3PO",
          "height": "167",
          "mass": "75",
          "hair_color": "n/a",
          "skin_color": "gold",
          "eye_color": "yellow",
          "birth_year": "112BBY",
          "gender": "n/a"
      }, {
          "name": "R2-D2",
          "height": "96",
          "mass": "32",
          "hair_color": "n/a",
          "skin_color": "white, blue",
          "eye_color": "red",
          "birth_year": "33BBY",
          "gender": "n/a"
      }, {
          "name": "Darth Vader",
          "height": "202",
          "mass": "136",
          "hair_color": "none",
          "skin_color": "white",
          "eye_color": "yellow",
          "birth_year": "41.9BBY",
          "gender": "male"
      }, {
          "name": "Leia Organa",
          "height": "150",
          "mass": "49",
          "hair_color": "brown",
          "skin_color": "light",
          "eye_color": "brown",
          "birth_year": "19BBY",
          "gender": "female"
      }
  ] 
 } 

 module.exports = JSON.stringify(data);

 json=(require('.data'));
 let logData=function(){
     console.log(json);
 }
 logData;

 let logNames=function(){
     let obj=JSON.parse(json);
     for (var x=0;x<obj.people.length;x++){
         console.log(obj.people[x].name);
     }
 };
 logNames();

 let logNameEyes=function(){
     let obj=JSON.parse(json);
     for(var x=0;x<Object.people.length;x++){
         console.log(obj.people[x].name+"-"+obj.people[x].eye_color);
     }
 };
 logNameEyes;

 let logByMass=function(){
     let obj=JSON.parse(json);
     for (var x=0;x<obj.people.length;x++){
         if (obj.people[x].mass>75){
             console.log(obj.people[x].name);
         }
     }
 };
 logByMass;

 //bonus q1
 function getRandomNum(num){
     return Math.floor(Math.random()*Math.floor(num));
 }
 console.log(getRandomNum(6));
 console.log(getRandomNum(10));
 