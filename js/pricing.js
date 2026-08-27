/**
 * ScaleNova Reactive Pricing Toggle Engine
 * 
 * Manages monthly vs. annual billing calculations, smooth state transitions,
 * and DOM updates with clear 2-months-free discount communication.
 */
const ScaleNovaPricing = (function() {
  let currentBillingCycle = 'monthly'; // 'monthly' | 'yearly'

  const plans = {
    core: {
      monthly: 3299,
      annual: 32990, // 3,299 * 10 (Save 2 months)
      annualMonthlyEquiv: 2749,
      elementIdPrice: 'price-core',
      elementIdSubtext: 'subtext-core',
      elementIdBillingNote: 'billing-note-core'
    },
    growth: {
      monthly: 11999,
      annual: 119990, // 11,999 * 10 (Save 2 months)
      annualMonthlyEquiv: 9999,
      elementIdPrice: 'price-growth',
      elementIdSubtext: 'subtext-growth',
      elementIdBillingNote: 'billing-note-growth'
    },
    elite: {
      monthly: 24599,
      annual: 245990, // 24,599 * 10 (Save 2 months)
      annualMonthlyEquiv: 20499,
      elementIdPrice: 'price-elite',
      elementIdSubtext: 'subtext-elite',
      elementIdBillingNote: 'billing-note-elite'
    }
  };

  function formatRupees(amount) {
    return '₹' + amount.toLocaleString('en-IN');
  }

  function setBillingCycle(cycle) {
    if (cycle !== 'monthly' && cycle !== 'yearly' && cycle !== 'annual') return;
    currentBillingCycle = (cycle === 'annual' || cycle === 'yearly') ? 'yearly' : 'monthly';

    // Update Toggle Controls
    const switchBtn = document.getElementById('billingSwitchBtn');
    const monthlyLabel = document.getElementById('billingLabelMonthly');
    const yearlyLabel = document.getElementById('billingLabelYearly');

    const isAnnual = currentBillingCycle === 'yearly';

    if (switchBtn) {
      switchBtn.setAttribute('aria-checked', isAnnual ? 'true' : 'false');
      if (isAnnual) {
        switchBtn.classList.add('active');
      } else {
        switchBtn.classList.remove('active');
      }
    }

    if (monthlyLabel && yearlyLabel) {
      if (isAnnual) {
        yearlyLabel.classList.add('active');
        monthlyLabel.classList.remove('active');
        yearlyLabel.setAttribute('aria-pressed', 'true');
        monthlyLabel.setAttribute('aria-pressed', 'false');
      } else {
        monthlyLabel.classList.add('active');
        yearlyLabel.classList.remove('active');
        monthlyLabel.setAttribute('aria-pressed', 'true');
        yearlyLabel.setAttribute('aria-pressed', 'false');
      }
    }

    // Update Plan Prices in DOM with smooth transition
    Object.keys(plans).forEach(planKey => {
      const plan = plans[planKey];
      const priceElem = document.getElementById(plan.elementIdPrice);
      const subtextElem = document.getElementById(plan.elementIdSubtext);
      const noteElem = document.getElementById(plan.elementIdBillingNote);

      if (priceElem) {
        priceElem.style.opacity = '0';
        priceElem.style.transform = 'translateY(-2px)';
        
        setTimeout(() => {
          if (currentBillingCycle === 'monthly') {
            priceElem.textContent = formatRupees(plan.monthly);
            if (subtextElem) subtextElem.textContent = ' + GST / month';
            if (noteElem) noteElem.textContent = 'Billed monthly. Cancel anytime.';
          } else {
            priceElem.textContent = formatRupees(plan.annual);
            if (subtextElem) subtextElem.textContent = ' + GST / year';
            if (noteElem) noteElem.textContent = `Billed annually (Save 2 Months: ${formatRupees(plan.annualMonthlyEquiv)}/mo equivalent)`;
          }
          priceElem.style.opacity = '1';
          priceElem.style.transform = 'translateY(0)';
        }, 120);
      }
    });
  }

  function toggleBillingCycle() {
    setBillingCycle(currentBillingCycle === 'monthly' ? 'yearly' : 'monthly');
  }

  function init() {
    const switchBtn = document.getElementById('billingSwitchBtn');
    const monthlyLabel = document.getElementById('billingLabelMonthly');
    const yearlyLabel = document.getElementById('billingLabelYearly');

    if (switchBtn) {
      switchBtn.addEventListener('click', toggleBillingCycle);
      switchBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleBillingCycle();
        }
      });
    }

    if (monthlyLabel) {
      monthlyLabel.addEventListener('click', () => setBillingCycle('monthly'));
    }
    if (yearlyLabel) {
      yearlyLabel.addEventListener('click', () => setBillingCycle('yearly'));
    }

    // Set initial default state
    setBillingCycle('monthly');
  }

  return {
    init,
    setBillingCycle,
    toggleBillingCycle,
    getBillingCycle: () => currentBillingCycle
  };
})();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ScaleNovaPricing.init);
} else {
  ScaleNovaPricing.init();
}
