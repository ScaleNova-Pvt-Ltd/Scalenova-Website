/**
 * ScaleNova Reactive Pricing Toggle Engine
 * 
 * Manages monthly vs. yearly billing calculations, smooth state transitions,
 * and DOM updates with clear 2-months-free discount communication.
 */
const ScaleNovaPricing = (function() {
  let currentBillingCycle = 'monthly'; // 'monthly' | 'yearly'

  const plans = {
    core: {
      monthly: 3299,
      annual: 32990, // 3,299 * 10
      annualMonthlyEquiv: 2749,
      elementIdPrice: 'price-core',
      elementIdSubtext: 'subtext-core',
      elementIdBillingNote: 'billing-note-core'
    },
    growth: {
      monthly: 11999,
      annual: 119990, // 11,999 * 10
      annualMonthlyEquiv: 9999,
      elementIdPrice: 'price-growth',
      elementIdSubtext: 'subtext-growth',
      elementIdBillingNote: 'billing-note-growth'
    },
    elite: {
      monthly: 24599,
      annual: 245990, // 24,599 * 10
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
    if (cycle !== 'monthly' && cycle !== 'yearly') return;
    currentBillingCycle = cycle;

    // Update Toggle Button UI
    const monthlyBtn = document.getElementById('billingToggleMonthly');
    const yearlyBtn = document.getElementById('billingToggleYearly');

    if (monthlyBtn && yearlyBtn) {
      if (cycle === 'monthly') {
        monthlyBtn.classList.add('active');
        yearlyBtn.classList.remove('active');
        monthlyBtn.setAttribute('aria-pressed', 'true');
        yearlyBtn.setAttribute('aria-pressed', 'false');
      } else {
        yearlyBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
        yearlyBtn.setAttribute('aria-pressed', 'true');
        monthlyBtn.setAttribute('aria-pressed', 'false');
      }
    }

    // Update Plan Prices in DOM
    Object.keys(plans).forEach(planKey => {
      const plan = plans[planKey];
      const priceElem = document.getElementById(plan.elementIdPrice);
      const subtextElem = document.getElementById(plan.elementIdSubtext);
      const noteElem = document.getElementById(plan.elementIdBillingNote);

      if (priceElem) {
        // Animate text change
        priceElem.style.opacity = '0';
        priceElem.style.transform = 'translateY(-4px)';
        
        setTimeout(() => {
          if (cycle === 'monthly') {
            priceElem.textContent = formatRupees(plan.monthly);
            if (subtextElem) subtextElem.textContent = ' + GST / month';
            if (noteElem) noteElem.textContent = 'Billed monthly. Cancel anytime.';
          } else {
            priceElem.textContent = formatRupees(plan.annualMonthlyEquiv);
            if (subtextElem) subtextElem.textContent = ' / mo (+ GST)';
            if (noteElem) noteElem.textContent = `Billed annually at ${formatRupees(plan.annual)} + GST (Save 2 Months)`;
          }
          priceElem.style.opacity = '1';
          priceElem.style.transform = 'translateY(0)';
        }, 150);
      }
    });
  }

  function init() {
    const monthlyBtn = document.getElementById('billingToggleMonthly');
    const yearlyBtn = document.getElementById('billingToggleYearly');

    if (monthlyBtn) {
      monthlyBtn.addEventListener('click', () => setBillingCycle('monthly'));
    }
    if (yearlyBtn) {
      yearlyBtn.addEventListener('click', () => setBillingCycle('yearly'));
    }

    // Initial render
    setBillingCycle('monthly');
  }

  return {
    init,
    setBillingCycle,
    getBillingCycle: () => currentBillingCycle
  };
})();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ScaleNovaPricing.init);
} else {
  ScaleNovaPricing.init();
}
