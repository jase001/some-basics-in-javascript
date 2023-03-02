

var finalAge = 90;
var userCurrentAge = parseInt(prompt("how old are you right now"));

function lifeInWeeks(age) {
    var years = finalAge - userCurrentAge;
    var days = years * 365
    var months = years * 12;
    var weeks = years * 52 ;

    result= `You have ${days} days left, ${weeks} weeks, and ${months} months left to live`
    console.log(result)
}
 lifeInWeeks(userCurrentAge)   
    

 




var range = Math.floor(Math.random()*100)

var fname = prompt("type first name");
var fname2 = prompt("type second name");



if(range>=0){
alert(fname+ " and " +fname2 + " are "  + range+"%" + " match!!");
}

