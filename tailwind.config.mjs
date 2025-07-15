import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        ticket1: {
          '0%, 100%': { transform: 'translate(0,0) rotate(0deg)' },
          '25%': { transform: 'translate(30px,-40px) rotate(15deg)' },
          '50%': { transform: 'translate(60px,10px) rotate(-10deg)' },
          '75%': { transform: 'translate(20px,30px) rotate(5deg)' },
        },
        ticket2: {
          '0%, 100%': { transform: 'translate(0,0) rotate(0deg)' },
          '25%': { transform: 'translate(-20px,-30px) rotate(-15deg)' },
          '50%': { transform: 'translate(-50px,10px) rotate(10deg)' },
          '75%': { transform: 'translate(-10px,40px) rotate(-5deg)' },
        },
        ticket3: {
          '0%, 100%': { transform: 'translate(0,0) rotate(0deg)' },
          '25%': { transform: 'translate(40px,30px) rotate(10deg)' },
          '50%': { transform: 'translate(-20px,50px) rotate(-10deg)' },
          '75%': { transform: 'translate(10px,-20px) rotate(5deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        ticket1: 'ticket1 6s linear infinite',
        ticket2: 'ticket2 7s linear infinite',
        ticket3: 'ticket3 8s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
