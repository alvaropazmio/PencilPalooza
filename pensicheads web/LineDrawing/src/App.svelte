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
        <button on:click={() => setState(AppState.Level1)}> Start Game</button>
    </div>
{/if}

{#if $CurrentState === AppState.Level1}
    <!-- <button on:click={() => setState(AppState.Level1)}> Level 1</button> -->
{/if}

{#if $CurrentState === AppState.Level1}{/if}

<style>
    .background {
        width: 100vw;
        background-color: #fbda61;
        background-image: linear-gradient(45deg, #fbda61 0%, #f46d25 100%);

        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        padding: 10px 20px;
        font-size: 60px;
        background-color: #000000;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    /* Style goes here*/
</style>
