/**
 * file: base_convertor.js
 * type: JavaScript
 * author: karbytes
 * date: 13_FEBRUARY_2021
 * license: PUBLIC_DOMAIN
 */

function is_exactly_one_argument(input) {
	return (arguments.length === 1) ? true : false;
}

function is_string_type_argument(input) {
	return (is_exactly_one_argument(arguments[0]) && ((typeof arguments[0]) === "string")) ? true : false;
}

function is_exactly_one_character(x) {
	return (is_string_type_argument(arguments[0]) && (arguments[0].length === 1)) ? true : false;
}

function is_hexidecimal_digit(x) {
	let hexidecimal_digits = "0123456789abcdef", i = 0;
	if (!is_exactly_one_character(x)) return false;
	for (i = 0; i < hexidecimal_digits.length; i++) if (x === hexidecimal_digits[i]) return true;
	return false;
}

function is_eight_digit_hexidecimal_sequence(s) {
	let i = 0;
	if (!is_string_type_argument(s) || (s.length !== 8)) return false;
	for (i = 0; i < 8; i++) if (!is_hexidecimal_digit(s[i])) return false;
	return true;
}

function eight_digit_hexidecimal_sequence_to_decimal_integer(s) {
	let hexidecimal_digits = "0123456789abcdef", i = 0, k = 0, decimal_integer = 0;
	if (!is_eight_digit_hexidecimal_sequence(s)) return 0;
	for (i = 0; i < s.length; i++) {
		for (k = 0; k < hexidecimal_digits.length; k++) {
			if (s[i] === hexidecimal_digits[k]) {
				decimal_integer += (k * Math.pow(16,(s.length - 1) - i));
			}
		}
	}
	return decimal_integer;
}

function random_eight_digit_hexidecimal_sequence() {
	let hexidecimal_digits = "0123456789abcdef";
	let random_hexidecimal_digit_index = 0;
	let random_hexidecimal_digit = 0;
	let output_sequence_index = 0;
	let output_sequence = "";
	while (output_sequence_index < 8) {
		random_hexidecimal_digit_index = Math.floor(Math.random() * 15);
		random_hexidecimal_digit = hexidecimal_digits[random_hexidecimal_digit_index];
		output_sequence += random_hexidecimal_digit;
		output_sequence_index += 1;
	}
	return output_sequence;
}

function test() {
	let hexidecimal_input = random_eight_digit_hexidecimal_sequence();
	let decimal_output = eight_digit_hexidecimal_sequence_to_decimal_integer(hexidecimal_input);
	console.log('hexidecimal_input := "' +  hexidecimal_input + '".');
	console.log('decimal_output := ' + decimal_output + '.');
}