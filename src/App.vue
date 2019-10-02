<template>
  <graph-component :fileName="fileName">
    <amazon-graph></amazon-graph>
    <template v-slot:logger></template>
    <template v-slot:copyRight></template>
  </graph-component>
</template>
<script>
import AmazonGraph from "./components/app/graph_app";
export default {
  name: "CORE_APP",
  components: {
    AmazonGraph
  },
  data() {
    return {
      fileName: "data"
    };
  }
};
</script>
<style>
</style>