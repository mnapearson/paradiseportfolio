<template>
  <div>
    <div class="contact-form">
      <p>get in touch with me to discuss your ideas</p>
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
        <input type="submit" value="Send" />
      </form>
      <p v-if="successMessage" class="success">
        Thank you for your message. <br />You will receive a reply as soon as
        possible.
      </p>
    </div>
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
  bottom: -1%;
  right: 0;
}

.home-image img {
  height: 200px;
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
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 22px;
  margin-top: 3rem;
}

form {
  width: 60%;
  font-family: "Poppins", sans-serif;
}

label {
  float: left;
  font-family: "Poppins", sans-serif;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  font-family: "Poppins", sans-serif;
}

textarea {
  height: 150px;
}

input[type="submit"] {
  padding: 12px 20px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  background: white;
}

input[type="submit"]:hover {
  background: black;
  color: white;
  text-transform: uppercase;
  border: 1px solid white;
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
    height: 90px;
  }
}
</style>
