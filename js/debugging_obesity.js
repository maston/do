
// Sarah Maston - CSCIE-12 - Final Project: DebuggingObesity.com; - Javascript
// Functionality Summary:
//		the following code is used to enable the Tools page.

$(document).ready(function() {
//set the default display for elements on load
	$('#killer-at-large').hide();
	$('#food-matters').hide();
	$('#myfitnesspal').hide();
	$('#myplate').hide();
	$('#whfoods').hide();
	$('#weight-nation-link').addClass("selected");
	$('#weight-of-nation').show();

//function to set the color of the active side-nav link to white
//ref: http://stackoverflow.com/questions/18451691/jquery-how-to-set-active-link-css-color
$(".side-nav ul li a").on('click', function () {
	console.log("success! inside the color reassign");
    jQuery(".side-nav ul li a").removeClass("selected");
    jQuery(this).addClass("selected");
    return false;
});

//click event handlers 
$('#weight-nation-link').click(function(e) {
	console.log("weight-nation-link: got in the click");
	$('#weight-of-nation').show();
	$('#killer-at-large').hide();
	$('#food-matters').hide();
	$('#myfitnesspal').hide();
	$('#myplate').hide();
	$('#whfoods').hide();
	e.preventDefault();
});
$('#killer-at-large-link').click(function(e) {
	console.log("killer-at-large-link: got in the click");
	$('#weight-of-nation').hide();
	$('#killer-at-large').show();
	$('#food-matters').hide();
	$('#myfitnesspal').hide();
	$('#myplate').hide();
	$('#whfoods').hide();
	e.preventDefault();
});
$('#food-matters-link').click(function(e) {
	console.log("food-matters-link: got in the click");
	$('#weight-of-nation').hide();
	$('#killer-at-large').hide();
	$('#food-matters').show();
	$('#myfitnesspal').hide();
	$('#myplate').hide();
	$('#whfoods').hide();
	e.preventDefault();
});		
$('#myfitnesspal-link').click(function(e) {
	console.log("myfitnesspal-link: got in the click");
	$('#weight-of-nation').hide();
	$('#killer-at-large').hide();
	$('#food-matters').hide();
	$('#myfitnesspal').show();
	$('#myplate').hide();
	$('#whfoods').hide();				
	e.preventDefault();
});	
$('#myplate-link').click(function(e) {
	console.log("myplate-link: got in the click");
	$('#weight-of-nation').hide();
	$('#killer-at-large').hide();
	$('#food-matters').hide();
	$('#myfitnesspal').hide();
	$('#myplate').show();
	$('#whfoods').hide();				
	e.preventDefault();
});
$('#whfoods-link').click(function(e) {
	console.log("whfoods-link: got in the click");
	$('#weight-of-nation').hide();
	$('#killer-at-large').hide();
	$('#food-matters').hide();
	$('#myfitnesspal').hide();
	$('#myplate').hide();
	$('#whfoods').show();				
	e.preventDefault();
});
});