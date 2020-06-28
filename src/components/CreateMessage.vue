<template>
  <!-- <div class="container" style="margin-bottom:30px"> -->
  <v-row>
    <v-col>
      <form class="full-width" @submit.prevent="createMessage">
        <div class="d-flex">
          <v-text-field
            type="text"
            name="message"
            placeholder="Enter message ..."
            v-model="newMessage"
            hide-details
          ></v-text-field>
          <span class="text-danger" v-if="errorText">{{errorText}}</span>
          <v-btn type="submit" color="primary" name="action">Submit</v-btn>
        </div>
        <!-- <div class="form-group"> -->
        <!-- <input
        type="text"
        name="message"
        class="form-control"
        placeholder="Enter message ..."
        v-model="newMessage"
        />-->
        <!-- <v-text-field type="text" name="message" placeholder="Enter message ..." v-model="newMessage"></v-text-field> -->
        <!-- <span class="text-danger" v-if="errorText">{{errorText}}</span> -->
        <!-- </div> -->

        <!-- <button class="btn btn-primary" type="submit" name="action">Submit</button> -->
        <!-- <v-btn type="submit" color="primary" name="action">Submit</v-btn> -->
      </form>
    </v-col>
  </v-row>

  <!-- </div> -->
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
        this.errorText = "A message must be entered!";
      }
    }
  }
};
</script>

<style>
</style>