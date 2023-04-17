document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'hidden') {
        document.title = "Klaveriuzent | Software Engineer";
        document.querySelector("link[rel='icon']").href = "assets/icon/github-mark.png";
    } else {
        document.title = "Jefry Chiedi | Software Engineer";
        document.querySelector("link[rel='icon']").href = "assets/icon/github-mark-white.png";
    }
});