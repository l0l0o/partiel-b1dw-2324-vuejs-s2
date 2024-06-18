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
        alert("Nom et prénom doivent contenir uniquement des lettres.");
        return;
      }

      if (!phonePattern.test(this.phone)) {
        alert("Téléphone doit contenir 10 chiffres.");
        return;
      }

      if (!zipcodePattern.test(this.zipcode)) {
        alert("Code postal doit contenir 5 chiffres.");
        return;
      }

      this.$router.push({ name: "EventList" });
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <h2>Étape 1 : Informations personnelles</h2>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Prénom :</label>
        <input class="form-control" type="text" v-model="firstname" required />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Prénom :</label>
        <input class="form-control" type="text" v-model="lastname" required />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email :</label>
        <input class="form-control" type="email" v-model="email" required />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Téléphone :</label>
        <input class="form-control" type="tel" v-model="phone" required />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Code postal :</label>
        <input class="form-control" type="number" v-model="zipcode" required />
      </div>

      <button type="submit" class="btn btn-primary">Suivant</button>
    </form>
  </div>
</template>
