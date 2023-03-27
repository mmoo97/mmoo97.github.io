<script>
// @ts-nocheck

    import LayoutGrid, { Cell } from '@smui/layout-grid';

    export let title;
    export let icon;

    
</script>

<LayoutGrid>
    <Cell span={3}>
        <a id="{title}"><h1><span class="material-icons">{icon}</span>   {title}</h1></a>
    </Cell>
</LayoutGrid>

<style>

    h1 {
        font-size: 28pt;
    }

    a {
        color: inherit;
        scroll-margin-top: 5rem;
    }

</style>