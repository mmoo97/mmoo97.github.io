<script lang="ts">
    import { Panel, Header, Content } from '@smui-extra/accordion';

    export let header:string;
    export let info:string;
    export let image:string;
</script>

<Panel>
    <Header>
      {header}
      <span slot="description">{info}</span>
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