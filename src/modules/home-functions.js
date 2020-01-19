const HomeFunctions = (function() {
  const constructHomePage = function(fitnessRoutines) {
    const app = document.getElementById("app");
    const docFragment = document.createDocumentFragment();
    const homeSection = document.createElement("section");
    const routinesDiv = document.createElement("div");
  
    homeSection.id = "home-page";
    routinesDiv.className = "routines-btns";
  
    fitnessRoutines.forEach(routine => {
      const routineButton = document.createElement("button");
      routineButton.id = routine.id;
      routineButton.textContent = routine.name;
      routineButton.className = "routine-btn";
      routinesDiv.appendChild(routineButton);
    });

    const title = "Fitness Linear Progression";
    const byline = "WIP Fitness Tracker ~ Michael J.";
    const html = `
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

  return { constructHomePage };
})();

export default HomeFunctions;