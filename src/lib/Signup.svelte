<div class="sign-up">
    <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button type="submit">Sign In</button>

        <h4>
            <span class="gray">New to netflix? </span>
            <span class="link">Sign Up now.</span>
        </h4>
    </form>
</div>

<style>
    .sign-up {
        max-width: 300px;
        padding: 70px;
        background: rgba(0, 0, 0, .85);
    }

    .sign-up > form {
        display: grid;
        flex-direction: column;
    }

    .sign-up > form > input {
        outline-width: 0;
        height: 40px;
        margin-bottom: 14px;
        border-radius: 5px;
        border: none;
        padding: 5px 15px;
    }

    .sign-up > form > button {
        padding: 16px 20px;
        font-size: 1rem;
        color: #fff;
        border-radius: 5px;
        background: #e50914;
        font-weight: 600;
        border: none;
        cursor: pointer;
        margin-top: 20px;
    }

    .sign-up > form > h1 {
        text-align: left;
        margin-bottom: 25px;
    }

    .link:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    .gray {
        color: gray;
    }

    .sign-up > form > h4 {
        text-align: left;
        margin-top: 30px;
        font-weight: 400;
    }
</style>