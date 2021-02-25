 // Show or Read All Notes
 function read() {
     // Get the Button
     let addNote = document.getElementById("addNote");
     // When someone clicks on this Button do create an object
     let obj = {
         title: 'Note',
         id: 0
     }
     // Create Notes
     addNote.addEventListener("click", function () {
         // Get the Text-area
         let addTxt = document.getElementById("addTxt");
         // Creat a card
         let text = `
        <div class="card col-lg-3 col-md-4 mx-2 my-2 cards" id=${obj.id}>
            <div class="card-body">
                <i class="fas fa-edit" onclick="Edit(${obj.id})"></i>
                <h5 class="card-title">${obj.title}</h5>
                <p class="card-text">${addTxt.value}</p>
                <button class="btn btn-outline-danger" id="del${obj.id}" onclick="Delete(${obj.id})">Delete Note</button>
            </div>
        </div>
    `
         // To Display Notes in Div with ID #Note
         let note = document.querySelector("#Note");
         note.insertAdjacentHTML('beforeend', text);
         addTxt.value = "";
         // console.log(note);
         obj.id++;
         console.log(obj);
     });
 }
 read();

 // Delete Notes

 function Delete(id) {
     document.getElementById(id).remove();
     console.log(`"i am deleting"${id}`);
 }

 // Edit Notes 

 function Edit(id) {
    // let card = document.getElementById(id);
    // console.log(`"i am editing"${id}`);
    // console.log(card);
    
   }
