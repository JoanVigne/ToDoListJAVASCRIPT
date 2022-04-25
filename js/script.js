

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newTask input').value.lenght == 0){
        alert("please enter a task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <li class="task">
                <span id="taskName">
                    ${document.querySelector('#newTask input').value}
                </span>
                        <a class="delete">
                        <img src="../images/iconDelete.png"></img>
                        </a>           
                </li>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}