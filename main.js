
var markHeight = 2;
var JoanHeight = 1.6;

var markWeight = 55;
var JoanWeight = 52;

function calculateBMI(height, weight){
    let bmi = weight/(height*height);
    return bmi;
}
if(calculateBMI(markHeight,markWeight) > calculateBMI(JoanHeight,JoanWeight)){
    console.log("mark has higher bmi");
}
else if(calculateBMI(markHeight,markWeight) < calculateBMI(JoanHeight,JoanWeight)){
    console.log("Joan has higher bmi");
}
else {
    console.log("both has same bmi");
}