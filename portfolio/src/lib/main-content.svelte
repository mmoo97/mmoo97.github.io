<SectionTitle title={"Home"} icon={"home"}/>
<LayoutGrid>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
  <Cell span={6}>
    <div class="demo-cell">Span 6</div>
  </Cell>
</LayoutGrid>
<ProjectsSection/>
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
<Separator/>
<ContactSection/>



<script>
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import SectionTitle from '../lib/section-title.svelte';
    import ProjectsSection from './project_section/projects_section.svelte';
    import ContactSection from './contact_section/contact_section.svelte';
    import { Separator } from '@smui/list';
    let disabledScroll = true;
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