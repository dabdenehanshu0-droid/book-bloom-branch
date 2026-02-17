# Logs
logs
*.log# 📚 Book Bloom Branch

A modern digital library web application that reimagines how users discover, borrow, and interact with books. Featuring AI-powered recommendations, QR code-based book access, and a clean categorized collection — all in a fast, responsive interface.

---

## ✨ Features

- **AI-Powered Recommendations** — Personalized book suggestions based on user interests
- **Digital Borrowing & Reservations** — Browse availability and reserve books online instantly
- **QR Code Access** — Scan QR codes for quick book info and borrowing
- **Categorized Collection** — Explore books across Technology, Science, Literature, Business, Arts, and more
- **Responsive Design** — Fully optimized for desktop and mobile devices
- **Dark Mode Support** — Built-in theme support via `next-themes`

---

## 🛠 Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Routing:** React Router DOM
- **Forms:** React Hook Form + Zod
- **State/Data:** TanStack Query

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/book-bloom-branch.git

# Navigate into the project directory
cd book-bloom-branch

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
src/
├── assets/          # Static images and media
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui base components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── BookCard.tsx
│   ├── HeroSection.tsx
│   ├── FeaturedBooks.tsx
│   └── CategoriesSection.tsx
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page-level components
└── main.tsx         # App entry point
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
