"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

export function SearchInput({ onSearch }: SearchInputProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedSearch = useCallback(
    (query: string) => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        onSearch(query);
      }, 300);
    },
    [onSearch]
  );

  useEffect(() => {
    if (searchQuery !== null) {
      debouncedSearch(searchQuery);
    }

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [searchQuery, debouncedSearch]);

  const handleToggle = () => {
    setIsVisible(!isVisible);
    if (isVisible) {
      setSearchQuery("");
      onSearch("");
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, typeof e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative flex items-center md:ml-auto">
      {!isVisible ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggle}
          aria-label="Show search input"
          className="text-muted-foreground hover:text-foreground hover:bg-white/10">
          <Search className="h-5 w-5" />
        </Button>
      ) : (
        <div className="relative">
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery ?? ""}
            onChange={handleInputChange}
            className="w-[200px] pr-8"
            autoFocus
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full bg-white/10"
            onClick={searchQuery ? handleClear : handleToggle}
            aria-label={searchQuery ? "Clear search" : "Hide search input"}>
            {searchQuery ? (
              <X className="h-4 w-4" />
            ) : (
              <Search className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
