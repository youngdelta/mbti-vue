<template>
	<div>
		<div class="progress">
			<div
				ref="refProgressValue"
				class="value"></div>
		</div>
		<div class="question-box">
			<div class="number">{{ numberElTxt }}</div>
			<div
				class="question"
				v-html="questionElTxt"></div>
			<div
				class="btn btn-gray choice choice1"
				@click="onClickChoice(0)"
				v-html="choice1ElTxt"></div>
			<div
				class="btn btn-gray choice choice2"
				@click="onClickChoice(1)"
				v-html="choice2ElTxt"></div>
		</div>
	</div>
</template>

<script>
	import { questions } from '@/assets/js/data.js';

	export default {
		name: 'QuestionsView',
		props: {
			//
		},
		data() {
			return {
				numberElTxt: 0,
				questionElTxt: '',
				choice1ElTxt: '',
				choice2ElTxt: '',
				currentNumber: 0,
				mbti: '',
			};
		},
		methods: {
			renderQuestion() {
				const question = questions?.[this.currentNumber] || {};
				this.numberElTxt = question?.number || 0;
				this.questionElTxt = question?.question || '';
				this.choice1ElTxt = question?.choices?.[0]?.text || '';
				this.choice2ElTxt = question?.choices?.[1]?.text || '';

				this.$refs.refProgressValue.style.width = `${(this.currentNumber + 1) * 10}%`;
			},

			showResultPage() {
				// window.location.href = `/result?mbti=${this.mbti}`;
				this.$router.push({ name: 'ResultView', query: { mbti: this.mbti } });
			},
			onClickChoice(val) {
				console.log('🚀 ~ file: QuestionsView.vue:56 ~ onClickChoice ~ val', val);
				// const choiceNum = e.target.classList.contains('choice1') ? 0 : 1;
				this.mbti += questions?.[this.currentNumber]?.choices?.[val]?.value || '';
				console.log('🚀 ~ file: questions.js:44 ~ eventListener ~ mbti', this.mbti);
				if (this.currentNumber === questions.length - 1) {
					this.showResultPage();
					return;
				}
				this.currentNumber++;
				this.renderQuestion();
			},
		},
		created() {
			//
		},
		mounted() {
			this.renderQuestion();
		},
		watch: {
			//
		},
	};
</script>

<style></style>
