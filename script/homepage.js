// 1 btn toggling
  const tabs= document.querySelectorAll(".tab-btn")
    tabs.forEach(tab => {
        // add each btn a listener
        tab.addEventListener("click",()=>{
            // remove the color from all tab at a time
            tabs.forEach(btn =>{
                btn.classList.remove("btn-primary")
                btn.classList.remove("btn-soft")

            } );
            //add color to the only one btn
            tab.classList.add("btn-primary")
        })
    });


// 2 card section









