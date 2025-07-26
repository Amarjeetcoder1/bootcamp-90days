let fruit = ["Apple", "Banana","Orange"]
//              0         1       2
console.log(fruit[0]);
// console.log(fruit.length); 

//Add Items

fruit.push("Mango")
console.log(fruit);


//Remove Items

fruit.pop()
console.log(fruit);

// Find Items with the help of index
console.log(fruit.indexOf("Orange"));

//Update the values
fruit[0] = "Papaya"
console.log(fruit);

for(let i = 1; i <= 100; i++) {
    console.log(i);
    
}

// 1st step = i = 1
// 2nd step = i <= 10 --> Condition check
// 3rd step = console.log(1) --> If condition is true then print 
// 4th step = 1+1 // After print 

// While Loops

let Count = 0

while(Count < 100) {
    console.log(Count);
    Count++
    
}

// Here we don't know how much time the loops run. 
// let password = ""

// while (password !== "secert123") {
//     password = prompt("Enter the Correct password") 
// }
// alert("Access Granted")

let accesseries = ["Laptop", "Chaarger", "Mouse", "keyboard", "Moblie"]

for(i = 0; i<accesseries.length; i++) {
    // console.log(accesseries[i]);
    
}

// For of Loops 
for(let amarjeet of accesseries) {
    console.log(amarjeet);
    
}

