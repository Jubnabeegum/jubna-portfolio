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

## Deploy to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Deploy with default Next.js settings
