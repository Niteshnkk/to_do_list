

const Data = document.querySelector(".data");
const addButton = document.querySelector(".add");
const resultList = document.querySelector(".res");
const deleteitems = document.querySelector(".delete");

 


const addnote = () => {
    const list = Data.value.trim();
    // const list=data.target.value;

    if (list !== "") {

        const newlistelement = document.createElement("p");
        newlistelement.textContent = list;
        newlistelement.classList.add("msg");
      
       
        const deletelistelement = document.createElement("button");
        deletelistelement.textContent = "X";
        deletelistelement.classList.add("delete");


        deletelistelement.addEventListener("click" , ()=>{
            newlistelement.remove();
            deletelistelement.remove();
        })


        newlistelement.appendChild(deletelistelement);

        resultList.appendChild(newlistelement);


        // const result =document.createElement("p");

        //  result.textContent = resultList.appendChild(newlistelement ) +   deleteitems.appendChild(deletelistelement);
      

        Data.value = "";// clear the textarea 

     
    }
    else {
        alert("please enter a task ");
    }
};
addButton.addEventListener("click", addnote);




















// Selecting necessary elements
// const Data = document.querySelector(".data");
// const addButton = document.querySelector(".add");
// const resultList = document.querySelector(".res");

// // Function to add a new task
// const addNote = () => {
//     const task = Data.value.trim(); // Get the value of the textarea

//     if (task !== "") {
//         const newTaskElement = document.createElement("p"); // Create a new paragraph element
//         newTaskElement.textContent = task; // Set its text content to the task

//         resultList.appendChild(newTaskElement); // Append the task to the result list
//         Data.value = ""; // Clear the textarea
//     } else {
//         alert("Please enter a task."); // Notify the user if the textarea is empty
//     }
// };

// // Event listener for the add button
// addButton.addEventListener("click", addNote);
