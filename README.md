## Dialog Tutorial

The ```dialog``` HTML element is used to display ```dialog``` fields or other interactive components, such as an message that can be dismissed. Dialogs are displayed by the HTML element ```dialog```, which signifies that they are interactive and can be interacted with. When the ```dialog``` is not open, it shouldn't be shown to the user. Is recommended to use JavaScript to open the model by using ```.show()``` or ```.showModal()``` and to close it you will use ```.close()```.

### HTML

```
<!DOCTYPE html>

<html>

<head>
    <meta charset="UTF-8">
    <script src="index.js" defer></script>
    <title>Dialog Test</title>
</head>

<body>

    <dialog id="dialogID">
        <input type="button" value="Close dialog" id="button">
    </dialog>

</body>

</html>
```


### JS

```
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
```

### References

[Mdn Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)

[w3schools](https://www.w3schools.com/tags/tag_dialog.asp)