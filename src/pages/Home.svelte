<script>
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
    import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
    import FaYoutubeSquare from 'svelte-icons/fa/FaYoutubeSquare.svelte';
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>
<div class="pb-4">
    <h1 class="text-xl">Welcome Aboard</h1>
    <p>My name is Miguel Rodríguez, I do programming and other stuff :b</p>
</div>

<div class="pb-4">
    <h2 class="text-lg">Social Media</h2>
    <div class="flex items-center pb-1">
        <div class="w-6 h-6 ">
            <FaLinkedin />
        </div>
        <div class="pl-1">
            <p>@marodriguezr</p>
        </div>
    </div>
    <div class="flex pb-1 items-center">
        <div class="w-6 h-6 ">
            <FaTwitterSquare />
        </div>
        <div class="pl-1">
            <p>@migonos3</p>
        </div>
    </div>
    <div class="flex items-center">
        <div class="w-6 h-6 ">
            <FaYoutubeSquare />
        </div>
        <div class="pl-1">
            <p>@sortOfLog</p>
        </div>
    </div>
</div>

<h2 class="text-lg">Proud builder of</h2>

<h2 class="text-lg">Currently working on</h2>
