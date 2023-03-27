<NavBar/>
<SectionTitle title={"Home"} icon={"home"}/>
<LayoutGrid>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
</LayoutGrid>
<SectionTitle title={"Projects"} icon={"code"}/>
<LayoutGrid>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
</LayoutGrid>
<SectionTitle title={"Tools"} icon={"build"}/>
<LayoutGrid>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
</LayoutGrid>
<SectionTitle title={"Education"} icon={"school"}/>
<LayoutGrid>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
</LayoutGrid>
<SectionTitle title={"Contact"} icon={"contacts"}/>
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
  import SectionTitle from '../lib/section-title.svelte';
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