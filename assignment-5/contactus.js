document.addEventListener("DOMContentLoaded",()=>{
    const form = document.getElementById("containerform");
    const nametxt = document.getElementById("name");
    const emailtxt = document.getElementById("email");
    const messagetxt = document.getElementById("message");

    const nameerror = document.getElementById("nameError");
    const emailerror = document.getElementById("emailError");
    const messageerror = document.getElementById("messageError");

    const storedatadiv = document.getElementById("storeData")

    //to display store data
    function displayStoredata()
    {
        storedatadiv.innerHTML = "";
        let data = JSON.parse(localStorage.getItem("contactData")) || [];

        if(data.length == 0)
        {
            storedatadiv.innerHTML = "<p>No Data Found.</p>";
            return;
        }
        data.forEach((item,index) => 
        {
            const div = document.createElement("div");
            div.classList.add("data-item");
            div.innerHTML = `<strong>${item.name}</strong> (${item.email})<br>${item.message}`;
            storedatadiv.appendChild(div);
        });
    }
    // display data on page load
    displayStoredata();

    //validations
    form.addEventListener("submit", (e)=>
    {
        e.preventDefault();

        //set errors
        nameerror.textContent = "";
        emailerror.textContent = "";
        messageerror.textContent = "";

        let isValid = true;

        if (nametxt.value.trim() === "")
        {
            nameerror.textContent = "Name is required.";
            isValid = false;
        }

        const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailpattern.test(emailtxt.value.trim()))
        {
            emailerror.textContent = "Please enter a valid email.";
            isValid = false;
        }

        if(messagetxt.value.trim().length < 10)
        {
            messageerror.textContent = "Message must be at least 10 character.";
            isValid = false;
        }

        if(!isValid) return;

        // store data in local storage
        let storeData = JSON.parse(localStorage.getItem("contactData")) || [];
        storeData.push
        ({
            name:nametxt.value.trim(),
            email:emailtxt.value.trim(),
            message:messagetxt.value.trim()
        });
    
        localStorage.setItem("contactData",JSON.stringify(storeData));

        //clear form
        form.reset();

        displayStoredata();

    });

});