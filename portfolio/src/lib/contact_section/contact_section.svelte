<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import SectionTitle from '../section-title.svelte';
    import Textfield from '@smui/textfield';
    import { Icon as CommonIcon } from '@smui/common';
    import HelperText from '@smui/textfield/helper-text';

    let value = '';

    let valueElementsLabel = '';
</script>

<SectionTitle title={"Contact"} icon={"contacts"}/>
<LayoutGrid>
    <Cell span={2}>
        <div class="demo-cell"></div>
      </Cell>
  <Cell span={2}>
    <div class="margins">
        <Textfield bind:value={valueElementsLabel} type="email" required>
          <svelte:fragment slot="label">
            <CommonIcon
              class="material-icons"
              style="font-size: 1em; line-height: normal; vertical-align: top;"
              >person</CommonIcon
            > Name
          </svelte:fragment>
        </Textfield>
      </div>
    <div class="margins">
        <Textfield bind:value={valueElementsLabel} type="email" required>
          <svelte:fragment slot="label">
            <CommonIcon
              class="material-icons"
              style="font-size: 1em; line-height: normal; vertical-align: top;"
              >email</CommonIcon
            > Email
          </svelte:fragment>
        </Textfield>
      </div>
  </Cell>
  <Cell span={5}>
    <div class="margins">
    <Textfield
        style="width: 100%;"
        helperLine$style="width: 120%;"
        textarea
        bind:value
        label="Message"
    >
        <HelperText slot="helper">Tell me what you think.</HelperText>
    </Textfield>
    </div>
  </Cell>
</LayoutGrid>



