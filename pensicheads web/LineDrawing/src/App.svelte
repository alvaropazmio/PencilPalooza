<script lang="ts">
    //import from prncilheads.npm
    import { CurrentState, AppState } from "pencilheads.npm/StateManager";

    function setState(state: AppState) {
        console.log("Set STATE to: " + state);
        $CurrentState = state;
    }
</script>

{#if $CurrentState === AppState.Start}
    <div class="background">
        <h1>Select Game Mode</h1>
        <button on:click={() => setState(AppState.Level2)}> Run & Draw</button>
        <button on:click={() => setState(AppState.Level1)}> Make Noise & Guess</button>
    </div>
{/if}

{#if $CurrentState === AppState.Level1}
    <!-- <button on:click={() => setState(AppState.Level1)}> Level 1</button> -->
{/if}

{#if $CurrentState === AppState.Level2}

{/if}

<style>

@import url('https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap');


    .background {
        width: 100vw;
        background-color: #fbda61;
        background-image: linear-gradient(45deg, #fbda61 0%, #f46d25 100%);

        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    button {
        font-family: "Playwrite DE Grund", cursive;
        margin-top: 30px;
        padding: 10px 20px;
        font-size: 20px;
        background-color: #ffffff;
        color: rgb(0, 0, 0);
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    h1 {
        font-family: "Playwrite DE Grund", cursive;
        font-size: 30px;
        color: #ffffff;
    }

    /* Style goes here*/
</style>
