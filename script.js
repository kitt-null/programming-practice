const card = document.getElementById('taskcard')
const taskbox = document.getElementById('taskBox')
const NumScore = document.getElementById('NumScore')

var defScore = 0

for (let i = 0; i < tasks.length; i++){
    const list = list[i];
        taskbox.innerHTML +=`
        <div class="taskcard" id="card${list.id}">
        <h3><input type="checkbox" id="card${list.id}" disabled>${list.title} - ${list.total} Points</h3>
        <div id="${list.id}"></div>
        </div>
        `
    

}