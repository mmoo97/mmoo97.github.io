<script lang="ts">
    import { Panel, Header, Content } from '@smui-extra/accordion';
    import InnerContent from './inner_content.svelte';

    export let header:string;
    export let info:string;
    export let image_class:string;
</script>

<Panel>
    <Header>
      {header}
      <span slot="description">{info}</span>
    </Header>
    <Content>
      <InnerContent {image_class}/>
    </Content>
  </Panel>