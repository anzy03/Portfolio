// ==========================================================================
// ARNAV SANGHAVI - DYNAMIC PORTFOLIO INTERACTIVITY & DATA LOADER
// ==========================================================================

let PORTFOLIO = null;
let currentFilter = "released";
let activeModalProject = null;

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", async () => {
  initFilters();
  initExpTabs();
  initModalListeners();
  await loadPortfolioData();
});

// Load data from data.json (or fallback to window.PORTFOLIO_DATA from data.js)
async function loadPortfolioData() {
  try {
    const res = await fetch("data.json?v=" + new Date().getTime());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    PORTFOLIO = await res.json();
  } catch (err) {
    console.warn("Could not fetch data.json (likely local file:// protocol or offline). Falling back to window.PORTFOLIO_DATA.", err);
    if (typeof window !== "undefined" && window.PORTFOLIO_DATA) {
      PORTFOLIO = window.PORTFOLIO_DATA;
    }
  }

  if (PORTFOLIO) {
    renderProfile(PORTFOLIO.profile);
    renderExperience(PORTFOLIO.experience);
    renderEducation(PORTFOLIO.education);
    renderSkills(PORTFOLIO.skills);
    renderWorkGrid(PORTFOLIO.projects);
  }
}

// --------------------------------------------------------------------------
// SECTION RENDERERS
// --------------------------------------------------------------------------

function renderProfile(profile) {
  if (!profile) return;

  // Hero section
  const taglineEl = document.getElementById("intro-tagline");
  if (taglineEl && profile.tagline) taglineEl.textContent = profile.tagline;

  const nameEl = document.getElementById("intro-name");
  if (nameEl) nameEl.innerHTML = profile.nameFormatted || profile.name;

  const roleDescEl = document.getElementById("intro-role-desc");
  if (roleDescEl && profile.roleDesc) roleDescEl.innerHTML = profile.roleDesc;

  const introEmailBtn = document.getElementById("intro-email-btn");
  if (introEmailBtn && profile.email) {
    introEmailBtn.href = `mailto:${profile.email}`;
    introEmailBtn.innerHTML = `<span>✉</span> Contact Me`;
  }

  const introSocialsEl = document.getElementById("intro-socials");
  if (introSocialsEl && profile.socials) {
    introSocialsEl.innerHTML = profile.socials
      .map(s => `<a href="${s.url}" target="_blank" class="social-link">${s.label} ↗</a>`)
      .join("");
  }



  // About section
  const avatarEl = document.getElementById("about-avatar-img");
  if (avatarEl && profile.avatar) {
    avatarEl.src = profile.avatar;
    avatarEl.alt = profile.name;
  }

  const aboutNameEl = document.getElementById("about-name");
  if (aboutNameEl && profile.name) aboutNameEl.textContent = profile.name;



  const aboutLocEl = document.getElementById("about-loc");
  if (aboutLocEl && profile.aboutLocation) aboutLocEl.textContent = profile.aboutLocation;

  const aboutParagraphsEl = document.getElementById("about-paragraphs");
  if (aboutParagraphsEl && profile.aboutParagraphs) {
    aboutParagraphsEl.innerHTML = profile.aboutParagraphs.map(p => `<p>${p}</p>`).join("");
  }

  const resumeBtn = document.getElementById("about-resume-btn");
  if (resumeBtn && profile.resume) {
    resumeBtn.href = profile.resume;
  }



  // Footer
  const footerYear = new Date().getFullYear();
  const footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.innerHTML = `
      <span>© ${footerYear} ${profile.name}</span>
      <span>${profile.roleTitle ? profile.roleTitle.split("&")[0].trim() : "Gameplay Programmer"} · ${profile.location ? profile.location.split(",")[0].trim() + ", BC" : "Vancouver, BC"}</span>
    `;
  }
}

function renderExperience(experienceList) {
  const proGroup = document.getElementById("exp-group-pro");
  if (!proGroup || !experienceList) return;

  proGroup.innerHTML = `
    <div class="exp-timeline">
      ${experienceList.map(exp => {
        const isCurrent = exp.period && exp.period.toLowerCase().includes("present");
        return `
          <div class="timeline-item ${isCurrent ? "is-current" : ""}">
            <div class="timeline-spine">
              <div class="timeline-node">
                ${isCurrent ? '<span class="timeline-pulse"></span>' : ""}
              </div>
            </div>
            <div class="timeline-card">
              <div class="timeline-header">
                <div class="timeline-meta">
                  <span class="timeline-badge">${exp.period}</span>
                  ${isCurrent ? '<span class="timeline-current-tag">Current Position</span>' : ""}
                </div>
                <h3 class="timeline-title">${exp.role}</h3>
                <div class="timeline-company">
                  <span class="timeline-org">${exp.org}</span>
                  ${exp.subOrg ? `<span class="timeline-suborg">· ${exp.subOrg}</span>` : ""}
                  ${exp.project ? `<span class="timeline-project">✦ ${exp.project}</span>` : ""}
                </div>
              </div>
              ${exp.summary ? `<p class="timeline-summary">${exp.summary}</p>` : ""}
              ${exp.bullets && exp.bullets.length > 0 ? `
                <ul class="timeline-bullets">
                  ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
                </ul>
              ` : ""}
              ${exp.chips && exp.chips.length > 0 ? `
                <div class="timeline-chips">
                  ${exp.chips.map(c => `<span class="timeline-chip">${c}</span>`).join("")}
                </div>
              ` : ""}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderEducation(educationList) {
  const eduGroup = document.getElementById("exp-group-edu");
  if (!eduGroup || !educationList) return;

  eduGroup.innerHTML = `
    <div class="exp-timeline">
      ${educationList.map(edu => `
        <div class="timeline-item">
          <div class="timeline-spine">
            <div class="timeline-node"></div>
          </div>
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-meta">
                <span class="timeline-badge">${edu.period}</span>
                ${edu.honors ? `<span class="timeline-honors-tag">★ ${edu.honors}</span>` : ""}
              </div>
              <h3 class="timeline-title">${edu.role}</h3>
              <div class="timeline-company">
                <span class="timeline-org">${edu.org}</span>
                ${edu.subOrg ? `<span class="timeline-suborg">· ${edu.subOrg}</span>` : ""}
              </div>
            </div>
            ${edu.summary ? `<p class="timeline-summary">${edu.summary}</p>` : ""}
            ${edu.bullets && edu.bullets.length > 0 ? `
              <ul class="timeline-bullets">
                ${edu.bullets.map(b => `<li>${b}</li>`).join("")}
              </ul>
            ` : ""}
            ${edu.chips && edu.chips.length > 0 ? `
              <div class="timeline-chips">
                ${edu.chips.map(c => `<span class="timeline-chip">${c}</span>`).join("")}
              </div>
            ` : ""}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function getSkillCategoryIcon(id, category) {
  const key = (id || category || "").toLowerCase();
  if (key.includes("engine") || key.includes("architecture")) {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>`;
  }
  if (key.includes("language") || key.includes("shader")) {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>`;
  }
  if (key.includes("gameplay") || key.includes("ai")) {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
    </svg>`;
  }
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>`;
}

function renderSkills(skillsList) {
  const skillsGrid = document.getElementById("skills-grid");
  if (!skillsGrid || !skillsList) return;

  skillsGrid.innerHTML = skillsList.map((cat) => {
    const iconSvg = getSkillCategoryIcon(cat.id, cat.category);
    const descHtml = cat.desc ? `<p class="skill-cat-desc">${cat.desc}</p>` : "";
    const itemsHtml = (cat.items || []).map(item => `
      <li>${item}</li>
    `).join("");

    return `
      <div class="skill-category" data-category="${cat.id || ''}">
        <div class="skill-cat-header">
          <h3 class="skill-cat-title">
            <span class="skill-cat-icon" aria-hidden="true">${iconSvg}</span>
            <span>${cat.category}</span>
          </h3>
          ${descHtml}
          <div class="skill-cat-divider" aria-hidden="true"></div>
        </div>
        <ul class="skill-list">
          ${itemsHtml}
        </ul>
      </div>
    `;
  }).join("");
}

function renderWorkGrid(projectsList) {
  const grid = document.getElementById("work-grid");
  if (!grid || !projectsList) return;

  grid.innerHTML = projectsList.map(p => {
    const hasVideo = p.media && p.media.length > 0 && (p.media[0].type === "youtube" || p.media[0].type === "video");
    return `
      <div class="project-card" data-id="${p.id}" data-filter="${(p.filter || []).join(" ")}">
        ${hasVideo ? '<div class="card-video-badge">▶ Video</div>' : ""}
        <img class="project-thumb" src="${p.thumb}" alt="${p.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="project-thumb-fallback" style="display:none;">${p.thumbFallback || "🎮"}</div>
        <div class="project-overlay">
          <div class="card-cat">${p.cat}</div>
          <div class="card-title">${p.title}</div>
          <div class="card-desc">${p.desc}</div>
          <div class="card-tags">
            ${(p.tags || []).slice(0, 3).map(t => `<span class="card-tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Re-attach card click triggers modal
  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openModal(id);
    });
  });

  // Re-apply filter if active
  filterCards();
}

// --------------------------------------------------------------------------
// FILTER TABS
// --------------------------------------------------------------------------

function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      filterCards();
    });
  });
}

function filterCards() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    const filters = (card.getAttribute("data-filter") || "").split(" ");
    if (currentFilter === "all" || filters.includes(currentFilter)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// --------------------------------------------------------------------------
// EXPERIENCE TABS
// --------------------------------------------------------------------------

function initExpTabs() {
  const expBtns = document.querySelectorAll(".exp-tab-btn");
  const proGroup = document.getElementById("exp-group-pro");
  const eduGroup = document.getElementById("exp-group-edu");
  const expSection = document.getElementById("experience");

  const switchTab = (targetTab) => {
    if (expSection) {
      expSection.classList.remove("view-all", "view-pro", "view-edu");
      expSection.classList.add(`view-${targetTab}`);
    }

    if (targetTab === "all") {
      if (proGroup) proGroup.style.display = "block";
      if (eduGroup) eduGroup.style.display = "block";
    } else if (targetTab === "pro") {
      if (proGroup) proGroup.style.display = "block";
      if (eduGroup) eduGroup.style.display = "none";
    } else if (targetTab === "edu") {
      if (proGroup) proGroup.style.display = "none";
      if (eduGroup) eduGroup.style.display = "block";
    }
  };

  // Set default visibility based on initial active button
  const activeBtn = document.querySelector(".exp-tab-btn.active");
  const defaultTab = activeBtn ? activeBtn.getAttribute("data-tab") : "pro";
  switchTab(defaultTab);

  expBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      expBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetTab = btn.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });
}

// --------------------------------------------------------------------------
// MODAL LOGIC
// --------------------------------------------------------------------------

function openModal(projectId) {
  if (!PORTFOLIO || !PORTFOLIO.projects) return;
  const project = PORTFOLIO.projects.find(p => p.id === projectId);
  if (!project) return;
  activeModalProject = project;

  const catEl = document.getElementById("modal-cat");
  if (catEl) catEl.textContent = project.cat || "";

  const titleEl = document.getElementById("modal-title");
  if (titleEl) titleEl.textContent = project.title || "";

  const descEl = document.getElementById("modal-desc");
  if (descEl) descEl.textContent = project.desc || "";

  const workflowEl = document.getElementById("modal-workflow");
  if (workflowEl) workflowEl.textContent = project.workflow || "";

  const tagsEl = document.getElementById("modal-tags");
  if (tagsEl) {
    tagsEl.innerHTML = (project.tags || []).map(t => `<span class="modal-tag">${t}</span>`).join("");
  }

  // Media - if video is attached, autoplay it immediately in the modal viewport
  const viewport = document.getElementById("modal-viewport");
  if (viewport) {
    if (project.media && project.media.length > 0) {
      const m = project.media[0];
      if (m.type === "youtube") {
        viewport.innerHTML = `<iframe src="https://www.youtube.com/embed/${m.id}?autoplay=1&rel=0" title="${project.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width:100%; height:100%; border:none;"></iframe>`;
      } else if (m.type === "video") {
        viewport.innerHTML = `<iframe src="${m.src}" title="${project.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%; height:100%; border:none;"></iframe>`;
      } else {
        viewport.innerHTML = `<img src="${m.src}" alt="${project.title}" />`;
      }
    } else {
      viewport.innerHTML = `<div style="font-size:3rem">${project.thumbFallback || "🎮"}</div>`;
    }
  }

  // Action links
  const actionsEl = document.getElementById("modal-actions");
  if (actionsEl) {
    actionsEl.innerHTML = (project.links || []).map(l => `
      <a href="${l.url}" target="_blank" class="btn-solid" style="font-size:0.72rem; padding:0.5rem 1.1rem;">
        ${l.label} ↗
      </a>
    `).join("");
  }

  const modal = document.getElementById("project-modal");
  if (modal) modal.classList.add("open");
  document.documentElement.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (modal) modal.classList.remove("open");
  document.documentElement.classList.remove("modal-open");

  // Immediately stop any video audio/playback by clearing the viewport
  const viewport = document.getElementById("modal-viewport");
  if (viewport) viewport.innerHTML = "";
  activeModalProject = null;
}

function initModalListeners() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}
