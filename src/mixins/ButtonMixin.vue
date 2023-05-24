<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtomMixin",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  emits: ["input"],
});
</script>
