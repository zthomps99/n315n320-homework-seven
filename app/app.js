var LISTS = [
    {
        name: "Groceries",
        listItems: [
        {
            name: "milk",
            checked: false,
            category: "dairy",
        },
        {
            name: "cheese",
            checked: false,
            category: "dairy",
        },
        {
            name: "oranges",
            checked: false,
            category: "fruits",
        },
        ],
    },
    {
        name: "Camping",
        listItems: [
        {
            name: "tent",
            checked: false,
            category: "sporting goods",
        },
        {
            name: "chairs",
            checked: false,
            category: "sporting goods",
        },
        {
            name: "bug spray",
            checked: false,
            category: "outdoors",
        },
        ],
    },
];

function itemChecked(el, listIndex, itemIndex){
    $(el).parent().toggleClass("strike");
    let checkedValue = !LISTS[listIndex].listItems[itemIndex].checked;
    LISTS[listIndex].listItems[itemIndex].checked = checkedValue;
}

function addItem(listIndex){
    let newItemName = $("#addItem").val();
    let newItemObj = {
        name: newItemName,
        checked: false,
        category: "",
    };
    LISTS[listIndex].listItems.push(newItemObj);
    loadListItems(listIndex);
}

function deleteItem(listIndex, idx){
    LISTS[listIndex].listItems.splice(idx,1);
    loadListItems(listIndex);
}

function loadListItems(listIndex){
    let listString = `<div class="button-holder"><button class="button backButton" id="backButton" onclick="loadLists()">Back</button></div><ul>`;
    $.each(LISTS[listIndex].listItems, function(idx, listItem){
        listString += `<li id="${idx}" class="${listItem.checked ? "strike": ""
    }"><input ${listItem.checked ? (checked = "checked") : ""
    } type="checkbox" id="${idx}" name="list checkbox" onclick="itemChecked(this, ${listIndex}, ${idx})"><span>${listItem.name}</span>
    <span class="delete" onclick="deleteItem(${listIndex}, ${idx})">Delete</span>
    </li>`;
    });
    listString += `</ul><div class="addItemInput"><input id="addItem" type="text"><button onclick="addItem(${listIndex})">Add Item</button></div>`;
    $("#app").html(listString);
}

function loadLists(){
    let listString = "<ul>";
    $.each(LISTS, function(idx, list){
        listString += `<li id="${idx}" onclick="loadListItems(${idx})">${list.name} 
        <span class="right">Items: ${list.listItems.length}</span></li>`;
    });
    listString += "</ul>";
    $("#app").html(listString);
}

function initListeners() {}

$(document).ready(function () {
    initListeners();
});