<script>
    import '../app.css';
</script>

<svelte:head
    ><link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Anek+Malayalam&family=Kdam+Thmor+Pro&display=swap"
        rel="stylesheet"
    /></svelte:head
>

<slot />

<footer class="bg-gray-700 absolute bottom-0 w-full text-center text-white">
    <p class="text-xs">Buit with love by</p>
    <strong
        ><a
            href="https://www.github.com/migonos0"
            target="https://www.github.com/migonos0">@migonos0</a
        ></strong
    >
</footer>
