const formatter = new Intl.NumberFormat("en-BD");

const formatBDT = (value) => `BDT ${formatter.format(Math.round(value || 0))}`;

const numberValue = (input) => {
  const value = Number(input.value);
  return Number.isFinite(value) ? value : 0;
};

const updateCalculator = (calculator) => {
  const customers = numberValue(calculator.querySelector("[data-calc='customers']"));
  const setup = numberValue(calculator.querySelector("[data-calc='setup']"));
  const monthly = numberValue(calculator.querySelector("[data-calc='monthly']"));
  const support = numberValue(calculator.querySelector("[data-calc='support']"));
  const monthsInput = calculator.querySelector("[data-calc='months']");
  const months = monthsInput ? Math.max(1, numberValue(monthsInput)) : 12;

  const setupRevenue = customers * setup;
  const mrr = customers * monthly;
  const firstMonth = setupRevenue + mrr;
  const periodSubscription = mrr * months;
  const supportBudget = customers * support;
  const netMonthly = Math.max(0, mrr - supportBudget);
  const periodTotal = setupRevenue + periodSubscription;

  calculator.querySelectorAll("[data-result]").forEach((result) => {
    const type = result.dataset.result;
    const value = {
      setupRevenue,
      mrr,
      firstMonth,
      periodSubscription,
      supportBudget,
      netMonthly,
      periodTotal
    }[type];
    result.textContent = formatBDT(value);
  });
};

document.querySelectorAll("[data-calculator]").forEach((calculator) => {
  updateCalculator(calculator);
  calculator.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => updateCalculator(calculator));
  });
});

const revealItems = Array.from(document.querySelectorAll(".reveal"));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));
