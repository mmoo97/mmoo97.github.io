

{#if visible}
    <div transition:fade class="splashbox">
        <LayoutGrid style="margin-bottom: auto">
            <Cell span={5}>
            </Cell>
            <Cell span={1}>
                <img src="/favicon.png" alt="welcome?">
                <p>{welcomeMessage}</p>
            </Cell>
          </LayoutGrid>
        <LayoutGrid style="margin-bottom: auto">
            <Cell span={5}>
            </Cell>
            <Cell span={1}>
                <p></p>
            </Cell>
        </LayoutGrid>
        
    </div>
{:else}
    <div class="test"></div>
{/if}



<style>
    .splashbox {
        background:rgb(255, 255, 255);
        overflow: hidden;
        position:absolute;
        top:0px;
        right:0px;
        bottom:0px;
        left:0px;
        overflow-y: hidden;
        inset: 0;
    }

    .splashbox p {
        margin-top: 50%;
        top: 50%;
        left: 50%;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #000;
        
    }

    .splashbox img {
        margin-top: 50%;
        top:0px;
        right:0px;
        bottom:100%;
        left:0px;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #000;
    }
</style>

<script>
    import { fade } from 'svelte/transition';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { onMount } from 'svelte';
    /**
	 * @type {string}
	 */
     export let welcomeMessage;

    let visible = true;

    // @ts-ignore
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async function vanish() {
        await delay(1000);
        visible = false;
    }

    vanish();
</script>