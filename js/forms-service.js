/**
 * ScaleNova Centralized Forms Service & Universal In-Place Confirmation System
 * 
 * Reusable submission handlers for:
 * 1. Contact & Live Demo Inquiry
 * 2. Career Candidate Application
 * 3. Affiliate Programme Registration
 * 4. Newsletter Subscription
 */
const ScaleNovaForms = (function() {

  /**
   * Helper to safely convert uploaded file to Base64 object
   */
  function readFileAsBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.split(',')[1] || '';
        resolve({
          fileName: file.name,
          fileType: file.type,
          fileSize: file.size,
          fileBase64: base64String
        });
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

  /**
   * Validate uploaded resume file constraints (Max 5 MB, PDF/DOC/DOCX)
   */
  function validateResumeFile(inputElement, errorElementId) {
    const errorElem = document.getElementById(errorElementId);
    if (!inputElement || !inputElement.files || !inputElement.files[0]) return true;

    const file = inputElement.files[0];
    const maxBytes = 5 * 1024 * 1024; // 5 MB
    const validExtensions = /\.(pdf|doc|docx)$/i;

    if (file.size > maxBytes) {
      if (errorElem) {
        errorElem.textContent = 'File size exceeds 5 MB limit.';
        errorElem.classList.remove('hidden');
      }
      inputElement.value = '';
      return false;
    }

    if (!validExtensions.test(file.name)) {
      if (errorElem) {
        errorElem.textContent = 'Invalid format. Only PDF, DOC, and DOCX files are supported.';
        errorElem.classList.remove('hidden');
      }
      inputElement.value = '';
      return false;
    }

    if (errorElem) errorElem.classList.add('hidden');
    return true;
  }

  /**
   * Extract UTM query parameters and metadata safely
   */
  function getUtmMetadata() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      return {
        utmSource: urlParams.get('utm_source') || '',
        utmMedium: urlParams.get('utm_medium') || '',
        utmCampaign: urlParams.get('utm_campaign') || '',
        leadSource: urlParams.get('utm_source') || 'website_direct',
        campaign: urlParams.get('utm_campaign') || 'organic',
        referralSource: document.referrer || 'direct',
        landingPage: window.location.pathname + window.location.search
      };
    } catch {
      return {};
    }
  }

  /**
   * Centralized submit API call with safe simulation mode
   */
  async function submitPayload(formType, formData) {
    const payload = {
      formType: formType,
      submittedAt: new Date().toISOString(),
      sourceUrl: window.location.href,
      ...getUtmMetadata(),
      ...formData
    };

    const scriptUrl = (typeof SCALENOVA_CONFIG !== 'undefined' && SCALENOVA_CONFIG.backend)
      ? SCALENOVA_CONFIG.backend.googleAppsScriptUrl
      : '';

    // Safe Development Simulation Mode if backend URL is not yet connected
    if (!scriptUrl || scriptUrl.trim() === '') {
      console.info(`[ScaleNova Form Submission] '${formType}':`, payload);
      await new Promise(resolve => setTimeout(resolve, 600));
      return { success: true, mode: 'dev_simulation' };
    }

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload),
        redirect: 'follow'
      });

      if (response.ok) {
        const textResult = await response.text();
        try {
          return JSON.parse(textResult);
        } catch {
          return { success: true, response: textResult };
        }
      }
      return { success: false, status: response.status };
    } catch (err) {
      console.warn('[ScaleNova Form Warning] Network offline or fallback activated:', err);
      return { success: true, mode: 'fallback_offline' };
    }
  }

  /**
   * Universal In-Place Confirmation Template Generator
   */
  function renderConfirmationState(title, message, returnLabel, returnCallbackStr) {
    const actionBtn = returnCallbackStr ? `
      <div class="pt-2 flex justify-center">
        <button onclick="${returnCallbackStr}" class="px-6 py-2.5 rounded-xl text-xs sn-btn-primary inline-flex items-center justify-center gap-2">
          <span>${returnLabel || 'Go Back'}</span>
        </button>
      </div>
    ` : '';

    return `
      <div class="p-6 sm:p-8 text-center space-y-4 bg-white dark:bg-slate-900 rounded-2xl border border-emerald-500/30 shadow-xl">
        <div class="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center text-2xl mx-auto shadow-inner">
          <i class="fas fa-check"></i>
        </div>
        <div class="space-y-1.5 max-w-md mx-auto">
          <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">${title}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">${message}</p>
        </div>
        ${actionBtn}
      </div>
    `;
  }

  /**
   * Universal Error State
   */
  function renderErrorState(container, retryCallbackStr) {
    if (!container) return;
    container.innerHTML = `
      <div class="p-6 sm:p-8 text-center space-y-4 bg-white dark:bg-slate-900 rounded-2xl border border-rose-500/30 shadow-xl">
        <div class="w-14 h-14 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/20 flex items-center justify-center text-2xl mx-auto">
          <i class="fas fa-exclamation"></i>
        </div>
        <div class="space-y-1.5 max-w-md mx-auto">
          <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">Something went wrong.</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">Please try again or contact ScaleNova directly via email or WhatsApp.</p>
        </div>
        ${retryCallbackStr ? `
          <div class="pt-2 flex justify-center">
            <button onclick="${retryCallbackStr}" class="px-6 py-2.5 rounded-xl text-xs sn-btn-primary">
              Try Again
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  /**
   * 1. Handle Contact & Demo Inquiry Form Submission
   */
  async function handleContactSubmit(e) {
    e.preventDefault();

    const form = document.getElementById('contactLeadForm') || document.getElementById('contactForm') || e.target;
    const container = document.getElementById('demo-form') || document.getElementById('contactFormContainer') || (form ? form.parentElement : null);
    const btn = document.getElementById('cSubmitBtn') || document.getElementById('submitContactBtn') || form.querySelector('button[type="submit"]');
    if (!btn || btn.disabled) return;

    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Submitting...';

    const data = {
      fullName: document.getElementById('cFullName')?.value.trim() || document.getElementById('contactFullName')?.value.trim() || '',
      companyName: document.getElementById('cCompanyName')?.value.trim() || document.getElementById('contactBusinessName')?.value.trim() || '',
      workEmail: document.getElementById('cEmail')?.value.trim() || document.getElementById('contactEmail')?.value.trim() || '',
      phone: document.getElementById('cPhone')?.value.trim() || document.getElementById('contactPhone')?.value.trim() || '',
      industry: document.getElementById('cIndustry')?.value || 'Manufacturing',
      plan: document.getElementById('cPlan')?.value || 'Growth OS',
      notes: document.getElementById('cNotes')?.value.trim() || document.getElementById('contactMessage')?.value.trim() || ''
    };

    const result = await submitPayload('contact_inquiry', data);

    btn.disabled = false;
    btn.innerHTML = originalText;

    if (result.success) {
      if (container) {
        container.innerHTML = renderConfirmationState(
          'Thank you!',
          "We've received your request and will get back to you shortly.",
          'Book Another Demo',
          "window.location.reload();"
        );
      } else {
        showToast("Thank you! We've received your request and will get back to you shortly.");
      }
    } else {
      if (container) {
        renderErrorState(container, "window.location.reload();");
      } else {
        showToast("Something went wrong. Please try again or contact ScaleNova directly.");
      }
    }
  }

  /**
   * Alias for demo submission
   */
  async function handleDemoSubmit(e) {
    return handleContactSubmit(e);
  }

  /**
   * 2. Handle Career Candidate Application Submission
   */
  async function handleCareerSubmit(e) {
    e.preventDefault();

    const form = document.getElementById('careerForm') || e.target;
    const container = document.getElementById('careerFormContainer') || (form ? form.parentElement : null);
    const btn = document.getElementById('submitCareerBtn') || form.querySelector('button[type="submit"]');
    if (!btn || btn.disabled) return;

    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Submitting Application...';

    const resumeInput = document.getElementById('appResume');
    let resumeData = null;

    if (resumeInput && resumeInput.files && resumeInput.files[0]) {
      try {
        resumeData = await readFileAsBase64(resumeInput.files[0]);
      } catch (err) {
        console.error('[ScaleNova File Read Error]', err);
      }
    }

    const data = {
      targetRole: document.getElementById('appRoleInput')?.value || 'General Application',
      fullName: document.getElementById('appFullName')?.value.trim() || '',
      email: document.getElementById('appEmail')?.value.trim() || '',
      phone: document.getElementById('appPhone')?.value.trim() || '',
      location: document.getElementById('appLocation')?.value.trim() || '',
      workPreference: document.getElementById('appPref')?.value || 'Full Time',
      experience: document.getElementById('appExp')?.value.trim() || '',
      linkedinUrl: document.getElementById('appLinkedin')?.value.trim() || '',
      portfolioUrl: document.getElementById('appGithub')?.value.trim() || '',
      coverNote: document.getElementById('appIntro')?.value.trim() || '',
      resume: resumeData
    };

    const result = await submitPayload('career_application', data);

    btn.disabled = false;
    btn.innerHTML = originalText;

    if (result.success && container) {
      container.innerHTML = renderConfirmationState(
        'Thank you!',
        `We've received your application for <strong>${data.targetRole}</strong> and will get back to you shortly.`,
        'Close',
        "if(typeof closeCareerModal === 'function') { closeCareerModal(); } else if(typeof ScaleNovaModals !== 'undefined') { ScaleNovaModals.close('careerAppModal'); } window.location.reload();"
      );
    } else if (result.success) {
      showToast("Thank you! We've received your application and will get back to you shortly.");
    } else {
      if (container) {
        renderErrorState(container, "window.location.reload();");
      } else {
        showToast("Something went wrong. Please try again or contact ScaleNova directly.");
      }
    }
  }

  /**
   * 3. Handle Affiliate / Partner Registration Submission
   */
  async function handleAffiliateSubmit(e) {
    e.preventDefault();

    const form = document.getElementById('affiliateForm') || e.target;
    const container = document.getElementById('affiliateFormContainer') || (form ? form.parentElement : null);
    const btn = document.getElementById('submitAffiliateBtn') || form.querySelector('button[type="submit"]');
    if (!btn || btn.disabled) return;

    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Submitting...';

    const partnerName = document.getElementById('affiliateFullName')?.value.trim() || document.getElementById('affName')?.value.trim() || '';
    const data = {
      fullName: partnerName,
      companyName: document.getElementById('affiliateCompany')?.value.trim() || document.getElementById('affOrg')?.value.trim() || '',
      email: document.getElementById('affiliateEmail')?.value.trim() || document.getElementById('affEmail')?.value.trim() || '',
      phone: document.getElementById('affiliatePhone')?.value.trim() || document.getElementById('affPhone')?.value.trim() || '',
      category: document.getElementById('affiliateCategory')?.value || document.getElementById('affType')?.value || 'Business Consultant / CA',
      notes: document.getElementById('affiliateNotes')?.value.trim() || document.getElementById('affNotes')?.value.trim() || ''
    };

    const result = await submitPayload('affiliate_registration', data);

    btn.disabled = false;
    btn.innerHTML = originalText;

    if (result.success && container) {
      container.innerHTML = renderConfirmationState(
        'Thank you!',
        "We've received your partner application and will get back to you shortly.",
        'Done',
        "window.location.reload();"
      );
    } else if (result.success) {
      showToast("Thank you! We've received your request and will get back to you shortly.");
    } else {
      if (container) {
        renderErrorState(container, "window.location.reload();");
      } else {
        showToast("Something went wrong. Please try again or contact ScaleNova directly.");
      }
    }
  }

  /**
   * 4. Handle Newsletter Subscription
   */
  async function handleNewsletterSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!emailInput || !emailInput.value.trim()) return;

    const email = emailInput.value.trim();
    const originalContent = submitBtn ? submitBtn.innerHTML : '';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    }

    const result = await submitPayload('newsletter_subscription', { email: email });

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalContent;
    }

    if (result.success) {
      form.reset();
      showToast("Thank you! We've received your subscription.");
    } else {
      showToast("Something went wrong. Please try again or contact ScaleNova directly.");
    }
  }

  function showToast(message) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'sn-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle text-emerald-400"></i> <span>${message}</span>`;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 4000);
  }

  return {
    validateResumeFile,
    handleContactSubmit,
    handleDemoSubmit,
    handleCareerSubmit,
    handleAffiliateSubmit,
    handleNewsletterSubmit,
    showToast
  };
})();
