<template>
	<div>
		<div class="progress">
			<div class="value"></div>
		</div>
		<div class="question-box">
			<div class="number"></div>
			<div class="question"></div>
			<div class="btn btn-gray choice choice1"></div>
			<div class="btn btn-gray choice choice2"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'QuestionsView',
		props: {},
		data() {
			return {
				questions: [],
			};
		},
		methods() {
			//
		},
		created() {
			//
		},
		mounted() {
			//
		},
	};
</script>

<style></style>
