import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

export const cMathPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.600}',
          inverseColor: '#06141d',
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
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        },
        formField: {
          hoverBorderColor: '{primary.color}',
          focusBorderColor: '{primary.color}'
        }
      },
      dark: {
        primary: {
          color: '{primary.300}',
          inverseColor: '{surface.950}',
          hoverColor: '{primary.200}',
          activeColor: '{primary.100}'
        },
        highlight: {
          background: 'rgba(59, 130, 246, 0.18)',
          focusBackground: 'rgba(59, 130, 246, 0.28)',
          color: 'rgba(226, 232, 240, 0.96)',
          focusColor: '#ffffff'
        },
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
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
