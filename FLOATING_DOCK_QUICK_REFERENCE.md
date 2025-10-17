# FloatingDock - Quick Reference Cheatsheet

## 🚀 Quick Start (3 Steps)

```bash
# 1. Install component
npx shadcn@latest add @aceternity/floating-dock

# 2. Create your navigation
# See: src/components/floating-dock-nav.tsx

# 3. Add to layout
# import { FloatingDockNav } from "@/components/floating-dock-nav"
# <FloatingDockNav />
```

---

## 📐 The Magnification Formula

```
Mouse Position → Distance → Size → Spring → Rendered
      ↓              ↓         ↓        ↓         ↓
   e.pageX    →  val-center  →  px   →  smooth  →  CSS
```

### Visual Map
```
Distance:  -150    -75     0     +75    +150
            ↓       ↓      ↓       ↓      ↓
Size:       40  →  60  →  80  ←  60  ←  40
            🔹     🔸     🔶     🔸     🔹
           far    near  hover   near    far
```

---

## 🎛️ Key Props

```typescript
<FloatingDock
  items={[
    {
      title: string,      // Tooltip text
      icon: ReactNode,    // Icon component
      href: string        // Navigation URL
    }
  ]}
  desktopClassName=""   // Desktop dock styling
  mobileClassName=""    // Mobile menu styling
/>
```

---

## 🎨 Customization Cheat Sheet

### Magnification Intensity
```typescript
// Subtle:   [40, 60, 40]  → 1.5x
// Default:  [40, 80, 40]  → 2.0x
// Dramatic: [40, 100, 40] → 2.5x

useTransform(distance, [-150, 0, 150], [min, max, min])
```

### Magnification Radius
```typescript
// Tight:   [-100, 0, 100]  → Small area
// Default: [-150, 0, 150]  → Medium area  
// Wide:    [-200, 0, 200]  → Large area

useTransform(distance, [left, 0, right], [40, 80, 40])
```

### Spring Physics
```typescript
useSpring(value, {
  mass: 0.1,       // Weight: Lower = Lighter = Faster
  stiffness: 150,  // Response: Higher = Snappier
  damping: 12,     // Bounce: Lower = Bouncier
})

// Presets:
// Snappy:   { mass: 0.05, stiffness: 300, damping: 15 }
// Default:  { mass: 0.1,  stiffness: 150, damping: 12 }
// Smooth:   { mass: 0.3,  stiffness: 100, damping: 18 }
```

---

## 📍 Position Presets

```typescript
// Bottom Center (Default)
className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"

// Bottom Left
className="fixed bottom-6 left-6 z-50"

// Bottom Right  
className="fixed bottom-6 right-6 z-50"

// Top Center
className="fixed top-20 left-1/2 z-50 -translate-x-1/2"
```

---

## 🎭 Animation States

### Desktop Magnification
```
State:     Idle → Approach → Hover → Leave → Idle
Size:      40px →   60px   →  80px → 60px → 40px
Duration:  -    →  ~200ms  → instant→ ~200ms→  -
```

### Mobile Menu
```
State:     Closed → Opening → Open → Closing → Closed
Items:     Hidden →  Appear →  Show →  Fade   → Hidden
Stagger:   -      →  0.05s  →   -   →  0.05s  →   -
```

---

## 🔧 Common Modifications

### Change Icon Size Range
```typescript
// In floating-dock.tsx, find:
let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

// Modify the [min, max, min] values
```

### Change Dock Background
```typescript
// In floating-dock.tsx, find:
className="bg-gray-50 dark:bg-neutral-900"

// Replace with your colors:
className="bg-blue-50 dark:bg-blue-950"
```

### Change Tooltip Style
```typescript
// In floating-dock.tsx, find:
className="bg-gray-100 dark:bg-neutral-800 text-neutral-700 dark:text-white"

// Customize:
className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
```

### Change Mobile Toggle Icon
```typescript
// In floating-dock.tsx, find:
<IconLayoutNavbarCollapse />

// Replace with any icon:
<IconMenu />
```

---

## 🐛 Debugging Checklist

### Icons not scaling?
- [ ] Check `mouseX.get()` returns a number
- [ ] Verify `ref.current` is not null
- [ ] Ensure parent has `pointer-events: auto`

### Animations jumpy?
- [ ] Reduce stiffness: try `100`
- [ ] Increase damping: try `20`
- [ ] Check no CSS transitions conflict

### Mobile menu not working?
- [ ] `useState` hook working? Log `open`
- [ ] onClick handler attached?
- [ ] Check z-index conflicts

### Tooltips cut off?
- [ ] Add container padding
- [ ] Adjust `-top-8` value
- [ ] Use viewport constraints

---

## 📊 Performance Tips

```typescript
✅ DO:
- Use motion values for mouse tracking
- Keep transforms in animation loop
- Use refs for DOM measurements
- Leverage GPU acceleration (transforms)

❌ DON'T:
- Use useState for mouse position
- Calculate in render function
- Re-render on every mouse move
- Use expensive CSS properties (layout-shifting)
```

---

## 🎯 Hook Usage Pattern

```typescript
// 1. Track mouse globally
const mouseX = useMotionValue(Infinity)

// 2. Calculate distance per icon
const ref = useRef<HTMLDivElement>(null)
const distance = useTransform(mouseX, (val) => {
  const bounds = ref.current?.getBoundingClientRect()
  return val - bounds.x - bounds.width / 2
})

// 3. Transform distance to size
const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

// 4. Apply spring physics
const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 })

// 5. Use in motion component
<motion.div style={{ width, height }} />
```

---

## 📦 Dependencies

```json
{
  "motion": "^12.23.24",           // Framer Motion
  "@tabler/icons-react": "^3.35.0" // Icons
}
```

---

## 🔗 File Locations

```
Your Project Structure:
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── floating-dock.tsx          ← Core component
│   │   └── floating-dock-nav.tsx          ← Your implementation
│   └── app/
│       ├── layout.tsx                     ← Integration point
│       └── demo/floating-dock/page.tsx    ← Demo page

Documentation:
├── FLOATING_DOCK_SUMMARY.md               ← Full exploration
├── FLOATING_DOCK_IMPLEMENTATION.md        ← Technical deep dive
└── FLOATING_DOCK_QUICK_REFERENCE.md       ← This file
```

---

## 💡 Pro Tips

1. **Keep Icons Simple**: Use same icon library throughout
2. **Limit Items**: 6-10 items work best (too many = crowded)
3. **Test Mobile First**: Ensure expandable menu works well
4. **Theme Consistency**: Match your site's color scheme
5. **Z-index Management**: Keep dock above other floating elements
6. **Accessibility**: Ensure keyboard navigation works
7. **Performance**: Test on low-end devices

---

## 🎨 Color Scheme Examples

```typescript
// Material Blue
bg-blue-50 dark:bg-blue-950
bg-blue-200 dark:bg-blue-800
text-blue-500 dark:text-blue-300

// Vibrant Purple
bg-purple-50 dark:bg-purple-950
bg-purple-200 dark:bg-purple-800
text-purple-500 dark:text-purple-300

// Modern Green
bg-emerald-50 dark:bg-emerald-950
bg-emerald-200 dark:bg-emerald-800
text-emerald-500 dark:text-emerald-300

// Grayscale (Default)
bg-gray-50 dark:bg-neutral-900
bg-gray-200 dark:bg-neutral-800
text-neutral-500 dark:text-neutral-300
```

---

## 📱 Responsive Breakpoints

```typescript
// Desktop Dock (shown at ≥md)
className="hidden md:flex"

// Mobile Menu (shown at <md)
className="block md:hidden"

// Tailwind md breakpoint = 768px
```

---

## ⚡ One-Liners

```typescript
// Center at bottom
className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"

// Change intensity
useTransform(distance, [-150, 0, 150], [40, YOUR_MAX, 40])

// Adjust physics
useSpring(value, { mass: M, stiffness: K, damping: D })

// Log distance
console.log(distance.get())

// Check mouse position
console.log(mouseX.get())
```

---

## 🎓 Learning Path

1. ✅ Install component (`shadcn add`)
2. ✅ Try demo page (`/demo/floating-dock`)
3. ✅ Read implementation (`floating-dock.tsx`)
4. ✅ Customize navigation (`floating-dock-nav.tsx`)
5. ✅ Adjust physics (`mass`, `stiffness`, `damping`)
6. ✅ Change colors (Tailwind classes)
7. ✅ Test on mobile (resize browser)

---

## 📞 Quick Help

**Issue**: Not working at all
→ Check browser console for errors

**Issue**: No magnification effect
→ Verify mouse tracking: `console.log(mouseX.get())`

**Issue**: Too bouncy
→ Increase damping: `damping: 20`

**Issue**: Too slow
→ Increase stiffness: `stiffness: 300`

**Issue**: Icons too small/large
→ Adjust transform range: `[min, max, min]`

---

## 🎉 You're Done!

Your FloatingDock is installed and ready to use!

- Live on your portfolio at the bottom of every page
- Demo at: `http://localhost:3000/demo/floating-dock`
- Full docs: `FLOATING_DOCK_SUMMARY.md`

**Happy coding!** 🚀

