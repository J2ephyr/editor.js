/**
 * @abstract
 * @class      Module
 * @classdesc  All modules inherits from this class.
 *
 * @typedef {Module} Module
 * @property {Object} config - Editor user settings
 * @property {Object} Editor - List of Editor modules
 */
export default class Module {
    /**
     * @constructor
     *
     * @param {EditorConfig} config
     */
    constructor({ config }) {
        /**
         * Editor modules list
         * @type {EditorComponents}
         */
        this.Editor = null;
        /**
         * Editor configuration object
         * @type {EditorConfig}
         */
        this.config = {};
        if (new.target === Module) {
            throw new TypeError('Constructors for abstract class Module are not allowed.');
        }
        this.config = config;
    }
    /**
     * Editor modules setter
     *
     * @param Editor
     * @param Editor.modules {@link CodexEditor#moduleInstances}
     * @param Editor.config {@link CodexEditor#configuration}
     */
    set state(Editor) {
        this.Editor = Editor;
    }
}
