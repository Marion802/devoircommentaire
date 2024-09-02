let form = document.querySelector("form");
form.addEventListener ("submit",(event)=>{
   event.preventDefault();

let prenom = document.getElementById("first-name").value
let nom = document.getElementById("last-name").value
let commentaire = document.getElementById ("message").value

if (prenom =="" || nom =="" || commentaire ==""){
    let errorMessage = document.querySelector("#error-message");
    errorMessage.style.display ="block";
}else{

   let contenuTitre = prenom + " " + nom;
   let contenuPara = commentaire;

   let newDiv = document.createElement("div");
   newDiv.className = "flex space-x-4 text-sm text-gray-500", "flex-1 py-10 ", "flex-1 py-10 border-t border-gray-200";
   let newTitle = document.createElement("h1");
   newTitle.className = "font-medium text-gray-900";
   let newP = document.createElement("p");
   newP.className = "prose prose-sm mt-4 max-w-none text-gray-500";

   newTitle.textContent = contenuTitre;
   newP.textContent = contenuPara;

   newDiv.appendChild(newTitle);
   newDiv.appendChild(newP);

   let divComment = document.getElementById("comment-list");
   divComment.appendChild(newDiv);
    
   document.querySelector("form").reset();
}


})


