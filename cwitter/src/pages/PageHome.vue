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
          @click="addNewCweet"
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

    <q-separator size="2px" color="grey-2" />

    <q-list separator>
      <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-item 
          v-for="cweet in cweets" 
          :key="cweet.date" 
          class="q-py-md"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <strong>Serkan Oz</strong>
              <span class="text-grey-7"> @oz_serkan</span>
            </q-item-label>
            <q-item-label class="cweet-content text-body1">
              {{ cweet.content }}
            </q-item-label>
            <div class="cweet-icons row justify-between">
              <q-btn 
                flat 
                round 
                color="grey" 
                icon="far fa-comment" 
                size="sm" 
              />
              <q-btn 
                flat 
                round 
                color="grey" 
                icon="fas fa-retweet" 
                size="sm" 
              />
              <q-btn 
                flat 
                round 
                color="grey" 
                icon="far fa-heart" si
                ze="sm" 
              />
              <q-btn 
                @click="deleteCweet" 
                flat round 
                color="grey" 
                icon="fas fa-trash" 
                size="sm" 
              />
            </div>
          </q-item-section>

          <q-item-section side top>
            {{ cweet.date | relativeDate }}
          </q-item-section>
        </q-item>
      </transition-group>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { formatDistance } from "date-fns";
import { moment } from 'moment'

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      newCweetContent: "",
      cweets: [
        {
          content: "Random content",
          date: 1661973142918,
        },
        {
          content: "Random content 2",
          date: 1661972581011,
        },
      ],
    };
  },
  methods: {
    addNewCweet() {
      let newCweet = {
        content: this.newCweetContent,
        date: Date.now(),
      };
      this.cweets.unshift(newCweet)
      this.newCweetContent = ''
    },
    deleteCweet(cweet) {
      let dateToDelete = cweet.date
      let index = this.cweets.findIndex(cweet => cweet.date === dateToDelete)
      this.cweets.splice(index, 1)
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date(), { addSuffix: true });
    },
  },
});
</script>

<style lang="sass">
.new-Cweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.cweet-icons
  margin-left: -5px
</style>
