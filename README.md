# Arnav Sanghavi — Technical Gameplay Designer & Systems Engineer

> **Live Website:** [https://anzy03.github.io/Portfolio/](https://anzy03.github.io/Portfolio/)

Technical Gameplay Designer & Gameplay Systems Engineer at **The Coalition Studio (Microsoft)**, specializing in **C++ gameplay architecture, NPC behavior systems (StateTree / Smart Objects), systemic spawning, and player locomotion** across Unreal Engine and Unity.

---

## 🎮 Featured Highlights

- **The Coalition (Microsoft) · Gears of War: E-Day** — Gameplay architecture, NPC combat behavior, systemic spawning, cover traversal systems.
- **FEI Equestriad World Tour** — Cross-platform physics, horse locomotion, tournament management.
- **20+ Projects** across gameplay systems, mechanics, AI, tools, and technical prototypes.
- **Interactive Trailer Modal** with direct YouTube gameplay previews and technical implementation breakdowns.

---

## ⚙️ Updating Content via `data.json`

All content on the website is data-driven and can be updated directly by editing **`data.json`** without modifying any HTML or JavaScript code:

### 1. Add a New Project
In `data.json` under `"projects"`, add a new object:
```json
{
  "id": "my-new-game",
  "title": "My New Game",
  "cat": "Action RPG / UE5",
  "filter": ["games", "mechanics"],
  "role": "Gameplay Systems Engineer",
  "thumb": "assets/images/my-new-game.jpg",
  "thumbFallback": "🎮",
  "desc": "Short overview shown on the card.",
  "workflow": "In-depth technical breakdown shown in the interactive modal.",
  "tags": ["Unreal Engine 5", "C++", "Combat Systems"],
  "links": [
    { "label": "Play on Itch.io", "url": "https://mranzy.itch.io/" }
  ],
  "media": [
    { "type": "youtube", "id": "YOUTUBE_VIDEO_ID", "caption": "Gameplay Demonstration" }
  ]
}
```

### 2. Add or Update Work Experience
In `data.json` under `"experience"`, add an entry:
```json
{
  "period": "2026 — Present",
  "org": "Studio Name",
  "subOrg": "Parent Company",
  "project": "Project Title",
  "role": "Lead Gameplay Engineer",
  "summary": "High-level summary of your responsibilities.",
  "bullets": [
    "Key engineering achievement or system architecture detail.",
    "Performance optimization metric."
  ],
  "chips": ["Unreal Engine 5", "C++", "StateTree"]
}
```

### 3. Update Profile, Education, or Skills
- **`profile`**: Update name, bio, tagline, email, location, or social links.
- **`skills`**: Add or modify categories and skill items.
- **`education`**: Add degrees, diplomas, institutions, and honors.
