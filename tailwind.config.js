/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tempo: {
          navy: '#1B1F52',
          'navy-dark': '#101336',
          'navy-deep': '#0B0D26',
          'navy-light': '#282F73',
          gold: '#EDBE00',
          'gold-dark': '#D4A700',
          'gold-light': '#FFF6D6',
          'gold-subtle': '#FEF9E7',
          stone: '#F4F5F8',
          cream: '#FAF9F6',
          charcoal: '#1E242B',
          muted: '#64748B'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif']
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(27, 31, 82, 0.08)',
        'luxury-hover': '0 25px 50px -12px rgba(27, 31, 82, 0.16)',
        'gold-glow': '0 0 25px rgba(237, 190, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
