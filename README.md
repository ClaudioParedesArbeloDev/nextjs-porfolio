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
