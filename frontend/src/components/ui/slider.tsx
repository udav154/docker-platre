"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-100">
      <SliderPrimitive.Range className="absolute h-full bg-gold" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block relative h-5 w-5 rounded-full bg-gold ring-offset-white transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-50 dark:bg-gold0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300">
      <span className="flex justify-center items-center border text-center absolute bottom-7 right-m40px border-gold h-7 w-24 text-white py-3 px-5">{props.value}</span>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
