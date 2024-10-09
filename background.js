chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var regex = /https?:\/\/(.*?)\.reddit.com/;
        var subdomain = details.url.match(regex)[1];
        var exceptions = ["www", "out"];

        if (!exceptions.contains(subdomain))
            return {redirectUrl: "https://www.reddit.com/r/"+subdomain+"/"};
    },
    {
        urls: [
            "*://*.reddit.com/*"
        ],
        types: ["main_frame"]
    },
    ["blocking"]
);