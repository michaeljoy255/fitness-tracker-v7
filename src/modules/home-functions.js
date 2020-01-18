const HomeFunctions = (function() {
  const constructHomePage = function(routinesArr) {
    let app = document.getElementById("app");
    let docFragment = document.createDocumentFragment();
    let homeSection = document.createElement("section");
    let routinesDiv = document.createElement("div");
  
    homeSection.id = "home-page";
    routinesDiv.className = "routines-btns";
  
    routinesArr.forEach(routine => {
      let routineButton = document.createElement("button");
      routineButton.id = routine.id;
      routineButton.textContent = routine.name;
      routineButton.className = "routine-btn";
      routinesDiv.appendChild(routineButton);
    });

    let title = "Fitness Linear Progression";
    let byline = "WIP Fitness Tracker ~ Michael J.";
    let html = `
        <h1 class="app-title">${title}</h1>
        <div class="routine-btns">
          ${routinesDiv.innerHTML}
        </div>
        <p class="byline">${byline}</p>
    `;
  
    homeSection.innerHTML = html;
    docFragment.appendChild(homeSection);
    app.appendChild(docFragment);
  }

  return {
    constructHomePage
  }
})();

export default HomeFunctions;