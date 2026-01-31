# 2b Project - Product Filtering

A Next.js application with filterable and sortable product list using Shadcn UI.

## Installation

```bash
pnpm install
pnpm dlx shadcn@latest add card button select badge
```

(UI components are already included in this repo; run the above only if you need to re-add them.)

## Running the Project

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/` - Next.js App Router (layout, page, globals.css)
- `components/` - React components (product-card, select-control, ui/)
- `lib/` - Utilities (cn)
- `types/` - TypeScript types (SelectOption)
- `public/` - Static assets

## Features

- **Category filter**: All Products, Electronics, Clothing
- **Sort**: Default, Price Low to High, Price High to Low
- Responsive grid layout
- Shadcn UI + Tailwind CSS

## Tech Stack

- Next.js 14+ (App Router)
- React 18
- TypeScript
- Shadcn UI
- Tailwind CSS
