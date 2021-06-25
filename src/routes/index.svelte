<script>
    import { goto } from "$app/navigation";
    import Banner from "$lib/Banner.svelte";
    import Row from "$lib/Row.svelte";
    import requests from "$lib/shared/request";
    import { user } from "$lib/shared/store";

    if (!$user) goto('/login')
</script>

<Banner />

<Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
<Row title='Acttion Movies' fetchUrl={requests.fetchActionMovies} />
<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />