import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const config = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [".next/**", "node_modules/**", "user_read_only_context/**", "v0_memories/**", "next-env.d.ts"],
  },
]

export default config
