<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          class="new-Cweet"
          bottom-slots
          v-model="newCweetContent"
          placeholder="What's happening?"
          counter
          maxlength="280"
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      
      <div class="col col-shrink">
          <q-btn 
            :disable="!newCweetContent"
            class="q-mb-lg"
            uneleavated
            rounded
            color="primary" 
            label="Cweet"
            no-caps
          />
      </div>
    </div>

    <q-separator size="2px" color="grey-2"/>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      newCweetContent: "",
    };
  },
});
</script>

<style lang="sass">
.new-Cweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
</style>