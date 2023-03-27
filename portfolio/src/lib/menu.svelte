<div style="min-width: 100px;">
    <IconButton on:click={() => menu.setOpen(true)} class="material-icons">menu</IconButton>
    <Menu 
        bind:this={menu}
        anchorCorner="BOTTOM_LEFT"
    >
      <List>
        <Item href="#Home" on:SMUI:action={scrollIntoView}>
            <IconButton class="material-icons" disabled>home</IconButton>
            <Text>Home</Text>
        </Item>
        <Item href="#Projects" on:SMUI:action={scrollIntoView}>
            <IconButton class="material-icons" disabled>code</IconButton>
            <Text>Projects</Text>
        </Item>
        <Item href="#Tools" on:SMUI:action={scrollIntoView}>
            <IconButton class="material-icons" disabled>build</IconButton>
            <Text>Tools</Text>
        </Item>
        <Item href="#Education" on:SMUI:action={scrollIntoView}>
            <IconButton class="material-icons" disabled>school</IconButton>
            <Text>Education</Text>
        </Item>
        <Separator/>
        <Item href="#Contact" on:SMUI:action={scrollIntoView}>
            <IconButton class="material-icons" disabled>contacts</IconButton>
            <Text>Contact</Text>
        </Item>
      </List>
    </Menu>
  </div>
   
  <!-- <pre class="status">Clicked: {clicked}</pre> -->
   
  <script lang="ts">
    import Menu from '@smui/menu';
    import List, { Item, Separator, Text } from '@smui/list';
    import IconButton from '@smui/icon-button';
   
    let menu: Menu;

    function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
  </script>