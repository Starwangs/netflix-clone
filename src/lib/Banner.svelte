<script>
    import axios from '$lib/shared/axios'
    import requests from '$lib/shared/request'

    let movie

    async function fetchData() {
        const res = await axios.get(requests.fetchNetflixOriginals)
        movie = res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]
    }

    fetchData()

    const truncate = (string, n) => string.length > n ? string.substr(0, n - 1) + '...' : string
</script>

{#if movie}
<div class="banner" style="background-image: url('https://image.tmdb.org/t/p/original/{movie.backdrop_path}');">
    <div class="contents">
        <h1 class="title">{movie.title || movie.name || movie.original_name}</h1>
        <div class="buttons">
            <button class="button">Play</button>
            <button class="button">My List</button>
        </div>
        <h1 class="description">{truncate(movie.overview, 150)}</h1>
    </div>

    <div class="fade-bottom"></div>
</div>
{/if}

<style>
    .banner {
        background-size: cover;
        background-position: center center;
        height: 448px;
        color: white;
        object-fit: contain;
    }

    .contents {
        margin-left: 30px;
        padding-top: 140px;
        height: 190px;
    }

    .title {
        font-size: 3rem;
        font-weight: 800;
        padding-bottom: .3rem;
    }

    .description {
        width: 45rem;
        line-height: 1.3;
        padding-top: 1rem;
        font-size: .8rem;
        max-width: 360px;
        height: 80px;
    }

    .fade-bottom {
        height: 7.4rem;
        background: linear-gradient(180deg, transparent, rgba(37, 37, 37, .61), #111);
    }

    .button {
        cursor: pointer;
        color: #fff;
        outline: none;
        border: none;
        font-weight: 700;
        border-radius: .2vw;
        padding: .5rem 2rem;
        margin-right: 1rem;
        background: rgba(51, 51, 51, .5);
    }

    .button:hover {
        color: #000;
        background: #e6e6e6;
        transition: all .2s;
    }
</style>