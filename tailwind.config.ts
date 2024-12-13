import type { Config } from "tailwindcss"

import { plugin } from "./src/core/theme/plugin"
import { withTV } from "tailwind-variants/transformer"

const config: Config = withTV({
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/shared/ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [plugin],
}, {
  aliases: ["@/core/theme"],
})

export default config