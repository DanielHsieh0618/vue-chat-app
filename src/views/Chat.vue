<template>
  <div>
    <v-container class="chat">
      <v-card>
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>悄悄話</v-toolbar-title>
          <v-spacer></v-spacer>
          <span class="ml-2">{{name}}</span>
        </v-toolbar>
        <v-card-text>
          <p class="nomessages text-secondary" v-if="messages.length == 0">[No messages yet!]</p>
          <div class="messages" v-chat-scroll="{always: false, smooth: true}">
            <div
              v-for="message in messages"
              :key="message.id"
              :class="message.active?'right':'left'"
              class="mb-2"
            >
              <span v-show="!message.active" text class="pr-4">{{ message.name }}</span>
              <v-tooltip bottom>
                <template #activator="{on}">
                  <v-chip v-on="on" class="mr-4">{{message.message}}</v-chip>
                </template>
                <span class="text-secondary time">{{message.timestamp}}</span>
              </v-tooltip>
            </div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <CreateMessage :name="name" />
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import CreateMessage from "@/components/CreateMessage";
import db from "@/services/firebase";
import moment from "moment";

export default {
  name: "Chat",
  props: ["name"],
  components: {
    CreateMessage
  },
  data() {
    return {
      messages: []
    };
  },
  mounted() {
    let ref = db.collection("messages").orderBy("timestamp"); //.doc('text')//.orderBy("timestamp");
    ref.onSnapshot(collection => {
      collection.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            active: this.name === doc.data().name,
            timestamp: moment(doc.data().timestamp).format("LTS")
          });
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 0px;
}

.chat h5 {
  margin-top: 0px;
  margin-bottom: 40px;
}

.chat span {
  font-size: 1.2em;
}

.chat .time {
  display: block;
  font-size: 0.7em;
}

.messages {
  max-height: 300px;
  overflow: auto;
}

.right {
  text-align: right;
}

.left {
  text-align: left;
}
</style>