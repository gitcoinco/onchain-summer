"use client"

import { useState } from "react"
import { InfoIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type tooltipProps = {
  text: string
}

export default function IconWithTooltip({text}: tooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className="inline-flex items-center justify-center w-4 h-4 rounded-full text-primary hover:bg-primary/10 focus:outline-none "
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="More information"
        >
          <InfoIcon className="w-5 h-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 text-sm" side="top">
        {text}
      </PopoverContent>
    </Popover>
  )
}