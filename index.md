:::{.banner-container}
:::{.banner #browser-info}
:::
:::

:::{#content}
- [qr codes](qr-codes.html)
- [ai images](pages/ai-images/index.html)
- [townacarra](pages/townacarra/index.html)
- [ouroboros](pages/ouroboros/index.html)
- [pano cassie](pages/pano-cassie/)
- [autotyper](pages/misc/autotyper.html)
- [git/github guide](pages/misc/git-github-how-to-guide-02.html)
- [bob jagger](pages/misc/bob-jagger.html)
- [video tv demo](pages/misc/tv-video.html)
- [misc links](pages/misc/links.html)







<!--:::{.submenu}-->
<!--- [autotyper](pages/misc/autotyper.html)-->
<!--- [git guide](pages/misc/git-github-how-to-guide-02.html)-->
<!--- [bob jagger](pages/misc/bob-jagger.html)-->
<!--:::-->

:::

:::{#footer}

&copy; 2025 JACKANORY101 | Last updated: <span id="last-updated"></span>

:::

<div class="banner-container" id="banner-container">
  <div class="banner" id="browser-info"></div>
</div>

<style>
/* ------------------ Font ------------------ */
@font-face {
    font-family: 'Exo 2';
    src: url('/_fonts/Exo2-VariableFont_wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

/* ------------------ Global Styles ------------------ */
html, body {
    height: 100%;
    margin: 0;
    font-family: 'Exo 2';
}

/* ------------------ Body Background ------------------ */
body {
    background-image: url('/_media/blossom.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
    max-width: 100%;
}

/* Dark overlay */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
}

/* ------------------ Content ------------------ */
#content {
    position: relative;
    z-index: 1;
    font-size: 2.5rem;
    color: white;
    width: 90%;
    max-width: 600px;
    margin: 15% auto 0 auto;
    text-align: center;
    font-style: italic;
	padding-bottom:100px;
}

/* Lists and submenu */
#content ul {
    list-style: none;
}

.submenu {
    font-size: 1.8rem;
}

/* ------------------ Footer ------------------ */
#footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    color: white;
    text-align: right;
    padding: 15px;
    font-size: 0.9em;
    z-index: 2;
    background: linear-gradient(
        to top,
        rgba(0,0,0,0.6) 0%,
        rgba(0,0,0,0.6) 80%,
        rgba(0,0,0,0) 100%
    );
}

#footer p {
    margin-right: 100px;
}

/* ------------------ Banner ------------------ */
.banner-container {
    width: 100%;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 10px 0 20px 0;
    position: fixed;
    top: 0;
    z-index: 1000;
    cursor: pointer;
    background: linear-gradient(
        to bottom,
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.3) 80%,
        rgba(0,0,0,0) 100%
    );
}

.banner {
    display: inline-block;
    padding-left: 100%;
    animation: scroll 120s linear infinite;
    color: #C0C0C0;
    font-size: 14px;
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


<script>
  // Get the last modified date of the current document
  const lastModified = new Date(document.lastModified);
  document.getElementById('last-updated').textContent =
    lastModified.toLocaleDateString();
</script>

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


