<template>
	<div class="customers container my-md-3">
    <Alert v-if="alert" v-bind:message="alert" />
		<h1 class="pb-2 mt-4 mb-4 border-bottom">Manage Customers</h1>
    <form>
      <div class="form-group">        
        <input class="form-control" placeholder="Enter Last Name" v-model="filterInput">
      </div>
    </form>
		<table class="table table-striped table-bordered">
			<thead>
				<tr>
					<th scope="col">First Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Email</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="customer in filterBy(customers, filterInput)" v-bind:key="customer._id">
					<td>{{customer.first_name}}</td>
					<td>{{customer.last_name}}</td>
					<td>{{customer.email}}</td>
					<td><router-link class="btn btn-info" v-bind:to="'/customer/' + customer._id">View</router-link></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
  import Alert from './Alert';
	export default {
		name: "customers",
		data() {
			return {
        customers: [],
        alert: '',
        filterInput: ''
			};
		},
		methods: {
			fetchCustomers() {
				this.$http
					.get("https://rest-api-customer-manager.herokuapp.com/customers")
					.then(function(response) {
						this.customers = response.body;
					});
      },
      filterBy(list, value) {
        return list.filter(function (customer) {
          return customer.last_name.toLowerCase().indexOf(value.toLowerCase().trim()) >= 0;
        });
      }
		},
		created: function() {
      let alert = this.$route.query.alert;

      if(alert) {
        this.alert = "Customer " + alert + "!";
      }
      
      this.fetchCustomers();
    },
    updated: function() {
			this.fetchCustomers();
    },
    components: {
      Alert
    }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
