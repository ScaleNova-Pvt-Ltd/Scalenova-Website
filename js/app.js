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

  // 3. Render 6 Concise Feature Cards (Icon-Left + Heading-Right Space-Optimized Layout)
  const featuresContainer = document.getElementById('featuresGridContainer');
  if (featuresContainer && typeof SCALENOVA_FEATURES !== 'undefined') {
    featuresContainer.innerHTML = SCALENOVA_FEATURES.map(f => `
      <div class="sn-card sn-card-hover p-4 sm:p-5 flex flex-col justify-between group cursor-pointer" onclick="ScaleNovaModals.openFeatureDetail('${f.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')ScaleNovaModals.openFeatureDetail('${f.id}')" aria-label="View ${f.title} Details">
        <div class="space-y-2.5">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center text-base flex-shrink-0 group-hover:scale-105 transition-transform">
              <i class="${f.icon}"></i>
            </div>
            <h3 class="font-black text-sm sm:text-base text-slate-900 dark:text-white tracking-tight leading-snug">${f.title}</h3>
          </div>
          
          <p class="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            ${f.shortSummary}
          </p>
        </div>

        <div class="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-brand-600 dark:text-brand-400 group-hover:text-brand-500 transition-colors">
          <span>View Details</span>
          <i class="fas fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    `).join('');
  }

  // 4. Render 3 Visual Blog Preview Cards on Homepage (Visual-First & Concise)
  const blogContainer = document.getElementById('blogGridContainer');
  if (blogContainer && typeof SCALENOVA_BLOGS !== 'undefined') {
    const previewBlogs = SCALENOVA_BLOGS.slice(0, 3);
    blogContainer.innerHTML = previewBlogs.map(b => `
      <article class="sn-card sn-card-hover overflow-hidden flex flex-col justify-between group cursor-pointer border border-slate-200 dark:border-slate-800" onclick="ScaleNovaModals.openBlogArticle('${b.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')ScaleNovaModals.openBlogArticle('${b.id}')" aria-label="Read ${b.title}">
        
        <!-- Visual Top Graphic Banner -->
        <div class="h-28 sm:h-32 bg-gradient-to-tr from-brand-900/30 via-slate-900/40 to-brand-600/20 relative flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-500/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
          <div class="w-12 h-12 rounded-2xl bg-white/90 dark:bg-slate-800/90 shadow-md flex items-center justify-center text-brand-600 dark:text-brand-400 text-xl group-hover:scale-110 transition-transform">
            <i class="${b.icon}"></i>
          </div>
          <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-slate-900/80 text-slate-300 backdrop-blur-sm">
            ${b.readingTime}
          </span>
        </div>

        <div class="p-4 sm:p-5 space-y-2 flex-grow flex flex-col justify-between">
          <div class="space-y-1.5">
            <span class="text-[10px] font-black uppercase tracking-wider text-brand-600 dark:text-brand-400">
              ${b.category}
            </span>
            <h3 class="font-black text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors leading-snug">
              ${b.title}
            </h3>
          </div>

          <div class="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-brand-500 transition-colors">
            <span>Read Article</span>
            <i class="fas fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </div>

      </article>
    `).join('');
  }

  // 5. Network Offline/Online Listener
  window.addEventListener('offline', () => ScaleNovaModals.open('offlineModal'));
});
