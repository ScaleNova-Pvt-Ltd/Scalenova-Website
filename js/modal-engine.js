/**
 * ScaleNova Accessible Modal & Drawer Engine with URL Hash Routing
 * 
 * Supports deep-linking, browser history navigation (back/forward), keyboard accessibility (Escape, focus trapping),
 * and dynamic template rendering for Features, Plans, Blogs, Careers, Affiliate, and Legal modals.
 */
const ScaleNovaModals = (function() {
  let lastFocusedElement = null;
  let activeModalId = null;

  // Open any modal or drawer by ID
  function open(modalId, updateHash = true) {
    const modalElem = document.getElementById(modalId);
    if (!modalElem) return;

    lastFocusedElement = document.activeElement;
    activeModalId = modalId;

    // Show backdrop & panel
    modalElem.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus first interactive element in modal
    const focusable = modalElem.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length > 0) {
      setTimeout(() => focusable[0].focus(), 100);
    }

    if (updateHash && modalElem.dataset.hash) {
      history.pushState({ modal: modalId }, '', '#' + modalElem.dataset.hash);
    }
  }

  // Close active or specified modal
  function close(modalId, restoreHash = true) {
    const targetId = modalId || activeModalId;
    if (!targetId) return;

    const modalElem = document.getElementById(targetId);
    if (modalElem) {
      modalElem.classList.remove('active');
    }

    // Check if any other modal is open
    const openModals = document.querySelectorAll('.sn-modal-backdrop.active, .sn-drawer-backdrop.active');
    if (openModals.length === 0) {
      document.body.style.overflow = '';
      activeModalId = null;

      if (restoreHash && window.location.hash) {
        // Clean URL hash without reload
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    }

    // Restore focus to trigger element
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  // Render & Open Feature Detail Drawer
  function openFeatureDetail(featureId) {
    const feature = SCALENOVA_FEATURES.find(f => f.id === featureId);
    if (!feature) return;

    const drawer = document.getElementById('featureDetailDrawer');
    const contentContainer = document.getElementById('featureDetailContent');
    if (!drawer || !contentContainer) return;

    drawer.dataset.hash = `feature/${feature.slug}`;

    contentContainer.innerHTML = `
      <div class="p-6 md:p-8 space-y-8">
        <!-- Header -->
        <div class="flex items-start justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
          <div class="space-y-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700 uppercase tracking-wider">
              <i class="${feature.icon}"></i> ${feature.badge}
            </span>
            <h2 class="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">${feature.title}</h2>
            <p class="text-xs md:text-sm font-semibold text-brand-600 dark:text-brand-400">${feature.fullDetails.headline}</p>
          </div>
          <button onclick="ScaleNovaModals.close('featureDetailDrawer')" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition" aria-label="Close Feature Details">
            <i class="fas fa-times text-sm"></i>
          </button>
        </div>

        <!-- What It Does & How It Works -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="sn-card p-5 space-y-2">
            <h4 class="text-xs font-black uppercase tracking-wider text-slate-400">What It Does</h4>
            <p class="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">${feature.fullDetails.whatItDoes}</p>
          </div>
          <div class="sn-card p-5 space-y-2">
            <h4 class="text-xs font-black uppercase tracking-wider text-slate-400">How It Works</h4>
            <p class="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">${feature.fullDetails.howItWorks}</p>
          </div>
        </div>

        <!-- Operational Problems Solved -->
        <div class="space-y-3">
          <h3 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fas fa-triangle-exclamation text-amber-500"></i> Common Business Problems Solved
          </h3>
          <div class="grid grid-cols-1 gap-2.5">
            ${feature.fullDetails.problemsSolved.map(prob => `
              <div class="flex items-start gap-3 p-3 rounded-xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 text-xs font-medium text-slate-700 dark:text-slate-300">
                <i class="fas fa-xmark text-red-500 mt-0.5"></i>
                <span>${prob}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Main Operational Benefits -->
        <div class="space-y-3">
          <h3 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fas fa-circle-check text-emerald-500"></i> Key Operational Benefits
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${feature.fullDetails.mainBenefits.map(benefit => `
              <div class="flex items-start gap-2.5 p-3.5 rounded-xl sn-card text-xs font-medium text-slate-700 dark:text-slate-300">
                <i class="fas fa-check text-emerald-500 mt-0.5"></i>
                <span>${benefit}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Automation & MSME Scaling Impact -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="sn-card p-5 space-y-3 bg-gradient-to-br from-brand-50/40 to-white dark:from-slate-900/90 dark:to-slate-900">
            <h4 class="text-xs font-black uppercase tracking-wider text-brand-600 dark:text-brand-400 flex items-center gap-1.5">
              <i class="fas fa-bolt"></i> Automation Opportunities
            </h4>
            <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
              ${feature.fullDetails.automationOpportunities.map(auto => `
                <li class="flex items-start gap-2">
                  <i class="fas fa-arrow-right text-[10px] text-brand-500 mt-1"></i>
                  <span>${auto}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="sn-card p-5 space-y-3 bg-gradient-to-br from-blue-50/40 to-white dark:from-slate-900/90 dark:to-slate-900">
            <h4 class="text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <i class="fas fa-chart-line"></i> How It Scales an MSME
            </h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">${feature.fullDetails.msmeScalingImpact}</p>
            <div class="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
              <strong>Example:</strong> ${feature.fullDetails.exampleWorkflow}
            </div>
          </div>
        </div>

        <!-- CTA Footer -->
        <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            <span>Ready to see this feature live in action?</span>
          </div>
          <div class="flex items-center gap-3 w-full sm:w-auto">
            <button onclick="ScaleNovaModals.close('featureDetailDrawer'); ScaleNovaModals.openDemoModal();" class="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sn-btn-primary flex items-center justify-center gap-2">
              <i class="fas fa-play text-[10px]"></i>
              <span>Book a Live Demo</span>
            </button>
          </div>
        </div>
      </div>
    `;

    open('featureDetailDrawer');
  }

  // Render & Open Plan Detail Drawer
  function openPlanDetail(planId) {
    const plan = SCALENOVA_PLANS.find(p => p.id === planId);
    if (!plan) return;

    const drawer = document.getElementById('planDetailDrawer');
    const contentContainer = document.getElementById('planDetailContent');
    if (!drawer || !contentContainer) return;

    drawer.dataset.hash = `plan/${plan.id}`;

    contentContainer.innerHTML = `
      <div class="p-6 md:p-8 space-y-8">
        <!-- Header -->
        <div class="flex items-start justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
          <div class="space-y-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700 uppercase tracking-wider">
              ${plan.badge}
            </span>
            <div class="flex items-baseline gap-3">
              <h2 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">${plan.name}</h2>
              <span class="text-lg font-black text-brand-600 dark:text-brand-400">${plan.monthlyPriceFormatted} <span class="text-xs font-normal text-slate-500">+ GST / mo</span></span>
            </div>
            <p class="text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400">${plan.headline}</p>
          </div>
          <button onclick="ScaleNovaModals.close('planDetailDrawer')" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition" aria-label="Close Plan Details">
            <i class="fas fa-times text-sm"></i>
          </button>
        </div>

        <!-- Target Audience & User Capacity -->
        <div class="sn-card p-5 space-y-2 bg-gradient-to-r from-brand-50/40 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
          <div class="flex items-center justify-between">
            <h4 class="text-xs font-black uppercase tracking-wider text-brand-600 dark:text-brand-400">Target Business Profile</h4>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-500/10 text-brand-600 dark:text-brand-400">${plan.userCapacity}</span>
          </div>
          <p class="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">${plan.targetAudience}</p>
        </div>

        <!-- Main Included Functions -->
        <div class="space-y-3">
          <h3 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fas fa-layer-group text-brand-500"></i> Main Included Functions
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            ${plan.mainIncludedFunctions.map(func => `
              <div class="flex items-start gap-2.5 p-3 rounded-xl sn-card text-xs font-medium text-slate-700 dark:text-slate-300">
                <i class="fas fa-check text-emerald-500 mt-0.5"></i>
                <span>${func}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Expected Setup Journey -->
        <div class="space-y-3">
          <h3 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fas fa-route text-blue-500"></i> Expected Onboarding Journey
          </h3>
          <div class="space-y-3">
            ${plan.setupJourney.map((step, idx) => `
              <div class="flex items-start gap-3.5 p-4 rounded-xl sn-card">
                <div class="w-7 h-7 rounded-lg sn-gradient-bg text-white font-black text-xs flex items-center justify-center flex-shrink-0">
                  ${idx + 1}
                </div>
                <div class="space-y-1">
                  <h4 class="text-xs font-extrabold text-slate-900 dark:text-white">${step.step}</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${step.detail}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Training & Support Boundary -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="sn-card p-5 space-y-2">
            <h4 class="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <i class="fas fa-graduation-cap"></i> Training Included
            </h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">${plan.trainingIncluded}</p>
          </div>
          <div class="sn-card p-5 space-y-2">
            <h4 class="text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <i class="fas fa-headset"></i> Support Scope
            </h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">${plan.supportIncluded}</p>
          </div>
        </div>

        <!-- Upgrade Path -->
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1 text-xs">
          <h4 class="font-bold text-slate-900 dark:text-white">Seamless Scaling & Upgrade Path</h4>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">${plan.upgradePath}</p>
        </div>

        <!-- CTA Footer -->
        <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-xs text-slate-500 dark:text-slate-400">
            <span>Annual option: 12 months for the price of 10</span>
          </div>
          <button onclick="ScaleNovaModals.close('planDetailDrawer'); ScaleNovaModals.openDemoModal();" class="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sn-btn-primary flex items-center justify-center gap-2">
            <i class="fas fa-calendar-check"></i>
            <span>${plan.ctaText}</span>
          </button>
        </div>
      </div>
    `;

    open('planDetailDrawer');
  }

  // Render & Open Blog Article Reader Modal
  function openBlogArticle(blogIdOrSlug) {
    const blog = SCALENOVA_BLOGS.find(b => b.id === blogIdOrSlug || b.slug === blogIdOrSlug);
    if (!blog) return;

    const modal = document.getElementById('blogArticleModal');
    const contentContainer = document.getElementById('blogArticleContent');
    if (!modal || !contentContainer) return;

    modal.dataset.hash = `blog/${blog.slug}`;

    // Convert markdown content to clean HTML
    let htmlContent = blog.content
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/^(\*|\-) (.*$)/gim, '<li>$2</li>')
      .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
      .replace(/\n\n/gim, '</p><p>')
      .replace(/---/gim, '<hr class="my-6 border-slate-200 dark:border-slate-800">');

    htmlContent = `<p>${htmlContent}</p>`;

    contentContainer.innerHTML = `
      <div class="p-6 md:p-10 space-y-8 max-w-3xl mx-auto">
        <!-- Article Header -->
        <div class="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center justify-between">
            <span class="px-3 py-1 rounded-full text-xs font-black bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700">
              <i class="${blog.icon} mr-1"></i> ${blog.category}
            </span>
            <button onclick="ScaleNovaModals.close('blogArticleModal')" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition" aria-label="Close Article">
              <i class="fas fa-times text-xs"></i>
            </button>
          </div>

          <h1 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">${blog.title}</h1>

          <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span><i class="fas fa-user-circle mr-1"></i> ${blog.author}</span>
            <span>•</span>
            <span><i class="fas fa-calendar mr-1"></i> ${blog.publishDate}</span>
            <span>•</span>
            <span><i class="fas fa-clock mr-1"></i> ${blog.readingTime}</span>
          </div>
        </div>

        <!-- Article Body -->
        <div class="blog-content-body">
          ${htmlContent}
        </div>

        <!-- Share & Author Bio -->
        <div class="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div class="space-y-1 text-center sm:text-left">
              <h4 class="text-sm font-black text-slate-900 dark:text-white">Transform Your Business Operations</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400">Discover how ScaleNova Business OS unifies CRM, ERP, and automation for your team.</p>
            </div>
            <button onclick="ScaleNovaModals.close('blogArticleModal'); ScaleNovaModals.openDemoModal();" class="px-5 py-2.5 rounded-xl text-xs sn-btn-primary flex-shrink-0">
              Book a Live Demo
            </button>
          </div>

          <div class="flex items-center justify-between text-xs text-slate-500">
            <span>Published by ScaleNova Engineering &amp; Operations</span>
            <div class="flex items-center gap-3">
              <span class="font-bold">Share:</span>
              <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + ' ' + window.location.href)}" target="_blank" rel="noopener" class="text-emerald-500 hover:scale-110 transition" aria-label="Share on WhatsApp"><i class="fab fa-whatsapp text-lg"></i></a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" target="_blank" rel="noopener" class="text-blue-500 hover:scale-110 transition" aria-label="Share on LinkedIn"><i class="fab fa-linkedin text-lg"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;

    open('blogArticleModal');
  }

  // Open Live Demo Form trigger
  function openDemoModal() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.getElementById('nameInput');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 600);
      }
    }
  }

  // Open Career Application with Role Pre-filling
  function openCareerModal(roleTitle = "General Application") {
    const targetBadge = document.getElementById('targetRoleBadge');
    const roleInput = document.getElementById('appRoleInput');
    if (targetBadge) targetBadge.textContent = roleTitle;
    if (roleInput) roleInput.value = roleTitle;
    open('careerAppModal');
  }

  // Open Affiliate Application Modal
  function openAffiliateModal() {
    open('affiliateModal');
  }

  // Hash Router Listener for Direct URLs (#feature/crm, #plan/growth, #blog/lead-leakage)
  function handleHashChange() {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    if (hash.startsWith('feature/')) {
      const slug = hash.replace('feature/', '');
      const feature = SCALENOVA_FEATURES.find(f => f.slug === slug || f.id === slug);
      if (feature) openFeatureDetail(feature.id);
    } else if (hash.startsWith('plan/')) {
      const planId = hash.replace('plan/', '');
      openPlanDetail(planId);
    } else if (hash.startsWith('blog/')) {
      const slug = hash.replace('blog/', '');
      openBlogArticle(slug);
    } else if (hash === 'careers-apply') {
      openCareerModal();
    } else if (hash === 'affiliate-apply') {
      openAffiliateModal();
    }
  }

  // Initialize Global Listeners
  function init() {
    // Escape Key Listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && activeModalId) {
        close(activeModalId);
      }
    });

    // Hash change listener
    window.addEventListener('hashchange', handleHashChange);
    // Initial hash check on page load
    setTimeout(handleHashChange, 250);
  }

  return {
    init,
    open,
    close,
    openFeatureDetail,
    openPlanDetail,
    openBlogArticle,
    openDemoModal,
    openCareerModal,
    openAffiliateModal
  };
})();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ScaleNovaModals.init);
} else {
  ScaleNovaModals.init();
}
