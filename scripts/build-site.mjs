import { mkdir, rm, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ideas, marketSignals, removedIdeas, site } from "../src/data.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, "dist");

const money = (value) => `BDT ${new Intl.NumberFormat("en-BD").format(Math.round(value))}`;
const orderedIdeas = [...ideas].sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
const ideaRank = (idea) => orderedIdeas.findIndex((item) => item.id === idea.id) + 1;

const escapeHtml = (value) => String(value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

const list = (items) => `<ul class="divider-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

const nav = (prefix = "") => `
  <header class="topbar">
    <div class="shell nav">
      <a class="brand" href="${prefix}index.html" aria-label="${escapeHtml(site.title)} home">
        <span class="mark" aria-hidden="true"></span>
        <span>${escapeHtml(site.title)}</span>
      </a>
      <nav class="navlinks" aria-label="Primary navigation">
        <a href="${prefix}index.html#ideas">Ideas</a>
        <a href="${prefix}index.html#market">Market data</a>
        <a href="${prefix}index.html#removed">Removed ideas</a>
      </nav>
    </div>
  </header>`;

const layout = ({ title, description, body, prefix = "" }) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="stylesheet" href="${prefix}assets/styles.css">
</head>
<body>
  ${nav(prefix)}
  <main>${body}</main>
  <footer class="page-footer">
    <div class="shell">
      <p>${escapeHtml(site.title)}. Updated ${escapeHtml(site.updated)}. Built for practical Bangladesh SaaS possibility planning.</p>
    </div>
  </footer>
  <script src="${prefix}assets/site.js"></script>
</body>
</html>`;

const compactCalculator = (idea) => `
  <div class="mini-calculator" data-calculator>
    <h4>Revenue calculator</h4>
    <div class="calc-inputs">
      <div class="field">
        <label>Businesses</label>
        <input data-calc="customers" type="number" min="1" value="${idea.defaultCustomers}">
      </div>
      <div class="field">
        <label>Setup</label>
        <input data-calc="setup" type="number" min="0" value="${idea.setupFee}">
      </div>
      <div class="field">
        <label>Monthly</label>
        <input data-calc="monthly" type="number" min="0" value="${idea.monthlyFee}">
      </div>
      <input data-calc="support" type="hidden" value="${idea.supportCost}">
    </div>
    <div class="calc-results">
      <div class="result-box"><span>Setup total</span><b data-result="setupRevenue"></b></div>
      <div class="result-box"><span>MRR</span><b data-result="mrr"></b></div>
      <div class="result-box accent"><span>Year 1 gross</span><b data-result="periodTotal"></b></div>
      <div class="result-box"><span>Net monthly</span><b data-result="netMonthly"></b></div>
    </div>
  </div>`;

const fullCalculator = (idea) => `
  <div class="calculator" data-calculator>
    <h3>Calculator for ${escapeHtml(idea.shortTitle)}</h3>
    <div class="calc-inputs">
      <div class="field">
        <label>Businesses sold</label>
        <input data-calc="customers" type="number" min="1" value="${idea.defaultCustomers}">
      </div>
      <div class="field">
        <label>Installation fee</label>
        <input data-calc="setup" type="number" min="0" value="${idea.setupFee}">
      </div>
      <div class="field">
        <label>Monthly charge</label>
        <input data-calc="monthly" type="number" min="0" value="${idea.monthlyFee}">
      </div>
      <div class="field">
        <label>Support cost/user</label>
        <input data-calc="support" type="number" min="0" value="${idea.supportCost}">
      </div>
      <div class="field">
        <label>Months</label>
        <input data-calc="months" type="number" min="1" value="12">
      </div>
    </div>
    <div class="calc-results">
      <div class="result-box"><span>Setup revenue</span><b data-result="setupRevenue"></b></div>
      <div class="result-box"><span>Monthly revenue</span><b data-result="mrr"></b></div>
      <div class="result-box accent"><span>First month</span><b data-result="firstMonth"></b></div>
      <div class="result-box"><span>Period subscription</span><b data-result="periodSubscription"></b></div>
      <div class="result-box accent"><span>Period gross total</span><b data-result="periodTotal"></b></div>
      <div class="result-box"><span>Support budget/mo</span><b data-result="supportBudget"></b></div>
      <div class="result-box accent"><span>Net monthly after support</span><b data-result="netMonthly"></b></div>
    </div>
  </div>`;

const ideaCard = (idea) => `
  <article class="idea-card reveal">
    <div class="idea-top">
      <div class="rank">${String(ideaRank(idea)).padStart(2, "0")}</div>
      <div>
        <h3>${escapeHtml(idea.title)}</h3>
        <p class="tagline">${escapeHtml(idea.thesis)}</p>
      </div>
      <div class="score">${idea.score.toFixed(1)} score</div>
    </div>
    <div class="mini-facts">
      <div class="mini-fact"><span>Suggested setup</span><b>${money(idea.setupFee)}</b></div>
      <div class="mini-fact"><span>Monthly charge</span><b>${money(idea.monthlyFee)}</b></div>
      <div class="mini-fact"><span>1,000 first month</span><b>${money((idea.defaultCustomers * idea.setupFee) + (idea.defaultCustomers * idea.monthlyFee))}</b></div>
    </div>
    ${compactCalculator(idea)}
    <div class="card-actions">
      <p>${escapeHtml(idea.saleLine)}</p>
      <a class="plain-link" href="ideas/${idea.slug}.html">Open detail page</a>
    </div>
  </article>`;

const homePage = () => layout({
  title: `${site.title} - SaaS Opportunity Dashboard`,
  description: site.tagline,
  body: `
    <div class="shell hero">
      <div class="hero-grid">
        <div>
          <h1>30 halal software ideas for Bangladesh reality.</h1>
          <p class="lead">No generic template reselling. No online-store distraction. This is a practical opportunity board for queues, stock, dues, bookings, fees, tables, rooms, training, reports, and owner control.</p>
          <div class="hero-actions">
            <a class="button" href="#ideas">Explore the cards</a>
            <a class="button secondary" href="ideas/salon-serial-booking.html">Start with salon serial</a>
          </div>
        </div>
        <aside class="hero-panel reveal" aria-label="Best first move">
          <div class="panel-head">
            <strong>Best practical first bets</strong>
            <span>${escapeHtml(site.updated)}</span>
          </div>
          <div class="signal-list">
            ${orderedIdeas.slice(0, 4).map((idea) => `
              <a class="signal-row" href="ideas/${idea.slug}.html">
                <b>${idea.score.toFixed(1)}</b>
                <span><strong>${escapeHtml(idea.shortTitle)}</strong><p>${escapeHtml(idea.corePain)}</p></span>
              </a>
            `).join("")}
          </div>
        </aside>
      </div>
    </div>

    <section id="market">
      <div class="shell">
        <div class="section-head reveal">
          <div>
            <p class="label">Market data</p>
            <h2>Enough market exists. The hard part is choosing a tiny painful workflow.</h2>
          </div>
          <p>These numbers are for possibility planning. The safest strategy is still to validate one area by selling to 10 paying businesses before building deeply.</p>
        </div>
        <div class="stats-grid">
          ${marketSignals.map((signal) => `
            <article class="stat-card reveal">
              <div><b>${escapeHtml(signal.value)}</b><strong>${escapeHtml(signal.label)}</strong></div>
              <p>${escapeHtml(signal.detail)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section id="ideas">
      <div class="shell">
        <div class="section-head reveal">
          <div>
            <p class="label">Opportunity cards</p>
            <h2>Each card has pricing and a calculator. Click any card for the full page.</h2>
          </div>
          <p>The default calculator uses 1,000 businesses because it makes the model clear. Change setup and monthly price to test your own package.</p>
        </div>
        <div class="idea-grid">
          ${orderedIdeas.map(ideaCard).join("")}
        </div>
      </div>
    </section>

    <section id="removed">
      <div class="shell">
        <div class="section-head reveal">
          <div>
            <p class="label">Removed from focus</p>
            <h2>These are intentionally not the plan.</h2>
          </div>
          <p>The Bangladesh local market rewards boring, daily-use, cash-visible software. Generic online-store ideas are much harder to sell to the users you want.</p>
        </div>
        <div class="removed-list">
          ${removedIdeas.map((item) => `<div class="removed-item reveal">${escapeHtml(item)}</div>`).join("")}
        </div>
      </div>
    </section>`
});

const detailPage = (idea, index) => {
  const next = orderedIdeas[(index + 1) % orderedIdeas.length];
  const previous = orderedIdeas[(index - 1 + orderedIdeas.length) % orderedIdeas.length];
  return layout({
    title: `${idea.title} - ${site.title}`,
    description: idea.thesis,
    prefix: "../",
    body: `
      <div class="shell detail-hero">
        <a class="breadcrumb" href="../index.html#ideas">Back to all ideas</a>
        <div class="detail-grid">
          <div>
            <p class="label">Rank ${String(ideaRank(idea)).padStart(2, "0")} - ${escapeHtml(idea.category)}</p>
            <h1 class="detail-title">${escapeHtml(idea.title)}</h1>
            <p class="lead">${escapeHtml(idea.thesis)}</p>
            <div class="button-row">
              <a class="button" href="#calculator">Calculate revenue</a>
              <a class="button secondary" href="../index.html">Open overview</a>
            </div>
          </div>
          <aside class="detail-card reveal">
            <h3>Suggested package</h3>
            <div class="price-stack" style="margin-top: 16px;">
              <div class="price-box"><b>${money(idea.setupFee)}</b><span>Installation/setup fee</span></div>
              <div class="price-box"><b>${money(idea.monthlyFee)}</b><span>Recommended monthly charge</span></div>
            </div>
            <p style="margin-top: 16px;">${escapeHtml(idea.pricingLogic)}</p>
          </aside>
        </div>
      </div>

      <section>
        <div class="shell">
          <div class="number-strip">
            <div class="number-card reveal"><b>${idea.score.toFixed(1)}</b><span>Practical score based on daily pain, willingness to pay, support load, and expansion potential.</span></div>
            <div class="number-card reveal"><b>${money(idea.setupFee)}</b><span>Default setup used in calculator.</span></div>
            <div class="number-card reveal"><b>${money(idea.monthlyFee)}</b><span>Suggested monthly price after support-cost thinking.</span></div>
            <div class="number-card reveal"><b>${money((idea.defaultCustomers * idea.setupFee) + (idea.defaultCustomers * idea.monthlyFee * 12))}</b><span>Gross year-one revenue at 1,000 businesses.</span></div>
          </div>
        </div>
      </section>

      <section>
        <div class="shell detail-section-grid">
          <article class="text-panel reveal">
            <h3>Why this can work</h3>
            <p>${escapeHtml(idea.serviceableTarget)}</p>
            <p style="margin-top: 14px;">${escapeHtml(idea.corePain)}</p>
            <p style="margin-top: 14px;"><strong>${escapeHtml(idea.saleLine)}</strong></p>
          </article>
          <article class="list-panel reveal">
            <h3>Validation signals</h3>
            ${list(idea.validation)}
          </article>
        </div>
      </section>

      <section>
        <div class="shell two-col">
          <article class="list-panel reveal">
            <h3>MVP modules</h3>
            ${list(idea.mvp)}
          </article>
          <article class="list-panel reveal">
            <h3>Do not build first</h3>
            ${list(idea.notBuild)}
          </article>
        </div>
      </section>

      <section id="calculator">
        <div class="shell">
          <div class="section-head reveal">
            <div>
              <p class="label">Money model</p>
              <h2>Change the inputs and see the business case instantly.</h2>
            </div>
            <p>Use support cost as a reality check. Low monthly pricing looks attractive until support eats the margin.</p>
          </div>
          ${fullCalculator(idea)}
        </div>
      </section>

      <section>
        <div class="shell two-col">
          <article class="list-panel reveal">
            <h3>First 30-day launch plan</h3>
            ${list(idea.launchPlan)}
          </article>
          <article class="list-panel reveal">
            <h3>Risks and fixes</h3>
            <div class="divider-list">
              <div><strong>Risks</strong>${list(idea.risks)}</div>
              <div><strong>Mitigations</strong>${list(idea.mitigations)}</div>
            </div>
          </article>
        </div>
      </section>

      <section>
        <div class="shell">
          <div class="card-actions">
            <a class="plain-link" href="${previous.slug}.html">Previous: ${escapeHtml(previous.shortTitle)}</a>
            <a class="plain-link" href="${next.slug}.html">Next: ${escapeHtml(next.shortTitle)}</a>
          </div>
        </div>
      </section>`
  });
};

await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, "assets"), { recursive: true });
await mkdir(path.join(dist, "ideas"), { recursive: true });
await copyFile(path.join(root, "src", "styles.css"), path.join(dist, "assets", "styles.css"));
await copyFile(path.join(root, "src", "site.js"), path.join(dist, "assets", "site.js"));
await writeFile(path.join(dist, "index.html"), homePage(), "utf8");

await Promise.all(orderedIdeas.map((idea, index) => (
  writeFile(path.join(dist, "ideas", `${idea.slug}.html`), detailPage(idea, index), "utf8")
)));

console.log(`Built ${ideas.length + 1} pages in dist`);
