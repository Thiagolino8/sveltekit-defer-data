import { defer_handle } from 'sveltekit-defer'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = defer_handle
