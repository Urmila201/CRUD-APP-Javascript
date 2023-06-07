var selectedRow = null;

//show alert


function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  
  const container = document.querySelector(".container");
  const textContainer = document.querySelector(".text-container");
  container.insertBefore(div, textContainer.nextSibling);

  setTimeout(() => div.remove(), 3000);
}
// clear all the filed

function clearFields(){
    document.querySelector("#firstName").value="";
    document.querySelector("#lastName").value="";
    document.querySelector("#rollNo").value="";
}

//Add Data
document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    //get form values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNo = document.querySelector("#rollNo").value;

    //validate
    if(firstName == "" || lastName == "" || rollNo == ""){
        showAlert("Please fill in all fields", "danger");
    }
    else {
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${rollNo}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `;

            list.appendChild(row);
            showAlert("Student added successfully", "success");
        }
        else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = rollNo;
            selectedRow = null;
            showAlert("student info Edited","info")

        }
        clearFields();
    }
});

//Edit Data

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastName").value = selectedRow.children[1].textContent;
        document.querySelector("#rollno").value = selectedRow.children[2].textContent;


    }
})


//Delete Data

document.querySelector("#student-list").addEventListener("click",(e)=>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("student data deleted","danger")
    }
})