// add project
function saveProjects(projectsList) {
    localStorage.clear();
    let myJson = JSON.stringify(projectsList);
    localStorage.setItem("projects", myJson);
}

function getProjects() {
    return JSON.parse(localStorage.getItem("projects"));
}

export {saveProjects, getProjects}
