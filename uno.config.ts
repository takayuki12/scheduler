import { defineConfig, presetIcons, presetWind, presetWebFonts } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [
    presetWind({
      extends: {
        theme: {
          colors: {
            primary: "#ffee58",
          },
        },
      },
    }),
    presetIcons(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Roboto",
      },
    }),
  ],
  transformers: [transformerDirectives()],
});
