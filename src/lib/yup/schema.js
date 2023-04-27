import * as y from 'yup';

const currentDate = new Date();

export const ageCalculatorSchema = y.object({
	day: y
		.number()
		.max(31, 'Must be valid day.')
		.transform((value) => (isNaN(value) ? undefined : value))
		.required('This field is required.'),
	month: y
		.number()
		.max(12, 'Must be valid month.')
		.transform((value) => (isNaN(value) ? undefined : value))
		.required('This field is required.'),
	year: y
		.number()
		.max(currentDate.getFullYear(), `Must be in the past`)
		.transform((value) => (isNaN(value) ? undefined : value))
		.required('This field is required.')
	//.min(4, 'Please input valid year.')
});
