// src/index.js
import $ from 'jquery';

const paragraph1 = $('<p>').text('Paragraph uno');
const paragraph2 = $('<p>').text('Paragraph deux');
const paragraph3 = $('<p>').text('Paragraph three');

$('body').append(paragraph1, paragraph2, paragraph3);
