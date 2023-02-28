var topNavList = document.querySelector('#nav-list');
var topNavToggle = document.querySelector('#nav-toggle');
var navCollapsed = true;	// by default, the nav list is in a collapsed state

// the following code opens and closes the topNav when you click on it

topNavToggle.addEventListener('click', function(){ // the nav will have an event listener and do the following:
	if(navCollapsed === true){	// if navCollapsed is strictly true, do the following:
		topNavList.classList.remove('navbar-collapsed'); // remove the ul list element (aka, topNavList)
		navCollapsed = false; // set navbarCollapsed to false, and
		topNavToggle.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'; // hide the Font Awesome x icon (fa-times)
	} else { // otherwise
		topNavList.classList.add('navbar-collapsed'); // add the ul list element, and
		navCollapsed = true; // set the navCollapsed value to the boolean value, true, and 
		topNavToggle.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>'; // hide the  Font Awesome hamburger icon (fa-bars)
	}
});