var fs = require("fs");
//var list=JSON.parse(fs.readFileSync('Data.json'))

var fetchNotes = () => {

    // Try catch to verify if the file exist in the system and convert to JSON OBJECT
     try {
       return  JSON.parse(fs.readFileSync('Data.json'));
     } catch(e){
       return [];
     }
  };

//SAVE Note to a file
var saveNotes = (notes) => {
    fs.writeFileSync('Data.json',JSON.stringify(notes));
    };

//Add note
var addNote = (title, body) =>
 {
   // create array of empty notes
  var notes = fetchNotes ();
  //OBJECT OF A note
  var note ={title, body};
 //SAVE Note to a file
 if (notes.filter((note) => note.title === title).length === 0)
 {
   notes.push(note);
   saveNotes(notes);
   return note;
 }
 };

 // List all note
var getAll = () =>
{
  return fetchNotes ();
};

// List note
var getNote = (title) =>
{
var notes = fetchNotes ();
var FilteredNotes = notes.filter((note) => note.title === title);
return FilteredNotes[0];
};

// remove a note
var removeNote = (title) =>
{
    var notes = fetchNotes ();
    var FilteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(FilteredNotes);
    return notes.length !== FilteredNotes.length;
};

var logNote = (note) =>{
    console.log("----");
    console.log(`Title: ${note.title} `);
    console.log(`Body: ${note.body} `);
  };

  module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
  };













//List all person
// var getData = () =>{
//     console.log(`Printing ${list.length} person`);
//     console.log('---');
//     for (var i =0; i < list.leng; i++) { 
//         console.log(`Name : ${list[i].name}`);
//         console.log(`Age : ${list[i].age}`);
//         console.log('**************');    
//     }
// } 

// module.exports = {
//     getData,
// }

// var arr = []
// var data = fs.readFileSync('Data.json').toString();
//    if (process.argv[2]==='list'){
//         arr = data.split('},');
//         console.log(`Printing ${arr.length} datas`);}
//     if (process.argv[2]==='add'){} 
