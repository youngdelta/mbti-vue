<template>
	<div>
		<h2 class="page-subtitle">내 본캐는?!</h2>
		<h1 class="page-title"></h1>
		<img
			class="character"
			src=""
			alt="character" />

		<div class="result">
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
			<div class="box"></div>
		</div>
		<div class="result">
			<h3>이런 내가 직업을 갖는다면?</h3>
			<div class="jobs">
				<div class="job"></div>
				<div class="job"></div>
			</div>
		</div>
		<div class="result">
			<h3>이런 직업 강의는 어떤가요?</h3>
			<a
				href=""
				target="_blank"
				class="lecture">
				<img
					src="./images/result_lecture1.png"
					alt="강의" />
			</a>
		</div>

		<div class="btn btn-green btn-small share-or-copy">결과 공유하기</div>
		<a
			href="./"
			class="btn btn-gray btn-small"
			>다시 테스트</a
		>
	</div>
</template>

<script>
	export default {
		name: 'ResultView',
		created() {},
		data() {
			return {};
		},
		props: {},
		methods: {},
	};
</script>

<style lang="scss" scoped></style>
