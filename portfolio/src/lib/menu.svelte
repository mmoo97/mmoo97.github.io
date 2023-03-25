<div style="min-width: 100px;">
    <IconButton on:click={() => menu.setOpen(true)} class="material-icons">menu</IconButton>
    <Menu 
        bind:this={menu}
        anchorCorner="BOTTOM_LEFT"
    >
      <List>
        <Item on:SMUI:action={() => (clicked = 'Home')}>
            <IconButton on:click={() => {}} class="material-icons" >home</IconButton>
            <Text>Home</Text>
        </Item>
        <Item on:SMUI:action={() => (clicked = 'Projects')}>
            <IconButton on:click={() => {}} class="material-icons" >code</IconButton>
            <Text>Projects</Text>
        </Item>
        <Item on:SMUI:action={() => (clicked = 'Tools')}>
            <IconButton on:click={() => {}} class="material-icons" >build</IconButton>
            <Text>Tools</Text>
        </Item>
        <Item on:SMUI:action={() => (clicked = 'Education')}>
            <IconButton on:click={() => {}} class="material-icons" >school</IconButton>
            <Text>Education</Text>
        </Item>
        <Separator/>
        <Item on:SMUI:action={() => (clicked = 'Education')}>
            <IconButton on:click={() => {}} class="material-icons" >contacts</IconButton>
            <Text>Contact</Text>
        </Item>
      </List>
    </Menu>
  </div>
   
  <!-- <pre class="status">Clicked: {clicked}</pre> -->
   
  <script lang="ts">
    import Menu from '@smui/menu';
    import List, { Item, Separator, Text } from '@smui/list';
    import Button, { Label } from '@smui/button';
    import IconButton from '@smui/icon-button';
   
    let menu: Menu;
    let clicked = 'nothing yet';
  </script>