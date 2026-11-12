/**
 * Zuvan Software Services — Shared Page Components
 * Injects standard header, mobile drawer, and footer into every page
 */

(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function navLink(href, label) {
    const active = href === currentPage ? ' active' : '';
    return `<a href="${href}" class="nav-link${active}">${label}</a>`;
  }

  function mobileNavLink(href, label, arrow = false) {
    const active = href === currentPage ? ' active' : '';
    return `<a href="${href}" class="mobile-nav-link${active}">${label}${arrow ? `<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>` : ''}</a>`;
  }

  // Service sub-pages for mobile drawer only
  function mobileServiceLink(href, label) {
    const active = href === currentPage ? ' active' : '';
    return `<a href="${href}" class="mobile-nav-link${active}" style="font-size:13px;padding-left:28px;color:#64748B;">
      <span>${label}</span>
      <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </a>`;
  }

  // ============ ANNOUNCEMENT BAR ============
  const announcementBar = document.createElement('div');
  announcementBar.className = 'announcement-bar';
  announcementBar.innerHTML = `
    <div style="max-width:1280px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:12px;">
      <span class="announcement-badge">
        <span class="pulse-dot"></span>
        Pan-India Partner
      </span>
      <span>Empowering enterprises with client-focused IT Consulting, Specialized Staffing &amp; Executive Recruitment</span>
      <a href="contact.html">Start a Conversation &rarr;</a>
    </div>
  `;

  // ============ HEADER ============
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="logo-wrap">
        <div class="logo-icon">
          <img src="assets/images/logo-1.jpeg" alt="Zuvan Logo">
        </div>
        <div class="logo-text">
          <span class="brand">ZUVAN</span>
          <span class="tagline">Software Services Pvt. Ltd.</span>
        </div>
      </a>

      <nav class="desktop-nav" aria-label="Main Navigation">
        ${navLink('index.html', 'Home')}
        ${navLink('about.html', 'Who We Are')}
        ${navLink('services.html', 'Services')}
        ${navLink('why-zuvan.html', 'Why Zuvan')}
        ${navLink('contact.html', 'Contact')}
      </nav>

      <div class="header-actions">
        <a href="tel:040-27898999" class="header-phone">
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          040-27898999
        </a>
        <a href="contact.html" class="btn-primary">
          Let's Partner
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
        <button id="mobileMenuBtn" class="mobile-menu-btn" aria-label="Open menu">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
  `;

  // ============ MOBILE DRAWER ============
  const overlay = document.createElement('div');
  overlay.id = 'drawerOverlay';
  overlay.className = 'drawer-overlay';

  const drawer = document.createElement('aside');
  drawer.id = 'mobileDrawer';
  drawer.className = 'mobile-drawer';
  drawer.setAttribute('aria-label', 'Mobile Navigation');
  drawer.innerHTML = `
    <div>
      <div class="drawer-header">
        <a href="index.html" class="logo-wrap" style="gap:10px;">
          <div class="logo-icon" style="width:36px;height:36px;border-radius:8px;">
            <img src="assets/images/logo-1.jpeg" alt="Zuvan">
          </div>
          <div class="logo-text">
            <span class="brand" style="font-size:15px;">ZUVAN</span>
            <span class="tagline">Software Services</span>
          </div>
        </a>
        <button id="mobileMenuClose" class="drawer-close" aria-label="Close menu">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <nav style="display:flex;flex-direction:column;gap:4px;">
        ${mobileNavLink('index.html', 'Home')}
        ${mobileNavLink('about.html', 'Who We Are')}
        ${mobileNavLink('why-zuvan.html', 'Why Zuvan')}
        ${mobileNavLink('contact.html', 'Contact')}
        <div style="height:1px;background:#F1F5F9;margin:8px 0;"></div>
        <div style="font-size:10px;font-weight:800;color:#94A3B8;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;font-family:'Plus Jakarta Sans',sans-serif;">Our Services</div>
        ${mobileServiceLink('services.html', 'All Services')}
        ${mobileServiceLink('it-consulting.html', '01 | IT Consulting')}
        ${mobileServiceLink('staffing.html', '02 | Staffing Solutions')}
        ${mobileServiceLink('recruitment.html', '03 | Recruitment')}
        ${mobileServiceLink('how-we-work.html', 'How We Work')}
      </nav>
    </div>
    <div style="padding-top:24px;border-top:1px solid #E2E8F0;">
      <a href="contact.html" class="btn-primary" style="width:100%;justify-content:center;border-radius:12px;padding:13px 20px;font-size:14px;">
        Let's Build Something Great
      </a>
      <p style="text-align:center;font-size:11.5px;color:#94A3B8;margin-top:12px;">Zuvan Software Services Pvt. Ltd. &bull; India</p>
    </div>
  `;

  // ============ FOOTER ============
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container">
      <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:0;" id="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo-wrap" style="margin-bottom:16px;display:inline-flex;">
            <div class="logo-icon" style="background:linear-gradient(135deg,#2D4A7A,#1D4ED8);border-color:#334155;">
              <img src="assets/images/logo-1.jpeg" alt="Zuvan Logo">
            </div>
            <div class="logo-text">
              <span class="brand" style="color:#F1F5F9;">ZUVAN</span>
              <span class="tagline" style="color:#D4AF37;">Software Services Pvt. Ltd.</span>
            </div>
          </a>
          <p>Technology. Talent. Tomorrow. Practical, client-focused IT consulting, technical staffing, and structured recruitment across India.</p>
          <div class="footer-status-badge">
            <span class="status-dot-green"></span>
            Active Client Intake &amp; Consultations Open
          </div>
        </div>
        <div>
          <h4 class="footer-heading">Company</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home Page</a></li>
            <li><a href="about.html">Who We Are</a></li>
            <li><a href="how-we-work.html">How We Work</a></li>
            <li><a href="why-zuvan.html">Why Work With Zuvan</a></li>
            <li><a href="contact.html">Contact &amp; Locations</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Services</h4>
          <ul class="footer-links">
            <li><a href="services.html">All Services Overview</a></li>
            <li><a href="it-consulting.html">01 | IT Consulting</a></li>
            <li><a href="staffing.html">02 | Staffing Solutions</a></li>
            <li><a href="recruitment.html">03 | Direct Recruitment</a></li>
            <li><a href="how-we-work.html">How We Work (5 Steps)</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Get in Touch</h4>
          <div class="footer-contact-item">
            <svg class="footer-contact-icon" width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            040-27898999
          </div>
          <div class="footer-contact-item">
            <svg class="footer-contact-icon" width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            contact@zuvansoftservices.com
          </div>
          <div class="footer-contact-item">
            <svg class="footer-contact-icon" width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-top:1px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Hyderabad, Telangana, India
          </div>
          <div style="margin-top:20px;">
            <div style="font-size:11px;font-weight:700;color:#CBD5E1;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px;font-family:'Plus Jakarta Sans',sans-serif;">Quick Contact</div>
            <div class="footer-newsletter-input">
              <input type="email" placeholder="your@email.com" aria-label="Email">
              <button type="button">Reach Us</button>
            </div>
          </div>
        </div>
      </div>
      <hr class="footer-divider">
      <div class="footer-bottom">
        <p>&copy; 2026 Zuvan Software Services Pvt. Ltd. All rights reserved.</p>
        <p style="color:#334155;">Client Confidentiality &amp; Rigorous Data Governance</p>
        <p>Innovate &bull; Build &bull; Grow</p>
      </div>
    </div>
  `;

  // ============ BACK TO TOP BUTTON ============
  const backToTop = document.createElement('button');
  backToTop.id = 'backToTopBtn';
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.setAttribute('type', 'button');
  backToTop.innerHTML = `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>`;

  // ============ INJECT into DOM ============
  const body = document.body;
  body.insertBefore(announcementBar, body.firstChild);
  announcementBar.insertAdjacentElement('afterend', header);
  header.insertAdjacentElement('afterend', overlay);
  overlay.insertAdjacentElement('afterend', drawer);
  body.appendChild(footer);
  body.appendChild(backToTop);

  // ============ RESPONSIVE FOOTER FIX ============
  const respStyle = document.createElement('style');
  respStyle.textContent = `
    @media (max-width: 1024px) { #footer-grid { grid-template-columns: 1fr 1fr !important; } }
    @media (max-width: 640px) { #footer-grid { grid-template-columns: 1fr !important; } }
  `;
  document.head.appendChild(respStyle);

})();
