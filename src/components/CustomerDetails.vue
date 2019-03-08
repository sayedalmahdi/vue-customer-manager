<template>
	<div class="details container my-md-3">
		<h1 class="pb-2 mt-4 mb-4 border-bottom">{{customer.first_name}} {{customer.last_name}}
			<span class="float-right">
				<router-link class="btn btn-primary" v-bind:to="'/edit/'+customer._id">Edit</router-link>
				<button class="btn btn-danger" v-on:click="deleteCustomer(customer._id)">Delete</button>
			</span>
		</h1>
		<ul class="list-group mb-4">
            <li class="list-group-item"><i class="fas fa-mobile-alt mr-4"></i>{{customer.phone}}</li>
            <li class="list-group-item"><i class="far fa-envelope mr-4"></i>{{customer.email}}</li>
        </ul>

        <ul class="list-group mb-4">
            <li class="list-group-item"> {{customer.address}}</li>
            <li class="list-group-item">{{customer.city}}</li>
            <li class="list-group-item">{{customer.state}}</li>
        </ul>
	</div>
</template>

<script>
	export default {
		name: "customerdetails",
		data() {
			return {
				customer: ''
			};
		},
		methods: {
			fetchCustomer(id) {
				this.$http
					.get("https://rest-api-customer-manager.herokuapp.com/customer/" + id)
					.then(function(response) {
						this.customer = response.body;
					});
			},
			deleteCustomer(id) {
				this.$http
					.delete("https://rest-api-customer-manager.herokuapp.com/customer/delete/" + id)
					.then(function(response) {
						this.$router.push({path: '/', query: {alert: 'deleted'}});
					});
			}
		},
		created: function() {
			this.fetchCustomer(this.$route.params.id);
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
