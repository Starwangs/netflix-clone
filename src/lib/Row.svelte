<script>
    import axios from '$lib/shared/axios'
    import { user } from './shared/store';

    export let title
    export let fetchUrl
    export let isLargeRow = false

    let movies = []

    const base_url = 'https://image.tmdb.org/t/p/original/'

    async function fetchData() {
        const res = await axios.get(fetchUrl)
        movies = res.data.results
    }

    fetchData()
</script>

<div class="row">
    <h2>{ title }</h2>

    <div class="posters">
        {#each movies as movie (movie.id)}
            <img class="poster" class:poster-large ={isLargeRow} src={base_url + (isLargeRow ? movie.poster_path: movie.backdrop_path)} alt={movie.name}>
        {:else}
            <!-- empty list -->
        {/each}
    </div>
</div>

<style>
    .row {
        color: white;
        margin-left: 20px;
    }

    .posters {
        display: flex;
        overflow-y: hidden;
        overflow-x: auto;
        padding: 20px;
        scrollbar-width: none;
    }

    .posters::-webkit-scrollbar {
        display: none;
    }

    .poster {
        min-height: 150px;
        object-fit: contain;
        margin-right: 10px;
        width: 100%;
        transition: transform 450ms;
    }

    .poster:hover {
        transform: scale(1.08);
        opacity: 1;
    }

    .poster-large {
        min-width: 250px;
    }
</style>