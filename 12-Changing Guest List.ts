const g_List=["Salman","Ans ","Hamza"]
for (let i =0;i<g_List.length;i++){
    console.log("Hi,"+ g_List[i]+" I would like to request the honor of your presence in our Dinner")

}
console.log(g_List[2]+" Can't make it to our Dinner.")
g_List.splice(2,2,"Musab")
console.log("Hi,"+ g_List[2]+" I would like to request the honor of your presence in our Dinner")
