import Note from "./Note.js";
export default class NoteManager{
    constructor({el,notes}){
        this.el=el;
        this.notes= notes.map(note=> new Note(note,this));
        this.onnotechange=(noteobj)=>{};
        this.onnoteadd =(noteobj)=>{};
        this.onnoteremove=()=>{};

        this.renderNotes();
    }

    renderNotes(){
        this.el.innerHTML ='';
        this.notes.forEach(note =>this.rendernote(note.getElement()));

    }
    rendernote(noteel){
        this.el.appendChild(noteel);

    }

    removenote(note){
        this.notes.splice(this.notes.indexOf(note),1);
        this.renderNotes();
        this.onnoteremove(this);

    }

    addnote(note){
        const noteobj= new Note(note,this)
        this.notes.push(noteobj);
        this.onnoteadd(noteobj);
        this.renderNotes();
    }
}