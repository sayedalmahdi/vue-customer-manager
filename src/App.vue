<template>
	<div id="app">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="/">vCustomer</a>
			<button
				class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
            			<!-- pb: doesn't reload -->
						<router-link class="nav-link" to="/">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/about">About</router-link>
					</li>
				</ul>
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link class="nav-link" to="/add">Add Customer</router-link>
					</li>
				</ul>
			</div>
		</nav>

		<router-view/>
	</div>
</template>

<script>
	export default {
		name: "App"
	};
</script>

<style>
</style>
