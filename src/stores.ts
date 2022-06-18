import {writable} from 'svelte/store';
import {getItem, isItemSet} from './utilities/localStorage.utility';

export const isDarkThemeEnabled = writable<boolean>(
    isItemSet('global_theme')
        ? getItem('global_theme') === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches
);
