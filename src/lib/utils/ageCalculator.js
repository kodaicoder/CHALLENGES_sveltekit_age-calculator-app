export async function ageCalculator(year, month, day) {
	const today = new Date();
	const birthDate = new Date(`${year}-${month}-${day}`);
	let ageYears;
	let ageMonths;
	let ageDays;
	let eMessage = '';
	if (birthDate < today) {
		if (birthDate.getMonth() + 1 === +month) {
			ageYears = today.getFullYear() - birthDate.getFullYear();
			ageMonths = today.getMonth() - birthDate.getMonth();
			ageDays = today.getDate() - birthDate.getDate();
			ageYears--;
			ageMonths += 12;
			if (ageDays < 0) {
				ageMonths--;
				const monthDays = new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate();
				ageDays += monthDays;
			}
			//made left over month back to year
			if (ageMonths >= 12) {
				ageMonths -= 12;
				ageYears++;
			}
		} else {
			//? the if logic above will check user input month and month that has been convert is the same month or not
			//? if not that mean user input a invalid date
			//? e.g. you input day as 31 month as 4 birthDate will be 1st of May (5)

			eMessage = 'Must be valid date.';
		}
	} else {
		//? user input a future date
		eMessage = 'Must be in the past date.';
	}

	return {
		ageYears,
		ageMonths,
		ageDays,
		eMessage
	};
}
