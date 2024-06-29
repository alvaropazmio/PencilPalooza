<script lang="ts">
    //import from prncilheads.npm
      import { CurrentState, AppState } from 'pencilheads.npm/StateManager'; 

      function setState(state: AppState) {
        console.log("Set STATE to: " + state);
        $CurrentState = state;
    }

    </script>



{#if $CurrentState === AppState.Start}

<h1>START GAME</h1>

<button on:click={() => setState(AppState.Level1)}> Level 1</button>
{/if}
    
    
    <style>
    /* Style goes here*/
    </style>