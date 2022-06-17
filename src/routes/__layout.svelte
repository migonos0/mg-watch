<script lang="ts">
    import '../app.css';
    import {classList} from 'svelte-body';
    import {onMount} from 'svelte';
    import {load} from '../utilities/localStorage.utility';

    let isDarkThemeEnabled: boolean;

    onMount(() => {
        isDarkThemeEnabled =
            load('global_theme') === null
                ? window.matchMedia('(prefers-color-scheme: dark)').matches
                : load('global_theme') !== 'light';
    });

    function toggleTheme() {
        isDarkThemeEnabled = !isDarkThemeEnabled;

        localStorage.setItem(
            'global_theme',
            isDarkThemeEnabled ? 'dark' : 'light'
        );
    }
</script>

<svelte:body
    use:classList={isDarkThemeEnabled ? 'dark bg-gray-900 text-white' : 'bg-white'} />

<slot />

<button
    on:click={toggleTheme}
    class="fixed bottom-4 right-2 z-10 dark:bg-stone-900 dark:text-white text-stone-900 bg-white p-3 shadow-lg border-2 border-stone-900 rounded-full"
>
    {#if isDarkThemeEnabled}<svg
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
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>{:else}<svg
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
        </svg>{/if}
</button>

<footer
    class="bg-gray-700 absolute bottom-0 w-full text-center text-white"
>
    <p class="text-xs">Buit with love by</p>
    <strong
        ><a
            href="https://www.github.com/migonos0"
            target="https://www.github.com/migonos0">@migonos0</a
        ></strong
    >
</footer>
