import {writable} from 'svelte/store';
import {getItem, isItemSet} from './utilities/localStorage.utility';

export const isDarkThemeEnabled = writable<boolean>();
