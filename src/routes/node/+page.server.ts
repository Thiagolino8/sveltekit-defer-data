import { timePromises } from '$lib/helpers/promises'
import type { PageServerLoad } from './$types'

export const load = (async () => timePromises()) satisfies PageServerLoad
