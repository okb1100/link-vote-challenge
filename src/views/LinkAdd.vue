<template>
  <Container>
    <Card :pointer="true" @click.native="showListPage">
      &lt; Return to list
    </Card>
    <h3>Add New Link</h3>
    <div class="form-container">
      <label for="link-name">Link Name</label>
      <input
        required
        placeholder="Name"
        type="text"
        id="link-name"
        v-model="name"
      />

      <label for="link-url">Link URL</label>
      <input
        required
        placeholder="URL"
        type="text"
        id="link-url"
        v-model="url"
      />

      <button @click="addNewLink" class="add">Add</button>
    </div>
  </Container>
</template>

<script>
import Card from "../components/Card.vue";
import Container from "../components/Container.vue";
import { v4 as uuidv4 } from "uuid";

const isValidUrl = (str) => {
  try {
    const url = new URL(str);
    return (
      (url.protocol === "http:" || url.protocol === "https:") &&
      url.hostname.includes(".")
    );
  } catch (e) {
    return false;
  }
};

export default {
  components: { Card, Container },
  name: "LinkAdd",
  data() {
    return {
      name: "",
      url: "",
    };
  },
  methods: {
    showListPage() {
      this.$router.go(-1);
    },
    addNewLink() {
      if (!this.name.length) {
        this.$store.dispatch("showToast", {
          type: "error",
          content: `Name is required`,
        });
        return;
      }
      if (!isValidUrl(this.url)) {
        this.$store.dispatch("showToast", {
          type: "error",
          content: "Please enter a valid URL",
        });
        return;
      }
      this.$store.commit("addLink", {
        id: uuidv4(),
        name: this.name,
        url: this.url,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        points: 0,
      });
      this.$store.dispatch("showToast", {
        type: "success",
        content: `${this.name} Added`,
      });
      this.name = "";
      this.url = "";
    },
  },
};
</script>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  width: 50%;
}

@media screen and (max-width: 992px) {
  .form-container {
    width: 90%;
  }
}

.form-container input {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
}

.form-container input:focus {
  outline: none;
  box-shadow: 0px 0px 10px #d1c4c4;
}

.form-container label {
  text-align: left;
}

button.add {
  background-color: #222;
  color: white;
  border: none;
  border-radius: 5px;
  align-self: flex-end;
  width: fit-content;
  padding: 15px 20px;
  cursor: pointer;
}
</style>