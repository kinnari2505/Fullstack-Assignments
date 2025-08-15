document.addEventListener("DOMContentLoaded", () => 
  {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addBtn = document.querySelector("button");

    addBtn.addEventListener("click", () => 
    {
      const text = taskInput.value.trim();
      if (!text) return;

      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = text;

      const doneBtn = document.createElement("button");
      doneBtn.textContent = "Done";
      doneBtn.addEventListener("click", () => li.classList.toggle("done"));

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => li.remove());

      li.append(span, doneBtn, removeBtn);
      taskList.appendChild(li);
      taskInput.value = "";
    
    });
  });