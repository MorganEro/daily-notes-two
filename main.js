/* PROJECT REQUIREMENTS AND ALGORITHM
    Define a variable named `notes` and assign a value of an empty array
*/
/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/
const notes = [
    {   
        id: 1,
        text: "This is about fruits.",
        author: "John Doe",
        Date: "8/8/2008",
        topics: ["Apple", "Banana", "Orange"]
    }, 
    {
        id: 2,
        text: "This is about anime.",
        author: "Sam Ngo",
        Date: "2/7/2022",
        topics: ["Naruto", "DBZ", "Death Note"]
    },
    {
        id: 3,
        text: "This is about money.",
        author: "Sarah Holder",
        Date: "3/25/2021",
        topics: ["Yen", "Dollar", "Pound"]
    }
]
/* NOTE OBJECTS AND ARRAY
push 3 more objects into the array*/
const firstNewObject =  {
    id: 4,
    text: "This is about dogs.",
    author: "Tina Price",
    Date: "3/25/2021",
    topics: ["Pug", "Bulldog", "Greyhound"]
}
const secondNewObject =  {
    id: 5,
    text: "This is about chickens.",
    author: "Bill Farmer",
    Date: "6/21/2017",
    topics: ["Rooster", "Hen", "Eggs"]
}
const thirdNewObject =  {
    id: 6,
    text: "This is about sports.",
    author: "Angela Minks",
    Date: "8/05/1991",
    topics: ["Baseball", "Soccer", "Hockey"]
}
notes.push(firstNewObject)
notes.push(secondNewObject)
notes.push(thirdNewObject)


/* LIST OF NOTES */

for (const eachNoteIteration of notes) {
    //console.log(eachNoteIteration.text)
}
/* LIST OF TOPICS */
/*
console.log("*** All Note Topics ***")
for (const eachNoteIteration of notes){
    for (const eachTopic of eachNoteIteration.topics) 
    console.log(eachTopic)
}
*/

/* AVERAGE TOPIC PER NOTE */
let totalNotes = 0

//console.log("*** Average Topics Per NOte ***")
for (const eachNoteIteration of notes) {
    totalNotes += eachNoteIteration.topics.length
}
const averageNotesPerTopic = totalNotes / notes.length
//console.log(averageNotesPerTopic)


/* LIST OF NOTES BY TOPIC */

const filteredNotes = []
const criteria = "Banana"
//console.log("*** Notes with the github topic ***")
for ( const eachNoteIteration of notes) {
    if (eachNoteIteration.topics .includes(criteria)){
        filteredNotes.push(eachNoteIteration)
       // console.log(filteredNotes)
    }
}

/* HTML NOTE ARTICLES */

/* console.log("***  Note Articles  ***")
// display each text surrounded by article tags
for (eachNoteIteration of notes) {
   // console.log(`<article> ${eachNoteIteration.text} </article> `)
}
*/


/* NOTE TOPICS SUBSECTION*/

//edited the code from Note articles adding sections to each one
//in each loop for the text, grab each topic value and surround it with section tags
console.log("***  Note Articles  ***")
//ask how to make this work
/*let allTextAndArticleTag = " "
let allTopicsAndSectionTags= " "
for (const eachNoteIteration of notes) {
    for (const topic of eachNoteIteration.topics) {
        allTextAndArticleTag += `<article>${eachNoteIteration.text}</article>`
        allTopicsAndSectionTags += `<section>${topic.topics}</section>`
        console.log(`${allTextAndArticleTag}/n/t ${allTopicsAndSectionTags}/n`)
    }
} */
allHtml =  " "
for (const note of notes) {
    allHtml += "<article>\n\t"
    allHtml += `${note.text}\n`
    for (const topic of note.topics) {
        allHtml += `\t<section>${topic}</section>\n`
    }
    allHtml += "</article>\n"
}
console.log(allHtml)