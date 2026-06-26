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
  /** repo lives under a collaborator's account / not public, so show a tag instead of a dead link */
  repoPrivate?: boolean;
  /** tooltip on the "Private repo" tag; defaults to the collaborative-project note */
  privateNote?: string;
  needsDemo?: boolean;
}

/* ---- FEATURED: large editorial rows ---- */
export const featured: Project[] = [
  {
    id: 'atlas',
    num: '01',
    name: 'Atlas',
    tagline: 'A Claude agent that does the books over chat, SMS, or a texted receipt photo',
    blurb:
      'An AI bookkeeping agent for small-business owners. Talk to it in plain language and it runs a real double-entry ledger, a lightweight CRM, and task pipelines, backed by ~40 permission-gated, typed tools over Postgres, with end-to-end type safety from schema to UI.',
    category: 'AI',
    year: '2026',
    role: '1 of 2 engineers · top contributor',
    stack: ['Next.js 16', 'tRPC 11', 'Drizzle', 'Neon Postgres', 'Claude Sonnet 4.5', 'Twilio'],
    highlights: [
      'Idempotency guard keyed on Claude’s tool_use_id so re-delivered webhooks replay instead of double-posting financial writes.',
      'Agent-built “Surfaces”: the model composes live dashboards from a Zod-validated component catalog bound to typed queries.',
      'Atomic ledger + audit writes via db.batch around Neon’s transaction-less HTTP driver, so books can never post without their event trail.',
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
      'A full-stack invoicing and revenue-tracking app built for and used in production by Avalos Drywall LLC. Branded PDF invoices, client management, payment tracking, and MTD/YTD revenue analytics, all backed by Firebase with real-time cross-device sync.',
    category: 'Web',
    year: '2025-26',
    role: 'Solo · in production',
    stack: ['React 19', 'TypeScript', 'Firebase', 'jsPDF', 'Recharts', 'Vite'],
    highlights: [
      'Client-side branded PDF invoice generation with embedded fonts, a logo, and a separate “PAID” stamped variant.',
      'Real-time sync via Firestore onSnapshot listeners wired to the auth lifecycle, subscribing on login and tearing down on logout.',
      'Route-level code splitting + lazy-loaded PDF/chart modules, verified as isolated chunks in the production bundle.',
    ],
    metric: '~57% smaller initial JS · live billing real clients',
    links: { github: 'https://github.com/Luis-avalos1/paper-trail' },
    repoPrivate: true,
    privateNote: 'In-production billing app, source kept private',
    needsDemo: true,
  },
  {
    id: 'a11y',
    num: '03',
    name: 'A11y Companion',
    tagline: 'A personal accessibility toolbar that follows you across any website',
    blurb:
      'A Chrome MV3 extension that injects a Shadow-DOM accessibility toolbar onto every page: dyslexia fonts, reading mode, a pointer-following reading ruler, true colorblindness simulation, hover-to-read screen reader, chunked read-aloud, voice commands, and on-device AI summaries plus plain-language rewrites. Ships presets and per-site settings that sync across sites and Chrome installs. Began as a capstone for nonprofit Lasagna Love.',
    category: 'Web',
    year: '2024-26',
    role: 'Solo · ~99 commits',
    stack: ['Vanilla JS', 'Chrome MV3', 'Shadow DOM', 'Web Speech API', 'SVG feColorMatrix', 'Gemini Nano'],
    highlights: [
      'Real protanopia/deuteranopia/tritanopia simulation via injected SVG feColorMatrix filters, not the usual hue-rotate hack.',
      'Works around Chrome’s ~15s speech stall by chunking page text into sentences with a self-advancing, highlightable queue.',
      'On-device AI summaries and plain-language rewrites run entirely locally through Chrome’s Gemini Nano, so page text never leaves the device.',
    ],
    metric: '~1.7K lines hand-written · 20+ voice commands',
    links: {
      github: 'https://github.com/Luis-avalos1/A11y-Companion',
      live: 'https://luis-avalos1.github.io/A11y-Companion/',
    },
  },
  {
    id: 'lore',
    num: '04',
    name: 'lore',
    tagline: 'A staleness watchdog for CLAUDE.md that flags when your repo has drifted',
    blurb:
      'A Claude Code plugin that keeps the context block at the top of CLAUDE.md synced to the current commit, and silently nudges you to refresh only when the repo has actually drifted. A pure-shell SessionStart hook with zero model-token cost. Distributed on the plugin marketplace.',
    category: 'Tooling',
    year: '2026',
    role: 'Solo · published',
    stack: ['Bash 3.2', 'Claude Code SDK', 'SessionStart hooks', 'git', 'GitHub Actions'],
    highlights: [
      'Drift detection (commit count, manifest changes, rewritten history) runs entirely in bash, staying silent unless a threshold trips.',
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
      'A C++17/Qt6 desktop app that imports GDAL-supported elevation rasters, converts them to LOD-tiered triangle meshes, and renders them in real time in an OpenGL 4.1 viewport with orbit camera, height colormap, live vertical exaggeration, wireframe/normal debug views, and satellite overlay. Ships a Python toolchain for headless batch conversion, plus an interactive Three.js/WebGL showcase that drapes the pipeline’s real terrain output (Fuji, SF, Grand Canyon, Everest) in-browser with sun/shadows and your own GeoTIFF upload.',
    category: 'Graphics',
    year: '2026',
    role: 'Solo',
    stack: ['C++17', 'Qt6', 'OpenGL 4.1', 'GLSL', 'GDAL/OGR', 'GLM', 'CMake'],
    highlights: [
      'Hand-written Quadric Error Metrics mesh simplifier (Garland-Heckbert) with per-vertex quadrics, an edge-collapse heap, and union-find merging.',
      'Full GDAL/OGR pipeline: any raster band → Float32 with bilinear resampling, plus WGS84→UTM conversion with auto zone detection.',
      'Distance-based LOD pyramid selected per-frame from camera distance, with off-thread import keeping the Qt UI responsive.',
    ],
    metric: '~2.5K LOC C++ · 4-level LOD · 4× MSAA',
    links: {
      github: 'https://github.com/Luis-avalos1/geospatial-terrain-importer',
      live: 'https://luis-avalos1.github.io/geospatial-terrain-importer/',
    },
  },
  {
    id: 'lowlight',
    num: '06',
    name: 'Low-Light Object Detection',
    tagline: 'Does image enhancement actually help object detection in the dark?',
    blurb:
      'A research-grade rebuild of a course project into a reproducible low-light detection benchmark on the 7,363-image ExDark dataset. It diagnoses why the original “enhancement barely helps” result was uninterpretable (a broken evaluation metric and two silently mis-mapped classes), then re-answers the question with a correct COCO-style evaluator, five detectors, twelve enhancement methods, and an honest fine-tuning ablation.',
    category: 'ML',
    year: '2024-26',
    role: 'Solo',
    stack: ['Python', 'PyTorch', 'Ultralytics YOLO', 'RT-DETR', 'OpenCV', 'NumPy'],
    highlights: [
      'Traced the original “enhancement doesn’t help” conclusion to three flaws (a per-image AP that collapsed the PR curve, plus Cup and Boat silently mapped to ~0 AP), then rebuilt a pooled COCO-style evaluator (101-pt AP, mAP@0.5 and mAP@[.5:.95], bootstrap CIs) cross-checked against Ultralytics val().',
      'Swept a detector × enhancement grid (YOLOv8/11, YOLOv5(u) and RT-DETR against 12 methods like CLAHE, MSR, MSRCR, and dark-channel-prior), then fine-tuned a native 12-class detector on ExDark to show fine-tuning is the dominant lever, not enhancement.',
      'Made the study reproducible end to end: a deterministic class-stratified split, known-answer unit tests for the evaluator and enhancers, and a one-command CLI pipeline (split → benchmark → fine-tune → report → animated showcase).',
    ],
    metric: '7,363 images · 5 detectors × 12 enhancers',
    links: {
      github: 'https://github.com/Luis-avalos1/Object-Detection-in-Low-Light-Environments',
      live: 'https://luis-avalos1.github.io/Object-Detection-in-Low-Light-Environments/',
    },
  },
];

/* ---- SECONDARY: compact grid (empty for now; re-add projects here and the
   "Also Built" section reappears automatically). ---- */
export const more: Project[] = [];

export const allProjects = [...featured, ...more];
