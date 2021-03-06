/**
 * @module supports
 * @requires "all modules that the support will be checked"
 *
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 *
 * <p>An object support checker.</p>
 */
(function(framework, document) {
    'use strict';

    /*
     * Aliases.
     */
    var me = framework;
    var myName = framework.name;
    var kTestCookiePrefix = 'tst';
    var kEmpty = '';

    /**
     * @class {static} o2.Supports
     *
     * <p>Checks support for various objects and properties like
     * <strong>DOM</strong>
     * and <strong>cookie</strong>s.</p>
     */
    me.Supports = {

        /**
         * @function {static} o2.Supports.cookie
         *
         * <p>Checks for <strong>cookie</strong> support.</p>
         *
         * @return <code>true</code> if <strong>cookie</strong>s are supported,
         * <code>false</code> otherwise.
         */
        cookie : function() {
            var kTestCookie = [myName, kTestCookiePrefix].join(kEmpty);
            var cookie = me.Cookie;
            var value = null;

            cookie.save(kTestCookie, kTestCookie, 1);

            try {
                value = cookie.read(kTestCookie);
            } catch(ignore) {
            }

            if (!value) {
                return false;
            }

            cookie.remove(kTestCookie);

            return true;
        },

        /**
         * @function {static} o2.Supports.dom
         *
         * <p>Checks whether <strong>DOM</strong> is adequately supported.
         *
         * @return <code>true</code> if <strong>DOM</strong> is supported,
         * <code>false</code> otherwise.
         */
        dom : function() {
            return document.getElementById && document.createElement &&
                document.getElementsByTagName;
        },

        /**
         * @function {static} o2.Supports.ajax
         *
         * <p>Checks whether <strong>AJAX</strong> is supported.
         *
         * @return <code>true</code> if <strong>AJAX</strong> is supported,
         * <code>false</code> otherwise.
         */
        ajax : function() {
            return !!me.Ajax.createXhr();
        }
    };
}(this.o2, this.document));
