const api = "http://localhost:3001/items/";

function add_item() {
    let text = document.getElementById("inputBox").value;
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: `{"text":"${text}", "isComplete":"false"}`
    });
}

function remove_item(id) {
    fetch(api + id, {
        method: 'DELETE'        
    });
    window.location.reload();
}

function changeLabel(chkBox) {
    var label = document.getElementById("l" + chkBox.id);
    label.classList.add("completed");
}

function fetchItems() {
    fetch(api)
    .then(response => response.json())
    .then(
        (result) => {
            loadItems(result);
        },
        (error) => {
            console.log(error);
        }
    )
}

function loadItems(json) {
    for (var item in json) {
        let li = createItem(json[item]);
        document.getElementById("items").appendChild(li);
    }
}

function createItem(json) {
    let id = json["_id"];
    let text = json["text"];
    let isComplete = json["isComplete"];

    let li = document.createElement("li");

    li.appendChild(createLabel(id, text));
    li.appendChild(createCheckbox(id, isComplete));
    li.appendChild(createRemoveButton(id));

    return li;
}

function createLabel(id, text) {
    let label = document.createElement("label");
    label.id = "l" + id;
    label.for = id;
    label.appendChild(document.createTextNode(text));
    return label;
}

function createCheckbox(id, isComplete) {
    let chkBox = document.createElement("input");
    chkBox.type = "checkbox";
    chkBox.id = id;
    chkBox.checked = isComplete;
    return chkBox;
}

function createRemoveButton(id) {
    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Remove"));
    btn.addEventListener('click', function () {
        remove_item(id);
    });
    return btn;
}