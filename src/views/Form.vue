<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      zipcode: "",
    };
  },
  methods: {
    nextStep() {
      // Validation des champs
      const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
      const phonePattern = /^[0-9]{10}$/;
      const zipcodePattern = /^[0-9]{5}$/;

      if (
        !namePattern.test(this.firstname) ||
        !namePattern.test(this.lastname)
      ) {
        alert("Name and fisrt name must only have letters.");
        return;
      }

      if (!phonePattern.test(this.phone)) {
        alert("Phone number must have 10 digits.");
        return;
      }

      if (!zipcodePattern.test(this.zipcode)) {
        alert("Zip Code contains 5 digits.");
        return;
      }

      this.$router.push({ name: "EventList" });
    },
  },
};
</script>

<template>
  <div>
    <h2>Step 1 : Personal datas</h2>
    <form @submit.prevent="nextStep">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">First Name :</label>
        <input class="form-control" type="text" v-model="firstname" required />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Last name :</label>
        <input class="form-control" type="text" v-model="lastname" required />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email :</label>
        <input class="form-control" type="email" v-model="email" required />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Phone :</label>
        <input class="form-control" type="tel" v-model="phone" required />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">ZIP Code :</label>
        <input class="form-control" type="number" v-model="zipcode" required />
      </div>

      <button type="submit" class="btn btn-primary">Next</button>
    </form>
  </div>
</template>
