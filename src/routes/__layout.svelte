<script>
    import '$lib/global.css'
    import Nav from "$lib/Nav.svelte";
    import Login from './login/index.svelte';
    import { user } from '$lib/shared/store';
</script>

<div class="app">
    {#if $user}
        <header>
            <Nav />
        </header>
    {/if}

    <main>
        {#if $user}
            <slot></slot>
        {:else}
            <Login />
        {/if}
    </main>
</div>