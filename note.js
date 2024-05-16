// Selectors

let addNote = document.getElementById("addNote");
let addTxt = document.getElementById("addTxt");
let note = document.querySelector("#Note");

// Show or Read All Notes
function create() {
    // When someone clicks on this Button do create an object
    let obj = {
        title: "Note",
        id: 1 
    }
    // Create Notes
    addNote.addEventListener("click", function () {

       
        // Get the Text-area value 
        let InputValue = addTxt.value;

        if (InputValue === '') {
            alert("Please write something");
        } else {

            let text = `    
            <div class="card col-lg-3 col-md-4 mx-2 my-2 cards" id=${obj.id}>
                <div class="card-body">
                <button type="button" class="btn btn-outline-warning d-none float-end"><i class="fas fa-edit" onclick="Update(${obj.id})"></i></button>
                    <h5 class="card-title">${obj.title}</h5>
                    <p class="card-text">${InputValue}</p>
                    <button class="btn btn-outline-danger" id="del${obj.id}" onclick="Delete(${obj.id})">Delete Note</button>
                </div>
            </div>
        `
            // To Display Notes in Div with ID #Note
            note.insertAdjacentHTML('beforeend', text);

            obj.id++;
            // console.log(obj);
        }

    
        // Creat a card
        addTxt.value = "";
        // console.log(note);
    save(); 
      
    });
}
create();

// Delete Notes

function Delete(id) {
    document.getElementById(id).remove();
    save(); 
    //  console.log(`"i am deleting"${id}`);
}

// Edit Notes 

/*
function Update(id) {
    let card = document.getElementById(id);
    console.log(card);
    console.log(`"i am editing"${id}`);
    if (card.className = "card-text") {
       let edit = card.tagName("P").value; 
    }
}

*/

// Locale Storage

function save() {
    localStorage.setItem("data", note.innerHTML); 
}

function showData() {
    note.innerHTML = localStorage.getItem("data"); 
}

showData(); 

