:::{.banner-container}
:::{.banner #browser-info}
:::
:::

:::{#content}

:::{.submenu}
- [autotyper](pages/misc/autotyper.html)
- [ouroboros](pages/ouroboros/index.html)
- [townacarra](pages/townacarra/index.html)
- [git guide](pages/misc/git-github-how-to-guide-02.html)
- [bob jagger](pages/misc/mick-jagger.html)
- [ai-images](pages/ai-images/index.html)
:::


:::

:::{#footer}

&copy; 2025 JACKANORY101 | Last updated: <span id="last-updated"></span>

:::

<style>
#content ul {
	list-style: none;
}
.submenu {
	font-size:1.8rem;
}
</style>

<style>
    @font-face {
        font-family: 'Exo 2';
        src: url('_fonts/Exo2-VariableFont_wght.ttf') format('truetype');
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
      background-image: url('_media/blossom.jpg');
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
  width: 90%;          /* 90% of screen width */
  max-width: 600px;    /* but don’t exceed 600px */
  margin: 15% auto 0 auto; /* top margin relative to screen height */

		text-align: center;
	  font-style: italic;

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
	  background: linear-gradient(
    to top,
    rgba(0,0,0,0.6) 0%,
    rgba(0,0,0,0) 100%
  );
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.6) 0%,
    rgba(0,0,0,0.6) 80%,
    rgba(0,0,0,0) 100%
  );
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
<style>
  .banner-container {
    width: 100%;
    overflow: hidden;
    background-color: rgba(34, 34, 34, 0.3); /* slightly transparent */
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.3) 80%,
    rgba(0,0,0,0) 100%
  );
    color: #fff;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 10px 0 20px 0;
    position: fixed;
    top: 0;
    z-index: 1000;
    cursor: pointer; /* show that it's clickable */
  }

  .banner {
    display: inline-block;
    padding-left: 100%;
    animation: scroll 120s linear infinite;
    color: #C0C0C0;
    font-size:14px;
    /* Allow pause via JS */
    animation-play-state: running;
  }

  .banner.paused {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
</style>

<div class="banner-container" id="banner-container">
  <div class="banner" id="browser-info"></div>
</div>

<script>
const banner = document.getElementById('browser-info');
const container = document.getElementById('banner-container');

// Toggle pause/resume on click
container.addEventListener('click', () => {
  banner.classList.toggle('paused');
});

const info = [];

// ------------------ Banner Update Function ------------------
function updateBanner() {
  document.getElementById('browser-info').textContent = info.join('    -----❤️-----    ');
}

// ------------------ Fetch Public IP ------------------
fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    info.unshift(`Public IP: ${ip}`); // add to the front
    updateBanner();

    // ------------------ Rough IP Geolocation ------------------
    return fetch(`https://ipapi.co/${ip}/json/`);
  })
  .then(res => res.json())
  .then(geo => {
    if (geo) {
      info.splice(1, 0, `IP Location: ${geo.city || 'N/A'}, ${geo.region || 'N/A'}, ${geo.country_name || 'N/A'}`);
      updateBanner();
    }
  })
  .catch(err => {
    console.warn('IP or Geo fetch error:', err);
    info.unshift('Public IP or Geo: unavailable');
    updateBanner();
  });

// ------------------ Precise Geolocation ------------------
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude.toFixed(4);
      const lon = position.coords.longitude.toFixed(4);
      const accuracy = position.coords.accuracy.toFixed(0);
      info.splice(2, 0, `Precise Location: ${lat}, ${lon} (±${accuracy}m)`); // insert after IP & rough geo
      updateBanner();
    },
    error => {
      console.warn('Geolocation denied or unavailable:', error.message);
      info.splice(2, 0, 'Precise Location: unavailable');
      updateBanner();
    },
    { enableHighAccuracy: true, maximumAge: 30000, timeout: 5000 }
  );
} else {
  info.splice(2, 0, 'Precise Location: not supported');
  updateBanner();
}

// ------------------ Other Browser / Navigator Info ------------------
const browserInfo = [];

// Navigator properties
browserInfo.push(`User Agent: ${navigator.userAgent}`);
browserInfo.push(`App Name: ${navigator.appName}`);
browserInfo.push(`App Version: ${navigator.appVersion}`);
browserInfo.push(`Platform: ${navigator.platform}`);
browserInfo.push(`Vendor: ${navigator.vendor}`);
browserInfo.push(`Language: ${navigator.language}`);
if (navigator.languages) browserInfo.push(`Languages: ${navigator.languages.join(', ')}`);
browserInfo.push(`Cookies Enabled: ${navigator.cookieEnabled}`);
browserInfo.push(`Online: ${navigator.onLine}`);
browserInfo.push(`Do Not Track: ${navigator.doNotTrack || 'N/A'}`);
if (navigator.hardwareConcurrency) browserInfo.push(`Cores: ${navigator.hardwareConcurrency}`);
if (navigator.deviceMemory) browserInfo.push(`RAM: ${navigator.deviceMemory} GB`);
if (navigator.maxTouchPoints) browserInfo.push(`Max Touch Points: ${navigator.maxTouchPoints}`);

// Screen info
browserInfo.push(`Screen: ${screen.width}x${screen.height}`);
browserInfo.push(`Available: ${screen.availWidth}x${screen.availHeight}`);
browserInfo.push(`Color Depth: ${screen.colorDepth} bit`);
browserInfo.push(`Pixel Depth: ${screen.pixelDepth} bit`);
browserInfo.push(`Viewport: ${window.innerWidth}x${window.innerHeight}`);
browserInfo.push(`Window Outer: ${window.outerWidth}x${window.outerHeight}`);

// Timezone
if (Intl && Intl.DateTimeFormat) {
  browserInfo.push(`Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`);
}

// Connection info (if supported)
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
  if (connection.effectiveType) browserInfo.push(`Connection Type: ${connection.effectiveType}`);
  if (connection.downlink) browserInfo.push(`Downlink: ${connection.downlink} Mbps`);
  if (connection.rtt) browserInfo.push(`RTT: ${connection.rtt} ms`);
}

// Optional plugins / mime types (legacy)
if (navigator.plugins && navigator.plugins.length > 0) {
  const pluginNames = Array.from(navigator.plugins).map(p => p.name).join(', ');
  browserInfo.push(`Plugins: ${pluginNames}`);
}

// Append browser info after IP & location
info.push(...browserInfo);
updateBanner();
</script>
