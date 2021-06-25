<script>
    import { goto } from '$app/navigation';
    import { auth } from '$lib/shared/firebase';
    import { user } from '$lib/shared/store'

    function handleSignOut() {
        auth.signOut()
        goto('/')
    }
</script>

{#if $user}
    <div class="profile">
        <div class="body">
            <h1>Edit Profile</h1>
            <div class="info">
                <img src={ $user.photoURL } alt="">
                <div class="details">
                    <h2>{ $user.email }</h2>
                    <div class="plans">
                        <h3>Plans</h3>
                        <button on:click={handleSignOut} class="sign-out">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .profile {
        height: 100vh;
        color: white;
    }

    .body {
        display: flex;
        flex-direction: column;
        width: 50%;
        max-width: 800px;
        margin: 0 auto;
        padding-top: 8%;
    }

    .info {
        display: flex;
    }

    .info > img {
        height: 100px;
    }

    .body > h1 {
        font-size: 60px;
        font-weight: 400;
        border-bottom: 1px solid #282c2d;
        margin-bottom: 20px;
    }

    .details {
        color: white;
        margin-left: 25px;
        flex: 1;
    }

    .details > h2 {
        background: gray;
        padding: 15px;
        font-size: 15px;
        padding-left: 20px;
    }

    .sign-out {
        padding: 10px 20px;
        font-size: 1rem;
        margin-top: 5%;
        width: 100%;
        color: #fff;
        background: #e50914;
        font-weight: 600;
        border: none;
        cursor: pointer;

    }

    .plans {
        margin-top: 20px;
    }

    .plans > h3 {
        border-bottom: 1px solid #282c2d;
        padding-bottom: 10px;
    }
</style>