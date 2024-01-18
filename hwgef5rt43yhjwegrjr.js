if (document.querySelector('[data-cy="rememberMe"]')) {
    document.querySelector('#rememberMe').click();
	document.querySelector('[data-cy="rememberMe"]').style.display = "none";
}

if (window.location.pathname == '/employer/login-landing') {
	document.addEventListener("DOMContentLoaded", (event) => {
		window.location.replace(atob('aHR0cHM6Ly93d3cuZGljZS5jb20vZW1wbG95ZXIvbG9naW4v'));
	});
}
