<script lang="ts">
    import '../app.css';
    import {classList} from 'svelte-body';
    import {onMount} from 'svelte';
    import {writable} from 'svelte/store';

    let isDarkModeEnabledValue;

    export const isDarkModeEnabled = writable(true);
    isDarkModeEnabled.subscribe((value) => {
        window.localStorage.setItem('global_theme', value ? 'dark' : 'light');
        isDarkModeEnabledValue = value;
    });
</script>

<svelte:body
    use:classList={isDarkModeEnabledValue ? 'dark bg-gray-900' : 'bg-white'} />

<slot />

<button
    class="fixed bottom-4 right-4 z-10 dark:bg-stone-900 dark:text-white p-3 rounded-full"
    ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
    </svg></button
>

<footer
    class="dark:bg-gray-700 absolute bottom-0 w-full text-center text-white"
>
    <p class="text-xs">Buit with love by</p>
    <strong
        ><a
            href="https://www.github.com/migonos0"
            target="https://www.github.com/migonos0">@migonos0</a
        ></strong
    >
</footer>
