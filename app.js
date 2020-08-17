import NoteManager from "./notemanager.js";
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
        body : 'hii hooooooooooooooooooosssssssssssssssssssssssssssssssssssssssssss'
    },

]});

notemanager.onnotechange=(noteobj)=>{
    console.log(noteobj);
};
notemanager.onnoteadd=(noteobj)=>{
    console.log(noteobj);
};
notemanager.onnoteremove=(noteman)=>{
    console.log(noteman);

};




const newnotebtn=document.querySelector('.newnote');
newnotebtn.onclick = () =>{
    notemanager.addnote({
        title : ' ',
        body : ' '
    });
};
