/**
 * ScaleNova Reactive Pricing Toggle Engine
 * 
 * Manages monthly vs. annual billing calculations, smooth state transitions,
 * green highlighted annual pricing, and computed ₹ savings badges.
 */
const ScaleNovaPricing = (function() {
  let currentBillingCycle = 'monthly'; // 'monthly' | 'yearly'

  const plans = {
    core: {
      monthly: 4899,
      annual: 48990, // 4,899 * 10 (Save 2 months)
      annualMonthlyEquiv: 4083,
      elementIdPrice: 'price-core',
      elementIdSubtext: 'subtext-core',
      elementIdSavings: 'savings-core',
      elementIdBillingNote: 'billing-note-core'
    },
    growth: {
      monthly: 13699,
      annual: 136990, // 13,699 * 10 (Save 2 months)
      annualMonthlyEquiv: 11416,
      elementIdPrice: 'price-growth',
      elementIdSubtext: 'subtext-growth',
      elementIdSavings: 'savings-growth',
      elementIdBillingNote: 'billing-note-growth'
    },
    elite: {
      monthly: 35799,
      annual: 357990, // 35,799 * 10 (Save 2 months)
      annualMonthlyEquiv: 29833,
      elementIdPrice: 'price-elite',
      elementIdSubtext: 'subtext-elite',
      elementIdSavings: 'savings-elite',
      elementIdBillingNote: 'billing-note-elite'
    }
  };

  function formatRupees(amount) {
    return '₹' + amount.toLocaleString('en-IN');
  }

  function setBillingCycle(cycle) {
    if (cycle !== 'monthly' && cycle !== 'yearly' && cycle !== 'annual') return;
    currentBillingCycle = (cycle === 'annual' || cycle === 'yearly') ? 'yearly' : 'monthly';
    const isAnnual = currentBillingCycle === 'yearly';

    // 1. Update Switch Button UI
    const switchBtn = document.getElementById('billingSwitchBtn');
    const monthlyLabel = document.getElementById('billingLabelMonthly');
    const yearlyLabel = document.getElementById('billingLabelYearly');

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

    // 2. Update Plan Prices in DOM with smooth fade/slide transition
    Object.keys(plans).forEach(planKey => {
      const plan = plans[planKey];
      const priceElem = document.getElementById(plan.elementIdPrice);
      const subtextElem = document.getElementById(plan.elementIdSubtext);
      const savingsElem = document.getElementById(plan.elementIdSavings);
      const noteElem = document.getElementById(plan.elementIdBillingNote);

      if (priceElem) {
        priceElem.style.opacity = '0';
        priceElem.style.transform = 'translateY(-3px)';
        if (savingsElem) savingsElem.style.opacity = '0';

        setTimeout(() => {
          if (!isAnnual) {
            // MONTHLY STATE
            priceElem.textContent = formatRupees(plan.monthly);
            priceElem.classList.remove('price-annual-green');
            if (subtextElem) subtextElem.textContent = ' + GST / month';
            if (savingsElem) {
              savingsElem.style.display = 'none';
            }
            if (noteElem) noteElem.textContent = 'Billed monthly. Cancel anytime.';
          } else {
            // ANNUAL STATE
            const totalMonthlySpend = plan.monthly * 12;
            const savingsAmount = totalMonthlySpend - plan.annual;
            
            priceElem.textContent = formatRupees(plan.annual);
            priceElem.classList.add('price-annual-green');
            if (subtextElem) subtextElem.textContent = ' + GST / year';
            if (savingsElem) {
              savingsElem.textContent = `Save ${formatRupees(savingsAmount)}`;
              savingsElem.style.display = 'inline-flex';
              savingsElem.style.opacity = '1';
            }
            if (noteElem) noteElem.textContent = `Billed annually at ${formatRupees(plan.annual)} + GST (Save 2 Months)`;
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

  let isInitialized = false;

  function init() {
    if (isInitialized) return;
    isInitialized = true;

    const switchBtn = document.getElementById('billingSwitchBtn');
    const monthlyLabel = document.getElementById('billingLabelMonthly');
    const yearlyLabel = document.getElementById('billingLabelYearly');

    if (switchBtn) {
      switchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleBillingCycle();
      });
      switchBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleBillingCycle();
        }
      });
    }

    if (monthlyLabel) {
      monthlyLabel.addEventListener('click', (e) => {
        e.preventDefault();
        setBillingCycle('monthly');
      });
    }
    if (yearlyLabel) {
      yearlyLabel.addEventListener('click', (e) => {
        e.preventDefault();
        setBillingCycle('yearly');
      });
    }

    // Initialize in default monthly state
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
