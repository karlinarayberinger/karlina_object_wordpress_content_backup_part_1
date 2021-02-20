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

function get_specific_integer_percentage_value(nonnegative_integer_value) {
	const DEFAULT_NONNEGATIVE_INTEGER_VALUE = 10;
	nonnegative_integer_value = (!is_nonnegative_integer_value(nonnegative_integer_value)) ? (DEFAULT_NONNEGATIVE_INTEGER_VALUE : nonnegative_integer_value);
	console.log("DEFAULT_NONNEGATIVE_INTEGER_VALUE := " + DEFAULT_NONNEGATIVE_INTEGER_VALUE + '.');
	console.log("nonnegative_integer_value := " + nonnegative_integer_value + '.');
	return nonnegative_integer_value;
}