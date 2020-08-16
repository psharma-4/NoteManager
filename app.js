import NoteManager from "./notemanager";
// import Note from "./Note";
const notemanager= new NoteManager(
    {el:document.querySelector('.mynotes'),
notes: [
    {
        title : 'hello',
        body : 'hii'
    },
    {
        title : 'hello2',
        body : 'hii'
    },

]});