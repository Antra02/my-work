function clog() {
	console.log.apply(console, arguments);
}

clog("Hi, I am antra",".","Bye"); // auto space between args
clog("Hi, I am antra"+"."+"Bye"); // no space