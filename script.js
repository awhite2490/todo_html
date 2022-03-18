var itemID = 0;

function add_item() {
    var item = document.getElementById("inputBox").value;
    document.getElementById("items").innerHTML +=
    "<li><input type=\"checkbox\" id=\"" + itemID + "\" onclick=\"changeLabel(this)\">" 
    + "<label id=\"l" + itemID + "\" for=\""+ itemID + "\">" + item + "</label>" +
    "<input type=\"date\"></li>";
    document.getElementById("inputBox").value = "";
    itemID += 1;
}

function changeLabel(chkBox) {
    var label = document.getElementById("l" + chkBox.id);
    label.classList.add("completed");
}