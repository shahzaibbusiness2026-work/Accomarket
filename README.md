# AccoMarket — Trusted Account Marketplace

Modern, full-stack digital asset exchange built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Material UI (MUI)**. Protected by automated escrow clearing, PGP verification, and an integrated Admin Command Center.

---

## 🚀 Features

- **Peach Gradient Brand Hero**: Custom typography, Reddit Snoo mascot graphic, and floating benefit badges.
- **6-Platform Category Selector**: Reddit, Instagram, X (Twitter), TikTok, YouTube, and Other.
- **Featured & Dynamic Inventory**: Detailed account metrics (Age, Total Karma, Post/Comment Karma, SKU, Verification Status).
- **Listing Deep Analytics**: Annual karma growth bar charts, subreddit karma distribution percentages, and shadowban audits.
- **Escrow Checkout**: 3-step checkout with Credit/Debit Card and Multi-Chain Crypto (USDT, USDC, BTC, ETH) payment support.
- **Decrypted Delivery Vault**: Instant post-purchase credential reveal, show/hide password toggles, 48-hour inspection countdown timer, 4-step security checklist, and downloadable cryptographic audit certificate.
- **Admin Command Center (`/admin`)**:
  - Full Listings CRUD (Create, Read, Update, Delete).
  - Real-time synchronization with storefront inventory.
  - Escrow transaction ledger with early release and freeze/dispute controls.
  - Executive KPI analytics (Gross volume, Active in escrow, Clearance rate).
  - Single-click database export (`.json`).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Material UI (MUI)](https://mui.com/)
- **Language**: TypeScript
- **State Management**: React Context with `localStorage` persistence

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the customer storefront, or [http://localhost:3000/admin](http://localhost:3000/admin) to view the Admin Dashboard.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 📄 License
MIT © 2026 AccoMarket
