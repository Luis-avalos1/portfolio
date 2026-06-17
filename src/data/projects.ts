export interface Project {
  id: string;
  num: string;
  name: string;
  tagline: string;
  blurb: string;
  category: 'AI' | 'Web' | 'Graphics' | 'Tooling' | 'ML' | 'Security';
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
  metric?: string;
  links: {
    github?: string;
    live?: string;
  };
  /** repo lives under a collaborator's account / not public — show a tag instead of a dead link */
  repoPrivate?: boolean;
  needsDemo?: boolean;
}

/* ---- FEATURED: large editorial rows ---- */
export const featured: Project[] = [
  {
    id: 'atlas',
    num: '01',
    name: 'Atlas',
    tagline: 'A Claude agent that does the books — over chat, SMS, or a texted receipt photo',
    blurb:
      'An AI bookkeeping agent for small-business owners. Talk to it in plain language and it runs a real double-entry ledger, a lightweight CRM, and task pipelines — backed by ~40 permission-gated, typed tools over Postgres, with end-to-end type safety from schema to UI.',
    category: 'AI',
    year: '2026',
    role: '1 of 2 engineers · top contributor',
    stack: ['Next.js 16', 'tRPC 11', 'Drizzle', 'Neon Postgres', 'Claude Sonnet 4.5', 'Twilio'],
    highlights: [
      'Idempotency guard keyed on Claude’s tool_use_id so re-delivered webhooks replay instead of double-posting financial writes.',
      'Agent-built “Surfaces”: the model composes live dashboards from a Zod-validated component catalog bound to typed queries.',
      'Atomic ledger + audit writes via db.batch around Neon’s transaction-less HTTP driver — books can never post without their event trail.',
    ],
    metric: '14.5K LOC · 20 tables · 125 tests in CI',
    links: { github: 'https://github.com/eduardo-ballesteros/atlas-kernel1' },
    repoPrivate: true,
    needsDemo: true,
  },
  {
    id: 'papertrail',
    num: '02',
    name: 'PaperTrail',
    tagline: 'The invoicing platform running a real business’s billing',
    blurb:
      'A full-stack invoicing and revenue-tracking app built for and used in production by Avalos Drywall LLC. Branded PDF invoices, client management, payment tracking, and MTD/YTD revenue analytics — all backed by Firebase with real-time cross-device sync.',
    category: 'Web',
    year: '2025—26',
    role: 'Solo · in production',
    stack: ['React 19', 'TypeScript', 'Firebase', 'jsPDF', 'Recharts', 'Vite'],
    highlights: [
      'Client-side branded PDF invoice generation with embedded fonts, a logo, and a separate “PAID” stamped variant.',
      'Real-time sync via Firestore onSnapshot listeners wired to the auth lifecycle — subscribe on login, tear down on logout.',
      'Route-level code splitting + lazy-loaded PDF/chart modules, verified as isolated chunks in the production bundle.',
    ],
    metric: '~57% smaller initial JS · live billing real clients',
    links: { github: 'https://github.com/Luis-avalos1/paper-trail' },
    needsDemo: true,
  },
  {
    id: 'a11y',
    num: '03',
    name: 'A11y Companion',
    tagline: 'A personal accessibility toolbar that follows you across any website',
    blurb:
      'A Chrome MV3 extension that injects a Shadow-DOM accessibility toolbar onto every page: dyslexia fonts, true colorblindness simulation, hover-to-read screen reader, chunked read-aloud, voice commands, and on-device AI summaries. Began as a capstone for nonprofit Lasagna Love.',
    category: 'Web',
    year: '2024—26',
    role: 'Solo · ~99 commits',
    stack: ['Vanilla JS', 'Chrome MV3', 'Shadow DOM', 'Web Speech API', 'SVG feColorMatrix', 'Gemini Nano'],
    highlights: [
      'Real protanopia/deuteranopia/tritanopia simulation via injected SVG feColorMatrix filters — not the usual hue-rotate hack.',
      'Works around Chrome’s ~15s speech stall by chunking page text into sentences with a self-advancing, highlightable queue.',
      'On-device AI summaries run entirely locally through Chrome’s Gemini Nano — page text never leaves the device.',
    ],
    metric: '~1.7K lines hand-written · 20+ voice commands',
    links: { github: 'https://github.com/Luis-avalos1/accessibility-plugin' },
    needsDemo: true,
  },
  {
    id: 'lore',
    num: '04',
    name: 'lore',
    tagline: 'A staleness watchdog for CLAUDE.md — flags when your repo has drifted',
    blurb:
      'A Claude Code plugin that keeps the context block at the top of CLAUDE.md synced to the current commit, and silently nudges you to refresh only when the repo has actually drifted. A pure-shell SessionStart hook with zero model-token cost. Distributed on the plugin marketplace.',
    category: 'Tooling',
    year: '2026',
    role: 'Solo · published',
    stack: ['Bash 3.2', 'Claude Code SDK', 'SessionStart hooks', 'git', 'GitHub Actions'],
    highlights: [
      'Drift detection (commit count, manifest changes, rewritten history) runs entirely in bash — silent unless a threshold trips.',
      'Complete jq-free fallback JSON parser for stock macOS, with monorepo-aware git pathspec matching.',
      'Dependency-free test suite that builds throwaway git repos and re-runs itself without jq to cover both parser paths.',
    ],
    metric: '62 test runs, 0 failures · Linux + macOS CI',
    links: { github: 'https://github.com/Luis-avalos1/lore' },
    needsDemo: true,
  },
  {
    id: 'terrain',
    num: '05',
    name: 'Geospatial Terrain Importer',
    tagline: 'GeoTIFF elevation data → interactive 3D terrain in OpenGL',
    blurb:
      'A C++17/Qt6 desktop app that imports GDAL-supported elevation rasters, converts them to LOD-tiered triangle meshes, and renders them in real time in an OpenGL 4.1 viewport with orbit camera, height colormap, and satellite overlay. Ships with a Python toolchain for headless batch conversion.',
    category: 'Graphics',
    year: '2026',
    role: 'Solo',
    stack: ['C++17', 'Qt6', 'OpenGL 4.1', 'GLSL', 'GDAL/OGR', 'GLM', 'CMake'],
    highlights: [
      'Hand-written Quadric Error Metrics mesh simplifier (Garland-Heckbert) — per-vertex quadrics, edge-collapse heap, union-find merging.',
      'Full GDAL/OGR pipeline: any raster band → Float32 with bilinear resampling, plus WGS84→UTM conversion with auto zone detection.',
      'Distance-based LOD pyramid selected per-frame from camera distance, with off-thread import keeping the Qt UI responsive.',
    ],
    metric: '~2.5K LOC C++ · 4-level LOD · 4× MSAA',
    links: { github: 'https://github.com/Luis-avalos1/geospatial-terrain-importer' },
    needsDemo: true,
  },
  {
    id: 'lowlight',
    num: '06',
    name: 'Low-Light Object Detection',
    tagline: 'Benchmarking image enhancement for YOLOv5 detection in the dark',
    blurb:
      'A computer-vision study quantifying how classical image-enhancement methods affect object-detection accuracy in low light. It runs YOLOv5 over the 7,363-image ExDark dataset (12 classes), applies CLAHE, multi-scale Retinex, gamma correction and histogram equalization, and scores each variant with a from-scratch precision/recall/AP evaluation harness.',
    category: 'ML',
    year: '2024—25',
    role: 'Solo',
    stack: ['Python', 'PyTorch', 'YOLOv5', 'OpenCV', 'NumPy', 'scikit-learn'],
    highlights: [
      'Hand-implemented a weighted Multi-Scale Retinex (three sigma scales in the log domain) plus CLAHE, SSR, and gamma correction in OpenCV/NumPy.',
      'Wrote a complete detection-evaluation harness from scratch: vectorized IoU, greedy TP/FP matching at IoU 0.5, precision–recall curves, and average precision.',
      'Bridged datasets by mapping ExDark’s 12 classes onto COCO indices so a COCO-pretrained YOLOv5 could be scored against ExDark ground truth at scale.',
    ],
    metric: '7,363 low-light images · 50K+ result images',
    links: { github: 'https://github.com/Luis-avalos1/Object-Detection-in-Low-Light-Environments' },
    needsDemo: true,
  },
];

/* ---- SECONDARY: compact grid (empty for now — re-add projects here and the
   "Also Built" section reappears automatically). ---- */
export const more: Project[] = [];

export const allProjects = [...featured, ...more];
