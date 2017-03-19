var compareTeamsButton = document.getElementById("btnCompareTeams");

compareTeamsButton.onclick = 
    function ShowCompareTeamsOptions(){
        //Adding a div element to the aside element when clicking Compare teams button
        var div = document.createElement('div');
        var divElement;
        var docFragment = document.createDocumentFragment();

        divElement = div.cloneNode(true);
        divElement.className += " test"; //this is for styling; check options.css
        divElement.innerHTML = "Choose teams:";
        docFragment.appendChild(divElement);

        var aside = document.getElementById("options-container");
        aside.appendChild(docFragment);
    }