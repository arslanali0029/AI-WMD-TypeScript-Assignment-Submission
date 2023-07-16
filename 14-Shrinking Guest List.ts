const shrinklist=["Salman","Ans"]
for (let i =0;i<shrinklist.length;i++){
    console.log("Hi,"+ shrinklist[i]+" I would like to request the honor of your presence in our Dinner")
}
console.log(shrinklist[1]+" Can't make it to our Dinner.")
shrinklist.splice(1,1,"Musab")
console.log("Hi,"+ shrinklist[1]+" I would like to request the honor of your presence in our Dinner")

shrinklist.unshift("Ayan")
shrinklist.splice(1,0,"Ryha")
shrinklist.push("Ayra")
console.log(shrinklist)
for (let i =0;i<shrinklist.length;i++){
    console.log("Hi,"+ shrinklist[i]+" I would like to request the honor of your presence in our Dinner")

}
console.log("You can invite only two people for dinner.")
for (let i=0;i<shrinklist.length;i++){
    console.log("I am sorry "+   shrinklist.splice(i, 1)    +" Can't invite you to dinner.")
}
for (let i =0;i<shrinklist.length;i++){
    console.log("Hi,"+ shrinklist[i]+" I would like to request the honor of your presence in our Dinner")
}
for (let i =0;i<=shrinklist.length;i++){
    shrinklist.pop()
}
console.log(shrinklist)