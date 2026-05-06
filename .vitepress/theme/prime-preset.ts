import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

export const cMathPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: 'oklch(98.69% 0.0214 95.28)',
      100: 'oklch(96.19% 0.058 95.62)',
      200: 'oklch(92.43% 0.1151 95.75)',
      300: 'oklch(87.90% 0.1534 91.61)',
      400: 'oklch(83.69% 0.1644 84.43)',
      500: 'oklch(76.86% 0.1647 70.08)',
      600: 'oklch(66.58% 0.1574 58.32)',
      700: 'oklch(55.53% 0.1455 49)',
      800: 'oklch(47.32% 0.1247 46.20)',
      900: 'oklch(41.37% 0.1054 45.90)',
      950: 'oklch(27.91% 0.0742 45.64)'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.600}',
          inverseColor: 'oklch(18.83% 0.0296 81.93)',
          hoverColor: '{primary.500}',
          activeColor: '{primary.700}'
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.900}',
          focusColor: '{primary.950}'
        },
        surface: {
          0: 'oklch(100% 0 0)',
          50: 'oklch(98.51% 0 0)',
          100: 'oklch(96.74% 0.0013 286.38)',
          200: 'oklch(91.97% 0.004 286.32)',
          300: 'oklch(87.11% 0.0055 286.29)',
          400: 'oklch(71.18% 0.0129 286.07)',
          500: 'oklch(55.17% 0.0138 285.94)',
          600: 'oklch(44.19% 0.0146 285.79)',
          700: 'oklch(37.03% 0.0119 285.81)',
          800: 'oklch(27.39% 0.0055 286.03)',
          900: 'oklch(21.03% 0.0059 285.89)',
          950: 'oklch(14.08% 0.0044 285.82)'
        },
        formField: {
          hoverBorderColor: '{primary.color}',
          focusBorderColor: '{primary.color}'
        }
      },
      dark: {
        primary: {
          color: '{primary.400}',
          inverseColor: '{surface.950}',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}'
        },
        highlight: {
          background: 'oklch(76.86% 0.1647 70.08 / 0.18)',
          focusBackground: 'oklch(76.86% 0.1647 70.08 / 0.28)',
          color: 'oklch(92.88% 0.0126 255.51 / 0.96)',
          focusColor: 'oklch(100% 0 0)'
        },
        surface: {
          0: 'oklch(100% 0 0)',
          50: 'oklch(98.51% 0 0)',
          100: 'oklch(96.74% 0.0013 286.38)',
          200: 'oklch(91.97% 0.004 286.32)',
          300: 'oklch(87.11% 0.0055 286.29)',
          400: 'oklch(71.18% 0.0129 286.07)',
          500: 'oklch(55.17% 0.0138 285.94)',
          600: 'oklch(44.19% 0.0146 285.79)',
          700: 'oklch(37.03% 0.0119 285.81)',
          800: 'oklch(27.39% 0.0055 286.03)',
          900: 'oklch(21.03% 0.0059 285.89)',
          950: 'oklch(14.08% 0.0044 285.82)'
        },
        formField: {
          hoverBorderColor: '{primary.color}',
          focusBorderColor: '{primary.color}'
        }
      }
    },
    focusRing: {
      width: '2px',
      style: 'solid',
      color: '{primary.color}',
      offset: '2px'
    }
  }
})
