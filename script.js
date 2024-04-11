 let lists = document.querySelectorAll(".list");
 let rightBox = document.getElementById("right");
 let leftBox = document.getElementById("left");

for(let list of lists) {
     list.addEventListener("dragstart",function(e) {
         let selected = e.target;
         e.dataTransfer.setData("text/plain", null);

         rightBox.addEventListener("dragover", function(e) {
             e.preventDefault();
       }); 
             rightBox.addEventListener("drop", function(e) {
                e.preventDefault();
                rightBox.appendChild(selected);
                selected = null;
             });

            leftBox.addEventListener("dragover", function(e) {
                e.preventDefault();
             });

             leftBox.addEventListener("drop", function(e) {
                leftBox.appendChild(selected);
                e.preventDefault();
                selected = null;
             });
 
 })
}




// let lists = document.querySelectorAll(".list");
// let rightBox = document.getElementById("right");
// let leftBox = document.getElementById("left");

// for (let list of lists) {
//     list.addEventListener("dragstart", function(e) {
//         let selected = e.target;
//         e.dataTransfer.setData("text/plain", null);

//         rightBox.addEventListener("dragover", function(e) {
//             e.preventDefault();
//         });

//         rightBox.addEventListener("drop", function(e) {
//             e.preventDefault();
//             rightBox.appendChild(selected);
//             selected = null;
//         });

//         leftBox.addEventListener("dragover", function(e) {
//             e.preventDefault();
//         });

//         leftBox.addEventListener("drop", function(e) {
//             e.preventDefault();
//             leftBox.appendChild(selected);
//             selected = null;
//         });
//     });
// }