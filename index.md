:::{.banner-container}
:::{.banner #browser-info}
:::
:::

:::{#content}

[misc](https://jackanory101.github.io/misc/)

[ai-images](https://jackanory101.github.io/ai-images/)

:::

:::{#footer}

&copy; 2025 JACKANORY101 | Last updated: <span id="last-updated"></span>

:::

<style>
    @font-face {
        font-family: 'Exo 2';
        src: url('fonts/Exo2-VariableFont_wght.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    /* Make html and body take up full height and remove default margin */
    html, body {
      height: 100%;
      margin: 0;
    }

    /* Background image container */
    body {
      /* Replace the URL with your image */
      background-image: url('blossom.jpg');
      background-size: cover;      /* Cover the whole window */
      background-position: center; /* Center the image */
      background-repeat: no-repeat;
      background-attachment: fixed; /* Keep static on scroll */
      position: relative;
	  max-width:100%;
	  font-family: 'Exo 2';
    }

    /* Dark overlay */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent black overlay */
      z-index: 0;
    }

    /* Content above overlay */
    #content {
      position: relative;
      z-index: 1;
	  font-size: 3rem;
      color: white;
		width: 600px;
		margin: 100px auto 0 auto; /* top/bottom 0, left/right auto */
		text-align: center;

    }
	#footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
	  font-family: 'Exo 2';
      color: white;
      text-align: center;
      padding: 15px;
      background-color: rgba(0,0,0,0.6);
      font-size: 0.9em;
      z-index: 2;
	  text-align: right;
    }
	#footer p {
		margin-right:100px;
	}
  </style>
<script>
  // Set last updated date to 8 days ago
  const lastUpdated = new Date();
  lastUpdated.setDate(lastUpdated.getDate() - 8); // subtract 8 days
  document.getElementById('last-updated').textContent =
    lastUpdated.toLocaleDateString();
</script>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Browser Info Banner</title>
<style>
    @font-face {
        font-family: 'Orbitron';
        src: url('fonts/Orbitron-VariableFont_wght.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

  .banner-container {
    width: 100%;
    overflow: hidden;
    background-color: #222;
    color: #fff;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 10px 0;
    position: fixed;
    top: 0;
    z-index: 1000;
  }

  .banner {
    display: inline-block;
    padding-left: 100%;
    animation: scroll 60s linear infinite;
	  /*font-family: 'Orbitron';*/
	  /*color: #00FF40;*/
	  font-size:14px;
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
</style>
<script>
const info = [];

// Navigator properties
info.push(`👨‍💻 User Agent: ${navigator.userAgent}`);
info.push(`App Name: ${navigator.appName}`);
info.push(`App Version: ${navigator.appVersion}`);
info.push(`Platform: ${navigator.platform}`);
info.push(`Vendor: ${navigator.vendor}`);
info.push(`Language: ${navigator.language}`);
if (navigator.languages) info.push(`Languages: ${navigator.languages.join(', ')}`);
info.push(`Cookies Enabled: ${navigator.cookieEnabled}`);
info.push(`Online: ${navigator.onLine}`);
info.push(`Do Not Track: ${navigator.doNotTrack || 'N/A'}`);
if (navigator.hardwareConcurrency) info.push(`Cores: ${navigator.hardwareConcurrency}`);
if (navigator.deviceMemory) info.push(`RAM: ${navigator.deviceMemory} GB`);
if (navigator.maxTouchPoints) info.push(`Max Touch Points: ${navigator.maxTouchPoints}`);

// Screen info
info.push(`Screen: ${screen.width}x${screen.height}`);
info.push(`Available: ${screen.availWidth}x${screen.availHeight}`);
info.push(`Color Depth: ${screen.colorDepth} bit`);
info.push(`Pixel Depth: ${screen.pixelDepth} bit`);
info.push(`Viewport: ${window.innerWidth}x${window.innerHeight}`);
info.push(`Window Outer: ${window.outerWidth}x${window.outerHeight}`);

// Timezone
if (Intl && Intl.DateTimeFormat) {
  info.push(`Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`);
}

// Connection info (if supported)
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
  if (connection.effectiveType) info.push(`Connection Type: ${connection.effectiveType}`);
  if (connection.downlink) info.push(`Downlink: ${connection.downlink} Mbps`);
  if (connection.rtt) info.push(`RTT: ${connection.rtt} ms`);
}

// Optional plugins / mime types (legacy)
if (navigator.plugins && navigator.plugins.length > 0) {
  const pluginNames = Array.from(navigator.plugins).map(p => p.name).join(', ');
  info.push(`Plugins: ${pluginNames}`);
}

// Build banner text with separator
document.getElementById('browser-info').textContent = info.join(' ------------- ');
</script>

