<template>
  <v-row>
    <v-col>
      <form class="full-width" @submit.prevent="createMessage">
        <div class="d-flex">
          <v-text-field
            type="text"
            class="mt-0 pt-0"
            name="message"
            placeholder="請輸入訊息 ..."
            v-model="newMessage"
            hide-details
          ></v-text-field>

          <v-tooltip bottom>
            <template #activator="{on}">
              <v-btn v-on="on" icon type="submit" color="primary" name="action">
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </template>
            <span>輸入</span>
          </v-tooltip>
        </div>
        <p class="red--text ma-0 text-caption text-justify" v-if="errorText">{{errorText}}</p>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import db from "@/services/firebase";

export default {
  name: "CreateMessage",
  props: {
    name: {
      type: String
    }
  },
  data() {
    return {
      newMessage: null,
      errorText: null
    };
  },
  methods: {
    createMessage() {
      if (this.newMessage) {
        db.collection("messages")
          .add({
            message: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.errorText = null;
      } else {
        this.errorText = "請輸入文字訊息";
      }
    }
  }
};
</script>

<style>
</style>