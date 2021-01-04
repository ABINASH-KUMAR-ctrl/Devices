//USB
        const connect = document.getElementById("usb-button");
        let device;
           connect.onclick = async () => {
              device = await navigator.usb.requestDevice({
                 filters: [{ vendorId: 0x03F0 }]
        });
        };

// Content
        const content = document.getElementById("clip-button");
        content.onclick = async () => {
          navigator.clipboard.readText().then(clipText =>
            document.getElementById("clip-output").innerText = clipText);
        }

//Platform
        function os() {
         var x = navigator.platform;
           document.getElementById("os-output").innerHTML = x;
        }

//location
        var x = document.getElementById("location-output");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
// Latitude: // Longitude: 
        function showPosition(position) {
          x.innerHTML = "Latitude: " + position.coords.latitude + 
            "<br>Longitude: " + position.coords.longitude;
        }
//CPU core
        function core(){
           var logicalProcessorCount = navigator.hardwareConcurrency;
             document.getElementById("core-output").innerHTML = logicalProcessorCount;
        }