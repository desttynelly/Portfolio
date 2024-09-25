


// document.querySelector(".but").addEventListener("click", function(){
//     window.location ="Contact.html"
// })



document.querySelector("#ham").addEventListener("click", function(){
    document.querySelector("#ham").classList.add("active")
    document.querySelector("#close").classList.add("active")
    document.querySelector(".sidebar").classList.add("active")
})

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector("#ham").classList.remove("active")
    document.querySelector("#close").classList.remove("active")
    document.querySelector(".sidebar").classList.remove("active")
})





document.querySelector(".download").addEventListener("mouseover", function(){
    document.querySelector("#downicon").classList.add("active")
})

document.querySelector(".download").addEventListener("mouseout", function(){
    document.querySelector("#downicon").classList.remove("active")
})




document.querySelector(".but").addEventListener("mouseover", function(){
    document.querySelector("#arrow").classList.add("active")
})

document.querySelector(".but").addEventListener("mouseout", function(){
    document.querySelector("#arrow").classList.remove("active")
})












document.querySelector('.download').addEventListener('click', function() {
    // Get the image element
    var cvImage = document.getElementById('cv');
    
    // Create a temporary link element
    var link = document.createElement('a');
    link.href = cvImage.src; // Set the href to the image URL
    link.download = 'CV.jpg'; // Set the default file name for the download
    
    // Append the link to the body (it needs to be part of the document to work)
    document.body.appendChild(link);
    
    // Trigger a click on the link to start the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
});
