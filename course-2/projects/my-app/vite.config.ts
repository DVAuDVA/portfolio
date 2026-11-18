import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
/// <reference types="@emotion/react/types/css-prop" />
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({jsxImportSource: "@emotion/react"}),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
