<h1 align="center">Portfolio · Next.js</h1>

<p align="center">
  Portfolio personal que muestra proyectos, skills y los cursos de Code & Lens en vivo desde su base de datos · Personal portfolio showing projects, skills and live Code & Lens courses from its database
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

<p align="center">
  <a href="#-español">Español</a> · <a href="#-english">English</a>
</p>

---

## 🇪🇸 Español

### Qué es

Portfolio hecho con **Next.js (App Router)** y **Server Components**. La home lista los cursos de la plataforma Code & Lens leyendo directamente su base MySQL/MariaDB con **Prisma** (esquema introspectado de la base de Laravel), y cada curso tiene su página dinámica.

### Secciones

- `/` — cursos de la plataforma, consultados en el servidor con Prisma.
- `/[id]` — detalle de cada curso (contenido HTML renderizado).
- `/projects` — proyectos destacados: plataforma React, plataforma Laravel y e-commerce.
- `/skills` — tecnologías.
- `/contact` — contacto.
- Página 404 personalizada y menú responsive.

### Cómo correrlo

```bash
git clone https://github.com/ClaudioParedesArbeloDev/nextjs-porfolio.git
cd nextjs-porfolio
npm install
npx prisma generate
npm run dev
```

Variables de entorno (`.env`):

```env
DATABASE_URL=
DATABASE_HOST=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
```

---

## 🇬🇧 English

### What it is

Portfolio built with the **Next.js App Router** and **Server Components**. The home page lists the Code & Lens platform's courses by querying its MySQL/MariaDB database directly with **Prisma** (schema introspected from the Laravel database), with a dynamic page per course.

### Pages

- `/` — platform courses, fetched server-side with Prisma.
- `/[id]` — course detail (rendered HTML content).
- `/projects` — featured projects: React platform, Laravel platform and e-commerce.
- `/skills`, `/contact`, custom 404 and responsive menu.

### Running it

```bash
npm install
npx prisma generate
npm run dev
```

Set the database variables listed above in `.env`.

---

<p align="center">
  Hecho por / Built by <a href="https://github.com/ClaudioParedesArbeloDev"><b>Claudio Paredes Arbelo</b></a> · <a href="https://www.claudioparedes.site">Code & Lens Solutions</a>
</p>
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
