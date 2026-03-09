// 1 btn toggling
const tabs = document.querySelectorAll(".tab-btn")
tabs.forEach(tab => {
  // add each btn a listener
  tab.addEventListener("click", () => {
    // remove the color from all tab at a time
    tabs.forEach(btn => {
      btn.classList.remove("btn-primary")
      btn.classList.remove("btn-soft")

    });
    //add color to the only one btn
    tab.classList.add("btn-primary")
  })
});


// 3 

const labelshow = (array) => {
  const element = array.map(el => (
    `
<span class="${el == 'bug' ? 'bg-red-200 rounded-full p-1 text-red-400 mr-1 ' :
      el == 'help wanted' ? 'bg-yellow-200 rounded-full p-1 text-yellow-800 ' :
        el == 'enhancement' ? 'bg-green-100 rounded-full p-1 text-green-500 ' :
          el == 'documentation' ? 'bg-secondary-content rounded-full p-1 text-secondary ' :
            'bg-blue-300 rounded-full p-1 text-blue-800 '}">

            ${el == 'bug' ? '<i class="fa-solid fa-bug"></i> ' :
      el == 'help wanted' ? '<i class="fa-solid fa-futbol"></i>' :
        el == 'enhancement' ? '<i class="fa-regular fa-star"></i>' :
          el == 'documentation' ? '<i class="fa-regular fa-file-lines"></i>' :
            '<i class="fa-brands fa-files-pinwheel"></i>'} ${el}</span>
`



  ))
  return element.join(" ") // it will convert array to string join();
};




// // 2 card section

const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
fetch(url)
  .then((res) => res.json())
  .then((data) => displayIssue(data.data))



const displayIssue = (issues) => {
  // get container and empty it 
  const parentContainer = document.getElementById("card-container")
  parentContainer.innerHTML = ""


  issues.forEach(issue => {
    console.log(issue);
    const card = document.createElement("div")
    card.innerHTML = `
          <!-- card -->
            <div class="p-4 rounded-md shadow-xl  border border-gray-200">
              <div class="space-y-4">
                <div class="flex items-center justify-between col-span-4">
                <img src="${issue.status == 'open' ? 'assets/Open-Status.png' : 'assets/closestatus.png'} " alt="">
               <span class="${issue.priority === 'high' ? 'font-semibold bg-red-200 rounded-full p-2 text-xl text-red-400' :
        issue.priority == 'medium' ? 'bg-yellow-200 text-xl rounded-full p-2 text-yellow-800 font-semibold' : 'bg-gray-200 rounded-full p-2 text-yellow-800 text-xl font-semibold'} }">${issue.priority}</span>
                </div>
                <h2 class="font-semibold text-xl">${issue.title}</h2>
                <p class="text-neutral-500">${issue.description}</p>
               <div >
              ${labelshow(issue.labels)}  
               </div>
               <hr class="text-gray-300 ">
               <div class="text-neutral-500">
                 <p>
                # ${issue.author}
             </p>
                <p>${issue.createdAt}</p>
               </div>
              </div>
            </div>
        
        
        `


    parentContainer.appendChild(card)
  });
}





