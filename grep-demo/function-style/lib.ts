import { z } from "zod"

export function formatDate(d: Date) { return d.toISOString().split("T")[0] }
export function clamp(n: number, min: number, max: number) { return Math.min(Math.max(n, min), max) }
export function cn(...classes: string[]) { return classes.filter(Boolean).join(" ") }
export function sleep(ms: number) { return new Promise(resolve => setTimeout(resolve, ms)) }

export const API_BASE = "/api/v1"
export const MAX_RETRIES = 3
export const DEFAULT_PAGE_SIZE = 25
export const CACHE_TTL = 5 * 60 * 1000
export const SUPPORTED_LOCALES = ["en", "es", "fr", "de"] as const

export const userSchema = z.object({ name: z.string(), email: z.string().email() })
export const postSchema = z.object({ title: z.string(), body: z.string() })

export const routes = { home: "/", profile: "/profile/:id", settings: "/settings" } as const
