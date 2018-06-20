// Development purposes.
// alert("Initial size: " + window.innerHeight);

// Set variable used for infinite loop
var infiniloop = 0;

// Infinite loop block. Re-runs every 1 tick.
window.setInterval(function () {
	// Infinite loop continuation code
	infiniloop = (infiniloop + 1) % 4;

	// Get window size from browser
	var height = window.innerHeight - 165;
	var sbh = height + 6;

	// If the window size is more than 150px
	if (height > 150) {
		// Set the size of the sidebar and content
		document.getElementById("content").style.height = height + "px";
		document.getElementById("sidebar").style.height = sbh + "px";
	} else {
		// Otherwise, use the recommended values
		document.getElementById("content").style.height = "150px";
		document.getElementById("sidebar").style.height = "156px";
	}
}, 1);

// }, 3000);