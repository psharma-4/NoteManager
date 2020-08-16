export default class Note{
    constructor({title,body},notemanager){
        this.title=title;
        this.body =body;
        this.el=null;
        this.notemanager =notemanager;

    }
    getElement(){
        const tpl= this.gettemplate();
        const tempdiv=document.createElement('div');
        tempdiv.innerHTML =tpl.replace('{{title}}',this.title).replace('{{body}}',this.body);
        this.el=tempdiv.children[0];

        return this.el;

    }
    gettemplate(){
        return `
        <div class="mynote">
        <div class="headernote">
           <div class="mynote-close">
              <button>close</button>
           </div>
           <div class="mynote-title">
           {{title}}
           </div>
        </div>
        <div class="mynote-body">
        {{body}}

        </div>
    </div>
        `;
    }

}