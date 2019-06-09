const fs = require('fs')
const crud = require('./CRUD')

var cmd=process.argv[2];

if(cmd == 'add')
{
  var note = crud.addNote(process.argv[4],process.argv[6]);
  if (note)
  {
    console.log("Note created");
    crud.logNote(note);
  }
  else {
    console.log("Note title taken");
  }

}
else if (cmd === 'list') {
    var allNotes = crud.getAll();
  
  
    if(allNotes.length !== 0)
    {
      console.log(`Printing ${allNotes.length} notes`);
  
      allNotes.forEach((note) => crud.logNote(note));
    }
    else {
        console.log("Empty Note List");
    }
  
}
else if (cmd === 'read') {
    var note = crud.getNote(process.argv[4]);
    if (note)
    {
      console.log("Note Found");
      crud.logNote(note);
    }
    else {
      console.log("Note not found");
    }
}
else if (cmd === 'remove') {
    var noteRemoved = crud.removeNote(process.argv[4]);
    var message = noteRemoved ? 'Note was removed':'Note not found';
    console.log(message);
}
else {
    console.log('Command not recognised');
}