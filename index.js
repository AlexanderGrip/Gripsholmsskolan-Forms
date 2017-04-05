/**
 * Created by Daniel Schlaug on 2017-03-04.
 */

"use strict";

import $ from 'jquery';

$('window').on('load', () => {
    $('body').prepend(
        "<p class='no-print'>" +
        "Detta dokument kan fyllas i och skrivas ut på papper eller pdf. Notera att de ändringar du gör INTE sparas om du stänger sidan, laddar om sidan eller navigerar bort från sidan." +
        "</p>"
    );
});