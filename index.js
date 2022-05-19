//To get the dialog tag
var dialogID = document.getElementById("dialogID");
//To get the input tag
var button = document.getElementById("button");
//To show dialog
dialogID.show();
//To close dialog
button.addEventListener('click', function() {
    dialogID.close();
})