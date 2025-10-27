/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // light-gray
        input: "var(--color-input)", // gray-50
        ring: "var(--color-ring)", // purple-300
        background: "var(--color-background)", // white
        foreground: "var(--color-foreground)", // gray-800
        primary: {
          DEFAULT: "var(--color-primary)", // purple-700
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // purple-300
          foreground: "var(--color-secondary-foreground)", // gray-800
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-500
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // gray-50
          foreground: "var(--color-muted-foreground)", // gray-500
        },
        accent: {
          DEFAULT: "var(--color-accent)", // amber-500
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // gray-800
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // gray-800
        },
        success: {
          DEFAULT: "var(--color-success)", // emerald-500
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // amber-500
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // red-500
          foreground: "var(--color-error-foreground)", // white
        },
        // Purple Brand Spectrum
        purple: {
          light: "var(--color-purple-light)", // lavender
          medium: "var(--color-purple-medium)", // plum
          deep: "var(--color-purple-deep)", // blue-violet
          electric: "var(--color-purple-electric)", // electric-purple
          dark: "var(--color-purple-dark)", // dark-purple
        },
        surface: {
          DEFAULT: "var(--color-surface)", // gray-50
          foreground: "var(--color-surface-foreground)", // gray-800
        },
        text: {
          primary: "var(--color-text-primary)", // gray-800
          secondary: "var(--color-text-secondary)", // gray-500
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'], // Elegant serif for headlines
        body: ['Inter', 'sans-serif'], // Clean sans-serif for body text
        cta: ['Inter', 'sans-serif'], // Same as body for CTAs with weight variation
        accent: ['Playfair Display', 'serif'], // Matching headline font for accents
      },
      fontWeight: {
        'heading-normal': '400',
        'heading-semibold': '600',
        'heading-bold': '700',
        'body-normal': '400',
        'body-medium': '500',
        'cta-semibold': '600',
        'accent-normal': '400',
      },
      boxShadow: {
        'purple': 'var(--shadow-purple)',
        'purple-hover': 'var(--shadow-purple-hover)',
        'subtle': 'var(--shadow-subtle)',
      },
      backgroundImage: {
        'gradient-curious': 'var(--gradient-curious)',
        'gradient-connected': 'var(--gradient-connected)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-cta': 'var(--gradient-cta)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in": "slide-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "purple-pulse": "purple-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "purple-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 0 0 rgba(138, 43, 226, 0.7)" 
          },
          "70%": { 
            boxShadow: "0 0 0 10px rgba(138, 43, 226, 0)" 
          },
        },
      },
      spacing: {
        '18': '4.5rem', // 72px
        '88': '22rem', // 352px
        '128': '32rem', // 512px
      },
      transitionTimingFunction: {
        'purple': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}