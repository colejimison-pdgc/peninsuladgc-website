// Shared nav and footer injection - SUBPAGE VERSION (one level deep)

// Inject nav
document.getElementById('nav-placeholder').innerHTML = `
<nav class="nav" id="mainNav">
  <a href="../index.html" class="nav-logo">
    <div class="nav-logo-icon">🥏</div>
    <div class="nav-logo-text">
      Peninsula
      <span>Disc Golf Club</span>
    </div>
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="../index.html">Home</a></li>
    <li><a href="../events/index.html" id="nav-events">Events</a></li>
    <li><a href="../about/index.html" id="nav-about">About</a></li>
    <li><a href="../blog/index.html" id="nav-blog">News &amp; Blog</a></li>
    <li><a href="../events/index.html" class="nav-cta">Join a Round</a></li>
  </ul>
  <div class="nav-hamburger" onclick="toggleNav()">
    <span></span><span></span><span></span>
  </div>
</nav>`;

// Set active nav link based on folder
const path = window.location.pathname;
if (path.includes('/events/')) document.getElementById('nav-events')?.classList.add('active');
if (path.includes('/about/')) document.getElementById('nav-about')?.classList.add('active');
if (path.includes('/blog/')) document.getElementById('nav-blog')?.classList.add('active');

// Inject footer
document.getElementById('footer-placeholder').innerHTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="../index.html" class="nav-logo" style="display:inline-flex">
        <div class="nav-logo-icon">🥏</div>
        <div class="nav-logo-text" style="color:white">
          Peninsula
          <span>Disc Golf Club</span>
        </div>
      </a>
      <p>A 501(c)(3) non-profit organization dedicated to growing disc golf on the Peninsula — through community events, course stewardship, and youth outreach.</p>
      <div class="footer-social">
        <a href="#" title="Facebook" style="font-family:serif;font-weight:bold;color:rgba(255,255,255,0.7)">f</a>
        <a href="#" title="Instagram">📷</a>
        <a href="#" title="Discord">💬</a>
      </div>
    </div>
    <div>
      <h4>Quick Links</h4>
      <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="../events/index.html">Events Calendar</a></li>
        <li><a href="../about/index.html">About the Club</a></li>
        <li><a href="../blog/index.html">News &amp; Blog</a></li>
      </ul>
    </div>
    <div>
      <h4>Contact Us</h4>
      <ul>
        <li><a href="mailto:info@peninsuladgc.org">info@peninsuladgc.org</a></li>
        <li style="color:rgba(255,255,255,0.4);font-size:0.82rem;margin-top:0.5rem">San Mateo County, CA</li>
      </ul>
      <h4 style="margin-top:1.5rem">Courses We Serve</h4>
      <ul>
        <li style="color:rgba(255,255,255,0.55);font-size:0.82rem">Bayview Park</li>
        <li style="color:rgba(255,255,255,0.55);font-size:0.82rem">Emerald Hills, Redwood City</li>
        <li style="color:rgba(255,255,255,0.55);font-size:0.82rem">Villa Maria, Cupertino</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Peninsula Disc Golf Club · 501(c)(3) Non-Profit</span>
    <span class="pdga">PDGA Club #C12345</span>
    <span>Made with ♥ for the disc golf community</span>
  </div>
</footer>`;

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) {
    nav.style.background = window.scrollY > 60
      ? 'rgba(15,34,24,0.98)'
      : 'rgba(15,34,24,0.96)';
  }
});
