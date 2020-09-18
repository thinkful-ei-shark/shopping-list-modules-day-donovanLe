import item from './item.js';

let items = [];
function toggleCheckedFilter(){
    this.hideCheckedItems = !this.hideCheckedItems;
}
function findById(id){
   return this.items.find(x => x.id === id);
}
function addItem(name){
    try{
        item.validateName(name);
        this.items.push(item.create(name));
    }catch(e){
        console.log(`Unable to do addItem`);
    }
}
function findAndToggleChecked(id){
    this.findById(id).checked = true;
}

function findAndUpdateName(id, newName){
    try{
        item.validateName(newName);
        this.findById(id).name = newName;
    }catch(e){
        console.log(`Cannot update name: ${e.message}`);
    }
}
function findAndDelete(id){
    let itemToDelete = this.findById(id);
    for(let i = 0; i < this.items.length;i++){
        let currentObj = this.items[i];
        if(itemToDelete === currentObj){
            this.items.splice(i, 1);
        }
    }
}

export default {
    items,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
}