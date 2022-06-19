<script>
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
    import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
    import FaYoutubeSquare from 'svelte-icons/fa/FaYoutubeSquare.svelte';
    import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
    import GitlabSquareIcon from '../components/atoms/GitlabSquareIcon.svelte';
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>
<div class="pb-4">
    <h1 class="text-xl">Welcome Aboard</h1>
    <p>My name is Miguel Rodríguez, I do programming and other stuff :b</p>
</div>

<div class="pb-4">
    <h2 class="text-lg">Proud builder of</h2>
</div>

<div class="pb-4">
    <h2 class="text-lg">Currently working on</h2>
</div>

<div class="pb-4">
    <h2 class="text-lg">Found me on</h2>
    <div class="flex items-center pb-1">
        <div class="w-6 h-6 ">
            <FaLinkedin />
        </div>
        <div class="pl-1">
            <a
                href="https://www.linkedin.com/in/marodriguezr"
                target="https://www.linkedin.com/in/marodriguezr"
                >@marodriguezr</a
            >
        </div>
    </div>
    <div class="flex pb-1 items-center">
        <div class="w-6 h-6 ">
            <FaGithubSquare />
        </div>
        <div class="pl-1">
            <a
                href="https://github.com/migonos0"
                target="https://github.com/migonos0">@migonos0</a
            >
        </div>
    </div>
    <div class="flex pb-1 items-center">
        <div class="w-6 h-6 ">
            <GitlabSquareIcon />
        </div>
        <div class="pl-1">
            <a
                href="https://gitlab.com/migonos5"
                target="https://gitlab.com/migonos5">@migonos5</a
            >
        </div>
    </div>
    <div class="flex pb-1 items-center">
        <div class="w-6 h-6 ">
            <FaTwitterSquare />
        </div>
        <div class="pl-1">
            <a
                href="https://twitter.com/migonos3"
                target="https://twitter.com/migonos3">@migonos3</a
            >
        </div>
    </div>
    <div class="flex items-center">
        <div class="w-6 h-6 ">
            <FaYoutubeSquare />
        </div>
        <div class="pl-1">
            <a
                href="https://www.youtube.com/channel/UCNv8GUqPnSQLkFVaEz2o29w"
                target="https://www.youtube.com/channel/UCNv8GUqPnSQLkFVaEz2o29w"
                >@sortOfLog</a
            >
        </div>
    </div>
</div>
