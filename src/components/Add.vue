<template>
  <div class="add container my-md-3">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="pb-2 mt-4 mb-4 border-bottom">Add Customer</h1>
    <form v-on:submit="addCustomer">
        <div class="card mb-4 card-body bg-light">
            <h4 class="card-title">Customer Info</h4>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" v-model="customer.last_name">
            </div>
        </div>
        
        <div class="card mb-4 card-body bg-light">
            <h4 class="card-title">Customer Contact</h4>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" placeholder="Phone" v-model="customer.phone">
            </div>
        </div>

        <div class="card mb-4 card-body bg-light">
            <h4 class="card-title">Customer Location</h4>
            <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
            </div>
            <div class="form-group">
                <label>City</label>
                <input type="text" class="form-control" placeholder="City" v-model="customer.city">
            </div>
            <div class="form-group">
                <label>State</label>
                <input type="text" class="form-control" placeholder="State" v-model="customer.state">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import Alert from './Alert';
export default {
  name: "add",
  data() {
    return {
      customer: {},
      alert: ''
    };
  },
  methods: {
    addCustomer(e) {
      if(!this.customer.first_name || !this.customer.last_name ||
        !this.customer.phone || !this.customer.email ||
        !this.customer.address || !this.customer.city || !this.customer.state) {
          this.alert = "Please fill in all the required fields."
        }
        else {
          let newCustomer = {
            first_name: this.customer.first_name,
            last_name: this.customer.last_name,
            phone: this.customer.phone,
            email: this.customer.email,
            address: this.customer.address,
            city: this.customer.city,
            state: this.customer.state,
          }

          this.$http
          .post('https://rest-api-customer-manager.herokuapp.com/customer/add', newCustomer)
          .then(function(response){
            this.$router.push({path: '/', query: {alert: 'created'}});
          });

          e.preventDefault();
        }

      e.preventDefault();
    }
  },
  components: {
    Alert
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
