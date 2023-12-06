function changeBackgroundColor() {
    var paragraph = document.querySelector('.example');
    var link = document.querySelector('a')
    paragraph.style.backgroundColor = 'yellow';
    paragraph.style.fontSize = '18px';
    link.style.border = '2px solid red'
}

function modifyFirstParagraph() {
    var firstParagraphInDiv = document.querySelector('div > p');

    if (firstParagraphInDiv) {
        firstParagraphInDiv.style.fontSize = '20px';
        firstParagraphInDiv.style.color = 'blue';
    }
}