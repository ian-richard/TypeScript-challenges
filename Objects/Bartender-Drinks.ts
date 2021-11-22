/*
Description:
Complete the function that receives as input a string, and produces outputs according to the following table:
Input 	Output
"Jabroni" 	"Patron Tequila"
"School Counselor" 	"Anything with Alcohol"
"Programmer" 	"Hipster Craft Beer"
"Bike Gang Member" 	"Moonshine"
"Politician" 	"Your tax dollars"
"Rapper" 	"Cristal"
anything else 	"Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars". */

export function getDrinkByProfession_og(pro:string){
    var job = pro.toLowerCase();
    return job === "jabroni" ? "Patron Tequila" :
           job === "school counselor" ? "Anything with Alcohol" :
           job === "programmer" ?"Hipster Craft Beer" :
           job === "bike gang member" ? "Moonshine" :
           job === "politician" ? "Your tax dollars" :
           job ==="rapper" ?  "Cristal" : "Beer";
  }

//refactored
const drinks = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
  }
  
  export function getDrinkByProfession_obj(profession:string){
    return drinks[profession.toLowerCase()] || "Beer";
  }


 

//dictionary 

interface IDictionary {
    [index: string]: string;
}

var params: IDictionary = {};
params['jabroni'] = 'Patron Tequila';
params['school counselor'] = 'Anything with Alcohol';
params['programmer'] = 'Hipster Craft Beer';
params['bike gang member'] = 'Moonshine';
params['politician'] = 'Your tax dollars';
params['rapper'] = 'Cristal';

export function getDrinkByProfession(profession:string){
 var key = profession.toLowerCase();
 if(params[key] !== undefined){
   return params[key];
 }
 return "Beer";
}

console.log(getDrinkByProfession("programmer"));


