import { timePromises } from '$lib/promises'
import type { PageServerLoad } from './$types'
import type { Config } from '@sveltejs/adapter-vercel'

export const config: Config = {
  runtime: 'nodejs18.x'
}

export const load = (async () => timePromises()) satisfies PageServerLoad
