/**
 * ScaleNova Main Application Bootstrap
 * 
 * Manages theme switching, mobile drawer navigation, dynamic section rendering,
 * and intersection observer scroll animations.
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

  // 3. Render 6 Feature Bento Cards
  const featuresContainer = document.getElementById('featuresGridContainer');
  if (featuresContainer && typeof SCALENOVA_FEATURES !== 'undefined') {
    featuresContainer.innerHTML = SCALENOVA_FEATURES.map(f => `
      <div class="sn-card sn-card-hover p-6 md:p-8 flex flex-col justify-between group cursor-pointer" onclick="ScaleNovaModals.openFeatureDetail('${f.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')ScaleNovaModals.openFeatureDetail('${f.id}')" aria-label="Explore ${f.title} Details">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              <i class="${f.icon}"></i>
            </div>
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 group-hover:text-brand-500 transition-colors flex items-center gap-1">
              Explore <i class="fas fa-arrow-right text-[9px]"></i>
            </span>
          </div>

          <h3 class="font-black text-lg md:text-xl text-slate-900 dark:text-white tracking-tight">${f.title}</h3>
          
          <ul class="space-y-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            ${f.summary4Lines.map(line => `
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-brand-500 mt-1 text-[10px]"></i>
                <span>${line}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="pt-4 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-brand-600 dark:text-brand-400">
          <span>View Deep-Dive &amp; Workflows</span>
          <i class="fas fa-chevron-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    `).join('');
  }

  // 4. Render Careers Job Positions
  const careersContainer = document.getElementById('careersRoleContainer');
  if (careersContainer && typeof SCALENOVA_CAREERS !== 'undefined') {
    careersContainer.innerHTML = SCALENOVA_CAREERS.roles.map(r => `
      <div class="sn-card sn-card-hover p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div class="space-y-2">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700">
              ${r.department}
            </span>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              ${r.type}
            </span>
            <span class="text-xs text-slate-400 font-medium">
              <i class="fas fa-location-dot mr-1"></i> ${r.location}
            </span>
          </div>

          <h3 class="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight">${r.title}</h3>
          <p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">${r.overview}</p>
          
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${r.requiredSkills.slice(0, 3).map(skill => `
              <span class="px-2 py-0.5 rounded-md text-[11px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                ${skill.split(',')[0]}
              </span>
            `).join('')}
          </div>
        </div>

        <button onclick="ScaleNovaModals.openCareerModal('${r.title}')" class="px-5 py-2.5 rounded-xl text-xs sn-btn-primary flex-shrink-0 w-full md:w-auto flex items-center justify-center gap-2">
          <span>Apply Now</span>
          <i class="fas fa-arrow-right text-[10px]"></i>
        </button>
      </div>
    `).join('');
  }

  // 5. Render 8 Blog Articles
  const blogContainer = document.getElementById('blogGridContainer');
  if (blogContainer && typeof SCALENOVA_BLOGS !== 'undefined') {
    blogContainer.innerHTML = SCALENOVA_BLOGS.map(b => `
      <article class="sn-card sn-card-hover p-6 flex flex-col justify-between group cursor-pointer" onclick="ScaleNovaModals.openBlogArticle('${b.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')ScaleNovaModals.openBlogArticle('${b.id}')" aria-label="Read ${b.title}">
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs">
            <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-slate-700">
              <i class="${b.icon} mr-1"></i> ${b.category}
            </span>
            <span class="text-slate-400 font-medium text-[11px]">${b.readingTime}</span>
          </div>

          <h3 class="font-black text-base md:text-lg text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors leading-snug">${b.title}</h3>
          
          <p class="text-xs text-slate-600 dark:text-slate-400 font-medium line-clamp-3 leading-relaxed">
            ${b.excerpt}
          </p>
        </div>

        <div class="pt-4 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-brand-500 transition-colors">
          <span>Read Full Article</span>
          <i class="fas fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
        </div>
      </article>
    `).join('');
  }

  // 6. Network Offline/Online Listener
  window.addEventListener('offline', () => ScaleNovaModals.open('offlineModal'));
});
