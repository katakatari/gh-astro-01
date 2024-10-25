import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
}

const getBaseUrl = () => "/gh-astro-01"
const getBaseDomain = () => "https://katakatari.github.io"
const getFullBaseUrl = () => getBaseDomain() + getBaseUrl()

export { cn, getBaseUrl, getBaseDomain, getFullBaseUrl }