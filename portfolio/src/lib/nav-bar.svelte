<TopAppBar bind:this={topAppBar} variant="short">
	<Row>
	  <Section>
		<OptionMenu/>
		<Title>Mitchell</Title>
	  </Section>
	  <Section align="end" toolbar>
		<IconButton disabled class="material-icons" aria-label="Download"
		  >dark_mode</IconButton
		>
	  </Section>
	</Row>
  </TopAppBar>
  <AutoAdjust {topAppBar}>
	<!-- <h5>Short, Always Collapsed</h5>
	<img
	  alt="Page content placeholder"
	  src=""
	  style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
	/> -->
  </AutoAdjust>
   
  <script type="ts">
	import TopAppBar, {
	  Row,
	  Section,
	  Title,
	  AutoAdjust,
	} from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	let topAppBar: TopAppBar;

	import OptionMenu from './menu.svelte';
  </script>
   
  <style>
	/* Hide everything above this component. */
	:global(#smui-app),
	:global(body),
	:global(html) {
	  display: block !important;
	  height: auto !important;
	  width: auto !important;
	  position: static !important;
	}
  </style>