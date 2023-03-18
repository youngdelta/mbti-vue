<script>
import { toggle } from './mixins/toggle';

export default {
  name: 'modal',
  mixins: [toggle],
  components: {
    appChild: Child,
  },
};
</script>
