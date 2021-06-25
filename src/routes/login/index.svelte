<script>
    import { goto } from "$app/navigation";
    import { auth, provider } from "$lib/shared/firebase";
    import { user } from "$lib/shared/store";
    import Signup from "$lib/Signup.svelte";

    let signIn = false

    async function handleSignIn() {
        signIn = true
        await auth.signInWithPopup(provider)
        signIn = false
    }

    $: if ($user) goto('/')
</script>

<div class="login">
    <div class="background">
        <img class="logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="">
        <button class="button" on:click={handleSignIn}>Sign In</button>

        <div class="gradient"></div>

        <div class="body">
            {#if signIn}
                <Signup />
            {:else}
                <h1>Unlimited films. TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at  any time.</h2>
                <h3>
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>

                <div class="form-control">
                    <form>
                        <input type="email" placeholder="Email Address"><button class="get-started" type="submit">GET STARTED</button>
                    </form>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .login {
        position: relative;
        height: 100%;
        background: url('https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg') center no-repeat;
        background-size: cover;
    }

    .logo {
        position: fixed;
        left: 0;
        width: 150px;
        object-fit: contain;
        padding-left: 20px;
    }

    .button {
        position: fixed;
        right: 20px;
        top: 20px;
        padding: 10px 20px;
        font-size: 1rem;
        color: #fff;
        background: #e50914;
        font-weight: 600;
        border: none;
        cursor: pointer;
    }

    .gradient {
        width: 100%;
        z-index: 1;
        height: 100vh;
        background: rgba(0, 0, 0, .4);
        background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, .8) 0%,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, .8) 100%
        );
    }

    .body {
        position: absolute;
        top: 25vh;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        z-index: 1;
        color: #fff;
        padding: 20px;
    }

    .body > h1 {
        font-size: 3.125rem;
        margin-bottom: 20px;
    }

    .body > h2 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 30px;
    }

    .body > h3 {
        font-size: 1.3rem;
        font-weight: 400;
    }

    .form-control > form > input {
        padding: 10px;
        outline-width: 0;
        height: 30px;
        width: 30%;
        border: none;
        max-width: 600px;
    }

    .form-control {
        margin: 20px;
    }

    form {
        display: flex;
        justify-content: center;
    }

    .get-started {
        padding: 15px 1vw;
        font-size: 1rem;
        color: #fff;
        background: #e50914;
        border: none;
        font-weight: 600;
        cursor: pointer;
    }
</style>