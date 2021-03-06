/**
 * @module template
 *
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 *
 * <p>A very fast templating engine.</p>
 */
(function(framework) {
    'use strict';

    /*
     * Aliases.
     */
    var me = framework;

    /*
     * Module configuration.
     */
    var config = {

        /*
         *
         */
        constants : {

            /*
             *
             */
            command : {
                EACH : 'each'
            },

            /*
             *
             */
            regExp : {
                TEMPLATE : /\{\{(.*?)\}\}/g,
                SEPARATOR : /\s+/
            }
        }
    };

    /*
     * Common constants.
     */
    var kObject = 'object';
    var kString = 'string';
    var kEmpty = '';
    var constants = config.constants;
    var kSeparatorRegExp = constants.regExp.SEPARATOR;
    var kEach = constants.command.EACH;

    /*
     *
     */
    function parseDirective(line, data) {
        var len = line.length;

        switch (len) {
            case 0:
                return kEmpty;
            case 1:
                return line[0];
        }

        var directive = line[0].split(kSeparatorRegExp);
        var subTpl = line[1];
        var directiveKey = kEmpty;
        var collectionKey = kEmpty;

        if (directive.length > 1) {
            collectionKey = directive[1];
        }

        directiveKey = directive[0];

        if (directiveKey !== kEach) {
            return subTpl.join(kEmpty);
        }

        var collection = collectionKey ? data[collectionKey] : data;

        if (typeof collection !== kObject) {
            return subTpl.join('');
        }

        var buffer = [];
        var parse = me.Template.parse;
        var i = 0;
        var clen = 0;

        for (i = 0, clen = collection.length; i < clen; i++) {
            buffer.push(parse(collection[i], subTpl));
        }

        return buffer.join('');
    }

    /*
     *
     */
    function parse(line, data) {
        var regTemplate = config.constants.regExp.TEMPLATE;

        if (typeof line !== kString) {
            return parseDirective(line, data);
        }

        return line.replace(regTemplate, function(str, p1/*, offset, total*/) {
            return data[p1] !== undefined ? data[p1] : str;
        });
    }

    /**
     * @class {static} o2.Template
     *
     * <p>A really <strong>fast</strong> template engine.</p>
     */
    me.Template = {

        /**
         * @function {static} o2.Template.parse
         *
         * <p>Parses the given template.</p>
         *
         * @param {Object} data - the source data as a <strong>JSON</strong>
         * object.
         * @param {String} tpl - the template to parse against.
         * @return {String} the parsed template.
         */
        parse : function(data, tpl) {
            var buffer = [];
            var i = 0;
            var len = 0;

            data = data || {};

            for (i = 0, len = tpl.length; i < len; i++) {
                buffer.push(parse(tpl[i], data));
            }

            return buffer.join(kEmpty);
        }
    };
}(this.o2));
