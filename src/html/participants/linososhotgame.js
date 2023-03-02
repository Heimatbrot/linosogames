/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  const nameList = localStorage.getItem("nameList")
      ? JSON.parse(localStorage.getItem("nameList"))
      : [];
    const nameInput = document.getElementById("name-input");
    const addButton = document.getElementById("add-button");
    const nameListElement = document.getElementById("name-list");
    const rollButton = document.getElementById("roll-button");
    const resultElement = document.getElementById("result");
    
    const renderNameList = () => {
      nameListElement.innerHTML = "";
      nameList.forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        nameListElement.appendChild(li);
      });
    };
    
    addButton.addEventListener("click", () => {
      const name = nameInput.value;
      if (name) {
        nameList.push(name);
        renderNameList();
        nameInput.value = "";
        localStorage.setItem("nameList", JSON.stringify(nameList));
      }
    });
    
    rollButton.addEventListener("click", () => {
      if (nameList.length > 0) {
        const randomIndex = Math.floor(Math.random() * nameList.length);
        const randomName = nameList[randomIndex];
        resultElement.textContent = `${randomName} take a shot!`;
      } else {
        resultElement.textContent = "Nimm selbst einen Shot, du kannst ja nicht einmal Namen eingeben!";
      }
    });
    
    nameListElement.addEventListener("click", (event) => {
      const li = event.target;
      const name = li.textContent;
      const index = nameList.indexOf(name);
      if (index >= 0) {
        nameList.splice(index, 1);
        renderNameList();
        localStorage.setItem("nameList", JSON.stringify(nameList));
      }
    });
    
    renderNameList();