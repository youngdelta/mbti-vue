<template>
	<div>
		<h2 class="page-subtitle">MBTI</h2>
		<h1 class="page-title">
			내 안에 숨어있는<br />
			직업캐 찾기!
		</h1>
		<img
			class="character"
			src="/images/main_character.png"
			alt="메인 이미지" />

		<router-link
			class="btn btn-orange"
			to="/questions"
			>본캐 찾으러 GO!</router-link
		>
		<div class="btn btn-green btn-small share-or-copy">주변에 알리기</div>
	</div>
</template>

<script>
	// import share from '/js/share.js';

	export default {
		name: 'HopmeView',
		created() {
			// share
		},
		mounted() {
			//
		},
		data() {
			return {};
		},
		props: {},
		methods: {},
	};
</script>

<style lang="scss" scoped></style>
