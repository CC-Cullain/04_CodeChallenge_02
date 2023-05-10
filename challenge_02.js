/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


let vorName = prompt("Gib hier deinen Namen ein");
let age = parseInt(prompt("Wie alt bist du?"));

    let milch   = (age < 6);
    let saft    = (age < 13);  
    let cola    = (age < 18);
    let wein    = (age > 17);

switch (true) {
    
    case milch:
        console.log(vorName + " trinkt Milch!");        
        break;

    case saft:
        console.log(vorName + " trinkt Saft!");        
        break;

    case cola:
        console.log(vorName + " trinkt Cola!");        
        break;

    case wein:
        console.log(vorName + " trinkt Wein!");        
        break;

    default:
        console.log("So gibts nicht zu trinken!");
        break;
}