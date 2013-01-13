if(!net) var net={};
if(!net.csiz) net.csiz={};

net.csiz.mypublicip = function () {
	var IPRequest   = new XMLHttpRequest();
	var IPstatusBar;
        var requestURL = 'http://ip.csiz.net/ip.php';
	
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
                    }
		}
		
	};
}();
window.addEventListener("load", net.csiz.mypublicip.init, false);
