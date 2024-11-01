import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
}

const getBaseUrl = () => "/gh-astro-01";
const getBaseDomain = () => "https://katakatari.github.io";
const getFullBaseUrl = () => getBaseDomain() + getBaseUrl();

const getRandomIntInclusive = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

export { cn, getBaseUrl, getBaseDomain, getFullBaseUrl, getRandomIntInclusive }