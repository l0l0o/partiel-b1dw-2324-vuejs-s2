<script>
export default {
  data() {
    return {
      ageCategory: "",
      activities: [],
    };
  },
  methods: {
    async fetchActivities() {
      if (this.ageCategory) {
        const response = await fetch("../data_activities.json");
        const data = await response.json();

        this.activities = data.filter(
          (activity) => activity.categories === this.ageCategory
        );
        console.log("🚀 ~ fetchActivities ~ this.activities:", this.activities);
      } else {
        this.activities = [];
      }
    },
    selectActivity(activity) {
      this.$router.push({ name: "ChooseSession", params: { activity } });
    },
    prevStep() {
      this.$router.push({ name: "Form" });
    },
  },
};
</script>

<template>
  <div>
    <h2>Step 2 : Choose your activity :</h2>
    <div class="form-floating">
      <select
        v-model="ageCategory"
        @change="fetchActivities"
        class="form-select"
        id="floatingSelect"
        aria-label="Floating label select example"
      >
        <option value="Children">Children</option>
        <option selected value="Adults">Adults</option>
      </select>
      <label for="floatingSelect">Age category :</label>
    </div>

    <div v-if="activities.length">
      <h3>Available activities :</h3>

      <div v-for="activity in activities" :key="activity.id" class="card">
        <div class="card-header">Categories : {{ activity.categories }}</div>
        <div class="card-body">
          <h5 class="card-title">{{ activity.name }}</h5>
          <li
            v-for="option in activity.options"
            :key="option"
            class="card-text"
          >
            {{ option }}
          </li>
          <button class="btn btn-primary" @click="selectActivity(activity)">
            Choose this activity
          </button>
        </div>
      </div>
    </div>

    <div class="card mt-3">
      <div class="card-header">Categories : Adults & Children</div>
      <div class="card-body">
        <h5 class="card-title">Athletics</h5>
        <li class="card-text">Long Jump</li>
        <li class="card-text">100m Dash</li>
        <button class="btn btn-primary mt-2" @click="selectActivity(activity)">
          Choose this activity
        </button>
      </div>
    </div>

    <button class="btn btn-primary mt-2" @click="prevStep">Previous</button>
  </div>
</template>
