<script>
	import IMask from 'imask';
	import { imask } from '@imask/svelte';
	export let text = 'default';
	export let name = 'default';
	export let placeholderText = 'default';
	export let mask = /^$/;
	export let required = false;
	export let value = '';
	export let errorMessage = '';
	$: hasError = !!errorMessage;
	const options = {
		mask: mask,
		blocks: {
			day: {
				mask: IMask.MaskedRange,
				from: 1,
				to: 99,
				maxLength: 2
			},
			month: {
				mask: IMask.MaskedRange,
				from: 1,
				to: 99,
				maxLength: 2
			},
			year: {
				mask: IMask.MaskedRange,
				from: 1000,
				to: 9999,
				maxLength: 4
			}
		}
	};

	const leadZero = () => {
		if (value.length == 1) {
			value = '0' + value;
		}
	};
</script>

<section class="grid relative">
	<label for={name} class={hasError && 'text-lightRed'}>{text}</label>
	<input
		type="text"
		inputmode="numeric"
		{name}
		id={name}
		placeholder={placeholderText}
		autocomplete="off"
		use:imask={options}
		on:blur={leadZero}
		bind:value
		{required}
		class={hasError && 'border-lightRed'}
	/>
	{#if hasError}
		<p class=" absolute -bottom-6 left-0">
			<em class="text-lightRed text-sm font-normal whitespace-nowrap">{errorMessage}</em>
		</p>
	{/if}
</section>
