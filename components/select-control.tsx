"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SelectOption } from "@/types";

type SelectControlProps = {
  selectLabel: string;
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  groupLabel: string;
  placeholder?: string;
};

export function SelectControl({
  selectLabel,
  value,
  onValueChange,
  options,
  groupLabel,
  placeholder = "Select...",
}: SelectControlProps) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-base font-medium text-foreground">
        {selectLabel}
      </label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="h-12 w-[220px] bg-white text-base">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{groupLabel}</SelectLabel>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
