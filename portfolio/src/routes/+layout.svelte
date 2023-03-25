<NavBar/>
<LayoutGrid>
  <Cell span={3}>
    <div class="demo-cell">Span 3</div>
  </Cell>
  <Cell span={7}>
    <div class="demo-cell">Span 7</div>
  </Cell>
</LayoutGrid>
<LayoutGrid>
  <Cell span={3}>
    <div class="demo-cell">Span 3</div>
  </Cell>
  <Cell span={7}>
    <div class="demo-cell">Span 7</div>
  </Cell>
</LayoutGrid>
<LayoutGrid>
  <Cell span={3}>
    <div class="demo-cell">Span 3</div>
  </Cell>
  <Cell span={7}>
    <div class="demo-cell">Span 7</div>
  </Cell>
</LayoutGrid>

 
<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import NavBar from '../lib/nav-bar.svelte';
</script>
 
<style>
  .demo-cell {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--mdc-theme-secondary, #333);
    color: var(--mdc-theme-on-secondary, #fff);
  }
</style>

<slot></slot>