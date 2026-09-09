// ==========================================================================
// ARNAV SANGHAVI - PORTFOLIO INTERACTIVITY & DATA
// ==========================================================================

const PROJECTS = [
  {
    id: "gears-eday",
    title: "Gears of War: E-Day",
    cat: "AAA Commercial / UE5",
    filter: ["games", "mechanics"],
    role: "Technical Gameplay Designer (C++ / UE5)",
    thumb: "assets/images/gears-eday.jpg",
    thumbFallback: "⚙️",
    desc: "The acclaimed next installment in the Gears of War franchise developed by The Coalition Studio (Microsoft / Xbox), built from the ground up in Unreal Engine 5.",
    workflow: "Owned the architecture and runtime implementation of NPC behavior systems, integrating modular frameworks like StateTree and Smart Objects for dense, high-performance background populations in live builds. Spearheaded systemic spawning mechanics, led native C++ conversions of gameplay and inventory systems, and profiled CPU/memory bottlenecks with LOD and culling strategies.",
    tags: ["Unreal Engine 5", "C++", "StateTree", "Smart Objects", "Systemic AI", "Xbox Game Studios"],
    links: [
      { label: "Official Xbox Announcement", url: "https://www.xbox.com/en-US/games/gears-of-war-e-day" },
      { label: "Watch Trailer", url: "https://www.youtube.com/watch?v=EC20gLfUHeA" }
    ],
    media: [
      { type: "youtube", id: "EC20gLfUHeA", caption: "The Coalition Studio — Gears of War: E-Day (Official Announce Trailer)" }
    ]
  },
  {
    id: "fei-equestriad",
    title: "FEI Equestriad World Tour",
    cat: "Commercial / Mobile",
    filter: ["games"],
    role: "Game Programmer 1 (BL!NK MEDIA)",
    thumb: "assets/images/fei-equestriad.jpg",
    thumbFallback: "🏇",
    desc: "Official licensed mobile equestrian sports simulation featuring international jumping, dressage, and cross-country competition.",
    workflow: "Optimized multiplayer gameplay systems and locomotion, reducing network lag and improving responsiveness by 15%. Refactored an inherited legacy codebase with zero downtime, engineered a modular AI agent prototype in a one-month sprint, and authored technical architecture guides that reduced team troubleshooting time by 30%.",
    tags: ["Unity", "C#", "Multiplayer", "Optimization", "Live Ops", "Legacy Refactor"],
    links: [
      { label: "View on Google Play", url: "https://play.google.com/store/apps/details?id=com.equusports.equestriad" },
      { label: "Watch Trailer", url: "https://www.youtube.com/watch?v=zj5fTal-mSA" }
    ],
    media: [
      { type: "youtube", id: "zj5fTal-mSA", caption: "FEI Equestriad World Tour — Official Game Trailer" }
    ]
  },
  {
    id: "azad",
    title: "AZAD",
    cat: "Co-Op Stealth / UE5",
    filter: ["games", "mechanics"],
    role: "Gameplay & AI Engineer (C++ / Blueprints)",
    thumb: "assets/images/azad.png",
    thumbFallback: "🗡️",
    desc: "A cooperative stealth game set during the 1925 Kakori Train Robbery in British-occupied India. Players control freedom fighters Chandrashekhar Azad and Ram Prasad Bismil, coordinating infiltration and treasure recovery without combat detection.",
    workflow: "Built in Unreal Engine 5 using a hybrid C++ and Blueprints architecture. Engineered player locomotion and dynamic camera shake systems. Designed AI perception and patrol state trees for train guards, ensuring high tension where silent team communication and timing are the only path to survival.",
    tags: ["Unreal Engine 5", "C++", "Blueprints", "AI Behavior Trees", "Co-op", "Stealth"],
    links: [
      { label: "View on Itch.io", url: "https://mranzy.itch.io/azad" },
      { label: "Watch Trailer", url: "https://www.youtube.com/watch?v=_nYvRXThitI" }
    ],
    media: [
      { type: "youtube", id: "_nYvRXThitI", caption: "AZAD - Official Trailer (Co-Op Stealth in UE5)" }
    ]
  },
  {
    id: "rolling-slime",
    title: "Rolling Slime",
    cat: "Physics Puzzle / Unity",
    filter: ["games", "mechanics"],
    role: "Gameplay & UI Developer (C#)",
    thumb: "assets/images/rolling-slime.png",
    thumbFallback: "🧪",
    desc: "A tactile physics puzzle game where players guide a shape-shifting slime to the target portal by physically tilting the screen and changing between liquid and solid states.",
    workflow: "Engineered in Unity using custom 2D/3D physics interactions. Created phase transition mechanics: colliding with ice freezes the slime into a low-friction solid, while heat/fire liquefies it to squeeze through narrow crevices. Designed reactive HUD indicators and screen-tilting controls.",
    tags: ["Unity", "C#", "Physics Simulation", "State Machine", "UI Systems"],
    links: [
      { label: "Play on Itch.io", url: "https://septarap.itch.io/rollingslime" },
      { label: "Watch Playthrough", url: "https://www.youtube.com/watch?v=yLh295laHsU" }
    ],
    media: [
      { type: "youtube", id: "yLh295laHsU", caption: "Rolling Slime - Playthrough & Mechanics" }
    ]
  },
  {
    id: "jungle-jumpers",
    title: "Jungle Jumpers: 3...2..1. Banana",
    cat: "Adventure Puzzle / Unity",
    filter: ["games", "mechanics"],
    role: "Gameplay Programmer (C# / Unity)",
    thumb: "assets/images/jungle-jumpers.jpg",
    thumbFallback: "🍌",
    desc: "An adventure puzzle game crafted for the '3...2..1.' Game Jam. Hop your way through challenging spatial grids, outsmarting patrolling enemies and timing obstacles.",
    workflow: "Engineered grid-based player navigation, interactive hazard timing state machines, and level progression logic in Unity. Built responsive grid-movement interpolation and reactive audio feedback under strict 48-hour game jam constraints.",
    tags: ["Unity", "C#", "Game Jam", "Grid Navigation", "Puzzle Systems"],
    links: [
      { label: "Play on Itch.io", url: "https://maahi.itch.io/jungle-jumpers" },
      { label: "Watch Gameplay", url: "https://www.youtube.com/watch?v=gSjCLTuMblk" }
    ],
    media: [
      { type: "youtube", id: "gSjCLTuMblk", caption: "Jungle Jumpers - Gameplay Demonstration" }
    ]
  },
  {
    id: "world-of-ball",
    title: "World of Ball",
    cat: "3D Spatial Puzzle / Unity",
    filter: ["games", "mechanics"],
    role: "Gameplay & Mechanics Programmer (C#)",
    thumb: "assets/images/world-of-ball.png",
    thumbFallback: "🔮",
    desc: "A 3D spatial exploration puzzle game where players guide a lone traveler trapped in a portal loop, navigating curved landscapes to gather orbs while avoiding self-intersecting trails.",
    workflow: "Developed 3D physics-based sphere controller, momentum dampening, orb collection triggers, and portal teleportation logic in Unity. Programmed snake-like hazard trails that penalize backtracking.",
    tags: ["Unity", "C#", "3D Physics", "Spatial Puzzles", "Portal Mechanics"],
    links: [
      { label: "Play on Itch.io", url: "https://aakashbhagchandani.itch.io/worldofball" },
      { label: "Watch Gameplay", url: "https://www.youtube.com/watch?v=XCqCnfdeNlM" }
    ],
    media: [
      { type: "youtube", id: "XCqCnfdeNlM", caption: "World of Ball - Gameplay Walkthrough" }
    ]
  },
  {
    id: "meme-forest",
    title: "Meme Forest",
    cat: "Horror Survival / Unity",
    filter: ["games"],
    role: "Microphone & Input Systems Developer (C#)",
    thumb: "assets/images/meme-forest.png",
    thumbFallback: "🌲",
    desc: "A first-person survival horror game utilizing real-time microphone input. Players must physically make vocal noise to replenish their courage gauge and outrun forest horrors.",
    workflow: "Integrated Unity's microphone input API to sample acoustic frequency and volume thresholds in real-time. Designed courage-depletion loops, player stamina coupling, and proximity-based audio panic events.",
    tags: ["Unity", "C#", "Audio Analysis", "Mic Controls", "Survival Horror"],
    links: [
      { label: "View on Itch.io", url: "https://oguz-bicer.itch.io/memeforest" },
      { label: "Watch Gameplay", url: "https://www.youtube.com/watch?v=jXFQI8S_TtY" }
    ],
    media: [
      { type: "youtube", id: "jXFQI8S_TtY", caption: "Meme Forest - Audio-driven Gameplay" }
    ]
  },
  {
    id: "ball-again",
    title: "Ball Again",
    cat: "Precision Platformer / Unity",
    filter: ["games", "mechanics"],
    role: "Solo Developer & Programmer (C#)",
    thumb: "assets/images/ball-again.png",
    thumbFallback: "⚽",
    desc: "A fast-paced, deceptive indie platformer filled with sneaky traps and troll mechanics designed to keep players constantly adapting to unexpected hazards.",
    workflow: "Designed and programmed precision 2D ball physics, instantaneous respawn state loops, deceptive obstacle triggers, and physics-driven hazard timing in Unity. Published for WebGL browser play.",
    tags: ["Unity", "C#", "2D Physics", "Precision Platformer", "WebGL"],
    links: [
      { label: "Play on Itch.io", url: "https://mranzy.itch.io/ball-again" }
    ],
    media: [
      { type: "image", src: "assets/images/ball-again.png", caption: "Ball Again - Fast-paced troll platformer" }
    ]
  },
  {
    id: "pixi-racer",
    title: "Pixi Racer",
    cat: "Multiplayer Racing / Unity",
    filter: ["games", "mechanics"],
    role: "Gameplay & UI Developer (C#)",
    thumb: "assets/images/pixi-racer.jpg",
    thumbFallback: "🏎️",
    desc: "A split-screen multiplayer obstacle racer where two players race neck-and-neck through dynamic hazard-filled courses to reach the checkpoint first.",
    workflow: "Implemented local split-screen camera logic, high-responsiveness arcade vehicle controls, collision impulses, dynamic screen shake triggers, and real-time obstacle hazards.",
    tags: ["Unity", "C#", "Split-Screen", "Vehicle Physics", "Camera Shakes"],
    links: [
      { label: "View on Itch.io", url: "https://mranzy.itch.io/pixi-racer" }
    ],
    media: [
      { type: "image", src: "assets/images/pixi-racer.jpg", caption: "Pixi Racer - Split-screen competition" }
    ]
  },
  {
    id: "troopers",
    title: "Troopers",
    cat: "Endless Runner / Unity",
    filter: ["games"],
    role: "Lead Programmer (C#)",
    thumb: "assets/images/troopers.png",
    thumbFallback: "🚸",
    desc: "An endless runner game where players collect friends and march together in formation down busy streets while dodging oncoming traffic.",
    workflow: "Programmed the core squad-formation locomotion algorithm, spacebar brake/resume mechanics, dynamic mouse-velocity scaling, procedural traffic spawner, and collision game-over states in Unity.",
    tags: ["Unity", "C#", "Endless Runner", "Squad Movement", "Procedural Spawning"],
    links: [
      { label: "Play on Itch.io", url: "https://mranzy.itch.io/troopers" }
    ],
    media: [
      { type: "image", src: "assets/images/troopers.png", caption: "Troopers - Squad-based endless runner" }
    ]
  },
  {
    id: "chickens-breakout",
    title: "Chicken's Breakout",
    cat: "Arcade Hybrid / Unity",
    filter: ["games", "mechanics"],
    role: "Solo Developer & Programmer (C#)",
    thumb: "assets/images/chickens-breakout.png",
    thumbFallback: "🐔",
    desc: "A hybrid arcade title fusing classic Breakout brick-shattering with Space Invaders projectile shooting, featuring invading chickens with counter-attacks.",
    workflow: "Engineered dual gameplay mechanics: paddle ball-bouncing physics alongside real-time player laser shooting. Implemented enemy wave spawning, chicken projectile dodging, and lives management in Unity.",
    tags: ["Unity", "C#", "Arcade", "Breakout", "Space Invaders Hybrid"],
    links: [
      { label: "Play on Itch.io", url: "https://mranzy.itch.io/chickens-breakout" }
    ],
    media: [
      { type: "image", src: "assets/images/chickens-breakout.png", caption: "Chicken's Breakout - Breakout mixed with Space Invaders" }
    ]
  },
  {
    id: "angry-old-ben",
    title: "Angry Old Ben",
    cat: "Beat 'Em Up / Unity",
    filter: ["games", "mechanics"],
    role: "Gameplay & Combat Programmer (C#)",
    thumb: "assets/images/angry-old-ben.png",
    thumbFallback: "🥊",
    desc: "A fast-paced endless beat-'em-up where players control Uncle Ben fighting through overwhelming waves of street enemies to survive and chase high scores.",
    workflow: "Collaborated with team to program responsive brawler melee hitboxes, combo animations, enemy horde AI aggregation, knockback physics, and scoring multiplier systems in Unity.",
    tags: ["Unity", "C#", "Beat 'Em Up", "Combat Systems", "Enemy AI"],
    links: [
      { label: "Play on Itch.io", url: "https://leasmodeus.itch.io/angry-old-ben" }
    ],
    media: [
      { type: "image", src: "assets/images/angry-old-ben.png", caption: "Angry Old Ben - Endless beat-'em-up brawler" }
    ]
  },
  {
    id: "chess-2",
    title: "Chess 2",
    cat: "Turn-Based Strategy / Unity",
    filter: ["games"],
    role: "Gameplay Programmer (C#)",
    thumb: "assets/images/chess-2.jpg",
    thumbFallback: "♟️",
    desc: "A reimagined chess strategy game featuring pre-game custom board drafting and custom units including Bombers, Wizards, and modified King movement.",
    workflow: "Engineered custom board tile coordinate systems, legal move evaluation rules for fantasy piece types, draft placement state machines, and turn-based victory condition evaluation.",
    tags: ["Unity", "C#", "Turn-Based Strategy", "Custom Grid Logic", "Game Design"],
    links: [
      { label: "Play on Itch.io", url: "https://maahi.itch.io/chess-2" }
    ],
    media: [
      { type: "image", src: "assets/images/chess-2.jpg", caption: "Chess 2 - Strategic custom pieces & drafting" }
    ]
  },
  {
    id: "find-a-way-out",
    title: "FIND A WAY OUT",
    cat: "Gameboy Puzzle / 2D",
    filter: ["games"],
    role: "Systems & Mechanics Programmer",
    thumb: "assets/images/find-a-way-out.png",
    thumbFallback: "🕹️",
    desc: "A stylized Gameboy-aesthetic 2D maze exploration game where the player navigates labyrinths by shifting path polarities between black and white against a ticking clock.",
    workflow: "Created monochrome palette rendering pipeline, grid path collision shifting, time-attack countdown systems, and Gameboy-style retro controller constraints.",
    tags: ["2D Puzzle", "C#", "Gameboy Retro", "Polarity Shift", "Time Attack"],
    links: [
      { label: "Play on Itch.io", url: "https://tejaswini411.itch.io/gameboy-team06" }
    ],
    media: [
      { type: "image", src: "assets/images/find-a-way-out.png", caption: "FIND A WAY OUT - Gameboy Retro Maze" }
    ]
  },
  {
    id: "bright-the-brave",
    title: "Bright The Brave",
    cat: "2D Platformer / Unity",
    filter: ["games", "mechanics"],
    role: "Input & Mechanics Programmer (C#)",
    thumb: "assets/images/bright-the-brave.jpg",
    thumbFallback: "🌟",
    desc: "A 2D puzzle platformer featuring an inverted/indirect input control twist that forces players to rethink classic jumping mechanics.",
    workflow: "Developed custom 2D character controller with non-traditional input mapping, jump curve physics, hazard collision triggers, and level reset checkpoints in Unity.",
    tags: ["Unity", "C#", "2D Platformer", "Experimental Input", "Puzzle"],
    links: [
      { label: "Play on Itch.io", url: "https://maahi.itch.io/bright-the-brave" }
    ],
    media: [
      { type: "image", src: "assets/images/bright-the-brave.jpg", caption: "Bright The Brave - 2D platformer with input twist" }
    ]
  },
  {
    id: "god-of-war-axe",
    title: "Leviathan Axe Recall",
    cat: "Gameplay Mechanics / UE5",
    filter: ["mechanics"],
    role: "Gameplay Programmer (C++ / UE5)",
    thumb: "assets/images/axe-throw.gif",
    thumbFallback: "🪓",
    desc: "God of War-inspired Leviathan Axe throw, lodge-in-surface, and physical bezier curve recall mechanic developed in Unreal Engine 5.",
    workflow: "Engineered custom projectile trajectory with surface normal alignment on collision. Quadratic Bezier curve calculation with dynamic camera impulse and haptic rumble on recall catch.",
    tags: ["Unreal Engine 5", "C++", "Gameplay Mechanics", "Math / Bezier", "Physics"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/anzy03" }
    ],
    media: [
      { type: "image", src: "assets/images/axe-throw.gif", caption: "Leviathan Axe - Throw, Impact & Bezier Recall" }
    ]
  },
  {
    id: "brick-spanner",
    title: "Brick Spanner Tool",
    cat: "Level Design Tool / UE5",
    filter: ["tools"],
    role: "Tools Programmer (UE5 / Blueprints)",
    thumb: "assets/images/brick-spanner.jpg",
    thumbFallback: "🧱",
    desc: "Procedural level design editor utility widget in Unreal Engine 5 that enables level designers to rapidly generate complex modular brick walls with randomized surface damage.",
    workflow: "Engineered as an in-editor Blutility. Exposes user-configurable parameters: row count, brick spacing, curvature, and randomized noise seeds for worn brick placement.",
    tags: ["Unreal Engine 5", "Blueprints", "Editor Utilities", "Procedural Tools", "Level Design"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/anzy03" }
    ],
    media: [
      { type: "image", src: "assets/images/brick-spanner.jpg", caption: "Brick Spanner - Procedural Wall Generation in UE5" }
    ]
  },
  {
    id: "toon-shader",
    title: "Toon Cel-Shader",
    cat: "Shaders / ShaderLab",
    filter: ["shaders"],
    role: "Technical Artist / Shader Dev",
    thumb: "assets/images/toon-shader.gif",
    thumbFallback: "🎨",
    desc: "Custom stylized cel-shading lighting model with discrete stepped diffuse bands, customizable specular highlights, and outline edge detection.",
    workflow: "Authored in Unity ShaderLab with HLSL. Features multi-step light ramp evaluation, rim lighting for silhouette pop, and silhouette outline extrusion.",
    tags: ["ShaderLab", "HLSL", "Unity", "Cel Shading", "Stylized VFX"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/anzy03/Toon-Cel_Shading" }
    ],
    media: [
      { type: "image", src: "assets/images/toon-shader.gif", caption: "Stylized Toon / Cel Shader Lighting" }
    ]
  },
  {
    id: "curved-world",
    title: "Curved World Horizon Shader",
    cat: "Vertex Shaders / Unity",
    filter: ["shaders"],
    role: "Shader Developer (ShaderLab / HLSL)",
    thumb: "assets/images/curved-world.png",
    thumbFallback: "🌐",
    desc: "Real-time GPU vertex displacement shader that bends the world mesh around the camera to simulate a miniature planet or stylized curved horizon without altering world physics collisions.",
    workflow: "Displaces vertices in world space based on distance from the camera viewpoint using quadratic curvature equations, maintaining high performance and batching compatibility.",
    tags: ["ShaderLab", "HLSL", "Vertex Displacement", "Optimization"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/anzy03/Curved-World-Shader---Unity" }
    ],
    media: [
      { type: "image", src: "assets/images/curved-world.png", caption: "Curved World Horizon vertex bending effect" }
    ]
  },
  {
    id: "air-hockey",
    title: "Air Hockey CV Controller",
    cat: "OpenCV / Computer Vision",
    filter: ["tools", "mechanics"],
    role: "Gameplay & Computer Vision Dev",
    thumb: "assets/images/air-hockey.png",
    thumbFallback: "🏒",
    desc: "Interactive 2D Air Hockey game where player paddle controls are mapped to a real-world colored object tracked live via webcam through OpenCV color thresholding.",
    workflow: "Integrated OpenCV image processing pipeline with Unity. Streams webcam feed, isolates target HSV color ranges, calculates center-of-mass centroid coordinates, and smoothly interpolates paddle physics positions.",
    tags: ["Unity", "C#", "OpenCV", "Computer Vision", "Motion Tracking"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/anzy03/Air-Hockey-using-Color-Recognition" }
    ],
    media: [
      { type: "image", src: "assets/images/air-hockey.png", caption: "OpenCV Color Tracking Controller" }
    ]
  }
];

// State
let currentFilter = "all";
let activeModalProject = null;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initWorkGrid();
  initFilters();
  initExpTabs();
  initModalListeners();
});

// Work Grid
function initWorkGrid() {
  const grid = document.getElementById("work-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => {
    const hasVideo = p.media && p.media.length > 0 && (p.media[0].type === "youtube" || p.media[0].type === "video");
    return `
    <div class="project-card" data-id="${p.id}" data-filter="${p.filter.join(' ')}">
      ${hasVideo ? '<div class="card-video-badge">▶ Video</div>' : ''}
      <img class="project-thumb" src="${p.thumb}" alt="${p.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div class="project-thumb-fallback" style="display:none;">${p.thumbFallback}</div>
      <div class="project-overlay">
        <div class="card-cat">${p.cat}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-tags">
          ${p.tags.slice(0, 3).map(t => `<span class="card-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
  }).join('');

  // Card click triggers modal
  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openModal(id);
    });
  });
}

// Filter Tabs
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
    const filters = card.getAttribute("data-filter").split(" ");
    if (currentFilter === "all" || filters.includes(currentFilter)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// Experience Tabs
function initExpTabs() {
  const expBtns = document.querySelectorAll(".exp-tab-btn");
  const proGroup = document.getElementById("exp-group-pro");
  const eduGroup = document.getElementById("exp-group-edu");
  const expSection = document.getElementById("experience");

  expBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      expBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetTab = btn.getAttribute("data-tab");

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
    });
  });
}

// Modal Logic
function openModal(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;
  activeModalProject = project;

  document.getElementById("modal-cat").textContent = project.cat;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-desc").textContent = project.desc;
  document.getElementById("modal-workflow").textContent = project.workflow;
  
  document.getElementById("modal-tags").innerHTML = project.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  
  // Media - if video is attached, autoplay it immediately in the modal viewport
  const viewport = document.getElementById("modal-viewport");
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
    viewport.innerHTML = `<div style="font-size:3rem">${project.thumbFallback}</div>`;
  }

  // Action links
  const actionsEl = document.getElementById("modal-actions");
  actionsEl.innerHTML = project.links.map(l => `
    <a href="${l.url}" target="_blank" class="btn-solid" style="font-size:0.72rem; padding:0.5rem 1.1rem;">
      ${l.label} ↗
    </a>
  `).join('');

  document.getElementById("project-modal").classList.add("open");
  document.documentElement.classList.add("modal-open");
}

function closeModal() {
  document.getElementById("project-modal").classList.remove("open");
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
