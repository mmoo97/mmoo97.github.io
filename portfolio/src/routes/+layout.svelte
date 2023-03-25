<NavBar/>
<LayoutGrid>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
</LayoutGrid>
<LayoutGrid>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
</LayoutGrid>
<LayoutGrid>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
</LayoutGrid>
<LayoutGrid>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
</LayoutGrid>
<LayoutGrid>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
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