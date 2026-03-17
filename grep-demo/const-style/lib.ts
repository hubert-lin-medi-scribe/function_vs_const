import { z } from "zod"

export const formatDate = (d: Date) => d.toISOString().split("T")[0]
export const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max)
export const cn = (...classes: string[]) => classes.filter(Boolean).join(" ")
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const API_BASE = "/api/v1"
export const MAX_RETRIES = 3
export const DEFAULT_PAGE_SIZE = 25
export const CACHE_TTL = 5 * 60 * 1000
export const SUPPORTED_LOCALES = ["en", "es", "fr", "de"] as const

export const userSchema = z.object({ name: z.string(), email: z.string().email() })
export const postSchema = z.object({ title: z.string(), body: z.string() })

export const routes = { home: "/", profile: "/profile/:id", settings: "/settings" } as const
