/**
 * ScaleNova Main Application Bootstrap (SPA & Responsive Engine)
 * 
 * Manages theme switching, mobile drawer navigation, concise visual homepage rendering,
 * and deep-content SPA triggers.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Mode Switcher
  const themeToggleBtn = document.getElementById('themeToggle');
  
  function applyTheme(theme) {
    const html = document.documentElement;
    const icon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    
    if (theme === 'light') {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      if (icon) icon.className = 'fas fa-moon text-xs';
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      if (icon) icon.className = 'fas fa-sun text-xs';
    }
  }

  // Initialize theme from storage or default to dark
  if (localStorage.theme === 'light') {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      applyTheme(isDark ? 'light' : 'dark');
    });
  }

  // 2. Mobile Menu Drawer
  window.toggleMobileSidebar = function() {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('mobileSidebarOverlay');
    if (!sidebar || !overlay) return;

    const isClosed = sidebar.classList.contains('translate-x-full');
    if (isClosed) {
      sidebar.classList.remove('translate-x-full');
      overlay.classList.remove('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
    } else {
      sidebar.classList.add('translate-x-full');
      overlay.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }
  };

  // 3. Render 8 Connected Business Module Cards (Colourful, Minimal & Premium Layout)
  const featuresContainer = document.getElementById('featuresGridContainer');
  if (featuresContainer && typeof SCALENOVA_FEATURES !== 'undefined') {
    featuresContainer.innerHTML = SCALENOVA_FEATURES.map(f => {
      const workflowItems = (f.workflow || []).map((step, idx) => `
        <span class="inline-flex items-center">
          <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60">${step}</span>
          ${idx < f.workflow.length - 1 ? '<i class="fas fa-chevron-right text-[8px] mx-1 text-slate-400"></i>' : ''}
        </span>
      `).join('');

      return `
        <div class="sn-card sn-card-hover p-4 sm:p-5 flex flex-col justify-between group cursor-pointer bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 ${f.borderClass || ''}" onclick="ScaleNovaModals.openFeatureDetail('${f.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')ScaleNovaModals.openFeatureDetail('${f.id}')" aria-label="View ${f.title} Details">
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${f.bgClass || 'bg-brand-500/10 text-brand-500'} flex items-center justify-center text-sm sm:text-base flex-shrink-0 group-hover:scale-105 transition-transform">
                <i class="${f.icon}"></i>
              </div>
              <h3 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white tracking-tight leading-snug">${f.title}</h3>
            </div>
            
            <p class="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              ${f.shortSummary}
            </p>

            <div class="pt-1.5 flex items-center flex-wrap gap-y-1">
              ${workflowItems}
            </div>
          </div>

          <div class="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold ${f.textClass || 'text-brand-600 dark:text-brand-400'} group-hover:opacity-90 transition-colors">
            <span>View Details</span>
            <i class="fas fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </div>
      `;
    }).join('');
  }

  // 4. Network Offline/Online Listener
  window.addEventListener('offline', () => ScaleNovaModals.open('offlineModal'));
});


