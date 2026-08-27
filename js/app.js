/**
 * ScaleNova Main Application Bootstrap (Refined UX & Single-Action Cards)
 * 
 * Manages theme switching, mobile drawer navigation, concise homepage rendering,
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

  // 3. Render 6 Concise Feature Cards with EXACTLY ONE CTA (View Details)
  const featuresContainer = document.getElementById('featuresGridContainer');
  if (featuresContainer && typeof SCALENOVA_FEATURES !== 'undefined') {
    featuresContainer.innerHTML = SCALENOVA_FEATURES.map(f => `
      <div class="sn-card sn-card-hover p-5 sm:p-6 flex flex-col justify-between group cursor-pointer" onclick="ScaleNovaModals.openFeatureDetail('${f.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')ScaleNovaModals.openFeatureDetail('${f.id}')" aria-label="View ${f.title} Details">
        <div class="space-y-3">
          <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
            <i class="${f.icon}"></i>
          </div>

          <h3 class="font-black text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">${f.title}</h3>
          
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            ${f.shortSummary}
          </p>
        </div>

        <div class="pt-3.5 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-brand-600 dark:text-brand-400 group-hover:text-brand-500 transition-colors">
          <span>View Details</span>
          <i class="fas fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    `).join('');
  }

  // 4. Render 3 Blog Preview Cards on Homepage
  const blogContainer = document.getElementById('blogGridContainer');
  if (blogContainer && typeof SCALENOVA_BLOGS !== 'undefined') {
    const previewBlogs = SCALENOVA_BLOGS.slice(0, 3);
    blogContainer.innerHTML = previewBlogs.map(b => `
      <article class="sn-card sn-card-hover p-5 sm:p-6 flex flex-col justify-between group cursor-pointer" onclick="ScaleNovaModals.openBlogArticle('${b.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')ScaleNovaModals.openBlogArticle('${b.id}')" aria-label="Read ${b.title}">
        <div class="space-y-3">
          <div class="flex items-center justify-between text-xs">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700">
              <i class="${b.icon} mr-1"></i> ${b.category}
            </span>
            <span class="text-slate-400 font-medium text-[11px]">${b.readingTime}</span>
          </div>

          <h3 class="font-black text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors leading-snug">${b.title}</h3>
          
          <p class="text-xs text-slate-600 dark:text-slate-400 font-medium line-clamp-2 leading-relaxed">
            ${b.excerpt}
          </p>
        </div>

        <div class="pt-3.5 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-brand-500 transition-colors">
          <span>Read Article</span>
          <i class="fas fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
        </div>
      </article>
    `).join('');
  }

  // 5. Network Offline/Online Listener
  window.addEventListener('offline', () => ScaleNovaModals.open('offlineModal'));
});
