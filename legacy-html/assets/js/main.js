/**
 * Zuvan Software Services Pvt. Ltd.
 * Main Interactive Script — Redesigned 2026
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initActiveNav();
  initFaqAccordions();
  initRequirementCalculator();
  initForms();
  initBackToTop();
  initScrollAnimations();
});

/* ============================================================
   MOBILE NAVIGATION DRAWER
============================================================ */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');

  if (!menuBtn || !drawer) return;

  function openMenu() {
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* ============================================================
   ACTIVE NAV HIGHLIGHT
============================================================ */
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const targetFile = href.split('/').pop();
    if (targetFile === currentPath || (currentPath === '' && targetFile === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ============================================================
   FAQ ACCORDIONS
============================================================ */
function initFaqAccordions() {
  const accordions = document.querySelectorAll('.faq-toggle');

  accordions.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const parent = toggle.closest('.faq-item');
      if (!parent) return;
      const content = parent.querySelector('.faq-content');
      const icon = toggle.querySelector('.faq-icon');

      const isOpen = !content.classList.contains('hidden');

      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== parent) {
          const itemContent = item.querySelector('.faq-content');
          const itemIcon = item.querySelector('.faq-icon');
          if (itemContent) itemContent.classList.add('hidden');
          if (itemIcon) itemIcon.style.transform = 'rotate(0deg)';
        }
      });

      if (isOpen) {
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* ============================================================
   SCOPE / TALENT ESTIMATOR WIDGET
============================================================ */
function initRequirementCalculator() {
  const calcForm = document.getElementById('scopeEstimatorForm');
  if (!calcForm) return;

  const serviceSelect = document.getElementById('calcService');
  const urgencySelect = document.getElementById('calcUrgency');
  const scopeSelect = document.getElementById('calcScope');
  const resultTimeline = document.getElementById('calcResultTimeline');
  const resultRecommendation = document.getElementById('calcResultRecommendation');
  const resultSla = document.getElementById('calcResultSla');

  function updateEstimate() {
    const service = serviceSelect?.value || 'staffing';
    const urgency = urgencySelect?.value || 'standard';
    const scope = scopeSelect?.value || 'team';

    let timelineText = '2 to 4 Business Days';
    let slaText = '24-hour response & role alignment call';
    let recText = 'Pre-vetted engineering cohort with structured technical interviews.';

    if (service === 'consulting') {
      timelineText = urgency === 'immediate' ? 'Within 48 Hours' : '3 to 5 Business Days';
      slaText = 'Dedicated Technology Advisor Assigned';
      recText = scope === 'enterprise'
        ? 'Full architectural assessment, cloud infrastructure audit & milestone roadmap.'
        : 'Targeted tech stack review, code health assessment, and next-step action plan.';
    } else if (service === 'staffing') {
      timelineText = urgency === 'immediate' ? '24 to 48 Hours' : '3 to 5 Days';
      slaText = 'Curated 3–5 profile shortlist within 72 hours';
      recText = scope === 'individual'
        ? 'Dedicated specialist deployed on flexible contract or contract-to-hire terms.'
        : 'Pod-based technical staffing team with coordinated onboarding and delivery assurance.';
    } else if (service === 'recruitment') {
      timelineText = '5 to 7 Business Days';
      slaText = 'Candidate intake clarity workshop & custom scoring rubric';
      recText = 'End-to-end recruitment pipeline: sourcing, pre-screening, interview coordination, and offer closing.';
    }

    if (resultTimeline) resultTimeline.textContent = timelineText;
    if (resultSla) resultSla.textContent = slaText;
    if (resultRecommendation) resultRecommendation.textContent = recText;
  }

  [serviceSelect, urgencySelect, scopeSelect].forEach(elem => {
    if (elem) elem.addEventListener('change', updateEstimate);
  });

  updateEstimate();
}

/* ============================================================
   FORM HANDLERS
============================================================ */
function initForms() {
  const contactForms = document.querySelectorAll('form[data-zuvan-form]');

  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin" style="display:inline-block;width:16px;height:16px;animation:spin 1s linear infinite;margin-right:8px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle style="opacity:0.25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path style="opacity:0.75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Processing...
        `;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        const nameInput = form.querySelector('[name="fullName"]') || form.querySelector('[name="name"]');
        const clientName = nameInput ? nameInput.value : 'Partner';

        showToast(`Thank you, ${clientName}! Your requirement has been submitted to Zuvan Softsol. A specialist will follow up within 24 hours.`, 'success');

        form.reset();
      }, 1200);
    });
  });
}

/* ============================================================
   TOAST NOTIFICATION
============================================================ */
function showToast(message, type = 'info') {
  let container = document.querySelector('.zuvan-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'zuvan-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'zuvan-toast';

  const iconColor = type === 'success' ? '#16A34A' : '#1D4ED8';
  const iconBg = type === 'success' ? '#DCFCE7' : '#EFF6FF';

  toast.innerHTML = `
    <div style="width:36px;height:36px;border-radius:8px;background:${iconBg};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <svg width="18" height="18" fill="none" stroke="${iconColor}" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
      </svg>
    </div>
    <div style="flex:1;min-width:0;">
      <p style="font-size:13px;font-weight:700;color:#0F172A;margin-bottom:3px;font-family:'Plus Jakarta Sans',sans-serif;">Zuvan Softsol</p>
      <p style="font-size:12.5px;color:#64748B;line-height:1.5;">${message}</p>
    </div>
    <button onclick="this.parentElement.remove()" style="padding:4px;color:#94A3B8;cursor:pointer;border:none;background:none;border-radius:4px;transition:color 0.2s;" onmouseover="this.style.color='#0F172A'" onmouseout="this.style.color='#94A3B8'">
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

window.copyToClipboard = function(text, label = 'Copied') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label}: "${text}" copied to clipboard!`, 'success');
  }).catch(() => {
    showToast(`Could not copy automatically. Please copy: ${text}`, 'info');
  });
};

/* ============================================================
   BACK TO TOP
============================================================ */
function initBackToTop() {
  const backBtn = document.getElementById('backToTopBtn');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   SCROLL REVEAL ANIMATIONS
============================================================ */
function initScrollAnimations() {
  if (!window.IntersectionObserver) return;

  const style = document.createElement('style');
  style.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // Apply to cards and sections
  const targets = document.querySelectorAll('.card, .step-card, .diff-card, .section-title, .estimator-card');
  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

/* CSS spin keyframe */
const spinStyle = document.createElement('style');
spinStyle.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
document.head.appendChild(spinStyle);
