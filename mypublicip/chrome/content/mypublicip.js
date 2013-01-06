var mypublicip = function () {
	var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	var IPRequest   = new XMLHttpRequest();
	var self        = this;
	var IPstatusBar;
	
	return {
		init : function () {
			IPstatusBar   = document.getElementById('mypublicip-status-bar');
			
/*			gBrowser.addEventListener("load", function () {
				var autoRun = prefManager.getBoolPref("extensions.mypublicip.autorun");
				if (autoRun) {
					mypublicip.run();
				}
			}, false);
*/			
			mypublicip.run();
		},
			
		run : function () {
			IPstatusBar.label="---.---.---.---";
		
			this.getIP();
		},
	
		getIP : function () {
		
			IPRequest.onload = mypublicip.updateIP;
			IPRequest.open("GET", "http://ip.csiz.net/ip.php");
			IPRequest.send(null);
		},
		
		updateIP : function () {
						
			IPstatusBar.label=IPRequest.responseText;
		}
		
	};
}();
window.addEventListener("load", mypublicip.init, false);