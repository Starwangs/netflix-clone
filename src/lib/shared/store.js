import { writable } from 'svelte/store'
import { authState } from 'rxfire/auth'
import { auth } from './firebase'

export const user = writable()

authState(auth).subscribe(u => user.set(u))