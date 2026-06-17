# Deploy & Domain Guide

Everything you need to get **luisavalos.dev** live. Budget ~20 minutes end to end.

---

## 1. Buy the domain — `luisavalos.dev`

`.dev` is a Google-run TLD that is **HTTPS-only by default** (great for a dev portfolio). It is *not* available at Google Domains anymore (that shut down). Cheapest reputable options:

| Registrar | ~Price/yr (.dev) | Notes |
|---|---|---|
| **Cloudflare Registrar** | **~$10–12 (at cost, no markup)** | Cheapest. Requires moving DNS to Cloudflare (free). Best long-term. |
| **Porkbun** | ~$11–13 | Easiest UX, free WHOIS privacy, no upsells. Great pick. |
| **Namecheap** | ~$13–15 | Familiar, fine. |

> ✅ I verified on 2026-06-16 that `luisavalos.dev` was **available**. Grab it soon — names move.

**Recommended: Porkbun** (simplest) or **Cloudflare** (cheapest).
1. Go to the registrar, search `luisavalos.dev`, add to cart, check out.
2. Enable auto-renew + WHOIS privacy (free on both).

---

## 2. Push this repo to GitHub

```bash
cd /Users/luisavalos/Desktop/repos/portfolio
git add -A
git commit -m "Brutalist editorial portfolio"
# create the repo on github.com first (e.g. "portfolio"), then:
git remote add origin https://github.com/Luis-avalos1/portfolio.git
git branch -M main
git push -u origin main
```

(There's already a git repo here, so you may just need the remote + push.)

---

## 3. Deploy — Vercel (recommended for Astro)

Astro deploys to Vercel with **zero config** — it auto-detects the framework.

1. Go to **vercel.com** → sign in with GitHub.
2. **Add New → Project** → import your `portfolio` repo.
3. Framework preset auto-detects **Astro**. Build command `astro build`, output `dist/`. Leave defaults.
4. **Deploy.** You'll get a live `*.vercel.app` URL in ~30s.

> CLI alternative: `npm i -g vercel && vercel` (then `vercel --prod`).

### Netlify (equally good)
1. **netlify.com** → Add new site → import from GitHub.
2. Build command `astro build`, publish directory `dist`. Deploy.

---

## 4. Connect `luisavalos.dev` to the deploy

**On Vercel:** Project → **Settings → Domains** → add `luisavalos.dev` and `www.luisavalos.dev`. Vercel shows you the exact DNS records to add at your registrar:
- Apex (`luisavalos.dev`): an **A record → 76.76.21.21** (Vercel shows the current value), or set nameservers to Vercel.
- `www`: a **CNAME → cname.vercel-dns.com**.

**At your registrar** (Porkbun/Cloudflare): open DNS settings and paste those records. SSL is issued automatically (Let's Encrypt) within a few minutes.

**On Netlify:** Domain settings → Add custom domain → follow the same A/CNAME instructions, or point nameservers to Netlify DNS.

> `.dev` forces HTTPS via HSTS preload — both hosts provision the cert automatically, so just wait for "valid certificate" to show.

---

## 5. Post-launch checks

- [ ] Visit `https://luisavalos.dev` — confirm the padlock (HTTPS).
- [ ] Test on your phone.
- [ ] Paste the URL into a [social card validator](https://www.opengraph.xyz/) to see the share image. (To regenerate it, run `node scripts/og.mjs`.)
- [ ] Run Lighthouse (Chrome DevTools → Lighthouse). Astro ships almost no JS, so expect ~95–100.

---

## Local development reminders

```bash
npm run dev       # local dev server with HMR  → localhost:4321
npm run build     # production build → dist/
npm run preview   # preview the production build locally
node scripts/shoot.mjs http://localhost:4321/ /tmp/pf 1440   # screenshot (needs preview/dev running)
```
