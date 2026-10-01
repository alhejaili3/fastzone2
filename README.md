# Fast Zone Website — Vercel / Next.js

Read **[README-AR.md](README-AR.md)** for the full Arabic installation and deployment guide.

This is the current Fast Zone website (source version 29) ported to standalone Next.js, with Cloudflare D1 over its HTTPS API, R2 direct uploads, and independent administrator login.

```sh
pnpm install --frozen-lockfile
cp .env.example .env.local
# Set all environment variables; import into a NEW EMPTY D1 database:
pnpm db:import
pnpm dev
# Production:
pnpm build
pnpm start
```

Configure environment variables before runtime. Never commit .env.local. Import backup/schema.sql and backup/database.json using the included script. Existing source and assets are included; node_modules and generated build output are excluded from the delivery archive.


Browser setup: see SETUP-GITHUB-AR.md. You can import the database from GitHub Actions using the included manual Initialize Fast Zone Database workflow; no local Node.js installation is required for this path.
