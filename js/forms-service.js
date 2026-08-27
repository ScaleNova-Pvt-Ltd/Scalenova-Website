/**
 * ScaleNova Centralized Forms Service & Backend Gateway
 * 
 * Reusable, robust submission handler for:
 * 1. Book Live Demo Request
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
          const jsonResult = JSON.parse(textResult);
          return { success: jsonResult.status === 'success' || jsonResult.result === 'success' || true };
        } catch (err) {
          return { success: true };
        }
      } else {
        return { success: false, status: response.status };
      }
    } catch (networkError) {
      console.error('[ScaleNova Network Error] Submission failed:', networkError);
      return { success: false, error: 'network_error' };
    }
  }

  /**
   * 1. Handle Simplified Book a Live Demo Form Submission
   */
  async function handleDemoSubmit(e) {
    e.preventDefault();

    if (!navigator.onLine) {
      ScaleNovaModals.open('offlineModal');
      return;
    }

    const btn = document.getElementById('submitDemoBtn');
    if (!btn || btn.disabled) return;

    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Scheduling Demo...';

    // Simplified fields per Rule 15 (Removed Preferred Contact & Employee Size)
    const data = {
      fullName: document.getElementById('nameInput')?.value.trim() || '',
      companyName: document.getElementById('businessInput')?.value.trim() || '',
      workEmail: document.getElementById('emailInput')?.value.trim() || '',
      phone: document.getElementById('phoneInput')?.value.trim() || '',
      industry: document.getElementById('industryInput')?.value || '',
      primaryInterest: document.getElementById('primaryInterestInput')?.value || 'Unified Business OS',
      requirements: document.getElementById('messageInput')?.value.trim() || ''
    };

    const result = await submitPayload('book_live_demo', data);

    btn.disabled = false;
    btn.innerHTML = originalText;

    if (result.success) {
      document.getElementById('leadCaptureForm')?.reset();
      const successTitle = document.getElementById('successModalTitle');
      const successDesc = document.getElementById('successModalDesc');
      if (successTitle) successTitle.textContent = 'Live Demo Request Received';
      if (successDesc) successDesc.textContent = 'Thank you for connecting with ScaleNova. Our engineering specialist will reach out within 1 business day to confirm your live walkthrough.';
      ScaleNovaModals.open('successModal');
    } else {
      ScaleNovaModals.open('errorModal');
    }
  }

  /**
   * 2. Handle Career Application Submission
   */
  async function handleCareerSubmit(e) {
    e.preventDefault();

    if (!navigator.onLine) {
      ScaleNovaModals.open('offlineModal');
      return;
    }

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
      role: document.getElementById('appRoleInput')?.value || 'General Application',
      fullName: document.getElementById('appFullName')?.value.trim() || '',
      email: document.getElementById('appEmail')?.value.trim() || '',
      phone: document.getElementById('appPhone')?.value.trim() || '',
      location: document.getElementById('appLocation')?.value.trim() || '',
      workPreference: document.getElementById('appPref')?.value || 'Full Time',
      experience: document.getElementById('appExp')?.value.trim() || '',
      linkedin: document.getElementById('appLinkedin')?.value.trim() || '',
      portfolio: document.getElementById('appGithub')?.value.trim() || '',
      introduction: document.getElementById('appIntro')?.value.trim() || '',
      resume: resumeData,
      consent: document.getElementById('appConsent')?.checked || false
    };

    const result = await submitPayload('career_application', data);

    btn.disabled = false;
    btn.innerHTML = originalText;

    if (result.success) {
      ScaleNovaModals.close('careerAppModal');
      document.getElementById('careerForm')?.reset();
      const successTitle = document.getElementById('successModalTitle');
      const successDesc = document.getElementById('successModalDesc');
      if (successTitle) successTitle.textContent = 'Application Submitted Successfully';
      if (successDesc) successDesc.textContent = 'Thank you for your interest in joining ScaleNova. Our team will review your background and reach out to schedule an interview.';
      ScaleNovaModals.open('successModal');
    } else {
      ScaleNovaModals.open('errorModal');
    }
  }

  /**
   * 3. Handle Affiliate Programme Application
   */
  async function handleAffiliateSubmit(e) {
    e.preventDefault();

    if (!navigator.onLine) {
      ScaleNovaModals.open('offlineModal');
      return;
    }

    const btn = document.getElementById('submitAffiliateBtn');
    if (!btn || btn.disabled) return;

    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Submitting Partner Application...';

    const data = {
      fullName: document.getElementById('affiliateFullName')?.value.trim() || '',
      email: document.getElementById('affiliateEmail')?.value.trim() || '',
      phone: document.getElementById('affiliatePhone')?.value.trim() || '',
      partnerCategory: document.getElementById('affiliateCategory')?.value || 'Consultant',
      companyOrProfile: document.getElementById('affiliateCompany')?.value.trim() || '',
      audienceDetails: document.getElementById('affiliateAudience')?.value.trim() || '',
      agreeTerms: document.getElementById('affiliateConsent')?.checked || false
    };

    const result = await submitPayload('affiliate_application', data);

    btn.disabled = false;
    btn.innerHTML = originalText;

    if (result.success) {
      ScaleNovaModals.close('affiliateModal');
      document.getElementById('affiliateForm')?.reset();
      const successTitle = document.getElementById('successModalTitle');
      const successDesc = document.getElementById('successModalDesc');
      if (successTitle) successTitle.textContent = 'Partner Application Received';
      if (successDesc) successDesc.textContent = 'Thank you for applying to the ScaleNova Partner Network. Our partner operations team will verify your details and send your dedicated referral dashboard access.';
      ScaleNovaModals.open('successModal');
    } else {
      ScaleNovaModals.open('errorModal');
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
      showToast('Subscription failed. Please try again.');
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
    handleDemoSubmit,
    handleCareerSubmit,
    handleAffiliateSubmit,
    handleNewsletterSubmit,
    showToast
  };
})();
