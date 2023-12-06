function elementAltering() {
    var firstExampleParagraph = document.querySelector('p.example');

    if (firstExampleParagraph) {
        firstExampleParagraph.style.backgroundColor = 'yellow';
    }

    var exampleElements = document.querySelectorAll('.example');

    for (var i = 0; i < exampleElements.length; i++) {
        exampleElements[i].style.border = '2px solid green';
    }

    var links = document.querySelectorAll('a')

    for (var i = 0; i < links.length; i++) {
        links[i].style.border = '2px solid red';
    }

    var titles = document.querySelectorAll('.title')
    
    for (var i = 0; i < titles.length; i++) {
        titles[i].style.color = 'orange';
    }
}