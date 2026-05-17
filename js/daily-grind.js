/*

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/



let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

switch(myDay){

 	case 0:
    	today =  "Sunday";
        coffee = {
            name:"Pumpkin Spice Latte",
            pic:"pumpkin-spice-latte.jpg",
            alt:"A pic of a warming pumpkin spice latte.",
            color:"orange",
            day:"Sunday",
            desc:`Sunday morning pumpkin spice latte!`,
        };
 	break;

    case 1:
   	    today = "Monday";
        coffee = {
            name:"Mocha",
            pic:"mocha.jpg",
            alt:"A pic of a mocha.",
            color:"red",
            day:"Monday",
            desc:`We love mocha!`,
        };
 	break;

 	case 2:
   	    today = "Tuesday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"pink",
            day:"Tuesday",
            desc:`I like me some Bubble Tea!`,
        };
 	break;

    case 3:
   	    today = "Wednesday";
        coffee = {
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A pic of a sweet caramel latte.",
            color:"yellow",
            day:"Wednesday",
            desc:`Caramel latte wanted!`,
        };
 	break;

    case 4:
   	    today = "Thursday";
        coffee = {
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"A pic of a cold brew.",
            color:"blue",
            day:"Thursday",
            desc:`I want some cold brew!`,
        };
 	break;



    case 5:
   	    today = "Friday";
        coffee = {
            name:"Drip",
            pic:"drip.jpg",
            alt:"A pic of drip coffee.",
            color:"brown",
            day:"Friday",
            desc:`I need a constant drip!`,
        };
 	break;

    case 6:
   	    today = "Saturday";
        coffee = {
            name:"Frappaccino",
            pic:"frappaccino.jpg",
            alt:"A pic of a foamy frappucino.",
            color:"green",
            day:"Saturday",
            desc:`Always refreshing frappucino!`,
        };
 	break;

 	default:
    	today = "Something went wrong!";

}

console.log(coffee);

alert(coffeeTemplate(coffee));

//Adds coffee to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//Changes the background color depending on the coffee
document.querySelector("html").style.backgroundColor = coffee.color;


function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
    <p>
	<img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
	<strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong> ${coffee.desc}
	</p>
    `;

    return myReturn;
}
