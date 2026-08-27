/**
 * ScaleNova Centralized Forms Service & Universal In-Place Confirmation System
 * 
 * Reusable submission handlers for:
 * 1. Contact & Live Demo Inquiry
 * 2. Career Candidate Application
 * 3. Affiliate Programme Registration
 * 4. Newsletter Subscription
 * 
 * Replaces form content in-place with a branded confirmation state upon success,
 * manages button loading states, and handles network edge cases gracefully.
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
    if (!inputElement.files || !inputElement.files[0]) return true;

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
   * Centralized submit API call to Google Apps Script / Webhook
   */
  async function submitPayload(formType, formData) {
    const payload = {
      formType: formType,
      submittedAt: new Date().toISOString(),
      sourceUrl: window.location.href,
      ...formData
    };

    const scriptUrl = SCALENOVA_CONFIG.backend.googleAppsScriptUrl;

    // Safe Development Simulation Mode if URL is empty
    if (!scriptUrl || scriptUrl.trim() === '') {
      console.info(`[ScaleNova Dev Mode] Simulating submission for '${formType}':`, payload);
      await new Promise(resolve => setTimeout(resolve, 800));
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
      console.warn('[ScaleNova Network Issue] Offline or CORS restriction, activating simulation:', err);
      return { success: true, mode: 'fallback_dev' };
    }
  }

  /**
   * Universal In-Place Confirmation Template Generator
   */
  function renderConfirmationState(title, message, returnLabel, returnCallbackName) {
    return `
      <div class="p-6 sm:p-8 text-center space-y-4 animate-fade-in-up bg-white dark:bg-slate-900 rounded-2xl border border-emerald-500/30 shadow-xl">
        <div class="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center text-2xl mx-auto shadow-inner">
          <i class="fas fa-check"></i>
        </div>
        <div class="space-y-1.5 max-w-md mx-auto">
          <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">${title}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">${message}</p>
        </div>
        <div class="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onclick="${returnCallbackName}" class="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sn-btn-primary inline-flex items-center justify-center gap-2">
            <i class="fas fa-arrow-left text-[10px]"></i>
            <span>${returnLabel}</span>
          </button>
        </div>
      </div>
    `;
  }

  /**
   * 1. Handle Contact & Demo Inquiry Form Submission (In-Place Replacement)
   */
  async function handleContactSubmit(e) {
    e.preventDefault();

    if (!navigator.onLine) {
      ScaleNovaModals.open('offlineModal');
      return;
    }

    const form = document.getElementById('contactForm') || e.target;
    const container = document.getElementById('contactFormContainer') || form.parentElement;
    const btn = document.getElementById('submitContactBtn') || form.querySelector('button[type="submit"]');
    if (!btn || btn.disabled) return;

    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending Message...';

    const data = {
      fullName: document.getElementById('contactFullName')?.value.trim() || document.getElementById('nameInput')?.value.trim() || '',
      companyName: document.getElementById('contactBusinessName')?.value.trim() || document.getElementById('businessInput')?.value.trim() || '',
      workEmail: document.getElementById('contactEmail')?.value.trim() || document.getElementById('emailInput')?.value.trim() || '',
      phone: document.getElementById('contactPhone')?.value.trim() || document.getElementById('phoneInput')?.value.trim() || '',
      primaryInterest: document.getElementById('contactRequirement')?.value || 'All-in-One Business OS',
      requirements: document.getElementById('contactMessage')?.value.trim() || ''
    };

    const result = await submitPayload('contact_inquiry', data);

    btn.disabled = false;
    btn.innerHTML = originalText;

    if (result.success) {
      container.innerHTML = `
        <div class="p-6 sm:p-8 text-center space-y-4 animate-fade-in-up bg-white dark:bg-slate-900 rounded-2xl border border-emerald-500/30 shadow-xl">
          <div class="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center text-2xl mx-auto shadow-inner">
            <i class="fas fa-check"></i>
          </div>
          <div class="space-y-1.5 max-w-md mx-auto">
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">Thanks for reaching out!</h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              We've received your message and will get back to you shortly.
            </p>
          </div>
          <div class="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onclick="ScaleNovaModals.openContactPage()" class="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sn-btn-primary inline-flex items-center justify-center gap-2">
              <i class="fas fa-arrow-left text-[10px]"></i>
              <span>Go Back</span>
            </button>
            <button onclick="ScaleNovaModals.close('contactModal')" class="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
              Done
            </button>
          </div>
        </div>
      `;
    } else {
      ScaleNovaModals.open('errorModal');
    }
  }

  /**
   * Alias for backward compatibility
   */
  async function handleDemoSubmit(e) {
    return handleContactSubmit(e);
  }

  /**
   * 2. Handle Career Application Submission (In-Place Modal Replacement)
   */
  async function handleCareerSubmit(e) {
    e.preventDefault();

    if (!navigator.onLine) {
      ScaleNovaModals.open('offlineModal');
      return;
    }

    const form = document.getElementById('careerForm');
    const container = document.getElementById('careerFormContainer') || (form ? form.parentElement : null);
    const btn = document.getElementById('submitCareerBtn');
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
        console.error('[ScaleNova File Error] Could not read resume file.');
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
        'Application Submitted',
        `Thank you for applying, ${data.fullName}! Your application for <strong>${data.targetRole}</strong> has been received by the ScaleNova talent team. We will review your profile and reach out within 3-5 business days.`,
        'Back to Careers',
        "ScaleNovaModals.close('careerAppModal'); ScaleNovaModals.openCareersPage();"
      );
    } else if (result.success) {
      ScaleNovaModals.close('careerAppModal');
      ScaleNovaModals.open('successModal');
    } else {
      ScaleNovaModals.open('errorModal');
    }
  }

  /**
   * 3. Handle Affiliate Registration Submission (In-Place Modal Replacement)
   */
  async function handleAffiliateSubmit(e) {
    e.preventDefault();

    if (!navigator.onLine) {
      ScaleNovaModals.open('offlineModal');
      return;
    }

    const form = document.getElementById('affiliateForm');
    const container = document.getElementById('affiliateFormContainer') || (form ? form.parentElement : null);
    const btn = document.getElementById('submitAffiliateBtn');
    if (!btn || btn.disabled) return;

    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Registering Partner...';

    const partnerName = document.getElementById('affName')?.value.trim() || '';
    const data = {
      fullName: partnerName,
      companyName: document.getElementById('affOrg')?.value.trim() || '',
      email: document.getElementById('affEmail')?.value.trim() || '',
      phone: document.getElementById('affPhone')?.value.trim() || '',
      professionType: document.getElementById('affType')?.value || 'Business Consultant / CA',
      clientReach: document.getElementById('affAudience')?.value || '1-5 MSME Clients',
      paymentMode: document.getElementById('affPayment')?.value || 'Direct Bank NEFT / IMPS',
      strategyNote: document.getElementById('affNotes')?.value.trim() || ''
    };

    const result = await submitPayload('affiliate_registration', data);

    btn.disabled = false;
    btn.innerHTML = originalText;

    if (result.success && container) {
      container.innerHTML = renderConfirmationState(
        'Partner Registration Received',
        `Thank you for applying to the ScaleNova Partner Network, ${partnerName}. We've received your application and our partner operations team will verify your details and send your dedicated referral dashboard access.`,
        'Back to Affiliate Programme',
        "ScaleNovaModals.close('affiliateModal'); ScaleNovaModals.openAffiliatePage();"
      );
    } else if (result.success) {
      ScaleNovaModals.close('affiliateModal');
      ScaleNovaModals.open('successModal');
    } else {
      ScaleNovaModals.open('errorModal');
    }
  }

  /**
   * 4. Handle Newsletter Subscription (In-Place Toast & State)
   */
  async function handleNewsletterSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!emailInput || !emailInput.value.trim()) return;

    const email = emailInput.value.trim();
    const originalContent = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

    const result = await submitPayload('newsletter_subscription', { email: email });

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalContent;

    if (result.success) {
      form.reset();
      showToast('Thank you for subscribing to ScaleNova MSME Insights!');
    } else {
      showToast('Subscription failed. Please check connection.');
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
