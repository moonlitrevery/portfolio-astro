# 💼 João Vitor Bruschi — Portfolio

<div align="center">

![Astro](https://img.shields.io/badge/Astro-4.10.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

**A modern, responsive portfolio website showcasing projects, experience, and skills as a Data Analyst & Data Scientist**

[🌐 Live Demo](#) • [📧 Contact](mailto:joao.bruschi@outlook.com.br) • [💼 LinkedIn](https://www.linkedin.com/in/joaobruschi/)

</div>

---

## ✨ Features

- 🌓 **Dark/Light Mode** - Toggle between themes with persistent preference
- 🌍 **Multi-language Support** - Full bilingual support (Portuguese BR / English)
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast & Lightweight** - Built with Astro for optimal performance
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🔍 **SEO Optimized** - Meta tags and semantic HTML for better discoverability
- ♿ **Accessible** - WCAG compliant with proper ARIA labels

## 🚀 Tech Stack

- **[Astro](https://astro.build/)** - Static site generator for fast, content-focused websites
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **HTML5 & CSS3** - Modern web standards

## 📋 Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Git

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/moonlitrevery/portfolio-astro.git
cd portfolio-astro
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-astro/
├── public/
│   ├── cv.pdf              # Resume/CV file
│   ├── icons/              # Social media icons
│   └── me.jpg              # Profile picture
├── src/
│   ├── components/         # Astro components
│   │   ├── Certifications.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── LanguageSelector.astro
│   │   ├── Projects.astro
│   │   └── ThemeToggle.astro
│   ├── data/
│   │   └── profile.ts      # Profile data (experience, projects, etc.)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro     # Main page
│   └── styles/
│       └── global.css      # Global styles and Tailwind config
├── astro.config.mjs        # Astro configuration
├── tailwind.config.cjs     # Tailwind CSS configuration
└── package.json
```

## 🎨 Customization

### Update Profile Information

Edit `src/data/profile.ts` to update:
- Work experience
- Education
- Certifications
- Projects
- Tech stack

### Modify Content & Translations

Edit `src/pages/index.astro` to update:
- Hero section text
- About section
- Skills descriptions
- All translations (PT/EN)

### Change Theme Colors

Modify `tailwind.config.cjs` to customize the color scheme:

```javascript
colors: {
  accent: {
    DEFAULT: '#7c3aed', // Main accent color
    light: '#8b5cf6',
    dark: '#6d28d9'
  }
}
```

### Update Resume

Replace `public/cv.pdf` with your own resume file.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run format` - Format code with Prettier

## 🌐 Deployment

This portfolio can be deployed to various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Update `astro.config.mjs` with your repository name:
   ```javascript
   base: '/portfolio-astro/',
   ```
2. Build the project: `npm run build`
3. Push the `dist` folder to the `gh-pages` branch

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**João Vitor Bruschi**

- 🌐 Website: [Portfolio](https://bit.ly/mlrvportifolio)
- 💼 LinkedIn: [@joaobruschi](https://www.linkedin.com/in/joaobruschi/)
- 💻 GitHub: [@moonlitrevery](https://github.com/moonlitrevery)
- 📧 Email: joao.bruschi@outlook.com.br
- 📷 Instagram: [@nyxvoiid](https://www.instagram.com/nyxvoiid/)

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)

---

<div align="center">

**⭐ If you find this portfolio helpful, please consider giving it a star! ⭐**

Made with ❤️ by João Vitor Bruschi

</div>
