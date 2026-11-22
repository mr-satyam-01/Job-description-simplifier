# CareerAI — Intelligent Career Path Recommender

> An ML-powered career recommendation engine that matches you to the right career based on your skills, interests, academic background, and personality — then shows your skill gaps and builds a personalised learning roadmap.

🌐 **Live Demo:** [career-recommender-rust.vercel.app](https://career-recommender-rust.vercel.app)

---

## Screenshots

| Landing | Form | Results |
|---------|------|---------|
| ![Landing](https://placehold.co/380x220/07060F/a78bfa?text=Landing+Page&font=raleway) | ![Form](https://placehold.co/380x220/07060F/a78bfa?text=4-Step+Form&font=raleway) | ![Results](https://placehold.co/380x220/07060F/a78bfa?text=Career+Results&font=raleway) |

---

## How It Works

### 1. You fill out a 4-step form

| Step | Input | How It's Stored |
|------|-------|-----------------|
| ⚡ Skills | Select skills + rate proficiency with a slider | `Record<skillId, 0–1>` |
| 💡 Interests | Pick interest areas from a grid | `string[]` |
| 📚 Subjects | Rate academic subjects (1–4 stars) | `Record<subjectId, 0–1>` |
| 🧬 Personality | Adjust 10 bipolar trait sliders | `Record<traitId, 0–1>` |

### 2. The ML engine runs in the browser

Your profile is compared against 20 career profiles using **cosine similarity** — the same mathematical technique used in production recommendation systems. Each career is a weighted multi-dimensional vector; the engine finds which career vectors are closest to yours.

**Feature weights:**

| Factor | Weight | Rationale |
|--------|--------|-----------|
| Skills | **38%** | Most direct indicator of career fit |
| Interests | **28%** | Long-term motivation and engagement |
| Personality | **20%** | Work style and environment alignment |
| Subjects | **14%** | Academic background context |

### 3. You get ranked results with deep insights

For each of the **top 5 matching careers**, you see:

- **Match score** (0–100) with an animated ring
- **Confidence level** — High / Good / Exploratory
- **Decision breakdown** — radar chart + per-factor scored bars
- **Skill gap analysis** — your level vs required, colour-coded by urgency
- **Learning roadmap** — 3-phase plan with curated courses, books, projects, and certs
- **Adjacent careers** — related paths worth exploring

---

## Features

- 🤖 **Cosine Similarity ML** — pure TypeScript, no backend or API calls
- ⚖️ **Feature Weighting** — 4-factor weighted scoring system
- 📊 **Skill Gap Analysis** — visualised dual-bar comparison
- 🗺️ **Learning Roadmap** — phase-by-phase with resource tags
- 🧠 **Decision Intelligence** — explainable AI with natural language summaries
- ✨ **Animated UI** — particle background, Framer Motion transitions, SVG score ring
- 📱 **Fully Responsive** — works on mobile through desktop

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v3 + DaisyUI v4 |
| Animations | Framer Motion v11 |
| Charts | Recharts v2 |
| ML Engine | Pure TypeScript (no backend) |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── components/
│   ├── form/
│   │   └── FormWizard.tsx       # 4-step form with animated transitions
│   ├── results/
│   │   └── ResultsPage.tsx      # Results layout, tabs, skill gap, roadmap
│   └── ParticleBackground.tsx   # Canvas particle network
├── data/
│   ├── careers.ts               # 20 career profiles (knowledge base)
│   └── taxonomy.ts              # 35 skills, 20 interests, 20 subjects, 10 traits
├── ml/
│   └── recommender.ts           # Cosine similarity engine + explainability
├── styles/
│   └── index.css                # Design system (violet/amber theme)
├── types.ts                     # TypeScript interfaces
└── App.tsx                      # App state machine (landing → form → results)
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/AnahadhBirdh/career-recommender.git
cd career-recommender

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Career Knowledge Base

20 careers across 12 domains:

`Technology` `Data & AI` `Design` `Business` `Healthcare` `Finance` `Law` `Engineering` `Science` `Education` `Creative` `Entrepreneurship`

Each career profile contains required skill weights, ideal interest relevance scores, personality fit vectors, salary range, growth rate, job demand, top companies, and a 3-phase learning roadmap.

---

## ML Engine — `src/ml/recommender.ts`

```typescript
// Core algorithm
function cosineSimilarity(userVec, careerVec): number {
  // dot(u, c) / (|u| * |c|)
}

// Weighted composite score
const WEIGHTS = { skills: 0.38, interests: 0.28, personality: 0.20, subjects: 0.14 }

// Returns top N results with full explainability
export function recommend(user: UserProfile, topN = 5): RecommendationResult[]
```

---

## Deploying to Vercel

```bash
npm install -g vercel
vercel --prod
```

The `vercel.json` at the root handles SPA routing rewrites automatically.

---

## License

MIT — free to use, fork, and build on.
