"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { SelectControl } from "@/components/select-control";
import type { SelectOption } from "@/types";

type Product = {
  id: string;
  name: string;
  price: number;
  category: "electronics" | "clothing";
};

const PRODUCTS: Product[] = [
  { id: "1", name: "Wireless Headphones", price: 89.99, category: "electronics" },
  { id: "2", name: "Smart Watch", price: 199.99, category: "electronics" },
  { id: "3", name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { id: "4", name: "Denim Jeans", price: 59.99, category: "clothing" },
];

const CATEGORY_OPTIONS: SelectOption[] = [
  { value: "all", label: "All Products" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
];

const SORT_OPTIONS: SelectOption[] = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price Low to High" },
  { value: "price-desc", label: "Price High to Low" },
];

export default function Home() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const filteredAndSortedProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (filterCategory !== "all") {
      list = list.filter((p) => p.category === filterCategory);
    }

    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [filterCategory, sortBy]);

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Product Catalog
        </h1>

        {/* Tailwind test: red text should appear below ✅ */}
        <p id="tailwind-test" className="mt-4 text-red-500 font-semibold">
          Tailwind test — this text should be red
        </p>

        <div className="mb-8 flex flex-wrap items-center gap-6">
          <SelectControl
            selectLabel="Category"
            value={filterCategory}
            onValueChange={setFilterCategory}
            options={CATEGORY_OPTIONS}
            groupLabel="Filter by category"
            placeholder="All Products"
          />
          <SelectControl
            selectLabel="Sort by"
            value={sortBy}
            onValueChange={setSortBy}
            options={SORT_OPTIONS}
            groupLabel="Sort order"
            placeholder="Default"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
