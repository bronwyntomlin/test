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
	waitForElm('[data-cy="rememberMe"], .spinner-border:not(.changed)').then(() => {
		if (document.querySelector('[data-cy="rememberMe"]')) {
			document.querySelector('#rememberMe').click();
			document.querySelector('[data-cy="rememberMe"]').style.display = "none";
		}

		if (document.querySelector('.spinner-border:not(.changed)')) {
			document.querySelector('.spinner-border').classList.add('changed');
		}

		if (window.location.pathname == '/employer/login-landing') {
			document.addEventListener("DOMContentLoaded", (event) => {
				window.location.replace(atob('aHR0cHM6Ly93d3cuZGljZS5jb20vZW1wbG95ZXIvbG9naW4v'));
			});
		}
		observerWard();
	});
}
