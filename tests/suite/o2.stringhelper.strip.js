/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*global o2, Demo*/
( function(o2, window, UNDEFINED) {

    /*
     * Aliases.
     */
    var add = o2.Unit.add;
    var run = o2.Unit.run;
    var assertStrictEqual = o2.Unit.assertStrictEqual;
    var assertEqual = o2.Unit.assertEqual;
    var assert = o2.Unit.assert;

    /**
     *
     */
    var Suite = {

        /**
         *
         */
        init : function() {

            add('o2.StringHelper.stripNonAlpha SHOULD strip non alphabetical characters from a string.');
            add('o2.StringHelper.stripNonAlphaNumeric SHOULD strip non alphanumeric characters from a string.');
            add('o2.StringHelper.stripNonNumeric SHOULD strip non numeric characters from a string.');
            add('o2.StringHelper.stripNumeric SHOULD strip numeric characters from a string.');
            add('o2.StringHelper.stripTags SHOULD strip tags from a string');

            run(parent && parent.Runner && parent.Runner.processCompletedSuite);

        }

    };

    Suite.init();

}(o2, this));
