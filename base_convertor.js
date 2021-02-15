/**
 * file: base_convertor.js
 * type: JavaScript
 * author: karbytes
 * date: 14_FEBRUARY_2021
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

function numeric_base_names() {
	let array = [];
	array.push("unary");
	array.push("binary");
	array.push("ternary");
	array.push("quaternary");
	array.push("quinary");
	array.push("senary");
	array.push("septenary");
	array.push("octal");
	array.push("nonary");
	array.push("decimal");
	array.push("undecimal");
	array.push("duodecimal");
	array.push("tridecimal");
	array.push("tetradecimal");
	array.push("pentadecimal");
	array.push("hexidecimal");
	return array;
}

function base_select_options() {
	let base_names = numeric_base_names();
	let html_content_string = "";
	let i = 3;
	html_content_string += ('<' + 'option value="2" selected' + '>');
	html_content_string += ('base-2 (binary)');
	html_content_string += ('<' + '/' + 'option' + '>');
	for (i = 3; i < 16; i++) {
		html_content_string += ('<' + 'option value="' + i + '" selected' + '>');
		html_content_string += ('base-' + i + '(' + base_names[i] + ')');
		html_content_string += ('<' + '/' + 'option' + '>');
	}
	return html_content_string;
}

function input_base_select_menu() {
	let input_base_select_menu_html_string = "";
	let input_base_options = base_select_options();
	input_base_select_menu_html_string += ('<' + 'select id="input_base_menu"' + '>');
	input_base_select_menu_html_string += input_base_options;
	input_base_select_menu_html_string += ('<' + '/' + 'select' + '>');
	return input_base_select_menu_string;
}

function output_base_select_menu() {
	let output_base_select_menu_html_string = "";
	let output_base_options = base_select_options();
	output_base_select_menu_html_string += ('<' + 'select id="output_base_menu"' + '>');
	output_base_select_menu_html_string += input_base_options;
	output_base_select_menu_html_string += ('<' + '/' + 'select' + '>');
	return output_base_select_menu_string;
}

function initialize_application() {
	// test();
}