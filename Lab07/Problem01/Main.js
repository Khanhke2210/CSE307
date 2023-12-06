function replaceHref(newHref) {
    var links = document.querySelectorAll('.linkhub');

    links.forEach(function (link) {
        link.href = newHref;
    });
}

var newHrefValue = 'https://google.com';
replaceHref(newHrefValue);