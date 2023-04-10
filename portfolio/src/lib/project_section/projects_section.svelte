<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import SectionTitle from '../section-title.svelte';
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
    import ProjectPanel from './project_panel.svelte';
</script>

<SectionTitle title={"Projects"} icon={"code"}/>
<LayoutGrid>
    <Cell span={1}></Cell>
  <Cell span={5}>
    <div class="accordion-container">
  <Accordion multiple>
    <ProjectPanel header="EnviroPi" info="Linux, Raspi, ML" image_class="enviropi"/>
    <Panel>
      <Header>Project 2
        <span slot="description">Description of panel 1.</span>
      </Header>
      <Content>The content for panel 2.</Content>
    </Panel>
    <Panel>
      <Header>Project 3
        <span slot="description">Description of panel 1.</span>
      </Header>
      <Content>
        The content for panel 3.
 
        <ul>
          <li>Some</li>
          <li>More</li>
          <li>List</li>
          <li>Items</li>
          <li>To</li>
          <li>Show</li>
          <li>Big</li>
          <li>Height</li>
        </ul>
      </Content>
    </Panel>
    <Panel>
      <Header>Project 4
        <span slot="description">Description of panel 1.</span>
      </Header>
      <Content>The content for panel 4.</Content>
    </Panel>
  </Accordion>
</div>
  </Cell>
  <Cell span={5}>
    <div class="accordion-container">
  <Accordion multiple>
    <Panel>
      <Header>
        Project 1
        <span slot="description">Description of panel 1.</span>
      </Header>
      <Content>
        The content for panel 1.
 
        <ul>
          <li>Some</li>
          <li>List</li>
          <li>Items</li>
        </ul>
      </Content>
    </Panel>
    <Panel>
      <Header>Project 2
        <span slot="description">Description of panel 1.</span>
      </Header>
      <Content>The content for panel 2.</Content>
    </Panel>
    <Panel>
      <Header>Project 3
        <span slot="description">Description of panel 1.</span>
      </Header>
      <Content>
        The content for panel 3.
 
        <ul>
          <li>Some</li>
          <li>More</li>
          <li>List</li>
          <li>Items</li>
          <li>To</li>
          <li>Show</li>
          <li>Big</li>
          <li>Height</li>
        </ul>
      </Content>
    </Panel>
    <Panel>
      <Header>Project 4
        <span slot="description">Description of panel 1.</span>
      </Header>
      <Content>The content for panel 4.</Content>
    </Panel>
  </Accordion>
</div>
  </Cell>
</LayoutGrid>

<style>

</style>