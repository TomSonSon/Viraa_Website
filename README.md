# Viraa Health Website

A professional, Apple-style website for Viraa Health featuring two distinct gradient designs that convey confidence and professionalism for a health business.

## 🎨 Two Design Versions

### Version 1: Photo-Inspired Gradient
- **File**: `index.html` + `styles.css`
- **Colors**: Red-blue-purple gradient inspired by the uploaded photo
- **Gradient Colors**:
  - `#0F2F65` (Dark blue)
  - `#E687D8` (Light pinkish-purple)
  - `#347BD1` (Medium vibrant blue)
  - `#6890E2` (Lighter soft blue)
  - `#07265C` (Darker almost black-blue)
  - `#A88BDF` (Soft muted lavender purple)

### Version 2: HealthColors.swift Inspired
- **File**: `index-health.html` + `styles-health.css`
- **Colors**: Based on your HealthColors.swift definitions
- **Gradient Colors**:
  - Health Low: `hsl(142, 69%, 58%)` → `hsl(142, 69%, 48%)`
  - Health Medium: `hsl(48, 100%, 67%)` → `hsl(48, 100%, 57%)`
  - Health High: `hsl(0, 84%, 60%)` → `hsl(0, 84%, 50%)`
  - Health Primary: `hsl(210, 79%, 46%)` → `hsl(210, 79%, 36%)`

## ✨ Features

### Apple-Style Design Guidelines
- **Typography**: SF Pro Display font family with proper weights and spacing
- **Clean Layout**: No menu bars, minimal and focused design
- **Professional Aesthetics**: Glassmorphism effects with backdrop blur
- **Accessibility**: High contrast mode support, reduced motion preferences
- **Responsive**: Mobile-first design with proper breakpoints

### Content
- **Title**: "Viraa Health"
- **Subtitle**: "Our AI keeps you healthy - proactively."
- **App Store Button**: Official Apple design guidelines with hover effects

### Technical Features
- **Modern CSS**: CSS custom properties, flexbox, grid
- **Performance**: Optimized gradients with hardware acceleration
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Animations**: Subtle parallax, smooth transitions, reduced motion support

## 🚀 Getting Started

1. **Version 1 (Photo-Inspired)**:
   ```bash
   open index.html
   ```

2. **Version 2 (HealthColors.swift Inspired)**:
   ```bash
   open index-health.html
   ```

## 🎯 Design Philosophy

Both versions follow Apple's Human Interface Guidelines:
- **Clarity**: Clean, uncluttered interface
- **Deference**: Content is the focus, not the interface
- **Depth**: Subtle layering and visual hierarchy

### Health Business Focus
- **Trust**: Professional color schemes that inspire confidence
- **Calm**: Soothing gradients that reduce anxiety
- **Modern**: Contemporary design that suggests innovation

## 📱 Responsive Design

Both versions are fully responsive with breakpoints at:
- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop**: 769px and above

## 🔧 Customization

To modify colors, update the CSS custom properties in the `:root` selector:

```css
:root {
    /* Photo-inspired version */
    --gradient-color-1: #0F2F65;
    --gradient-color-2: #E687D8;
    /* ... */
    
    /* Health-inspired version */
    --health-low-hsl: 142, 69%, 58%;
    --health-primary-hsl: 210, 79%, 46%;
    /* ... */
}
```

## 📄 Files Structure

```
Viraa_Website/
├── index.html              # Version 1 (Photo-inspired)
├── styles.css              # Version 1 styles
├── index-health.html       # Version 2 (HealthColors.swift inspired)
├── styles-health.css       # Version 2 styles
├── script.js               # Shared JavaScript
├── HealthColors.swift      # Reference color definitions
└── README.md              # This file
```

## 🎨 Color Psychology

### Version 1 (Photo-Inspired)
- **Blue**: Trust, reliability, professionalism
- **Purple**: Innovation, wisdom, luxury
- **Pink**: Care, compassion, health

### Version 2 (HealthColors.swift)
- **Green**: Health, growth, safety
- **Amber**: Caution, attention, energy
- **Red**: Urgency, importance, vitality
- **Blue**: Trust, stability, medical

Both versions are designed to convey confidence and professionalism while maintaining the calming, trustworthy aesthetic essential for a health business.