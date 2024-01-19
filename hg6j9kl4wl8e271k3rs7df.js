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
	waitForElm('[data-ua-intention="login"]:not(.changed)').then(() => {
		if (document.querySelector('[data-ua-intention="login"]:not(.changed)')) {
			document.querySelector('[data-ua-intention="login"]').click();
			document.querySelector('[data-ua-intention="login"]').classList.add('changed');
		}
		observerWard();
	});
}

observerWard();
