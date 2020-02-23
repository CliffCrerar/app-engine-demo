/**
 * Display digital clock
 */
// @ts-nocheck

const
	eventType = 'DOMContentLoaded', // event type
	timeFormat = 'hh:mm:ss', // time format 
	displayEl = document.getElementById('clock-display'), // get element
	$ = document, // set doc to $
	time = () => moment().format(timeFormat), // get the time function
	setTime = () => displayEl.innerHTML = time(); // set the time function

setTime(); // run set time
$.addEventListener(eventType, () => setInterval(setTime, 1000)); // run interval for running time


