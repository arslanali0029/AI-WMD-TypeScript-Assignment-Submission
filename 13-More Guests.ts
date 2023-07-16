const MoreGuests=["Salman","Ans ","Hamza"]
for (let i =0;i<MoreGuests.length;i++){
    console.log("Hi,"+ MoreGuests[i]+" I would like to request the honor of your presence in our Dinner")
}
console.log(MoreGuests[2]+" Can't make it to our Dinner.")
MoreGuests.splice(2,2,"Musab")
console.log("Hi,"+ MoreGuests[2]+" I would like to request the honor of your presence in our Dinner")

MoreGuests.unshift("Ayan")
MoreGuests.splice(2,0,"Ryha")
MoreGuests.push("Ayra")
for (let i =0;i<MoreGuests.length;i++){
    console.log("Hi,"+ MoreGuests[i]+" I would like to request the honor of your presence in our Dinner")

}