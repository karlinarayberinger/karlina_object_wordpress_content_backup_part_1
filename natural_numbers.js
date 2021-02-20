/**
 * file: base_convertor.js
 * type: JavaScript
 * author: karbytes
 * date: 20_FEBRUARY_2021
 * license: PUBLIC_DOMAIN
 */

function get_random_integer_percentage_value() {
	let random_nonnegative_real_number_quantity_less_than_one = undefined;
	let random_nonnegative_integer_less_than_one_hundred = undefined;
	random_nonnegative_real_number_quantity_less_than_one = Math.random();
	random_nonnegative_integer_less_than_one_hundred = (random_nonnegative_real_number_quantity_less_than_one * 100);
	console.log("random_nonnegative_real_number_quantity_less_than_one := " + random_nonnegative_real_number_quantity_less_than_one + '.');
	console.log("random_nonnegative_integer_less_than_one_hundred := " + random_nonnegative_integer_less_than_one_hundred + '.');
	return random_nonnegative_integer_less_than_one_hundred;
}