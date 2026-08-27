/**
 * ScaleNova Advanced SPA View & Modal Engine with Browser History Routing
 * 
 * Manages full-page SPA views for:
 * 1. Simplified, Clean Careers Portal & Individual Role Deep-Dives
 * 2. Simplified, Visual Affiliate Programme Page with 4-Step Process & Expandable Terms
 * 3. ScaleNova Insights (All 8 Articles) & Full Article Reader
 * 4. Centered Feature & OS Plan Modals
 * 5. Hash Routing with Browser Back/Forward & Dynamic SEO Metadata
 */
const ScaleNovaModals = (function() {
  let lastFocusedElement = null;
  let activeModalId = null;
  const originalDocTitle = document.title;

  // Open any modal or full SPA overlay by ID
  function open(modalId, updateHash = true, customHash = null) {
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

    const targetHash = customHash || modalElem.dataset.hash;
    if (updateHash && targetHash) {
      if (window.location.hash !== '#' + targetHash) {
        history.pushState({ modal: modalId, hash: targetHash }, '', '#' + targetHash);
      }
    }
  }

  // Close active or specified modal/SPA overlay
  function close(modalId, restoreHash = true) {
    const targetId = modalId || activeModalId;
    if (!targetId) return;

    const modalElem = document.getElementById(targetId);
    if (modalElem) {
      modalElem.classList.remove('active');
    }

    // Check if any other modal is open
    const openModals = document.querySelectorAll('.sn-modal-backdrop.active, .sn-drawer-backdrop.active, .sn-spa-backdrop.active');
    if (openModals.length === 0) {
      document.body.style.overflow = '';
      activeModalId = null;
      document.title = originalDocTitle;

      if (restoreHash && window.location.hash) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    }

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  // Helper for back navigation
  function goBackOrClose(fallbackModalId) {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      close(fallbackModalId);
    }
  }

  /* ==========================================================================
     1. CLEAN & CONCISE CAREERS PORTAL SPA VIEW
     ========================================================================== */
  function openCareersPage() {
    const modal = document.getElementById('careersModal');
    const container = document.getElementById('careersContent');
    if (!modal || !container || typeof SCALENOVA_CAREERS === 'undefined') return;

    modal.dataset.hash = 'careers';
    document.title = 'Careers at ScaleNova | Build Connected Business Technology';

    const culture = SCALENOVA_CAREERS.culture;
    const pillars = SCALENOVA_CAREERS.pillars;
    const perks = SCALENOVA_CAREERS.perks;
    const roles = SCALENOVA_CAREERS.roles;

    const fullTimeRoles = roles.filter(r => r.category === 'Full-Time');
    const internshipRoles = roles.filter(r => r.category === 'Internship');

    container.innerHTML = `
      <div class="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
        
        <!-- Sticky Navigation Header -->
        <div class="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
          <button onclick="ScaleNovaModals.close('careersModal')" class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition" aria-label="Back to Home">
            <i class="fas fa-arrow-left text-xs"></i>
            <span>← Back to Home</span>
          </button>
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full text-[10px] font-black bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700 uppercase tracking-wider">
              Careers Portal
            </span>
            <button onclick="ScaleNovaModals.close('careersModal')" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition" aria-label="Close Careers">
              <i class="fas fa-times text-xs"></i>
            </button>
          </div>
        </div>

        <!-- Careers Hero (Short & Punchy) -->
        <div class="text-center space-y-3 max-w-2xl mx-auto pt-1">
          <span class="px-3 py-0.5 rounded-full text-[10px] font-black bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700 uppercase tracking-wider">
            <i class="fas fa-rocket mr-1 text-brand-500"></i>Join ScaleNova
          </span>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            ${culture.headline}
          </h1>
          <p class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
            ${culture.subheadline}
          </p>
          <div class="pt-1 flex items-center justify-center gap-3">
            <a href="#open-roles" class="px-5 py-2.5 rounded-xl text-xs sn-btn-primary inline-flex items-center gap-2">
              <i class="fas fa-briefcase text-[10px]"></i>
              <span>View Open Roles</span>
            </a>
            <button onclick="ScaleNovaModals.openCareerApp('General Application')" class="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              General Application
            </button>
          </div>
        </div>

        <!-- Why ScaleNova / 4 Compact Pillars -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          ${pillars.map(p => `
            <div class="sn-card p-4 space-y-1.5 bg-white dark:bg-slate-900">
              <div class="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center text-sm">
                <i class="${p.icon}"></i>
              </div>
              <h3 class="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">${p.title}</h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">${p.detail}</p>
            </div>
          `).join('')}
        </div>

        <!-- Perks & Benefits (Compact Cards) -->
        <div class="space-y-3">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Perks &amp; Culture</h3>
            <span class="text-[11px] text-slate-400 font-medium">Built for high autonomy</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            ${perks.map(perk => `
              <div class="sn-card p-3 space-y-1 text-center">
                <div class="w-7 h-7 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center text-xs mx-auto">
                  <i class="${perk.icon}"></i>
                </div>
                <h4 class="text-[11px] font-bold text-slate-900 dark:text-white">${perk.title}</h4>
                <p class="text-[10px] text-slate-500 leading-tight">${perk.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Open Full-Time Roles (2) -->
        <div id="open-roles" class="space-y-4 pt-2">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Full-Time (2)</span>
              <h2 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">Open Full-Time Positions</h2>
            </div>
            <span class="text-xs text-slate-400 font-medium">100% Remote (India)</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${fullTimeRoles.map(role => `
              <div class="sn-card sn-card-hover p-4 sm:p-5 space-y-3 flex flex-col justify-between border-2 border-brand-500/20">
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-xs">
                    <span class="px-2 py-0.5 rounded-full text-[9px] font-black bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 uppercase">
                      ${role.department}
                    </span>
                    <span class="text-[11px] font-bold text-slate-400">${role.location}</span>
                  </div>

                  <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">${role.title}</h3>
                  <p class="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">${role.overview}</p>

                  <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 text-xs">
                    <span class="block text-[9px] font-bold text-slate-400 uppercase">Compensation</span>
                    <span class="font-extrabold text-slate-900 dark:text-white text-xs">${role.compensationRange}</span>
                  </div>
                </div>

                <div class="pt-2.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <button onclick="ScaleNovaModals.openRoleDetail('${role.id}')" class="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline">
                    View Details →
                  </button>
                  <button onclick="ScaleNovaModals.openCareerApp('${role.title}')" class="px-3.5 py-1.5 rounded-xl text-xs sn-btn-primary">
                    Apply
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 4 Internship Roles (Compact Grid) -->
        <div class="space-y-4 pt-2">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">Internships (4)</span>
              <h2 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">Internship Opportunities</h2>
            </div>
            <span class="text-xs text-slate-400 font-medium">3–6 Months • Mentorship &amp; PPO</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${internshipRoles.map(role => `
              <div class="sn-card sn-card-hover p-3.5 space-y-2.5 flex flex-col justify-between">
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-[10px]">
                    <span class="font-black text-blue-600 dark:text-blue-400 uppercase">${role.duration}</span>
                    <span class="text-slate-400">Remote</span>
                  </div>
                  <h4 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug">${role.title}</h4>
                  <p class="text-[11px] text-slate-600 dark:text-slate-400 font-medium line-clamp-2">${role.overview}</p>
                </div>

                <div class="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <button onclick="ScaleNovaModals.openRoleDetail('${role.id}')" class="text-[11px] font-bold text-brand-600 dark:text-brand-400 hover:underline">
                    Details →
                  </button>
                  <button onclick="ScaleNovaModals.openCareerApp('${role.title}')" class="px-2.5 py-1 rounded-lg text-[10px] sn-btn-primary">
                    Apply
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- General Application Box -->
        <div class="p-4 sm:p-5 rounded-xl bg-slate-100 dark:bg-slate-900 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 border border-slate-200 dark:border-slate-800">
          <div class="space-y-0.5">
            <h3 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white">Don't see an exact match?</h3>
            <p class="text-[11px] text-slate-600 dark:text-slate-400 font-medium">We're always open to meeting talented developers, designers, and growth specialists.</p>
          </div>
          <button onclick="ScaleNovaModals.openCareerApp('General Application')" class="px-4 py-2 rounded-xl text-xs sn-btn-primary flex-shrink-0">
            General Application
          </button>
        </div>

      </div>
    `;

    open('careersModal');
  }

  /* ==========================================================================
     2. INDIVIDUAL CAREER ROLE DETAIL SPA VIEW
     ========================================================================== */
  function openRoleDetail(roleId) {
    const role = SCALENOVA_CAREERS.roles.find(r => r.id === roleId);
    if (!role) return;

    const modal = document.getElementById('roleDetailModal');
    const container = document.getElementById('roleDetailContent');
    if (!modal || !container) return;

    modal.dataset.hash = `careers/${role.id}`;
    document.title = `${role.title} | Careers at ScaleNova`;

    container.innerHTML = `
      <div class="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 space-y-6">
        
        <!-- Sticky Navigation Header -->
        <div class="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
          <button onclick="ScaleNovaModals.close('roleDetailModal'); ScaleNovaModals.openCareersPage();" class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition" aria-label="Back to Careers">
            <i class="fas fa-arrow-left text-xs"></i>
            <span>← Back to Careers</span>
          </button>
          <button onclick="ScaleNovaModals.close('roleDetailModal')" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 transition" aria-label="Close Role View">
            <i class="fas fa-times text-xs"></i>
          </button>
        </div>

        <!-- Role Header -->
        <div class="space-y-2">
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700">
              ${role.category}
            </span>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              ${role.department}
            </span>
            <span class="text-slate-400">•</span>
            <span class="text-slate-500 font-medium">${role.location}</span>
          </div>

          <h1 class="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">${role.title}</h1>
          <p class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">${role.overview}</p>
        </div>

        <!-- Compensation Banner -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-xs">
          <div>
            <span class="text-[9px] font-bold text-slate-400 uppercase">Compensation</span>
            <p class="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">${role.compensationRange}</p>
            <p class="text-[10px] text-slate-500">${role.compensationNote}</p>
          </div>
          <div>
            <span class="text-[9px] font-bold text-slate-400 uppercase">Work Mode</span>
            <p class="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">${role.workMode}</p>
            <p class="text-[10px] text-slate-500">Experience: ${role.experience || role.duration}</p>
          </div>
        </div>

        <!-- Responsibilities -->
        <div class="space-y-2">
          <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Responsibilities</h3>
          <div class="grid grid-cols-1 gap-1.5">
            ${role.responsibilities.map(resp => `
              <div class="flex items-start gap-2 p-2 rounded-lg sn-card text-xs font-medium text-slate-700 dark:text-slate-300">
                <i class="fas fa-check text-emerald-500 mt-0.5 text-[11px]"></i>
                <span>${resp}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Skills -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="sn-card p-3.5 space-y-1.5">
            <h4 class="text-[10px] font-black uppercase tracking-wider text-brand-600 dark:text-brand-400">Required Skills</h4>
            <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-300 font-medium">
              ${role.requiredSkills.map(sk => `<li class="flex items-start gap-1.5"><i class="fas fa-arrow-right text-[8px] text-brand-500 mt-1"></i><span>${sk}</span></li>`).join('')}
            </ul>
          </div>

          <div class="sn-card p-3.5 space-y-1.5">
            <h4 class="text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">Learning &amp; Growth</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">${role.whatYouLearn}</p>
          </div>
        </div>

        <!-- Bottom Action CTA -->
        <div class="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <button onclick="ScaleNovaModals.close('roleDetailModal'); ScaleNovaModals.openCareersPage();" class="text-xs font-bold text-slate-500 hover:underline">← Other Roles</button>
          <button onclick="ScaleNovaModals.close('roleDetailModal'); ScaleNovaModals.openCareerApp('${role.title}');" class="px-6 py-2.5 rounded-xl text-xs sn-btn-primary flex items-center gap-2">
            <i class="fas fa-paper-plane text-[10px]"></i>
            <span>Apply for This Role</span>
          </button>
        </div>

      </div>
    `;

    open('roleDetailModal');
  }

  // Open Career Candidate Application Form
  function openCareerApp(roleTitle = "General Application") {
    const targetBadge = document.getElementById('targetRoleBadge');
    const roleInput = document.getElementById('appRoleInput');
    if (targetBadge) targetBadge.textContent = roleTitle;
    if (roleInput) roleInput.value = roleTitle;
    open('careerAppModal', true, 'careers-apply');
  }

  /* ==========================================================================
     3. CLEAN & VISUAL AFFILIATE PROGRAMME SPA VIEW
     ========================================================================== */
  function openAffiliatePage() {
    const modal = document.getElementById('affiliateFullModal');
    const container = document.getElementById('affiliateFullContent');
    if (!modal || !container || typeof SCALENOVA_AFFILIATE === 'undefined') return;

    modal.dataset.hash = 'affiliate';
    document.title = 'Partner Network & Affiliate Programme | ScaleNova';

    const aff = SCALENOVA_AFFILIATE;

    container.innerHTML = `
      <div class="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
        
        <!-- Sticky Navigation Header -->
        <div class="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
          <button onclick="ScaleNovaModals.close('affiliateFullModal')" class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition" aria-label="Back to Home">
            <i class="fas fa-arrow-left text-xs"></i>
            <span>← Back to Home</span>
          </button>
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full text-[10px] font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
              20% Recurring Share
            </span>
            <button onclick="ScaleNovaModals.close('affiliateFullModal')" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition" aria-label="Close Affiliate">
              <i class="fas fa-times text-xs"></i>
            </button>
          </div>
        </div>

        <!-- Affiliate Hero (Immediate Core Message) -->
        <div class="text-center space-y-3 max-w-2xl mx-auto pt-1">
          <span class="px-3 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            <i class="fas fa-handshake mr-1"></i>Partner Network
          </span>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            ${aff.overview.headline}
          </h1>
          <p class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
            ${aff.overview.subheadline}
          </p>
          <div class="pt-1 flex items-center justify-center gap-3">
            <a href="#affiliate-apply-form" class="px-5 py-2.5 rounded-xl text-xs sn-btn-primary inline-flex items-center gap-2">
              <i class="fas fa-user-plus text-[10px]"></i>
              <span>Become a Partner</span>
            </a>
            <a href="#how-it-works-section" class="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              How It Works
            </a>
          </div>
        </div>

        <!-- 4-Step Process Section -->
        <div id="how-it-works-section" class="space-y-3 pt-1">
          <div class="text-center space-y-1">
            <span class="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Simple 4-Step Process</span>
            <h2 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">How It Works</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${aff.howItWorks.map(step => `
              <div class="sn-card p-4 space-y-1.5 text-center sm:text-left">
                <div class="w-7 h-7 rounded-lg sn-gradient-bg text-white font-black text-xs flex items-center justify-center mx-auto sm:mx-0">
                  ${step.step}
                </div>
                <h3 class="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">${step.title}</h3>
                <p class="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">${step.detail}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Partner Benefits (4 Compact Cards) -->
        <div class="space-y-3">
          <div class="text-center space-y-1">
            <span class="text-[10px] font-black uppercase tracking-wider text-brand-600 dark:text-brand-400">Why Partner</span>
            <h2 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">Partner Benefits</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${aff.benefits.map(b => `
              <div class="sn-card p-4 space-y-1.5">
                <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm">
                  <i class="${b.icon}"></i>
                </div>
                <h4 class="text-xs font-extrabold text-slate-900 dark:text-white">${b.title}</h4>
                <p class="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">${b.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Who Can Join (6 Compact Cards) -->
        <div class="space-y-3">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Who Can Join</h3>
            <span class="text-[11px] text-slate-400 font-medium">Consultants, CAs, Agencies &amp; Advisors</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            ${aff.whoCanJoin.map(w => `
              <div class="sn-card p-3 space-y-1 text-center">
                <div class="w-7 h-7 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center text-xs mx-auto">
                  <i class="${w.icon}"></i>
                </div>
                <h4 class="text-[11px] font-bold text-slate-900 dark:text-white">${w.title}</h4>
                <p class="text-[10px] text-slate-500 leading-tight">${w.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Programme Terms & Conditions (Expandable Clean Accordions) -->
        <div class="sn-card p-4 sm:p-6 space-y-3 bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <div class="space-y-0.5">
            <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Transparency</span>
            <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">Programme Terms &amp; Policies</h3>
          </div>

          <div class="space-y-2 text-xs">
            ${aff.terms.map(t => `
              <details class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group cursor-pointer">
                <summary class="font-bold text-slate-900 dark:text-white flex items-center justify-between select-none">
                  <span>${t.title}</span>
                  <i class="fas fa-chevron-down text-[10px] text-slate-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <p class="text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed pt-2 mt-1 border-t border-slate-100 dark:border-slate-800">
                  ${t.detail}
                </p>
              </details>
            `).join('')}
          </div>
        </div>

        <!-- In-Page Partner Application Form -->
        <div id="affiliate-apply-form" class="sn-card p-5 sm:p-7 space-y-4 border-2 border-emerald-500/30">
          <div class="text-center space-y-0.5 max-w-md mx-auto">
            <h2 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">Become a ScaleNova Partner</h2>
            <p class="text-xs text-slate-500 font-medium">Earn 20% recurring monthly revenue share on referred subscriptions.</p>
          </div>

          <div id="affiliateFormContainer">
            <form id="affiliateForm" onsubmit="ScaleNovaForms.handleAffiliateSubmit(event)" class="space-y-3 max-w-xl mx-auto">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label class="block text-[10px] font-bold text-slate-500 uppercase mb-0.5">Full Name *</label>
                  <input type="text" id="affiliateFullName" required class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                </div>
                <div>
                  <label class="block text-[10px] font-bold text-slate-500 uppercase mb-0.5">Work Email Address *</label>
                  <input type="email" id="affiliateEmail" required class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label class="block text-[10px] font-bold text-slate-500 uppercase mb-0.5">Phone / WhatsApp *</label>
                  <input type="tel" id="affiliatePhone" required class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                </div>
                <div>
                  <label class="block text-[10px] font-bold text-slate-500 uppercase mb-0.5">Partner Category *</label>
                  <select id="affiliateCategory" required class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                    <option value="Consultant" selected>Business Consultant / Advisor</option>
                    <option value="Chartered Accountant">Chartered Accountant / Tax Firm</option>
                    <option value="Agency">Digital Agency / Web Developer</option>
                    <option value="IT Vendor">IT Vendor / System Integrator</option>
                    <option value="Existing Client">Active ScaleNova Customer</option>
                    <option value="Other">Other Professional</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase mb-0.5">Company or LinkedIn Profile URL</label>
                <input type="text" id="affiliateCompany" placeholder="e.g. Acme Consulting / linkedin.com/in/..." class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              </div>

              <div class="flex items-center space-x-2 pt-1">
                <input type="checkbox" id="affiliateConsent" required class="rounded text-emerald-500 focus:ring-emerald-500">
                <label for="affiliateConsent" class="text-[11px] text-slate-600 dark:text-slate-400">I agree to ScaleNova's Affiliate terms (20% net recurring revenue share, monthly Net-30 payout).</label>
              </div>

              <div class="pt-2 text-center">
                <button type="submit" id="submitAffiliateBtn" class="w-full sm:w-auto px-7 py-2.5 rounded-xl text-xs sn-btn-primary">
                  Submit Partner Application
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    `;

    open('affiliateFullModal');
  }

  /* ==========================================================================
     4. COMPLETE SCALENOVA INSIGHTS (ALL 8 ARTICLES) SPA VIEW
     ========================================================================== */
  function openBlogAllArticles(selectedCategory = 'All') {
    const modal = document.getElementById('blogAllModal');
    const container = document.getElementById('blogAllContent');
    if (!modal || !container || typeof SCALENOVA_BLOGS === 'undefined') return;

    modal.dataset.hash = 'blog';
    document.title = 'ScaleNova Insights | Practical MSME Operations & Technology Guides';

    const categories = ['All', 'CRM & Sales', 'ERP & Operations', 'Automation', 'Finance & Visibility', 'HR & Workforce', 'Digital Transformation', 'Business Intelligence'];

    const filteredBlogs = selectedCategory === 'All' 
      ? SCALENOVA_BLOGS 
      : SCALENOVA_BLOGS.filter(b => b.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(b.category.toLowerCase()));

    container.innerHTML = `
      <div class="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
        
        <!-- Sticky Navigation Header -->
        <div class="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
          <button onclick="ScaleNovaModals.close('blogAllModal')" class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition" aria-label="Back to Home">
            <i class="fas fa-arrow-left text-xs"></i>
            <span>← Back to Home</span>
          </button>
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full text-[10px] font-black bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700 uppercase tracking-wider">
              ${SCALENOVA_BLOGS.length} Articles
            </span>
            <button onclick="ScaleNovaModals.close('blogAllModal')" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition" aria-label="Close Blog">
              <i class="fas fa-times text-xs"></i>
            </button>
          </div>
        </div>

        <!-- Blog Hero -->
        <div class="text-center space-y-2 max-w-2xl mx-auto pt-1">
          <span class="px-3 py-0.5 rounded-full text-[10px] font-black bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 uppercase tracking-wider">
            <i class="fas fa-newspaper mr-1 text-brand-500"></i>ScaleNova Insights
          </span>
          <h1 class="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            Practical Guides for Growing Indian MSMEs
          </h1>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium max-w-lg mx-auto">
            Practical technology, automation, and operational strategies to help your business scale.
          </p>
        </div>

        <!-- Category Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-1.5 pt-1">
          ${categories.map(cat => `
            <button onclick="ScaleNovaModals.openBlogAllArticles('${cat}')" class="px-3 py-1 rounded-full text-xs font-bold transition ${cat === selectedCategory ? 'sn-gradient-bg text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <!-- All 8 Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-1">
          ${filteredBlogs.map(blog => `
            <article class="sn-card sn-card-hover p-4 sm:p-5 flex flex-col justify-between group cursor-pointer" onclick="ScaleNovaModals.close('blogAllModal'); ScaleNovaModals.openBlogArticle('${blog.id}');" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){ScaleNovaModals.close('blogAllModal');ScaleNovaModals.openBlogArticle('${blog.id}');}" aria-label="Read ${blog.title}">
              <div class="space-y-2.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700">
                    <i class="${blog.icon} mr-1"></i> ${blog.category}
                  </span>
                  <span class="text-slate-400 font-medium text-[10px]">${blog.readingTime}</span>
                </div>

                <h3 class="font-black text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors leading-snug">${blog.title}</h3>
                
                <p class="text-xs text-slate-600 dark:text-slate-400 font-medium line-clamp-3 leading-relaxed">
                  ${blog.excerpt}
                </p>
              </div>

              <div class="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-brand-500 transition-colors">
                <span>Read Article</span>
                <i class="fas fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
              </div>
            </article>
          `).join('')}
        </div>

      </div>
    `;

    open('blogAllModal');
  }

  /* ==========================================================================
     5. INDIVIDUAL BLOG ARTICLE READER SPA VIEW
     ========================================================================== */
  function openBlogArticle(blogIdOrSlug) {
    const blog = SCALENOVA_BLOGS.find(b => b.id === blogIdOrSlug || b.slug === blogIdOrSlug);
    if (!blog) return;

    const modal = document.getElementById('blogArticleModal');
    const contentContainer = document.getElementById('blogArticleContent');
    if (!modal || !contentContainer) return;

    modal.dataset.hash = `blog/${blog.slug}`;
    document.title = `${blog.title} | ScaleNova Insights`;

    let htmlContent = blog.content
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/^(\*|\-) (.*$)/gim, '<li>$2</li>')
      .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
      .replace(/\n\n/gim, '</p><p>')
      .replace(/---/gim, '<hr class="my-4 border-slate-200 dark:border-slate-800">');

    htmlContent = `<p>${htmlContent}</p>`;

    // Find 2 related articles
    const relatedBlogs = SCALENOVA_BLOGS.filter(b => b.id !== blog.id).slice(0, 2);

    contentContainer.innerHTML = `
      <div class="p-4 sm:p-6 md:p-8 space-y-6 max-w-3xl mx-auto">
        
        <!-- Sticky Navigation Header -->
        <div class="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
          <button onclick="ScaleNovaModals.close('blogArticleModal'); ScaleNovaModals.openBlogAllArticles();" class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition" aria-label="Back to Articles">
            <i class="fas fa-arrow-left text-xs"></i>
            <span>← Back to Articles</span>
          </button>
          <button onclick="ScaleNovaModals.close('blogArticleModal')" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition" aria-label="Close Article">
            <i class="fas fa-times text-xs"></i>
          </button>
        </div>

        <!-- Article Header -->
        <div class="space-y-2">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700">
            <i class="${blog.icon} mr-1"></i> ${blog.category}
          </span>

          <h1 class="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">${blog.title}</h1>

          <div class="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
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

        <!-- Related Articles & Social Sharing -->
        <div class="pt-5 border-t border-slate-200 dark:border-slate-800 space-y-4">
          
          <!-- Share Links -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs">
            <span class="font-bold text-slate-700 dark:text-slate-300">Share this guide:</span>
            <div class="flex items-center gap-2.5">
              <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + ' ' + window.location.href)}" target="_blank" rel="noopener noreferrer" class="px-3 py-1 rounded-lg bg-emerald-500 text-white font-bold flex items-center gap-1.5 hover:bg-emerald-600 transition" aria-label="Share on WhatsApp">
                <i class="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" target="_blank" rel="noopener noreferrer" class="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold flex items-center gap-1.5 hover:bg-blue-700 transition" aria-label="Share on LinkedIn">
                <i class="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <!-- Related Reads -->
          <div class="space-y-2.5">
            <h4 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Related Reading</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${relatedBlogs.map(r => `
                <div class="sn-card p-3 space-y-1 cursor-pointer hover:border-brand-500/40 transition" onclick="ScaleNovaModals.openBlogArticle('${r.id}')">
                  <span class="text-[9px] font-bold text-brand-600 dark:text-brand-400">${r.category}</span>
                  <h5 class="text-xs font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">${r.title}</h5>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Demo CTA -->
          <div class="p-4 rounded-xl bg-gradient-to-r from-brand-500/10 via-brand-500/5 to-transparent border border-brand-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div class="space-y-0.5 text-center sm:text-left">
              <h4 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white">Ready to Unify Your Business Operations?</h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-400">Discover how ScaleNova unifies CRM, ERP, and operations into one connected system.</p>
            </div>
            <button onclick="ScaleNovaModals.close('blogArticleModal'); ScaleNovaModals.openDemoModal();" class="px-4 py-2 rounded-xl text-xs sn-btn-primary flex-shrink-0">
              Book a Demo
            </button>
          </div>

        </div>

      </div>
    `;

    open('blogArticleModal');
  }

  /* ==========================================================================
     6. CENTERED FEATURE DETAIL MODAL
     ========================================================================== */
  function openFeatureDetail(featureId) {
    const feature = SCALENOVA_FEATURES.find(f => f.id === featureId);
    if (!feature) return;

    const modal = document.getElementById('featureDetailModal');
    const contentContainer = document.getElementById('featureDetailContent');
    if (!modal || !contentContainer) return;

    modal.dataset.hash = `feature/${feature.slug}`;

    contentContainer.innerHTML = `
      <div class="p-5 sm:p-7 space-y-5">
        <!-- Sticky Header with Prominent Close Button -->
        <div class="flex items-start justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
          <div class="space-y-1 pr-3">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700 uppercase tracking-wider">
              <i class="${feature.icon}"></i> ${feature.badge}
            </span>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">${feature.title}</h2>
            <p class="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400">${feature.fullDetails.headline}</p>
          </div>
          <button onclick="ScaleNovaModals.close('featureDetailModal')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-500" aria-label="Close Feature Details">
            <i class="fas fa-times text-sm"></i>
          </button>
        </div>

        <!-- Overview: What It Does & How It Works -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div class="sn-card p-3.5 sm:p-4 space-y-1">
            <h4 class="text-[10px] font-black uppercase tracking-wider text-slate-400">Overview &amp; Scope</h4>
            <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">${feature.fullDetails.whatItDoes}</p>
          </div>
          <div class="sn-card p-3.5 sm:p-4 space-y-1">
            <h4 class="text-[10px] font-black uppercase tracking-wider text-slate-400">How It Works</h4>
            <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">${feature.fullDetails.howItWorks}</p>
          </div>
        </div>

        <!-- Problems Solved -->
        <div class="space-y-2">
          <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <i class="fas fa-triangle-exclamation text-amber-500"></i> Common Business Problems Solved
          </h3>
          <div class="grid grid-cols-1 gap-1.5">
            ${feature.fullDetails.problemsSolved.map(prob => `
              <div class="flex items-start gap-2 p-2.5 rounded-xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 text-xs font-medium text-slate-700 dark:text-slate-300">
                <i class="fas fa-xmark text-red-500 mt-0.5 text-[11px]"></i>
                <span>${prob}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Key Benefits -->
        <div class="space-y-2">
          <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <i class="fas fa-circle-check text-emerald-500"></i> Key Operational Benefits
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${feature.fullDetails.mainBenefits.map(benefit => `
              <div class="flex items-start gap-2 p-2.5 rounded-xl sn-card text-xs font-medium text-slate-700 dark:text-slate-300">
                <i class="fas fa-check text-emerald-500 mt-0.5 text-[11px]"></i>
                <span>${benefit}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Workflow & Automation -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div class="sn-card p-3.5 space-y-1.5 bg-gradient-to-br from-brand-50/40 to-white dark:from-slate-900/90 dark:to-slate-900">
            <h4 class="text-[10px] font-black uppercase tracking-wider text-brand-600 dark:text-brand-400 flex items-center gap-1">
              <i class="fas fa-bolt"></i> Automation Opportunities
            </h4>
            <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-300 font-medium">
              ${feature.fullDetails.automationOpportunities.map(auto => `
                <li class="flex items-start gap-1.5">
                  <i class="fas fa-arrow-right text-[9px] text-brand-500 mt-1"></i>
                  <span>${auto}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="sn-card p-3.5 space-y-1.5 bg-gradient-to-br from-blue-50/40 to-white dark:from-slate-900/90 dark:to-slate-900">
            <h4 class="text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1">
              <i class="fas fa-chart-line"></i> How It Scales an MSME
            </h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">${feature.fullDetails.msmeScalingImpact}</p>
            <div class="pt-1 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400">
              <strong>Workflow:</strong> ${feature.fullDetails.exampleWorkflow}
            </div>
          </div>
        </div>

        <!-- CTA Footer -->
        <div class="pt-3.5 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span class="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left font-medium">Want to see ${feature.title} in action?</span>
          <button onclick="ScaleNovaModals.close('featureDetailModal'); ScaleNovaModals.openDemoModal();" class="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sn-btn-primary flex items-center justify-center gap-2">
            <i class="fas fa-play text-[10px]"></i>
            <span>Book a Demo</span>
          </button>
        </div>
      </div>
    `;

    open('featureDetailModal');
  }

  /* ==========================================================================
     7. CENTERED PLAN DETAIL MODAL
     ========================================================================== */
  function openPlanDetail(planId) {
    const plan = SCALENOVA_PLANS.find(p => p.id === planId);
    if (!plan) return;

    const modal = document.getElementById('planDetailModal');
    const contentContainer = document.getElementById('planDetailContent');
    if (!modal || !contentContainer) return;

    modal.dataset.hash = `plan/${plan.id}`;

    contentContainer.innerHTML = `
      <div class="p-5 sm:p-7 space-y-5">
        <!-- Header -->
        <div class="flex items-start justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
          <div class="space-y-1 pr-3">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700 uppercase tracking-wider">
              ${plan.badge}
            </span>
            <div class="flex items-baseline gap-2">
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">${plan.name}</h2>
              <span class="text-sm sm:text-base font-black text-brand-600 dark:text-brand-400">${plan.monthlyPriceFormatted} <span class="text-[10px] font-normal text-slate-500">+ GST / mo</span></span>
            </div>
            <p class="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">${plan.headline}</p>
          </div>
          <button onclick="ScaleNovaModals.close('planDetailModal')" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-500" aria-label="Close Plan Details">
            <i class="fas fa-times text-sm"></i>
          </button>
        </div>

        <!-- Target Business Profile -->
        <div class="sn-card p-3.5 space-y-1 bg-gradient-to-r from-brand-50/40 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
          <div class="flex items-center justify-between">
            <h4 class="text-[10px] font-black uppercase tracking-wider text-brand-600 dark:text-brand-400">Target Business Profile</h4>
            <span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-brand-500/10 text-brand-600 dark:text-brand-400">${plan.userCapacity}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">${plan.targetAudience}</p>
        </div>

        <!-- Included Functions -->
        <div class="space-y-2">
          <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <i class="fas fa-layer-group text-brand-500"></i> Main Included Functions
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${plan.mainIncludedFunctions.map(func => `
              <div class="flex items-start gap-2 p-2.5 rounded-xl sn-card text-xs font-medium text-slate-700 dark:text-slate-300">
                <i class="fas fa-check text-emerald-500 mt-0.5 text-[11px]"></i>
                <span>${func}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Onboarding Roadmap -->
        <div class="space-y-2">
          <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <i class="fas fa-route text-blue-500"></i> Expected Setup Journey
          </h3>
          <div class="space-y-1.5">
            ${plan.setupJourney.map((step, idx) => `
              <div class="flex items-start gap-2.5 p-2.5 rounded-xl sn-card">
                <div class="w-5 h-5 rounded-md sn-gradient-bg text-white font-black text-[10px] flex items-center justify-center flex-shrink-0">
                  ${idx + 1}
                </div>
                <div class="space-y-0.5">
                  <h4 class="text-xs font-extrabold text-slate-900 dark:text-white">${step.step}</h4>
                  <p class="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${step.detail}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Training & Support -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div class="sn-card p-3.5 space-y-1">
            <h4 class="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <i class="fas fa-graduation-cap"></i> Training Included
            </h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">${plan.trainingIncluded}</p>
          </div>
          <div class="sn-card p-3.5 space-y-1">
            <h4 class="text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1">
              <i class="fas fa-headset"></i> Support Scope
            </h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">${plan.supportIncluded}</p>
          </div>
        </div>

        <!-- CTA Footer -->
        <div class="pt-3.5 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">Annual option: 12 months for price of 10</span>
          <button onclick="ScaleNovaModals.close('planDetailModal'); ScaleNovaModals.openDemoModal();" class="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sn-btn-primary flex items-center justify-center gap-2">
            <i class="fas fa-calendar-check"></i>
            <span>Book a Demo</span>
          </button>
        </div>
      </div>
    `;

    open('planDetailModal');
  }

  // Open Live Demo trigger
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

  /* ==========================================================================
     8. HASH ROUTER LISTENER (BROWSER BACK/FORWARD & DEEP LINKS)
     ========================================================================== */
  function handleHashChange() {
    const hash = window.location.hash.slice(1);
    if (!hash || hash === 'home' || hash === 'hero') {
      // Close any open overlays
      const openModals = document.querySelectorAll('.sn-modal-backdrop.active, .sn-drawer-backdrop.active, .sn-spa-backdrop.active');
      openModals.forEach(m => m.classList.remove('active'));
      document.body.style.overflow = '';
      document.title = originalDocTitle;
      return;
    }

    if (hash === 'careers') {
      openCareersPage();
    } else if (hash.startsWith('careers/')) {
      const roleId = hash.replace('careers/', '');
      openRoleDetail(roleId);
    } else if (hash === 'careers-apply') {
      openCareerApp('General Application');
    } else if (hash === 'affiliate' || hash === 'affiliate-programme') {
      openAffiliatePage();
    } else if (hash === 'blog' || hash === 'articles' || hash === 'insights') {
      openBlogAllArticles();
    } else if (hash.startsWith('blog/')) {
      const slug = hash.replace('blog/', '');
      openBlogArticle(slug);
    } else if (hash.startsWith('feature/')) {
      const slug = hash.replace('feature/', '');
      const feature = SCALENOVA_FEATURES.find(f => f.slug === slug || f.id === slug);
      if (feature) openFeatureDetail(feature.id);
    } else if (hash.startsWith('plan/')) {
      const planId = hash.replace('plan/', '');
      openPlanDetail(planId);
    } else if (hash === 'demo') {
      openDemoModal();
    }
  }

  // Initialize Listeners
  function init() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && activeModalId) {
        close(activeModalId);
      }
    });

    window.addEventListener('hashchange', handleHashChange);
    setTimeout(handleHashChange, 250);
  }

  return {
    init,
    open,
    close,
    goBackOrClose,
    openCareersPage,
    openRoleDetail,
    openCareerApp,
    openAffiliatePage,
    openBlogAllArticles,
    openBlogArticle,
    openFeatureDetail,
    openPlanDetail,
    openDemoModal
  };
})();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ScaleNovaModals.init);
} else {
  ScaleNovaModals.init();
}
