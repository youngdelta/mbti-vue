<template>
	<div>
		<h2 class="page-subtitle">{{ subTitle }}</h2>
		<h1
			class="page-title"
			v-html="title"></h1>
		<img
			class="character"
			:src="characterSrc"
			alt="character" />

		<div class="result">
			<div
				class="box"
				v-for="r in results"
				:key="r"
				v-html="r"></div>
		</div>

		<div class="result">
			<h3>이런 내가 직업을 갖는다면?</h3>
			<div class="jobs">
				<div
					class="job"
					v-for="j in jobs"
					:key="j"
					v-html="j"></div>
			</div>
		</div>

		<div class="result">
			<h3>이런 직업 강의는 어떤가요?</h3>
			<a
				:href="lectureHref"
				target="_blank"
				class="lecture">
				<img
					:src="lectureImg"
					alt="강의" />
			</a>
		</div>

		<div class="btn btn-green btn-small share-or-copy">결과 공유하기</div>
		<a
			href="/"
			class="btn btn-gray btn-small"
			>다시 테스트</a
		>
	</div>
</template>

<script>
	import { results, mbtis } from '@/assets/js/data.js';

	export default {
		name: 'ResultView',
		created() {},
		mounted() {
			this.setResult();
			require('@/assets/js/share.js');
		},
		data() {
			return {
				title: '',
				subTitle: '내 본캐는?!',
				characterSrc: '',
				lectureHref: '',
				jobs: [],
				results: [],
			};
		},
		props: {},
		methods: {
			async shareEvent() {
				console.log('🚀 ~ file: ResultView.vue:79 ~ shareEvent ~ shareEvent', this.$event);

				// if (share.isSupportedShare) {
				// 	await share.startNativeShare();
				// 	return;
				// }
				// if (share.isSupportedClipboard || share.isSupportedClipboardCommand) {
				// 	await share.copyToClipboard();
				// }
			},
			setResult() {
				// const mbti = new URLSearchParams(location.search).get('mbti');
				const mbti = this.$route.query.mbti;

				const result = results[mbtis[mbti]];
				console.log('🚀 ~ file: results.js:6 ~ result', result);

				// const subTitleEl = document.querySelector('.page-subtitle');
				// const charactersEl = document.querySelector('.character');
				// const boxEls = document.querySelectorAll('.box');
				// const jobEls = document.querySelectorAll('.job');
				// const lectureEl = document.querySelector('.lecture');
				// const lectureImgEl = document.querySelector('.lecture img');

				this.title = result.title;
				this.characterSrc = `.${result.character}`;
				this.lectureImg = `.${result.lectureImg}`;
				this.lectureHref = `${result.lectureUrl}`;

				// jobEls.forEach((j, idx) => {
				// 	j.innerHTML = result.jobs[idx];
				// });

				// boxEls.forEach((b, idx) => {
				// 	b.innerHTML = result.results[idx];
				// });

				this.results = result.results;
				this.jobs = result.jobs;

				this.subTitle += ` ${mbti?.toUpperCase() || ''}`;
			},
		},
	};
</script>

<style lang="scss" scoped></style>
