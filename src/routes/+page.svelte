<script>
	import { enhance } from '$app/forms';
	import NumericInput from '$lib/components/NumericInput.svelte';
	import arrowIcon from '$lib/images/icon-arrow.svg';
	import { ageCalculator } from '$lib/utils/ageCalculator';
	import { yupValidator } from '$lib/yup/validator';
	import { ageCalculatorSchema } from '$lib/yup/schema';
	let isSubmitted = false;
	let fieldErrors = {};
	let ageForYears = '--';
	let ageForMonths = '--';
	let ageForDays = '--';

	const onFormSubmit = async ({ form, cancel }) => {
		////! Before form submitting event client side validation
		const formData = await new FormData(form);

		//? yup validate before form submit event
		fieldErrors = await yupValidator(formData, ageCalculatorSchema);
		if (!fieldErrors) {
			const formObj = Object.fromEntries(await formData.entries());
			const { ageYears, ageMonths, ageDays, eMessage } = await ageCalculator(
				formObj.year,
				formObj.month,
				formObj.day
			);

			if (eMessage == '') {
				ageForYears = ageYears?.toLocaleString('en-US', {
					minimumIntegerDigits: 2,
					useGrouping: false
				});
				ageForMonths = ageMonths?.toLocaleString('en-US', {
					minimumIntegerDigits: 2,
					useGrouping: false
				});
				ageForDays = ageDays?.toLocaleString('en-US', {
					minimumIntegerDigits: 2,
					useGrouping: false
				});
			} else {
				fieldErrors = { ...fieldErrors, ...{ day: eMessage } };
			}
		}
		cancel();
	};
</script>

<svelte:head>
	<title>Age Calculator App</title>
</svelte:head>

<div class="grid bg-white p-8 rounded-3xl rounded-br-[25%] m-4 ">
	<form id="ageCalculator" name="ageCalculator" method="POST" action="#" use:enhance={onFormSubmit}>
		<div class="grid grid-cols-3 gap-4 my-8 md:grid-cols-4 md:my-4">
			<NumericInput
				text="DAY"
				name="day"
				placeholderText="DD"
				mask="day"
				errorMessage={!!fieldErrors && fieldErrors.day}
			/>
			<NumericInput
				text="MONTH"
				name="month"
				placeholderText="MM"
				mask="month"
				errorMessage={!!fieldErrors && fieldErrors.month}
			/>
			<NumericInput
				text="YEAR"
				name="year"
				placeholderText="YYYY"
				mask="year"
				errorMessage={!!fieldErrors && fieldErrors.year}
			/>
		</div>
	</form>

	<div class="relative flex justify-center md:justify-end">
		<hr class="absolute top-1/2 w-full" />
		<!-- absolute left-1/2 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 -->
		<button
			form="ageCalculator"
			type="submit"
			class="relative z-10 bg-myPurple p-6 rounded-full
             transition-all duration-200 hover:bg-offBlack active:bg-offBlack"
		>
			<img src={arrowIcon} alt="arrow icon" class=" aspect-square w-8" />
		</button>
	</div>
	<div class="grid my-8 gap-2 md:my-4">
		<div>
			<span class="text-myPurple">{ageForYears}</span>
			<h1>&nbsp;years</h1>
		</div>
		<div>
			<span class="text-myPurple">{ageForMonths}</span>
			<h1>&nbsp;months</h1>
		</div>
		<div>
			<span class="text-myPurple">{ageForDays}</span>
			<h1>&nbsp;days</h1>
		</div>
	</div>
</div>
