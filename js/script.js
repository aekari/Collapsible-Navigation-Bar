var topNavList = document.querySelector('#nav-list');
var topNavToggle = document.querySelector('#nav-toggle');
var navCollapsed = true;

topNavToggle.addEventListener('click', function(){
	if(navCollapsed === true){
		topNavList.classList.remove('navbar-collapsed');
		navCollapsed = false;
		topNavToggle.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
	} else {
		topNavList.classList.add('navbar-collapsed');
		navCollapsed = true;
		topNavToggle.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
	}
});