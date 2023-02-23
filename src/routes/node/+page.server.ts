import { timePromises } from '$lib/promises'
import type { PageServerLoad } from './$types'

export const load = (async () => timePromises()) satisfies PageServerLoad
