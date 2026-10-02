/**
 * FONTS — change the site's fonts here.
 * Any font from https://fonts.google.com works: import it by name from
 * "next/font/google" and swap it in below. Keep the `variable` names the
 * same so the rest of the site picks it up automatically.
 */
import { Archivo, JetBrains_Mono } from "next/font/google";

// Headings + body text
export const bodyFont = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
  axes: ["wdth"], // lets headings use a narrower width (font-stretch)
});

// Small "data" labels, times, countdown numbers
export const codeFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});
