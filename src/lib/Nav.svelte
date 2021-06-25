<script>
    import { user } from "./shared/store";

    let y = 0

    $: show = y > 100 ? true : false
</script>

<svelte:window bind:scrollY={y} />

{#if $user}
    <nav class:black={show}>
        <div class="content">
            <a sveltekit:prefetch href="/">
                <img class="logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="">
            </a>
            <a sveltekit:prefetch href="/profile">
                <img class="avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="">
            </a>
        </div>
    </nav>
{/if}

<style>
    nav {
        position: fixed;
        top: 0;
        padding: 20px;
        width: 100%;
        height: 30px;
        z-index: 1;

        transition-timing-function: ease-in;
        transition: all .5s;
    }

    .black {
        background: #111;
    }

    .content {
        display: flex;
        justify-content: space-between;
    }

    .logo {
        position: fixed;
        top: 10px;
        left: 0;
        width: 80px;
        object-fit: contain;
        padding-left: 20px;
        cursor: pointer;
    }

    .avatar {
        position: fixed;
        right: 20px;
        width: 30px;
        cursor: pointer;
    }
</style>