let content = document.getElementById('Content');
let search = document.getElementById('Search');
let about = document.getElementById('About');
const initial_content = content.innerHTML;
const initial_search = search.innerHTML;
const initial_about = about.innerHTML;






function Search() {
    about.style.display = "none";
    content.innerHTML = "";
    search.style.position = "absolute";
    search.style.marginBottom = "3vh";
    search.style.bottom = "0";
    search.style.transition = "bottom 2s";
    search.style.left = "50vw";
    search.style.transform = "translate(-50%, 0)";
    search.style.transition = "bottom 2s";
    search.style.transitionBehavior = "allow-discrete";



    let SVDB_image = document.createElement('img');
    SVDB_image.src = "SVDB.jpg";
    SVDB_image.style.width = "30vw";
    SVDB_image.style.marginTop = "3vh";
    content.appendChild(SVDB_image);
    content.align = "center";

    let test_image = document.createElement('img');
    test_image.src = "Fish.jpg";
    test_image2 = test_image.cloneNode(true);
    test_image.style.height = "70%";
    test_image2.style.height = "70%";

    let items = document.createElement('div');
    items.id = "Items";
    items.style.overflowY = "scroll";
    items.style.overflowX = "hidden";
    items.style.width = "85vw";
    items.style.height = "70vh";
    items.style.scrollSnapType = "y mandatory";


    //---------------------------------------
    let item1 = document.createElement('div');
    let text = document.createElement('p');
    text.innerHTML = "STUDENT: _______</br>"+
                      "CLASS: _______</br></br>" +
                      "LOCATION PROXIMITY: ____ ___</br>" +
                      "You are ___ on the correct campus!";
    text.style.fontSize = "2.5em";
    text.style.fontFamily = "Arial, sans-serif";
    text.style.fontWeight = "bold";
    item1.class = "item";
    item1.appendChild(test_image);
    item1.appendChild(text);
    item1.style.height = "100%";
    item1.style.width = "100%";
    item1.style.scrollSnapAlign = "start";
    item1.style.overflow = "hidden";

    let item2 = document.createElement('div');
    item2.class = "item";
    let text2 = document.createElement('p');
    text2.innerHTML = "STUDENT: _______</br>"+
                      "CLASS: _______</br></br>" +
                      "LOCATION PROXIMITY: ____ ___</br>" +
                      "You are ___ on the correct campus!";
    text2.style.fontSize = "2.5em";
    text2.style.fontFamily = "Arial, sans-serif";
    text2.style.fontWeight = "bold";
    item2.appendChild(test_image2);
    item2.appendChild(text2);
    item2.style.height = "100%";
    item2.style.width = "100%";
    item2.style.scrollSnapAlign = "start";
    //---------------------------------------
    items.appendChild(item1);
    items.appendChild(item2);
    content.appendChild(items);





}
