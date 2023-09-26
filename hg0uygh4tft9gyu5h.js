function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}


function observerWard() {
	waitForElm("div.alternate-signin-container, div.google-auth-button, div.third-party-join__container").then((el) => {
		if (document.querySelector("div.alternate-signin-container")) {
			document.querySelector("div.alternate-signin-container").remove();
		}
		if (document.querySelector("div.google-auth-button")) {
			document.querySelector("div.google-auth-button").remove();
		}
		if (document.querySelector("div.third-party-join__container")) {
			document.querySelector("div.third-party-join__container").remove();
		}
		observerWard();
	});
}
document.addEventListener("load", observerWard);
