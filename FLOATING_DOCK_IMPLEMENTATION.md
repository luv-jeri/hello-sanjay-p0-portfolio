# FloatingDock Component Implementation

## Overview
The FloatingDock is a Mac OS-style navigation component from Aceternity UI that provides an elegant, animated floating navigation bar at the bottom of the page.

## Installation
```bash
npx shadcn@latest add @aceternity/floating-dock
```

## Component Architecture

### 1. **Main FloatingDock Component** (`floating-dock.tsx`)

The component has three main parts:

#### a) **FloatingDock Wrapper**
- Renders both desktop and mobile versions
- Accepts `items`, `desktopClassName`, and `mobileClassName` props

```typescript
type FloatingDockProps = {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}
```

#### b) **FloatingDockDesktop**
- **Visibility**: Hidden on mobile, visible on desktop (≥md breakpoint)
- **Mouse Tracking**: Uses `useMotionValue` to track mouse X position
- **Layout**: Horizontal dock with rounded background
- **Styling**: `bg-gray-50 dark:bg-neutral-900` with `rounded-2xl`

**Key Features:**
- Real-time mouse position tracking
- Magnification effect on hover
- Spring-based animations for smooth transitions
- Resets mouse position to `Infinity` on mouse leave

#### c) **FloatingDockMobile**
- **Visibility**: Visible only on mobile (<md breakpoint)
- **Interaction**: Toggle button to expand/collapse menu
- **Animation**: Staggered reveal with `AnimatePresence`
- **Layout**: Vertical stack that appears above the toggle button

**Animation Details:**
- Items animate in with 0.05s delay between each
- Exit animation reverses the order
- Initial state: `opacity: 0, y: 10`
- Animate to: `opacity: 1, y: 0`

### 2. **IconContainer Component**

The heart of the magnification effect:

```typescript
function IconContainer({
  mouseX: MotionValue,
  title: string,
  icon: React.ReactNode,
  href: string
})
```

**Animation System:**

1. **Distance Calculation** (`useTransform`)
   ```typescript
   // Calculates distance from mouse to icon center
   let distance = useTransform(mouseX, (val) => {
     let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
     return val - bounds.x - bounds.width / 2;
   });
   ```

2. **Size Transformation** (`useTransform`)
   ```typescript
   // Maps distance to size: [-150, 0, 150] → [40, 80, 40]
   // When mouse is directly over icon (distance = 0), size is 80px
   // When mouse is 150px+ away, size is 40px
   let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
   let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
   
   // Icon sizes scale from 20px to 40px
   let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
   let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
   ```

3. **Spring Animation** (`useSpring`)
   ```typescript
   // Applies physics-based smoothing to size changes
   let width = useSpring(widthTransform, {
     mass: 0.1,        // Lower mass = lighter, faster movement
     stiffness: 150,   // Higher stiffness = snappier response
     damping: 12,      // Controls oscillation/bounce
   });
   ```

4. **Tooltip Display** (`AnimatePresence`)
   - Shows on hover with fade-in animation
   - Positioned above icon with `-top-8`
   - Centered horizontally with `left-1/2, x: "-50%"`

## Implementation in Portfolio

### File: `src/components/floating-dock-nav.tsx`

```typescript
"use client"

import React from "react"
import { FloatingDock } from "@/components/ui/floating-dock"
import {
  IconHome,
  IconBriefcase,
  IconCode,
  IconUser,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileDownload,
} from "@tabler/icons-react"
import { SITE_CONFIG } from "@/lib/constants"

export function FloatingDockNav() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/",
    },
    // ... more links
  ]

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <FloatingDock items={links} />
    </div>
  )
}
```

### Integration in Layout

```typescript
// src/app/layout.tsx
import { FloatingDockNav } from "@/components/floating-dock-nav"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingDockNav /> {/* Fixed at bottom */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## How the Magnification Works

### The Math Behind It

1. **Mouse Position**: Tracked globally across the dock
   ```typescript
   let mouseX = useMotionValue(Infinity) // Initially off-screen
   onMouseMove={(e) => mouseX.set(e.pageX)} // Update on move
   ```

2. **Distance Calculation**: For each icon
   ```typescript
   // Get icon's center position
   let iconCenterX = bounds.x + bounds.width / 2
   
   // Calculate distance from mouse
   let distance = mouseX - iconCenterX
   
   // distance = 0   → icon is directly under cursor
   // distance < 0   → icon is to the left of cursor
   // distance > 0   → icon is to the right of cursor
   ```

3. **Size Mapping**: Transform distance to size
   ```typescript
   // If distance is -150 or 150 (far away): size = 40px
   // If distance is 0 (directly under): size = 80px
   // If distance is -75 or 75 (halfway): size = 60px (interpolated)
   
   useTransform(distance, [-150, 0, 150], [40, 80, 40])
   ```

4. **Spring Physics**: Smooth the size changes
   ```typescript
   // Without spring: instant size changes (jarring)
   // With spring: smooth acceleration/deceleration (natural)
   
   useSpring(size, {
     mass: 0.1,      // How "heavy" the animation feels
     stiffness: 150, // How quickly it responds
     damping: 12,    // How much it bounces
   })
   ```

## Customization Guide

### 1. Change Magnification Range
```typescript
// Default: 40px → 80px (2x magnification)
let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

// Subtle: 40px → 60px (1.5x magnification)
let widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

// Dramatic: 40px → 100px (2.5x magnification)
let widthTransform = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
```

### 2. Adjust Magnification Radius
```typescript
// Default: 150px radius
let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

// Wider effect: 200px radius
let widthTransform = useTransform(distance, [-200, 0, 200], [40, 80, 40]);

// Tighter effect: 100px radius
let widthTransform = useTransform(distance, [-100, 0, 100], [40, 80, 40]);
```

### 3. Modify Spring Physics
```typescript
// Bouncier (lower damping)
useSpring(widthTransform, {
  mass: 0.1,
  stiffness: 150,
  damping: 8,  // More bounce
});

// Stiffer (higher stiffness)
useSpring(widthTransform, {
  mass: 0.1,
  stiffness: 300,  // Snappier response
  damping: 12,
});

// Heavier (higher mass)
useSpring(widthTransform, {
  mass: 0.3,  // Slower, weightier feel
  stiffness: 150,
  damping: 12,
});
```

### 4. Change Colors & Styling
```typescript
// Desktop dock background
className="bg-gray-50 dark:bg-neutral-900"  // Light/dark mode

// Icon containers
className="bg-gray-200 dark:bg-neutral-800"  // Individual icons

// Tooltip styling
className="bg-gray-100 dark:bg-neutral-800 text-neutral-700 dark:text-white"
```

### 5. Position Customization
```typescript
// Bottom center (default)
<div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">

// Bottom left
<div className="fixed bottom-6 left-6 z-50">

// Bottom right
<div className="fixed bottom-6 right-6 z-50">

// Vertical left side (requires rotation)
<div className="fixed left-6 top-1/2 z-50 -translate-y-1/2 rotate-90">
```

## Dependencies

- **motion/react** (Framer Motion v12): Animation library
- **@tabler/icons-react**: Icon library
- **React**: useRef, useState hooks
- **Tailwind CSS**: Styling

## Key Motion Hooks Used

1. **`useMotionValue`**: Creates animated value that can be updated without re-rendering
2. **`useTransform`**: Maps one motion value to another (distance → size)
3. **`useSpring`**: Applies spring physics to smooth animations
4. **`AnimatePresence`**: Handles enter/exit animations
5. **`motion.div`**: Animated div component

## Performance Considerations

1. **Mouse Tracking**: Global `useMotionValue` prevents re-renders on mouse move
2. **Transform Calculations**: Computed in animation loop, not React render cycle
3. **Spring Animations**: Hardware-accelerated via CSS transforms
4. **Lazy Evaluation**: Distance only calculated when mouse moves

## Browser Support

- Modern browsers with ES6+ support
- Requires CSS transforms and transitions
- Works on touch devices (mobile shows alternative UI)

## Accessibility

- Uses semantic `<a>` tags for navigation
- Icons have titles for tooltips
- Keyboard navigation supported via native anchor tags
- Screen reader friendly with descriptive titles

## Best Practices

1. **Icon Consistency**: Use same icon library throughout
2. **Link Order**: Organize logically (internal → external links)
3. **Color Scheme**: Match your app's theme
4. **Z-index**: Keep high enough to float above content
5. **Bottom Spacing**: Account for mobile browser chrome

## Troubleshooting

### Icons not scaling
- Check mouse tracking is working: `console.log(mouseX)`
- Verify `ref` is attached to icon container
- Ensure parent has pointer events enabled

### Jumpy animations
- Reduce stiffness or increase damping
- Check for conflicting CSS transitions
- Verify no forced re-renders on parent

### Mobile menu not opening
- Check `useState` is working
- Verify button onClick handler
- Check z-index conflicts

## References

- [Aceternity UI Documentation](https://ui.aceternity.com/components/floating-dock)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Build UI Implementation](https://buildui.com)
- [Rauno's Website](https://rauno.me) (Original inspiration)

