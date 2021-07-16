<template>
  <div>
    <div class="nav-links">
      <router-link class="link rainbow" to="/contact">Contact</router-link>
    </div>
    <div class="contact-form">
      <form
        ref="contact"
        class="contact-form"
        @submit.prevent="sendEmail"
        v-if="!successMessage"
      >
        <input type="text" name="user_name" placeholder="name" required />

        <input type="email" name="user_email" placeholder="email" required />

        <input type="text" name="user_subject" placeholder="subject" />

        <textarea name="message" placeholder="message" required></textarea>
        <input class="rainbow" type="submit" value="Send" />
      </form>
      <p v-if="successMessage" class="success">
        Thank you for your message. <br />You will receive a reply as soon as
        possible.
      </p>
    </div>
    <div class="nav-links bottom">
      <router-link class="link rainbow" to="/">About</router-link>
      <router-link class="link rainbow" to="/projects">Projects</router-link>
    </div>

    <div class="home-image"><img src="../images/logo.png" alt="" /></div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      successMessage: false,
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_qk8fw7l",
          "template_yffeype",
          e.target,
          "user_o6tM95YAVRykwYE7z90AI",
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
      this.successMessage = true;
    },
  },
};
</script>

<style scoped>
.home-image {
  position: fixed;
  bottom: -2%;
  right: 0;
}

.home-image img {
  height: 400px;
  width: auto;
}

.link {
  text-decoration: none;
  color: black;
  font-size: 125px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  line-height: 6rem;
}

.bottom {
  position: fixed;
  bottom: 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 22px;
  margin-top: 3rem;
}

form {
  width: 70%;
}

label {
  float: left;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
}

input[type="submit"] {
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
}

input[type="submit"]:hover {
  background: black;
  color: white;
}

.success {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 32px;
  margin-top: 3rem;
  line-height: 5rem;
}

@media only screen and (max-width: 850px) {
  .link {
    font-size: 60px;
  }

  .nav-links {
    line-height: 3rem;
    margin: 0;
  }

  .home-image img {
    width: 50px;
  }
}
</style>
