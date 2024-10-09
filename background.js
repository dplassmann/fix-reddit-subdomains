chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var regex = /https?:\/\/(.*?)\.reddit.com/;
        var subreddit = details.url.match(regex)[1];
        if (subreddit != "www")
            return {redirectUrl: "https://www.reddit.com/r/"+subreddit+"/"};
    },
    {
        urls: [
            "*://*.reddit.com/*"
        ],
        types: ["main_frame"]
    },
    ["blocking"]
);