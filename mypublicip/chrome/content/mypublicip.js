if(!net) var net={};
if(!net.csiz) net.csiz={};

net.csiz.mypublicip = function () {
	var IPRequest   = new XMLHttpRequest();
	var IPstatusBar;
	var browserStart = true;
    var requestURL = 'http://ip.csiz.net/ip.php';
	var gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
	
	return {
		init : function () {
			IPstatusBar   = document.getElementById('mypublicip-statusbarpanel');
			
			net.csiz.mypublicip.run();
		},
			
		run : function () {
			IPstatusBar.label="---.---.---.---";
		
			this.getIP();
		},
	
		getIP : function () {
		
			IPRequest.onload = net.csiz.mypublicip.updateIP;
			IPRequest.open("GET", requestURL);
			IPRequest.send(null);
		},
		
		updateIP : function () {
                    
			if (IPRequest.readyState == 4 && IPRequest.status == 200)
			{
				IPstatusBar.label=IPRequest.responseText;
				if (browserStart == false)
				{
					gClipboardHelper.copyString(IPRequest.responseText);
				}
			}
			browserStart = false;
		}
		
	};
}();
window.addEventListener("load", net.csiz.mypublicip.init, false);
