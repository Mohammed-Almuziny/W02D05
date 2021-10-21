let lists = [
  {
    name: "wake up",
    isComplet: true,
  },

  {
    name: "code",
    isComplet: false,
  },
];

/*      funtion     */
const editList = (i) => {
  let newList = prompt("what the name of new task?");

  if (newList.trim() == false) {
    alert("plase enter input");
  } else {
    lists.splice(i, 1, { name: newList, isComplet: false });
    renderTasks();
  }
};

const removeList = (i) => {
  lists.splice(i, 1);
  renderTasks();
};

const completList = (i) => {
  if (lists[i].isComplet) {
    lists[i].isComplet = false;
  } else {
    lists[i].isComplet = true;
  }
  renderTasks();
};
const leftList = () => {
  let counter = lists.filter((item) => {
    return item.isComplet == false;
  });
  $(".leftToComplet").html(`You have ${counter.length} todos left.`);
};

/*      funtion end     */

/*      render      */
const renderTasks = () => {
  $("ul").html(` `);

  lists.forEach((task, i) => {
    $("ul").append(`
        <li id="li" >
            <p  onclick="completList(${i})" class=${
      task.isComplet ? "completLine" : " "
    }  > ${task.name} </p> 
            <span class="edit" onclick="editList(${i})" >EDIT</span> 
            <span class="remove"  onclick="removeList(${i})">REMOVE</span> 
        <li>
        `);
  });
  leftList();
};

renderTasks();

/*      render end      */

/*      btn funtion     */
$("#addBtn").click(() => {
  let inputVal = $("#addInput").val();

  if (inputVal.trim() == false) {
    alert("plase enter input");
  } else {
    lists.push({
      name: inputVal,
      isComplet: false,
    });

    renderTasks();
  }

  $("#addInput").val("");
});

$(".clearList").click(() => {
  lists.length = 0;
  renderTasks();
});

$(".clearComplet").click(() => {
  lists = lists.filter((item) => {
    return item.isComplet == false;
  });
  renderTasks();
});
/*      btn funtion end     */
