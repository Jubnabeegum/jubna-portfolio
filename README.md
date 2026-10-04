# Jubna Beegum OS — Portfolio

Dark, recruiter-friendly Full Stack Developer portfolio inspired by your reference design.

Stack: **Next.js · React · TypeScript · Tailwind CSS**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit almost everything in one place:

**[`src/data/site.ts`](src/data/site.ts)**

| What | Where |
| --- | --- |
| GitHub URL | `links.github` |
| LinkedIn URL | `links.linkedin` |
| Resume PDF | put file at `public/resume.pdf` |
| Project demo / GitHub links | each project’s `liveUrl` / `githubUrl` |
| Experience / education | `experiences` / `education` arrays |

## Contact form (email to your inbox)

The form posts to `/api/contact` and delivers mail via [Web3Forms](https://web3forms.com) — no mail app opens.

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter **jubnanikhil143@gmail.com** and create a free access key
3. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

4. Paste your key:

```env
WEB3FORMS_ACCESS_KEY=your_real_key_here
CONTACT_TO_EMAIL=jubnanikhil143@gmail.com
```

5. Restart `npm run dev`

On Vercel, add the same env vars in **Project → Settings → Environment Variables**.

## Deploy to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add `WEB3FORMS_ACCESS_KEY` (and optional `CONTACT_TO_EMAIL`)
4. Deploy with default Next.js settings
