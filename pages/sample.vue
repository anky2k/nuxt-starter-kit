<template>
      <div id="app">
        <WSampleComponent />
      </div>
</template>
    
<script>
    import withComponentState from "../hoc/with-component-state"
    import SampleComponent from '../components/sample-comp/sample-comp.vue'

    const WSampleComponent = withComponentState(SampleComponent, mockData => (true) );    

    export default {
        name: "App",
        components: {
            WSampleComponent,
        }        
    };
</script>