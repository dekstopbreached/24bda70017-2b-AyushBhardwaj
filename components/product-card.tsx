"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProductCardProps = {
  name: string;
  price: number;
  category: "electronics" | "clothing" | string;
};

export function ProductCard({ name, price, category }: ProductCardProps) {
  const badgeVariant =
    category === "electronics"
      ? "default"
      : category === "clothing"
        ? "secondary"
        : "outline";

  return (
    <Card className="border-gray-200 bg-white">
      <CardHeader>
        <CardTitle className="text-3xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-lg font-medium">
          ${price.toFixed(2)}
        </p>
        <Badge variant={badgeVariant}>{category}</Badge>
      </CardContent>
    </Card>
  );
}
