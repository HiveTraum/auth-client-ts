/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("@apollo/protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.inout = (function() {

    /**
     * Namespace inout.
     * @exports inout
     * @namespace
     */
    var inout = {};

    inout.CreateRoleRequestV1 = (function() {

        /**
         * Properties of a CreateRoleRequestV1.
         * @memberof inout
         * @interface ICreateRoleRequestV1
         * @property {string|null} [title] CreateRoleRequestV1 title
         */

        /**
         * Constructs a new CreateRoleRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateRoleRequestV1.
         * @implements ICreateRoleRequestV1
         * @constructor
         * @param {inout.ICreateRoleRequestV1=} [properties] Properties to set
         */
        function CreateRoleRequestV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoleRequestV1 title.
         * @member {string} title
         * @memberof inout.CreateRoleRequestV1
         * @instance
         */
        CreateRoleRequestV1.prototype.title = "";

        /**
         * Creates a new CreateRoleRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateRoleRequestV1
         * @static
         * @param {inout.ICreateRoleRequestV1=} [properties] Properties to set
         * @returns {inout.CreateRoleRequestV1} CreateRoleRequestV1 instance
         */
        CreateRoleRequestV1.create = function create(properties) {
            return new CreateRoleRequestV1(properties);
        };

        /**
         * Encodes the specified CreateRoleRequestV1 message. Does not implicitly {@link inout.CreateRoleRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateRoleRequestV1
         * @static
         * @param {inout.ICreateRoleRequestV1} message CreateRoleRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoleRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            return writer;
        };

        /**
         * Encodes the specified CreateRoleRequestV1 message, length delimited. Does not implicitly {@link inout.CreateRoleRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateRoleRequestV1
         * @static
         * @param {inout.ICreateRoleRequestV1} message CreateRoleRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoleRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoleRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateRoleRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateRoleRequestV1} CreateRoleRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoleRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateRoleRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoleRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateRoleRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateRoleRequestV1} CreateRoleRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoleRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoleRequestV1 message.
         * @function verify
         * @memberof inout.CreateRoleRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoleRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            return null;
        };

        /**
         * Creates a CreateRoleRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateRoleRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateRoleRequestV1} CreateRoleRequestV1
         */
        CreateRoleRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateRoleRequestV1)
                return object;
            var message = new $root.inout.CreateRoleRequestV1();
            if (object.title != null)
                message.title = String(object.title);
            return message;
        };

        /**
         * Creates a plain object from a CreateRoleRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateRoleRequestV1
         * @static
         * @param {inout.CreateRoleRequestV1} message CreateRoleRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoleRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.title = "";
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            return object;
        };

        /**
         * Converts this CreateRoleRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateRoleRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoleRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoleRequestV1;
    })();

    inout.CreateRoleBadRequestV1 = (function() {

        /**
         * Properties of a CreateRoleBadRequestV1.
         * @memberof inout
         * @interface ICreateRoleBadRequestV1
         * @property {Array.<string>|null} [title] CreateRoleBadRequestV1 title
         */

        /**
         * Constructs a new CreateRoleBadRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateRoleBadRequestV1.
         * @implements ICreateRoleBadRequestV1
         * @constructor
         * @param {inout.ICreateRoleBadRequestV1=} [properties] Properties to set
         */
        function CreateRoleBadRequestV1(properties) {
            this.title = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoleBadRequestV1 title.
         * @member {Array.<string>} title
         * @memberof inout.CreateRoleBadRequestV1
         * @instance
         */
        CreateRoleBadRequestV1.prototype.title = $util.emptyArray;

        /**
         * Creates a new CreateRoleBadRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateRoleBadRequestV1
         * @static
         * @param {inout.ICreateRoleBadRequestV1=} [properties] Properties to set
         * @returns {inout.CreateRoleBadRequestV1} CreateRoleBadRequestV1 instance
         */
        CreateRoleBadRequestV1.create = function create(properties) {
            return new CreateRoleBadRequestV1(properties);
        };

        /**
         * Encodes the specified CreateRoleBadRequestV1 message. Does not implicitly {@link inout.CreateRoleBadRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateRoleBadRequestV1
         * @static
         * @param {inout.ICreateRoleBadRequestV1} message CreateRoleBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoleBadRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && message.title.length)
                for (var i = 0; i < message.title.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.title[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateRoleBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreateRoleBadRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateRoleBadRequestV1
         * @static
         * @param {inout.ICreateRoleBadRequestV1} message CreateRoleBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoleBadRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoleBadRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateRoleBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateRoleBadRequestV1} CreateRoleBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoleBadRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateRoleBadRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.title && message.title.length))
                        message.title = [];
                    message.title.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoleBadRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateRoleBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateRoleBadRequestV1} CreateRoleBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoleBadRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoleBadRequestV1 message.
         * @function verify
         * @memberof inout.CreateRoleBadRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoleBadRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title")) {
                if (!Array.isArray(message.title))
                    return "title: array expected";
                for (var i = 0; i < message.title.length; ++i)
                    if (!$util.isString(message.title[i]))
                        return "title: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CreateRoleBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateRoleBadRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateRoleBadRequestV1} CreateRoleBadRequestV1
         */
        CreateRoleBadRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateRoleBadRequestV1)
                return object;
            var message = new $root.inout.CreateRoleBadRequestV1();
            if (object.title) {
                if (!Array.isArray(object.title))
                    throw TypeError(".inout.CreateRoleBadRequestV1.title: array expected");
                message.title = [];
                for (var i = 0; i < object.title.length; ++i)
                    message.title[i] = String(object.title[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateRoleBadRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateRoleBadRequestV1
         * @static
         * @param {inout.CreateRoleBadRequestV1} message CreateRoleBadRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoleBadRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.title = [];
            if (message.title && message.title.length) {
                object.title = [];
                for (var j = 0; j < message.title.length; ++j)
                    object.title[j] = message.title[j];
            }
            return object;
        };

        /**
         * Converts this CreateRoleBadRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateRoleBadRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoleBadRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoleBadRequestV1;
    })();

    inout.GetRoleResponseV1 = (function() {

        /**
         * Properties of a GetRoleResponseV1.
         * @memberof inout
         * @interface IGetRoleResponseV1
         * @property {Uint8Array|null} [id] GetRoleResponseV1 id
         * @property {number|Long|null} [created] GetRoleResponseV1 created
         * @property {string|null} [title] GetRoleResponseV1 title
         */

        /**
         * Constructs a new GetRoleResponseV1.
         * @memberof inout
         * @classdesc Represents a GetRoleResponseV1.
         * @implements IGetRoleResponseV1
         * @constructor
         * @param {inout.IGetRoleResponseV1=} [properties] Properties to set
         */
        function GetRoleResponseV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoleResponseV1 id.
         * @member {Uint8Array} id
         * @memberof inout.GetRoleResponseV1
         * @instance
         */
        GetRoleResponseV1.prototype.id = $util.newBuffer([]);

        /**
         * GetRoleResponseV1 created.
         * @member {number|Long} created
         * @memberof inout.GetRoleResponseV1
         * @instance
         */
        GetRoleResponseV1.prototype.created = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRoleResponseV1 title.
         * @member {string} title
         * @memberof inout.GetRoleResponseV1
         * @instance
         */
        GetRoleResponseV1.prototype.title = "";

        /**
         * Creates a new GetRoleResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.GetRoleResponseV1
         * @static
         * @param {inout.IGetRoleResponseV1=} [properties] Properties to set
         * @returns {inout.GetRoleResponseV1} GetRoleResponseV1 instance
         */
        GetRoleResponseV1.create = function create(properties) {
            return new GetRoleResponseV1(properties);
        };

        /**
         * Encodes the specified GetRoleResponseV1 message. Does not implicitly {@link inout.GetRoleResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.GetRoleResponseV1
         * @static
         * @param {inout.IGetRoleResponseV1} message GetRoleResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoleResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.created != null && Object.hasOwnProperty.call(message, "created"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.created);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            return writer;
        };

        /**
         * Encodes the specified GetRoleResponseV1 message, length delimited. Does not implicitly {@link inout.GetRoleResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.GetRoleResponseV1
         * @static
         * @param {inout.IGetRoleResponseV1} message GetRoleResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoleResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoleResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.GetRoleResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.GetRoleResponseV1} GetRoleResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoleResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.GetRoleResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.created = reader.int64();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRoleResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.GetRoleResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.GetRoleResponseV1} GetRoleResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoleResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoleResponseV1 message.
         * @function verify
         * @memberof inout.GetRoleResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoleResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.created != null && message.hasOwnProperty("created"))
                if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                    return "created: integer|Long expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            return null;
        };

        /**
         * Creates a GetRoleResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.GetRoleResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.GetRoleResponseV1} GetRoleResponseV1
         */
        GetRoleResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.GetRoleResponseV1)
                return object;
            var message = new $root.inout.GetRoleResponseV1();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.created != null)
                if ($util.Long)
                    (message.created = $util.Long.fromValue(object.created)).unsigned = false;
                else if (typeof object.created === "string")
                    message.created = parseInt(object.created, 10);
                else if (typeof object.created === "number")
                    message.created = object.created;
                else if (typeof object.created === "object")
                    message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber();
            if (object.title != null)
                message.title = String(object.title);
            return message;
        };

        /**
         * Creates a plain object from a GetRoleResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.GetRoleResponseV1
         * @static
         * @param {inout.GetRoleResponseV1} message GetRoleResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRoleResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.created = options.longs === String ? "0" : 0;
                object.title = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.created != null && message.hasOwnProperty("created"))
                if (typeof message.created === "number")
                    object.created = options.longs === String ? String(message.created) : message.created;
                else
                    object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber() : message.created;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            return object;
        };

        /**
         * Converts this GetRoleResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.GetRoleResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRoleResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRoleResponseV1;
    })();

    inout.ListRoleResponseV1 = (function() {

        /**
         * Properties of a ListRoleResponseV1.
         * @memberof inout
         * @interface IListRoleResponseV1
         * @property {Array.<inout.IGetRoleResponseV1>|null} [data] ListRoleResponseV1 data
         */

        /**
         * Constructs a new ListRoleResponseV1.
         * @memberof inout
         * @classdesc Represents a ListRoleResponseV1.
         * @implements IListRoleResponseV1
         * @constructor
         * @param {inout.IListRoleResponseV1=} [properties] Properties to set
         */
        function ListRoleResponseV1(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListRoleResponseV1 data.
         * @member {Array.<inout.IGetRoleResponseV1>} data
         * @memberof inout.ListRoleResponseV1
         * @instance
         */
        ListRoleResponseV1.prototype.data = $util.emptyArray;

        /**
         * Creates a new ListRoleResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.ListRoleResponseV1
         * @static
         * @param {inout.IListRoleResponseV1=} [properties] Properties to set
         * @returns {inout.ListRoleResponseV1} ListRoleResponseV1 instance
         */
        ListRoleResponseV1.create = function create(properties) {
            return new ListRoleResponseV1(properties);
        };

        /**
         * Encodes the specified ListRoleResponseV1 message. Does not implicitly {@link inout.ListRoleResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.ListRoleResponseV1
         * @static
         * @param {inout.IListRoleResponseV1} message ListRoleResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRoleResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.inout.GetRoleResponseV1.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListRoleResponseV1 message, length delimited. Does not implicitly {@link inout.ListRoleResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.ListRoleResponseV1
         * @static
         * @param {inout.IListRoleResponseV1} message ListRoleResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRoleResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListRoleResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.ListRoleResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.ListRoleResponseV1} ListRoleResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRoleResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.ListRoleResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.inout.GetRoleResponseV1.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListRoleResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.ListRoleResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.ListRoleResponseV1} ListRoleResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRoleResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListRoleResponseV1 message.
         * @function verify
         * @memberof inout.ListRoleResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListRoleResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.inout.GetRoleResponseV1.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListRoleResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.ListRoleResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.ListRoleResponseV1} ListRoleResponseV1
         */
        ListRoleResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.ListRoleResponseV1)
                return object;
            var message = new $root.inout.ListRoleResponseV1();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".inout.ListRoleResponseV1.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".inout.ListRoleResponseV1.data: object expected");
                    message.data[i] = $root.inout.GetRoleResponseV1.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListRoleResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.ListRoleResponseV1
         * @static
         * @param {inout.ListRoleResponseV1} message ListRoleResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListRoleResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.inout.GetRoleResponseV1.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this ListRoleResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.ListRoleResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListRoleResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListRoleResponseV1;
    })();

    inout.CreateUserRoleRequestV1 = (function() {

        /**
         * Properties of a CreateUserRoleRequestV1.
         * @memberof inout
         * @interface ICreateUserRoleRequestV1
         * @property {Uint8Array|null} [userID] CreateUserRoleRequestV1 userID
         * @property {Uint8Array|null} [roleID] CreateUserRoleRequestV1 roleID
         */

        /**
         * Constructs a new CreateUserRoleRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateUserRoleRequestV1.
         * @implements ICreateUserRoleRequestV1
         * @constructor
         * @param {inout.ICreateUserRoleRequestV1=} [properties] Properties to set
         */
        function CreateUserRoleRequestV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserRoleRequestV1 userID.
         * @member {Uint8Array} userID
         * @memberof inout.CreateUserRoleRequestV1
         * @instance
         */
        CreateUserRoleRequestV1.prototype.userID = $util.newBuffer([]);

        /**
         * CreateUserRoleRequestV1 roleID.
         * @member {Uint8Array} roleID
         * @memberof inout.CreateUserRoleRequestV1
         * @instance
         */
        CreateUserRoleRequestV1.prototype.roleID = $util.newBuffer([]);

        /**
         * Creates a new CreateUserRoleRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateUserRoleRequestV1
         * @static
         * @param {inout.ICreateUserRoleRequestV1=} [properties] Properties to set
         * @returns {inout.CreateUserRoleRequestV1} CreateUserRoleRequestV1 instance
         */
        CreateUserRoleRequestV1.create = function create(properties) {
            return new CreateUserRoleRequestV1(properties);
        };

        /**
         * Encodes the specified CreateUserRoleRequestV1 message. Does not implicitly {@link inout.CreateUserRoleRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateUserRoleRequestV1
         * @static
         * @param {inout.ICreateUserRoleRequestV1} message CreateUserRoleRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRoleRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.userID);
            if (message.roleID != null && Object.hasOwnProperty.call(message, "roleID"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.roleID);
            return writer;
        };

        /**
         * Encodes the specified CreateUserRoleRequestV1 message, length delimited. Does not implicitly {@link inout.CreateUserRoleRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateUserRoleRequestV1
         * @static
         * @param {inout.ICreateUserRoleRequestV1} message CreateUserRoleRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRoleRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserRoleRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateUserRoleRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateUserRoleRequestV1} CreateUserRoleRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRoleRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateUserRoleRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userID = reader.bytes();
                    break;
                case 2:
                    message.roleID = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateUserRoleRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateUserRoleRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateUserRoleRequestV1} CreateUserRoleRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRoleRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserRoleRequestV1 message.
         * @function verify
         * @memberof inout.CreateUserRoleRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserRoleRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!(message.userID && typeof message.userID.length === "number" || $util.isString(message.userID)))
                    return "userID: buffer expected";
            if (message.roleID != null && message.hasOwnProperty("roleID"))
                if (!(message.roleID && typeof message.roleID.length === "number" || $util.isString(message.roleID)))
                    return "roleID: buffer expected";
            return null;
        };

        /**
         * Creates a CreateUserRoleRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateUserRoleRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateUserRoleRequestV1} CreateUserRoleRequestV1
         */
        CreateUserRoleRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateUserRoleRequestV1)
                return object;
            var message = new $root.inout.CreateUserRoleRequestV1();
            if (object.userID != null)
                if (typeof object.userID === "string")
                    $util.base64.decode(object.userID, message.userID = $util.newBuffer($util.base64.length(object.userID)), 0);
                else if (object.userID.length)
                    message.userID = object.userID;
            if (object.roleID != null)
                if (typeof object.roleID === "string")
                    $util.base64.decode(object.roleID, message.roleID = $util.newBuffer($util.base64.length(object.roleID)), 0);
                else if (object.roleID.length)
                    message.roleID = object.roleID;
            return message;
        };

        /**
         * Creates a plain object from a CreateUserRoleRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateUserRoleRequestV1
         * @static
         * @param {inout.CreateUserRoleRequestV1} message CreateUserRoleRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserRoleRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.userID = "";
                else {
                    object.userID = [];
                    if (options.bytes !== Array)
                        object.userID = $util.newBuffer(object.userID);
                }
                if (options.bytes === String)
                    object.roleID = "";
                else {
                    object.roleID = [];
                    if (options.bytes !== Array)
                        object.roleID = $util.newBuffer(object.roleID);
                }
            }
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = options.bytes === String ? $util.base64.encode(message.userID, 0, message.userID.length) : options.bytes === Array ? Array.prototype.slice.call(message.userID) : message.userID;
            if (message.roleID != null && message.hasOwnProperty("roleID"))
                object.roleID = options.bytes === String ? $util.base64.encode(message.roleID, 0, message.roleID.length) : options.bytes === Array ? Array.prototype.slice.call(message.roleID) : message.roleID;
            return object;
        };

        /**
         * Converts this CreateUserRoleRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateUserRoleRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserRoleRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateUserRoleRequestV1;
    })();

    inout.CreateUserRoleBadRequestV1 = (function() {

        /**
         * Properties of a CreateUserRoleBadRequestV1.
         * @memberof inout
         * @interface ICreateUserRoleBadRequestV1
         * @property {Array.<string>|null} [userID] CreateUserRoleBadRequestV1 userID
         * @property {Array.<string>|null} [roleID] CreateUserRoleBadRequestV1 roleID
         * @property {Array.<string>|null} [errors] CreateUserRoleBadRequestV1 errors
         */

        /**
         * Constructs a new CreateUserRoleBadRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateUserRoleBadRequestV1.
         * @implements ICreateUserRoleBadRequestV1
         * @constructor
         * @param {inout.ICreateUserRoleBadRequestV1=} [properties] Properties to set
         */
        function CreateUserRoleBadRequestV1(properties) {
            this.userID = [];
            this.roleID = [];
            this.errors = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserRoleBadRequestV1 userID.
         * @member {Array.<string>} userID
         * @memberof inout.CreateUserRoleBadRequestV1
         * @instance
         */
        CreateUserRoleBadRequestV1.prototype.userID = $util.emptyArray;

        /**
         * CreateUserRoleBadRequestV1 roleID.
         * @member {Array.<string>} roleID
         * @memberof inout.CreateUserRoleBadRequestV1
         * @instance
         */
        CreateUserRoleBadRequestV1.prototype.roleID = $util.emptyArray;

        /**
         * CreateUserRoleBadRequestV1 errors.
         * @member {Array.<string>} errors
         * @memberof inout.CreateUserRoleBadRequestV1
         * @instance
         */
        CreateUserRoleBadRequestV1.prototype.errors = $util.emptyArray;

        /**
         * Creates a new CreateUserRoleBadRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateUserRoleBadRequestV1
         * @static
         * @param {inout.ICreateUserRoleBadRequestV1=} [properties] Properties to set
         * @returns {inout.CreateUserRoleBadRequestV1} CreateUserRoleBadRequestV1 instance
         */
        CreateUserRoleBadRequestV1.create = function create(properties) {
            return new CreateUserRoleBadRequestV1(properties);
        };

        /**
         * Encodes the specified CreateUserRoleBadRequestV1 message. Does not implicitly {@link inout.CreateUserRoleBadRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateUserRoleBadRequestV1
         * @static
         * @param {inout.ICreateUserRoleBadRequestV1} message CreateUserRoleBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRoleBadRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userID != null && message.userID.length)
                for (var i = 0; i < message.userID.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID[i]);
            if (message.roleID != null && message.roleID.length)
                for (var i = 0; i < message.roleID.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roleID[i]);
            if (message.errors != null && message.errors.length)
                for (var i = 0; i < message.errors.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.errors[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateUserRoleBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreateUserRoleBadRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateUserRoleBadRequestV1
         * @static
         * @param {inout.ICreateUserRoleBadRequestV1} message CreateUserRoleBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRoleBadRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserRoleBadRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateUserRoleBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateUserRoleBadRequestV1} CreateUserRoleBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRoleBadRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateUserRoleBadRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userID && message.userID.length))
                        message.userID = [];
                    message.userID.push(reader.string());
                    break;
                case 2:
                    if (!(message.roleID && message.roleID.length))
                        message.roleID = [];
                    message.roleID.push(reader.string());
                    break;
                case 3:
                    if (!(message.errors && message.errors.length))
                        message.errors = [];
                    message.errors.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateUserRoleBadRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateUserRoleBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateUserRoleBadRequestV1} CreateUserRoleBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRoleBadRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserRoleBadRequestV1 message.
         * @function verify
         * @memberof inout.CreateUserRoleBadRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserRoleBadRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userID != null && message.hasOwnProperty("userID")) {
                if (!Array.isArray(message.userID))
                    return "userID: array expected";
                for (var i = 0; i < message.userID.length; ++i)
                    if (!$util.isString(message.userID[i]))
                        return "userID: string[] expected";
            }
            if (message.roleID != null && message.hasOwnProperty("roleID")) {
                if (!Array.isArray(message.roleID))
                    return "roleID: array expected";
                for (var i = 0; i < message.roleID.length; ++i)
                    if (!$util.isString(message.roleID[i]))
                        return "roleID: string[] expected";
            }
            if (message.errors != null && message.hasOwnProperty("errors")) {
                if (!Array.isArray(message.errors))
                    return "errors: array expected";
                for (var i = 0; i < message.errors.length; ++i)
                    if (!$util.isString(message.errors[i]))
                        return "errors: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CreateUserRoleBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateUserRoleBadRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateUserRoleBadRequestV1} CreateUserRoleBadRequestV1
         */
        CreateUserRoleBadRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateUserRoleBadRequestV1)
                return object;
            var message = new $root.inout.CreateUserRoleBadRequestV1();
            if (object.userID) {
                if (!Array.isArray(object.userID))
                    throw TypeError(".inout.CreateUserRoleBadRequestV1.userID: array expected");
                message.userID = [];
                for (var i = 0; i < object.userID.length; ++i)
                    message.userID[i] = String(object.userID[i]);
            }
            if (object.roleID) {
                if (!Array.isArray(object.roleID))
                    throw TypeError(".inout.CreateUserRoleBadRequestV1.roleID: array expected");
                message.roleID = [];
                for (var i = 0; i < object.roleID.length; ++i)
                    message.roleID[i] = String(object.roleID[i]);
            }
            if (object.errors) {
                if (!Array.isArray(object.errors))
                    throw TypeError(".inout.CreateUserRoleBadRequestV1.errors: array expected");
                message.errors = [];
                for (var i = 0; i < object.errors.length; ++i)
                    message.errors[i] = String(object.errors[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateUserRoleBadRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateUserRoleBadRequestV1
         * @static
         * @param {inout.CreateUserRoleBadRequestV1} message CreateUserRoleBadRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserRoleBadRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.userID = [];
                object.roleID = [];
                object.errors = [];
            }
            if (message.userID && message.userID.length) {
                object.userID = [];
                for (var j = 0; j < message.userID.length; ++j)
                    object.userID[j] = message.userID[j];
            }
            if (message.roleID && message.roleID.length) {
                object.roleID = [];
                for (var j = 0; j < message.roleID.length; ++j)
                    object.roleID[j] = message.roleID[j];
            }
            if (message.errors && message.errors.length) {
                object.errors = [];
                for (var j = 0; j < message.errors.length; ++j)
                    object.errors[j] = message.errors[j];
            }
            return object;
        };

        /**
         * Converts this CreateUserRoleBadRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateUserRoleBadRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserRoleBadRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateUserRoleBadRequestV1;
    })();

    inout.CreateUserRolesRequestV1 = (function() {

        /**
         * Properties of a CreateUserRolesRequestV1.
         * @memberof inout
         * @interface ICreateUserRolesRequestV1
         * @property {Array.<inout.ICreateUserRoleRequestV1>|null} [userRoles] CreateUserRolesRequestV1 userRoles
         */

        /**
         * Constructs a new CreateUserRolesRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateUserRolesRequestV1.
         * @implements ICreateUserRolesRequestV1
         * @constructor
         * @param {inout.ICreateUserRolesRequestV1=} [properties] Properties to set
         */
        function CreateUserRolesRequestV1(properties) {
            this.userRoles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserRolesRequestV1 userRoles.
         * @member {Array.<inout.ICreateUserRoleRequestV1>} userRoles
         * @memberof inout.CreateUserRolesRequestV1
         * @instance
         */
        CreateUserRolesRequestV1.prototype.userRoles = $util.emptyArray;

        /**
         * Creates a new CreateUserRolesRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateUserRolesRequestV1
         * @static
         * @param {inout.ICreateUserRolesRequestV1=} [properties] Properties to set
         * @returns {inout.CreateUserRolesRequestV1} CreateUserRolesRequestV1 instance
         */
        CreateUserRolesRequestV1.create = function create(properties) {
            return new CreateUserRolesRequestV1(properties);
        };

        /**
         * Encodes the specified CreateUserRolesRequestV1 message. Does not implicitly {@link inout.CreateUserRolesRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateUserRolesRequestV1
         * @static
         * @param {inout.ICreateUserRolesRequestV1} message CreateUserRolesRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRolesRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userRoles != null && message.userRoles.length)
                for (var i = 0; i < message.userRoles.length; ++i)
                    $root.inout.CreateUserRoleRequestV1.encode(message.userRoles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateUserRolesRequestV1 message, length delimited. Does not implicitly {@link inout.CreateUserRolesRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateUserRolesRequestV1
         * @static
         * @param {inout.ICreateUserRolesRequestV1} message CreateUserRolesRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRolesRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserRolesRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateUserRolesRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateUserRolesRequestV1} CreateUserRolesRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRolesRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateUserRolesRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userRoles && message.userRoles.length))
                        message.userRoles = [];
                    message.userRoles.push($root.inout.CreateUserRoleRequestV1.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateUserRolesRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateUserRolesRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateUserRolesRequestV1} CreateUserRolesRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRolesRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserRolesRequestV1 message.
         * @function verify
         * @memberof inout.CreateUserRolesRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserRolesRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userRoles != null && message.hasOwnProperty("userRoles")) {
                if (!Array.isArray(message.userRoles))
                    return "userRoles: array expected";
                for (var i = 0; i < message.userRoles.length; ++i) {
                    var error = $root.inout.CreateUserRoleRequestV1.verify(message.userRoles[i]);
                    if (error)
                        return "userRoles." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CreateUserRolesRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateUserRolesRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateUserRolesRequestV1} CreateUserRolesRequestV1
         */
        CreateUserRolesRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateUserRolesRequestV1)
                return object;
            var message = new $root.inout.CreateUserRolesRequestV1();
            if (object.userRoles) {
                if (!Array.isArray(object.userRoles))
                    throw TypeError(".inout.CreateUserRolesRequestV1.userRoles: array expected");
                message.userRoles = [];
                for (var i = 0; i < object.userRoles.length; ++i) {
                    if (typeof object.userRoles[i] !== "object")
                        throw TypeError(".inout.CreateUserRolesRequestV1.userRoles: object expected");
                    message.userRoles[i] = $root.inout.CreateUserRoleRequestV1.fromObject(object.userRoles[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateUserRolesRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateUserRolesRequestV1
         * @static
         * @param {inout.CreateUserRolesRequestV1} message CreateUserRolesRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserRolesRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userRoles = [];
            if (message.userRoles && message.userRoles.length) {
                object.userRoles = [];
                for (var j = 0; j < message.userRoles.length; ++j)
                    object.userRoles[j] = $root.inout.CreateUserRoleRequestV1.toObject(message.userRoles[j], options);
            }
            return object;
        };

        /**
         * Converts this CreateUserRolesRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateUserRolesRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserRolesRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateUserRolesRequestV1;
    })();

    inout.CreateUserRolesBadRequestV1 = (function() {

        /**
         * Properties of a CreateUserRolesBadRequestV1.
         * @memberof inout
         * @interface ICreateUserRolesBadRequestV1
         * @property {Array.<inout.ICreateUserRoleBadRequestV1>|null} [errors] CreateUserRolesBadRequestV1 errors
         */

        /**
         * Constructs a new CreateUserRolesBadRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateUserRolesBadRequestV1.
         * @implements ICreateUserRolesBadRequestV1
         * @constructor
         * @param {inout.ICreateUserRolesBadRequestV1=} [properties] Properties to set
         */
        function CreateUserRolesBadRequestV1(properties) {
            this.errors = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserRolesBadRequestV1 errors.
         * @member {Array.<inout.ICreateUserRoleBadRequestV1>} errors
         * @memberof inout.CreateUserRolesBadRequestV1
         * @instance
         */
        CreateUserRolesBadRequestV1.prototype.errors = $util.emptyArray;

        /**
         * Creates a new CreateUserRolesBadRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateUserRolesBadRequestV1
         * @static
         * @param {inout.ICreateUserRolesBadRequestV1=} [properties] Properties to set
         * @returns {inout.CreateUserRolesBadRequestV1} CreateUserRolesBadRequestV1 instance
         */
        CreateUserRolesBadRequestV1.create = function create(properties) {
            return new CreateUserRolesBadRequestV1(properties);
        };

        /**
         * Encodes the specified CreateUserRolesBadRequestV1 message. Does not implicitly {@link inout.CreateUserRolesBadRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateUserRolesBadRequestV1
         * @static
         * @param {inout.ICreateUserRolesBadRequestV1} message CreateUserRolesBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRolesBadRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errors != null && message.errors.length)
                for (var i = 0; i < message.errors.length; ++i)
                    $root.inout.CreateUserRoleBadRequestV1.encode(message.errors[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateUserRolesBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreateUserRolesBadRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateUserRolesBadRequestV1
         * @static
         * @param {inout.ICreateUserRolesBadRequestV1} message CreateUserRolesBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRolesBadRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserRolesBadRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateUserRolesBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateUserRolesBadRequestV1} CreateUserRolesBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRolesBadRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateUserRolesBadRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.errors && message.errors.length))
                        message.errors = [];
                    message.errors.push($root.inout.CreateUserRoleBadRequestV1.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateUserRolesBadRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateUserRolesBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateUserRolesBadRequestV1} CreateUserRolesBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRolesBadRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserRolesBadRequestV1 message.
         * @function verify
         * @memberof inout.CreateUserRolesBadRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserRolesBadRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errors != null && message.hasOwnProperty("errors")) {
                if (!Array.isArray(message.errors))
                    return "errors: array expected";
                for (var i = 0; i < message.errors.length; ++i) {
                    var error = $root.inout.CreateUserRoleBadRequestV1.verify(message.errors[i]);
                    if (error)
                        return "errors." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CreateUserRolesBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateUserRolesBadRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateUserRolesBadRequestV1} CreateUserRolesBadRequestV1
         */
        CreateUserRolesBadRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateUserRolesBadRequestV1)
                return object;
            var message = new $root.inout.CreateUserRolesBadRequestV1();
            if (object.errors) {
                if (!Array.isArray(object.errors))
                    throw TypeError(".inout.CreateUserRolesBadRequestV1.errors: array expected");
                message.errors = [];
                for (var i = 0; i < object.errors.length; ++i) {
                    if (typeof object.errors[i] !== "object")
                        throw TypeError(".inout.CreateUserRolesBadRequestV1.errors: object expected");
                    message.errors[i] = $root.inout.CreateUserRoleBadRequestV1.fromObject(object.errors[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateUserRolesBadRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateUserRolesBadRequestV1
         * @static
         * @param {inout.CreateUserRolesBadRequestV1} message CreateUserRolesBadRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserRolesBadRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.errors = [];
            if (message.errors && message.errors.length) {
                object.errors = [];
                for (var j = 0; j < message.errors.length; ++j)
                    object.errors[j] = $root.inout.CreateUserRoleBadRequestV1.toObject(message.errors[j], options);
            }
            return object;
        };

        /**
         * Converts this CreateUserRolesBadRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateUserRolesBadRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserRolesBadRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateUserRolesBadRequestV1;
    })();

    inout.GetUserRoleResponseV1 = (function() {

        /**
         * Properties of a GetUserRoleResponseV1.
         * @memberof inout
         * @interface IGetUserRoleResponseV1
         * @property {Uint8Array|null} [id] GetUserRoleResponseV1 id
         * @property {number|Long|null} [created] GetUserRoleResponseV1 created
         * @property {Uint8Array|null} [userID] GetUserRoleResponseV1 userID
         * @property {Uint8Array|null} [roleID] GetUserRoleResponseV1 roleID
         */

        /**
         * Constructs a new GetUserRoleResponseV1.
         * @memberof inout
         * @classdesc Represents a GetUserRoleResponseV1.
         * @implements IGetUserRoleResponseV1
         * @constructor
         * @param {inout.IGetUserRoleResponseV1=} [properties] Properties to set
         */
        function GetUserRoleResponseV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserRoleResponseV1 id.
         * @member {Uint8Array} id
         * @memberof inout.GetUserRoleResponseV1
         * @instance
         */
        GetUserRoleResponseV1.prototype.id = $util.newBuffer([]);

        /**
         * GetUserRoleResponseV1 created.
         * @member {number|Long} created
         * @memberof inout.GetUserRoleResponseV1
         * @instance
         */
        GetUserRoleResponseV1.prototype.created = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetUserRoleResponseV1 userID.
         * @member {Uint8Array} userID
         * @memberof inout.GetUserRoleResponseV1
         * @instance
         */
        GetUserRoleResponseV1.prototype.userID = $util.newBuffer([]);

        /**
         * GetUserRoleResponseV1 roleID.
         * @member {Uint8Array} roleID
         * @memberof inout.GetUserRoleResponseV1
         * @instance
         */
        GetUserRoleResponseV1.prototype.roleID = $util.newBuffer([]);

        /**
         * Creates a new GetUserRoleResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.GetUserRoleResponseV1
         * @static
         * @param {inout.IGetUserRoleResponseV1=} [properties] Properties to set
         * @returns {inout.GetUserRoleResponseV1} GetUserRoleResponseV1 instance
         */
        GetUserRoleResponseV1.create = function create(properties) {
            return new GetUserRoleResponseV1(properties);
        };

        /**
         * Encodes the specified GetUserRoleResponseV1 message. Does not implicitly {@link inout.GetUserRoleResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.GetUserRoleResponseV1
         * @static
         * @param {inout.IGetUserRoleResponseV1} message GetUserRoleResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserRoleResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.created != null && Object.hasOwnProperty.call(message, "created"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.created);
            if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.userID);
            if (message.roleID != null && Object.hasOwnProperty.call(message, "roleID"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.roleID);
            return writer;
        };

        /**
         * Encodes the specified GetUserRoleResponseV1 message, length delimited. Does not implicitly {@link inout.GetUserRoleResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.GetUserRoleResponseV1
         * @static
         * @param {inout.IGetUserRoleResponseV1} message GetUserRoleResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserRoleResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserRoleResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.GetUserRoleResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.GetUserRoleResponseV1} GetUserRoleResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserRoleResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.GetUserRoleResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.created = reader.int64();
                    break;
                case 3:
                    message.userID = reader.bytes();
                    break;
                case 4:
                    message.roleID = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserRoleResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.GetUserRoleResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.GetUserRoleResponseV1} GetUserRoleResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserRoleResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserRoleResponseV1 message.
         * @function verify
         * @memberof inout.GetUserRoleResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserRoleResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.created != null && message.hasOwnProperty("created"))
                if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                    return "created: integer|Long expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!(message.userID && typeof message.userID.length === "number" || $util.isString(message.userID)))
                    return "userID: buffer expected";
            if (message.roleID != null && message.hasOwnProperty("roleID"))
                if (!(message.roleID && typeof message.roleID.length === "number" || $util.isString(message.roleID)))
                    return "roleID: buffer expected";
            return null;
        };

        /**
         * Creates a GetUserRoleResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.GetUserRoleResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.GetUserRoleResponseV1} GetUserRoleResponseV1
         */
        GetUserRoleResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.GetUserRoleResponseV1)
                return object;
            var message = new $root.inout.GetUserRoleResponseV1();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.created != null)
                if ($util.Long)
                    (message.created = $util.Long.fromValue(object.created)).unsigned = false;
                else if (typeof object.created === "string")
                    message.created = parseInt(object.created, 10);
                else if (typeof object.created === "number")
                    message.created = object.created;
                else if (typeof object.created === "object")
                    message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber();
            if (object.userID != null)
                if (typeof object.userID === "string")
                    $util.base64.decode(object.userID, message.userID = $util.newBuffer($util.base64.length(object.userID)), 0);
                else if (object.userID.length)
                    message.userID = object.userID;
            if (object.roleID != null)
                if (typeof object.roleID === "string")
                    $util.base64.decode(object.roleID, message.roleID = $util.newBuffer($util.base64.length(object.roleID)), 0);
                else if (object.roleID.length)
                    message.roleID = object.roleID;
            return message;
        };

        /**
         * Creates a plain object from a GetUserRoleResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.GetUserRoleResponseV1
         * @static
         * @param {inout.GetUserRoleResponseV1} message GetUserRoleResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserRoleResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.created = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.userID = "";
                else {
                    object.userID = [];
                    if (options.bytes !== Array)
                        object.userID = $util.newBuffer(object.userID);
                }
                if (options.bytes === String)
                    object.roleID = "";
                else {
                    object.roleID = [];
                    if (options.bytes !== Array)
                        object.roleID = $util.newBuffer(object.roleID);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.created != null && message.hasOwnProperty("created"))
                if (typeof message.created === "number")
                    object.created = options.longs === String ? String(message.created) : message.created;
                else
                    object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber() : message.created;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = options.bytes === String ? $util.base64.encode(message.userID, 0, message.userID.length) : options.bytes === Array ? Array.prototype.slice.call(message.userID) : message.userID;
            if (message.roleID != null && message.hasOwnProperty("roleID"))
                object.roleID = options.bytes === String ? $util.base64.encode(message.roleID, 0, message.roleID.length) : options.bytes === Array ? Array.prototype.slice.call(message.roleID) : message.roleID;
            return object;
        };

        /**
         * Converts this GetUserRoleResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.GetUserRoleResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserRoleResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserRoleResponseV1;
    })();

    inout.ListUserRolesResponseV1 = (function() {

        /**
         * Properties of a ListUserRolesResponseV1.
         * @memberof inout
         * @interface IListUserRolesResponseV1
         * @property {Array.<inout.IGetUserRoleResponseV1>|null} [data] ListUserRolesResponseV1 data
         */

        /**
         * Constructs a new ListUserRolesResponseV1.
         * @memberof inout
         * @classdesc Represents a ListUserRolesResponseV1.
         * @implements IListUserRolesResponseV1
         * @constructor
         * @param {inout.IListUserRolesResponseV1=} [properties] Properties to set
         */
        function ListUserRolesResponseV1(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListUserRolesResponseV1 data.
         * @member {Array.<inout.IGetUserRoleResponseV1>} data
         * @memberof inout.ListUserRolesResponseV1
         * @instance
         */
        ListUserRolesResponseV1.prototype.data = $util.emptyArray;

        /**
         * Creates a new ListUserRolesResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.ListUserRolesResponseV1
         * @static
         * @param {inout.IListUserRolesResponseV1=} [properties] Properties to set
         * @returns {inout.ListUserRolesResponseV1} ListUserRolesResponseV1 instance
         */
        ListUserRolesResponseV1.create = function create(properties) {
            return new ListUserRolesResponseV1(properties);
        };

        /**
         * Encodes the specified ListUserRolesResponseV1 message. Does not implicitly {@link inout.ListUserRolesResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.ListUserRolesResponseV1
         * @static
         * @param {inout.IListUserRolesResponseV1} message ListUserRolesResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListUserRolesResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.inout.GetUserRoleResponseV1.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListUserRolesResponseV1 message, length delimited. Does not implicitly {@link inout.ListUserRolesResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.ListUserRolesResponseV1
         * @static
         * @param {inout.IListUserRolesResponseV1} message ListUserRolesResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListUserRolesResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListUserRolesResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.ListUserRolesResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.ListUserRolesResponseV1} ListUserRolesResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListUserRolesResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.ListUserRolesResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.inout.GetUserRoleResponseV1.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListUserRolesResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.ListUserRolesResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.ListUserRolesResponseV1} ListUserRolesResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListUserRolesResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListUserRolesResponseV1 message.
         * @function verify
         * @memberof inout.ListUserRolesResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListUserRolesResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.inout.GetUserRoleResponseV1.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListUserRolesResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.ListUserRolesResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.ListUserRolesResponseV1} ListUserRolesResponseV1
         */
        ListUserRolesResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.ListUserRolesResponseV1)
                return object;
            var message = new $root.inout.ListUserRolesResponseV1();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".inout.ListUserRolesResponseV1.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".inout.ListUserRolesResponseV1.data: object expected");
                    message.data[i] = $root.inout.GetUserRoleResponseV1.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListUserRolesResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.ListUserRolesResponseV1
         * @static
         * @param {inout.ListUserRolesResponseV1} message ListUserRolesResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListUserRolesResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.inout.GetUserRoleResponseV1.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this ListUserRolesResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.ListUserRolesResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListUserRolesResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListUserRolesResponseV1;
    })();

    inout.CreateEmailRequestV1 = (function() {

        /**
         * Properties of a CreateEmailRequestV1.
         * @memberof inout
         * @interface ICreateEmailRequestV1
         * @property {string|null} [email] CreateEmailRequestV1 email
         * @property {string|null} [code] CreateEmailRequestV1 code
         * @property {Uint8Array|null} [userID] CreateEmailRequestV1 userID
         */

        /**
         * Constructs a new CreateEmailRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateEmailRequestV1.
         * @implements ICreateEmailRequestV1
         * @constructor
         * @param {inout.ICreateEmailRequestV1=} [properties] Properties to set
         */
        function CreateEmailRequestV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateEmailRequestV1 email.
         * @member {string} email
         * @memberof inout.CreateEmailRequestV1
         * @instance
         */
        CreateEmailRequestV1.prototype.email = "";

        /**
         * CreateEmailRequestV1 code.
         * @member {string} code
         * @memberof inout.CreateEmailRequestV1
         * @instance
         */
        CreateEmailRequestV1.prototype.code = "";

        /**
         * CreateEmailRequestV1 userID.
         * @member {Uint8Array} userID
         * @memberof inout.CreateEmailRequestV1
         * @instance
         */
        CreateEmailRequestV1.prototype.userID = $util.newBuffer([]);

        /**
         * Creates a new CreateEmailRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateEmailRequestV1
         * @static
         * @param {inout.ICreateEmailRequestV1=} [properties] Properties to set
         * @returns {inout.CreateEmailRequestV1} CreateEmailRequestV1 instance
         */
        CreateEmailRequestV1.create = function create(properties) {
            return new CreateEmailRequestV1(properties);
        };

        /**
         * Encodes the specified CreateEmailRequestV1 message. Does not implicitly {@link inout.CreateEmailRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateEmailRequestV1
         * @static
         * @param {inout.ICreateEmailRequestV1} message CreateEmailRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEmailRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.userID);
            return writer;
        };

        /**
         * Encodes the specified CreateEmailRequestV1 message, length delimited. Does not implicitly {@link inout.CreateEmailRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateEmailRequestV1
         * @static
         * @param {inout.ICreateEmailRequestV1} message CreateEmailRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEmailRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateEmailRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateEmailRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateEmailRequestV1} CreateEmailRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEmailRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateEmailRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.email = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.userID = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateEmailRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateEmailRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateEmailRequestV1} CreateEmailRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEmailRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateEmailRequestV1 message.
         * @function verify
         * @memberof inout.CreateEmailRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateEmailRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!(message.userID && typeof message.userID.length === "number" || $util.isString(message.userID)))
                    return "userID: buffer expected";
            return null;
        };

        /**
         * Creates a CreateEmailRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateEmailRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateEmailRequestV1} CreateEmailRequestV1
         */
        CreateEmailRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateEmailRequestV1)
                return object;
            var message = new $root.inout.CreateEmailRequestV1();
            if (object.email != null)
                message.email = String(object.email);
            if (object.code != null)
                message.code = String(object.code);
            if (object.userID != null)
                if (typeof object.userID === "string")
                    $util.base64.decode(object.userID, message.userID = $util.newBuffer($util.base64.length(object.userID)), 0);
                else if (object.userID.length)
                    message.userID = object.userID;
            return message;
        };

        /**
         * Creates a plain object from a CreateEmailRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateEmailRequestV1
         * @static
         * @param {inout.CreateEmailRequestV1} message CreateEmailRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateEmailRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.email = "";
                object.code = "";
                if (options.bytes === String)
                    object.userID = "";
                else {
                    object.userID = [];
                    if (options.bytes !== Array)
                        object.userID = $util.newBuffer(object.userID);
                }
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = options.bytes === String ? $util.base64.encode(message.userID, 0, message.userID.length) : options.bytes === Array ? Array.prototype.slice.call(message.userID) : message.userID;
            return object;
        };

        /**
         * Converts this CreateEmailRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateEmailRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateEmailRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateEmailRequestV1;
    })();

    inout.CreateEmailBadRequestV1 = (function() {

        /**
         * Properties of a CreateEmailBadRequestV1.
         * @memberof inout
         * @interface ICreateEmailBadRequestV1
         * @property {Array.<string>|null} [email] CreateEmailBadRequestV1 email
         * @property {Array.<string>|null} [code] CreateEmailBadRequestV1 code
         * @property {Array.<string>|null} [userId] CreateEmailBadRequestV1 userId
         */

        /**
         * Constructs a new CreateEmailBadRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateEmailBadRequestV1.
         * @implements ICreateEmailBadRequestV1
         * @constructor
         * @param {inout.ICreateEmailBadRequestV1=} [properties] Properties to set
         */
        function CreateEmailBadRequestV1(properties) {
            this.email = [];
            this.code = [];
            this.userId = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateEmailBadRequestV1 email.
         * @member {Array.<string>} email
         * @memberof inout.CreateEmailBadRequestV1
         * @instance
         */
        CreateEmailBadRequestV1.prototype.email = $util.emptyArray;

        /**
         * CreateEmailBadRequestV1 code.
         * @member {Array.<string>} code
         * @memberof inout.CreateEmailBadRequestV1
         * @instance
         */
        CreateEmailBadRequestV1.prototype.code = $util.emptyArray;

        /**
         * CreateEmailBadRequestV1 userId.
         * @member {Array.<string>} userId
         * @memberof inout.CreateEmailBadRequestV1
         * @instance
         */
        CreateEmailBadRequestV1.prototype.userId = $util.emptyArray;

        /**
         * Creates a new CreateEmailBadRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateEmailBadRequestV1
         * @static
         * @param {inout.ICreateEmailBadRequestV1=} [properties] Properties to set
         * @returns {inout.CreateEmailBadRequestV1} CreateEmailBadRequestV1 instance
         */
        CreateEmailBadRequestV1.create = function create(properties) {
            return new CreateEmailBadRequestV1(properties);
        };

        /**
         * Encodes the specified CreateEmailBadRequestV1 message. Does not implicitly {@link inout.CreateEmailBadRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateEmailBadRequestV1
         * @static
         * @param {inout.ICreateEmailBadRequestV1} message CreateEmailBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEmailBadRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && message.email.length)
                for (var i = 0; i < message.email.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.email[i]);
            if (message.code != null && message.code.length)
                for (var i = 0; i < message.code.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.code[i]);
            if (message.userId != null && message.userId.length)
                for (var i = 0; i < message.userId.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateEmailBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreateEmailBadRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateEmailBadRequestV1
         * @static
         * @param {inout.ICreateEmailBadRequestV1} message CreateEmailBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEmailBadRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateEmailBadRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateEmailBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateEmailBadRequestV1} CreateEmailBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEmailBadRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateEmailBadRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.email && message.email.length))
                        message.email = [];
                    message.email.push(reader.string());
                    break;
                case 2:
                    if (!(message.code && message.code.length))
                        message.code = [];
                    message.code.push(reader.string());
                    break;
                case 3:
                    if (!(message.userId && message.userId.length))
                        message.userId = [];
                    message.userId.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateEmailBadRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateEmailBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateEmailBadRequestV1} CreateEmailBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEmailBadRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateEmailBadRequestV1 message.
         * @function verify
         * @memberof inout.CreateEmailBadRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateEmailBadRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email")) {
                if (!Array.isArray(message.email))
                    return "email: array expected";
                for (var i = 0; i < message.email.length; ++i)
                    if (!$util.isString(message.email[i]))
                        return "email: string[] expected";
            }
            if (message.code != null && message.hasOwnProperty("code")) {
                if (!Array.isArray(message.code))
                    return "code: array expected";
                for (var i = 0; i < message.code.length; ++i)
                    if (!$util.isString(message.code[i]))
                        return "code: string[] expected";
            }
            if (message.userId != null && message.hasOwnProperty("userId")) {
                if (!Array.isArray(message.userId))
                    return "userId: array expected";
                for (var i = 0; i < message.userId.length; ++i)
                    if (!$util.isString(message.userId[i]))
                        return "userId: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CreateEmailBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateEmailBadRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateEmailBadRequestV1} CreateEmailBadRequestV1
         */
        CreateEmailBadRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateEmailBadRequestV1)
                return object;
            var message = new $root.inout.CreateEmailBadRequestV1();
            if (object.email) {
                if (!Array.isArray(object.email))
                    throw TypeError(".inout.CreateEmailBadRequestV1.email: array expected");
                message.email = [];
                for (var i = 0; i < object.email.length; ++i)
                    message.email[i] = String(object.email[i]);
            }
            if (object.code) {
                if (!Array.isArray(object.code))
                    throw TypeError(".inout.CreateEmailBadRequestV1.code: array expected");
                message.code = [];
                for (var i = 0; i < object.code.length; ++i)
                    message.code[i] = String(object.code[i]);
            }
            if (object.userId) {
                if (!Array.isArray(object.userId))
                    throw TypeError(".inout.CreateEmailBadRequestV1.userId: array expected");
                message.userId = [];
                for (var i = 0; i < object.userId.length; ++i)
                    message.userId[i] = String(object.userId[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateEmailBadRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateEmailBadRequestV1
         * @static
         * @param {inout.CreateEmailBadRequestV1} message CreateEmailBadRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateEmailBadRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.email = [];
                object.code = [];
                object.userId = [];
            }
            if (message.email && message.email.length) {
                object.email = [];
                for (var j = 0; j < message.email.length; ++j)
                    object.email[j] = message.email[j];
            }
            if (message.code && message.code.length) {
                object.code = [];
                for (var j = 0; j < message.code.length; ++j)
                    object.code[j] = message.code[j];
            }
            if (message.userId && message.userId.length) {
                object.userId = [];
                for (var j = 0; j < message.userId.length; ++j)
                    object.userId[j] = message.userId[j];
            }
            return object;
        };

        /**
         * Converts this CreateEmailBadRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateEmailBadRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateEmailBadRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateEmailBadRequestV1;
    })();

    inout.CreateEmailResponseV1 = (function() {

        /**
         * Properties of a CreateEmailResponseV1.
         * @memberof inout
         * @interface ICreateEmailResponseV1
         * @property {Uint8Array|null} [id] CreateEmailResponseV1 id
         * @property {number|Long|null} [created] CreateEmailResponseV1 created
         * @property {Uint8Array|null} [userID] CreateEmailResponseV1 userID
         * @property {string|null} [email] CreateEmailResponseV1 email
         */

        /**
         * Constructs a new CreateEmailResponseV1.
         * @memberof inout
         * @classdesc Represents a CreateEmailResponseV1.
         * @implements ICreateEmailResponseV1
         * @constructor
         * @param {inout.ICreateEmailResponseV1=} [properties] Properties to set
         */
        function CreateEmailResponseV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateEmailResponseV1 id.
         * @member {Uint8Array} id
         * @memberof inout.CreateEmailResponseV1
         * @instance
         */
        CreateEmailResponseV1.prototype.id = $util.newBuffer([]);

        /**
         * CreateEmailResponseV1 created.
         * @member {number|Long} created
         * @memberof inout.CreateEmailResponseV1
         * @instance
         */
        CreateEmailResponseV1.prototype.created = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateEmailResponseV1 userID.
         * @member {Uint8Array} userID
         * @memberof inout.CreateEmailResponseV1
         * @instance
         */
        CreateEmailResponseV1.prototype.userID = $util.newBuffer([]);

        /**
         * CreateEmailResponseV1 email.
         * @member {string} email
         * @memberof inout.CreateEmailResponseV1
         * @instance
         */
        CreateEmailResponseV1.prototype.email = "";

        /**
         * Creates a new CreateEmailResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateEmailResponseV1
         * @static
         * @param {inout.ICreateEmailResponseV1=} [properties] Properties to set
         * @returns {inout.CreateEmailResponseV1} CreateEmailResponseV1 instance
         */
        CreateEmailResponseV1.create = function create(properties) {
            return new CreateEmailResponseV1(properties);
        };

        /**
         * Encodes the specified CreateEmailResponseV1 message. Does not implicitly {@link inout.CreateEmailResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateEmailResponseV1
         * @static
         * @param {inout.ICreateEmailResponseV1} message CreateEmailResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEmailResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.created != null && Object.hasOwnProperty.call(message, "created"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.created);
            if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.userID);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified CreateEmailResponseV1 message, length delimited. Does not implicitly {@link inout.CreateEmailResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateEmailResponseV1
         * @static
         * @param {inout.ICreateEmailResponseV1} message CreateEmailResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEmailResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateEmailResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateEmailResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateEmailResponseV1} CreateEmailResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEmailResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateEmailResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.created = reader.int64();
                    break;
                case 3:
                    message.userID = reader.bytes();
                    break;
                case 4:
                    message.email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateEmailResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateEmailResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateEmailResponseV1} CreateEmailResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEmailResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateEmailResponseV1 message.
         * @function verify
         * @memberof inout.CreateEmailResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateEmailResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.created != null && message.hasOwnProperty("created"))
                if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                    return "created: integer|Long expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!(message.userID && typeof message.userID.length === "number" || $util.isString(message.userID)))
                    return "userID: buffer expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a CreateEmailResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateEmailResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateEmailResponseV1} CreateEmailResponseV1
         */
        CreateEmailResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateEmailResponseV1)
                return object;
            var message = new $root.inout.CreateEmailResponseV1();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.created != null)
                if ($util.Long)
                    (message.created = $util.Long.fromValue(object.created)).unsigned = false;
                else if (typeof object.created === "string")
                    message.created = parseInt(object.created, 10);
                else if (typeof object.created === "number")
                    message.created = object.created;
                else if (typeof object.created === "object")
                    message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber();
            if (object.userID != null)
                if (typeof object.userID === "string")
                    $util.base64.decode(object.userID, message.userID = $util.newBuffer($util.base64.length(object.userID)), 0);
                else if (object.userID.length)
                    message.userID = object.userID;
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a CreateEmailResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateEmailResponseV1
         * @static
         * @param {inout.CreateEmailResponseV1} message CreateEmailResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateEmailResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.created = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.userID = "";
                else {
                    object.userID = [];
                    if (options.bytes !== Array)
                        object.userID = $util.newBuffer(object.userID);
                }
                object.email = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.created != null && message.hasOwnProperty("created"))
                if (typeof message.created === "number")
                    object.created = options.longs === String ? String(message.created) : message.created;
                else
                    object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber() : message.created;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = options.bytes === String ? $util.base64.encode(message.userID, 0, message.userID.length) : options.bytes === Array ? Array.prototype.slice.call(message.userID) : message.userID;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this CreateEmailResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateEmailResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateEmailResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateEmailResponseV1;
    })();

    inout.CreateEmailConfirmationRequestV1 = (function() {

        /**
         * Properties of a CreateEmailConfirmationRequestV1.
         * @memberof inout
         * @interface ICreateEmailConfirmationRequestV1
         * @property {string|null} [email] CreateEmailConfirmationRequestV1 email
         */

        /**
         * Constructs a new CreateEmailConfirmationRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateEmailConfirmationRequestV1.
         * @implements ICreateEmailConfirmationRequestV1
         * @constructor
         * @param {inout.ICreateEmailConfirmationRequestV1=} [properties] Properties to set
         */
        function CreateEmailConfirmationRequestV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateEmailConfirmationRequestV1 email.
         * @member {string} email
         * @memberof inout.CreateEmailConfirmationRequestV1
         * @instance
         */
        CreateEmailConfirmationRequestV1.prototype.email = "";

        /**
         * Creates a new CreateEmailConfirmationRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateEmailConfirmationRequestV1
         * @static
         * @param {inout.ICreateEmailConfirmationRequestV1=} [properties] Properties to set
         * @returns {inout.CreateEmailConfirmationRequestV1} CreateEmailConfirmationRequestV1 instance
         */
        CreateEmailConfirmationRequestV1.create = function create(properties) {
            return new CreateEmailConfirmationRequestV1(properties);
        };

        /**
         * Encodes the specified CreateEmailConfirmationRequestV1 message. Does not implicitly {@link inout.CreateEmailConfirmationRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateEmailConfirmationRequestV1
         * @static
         * @param {inout.ICreateEmailConfirmationRequestV1} message CreateEmailConfirmationRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEmailConfirmationRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified CreateEmailConfirmationRequestV1 message, length delimited. Does not implicitly {@link inout.CreateEmailConfirmationRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateEmailConfirmationRequestV1
         * @static
         * @param {inout.ICreateEmailConfirmationRequestV1} message CreateEmailConfirmationRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEmailConfirmationRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateEmailConfirmationRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateEmailConfirmationRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateEmailConfirmationRequestV1} CreateEmailConfirmationRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEmailConfirmationRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateEmailConfirmationRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateEmailConfirmationRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateEmailConfirmationRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateEmailConfirmationRequestV1} CreateEmailConfirmationRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEmailConfirmationRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateEmailConfirmationRequestV1 message.
         * @function verify
         * @memberof inout.CreateEmailConfirmationRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateEmailConfirmationRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a CreateEmailConfirmationRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateEmailConfirmationRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateEmailConfirmationRequestV1} CreateEmailConfirmationRequestV1
         */
        CreateEmailConfirmationRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateEmailConfirmationRequestV1)
                return object;
            var message = new $root.inout.CreateEmailConfirmationRequestV1();
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a CreateEmailConfirmationRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateEmailConfirmationRequestV1
         * @static
         * @param {inout.CreateEmailConfirmationRequestV1} message CreateEmailConfirmationRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateEmailConfirmationRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.email = "";
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this CreateEmailConfirmationRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateEmailConfirmationRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateEmailConfirmationRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateEmailConfirmationRequestV1;
    })();

    inout.CreateEmailConfirmationBadRequestV1 = (function() {

        /**
         * Properties of a CreateEmailConfirmationBadRequestV1.
         * @memberof inout
         * @interface ICreateEmailConfirmationBadRequestV1
         * @property {Array.<string>|null} [email] CreateEmailConfirmationBadRequestV1 email
         */

        /**
         * Constructs a new CreateEmailConfirmationBadRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateEmailConfirmationBadRequestV1.
         * @implements ICreateEmailConfirmationBadRequestV1
         * @constructor
         * @param {inout.ICreateEmailConfirmationBadRequestV1=} [properties] Properties to set
         */
        function CreateEmailConfirmationBadRequestV1(properties) {
            this.email = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateEmailConfirmationBadRequestV1 email.
         * @member {Array.<string>} email
         * @memberof inout.CreateEmailConfirmationBadRequestV1
         * @instance
         */
        CreateEmailConfirmationBadRequestV1.prototype.email = $util.emptyArray;

        /**
         * Creates a new CreateEmailConfirmationBadRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateEmailConfirmationBadRequestV1
         * @static
         * @param {inout.ICreateEmailConfirmationBadRequestV1=} [properties] Properties to set
         * @returns {inout.CreateEmailConfirmationBadRequestV1} CreateEmailConfirmationBadRequestV1 instance
         */
        CreateEmailConfirmationBadRequestV1.create = function create(properties) {
            return new CreateEmailConfirmationBadRequestV1(properties);
        };

        /**
         * Encodes the specified CreateEmailConfirmationBadRequestV1 message. Does not implicitly {@link inout.CreateEmailConfirmationBadRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateEmailConfirmationBadRequestV1
         * @static
         * @param {inout.ICreateEmailConfirmationBadRequestV1} message CreateEmailConfirmationBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEmailConfirmationBadRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && message.email.length)
                for (var i = 0; i < message.email.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.email[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateEmailConfirmationBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreateEmailConfirmationBadRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateEmailConfirmationBadRequestV1
         * @static
         * @param {inout.ICreateEmailConfirmationBadRequestV1} message CreateEmailConfirmationBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEmailConfirmationBadRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateEmailConfirmationBadRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateEmailConfirmationBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateEmailConfirmationBadRequestV1} CreateEmailConfirmationBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEmailConfirmationBadRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateEmailConfirmationBadRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.email && message.email.length))
                        message.email = [];
                    message.email.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateEmailConfirmationBadRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateEmailConfirmationBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateEmailConfirmationBadRequestV1} CreateEmailConfirmationBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEmailConfirmationBadRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateEmailConfirmationBadRequestV1 message.
         * @function verify
         * @memberof inout.CreateEmailConfirmationBadRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateEmailConfirmationBadRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email")) {
                if (!Array.isArray(message.email))
                    return "email: array expected";
                for (var i = 0; i < message.email.length; ++i)
                    if (!$util.isString(message.email[i]))
                        return "email: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CreateEmailConfirmationBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateEmailConfirmationBadRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateEmailConfirmationBadRequestV1} CreateEmailConfirmationBadRequestV1
         */
        CreateEmailConfirmationBadRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateEmailConfirmationBadRequestV1)
                return object;
            var message = new $root.inout.CreateEmailConfirmationBadRequestV1();
            if (object.email) {
                if (!Array.isArray(object.email))
                    throw TypeError(".inout.CreateEmailConfirmationBadRequestV1.email: array expected");
                message.email = [];
                for (var i = 0; i < object.email.length; ++i)
                    message.email[i] = String(object.email[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateEmailConfirmationBadRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateEmailConfirmationBadRequestV1
         * @static
         * @param {inout.CreateEmailConfirmationBadRequestV1} message CreateEmailConfirmationBadRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateEmailConfirmationBadRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.email = [];
            if (message.email && message.email.length) {
                object.email = [];
                for (var j = 0; j < message.email.length; ++j)
                    object.email[j] = message.email[j];
            }
            return object;
        };

        /**
         * Converts this CreateEmailConfirmationBadRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateEmailConfirmationBadRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateEmailConfirmationBadRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateEmailConfirmationBadRequestV1;
    })();

    inout.CreateEmailConfirmationResponseV1 = (function() {

        /**
         * Properties of a CreateEmailConfirmationResponseV1.
         * @memberof inout
         * @interface ICreateEmailConfirmationResponseV1
         * @property {number|Long|null} [created] CreateEmailConfirmationResponseV1 created
         * @property {number|Long|null} [expire] CreateEmailConfirmationResponseV1 expire
         * @property {string|null} [email] CreateEmailConfirmationResponseV1 email
         */

        /**
         * Constructs a new CreateEmailConfirmationResponseV1.
         * @memberof inout
         * @classdesc Represents a CreateEmailConfirmationResponseV1.
         * @implements ICreateEmailConfirmationResponseV1
         * @constructor
         * @param {inout.ICreateEmailConfirmationResponseV1=} [properties] Properties to set
         */
        function CreateEmailConfirmationResponseV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateEmailConfirmationResponseV1 created.
         * @member {number|Long} created
         * @memberof inout.CreateEmailConfirmationResponseV1
         * @instance
         */
        CreateEmailConfirmationResponseV1.prototype.created = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateEmailConfirmationResponseV1 expire.
         * @member {number|Long} expire
         * @memberof inout.CreateEmailConfirmationResponseV1
         * @instance
         */
        CreateEmailConfirmationResponseV1.prototype.expire = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateEmailConfirmationResponseV1 email.
         * @member {string} email
         * @memberof inout.CreateEmailConfirmationResponseV1
         * @instance
         */
        CreateEmailConfirmationResponseV1.prototype.email = "";

        /**
         * Creates a new CreateEmailConfirmationResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateEmailConfirmationResponseV1
         * @static
         * @param {inout.ICreateEmailConfirmationResponseV1=} [properties] Properties to set
         * @returns {inout.CreateEmailConfirmationResponseV1} CreateEmailConfirmationResponseV1 instance
         */
        CreateEmailConfirmationResponseV1.create = function create(properties) {
            return new CreateEmailConfirmationResponseV1(properties);
        };

        /**
         * Encodes the specified CreateEmailConfirmationResponseV1 message. Does not implicitly {@link inout.CreateEmailConfirmationResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateEmailConfirmationResponseV1
         * @static
         * @param {inout.ICreateEmailConfirmationResponseV1} message CreateEmailConfirmationResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEmailConfirmationResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.created != null && Object.hasOwnProperty.call(message, "created"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.created);
            if (message.expire != null && Object.hasOwnProperty.call(message, "expire"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.expire);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified CreateEmailConfirmationResponseV1 message, length delimited. Does not implicitly {@link inout.CreateEmailConfirmationResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateEmailConfirmationResponseV1
         * @static
         * @param {inout.ICreateEmailConfirmationResponseV1} message CreateEmailConfirmationResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEmailConfirmationResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateEmailConfirmationResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateEmailConfirmationResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateEmailConfirmationResponseV1} CreateEmailConfirmationResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEmailConfirmationResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateEmailConfirmationResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.created = reader.int64();
                    break;
                case 2:
                    message.expire = reader.int64();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateEmailConfirmationResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateEmailConfirmationResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateEmailConfirmationResponseV1} CreateEmailConfirmationResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEmailConfirmationResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateEmailConfirmationResponseV1 message.
         * @function verify
         * @memberof inout.CreateEmailConfirmationResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateEmailConfirmationResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.created != null && message.hasOwnProperty("created"))
                if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                    return "created: integer|Long expected";
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (!$util.isInteger(message.expire) && !(message.expire && $util.isInteger(message.expire.low) && $util.isInteger(message.expire.high)))
                    return "expire: integer|Long expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a CreateEmailConfirmationResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateEmailConfirmationResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateEmailConfirmationResponseV1} CreateEmailConfirmationResponseV1
         */
        CreateEmailConfirmationResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateEmailConfirmationResponseV1)
                return object;
            var message = new $root.inout.CreateEmailConfirmationResponseV1();
            if (object.created != null)
                if ($util.Long)
                    (message.created = $util.Long.fromValue(object.created)).unsigned = false;
                else if (typeof object.created === "string")
                    message.created = parseInt(object.created, 10);
                else if (typeof object.created === "number")
                    message.created = object.created;
                else if (typeof object.created === "object")
                    message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber();
            if (object.expire != null)
                if ($util.Long)
                    (message.expire = $util.Long.fromValue(object.expire)).unsigned = false;
                else if (typeof object.expire === "string")
                    message.expire = parseInt(object.expire, 10);
                else if (typeof object.expire === "number")
                    message.expire = object.expire;
                else if (typeof object.expire === "object")
                    message.expire = new $util.LongBits(object.expire.low >>> 0, object.expire.high >>> 0).toNumber();
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a CreateEmailConfirmationResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateEmailConfirmationResponseV1
         * @static
         * @param {inout.CreateEmailConfirmationResponseV1} message CreateEmailConfirmationResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateEmailConfirmationResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.created = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.expire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expire = options.longs === String ? "0" : 0;
                object.email = "";
            }
            if (message.created != null && message.hasOwnProperty("created"))
                if (typeof message.created === "number")
                    object.created = options.longs === String ? String(message.created) : message.created;
                else
                    object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber() : message.created;
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (typeof message.expire === "number")
                    object.expire = options.longs === String ? String(message.expire) : message.expire;
                else
                    object.expire = options.longs === String ? $util.Long.prototype.toString.call(message.expire) : options.longs === Number ? new $util.LongBits(message.expire.low >>> 0, message.expire.high >>> 0).toNumber() : message.expire;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this CreateEmailConfirmationResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateEmailConfirmationResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateEmailConfirmationResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateEmailConfirmationResponseV1;
    })();

    inout.CreatePhoneRequestV1 = (function() {

        /**
         * Properties of a CreatePhoneRequestV1.
         * @memberof inout
         * @interface ICreatePhoneRequestV1
         * @property {string|null} [phone] CreatePhoneRequestV1 phone
         * @property {string|null} [code] CreatePhoneRequestV1 code
         * @property {Uint8Array|null} [userID] CreatePhoneRequestV1 userID
         */

        /**
         * Constructs a new CreatePhoneRequestV1.
         * @memberof inout
         * @classdesc Represents a CreatePhoneRequestV1.
         * @implements ICreatePhoneRequestV1
         * @constructor
         * @param {inout.ICreatePhoneRequestV1=} [properties] Properties to set
         */
        function CreatePhoneRequestV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePhoneRequestV1 phone.
         * @member {string} phone
         * @memberof inout.CreatePhoneRequestV1
         * @instance
         */
        CreatePhoneRequestV1.prototype.phone = "";

        /**
         * CreatePhoneRequestV1 code.
         * @member {string} code
         * @memberof inout.CreatePhoneRequestV1
         * @instance
         */
        CreatePhoneRequestV1.prototype.code = "";

        /**
         * CreatePhoneRequestV1 userID.
         * @member {Uint8Array} userID
         * @memberof inout.CreatePhoneRequestV1
         * @instance
         */
        CreatePhoneRequestV1.prototype.userID = $util.newBuffer([]);

        /**
         * Creates a new CreatePhoneRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreatePhoneRequestV1
         * @static
         * @param {inout.ICreatePhoneRequestV1=} [properties] Properties to set
         * @returns {inout.CreatePhoneRequestV1} CreatePhoneRequestV1 instance
         */
        CreatePhoneRequestV1.create = function create(properties) {
            return new CreatePhoneRequestV1(properties);
        };

        /**
         * Encodes the specified CreatePhoneRequestV1 message. Does not implicitly {@link inout.CreatePhoneRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreatePhoneRequestV1
         * @static
         * @param {inout.ICreatePhoneRequestV1} message CreatePhoneRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePhoneRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.phone);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.userID);
            return writer;
        };

        /**
         * Encodes the specified CreatePhoneRequestV1 message, length delimited. Does not implicitly {@link inout.CreatePhoneRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreatePhoneRequestV1
         * @static
         * @param {inout.ICreatePhoneRequestV1} message CreatePhoneRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePhoneRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePhoneRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreatePhoneRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreatePhoneRequestV1} CreatePhoneRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePhoneRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreatePhoneRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.phone = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.userID = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePhoneRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreatePhoneRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreatePhoneRequestV1} CreatePhoneRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePhoneRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePhoneRequestV1 message.
         * @function verify
         * @memberof inout.CreatePhoneRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePhoneRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!(message.userID && typeof message.userID.length === "number" || $util.isString(message.userID)))
                    return "userID: buffer expected";
            return null;
        };

        /**
         * Creates a CreatePhoneRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreatePhoneRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreatePhoneRequestV1} CreatePhoneRequestV1
         */
        CreatePhoneRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreatePhoneRequestV1)
                return object;
            var message = new $root.inout.CreatePhoneRequestV1();
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.code != null)
                message.code = String(object.code);
            if (object.userID != null)
                if (typeof object.userID === "string")
                    $util.base64.decode(object.userID, message.userID = $util.newBuffer($util.base64.length(object.userID)), 0);
                else if (object.userID.length)
                    message.userID = object.userID;
            return message;
        };

        /**
         * Creates a plain object from a CreatePhoneRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreatePhoneRequestV1
         * @static
         * @param {inout.CreatePhoneRequestV1} message CreatePhoneRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePhoneRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.phone = "";
                object.code = "";
                if (options.bytes === String)
                    object.userID = "";
                else {
                    object.userID = [];
                    if (options.bytes !== Array)
                        object.userID = $util.newBuffer(object.userID);
                }
            }
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = options.bytes === String ? $util.base64.encode(message.userID, 0, message.userID.length) : options.bytes === Array ? Array.prototype.slice.call(message.userID) : message.userID;
            return object;
        };

        /**
         * Converts this CreatePhoneRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreatePhoneRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePhoneRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePhoneRequestV1;
    })();

    inout.CreatePhoneBadRequestV1 = (function() {

        /**
         * Properties of a CreatePhoneBadRequestV1.
         * @memberof inout
         * @interface ICreatePhoneBadRequestV1
         * @property {Array.<string>|null} [phone] CreatePhoneBadRequestV1 phone
         * @property {Array.<string>|null} [code] CreatePhoneBadRequestV1 code
         * @property {Array.<string>|null} [userID] CreatePhoneBadRequestV1 userID
         */

        /**
         * Constructs a new CreatePhoneBadRequestV1.
         * @memberof inout
         * @classdesc Represents a CreatePhoneBadRequestV1.
         * @implements ICreatePhoneBadRequestV1
         * @constructor
         * @param {inout.ICreatePhoneBadRequestV1=} [properties] Properties to set
         */
        function CreatePhoneBadRequestV1(properties) {
            this.phone = [];
            this.code = [];
            this.userID = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePhoneBadRequestV1 phone.
         * @member {Array.<string>} phone
         * @memberof inout.CreatePhoneBadRequestV1
         * @instance
         */
        CreatePhoneBadRequestV1.prototype.phone = $util.emptyArray;

        /**
         * CreatePhoneBadRequestV1 code.
         * @member {Array.<string>} code
         * @memberof inout.CreatePhoneBadRequestV1
         * @instance
         */
        CreatePhoneBadRequestV1.prototype.code = $util.emptyArray;

        /**
         * CreatePhoneBadRequestV1 userID.
         * @member {Array.<string>} userID
         * @memberof inout.CreatePhoneBadRequestV1
         * @instance
         */
        CreatePhoneBadRequestV1.prototype.userID = $util.emptyArray;

        /**
         * Creates a new CreatePhoneBadRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreatePhoneBadRequestV1
         * @static
         * @param {inout.ICreatePhoneBadRequestV1=} [properties] Properties to set
         * @returns {inout.CreatePhoneBadRequestV1} CreatePhoneBadRequestV1 instance
         */
        CreatePhoneBadRequestV1.create = function create(properties) {
            return new CreatePhoneBadRequestV1(properties);
        };

        /**
         * Encodes the specified CreatePhoneBadRequestV1 message. Does not implicitly {@link inout.CreatePhoneBadRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreatePhoneBadRequestV1
         * @static
         * @param {inout.ICreatePhoneBadRequestV1} message CreatePhoneBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePhoneBadRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phone != null && message.phone.length)
                for (var i = 0; i < message.phone.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.phone[i]);
            if (message.code != null && message.code.length)
                for (var i = 0; i < message.code.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.code[i]);
            if (message.userID != null && message.userID.length)
                for (var i = 0; i < message.userID.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.userID[i]);
            return writer;
        };

        /**
         * Encodes the specified CreatePhoneBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreatePhoneBadRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreatePhoneBadRequestV1
         * @static
         * @param {inout.ICreatePhoneBadRequestV1} message CreatePhoneBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePhoneBadRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePhoneBadRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreatePhoneBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreatePhoneBadRequestV1} CreatePhoneBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePhoneBadRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreatePhoneBadRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.phone && message.phone.length))
                        message.phone = [];
                    message.phone.push(reader.string());
                    break;
                case 2:
                    if (!(message.code && message.code.length))
                        message.code = [];
                    message.code.push(reader.string());
                    break;
                case 3:
                    if (!(message.userID && message.userID.length))
                        message.userID = [];
                    message.userID.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePhoneBadRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreatePhoneBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreatePhoneBadRequestV1} CreatePhoneBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePhoneBadRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePhoneBadRequestV1 message.
         * @function verify
         * @memberof inout.CreatePhoneBadRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePhoneBadRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phone != null && message.hasOwnProperty("phone")) {
                if (!Array.isArray(message.phone))
                    return "phone: array expected";
                for (var i = 0; i < message.phone.length; ++i)
                    if (!$util.isString(message.phone[i]))
                        return "phone: string[] expected";
            }
            if (message.code != null && message.hasOwnProperty("code")) {
                if (!Array.isArray(message.code))
                    return "code: array expected";
                for (var i = 0; i < message.code.length; ++i)
                    if (!$util.isString(message.code[i]))
                        return "code: string[] expected";
            }
            if (message.userID != null && message.hasOwnProperty("userID")) {
                if (!Array.isArray(message.userID))
                    return "userID: array expected";
                for (var i = 0; i < message.userID.length; ++i)
                    if (!$util.isString(message.userID[i]))
                        return "userID: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CreatePhoneBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreatePhoneBadRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreatePhoneBadRequestV1} CreatePhoneBadRequestV1
         */
        CreatePhoneBadRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreatePhoneBadRequestV1)
                return object;
            var message = new $root.inout.CreatePhoneBadRequestV1();
            if (object.phone) {
                if (!Array.isArray(object.phone))
                    throw TypeError(".inout.CreatePhoneBadRequestV1.phone: array expected");
                message.phone = [];
                for (var i = 0; i < object.phone.length; ++i)
                    message.phone[i] = String(object.phone[i]);
            }
            if (object.code) {
                if (!Array.isArray(object.code))
                    throw TypeError(".inout.CreatePhoneBadRequestV1.code: array expected");
                message.code = [];
                for (var i = 0; i < object.code.length; ++i)
                    message.code[i] = String(object.code[i]);
            }
            if (object.userID) {
                if (!Array.isArray(object.userID))
                    throw TypeError(".inout.CreatePhoneBadRequestV1.userID: array expected");
                message.userID = [];
                for (var i = 0; i < object.userID.length; ++i)
                    message.userID[i] = String(object.userID[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreatePhoneBadRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreatePhoneBadRequestV1
         * @static
         * @param {inout.CreatePhoneBadRequestV1} message CreatePhoneBadRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePhoneBadRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.phone = [];
                object.code = [];
                object.userID = [];
            }
            if (message.phone && message.phone.length) {
                object.phone = [];
                for (var j = 0; j < message.phone.length; ++j)
                    object.phone[j] = message.phone[j];
            }
            if (message.code && message.code.length) {
                object.code = [];
                for (var j = 0; j < message.code.length; ++j)
                    object.code[j] = message.code[j];
            }
            if (message.userID && message.userID.length) {
                object.userID = [];
                for (var j = 0; j < message.userID.length; ++j)
                    object.userID[j] = message.userID[j];
            }
            return object;
        };

        /**
         * Converts this CreatePhoneBadRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreatePhoneBadRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePhoneBadRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePhoneBadRequestV1;
    })();

    inout.CreatePhoneResponseV1 = (function() {

        /**
         * Properties of a CreatePhoneResponseV1.
         * @memberof inout
         * @interface ICreatePhoneResponseV1
         * @property {Uint8Array|null} [id] CreatePhoneResponseV1 id
         * @property {number|Long|null} [created] CreatePhoneResponseV1 created
         * @property {Uint8Array|null} [userID] CreatePhoneResponseV1 userID
         * @property {string|null} [phone] CreatePhoneResponseV1 phone
         */

        /**
         * Constructs a new CreatePhoneResponseV1.
         * @memberof inout
         * @classdesc Represents a CreatePhoneResponseV1.
         * @implements ICreatePhoneResponseV1
         * @constructor
         * @param {inout.ICreatePhoneResponseV1=} [properties] Properties to set
         */
        function CreatePhoneResponseV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePhoneResponseV1 id.
         * @member {Uint8Array} id
         * @memberof inout.CreatePhoneResponseV1
         * @instance
         */
        CreatePhoneResponseV1.prototype.id = $util.newBuffer([]);

        /**
         * CreatePhoneResponseV1 created.
         * @member {number|Long} created
         * @memberof inout.CreatePhoneResponseV1
         * @instance
         */
        CreatePhoneResponseV1.prototype.created = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreatePhoneResponseV1 userID.
         * @member {Uint8Array} userID
         * @memberof inout.CreatePhoneResponseV1
         * @instance
         */
        CreatePhoneResponseV1.prototype.userID = $util.newBuffer([]);

        /**
         * CreatePhoneResponseV1 phone.
         * @member {string} phone
         * @memberof inout.CreatePhoneResponseV1
         * @instance
         */
        CreatePhoneResponseV1.prototype.phone = "";

        /**
         * Creates a new CreatePhoneResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreatePhoneResponseV1
         * @static
         * @param {inout.ICreatePhoneResponseV1=} [properties] Properties to set
         * @returns {inout.CreatePhoneResponseV1} CreatePhoneResponseV1 instance
         */
        CreatePhoneResponseV1.create = function create(properties) {
            return new CreatePhoneResponseV1(properties);
        };

        /**
         * Encodes the specified CreatePhoneResponseV1 message. Does not implicitly {@link inout.CreatePhoneResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreatePhoneResponseV1
         * @static
         * @param {inout.ICreatePhoneResponseV1} message CreatePhoneResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePhoneResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.created != null && Object.hasOwnProperty.call(message, "created"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.created);
            if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.userID);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.phone);
            return writer;
        };

        /**
         * Encodes the specified CreatePhoneResponseV1 message, length delimited. Does not implicitly {@link inout.CreatePhoneResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreatePhoneResponseV1
         * @static
         * @param {inout.ICreatePhoneResponseV1} message CreatePhoneResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePhoneResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePhoneResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreatePhoneResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreatePhoneResponseV1} CreatePhoneResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePhoneResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreatePhoneResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.created = reader.int64();
                    break;
                case 3:
                    message.userID = reader.bytes();
                    break;
                case 4:
                    message.phone = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePhoneResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreatePhoneResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreatePhoneResponseV1} CreatePhoneResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePhoneResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePhoneResponseV1 message.
         * @function verify
         * @memberof inout.CreatePhoneResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePhoneResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.created != null && message.hasOwnProperty("created"))
                if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                    return "created: integer|Long expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!(message.userID && typeof message.userID.length === "number" || $util.isString(message.userID)))
                    return "userID: buffer expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            return null;
        };

        /**
         * Creates a CreatePhoneResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreatePhoneResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreatePhoneResponseV1} CreatePhoneResponseV1
         */
        CreatePhoneResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreatePhoneResponseV1)
                return object;
            var message = new $root.inout.CreatePhoneResponseV1();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.created != null)
                if ($util.Long)
                    (message.created = $util.Long.fromValue(object.created)).unsigned = false;
                else if (typeof object.created === "string")
                    message.created = parseInt(object.created, 10);
                else if (typeof object.created === "number")
                    message.created = object.created;
                else if (typeof object.created === "object")
                    message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber();
            if (object.userID != null)
                if (typeof object.userID === "string")
                    $util.base64.decode(object.userID, message.userID = $util.newBuffer($util.base64.length(object.userID)), 0);
                else if (object.userID.length)
                    message.userID = object.userID;
            if (object.phone != null)
                message.phone = String(object.phone);
            return message;
        };

        /**
         * Creates a plain object from a CreatePhoneResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreatePhoneResponseV1
         * @static
         * @param {inout.CreatePhoneResponseV1} message CreatePhoneResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePhoneResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.created = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.userID = "";
                else {
                    object.userID = [];
                    if (options.bytes !== Array)
                        object.userID = $util.newBuffer(object.userID);
                }
                object.phone = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.created != null && message.hasOwnProperty("created"))
                if (typeof message.created === "number")
                    object.created = options.longs === String ? String(message.created) : message.created;
                else
                    object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber() : message.created;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = options.bytes === String ? $util.base64.encode(message.userID, 0, message.userID.length) : options.bytes === Array ? Array.prototype.slice.call(message.userID) : message.userID;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            return object;
        };

        /**
         * Converts this CreatePhoneResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.CreatePhoneResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePhoneResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePhoneResponseV1;
    })();

    inout.CreatePhoneConfirmationRequestV1 = (function() {

        /**
         * Properties of a CreatePhoneConfirmationRequestV1.
         * @memberof inout
         * @interface ICreatePhoneConfirmationRequestV1
         * @property {string|null} [phone] CreatePhoneConfirmationRequestV1 phone
         */

        /**
         * Constructs a new CreatePhoneConfirmationRequestV1.
         * @memberof inout
         * @classdesc Represents a CreatePhoneConfirmationRequestV1.
         * @implements ICreatePhoneConfirmationRequestV1
         * @constructor
         * @param {inout.ICreatePhoneConfirmationRequestV1=} [properties] Properties to set
         */
        function CreatePhoneConfirmationRequestV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePhoneConfirmationRequestV1 phone.
         * @member {string} phone
         * @memberof inout.CreatePhoneConfirmationRequestV1
         * @instance
         */
        CreatePhoneConfirmationRequestV1.prototype.phone = "";

        /**
         * Creates a new CreatePhoneConfirmationRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreatePhoneConfirmationRequestV1
         * @static
         * @param {inout.ICreatePhoneConfirmationRequestV1=} [properties] Properties to set
         * @returns {inout.CreatePhoneConfirmationRequestV1} CreatePhoneConfirmationRequestV1 instance
         */
        CreatePhoneConfirmationRequestV1.create = function create(properties) {
            return new CreatePhoneConfirmationRequestV1(properties);
        };

        /**
         * Encodes the specified CreatePhoneConfirmationRequestV1 message. Does not implicitly {@link inout.CreatePhoneConfirmationRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreatePhoneConfirmationRequestV1
         * @static
         * @param {inout.ICreatePhoneConfirmationRequestV1} message CreatePhoneConfirmationRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePhoneConfirmationRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.phone);
            return writer;
        };

        /**
         * Encodes the specified CreatePhoneConfirmationRequestV1 message, length delimited. Does not implicitly {@link inout.CreatePhoneConfirmationRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreatePhoneConfirmationRequestV1
         * @static
         * @param {inout.ICreatePhoneConfirmationRequestV1} message CreatePhoneConfirmationRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePhoneConfirmationRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePhoneConfirmationRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreatePhoneConfirmationRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreatePhoneConfirmationRequestV1} CreatePhoneConfirmationRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePhoneConfirmationRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreatePhoneConfirmationRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.phone = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePhoneConfirmationRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreatePhoneConfirmationRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreatePhoneConfirmationRequestV1} CreatePhoneConfirmationRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePhoneConfirmationRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePhoneConfirmationRequestV1 message.
         * @function verify
         * @memberof inout.CreatePhoneConfirmationRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePhoneConfirmationRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            return null;
        };

        /**
         * Creates a CreatePhoneConfirmationRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreatePhoneConfirmationRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreatePhoneConfirmationRequestV1} CreatePhoneConfirmationRequestV1
         */
        CreatePhoneConfirmationRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreatePhoneConfirmationRequestV1)
                return object;
            var message = new $root.inout.CreatePhoneConfirmationRequestV1();
            if (object.phone != null)
                message.phone = String(object.phone);
            return message;
        };

        /**
         * Creates a plain object from a CreatePhoneConfirmationRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreatePhoneConfirmationRequestV1
         * @static
         * @param {inout.CreatePhoneConfirmationRequestV1} message CreatePhoneConfirmationRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePhoneConfirmationRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.phone = "";
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            return object;
        };

        /**
         * Converts this CreatePhoneConfirmationRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreatePhoneConfirmationRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePhoneConfirmationRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePhoneConfirmationRequestV1;
    })();

    inout.CreatePhoneConfirmationBadRequestV1 = (function() {

        /**
         * Properties of a CreatePhoneConfirmationBadRequestV1.
         * @memberof inout
         * @interface ICreatePhoneConfirmationBadRequestV1
         * @property {Array.<string>|null} [phone] CreatePhoneConfirmationBadRequestV1 phone
         */

        /**
         * Constructs a new CreatePhoneConfirmationBadRequestV1.
         * @memberof inout
         * @classdesc Represents a CreatePhoneConfirmationBadRequestV1.
         * @implements ICreatePhoneConfirmationBadRequestV1
         * @constructor
         * @param {inout.ICreatePhoneConfirmationBadRequestV1=} [properties] Properties to set
         */
        function CreatePhoneConfirmationBadRequestV1(properties) {
            this.phone = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePhoneConfirmationBadRequestV1 phone.
         * @member {Array.<string>} phone
         * @memberof inout.CreatePhoneConfirmationBadRequestV1
         * @instance
         */
        CreatePhoneConfirmationBadRequestV1.prototype.phone = $util.emptyArray;

        /**
         * Creates a new CreatePhoneConfirmationBadRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreatePhoneConfirmationBadRequestV1
         * @static
         * @param {inout.ICreatePhoneConfirmationBadRequestV1=} [properties] Properties to set
         * @returns {inout.CreatePhoneConfirmationBadRequestV1} CreatePhoneConfirmationBadRequestV1 instance
         */
        CreatePhoneConfirmationBadRequestV1.create = function create(properties) {
            return new CreatePhoneConfirmationBadRequestV1(properties);
        };

        /**
         * Encodes the specified CreatePhoneConfirmationBadRequestV1 message. Does not implicitly {@link inout.CreatePhoneConfirmationBadRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreatePhoneConfirmationBadRequestV1
         * @static
         * @param {inout.ICreatePhoneConfirmationBadRequestV1} message CreatePhoneConfirmationBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePhoneConfirmationBadRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phone != null && message.phone.length)
                for (var i = 0; i < message.phone.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.phone[i]);
            return writer;
        };

        /**
         * Encodes the specified CreatePhoneConfirmationBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreatePhoneConfirmationBadRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreatePhoneConfirmationBadRequestV1
         * @static
         * @param {inout.ICreatePhoneConfirmationBadRequestV1} message CreatePhoneConfirmationBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePhoneConfirmationBadRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePhoneConfirmationBadRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreatePhoneConfirmationBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreatePhoneConfirmationBadRequestV1} CreatePhoneConfirmationBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePhoneConfirmationBadRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreatePhoneConfirmationBadRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.phone && message.phone.length))
                        message.phone = [];
                    message.phone.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePhoneConfirmationBadRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreatePhoneConfirmationBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreatePhoneConfirmationBadRequestV1} CreatePhoneConfirmationBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePhoneConfirmationBadRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePhoneConfirmationBadRequestV1 message.
         * @function verify
         * @memberof inout.CreatePhoneConfirmationBadRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePhoneConfirmationBadRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phone != null && message.hasOwnProperty("phone")) {
                if (!Array.isArray(message.phone))
                    return "phone: array expected";
                for (var i = 0; i < message.phone.length; ++i)
                    if (!$util.isString(message.phone[i]))
                        return "phone: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CreatePhoneConfirmationBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreatePhoneConfirmationBadRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreatePhoneConfirmationBadRequestV1} CreatePhoneConfirmationBadRequestV1
         */
        CreatePhoneConfirmationBadRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreatePhoneConfirmationBadRequestV1)
                return object;
            var message = new $root.inout.CreatePhoneConfirmationBadRequestV1();
            if (object.phone) {
                if (!Array.isArray(object.phone))
                    throw TypeError(".inout.CreatePhoneConfirmationBadRequestV1.phone: array expected");
                message.phone = [];
                for (var i = 0; i < object.phone.length; ++i)
                    message.phone[i] = String(object.phone[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreatePhoneConfirmationBadRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreatePhoneConfirmationBadRequestV1
         * @static
         * @param {inout.CreatePhoneConfirmationBadRequestV1} message CreatePhoneConfirmationBadRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePhoneConfirmationBadRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.phone = [];
            if (message.phone && message.phone.length) {
                object.phone = [];
                for (var j = 0; j < message.phone.length; ++j)
                    object.phone[j] = message.phone[j];
            }
            return object;
        };

        /**
         * Converts this CreatePhoneConfirmationBadRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreatePhoneConfirmationBadRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePhoneConfirmationBadRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePhoneConfirmationBadRequestV1;
    })();

    inout.CreatePhoneConfirmationResponseV1 = (function() {

        /**
         * Properties of a CreatePhoneConfirmationResponseV1.
         * @memberof inout
         * @interface ICreatePhoneConfirmationResponseV1
         * @property {number|Long|null} [created] CreatePhoneConfirmationResponseV1 created
         * @property {number|Long|null} [expire] CreatePhoneConfirmationResponseV1 expire
         * @property {string|null} [phone] CreatePhoneConfirmationResponseV1 phone
         */

        /**
         * Constructs a new CreatePhoneConfirmationResponseV1.
         * @memberof inout
         * @classdesc Represents a CreatePhoneConfirmationResponseV1.
         * @implements ICreatePhoneConfirmationResponseV1
         * @constructor
         * @param {inout.ICreatePhoneConfirmationResponseV1=} [properties] Properties to set
         */
        function CreatePhoneConfirmationResponseV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePhoneConfirmationResponseV1 created.
         * @member {number|Long} created
         * @memberof inout.CreatePhoneConfirmationResponseV1
         * @instance
         */
        CreatePhoneConfirmationResponseV1.prototype.created = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreatePhoneConfirmationResponseV1 expire.
         * @member {number|Long} expire
         * @memberof inout.CreatePhoneConfirmationResponseV1
         * @instance
         */
        CreatePhoneConfirmationResponseV1.prototype.expire = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreatePhoneConfirmationResponseV1 phone.
         * @member {string} phone
         * @memberof inout.CreatePhoneConfirmationResponseV1
         * @instance
         */
        CreatePhoneConfirmationResponseV1.prototype.phone = "";

        /**
         * Creates a new CreatePhoneConfirmationResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreatePhoneConfirmationResponseV1
         * @static
         * @param {inout.ICreatePhoneConfirmationResponseV1=} [properties] Properties to set
         * @returns {inout.CreatePhoneConfirmationResponseV1} CreatePhoneConfirmationResponseV1 instance
         */
        CreatePhoneConfirmationResponseV1.create = function create(properties) {
            return new CreatePhoneConfirmationResponseV1(properties);
        };

        /**
         * Encodes the specified CreatePhoneConfirmationResponseV1 message. Does not implicitly {@link inout.CreatePhoneConfirmationResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreatePhoneConfirmationResponseV1
         * @static
         * @param {inout.ICreatePhoneConfirmationResponseV1} message CreatePhoneConfirmationResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePhoneConfirmationResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.created != null && Object.hasOwnProperty.call(message, "created"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.created);
            if (message.expire != null && Object.hasOwnProperty.call(message, "expire"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.expire);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.phone);
            return writer;
        };

        /**
         * Encodes the specified CreatePhoneConfirmationResponseV1 message, length delimited. Does not implicitly {@link inout.CreatePhoneConfirmationResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreatePhoneConfirmationResponseV1
         * @static
         * @param {inout.ICreatePhoneConfirmationResponseV1} message CreatePhoneConfirmationResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePhoneConfirmationResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePhoneConfirmationResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreatePhoneConfirmationResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreatePhoneConfirmationResponseV1} CreatePhoneConfirmationResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePhoneConfirmationResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreatePhoneConfirmationResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.created = reader.int64();
                    break;
                case 2:
                    message.expire = reader.int64();
                    break;
                case 3:
                    message.phone = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePhoneConfirmationResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreatePhoneConfirmationResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreatePhoneConfirmationResponseV1} CreatePhoneConfirmationResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePhoneConfirmationResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePhoneConfirmationResponseV1 message.
         * @function verify
         * @memberof inout.CreatePhoneConfirmationResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePhoneConfirmationResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.created != null && message.hasOwnProperty("created"))
                if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                    return "created: integer|Long expected";
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (!$util.isInteger(message.expire) && !(message.expire && $util.isInteger(message.expire.low) && $util.isInteger(message.expire.high)))
                    return "expire: integer|Long expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            return null;
        };

        /**
         * Creates a CreatePhoneConfirmationResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreatePhoneConfirmationResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreatePhoneConfirmationResponseV1} CreatePhoneConfirmationResponseV1
         */
        CreatePhoneConfirmationResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreatePhoneConfirmationResponseV1)
                return object;
            var message = new $root.inout.CreatePhoneConfirmationResponseV1();
            if (object.created != null)
                if ($util.Long)
                    (message.created = $util.Long.fromValue(object.created)).unsigned = false;
                else if (typeof object.created === "string")
                    message.created = parseInt(object.created, 10);
                else if (typeof object.created === "number")
                    message.created = object.created;
                else if (typeof object.created === "object")
                    message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber();
            if (object.expire != null)
                if ($util.Long)
                    (message.expire = $util.Long.fromValue(object.expire)).unsigned = false;
                else if (typeof object.expire === "string")
                    message.expire = parseInt(object.expire, 10);
                else if (typeof object.expire === "number")
                    message.expire = object.expire;
                else if (typeof object.expire === "object")
                    message.expire = new $util.LongBits(object.expire.low >>> 0, object.expire.high >>> 0).toNumber();
            if (object.phone != null)
                message.phone = String(object.phone);
            return message;
        };

        /**
         * Creates a plain object from a CreatePhoneConfirmationResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreatePhoneConfirmationResponseV1
         * @static
         * @param {inout.CreatePhoneConfirmationResponseV1} message CreatePhoneConfirmationResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePhoneConfirmationResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.created = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.expire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expire = options.longs === String ? "0" : 0;
                object.phone = "";
            }
            if (message.created != null && message.hasOwnProperty("created"))
                if (typeof message.created === "number")
                    object.created = options.longs === String ? String(message.created) : message.created;
                else
                    object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber() : message.created;
            if (message.expire != null && message.hasOwnProperty("expire"))
                if (typeof message.expire === "number")
                    object.expire = options.longs === String ? String(message.expire) : message.expire;
                else
                    object.expire = options.longs === String ? $util.Long.prototype.toString.call(message.expire) : options.longs === Number ? new $util.LongBits(message.expire.low >>> 0, message.expire.high >>> 0).toNumber() : message.expire;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            return object;
        };

        /**
         * Converts this CreatePhoneConfirmationResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.CreatePhoneConfirmationResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePhoneConfirmationResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePhoneConfirmationResponseV1;
    })();

    inout.CreatePasswordRequestV1 = (function() {

        /**
         * Properties of a CreatePasswordRequestV1.
         * @memberof inout
         * @interface ICreatePasswordRequestV1
         * @property {Uint8Array|null} [userID] CreatePasswordRequestV1 userID
         * @property {string|null} [value] CreatePasswordRequestV1 value
         */

        /**
         * Constructs a new CreatePasswordRequestV1.
         * @memberof inout
         * @classdesc Represents a CreatePasswordRequestV1.
         * @implements ICreatePasswordRequestV1
         * @constructor
         * @param {inout.ICreatePasswordRequestV1=} [properties] Properties to set
         */
        function CreatePasswordRequestV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePasswordRequestV1 userID.
         * @member {Uint8Array} userID
         * @memberof inout.CreatePasswordRequestV1
         * @instance
         */
        CreatePasswordRequestV1.prototype.userID = $util.newBuffer([]);

        /**
         * CreatePasswordRequestV1 value.
         * @member {string} value
         * @memberof inout.CreatePasswordRequestV1
         * @instance
         */
        CreatePasswordRequestV1.prototype.value = "";

        /**
         * Creates a new CreatePasswordRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreatePasswordRequestV1
         * @static
         * @param {inout.ICreatePasswordRequestV1=} [properties] Properties to set
         * @returns {inout.CreatePasswordRequestV1} CreatePasswordRequestV1 instance
         */
        CreatePasswordRequestV1.create = function create(properties) {
            return new CreatePasswordRequestV1(properties);
        };

        /**
         * Encodes the specified CreatePasswordRequestV1 message. Does not implicitly {@link inout.CreatePasswordRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreatePasswordRequestV1
         * @static
         * @param {inout.ICreatePasswordRequestV1} message CreatePasswordRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePasswordRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.userID);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified CreatePasswordRequestV1 message, length delimited. Does not implicitly {@link inout.CreatePasswordRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreatePasswordRequestV1
         * @static
         * @param {inout.ICreatePasswordRequestV1} message CreatePasswordRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePasswordRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePasswordRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreatePasswordRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreatePasswordRequestV1} CreatePasswordRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePasswordRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreatePasswordRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userID = reader.bytes();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePasswordRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreatePasswordRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreatePasswordRequestV1} CreatePasswordRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePasswordRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePasswordRequestV1 message.
         * @function verify
         * @memberof inout.CreatePasswordRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePasswordRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!(message.userID && typeof message.userID.length === "number" || $util.isString(message.userID)))
                    return "userID: buffer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a CreatePasswordRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreatePasswordRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreatePasswordRequestV1} CreatePasswordRequestV1
         */
        CreatePasswordRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreatePasswordRequestV1)
                return object;
            var message = new $root.inout.CreatePasswordRequestV1();
            if (object.userID != null)
                if (typeof object.userID === "string")
                    $util.base64.decode(object.userID, message.userID = $util.newBuffer($util.base64.length(object.userID)), 0);
                else if (object.userID.length)
                    message.userID = object.userID;
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a CreatePasswordRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreatePasswordRequestV1
         * @static
         * @param {inout.CreatePasswordRequestV1} message CreatePasswordRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePasswordRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.userID = "";
                else {
                    object.userID = [];
                    if (options.bytes !== Array)
                        object.userID = $util.newBuffer(object.userID);
                }
                object.value = "";
            }
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = options.bytes === String ? $util.base64.encode(message.userID, 0, message.userID.length) : options.bytes === Array ? Array.prototype.slice.call(message.userID) : message.userID;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this CreatePasswordRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreatePasswordRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePasswordRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePasswordRequestV1;
    })();

    inout.CreatePasswordBadRequestResponseV1 = (function() {

        /**
         * Properties of a CreatePasswordBadRequestResponseV1.
         * @memberof inout
         * @interface ICreatePasswordBadRequestResponseV1
         * @property {Array.<string>|null} [userID] CreatePasswordBadRequestResponseV1 userID
         * @property {Array.<string>|null} [value] CreatePasswordBadRequestResponseV1 value
         */

        /**
         * Constructs a new CreatePasswordBadRequestResponseV1.
         * @memberof inout
         * @classdesc Represents a CreatePasswordBadRequestResponseV1.
         * @implements ICreatePasswordBadRequestResponseV1
         * @constructor
         * @param {inout.ICreatePasswordBadRequestResponseV1=} [properties] Properties to set
         */
        function CreatePasswordBadRequestResponseV1(properties) {
            this.userID = [];
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePasswordBadRequestResponseV1 userID.
         * @member {Array.<string>} userID
         * @memberof inout.CreatePasswordBadRequestResponseV1
         * @instance
         */
        CreatePasswordBadRequestResponseV1.prototype.userID = $util.emptyArray;

        /**
         * CreatePasswordBadRequestResponseV1 value.
         * @member {Array.<string>} value
         * @memberof inout.CreatePasswordBadRequestResponseV1
         * @instance
         */
        CreatePasswordBadRequestResponseV1.prototype.value = $util.emptyArray;

        /**
         * Creates a new CreatePasswordBadRequestResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreatePasswordBadRequestResponseV1
         * @static
         * @param {inout.ICreatePasswordBadRequestResponseV1=} [properties] Properties to set
         * @returns {inout.CreatePasswordBadRequestResponseV1} CreatePasswordBadRequestResponseV1 instance
         */
        CreatePasswordBadRequestResponseV1.create = function create(properties) {
            return new CreatePasswordBadRequestResponseV1(properties);
        };

        /**
         * Encodes the specified CreatePasswordBadRequestResponseV1 message. Does not implicitly {@link inout.CreatePasswordBadRequestResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreatePasswordBadRequestResponseV1
         * @static
         * @param {inout.ICreatePasswordBadRequestResponseV1} message CreatePasswordBadRequestResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePasswordBadRequestResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userID != null && message.userID.length)
                for (var i = 0; i < message.userID.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID[i]);
            if (message.value != null && message.value.length)
                for (var i = 0; i < message.value.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value[i]);
            return writer;
        };

        /**
         * Encodes the specified CreatePasswordBadRequestResponseV1 message, length delimited. Does not implicitly {@link inout.CreatePasswordBadRequestResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreatePasswordBadRequestResponseV1
         * @static
         * @param {inout.ICreatePasswordBadRequestResponseV1} message CreatePasswordBadRequestResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePasswordBadRequestResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePasswordBadRequestResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreatePasswordBadRequestResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreatePasswordBadRequestResponseV1} CreatePasswordBadRequestResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePasswordBadRequestResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreatePasswordBadRequestResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userID && message.userID.length))
                        message.userID = [];
                    message.userID.push(reader.string());
                    break;
                case 2:
                    if (!(message.value && message.value.length))
                        message.value = [];
                    message.value.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePasswordBadRequestResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreatePasswordBadRequestResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreatePasswordBadRequestResponseV1} CreatePasswordBadRequestResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePasswordBadRequestResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePasswordBadRequestResponseV1 message.
         * @function verify
         * @memberof inout.CreatePasswordBadRequestResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePasswordBadRequestResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userID != null && message.hasOwnProperty("userID")) {
                if (!Array.isArray(message.userID))
                    return "userID: array expected";
                for (var i = 0; i < message.userID.length; ++i)
                    if (!$util.isString(message.userID[i]))
                        return "userID: string[] expected";
            }
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!Array.isArray(message.value))
                    return "value: array expected";
                for (var i = 0; i < message.value.length; ++i)
                    if (!$util.isString(message.value[i]))
                        return "value: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CreatePasswordBadRequestResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreatePasswordBadRequestResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreatePasswordBadRequestResponseV1} CreatePasswordBadRequestResponseV1
         */
        CreatePasswordBadRequestResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreatePasswordBadRequestResponseV1)
                return object;
            var message = new $root.inout.CreatePasswordBadRequestResponseV1();
            if (object.userID) {
                if (!Array.isArray(object.userID))
                    throw TypeError(".inout.CreatePasswordBadRequestResponseV1.userID: array expected");
                message.userID = [];
                for (var i = 0; i < object.userID.length; ++i)
                    message.userID[i] = String(object.userID[i]);
            }
            if (object.value) {
                if (!Array.isArray(object.value))
                    throw TypeError(".inout.CreatePasswordBadRequestResponseV1.value: array expected");
                message.value = [];
                for (var i = 0; i < object.value.length; ++i)
                    message.value[i] = String(object.value[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreatePasswordBadRequestResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreatePasswordBadRequestResponseV1
         * @static
         * @param {inout.CreatePasswordBadRequestResponseV1} message CreatePasswordBadRequestResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePasswordBadRequestResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.userID = [];
                object.value = [];
            }
            if (message.userID && message.userID.length) {
                object.userID = [];
                for (var j = 0; j < message.userID.length; ++j)
                    object.userID[j] = message.userID[j];
            }
            if (message.value && message.value.length) {
                object.value = [];
                for (var j = 0; j < message.value.length; ++j)
                    object.value[j] = message.value[j];
            }
            return object;
        };

        /**
         * Converts this CreatePasswordBadRequestResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.CreatePasswordBadRequestResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePasswordBadRequestResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePasswordBadRequestResponseV1;
    })();

    inout.CreatePasswordResponseV1 = (function() {

        /**
         * Properties of a CreatePasswordResponseV1.
         * @memberof inout
         * @interface ICreatePasswordResponseV1
         * @property {Uint8Array|null} [id] CreatePasswordResponseV1 id
         * @property {number|Long|null} [created] CreatePasswordResponseV1 created
         * @property {Uint8Array|null} [userID] CreatePasswordResponseV1 userID
         */

        /**
         * Constructs a new CreatePasswordResponseV1.
         * @memberof inout
         * @classdesc Represents a CreatePasswordResponseV1.
         * @implements ICreatePasswordResponseV1
         * @constructor
         * @param {inout.ICreatePasswordResponseV1=} [properties] Properties to set
         */
        function CreatePasswordResponseV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePasswordResponseV1 id.
         * @member {Uint8Array} id
         * @memberof inout.CreatePasswordResponseV1
         * @instance
         */
        CreatePasswordResponseV1.prototype.id = $util.newBuffer([]);

        /**
         * CreatePasswordResponseV1 created.
         * @member {number|Long} created
         * @memberof inout.CreatePasswordResponseV1
         * @instance
         */
        CreatePasswordResponseV1.prototype.created = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreatePasswordResponseV1 userID.
         * @member {Uint8Array} userID
         * @memberof inout.CreatePasswordResponseV1
         * @instance
         */
        CreatePasswordResponseV1.prototype.userID = $util.newBuffer([]);

        /**
         * Creates a new CreatePasswordResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreatePasswordResponseV1
         * @static
         * @param {inout.ICreatePasswordResponseV1=} [properties] Properties to set
         * @returns {inout.CreatePasswordResponseV1} CreatePasswordResponseV1 instance
         */
        CreatePasswordResponseV1.create = function create(properties) {
            return new CreatePasswordResponseV1(properties);
        };

        /**
         * Encodes the specified CreatePasswordResponseV1 message. Does not implicitly {@link inout.CreatePasswordResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreatePasswordResponseV1
         * @static
         * @param {inout.ICreatePasswordResponseV1} message CreatePasswordResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePasswordResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.created != null && Object.hasOwnProperty.call(message, "created"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.created);
            if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.userID);
            return writer;
        };

        /**
         * Encodes the specified CreatePasswordResponseV1 message, length delimited. Does not implicitly {@link inout.CreatePasswordResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreatePasswordResponseV1
         * @static
         * @param {inout.ICreatePasswordResponseV1} message CreatePasswordResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePasswordResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePasswordResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreatePasswordResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreatePasswordResponseV1} CreatePasswordResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePasswordResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreatePasswordResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.created = reader.int64();
                    break;
                case 3:
                    message.userID = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePasswordResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreatePasswordResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreatePasswordResponseV1} CreatePasswordResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePasswordResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePasswordResponseV1 message.
         * @function verify
         * @memberof inout.CreatePasswordResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePasswordResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.created != null && message.hasOwnProperty("created"))
                if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                    return "created: integer|Long expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!(message.userID && typeof message.userID.length === "number" || $util.isString(message.userID)))
                    return "userID: buffer expected";
            return null;
        };

        /**
         * Creates a CreatePasswordResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreatePasswordResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreatePasswordResponseV1} CreatePasswordResponseV1
         */
        CreatePasswordResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreatePasswordResponseV1)
                return object;
            var message = new $root.inout.CreatePasswordResponseV1();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.created != null)
                if ($util.Long)
                    (message.created = $util.Long.fromValue(object.created)).unsigned = false;
                else if (typeof object.created === "string")
                    message.created = parseInt(object.created, 10);
                else if (typeof object.created === "number")
                    message.created = object.created;
                else if (typeof object.created === "object")
                    message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber();
            if (object.userID != null)
                if (typeof object.userID === "string")
                    $util.base64.decode(object.userID, message.userID = $util.newBuffer($util.base64.length(object.userID)), 0);
                else if (object.userID.length)
                    message.userID = object.userID;
            return message;
        };

        /**
         * Creates a plain object from a CreatePasswordResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreatePasswordResponseV1
         * @static
         * @param {inout.CreatePasswordResponseV1} message CreatePasswordResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePasswordResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.created = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.userID = "";
                else {
                    object.userID = [];
                    if (options.bytes !== Array)
                        object.userID = $util.newBuffer(object.userID);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.created != null && message.hasOwnProperty("created"))
                if (typeof message.created === "number")
                    object.created = options.longs === String ? String(message.created) : message.created;
                else
                    object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber() : message.created;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = options.bytes === String ? $util.base64.encode(message.userID, 0, message.userID.length) : options.bytes === Array ? Array.prototype.slice.call(message.userID) : message.userID;
            return object;
        };

        /**
         * Converts this CreatePasswordResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.CreatePasswordResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePasswordResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePasswordResponseV1;
    })();

    inout.CreateUserRequestV1 = (function() {

        /**
         * Properties of a CreateUserRequestV1.
         * @memberof inout
         * @interface ICreateUserRequestV1
         * @property {string|null} [password] CreateUserRequestV1 password
         * @property {string|null} [phone] CreateUserRequestV1 phone
         * @property {string|null} [email] CreateUserRequestV1 email
         * @property {string|null} [phoneCode] CreateUserRequestV1 phoneCode
         * @property {string|null} [emailCode] CreateUserRequestV1 emailCode
         */

        /**
         * Constructs a new CreateUserRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateUserRequestV1.
         * @implements ICreateUserRequestV1
         * @constructor
         * @param {inout.ICreateUserRequestV1=} [properties] Properties to set
         */
        function CreateUserRequestV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserRequestV1 password.
         * @member {string} password
         * @memberof inout.CreateUserRequestV1
         * @instance
         */
        CreateUserRequestV1.prototype.password = "";

        /**
         * CreateUserRequestV1 phone.
         * @member {string} phone
         * @memberof inout.CreateUserRequestV1
         * @instance
         */
        CreateUserRequestV1.prototype.phone = "";

        /**
         * CreateUserRequestV1 email.
         * @member {string} email
         * @memberof inout.CreateUserRequestV1
         * @instance
         */
        CreateUserRequestV1.prototype.email = "";

        /**
         * CreateUserRequestV1 phoneCode.
         * @member {string} phoneCode
         * @memberof inout.CreateUserRequestV1
         * @instance
         */
        CreateUserRequestV1.prototype.phoneCode = "";

        /**
         * CreateUserRequestV1 emailCode.
         * @member {string} emailCode
         * @memberof inout.CreateUserRequestV1
         * @instance
         */
        CreateUserRequestV1.prototype.emailCode = "";

        /**
         * Creates a new CreateUserRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateUserRequestV1
         * @static
         * @param {inout.ICreateUserRequestV1=} [properties] Properties to set
         * @returns {inout.CreateUserRequestV1} CreateUserRequestV1 instance
         */
        CreateUserRequestV1.create = function create(properties) {
            return new CreateUserRequestV1(properties);
        };

        /**
         * Encodes the specified CreateUserRequestV1 message. Does not implicitly {@link inout.CreateUserRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateUserRequestV1
         * @static
         * @param {inout.ICreateUserRequestV1} message CreateUserRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.password);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.phone);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.phoneCode != null && Object.hasOwnProperty.call(message, "phoneCode"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.phoneCode);
            if (message.emailCode != null && Object.hasOwnProperty.call(message, "emailCode"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.emailCode);
            return writer;
        };

        /**
         * Encodes the specified CreateUserRequestV1 message, length delimited. Does not implicitly {@link inout.CreateUserRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateUserRequestV1
         * @static
         * @param {inout.ICreateUserRequestV1} message CreateUserRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateUserRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateUserRequestV1} CreateUserRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateUserRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.password = reader.string();
                    break;
                case 2:
                    message.phone = reader.string();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                case 4:
                    message.phoneCode = reader.string();
                    break;
                case 5:
                    message.emailCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateUserRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateUserRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateUserRequestV1} CreateUserRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserRequestV1 message.
         * @function verify
         * @memberof inout.CreateUserRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phoneCode != null && message.hasOwnProperty("phoneCode"))
                if (!$util.isString(message.phoneCode))
                    return "phoneCode: string expected";
            if (message.emailCode != null && message.hasOwnProperty("emailCode"))
                if (!$util.isString(message.emailCode))
                    return "emailCode: string expected";
            return null;
        };

        /**
         * Creates a CreateUserRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateUserRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateUserRequestV1} CreateUserRequestV1
         */
        CreateUserRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateUserRequestV1)
                return object;
            var message = new $root.inout.CreateUserRequestV1();
            if (object.password != null)
                message.password = String(object.password);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.email != null)
                message.email = String(object.email);
            if (object.phoneCode != null)
                message.phoneCode = String(object.phoneCode);
            if (object.emailCode != null)
                message.emailCode = String(object.emailCode);
            return message;
        };

        /**
         * Creates a plain object from a CreateUserRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateUserRequestV1
         * @static
         * @param {inout.CreateUserRequestV1} message CreateUserRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.password = "";
                object.phone = "";
                object.email = "";
                object.phoneCode = "";
                object.emailCode = "";
            }
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phoneCode != null && message.hasOwnProperty("phoneCode"))
                object.phoneCode = message.phoneCode;
            if (message.emailCode != null && message.hasOwnProperty("emailCode"))
                object.emailCode = message.emailCode;
            return object;
        };

        /**
         * Converts this CreateUserRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateUserRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateUserRequestV1;
    })();

    inout.CreateUserBadRequestV1 = (function() {

        /**
         * Properties of a CreateUserBadRequestV1.
         * @memberof inout
         * @interface ICreateUserBadRequestV1
         * @property {Array.<string>|null} [password] CreateUserBadRequestV1 password
         * @property {Array.<string>|null} [phone] CreateUserBadRequestV1 phone
         * @property {Array.<string>|null} [email] CreateUserBadRequestV1 email
         * @property {Array.<string>|null} [phoneCode] CreateUserBadRequestV1 phoneCode
         * @property {Array.<string>|null} [emailCode] CreateUserBadRequestV1 emailCode
         * @property {Array.<string>|null} [errors] CreateUserBadRequestV1 errors
         */

        /**
         * Constructs a new CreateUserBadRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateUserBadRequestV1.
         * @implements ICreateUserBadRequestV1
         * @constructor
         * @param {inout.ICreateUserBadRequestV1=} [properties] Properties to set
         */
        function CreateUserBadRequestV1(properties) {
            this.password = [];
            this.phone = [];
            this.email = [];
            this.phoneCode = [];
            this.emailCode = [];
            this.errors = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserBadRequestV1 password.
         * @member {Array.<string>} password
         * @memberof inout.CreateUserBadRequestV1
         * @instance
         */
        CreateUserBadRequestV1.prototype.password = $util.emptyArray;

        /**
         * CreateUserBadRequestV1 phone.
         * @member {Array.<string>} phone
         * @memberof inout.CreateUserBadRequestV1
         * @instance
         */
        CreateUserBadRequestV1.prototype.phone = $util.emptyArray;

        /**
         * CreateUserBadRequestV1 email.
         * @member {Array.<string>} email
         * @memberof inout.CreateUserBadRequestV1
         * @instance
         */
        CreateUserBadRequestV1.prototype.email = $util.emptyArray;

        /**
         * CreateUserBadRequestV1 phoneCode.
         * @member {Array.<string>} phoneCode
         * @memberof inout.CreateUserBadRequestV1
         * @instance
         */
        CreateUserBadRequestV1.prototype.phoneCode = $util.emptyArray;

        /**
         * CreateUserBadRequestV1 emailCode.
         * @member {Array.<string>} emailCode
         * @memberof inout.CreateUserBadRequestV1
         * @instance
         */
        CreateUserBadRequestV1.prototype.emailCode = $util.emptyArray;

        /**
         * CreateUserBadRequestV1 errors.
         * @member {Array.<string>} errors
         * @memberof inout.CreateUserBadRequestV1
         * @instance
         */
        CreateUserBadRequestV1.prototype.errors = $util.emptyArray;

        /**
         * Creates a new CreateUserBadRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateUserBadRequestV1
         * @static
         * @param {inout.ICreateUserBadRequestV1=} [properties] Properties to set
         * @returns {inout.CreateUserBadRequestV1} CreateUserBadRequestV1 instance
         */
        CreateUserBadRequestV1.create = function create(properties) {
            return new CreateUserBadRequestV1(properties);
        };

        /**
         * Encodes the specified CreateUserBadRequestV1 message. Does not implicitly {@link inout.CreateUserBadRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateUserBadRequestV1
         * @static
         * @param {inout.ICreateUserBadRequestV1} message CreateUserBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserBadRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.password != null && message.password.length)
                for (var i = 0; i < message.password.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.password[i]);
            if (message.phone != null && message.phone.length)
                for (var i = 0; i < message.phone.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.phone[i]);
            if (message.email != null && message.email.length)
                for (var i = 0; i < message.email.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email[i]);
            if (message.phoneCode != null && message.phoneCode.length)
                for (var i = 0; i < message.phoneCode.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.phoneCode[i]);
            if (message.emailCode != null && message.emailCode.length)
                for (var i = 0; i < message.emailCode.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.emailCode[i]);
            if (message.errors != null && message.errors.length)
                for (var i = 0; i < message.errors.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.errors[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateUserBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreateUserBadRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateUserBadRequestV1
         * @static
         * @param {inout.ICreateUserBadRequestV1} message CreateUserBadRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserBadRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserBadRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateUserBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateUserBadRequestV1} CreateUserBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserBadRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateUserBadRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.password && message.password.length))
                        message.password = [];
                    message.password.push(reader.string());
                    break;
                case 2:
                    if (!(message.phone && message.phone.length))
                        message.phone = [];
                    message.phone.push(reader.string());
                    break;
                case 3:
                    if (!(message.email && message.email.length))
                        message.email = [];
                    message.email.push(reader.string());
                    break;
                case 4:
                    if (!(message.phoneCode && message.phoneCode.length))
                        message.phoneCode = [];
                    message.phoneCode.push(reader.string());
                    break;
                case 5:
                    if (!(message.emailCode && message.emailCode.length))
                        message.emailCode = [];
                    message.emailCode.push(reader.string());
                    break;
                case 6:
                    if (!(message.errors && message.errors.length))
                        message.errors = [];
                    message.errors.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateUserBadRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateUserBadRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateUserBadRequestV1} CreateUserBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserBadRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserBadRequestV1 message.
         * @function verify
         * @memberof inout.CreateUserBadRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserBadRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.password != null && message.hasOwnProperty("password")) {
                if (!Array.isArray(message.password))
                    return "password: array expected";
                for (var i = 0; i < message.password.length; ++i)
                    if (!$util.isString(message.password[i]))
                        return "password: string[] expected";
            }
            if (message.phone != null && message.hasOwnProperty("phone")) {
                if (!Array.isArray(message.phone))
                    return "phone: array expected";
                for (var i = 0; i < message.phone.length; ++i)
                    if (!$util.isString(message.phone[i]))
                        return "phone: string[] expected";
            }
            if (message.email != null && message.hasOwnProperty("email")) {
                if (!Array.isArray(message.email))
                    return "email: array expected";
                for (var i = 0; i < message.email.length; ++i)
                    if (!$util.isString(message.email[i]))
                        return "email: string[] expected";
            }
            if (message.phoneCode != null && message.hasOwnProperty("phoneCode")) {
                if (!Array.isArray(message.phoneCode))
                    return "phoneCode: array expected";
                for (var i = 0; i < message.phoneCode.length; ++i)
                    if (!$util.isString(message.phoneCode[i]))
                        return "phoneCode: string[] expected";
            }
            if (message.emailCode != null && message.hasOwnProperty("emailCode")) {
                if (!Array.isArray(message.emailCode))
                    return "emailCode: array expected";
                for (var i = 0; i < message.emailCode.length; ++i)
                    if (!$util.isString(message.emailCode[i]))
                        return "emailCode: string[] expected";
            }
            if (message.errors != null && message.hasOwnProperty("errors")) {
                if (!Array.isArray(message.errors))
                    return "errors: array expected";
                for (var i = 0; i < message.errors.length; ++i)
                    if (!$util.isString(message.errors[i]))
                        return "errors: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CreateUserBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateUserBadRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateUserBadRequestV1} CreateUserBadRequestV1
         */
        CreateUserBadRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateUserBadRequestV1)
                return object;
            var message = new $root.inout.CreateUserBadRequestV1();
            if (object.password) {
                if (!Array.isArray(object.password))
                    throw TypeError(".inout.CreateUserBadRequestV1.password: array expected");
                message.password = [];
                for (var i = 0; i < object.password.length; ++i)
                    message.password[i] = String(object.password[i]);
            }
            if (object.phone) {
                if (!Array.isArray(object.phone))
                    throw TypeError(".inout.CreateUserBadRequestV1.phone: array expected");
                message.phone = [];
                for (var i = 0; i < object.phone.length; ++i)
                    message.phone[i] = String(object.phone[i]);
            }
            if (object.email) {
                if (!Array.isArray(object.email))
                    throw TypeError(".inout.CreateUserBadRequestV1.email: array expected");
                message.email = [];
                for (var i = 0; i < object.email.length; ++i)
                    message.email[i] = String(object.email[i]);
            }
            if (object.phoneCode) {
                if (!Array.isArray(object.phoneCode))
                    throw TypeError(".inout.CreateUserBadRequestV1.phoneCode: array expected");
                message.phoneCode = [];
                for (var i = 0; i < object.phoneCode.length; ++i)
                    message.phoneCode[i] = String(object.phoneCode[i]);
            }
            if (object.emailCode) {
                if (!Array.isArray(object.emailCode))
                    throw TypeError(".inout.CreateUserBadRequestV1.emailCode: array expected");
                message.emailCode = [];
                for (var i = 0; i < object.emailCode.length; ++i)
                    message.emailCode[i] = String(object.emailCode[i]);
            }
            if (object.errors) {
                if (!Array.isArray(object.errors))
                    throw TypeError(".inout.CreateUserBadRequestV1.errors: array expected");
                message.errors = [];
                for (var i = 0; i < object.errors.length; ++i)
                    message.errors[i] = String(object.errors[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateUserBadRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateUserBadRequestV1
         * @static
         * @param {inout.CreateUserBadRequestV1} message CreateUserBadRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserBadRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.password = [];
                object.phone = [];
                object.email = [];
                object.phoneCode = [];
                object.emailCode = [];
                object.errors = [];
            }
            if (message.password && message.password.length) {
                object.password = [];
                for (var j = 0; j < message.password.length; ++j)
                    object.password[j] = message.password[j];
            }
            if (message.phone && message.phone.length) {
                object.phone = [];
                for (var j = 0; j < message.phone.length; ++j)
                    object.phone[j] = message.phone[j];
            }
            if (message.email && message.email.length) {
                object.email = [];
                for (var j = 0; j < message.email.length; ++j)
                    object.email[j] = message.email[j];
            }
            if (message.phoneCode && message.phoneCode.length) {
                object.phoneCode = [];
                for (var j = 0; j < message.phoneCode.length; ++j)
                    object.phoneCode[j] = message.phoneCode[j];
            }
            if (message.emailCode && message.emailCode.length) {
                object.emailCode = [];
                for (var j = 0; j < message.emailCode.length; ++j)
                    object.emailCode[j] = message.emailCode[j];
            }
            if (message.errors && message.errors.length) {
                object.errors = [];
                for (var j = 0; j < message.errors.length; ++j)
                    object.errors[j] = message.errors[j];
            }
            return object;
        };

        /**
         * Converts this CreateUserBadRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateUserBadRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserBadRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateUserBadRequestV1;
    })();

    inout.GetUserResponseV1 = (function() {

        /**
         * Properties of a GetUserResponseV1.
         * @memberof inout
         * @interface IGetUserResponseV1
         * @property {Uint8Array|null} [id] GetUserResponseV1 id
         * @property {number|Long|null} [created] GetUserResponseV1 created
         */

        /**
         * Constructs a new GetUserResponseV1.
         * @memberof inout
         * @classdesc Represents a GetUserResponseV1.
         * @implements IGetUserResponseV1
         * @constructor
         * @param {inout.IGetUserResponseV1=} [properties] Properties to set
         */
        function GetUserResponseV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserResponseV1 id.
         * @member {Uint8Array} id
         * @memberof inout.GetUserResponseV1
         * @instance
         */
        GetUserResponseV1.prototype.id = $util.newBuffer([]);

        /**
         * GetUserResponseV1 created.
         * @member {number|Long} created
         * @memberof inout.GetUserResponseV1
         * @instance
         */
        GetUserResponseV1.prototype.created = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetUserResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.GetUserResponseV1
         * @static
         * @param {inout.IGetUserResponseV1=} [properties] Properties to set
         * @returns {inout.GetUserResponseV1} GetUserResponseV1 instance
         */
        GetUserResponseV1.create = function create(properties) {
            return new GetUserResponseV1(properties);
        };

        /**
         * Encodes the specified GetUserResponseV1 message. Does not implicitly {@link inout.GetUserResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.GetUserResponseV1
         * @static
         * @param {inout.IGetUserResponseV1} message GetUserResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.created != null && Object.hasOwnProperty.call(message, "created"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.created);
            return writer;
        };

        /**
         * Encodes the specified GetUserResponseV1 message, length delimited. Does not implicitly {@link inout.GetUserResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.GetUserResponseV1
         * @static
         * @param {inout.IGetUserResponseV1} message GetUserResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.GetUserResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.GetUserResponseV1} GetUserResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.GetUserResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.created = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.GetUserResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.GetUserResponseV1} GetUserResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserResponseV1 message.
         * @function verify
         * @memberof inout.GetUserResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.created != null && message.hasOwnProperty("created"))
                if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                    return "created: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetUserResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.GetUserResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.GetUserResponseV1} GetUserResponseV1
         */
        GetUserResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.GetUserResponseV1)
                return object;
            var message = new $root.inout.GetUserResponseV1();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.created != null)
                if ($util.Long)
                    (message.created = $util.Long.fromValue(object.created)).unsigned = false;
                else if (typeof object.created === "string")
                    message.created = parseInt(object.created, 10);
                else if (typeof object.created === "number")
                    message.created = object.created;
                else if (typeof object.created === "object")
                    message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetUserResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.GetUserResponseV1
         * @static
         * @param {inout.GetUserResponseV1} message GetUserResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.created = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.created != null && message.hasOwnProperty("created"))
                if (typeof message.created === "number")
                    object.created = options.longs === String ? String(message.created) : message.created;
                else
                    object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber() : message.created;
            return object;
        };

        /**
         * Converts this GetUserResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.GetUserResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserResponseV1;
    })();

    inout.ListUserResponseV1 = (function() {

        /**
         * Properties of a ListUserResponseV1.
         * @memberof inout
         * @interface IListUserResponseV1
         * @property {Array.<inout.IGetUserResponseV1>|null} [data] ListUserResponseV1 data
         */

        /**
         * Constructs a new ListUserResponseV1.
         * @memberof inout
         * @classdesc Represents a ListUserResponseV1.
         * @implements IListUserResponseV1
         * @constructor
         * @param {inout.IListUserResponseV1=} [properties] Properties to set
         */
        function ListUserResponseV1(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListUserResponseV1 data.
         * @member {Array.<inout.IGetUserResponseV1>} data
         * @memberof inout.ListUserResponseV1
         * @instance
         */
        ListUserResponseV1.prototype.data = $util.emptyArray;

        /**
         * Creates a new ListUserResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.ListUserResponseV1
         * @static
         * @param {inout.IListUserResponseV1=} [properties] Properties to set
         * @returns {inout.ListUserResponseV1} ListUserResponseV1 instance
         */
        ListUserResponseV1.create = function create(properties) {
            return new ListUserResponseV1(properties);
        };

        /**
         * Encodes the specified ListUserResponseV1 message. Does not implicitly {@link inout.ListUserResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.ListUserResponseV1
         * @static
         * @param {inout.IListUserResponseV1} message ListUserResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListUserResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.inout.GetUserResponseV1.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListUserResponseV1 message, length delimited. Does not implicitly {@link inout.ListUserResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.ListUserResponseV1
         * @static
         * @param {inout.IListUserResponseV1} message ListUserResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListUserResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListUserResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.ListUserResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.ListUserResponseV1} ListUserResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListUserResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.ListUserResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.inout.GetUserResponseV1.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListUserResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.ListUserResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.ListUserResponseV1} ListUserResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListUserResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListUserResponseV1 message.
         * @function verify
         * @memberof inout.ListUserResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListUserResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.inout.GetUserResponseV1.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListUserResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.ListUserResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.ListUserResponseV1} ListUserResponseV1
         */
        ListUserResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.ListUserResponseV1)
                return object;
            var message = new $root.inout.ListUserResponseV1();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".inout.ListUserResponseV1.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".inout.ListUserResponseV1.data: object expected");
                    message.data[i] = $root.inout.GetUserResponseV1.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListUserResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.ListUserResponseV1
         * @static
         * @param {inout.ListUserResponseV1} message ListUserResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListUserResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.inout.GetUserResponseV1.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this ListUserResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.ListUserResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListUserResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListUserResponseV1;
    })();

    inout.CreateSessionRequestV1 = (function() {

        /**
         * Properties of a CreateSessionRequestV1.
         * @memberof inout
         * @interface ICreateSessionRequestV1
         * @property {string|null} [fingerprint] CreateSessionRequestV1 fingerprint
         * @property {string|null} [userAgent] CreateSessionRequestV1 userAgent
         * @property {inout.CreateSessionRequestV1.IPhoneAndPassword|null} [phoneAndPassword] CreateSessionRequestV1 phoneAndPassword
         * @property {inout.CreateSessionRequestV1.IPhoneAndCode|null} [phoneAndCode] CreateSessionRequestV1 phoneAndCode
         * @property {inout.CreateSessionRequestV1.IEmailAndPassword|null} [emailAndPassword] CreateSessionRequestV1 emailAndPassword
         * @property {inout.CreateSessionRequestV1.IEmailAndCode|null} [emailAndCode] CreateSessionRequestV1 emailAndCode
         * @property {inout.CreateSessionRequestV1.ITokens|null} [tokens] CreateSessionRequestV1 tokens
         */

        /**
         * Constructs a new CreateSessionRequestV1.
         * @memberof inout
         * @classdesc Represents a CreateSessionRequestV1.
         * @implements ICreateSessionRequestV1
         * @constructor
         * @param {inout.ICreateSessionRequestV1=} [properties] Properties to set
         */
        function CreateSessionRequestV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateSessionRequestV1 fingerprint.
         * @member {string} fingerprint
         * @memberof inout.CreateSessionRequestV1
         * @instance
         */
        CreateSessionRequestV1.prototype.fingerprint = "";

        /**
         * CreateSessionRequestV1 userAgent.
         * @member {string} userAgent
         * @memberof inout.CreateSessionRequestV1
         * @instance
         */
        CreateSessionRequestV1.prototype.userAgent = "";

        /**
         * CreateSessionRequestV1 phoneAndPassword.
         * @member {inout.CreateSessionRequestV1.IPhoneAndPassword|null|undefined} phoneAndPassword
         * @memberof inout.CreateSessionRequestV1
         * @instance
         */
        CreateSessionRequestV1.prototype.phoneAndPassword = null;

        /**
         * CreateSessionRequestV1 phoneAndCode.
         * @member {inout.CreateSessionRequestV1.IPhoneAndCode|null|undefined} phoneAndCode
         * @memberof inout.CreateSessionRequestV1
         * @instance
         */
        CreateSessionRequestV1.prototype.phoneAndCode = null;

        /**
         * CreateSessionRequestV1 emailAndPassword.
         * @member {inout.CreateSessionRequestV1.IEmailAndPassword|null|undefined} emailAndPassword
         * @memberof inout.CreateSessionRequestV1
         * @instance
         */
        CreateSessionRequestV1.prototype.emailAndPassword = null;

        /**
         * CreateSessionRequestV1 emailAndCode.
         * @member {inout.CreateSessionRequestV1.IEmailAndCode|null|undefined} emailAndCode
         * @memberof inout.CreateSessionRequestV1
         * @instance
         */
        CreateSessionRequestV1.prototype.emailAndCode = null;

        /**
         * CreateSessionRequestV1 tokens.
         * @member {inout.CreateSessionRequestV1.ITokens|null|undefined} tokens
         * @memberof inout.CreateSessionRequestV1
         * @instance
         */
        CreateSessionRequestV1.prototype.tokens = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CreateSessionRequestV1 data.
         * @member {"phoneAndPassword"|"phoneAndCode"|"emailAndPassword"|"emailAndCode"|"tokens"|undefined} data
         * @memberof inout.CreateSessionRequestV1
         * @instance
         */
        Object.defineProperty(CreateSessionRequestV1.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["phoneAndPassword", "phoneAndCode", "emailAndPassword", "emailAndCode", "tokens"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CreateSessionRequestV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateSessionRequestV1
         * @static
         * @param {inout.ICreateSessionRequestV1=} [properties] Properties to set
         * @returns {inout.CreateSessionRequestV1} CreateSessionRequestV1 instance
         */
        CreateSessionRequestV1.create = function create(properties) {
            return new CreateSessionRequestV1(properties);
        };

        /**
         * Encodes the specified CreateSessionRequestV1 message. Does not implicitly {@link inout.CreateSessionRequestV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateSessionRequestV1
         * @static
         * @param {inout.ICreateSessionRequestV1} message CreateSessionRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateSessionRequestV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fingerprint != null && Object.hasOwnProperty.call(message, "fingerprint"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fingerprint);
            if (message.userAgent != null && Object.hasOwnProperty.call(message, "userAgent"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userAgent);
            if (message.phoneAndPassword != null && Object.hasOwnProperty.call(message, "phoneAndPassword"))
                $root.inout.CreateSessionRequestV1.PhoneAndPassword.encode(message.phoneAndPassword, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.phoneAndCode != null && Object.hasOwnProperty.call(message, "phoneAndCode"))
                $root.inout.CreateSessionRequestV1.PhoneAndCode.encode(message.phoneAndCode, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.emailAndPassword != null && Object.hasOwnProperty.call(message, "emailAndPassword"))
                $root.inout.CreateSessionRequestV1.EmailAndPassword.encode(message.emailAndPassword, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.emailAndCode != null && Object.hasOwnProperty.call(message, "emailAndCode"))
                $root.inout.CreateSessionRequestV1.EmailAndCode.encode(message.emailAndCode, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.tokens != null && Object.hasOwnProperty.call(message, "tokens"))
                $root.inout.CreateSessionRequestV1.Tokens.encode(message.tokens, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateSessionRequestV1 message, length delimited. Does not implicitly {@link inout.CreateSessionRequestV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateSessionRequestV1
         * @static
         * @param {inout.ICreateSessionRequestV1} message CreateSessionRequestV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateSessionRequestV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateSessionRequestV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateSessionRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateSessionRequestV1} CreateSessionRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateSessionRequestV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateSessionRequestV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fingerprint = reader.string();
                    break;
                case 2:
                    message.userAgent = reader.string();
                    break;
                case 3:
                    message.phoneAndPassword = $root.inout.CreateSessionRequestV1.PhoneAndPassword.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.phoneAndCode = $root.inout.CreateSessionRequestV1.PhoneAndCode.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.emailAndPassword = $root.inout.CreateSessionRequestV1.EmailAndPassword.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.emailAndCode = $root.inout.CreateSessionRequestV1.EmailAndCode.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tokens = $root.inout.CreateSessionRequestV1.Tokens.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateSessionRequestV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateSessionRequestV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateSessionRequestV1} CreateSessionRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateSessionRequestV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateSessionRequestV1 message.
         * @function verify
         * @memberof inout.CreateSessionRequestV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateSessionRequestV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.fingerprint != null && message.hasOwnProperty("fingerprint"))
                if (!$util.isString(message.fingerprint))
                    return "fingerprint: string expected";
            if (message.userAgent != null && message.hasOwnProperty("userAgent"))
                if (!$util.isString(message.userAgent))
                    return "userAgent: string expected";
            if (message.phoneAndPassword != null && message.hasOwnProperty("phoneAndPassword")) {
                properties.data = 1;
                {
                    var error = $root.inout.CreateSessionRequestV1.PhoneAndPassword.verify(message.phoneAndPassword);
                    if (error)
                        return "phoneAndPassword." + error;
                }
            }
            if (message.phoneAndCode != null && message.hasOwnProperty("phoneAndCode")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.inout.CreateSessionRequestV1.PhoneAndCode.verify(message.phoneAndCode);
                    if (error)
                        return "phoneAndCode." + error;
                }
            }
            if (message.emailAndPassword != null && message.hasOwnProperty("emailAndPassword")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.inout.CreateSessionRequestV1.EmailAndPassword.verify(message.emailAndPassword);
                    if (error)
                        return "emailAndPassword." + error;
                }
            }
            if (message.emailAndCode != null && message.hasOwnProperty("emailAndCode")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.inout.CreateSessionRequestV1.EmailAndCode.verify(message.emailAndCode);
                    if (error)
                        return "emailAndCode." + error;
                }
            }
            if (message.tokens != null && message.hasOwnProperty("tokens")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    var error = $root.inout.CreateSessionRequestV1.Tokens.verify(message.tokens);
                    if (error)
                        return "tokens." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CreateSessionRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateSessionRequestV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateSessionRequestV1} CreateSessionRequestV1
         */
        CreateSessionRequestV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateSessionRequestV1)
                return object;
            var message = new $root.inout.CreateSessionRequestV1();
            if (object.fingerprint != null)
                message.fingerprint = String(object.fingerprint);
            if (object.userAgent != null)
                message.userAgent = String(object.userAgent);
            if (object.phoneAndPassword != null) {
                if (typeof object.phoneAndPassword !== "object")
                    throw TypeError(".inout.CreateSessionRequestV1.phoneAndPassword: object expected");
                message.phoneAndPassword = $root.inout.CreateSessionRequestV1.PhoneAndPassword.fromObject(object.phoneAndPassword);
            }
            if (object.phoneAndCode != null) {
                if (typeof object.phoneAndCode !== "object")
                    throw TypeError(".inout.CreateSessionRequestV1.phoneAndCode: object expected");
                message.phoneAndCode = $root.inout.CreateSessionRequestV1.PhoneAndCode.fromObject(object.phoneAndCode);
            }
            if (object.emailAndPassword != null) {
                if (typeof object.emailAndPassword !== "object")
                    throw TypeError(".inout.CreateSessionRequestV1.emailAndPassword: object expected");
                message.emailAndPassword = $root.inout.CreateSessionRequestV1.EmailAndPassword.fromObject(object.emailAndPassword);
            }
            if (object.emailAndCode != null) {
                if (typeof object.emailAndCode !== "object")
                    throw TypeError(".inout.CreateSessionRequestV1.emailAndCode: object expected");
                message.emailAndCode = $root.inout.CreateSessionRequestV1.EmailAndCode.fromObject(object.emailAndCode);
            }
            if (object.tokens != null) {
                if (typeof object.tokens !== "object")
                    throw TypeError(".inout.CreateSessionRequestV1.tokens: object expected");
                message.tokens = $root.inout.CreateSessionRequestV1.Tokens.fromObject(object.tokens);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateSessionRequestV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateSessionRequestV1
         * @static
         * @param {inout.CreateSessionRequestV1} message CreateSessionRequestV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateSessionRequestV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fingerprint = "";
                object.userAgent = "";
            }
            if (message.fingerprint != null && message.hasOwnProperty("fingerprint"))
                object.fingerprint = message.fingerprint;
            if (message.userAgent != null && message.hasOwnProperty("userAgent"))
                object.userAgent = message.userAgent;
            if (message.phoneAndPassword != null && message.hasOwnProperty("phoneAndPassword")) {
                object.phoneAndPassword = $root.inout.CreateSessionRequestV1.PhoneAndPassword.toObject(message.phoneAndPassword, options);
                if (options.oneofs)
                    object.data = "phoneAndPassword";
            }
            if (message.phoneAndCode != null && message.hasOwnProperty("phoneAndCode")) {
                object.phoneAndCode = $root.inout.CreateSessionRequestV1.PhoneAndCode.toObject(message.phoneAndCode, options);
                if (options.oneofs)
                    object.data = "phoneAndCode";
            }
            if (message.emailAndPassword != null && message.hasOwnProperty("emailAndPassword")) {
                object.emailAndPassword = $root.inout.CreateSessionRequestV1.EmailAndPassword.toObject(message.emailAndPassword, options);
                if (options.oneofs)
                    object.data = "emailAndPassword";
            }
            if (message.emailAndCode != null && message.hasOwnProperty("emailAndCode")) {
                object.emailAndCode = $root.inout.CreateSessionRequestV1.EmailAndCode.toObject(message.emailAndCode, options);
                if (options.oneofs)
                    object.data = "emailAndCode";
            }
            if (message.tokens != null && message.hasOwnProperty("tokens")) {
                object.tokens = $root.inout.CreateSessionRequestV1.Tokens.toObject(message.tokens, options);
                if (options.oneofs)
                    object.data = "tokens";
            }
            return object;
        };

        /**
         * Converts this CreateSessionRequestV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateSessionRequestV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateSessionRequestV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CreateSessionRequestV1.PhoneAndPassword = (function() {

            /**
             * Properties of a PhoneAndPassword.
             * @memberof inout.CreateSessionRequestV1
             * @interface IPhoneAndPassword
             * @property {string|null} [phone] PhoneAndPassword phone
             * @property {string|null} [password] PhoneAndPassword password
             */

            /**
             * Constructs a new PhoneAndPassword.
             * @memberof inout.CreateSessionRequestV1
             * @classdesc Represents a PhoneAndPassword.
             * @implements IPhoneAndPassword
             * @constructor
             * @param {inout.CreateSessionRequestV1.IPhoneAndPassword=} [properties] Properties to set
             */
            function PhoneAndPassword(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PhoneAndPassword phone.
             * @member {string} phone
             * @memberof inout.CreateSessionRequestV1.PhoneAndPassword
             * @instance
             */
            PhoneAndPassword.prototype.phone = "";

            /**
             * PhoneAndPassword password.
             * @member {string} password
             * @memberof inout.CreateSessionRequestV1.PhoneAndPassword
             * @instance
             */
            PhoneAndPassword.prototype.password = "";

            /**
             * Creates a new PhoneAndPassword instance using the specified properties.
             * @function create
             * @memberof inout.CreateSessionRequestV1.PhoneAndPassword
             * @static
             * @param {inout.CreateSessionRequestV1.IPhoneAndPassword=} [properties] Properties to set
             * @returns {inout.CreateSessionRequestV1.PhoneAndPassword} PhoneAndPassword instance
             */
            PhoneAndPassword.create = function create(properties) {
                return new PhoneAndPassword(properties);
            };

            /**
             * Encodes the specified PhoneAndPassword message. Does not implicitly {@link inout.CreateSessionRequestV1.PhoneAndPassword.verify|verify} messages.
             * @function encode
             * @memberof inout.CreateSessionRequestV1.PhoneAndPassword
             * @static
             * @param {inout.CreateSessionRequestV1.IPhoneAndPassword} message PhoneAndPassword message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhoneAndPassword.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.phone);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                return writer;
            };

            /**
             * Encodes the specified PhoneAndPassword message, length delimited. Does not implicitly {@link inout.CreateSessionRequestV1.PhoneAndPassword.verify|verify} messages.
             * @function encodeDelimited
             * @memberof inout.CreateSessionRequestV1.PhoneAndPassword
             * @static
             * @param {inout.CreateSessionRequestV1.IPhoneAndPassword} message PhoneAndPassword message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhoneAndPassword.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PhoneAndPassword message from the specified reader or buffer.
             * @function decode
             * @memberof inout.CreateSessionRequestV1.PhoneAndPassword
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {inout.CreateSessionRequestV1.PhoneAndPassword} PhoneAndPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhoneAndPassword.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateSessionRequestV1.PhoneAndPassword();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.phone = reader.string();
                        break;
                    case 2:
                        message.password = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PhoneAndPassword message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof inout.CreateSessionRequestV1.PhoneAndPassword
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {inout.CreateSessionRequestV1.PhoneAndPassword} PhoneAndPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhoneAndPassword.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PhoneAndPassword message.
             * @function verify
             * @memberof inout.CreateSessionRequestV1.PhoneAndPassword
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PhoneAndPassword.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.phone != null && message.hasOwnProperty("phone"))
                    if (!$util.isString(message.phone))
                        return "phone: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                return null;
            };

            /**
             * Creates a PhoneAndPassword message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof inout.CreateSessionRequestV1.PhoneAndPassword
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {inout.CreateSessionRequestV1.PhoneAndPassword} PhoneAndPassword
             */
            PhoneAndPassword.fromObject = function fromObject(object) {
                if (object instanceof $root.inout.CreateSessionRequestV1.PhoneAndPassword)
                    return object;
                var message = new $root.inout.CreateSessionRequestV1.PhoneAndPassword();
                if (object.phone != null)
                    message.phone = String(object.phone);
                if (object.password != null)
                    message.password = String(object.password);
                return message;
            };

            /**
             * Creates a plain object from a PhoneAndPassword message. Also converts values to other types if specified.
             * @function toObject
             * @memberof inout.CreateSessionRequestV1.PhoneAndPassword
             * @static
             * @param {inout.CreateSessionRequestV1.PhoneAndPassword} message PhoneAndPassword
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PhoneAndPassword.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.phone = "";
                    object.password = "";
                }
                if (message.phone != null && message.hasOwnProperty("phone"))
                    object.phone = message.phone;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };

            /**
             * Converts this PhoneAndPassword to JSON.
             * @function toJSON
             * @memberof inout.CreateSessionRequestV1.PhoneAndPassword
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PhoneAndPassword.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PhoneAndPassword;
        })();

        CreateSessionRequestV1.PhoneAndCode = (function() {

            /**
             * Properties of a PhoneAndCode.
             * @memberof inout.CreateSessionRequestV1
             * @interface IPhoneAndCode
             * @property {string|null} [phone] PhoneAndCode phone
             * @property {string|null} [code] PhoneAndCode code
             */

            /**
             * Constructs a new PhoneAndCode.
             * @memberof inout.CreateSessionRequestV1
             * @classdesc Represents a PhoneAndCode.
             * @implements IPhoneAndCode
             * @constructor
             * @param {inout.CreateSessionRequestV1.IPhoneAndCode=} [properties] Properties to set
             */
            function PhoneAndCode(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PhoneAndCode phone.
             * @member {string} phone
             * @memberof inout.CreateSessionRequestV1.PhoneAndCode
             * @instance
             */
            PhoneAndCode.prototype.phone = "";

            /**
             * PhoneAndCode code.
             * @member {string} code
             * @memberof inout.CreateSessionRequestV1.PhoneAndCode
             * @instance
             */
            PhoneAndCode.prototype.code = "";

            /**
             * Creates a new PhoneAndCode instance using the specified properties.
             * @function create
             * @memberof inout.CreateSessionRequestV1.PhoneAndCode
             * @static
             * @param {inout.CreateSessionRequestV1.IPhoneAndCode=} [properties] Properties to set
             * @returns {inout.CreateSessionRequestV1.PhoneAndCode} PhoneAndCode instance
             */
            PhoneAndCode.create = function create(properties) {
                return new PhoneAndCode(properties);
            };

            /**
             * Encodes the specified PhoneAndCode message. Does not implicitly {@link inout.CreateSessionRequestV1.PhoneAndCode.verify|verify} messages.
             * @function encode
             * @memberof inout.CreateSessionRequestV1.PhoneAndCode
             * @static
             * @param {inout.CreateSessionRequestV1.IPhoneAndCode} message PhoneAndCode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhoneAndCode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.phone);
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
                return writer;
            };

            /**
             * Encodes the specified PhoneAndCode message, length delimited. Does not implicitly {@link inout.CreateSessionRequestV1.PhoneAndCode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof inout.CreateSessionRequestV1.PhoneAndCode
             * @static
             * @param {inout.CreateSessionRequestV1.IPhoneAndCode} message PhoneAndCode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhoneAndCode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PhoneAndCode message from the specified reader or buffer.
             * @function decode
             * @memberof inout.CreateSessionRequestV1.PhoneAndCode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {inout.CreateSessionRequestV1.PhoneAndCode} PhoneAndCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhoneAndCode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateSessionRequestV1.PhoneAndCode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.phone = reader.string();
                        break;
                    case 2:
                        message.code = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PhoneAndCode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof inout.CreateSessionRequestV1.PhoneAndCode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {inout.CreateSessionRequestV1.PhoneAndCode} PhoneAndCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhoneAndCode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PhoneAndCode message.
             * @function verify
             * @memberof inout.CreateSessionRequestV1.PhoneAndCode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PhoneAndCode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.phone != null && message.hasOwnProperty("phone"))
                    if (!$util.isString(message.phone))
                        return "phone: string expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isString(message.code))
                        return "code: string expected";
                return null;
            };

            /**
             * Creates a PhoneAndCode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof inout.CreateSessionRequestV1.PhoneAndCode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {inout.CreateSessionRequestV1.PhoneAndCode} PhoneAndCode
             */
            PhoneAndCode.fromObject = function fromObject(object) {
                if (object instanceof $root.inout.CreateSessionRequestV1.PhoneAndCode)
                    return object;
                var message = new $root.inout.CreateSessionRequestV1.PhoneAndCode();
                if (object.phone != null)
                    message.phone = String(object.phone);
                if (object.code != null)
                    message.code = String(object.code);
                return message;
            };

            /**
             * Creates a plain object from a PhoneAndCode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof inout.CreateSessionRequestV1.PhoneAndCode
             * @static
             * @param {inout.CreateSessionRequestV1.PhoneAndCode} message PhoneAndCode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PhoneAndCode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.phone = "";
                    object.code = "";
                }
                if (message.phone != null && message.hasOwnProperty("phone"))
                    object.phone = message.phone;
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                return object;
            };

            /**
             * Converts this PhoneAndCode to JSON.
             * @function toJSON
             * @memberof inout.CreateSessionRequestV1.PhoneAndCode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PhoneAndCode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PhoneAndCode;
        })();

        CreateSessionRequestV1.EmailAndPassword = (function() {

            /**
             * Properties of an EmailAndPassword.
             * @memberof inout.CreateSessionRequestV1
             * @interface IEmailAndPassword
             * @property {string|null} [email] EmailAndPassword email
             * @property {string|null} [password] EmailAndPassword password
             */

            /**
             * Constructs a new EmailAndPassword.
             * @memberof inout.CreateSessionRequestV1
             * @classdesc Represents an EmailAndPassword.
             * @implements IEmailAndPassword
             * @constructor
             * @param {inout.CreateSessionRequestV1.IEmailAndPassword=} [properties] Properties to set
             */
            function EmailAndPassword(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EmailAndPassword email.
             * @member {string} email
             * @memberof inout.CreateSessionRequestV1.EmailAndPassword
             * @instance
             */
            EmailAndPassword.prototype.email = "";

            /**
             * EmailAndPassword password.
             * @member {string} password
             * @memberof inout.CreateSessionRequestV1.EmailAndPassword
             * @instance
             */
            EmailAndPassword.prototype.password = "";

            /**
             * Creates a new EmailAndPassword instance using the specified properties.
             * @function create
             * @memberof inout.CreateSessionRequestV1.EmailAndPassword
             * @static
             * @param {inout.CreateSessionRequestV1.IEmailAndPassword=} [properties] Properties to set
             * @returns {inout.CreateSessionRequestV1.EmailAndPassword} EmailAndPassword instance
             */
            EmailAndPassword.create = function create(properties) {
                return new EmailAndPassword(properties);
            };

            /**
             * Encodes the specified EmailAndPassword message. Does not implicitly {@link inout.CreateSessionRequestV1.EmailAndPassword.verify|verify} messages.
             * @function encode
             * @memberof inout.CreateSessionRequestV1.EmailAndPassword
             * @static
             * @param {inout.CreateSessionRequestV1.IEmailAndPassword} message EmailAndPassword message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EmailAndPassword.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                return writer;
            };

            /**
             * Encodes the specified EmailAndPassword message, length delimited. Does not implicitly {@link inout.CreateSessionRequestV1.EmailAndPassword.verify|verify} messages.
             * @function encodeDelimited
             * @memberof inout.CreateSessionRequestV1.EmailAndPassword
             * @static
             * @param {inout.CreateSessionRequestV1.IEmailAndPassword} message EmailAndPassword message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EmailAndPassword.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EmailAndPassword message from the specified reader or buffer.
             * @function decode
             * @memberof inout.CreateSessionRequestV1.EmailAndPassword
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {inout.CreateSessionRequestV1.EmailAndPassword} EmailAndPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EmailAndPassword.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateSessionRequestV1.EmailAndPassword();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.email = reader.string();
                        break;
                    case 2:
                        message.password = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EmailAndPassword message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof inout.CreateSessionRequestV1.EmailAndPassword
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {inout.CreateSessionRequestV1.EmailAndPassword} EmailAndPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EmailAndPassword.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EmailAndPassword message.
             * @function verify
             * @memberof inout.CreateSessionRequestV1.EmailAndPassword
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EmailAndPassword.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.email != null && message.hasOwnProperty("email"))
                    if (!$util.isString(message.email))
                        return "email: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                return null;
            };

            /**
             * Creates an EmailAndPassword message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof inout.CreateSessionRequestV1.EmailAndPassword
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {inout.CreateSessionRequestV1.EmailAndPassword} EmailAndPassword
             */
            EmailAndPassword.fromObject = function fromObject(object) {
                if (object instanceof $root.inout.CreateSessionRequestV1.EmailAndPassword)
                    return object;
                var message = new $root.inout.CreateSessionRequestV1.EmailAndPassword();
                if (object.email != null)
                    message.email = String(object.email);
                if (object.password != null)
                    message.password = String(object.password);
                return message;
            };

            /**
             * Creates a plain object from an EmailAndPassword message. Also converts values to other types if specified.
             * @function toObject
             * @memberof inout.CreateSessionRequestV1.EmailAndPassword
             * @static
             * @param {inout.CreateSessionRequestV1.EmailAndPassword} message EmailAndPassword
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EmailAndPassword.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.email = "";
                    object.password = "";
                }
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };

            /**
             * Converts this EmailAndPassword to JSON.
             * @function toJSON
             * @memberof inout.CreateSessionRequestV1.EmailAndPassword
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EmailAndPassword.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EmailAndPassword;
        })();

        CreateSessionRequestV1.EmailAndCode = (function() {

            /**
             * Properties of an EmailAndCode.
             * @memberof inout.CreateSessionRequestV1
             * @interface IEmailAndCode
             * @property {string|null} [email] EmailAndCode email
             * @property {string|null} [code] EmailAndCode code
             */

            /**
             * Constructs a new EmailAndCode.
             * @memberof inout.CreateSessionRequestV1
             * @classdesc Represents an EmailAndCode.
             * @implements IEmailAndCode
             * @constructor
             * @param {inout.CreateSessionRequestV1.IEmailAndCode=} [properties] Properties to set
             */
            function EmailAndCode(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EmailAndCode email.
             * @member {string} email
             * @memberof inout.CreateSessionRequestV1.EmailAndCode
             * @instance
             */
            EmailAndCode.prototype.email = "";

            /**
             * EmailAndCode code.
             * @member {string} code
             * @memberof inout.CreateSessionRequestV1.EmailAndCode
             * @instance
             */
            EmailAndCode.prototype.code = "";

            /**
             * Creates a new EmailAndCode instance using the specified properties.
             * @function create
             * @memberof inout.CreateSessionRequestV1.EmailAndCode
             * @static
             * @param {inout.CreateSessionRequestV1.IEmailAndCode=} [properties] Properties to set
             * @returns {inout.CreateSessionRequestV1.EmailAndCode} EmailAndCode instance
             */
            EmailAndCode.create = function create(properties) {
                return new EmailAndCode(properties);
            };

            /**
             * Encodes the specified EmailAndCode message. Does not implicitly {@link inout.CreateSessionRequestV1.EmailAndCode.verify|verify} messages.
             * @function encode
             * @memberof inout.CreateSessionRequestV1.EmailAndCode
             * @static
             * @param {inout.CreateSessionRequestV1.IEmailAndCode} message EmailAndCode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EmailAndCode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
                return writer;
            };

            /**
             * Encodes the specified EmailAndCode message, length delimited. Does not implicitly {@link inout.CreateSessionRequestV1.EmailAndCode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof inout.CreateSessionRequestV1.EmailAndCode
             * @static
             * @param {inout.CreateSessionRequestV1.IEmailAndCode} message EmailAndCode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EmailAndCode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EmailAndCode message from the specified reader or buffer.
             * @function decode
             * @memberof inout.CreateSessionRequestV1.EmailAndCode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {inout.CreateSessionRequestV1.EmailAndCode} EmailAndCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EmailAndCode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateSessionRequestV1.EmailAndCode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.email = reader.string();
                        break;
                    case 2:
                        message.code = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EmailAndCode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof inout.CreateSessionRequestV1.EmailAndCode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {inout.CreateSessionRequestV1.EmailAndCode} EmailAndCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EmailAndCode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EmailAndCode message.
             * @function verify
             * @memberof inout.CreateSessionRequestV1.EmailAndCode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EmailAndCode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.email != null && message.hasOwnProperty("email"))
                    if (!$util.isString(message.email))
                        return "email: string expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isString(message.code))
                        return "code: string expected";
                return null;
            };

            /**
             * Creates an EmailAndCode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof inout.CreateSessionRequestV1.EmailAndCode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {inout.CreateSessionRequestV1.EmailAndCode} EmailAndCode
             */
            EmailAndCode.fromObject = function fromObject(object) {
                if (object instanceof $root.inout.CreateSessionRequestV1.EmailAndCode)
                    return object;
                var message = new $root.inout.CreateSessionRequestV1.EmailAndCode();
                if (object.email != null)
                    message.email = String(object.email);
                if (object.code != null)
                    message.code = String(object.code);
                return message;
            };

            /**
             * Creates a plain object from an EmailAndCode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof inout.CreateSessionRequestV1.EmailAndCode
             * @static
             * @param {inout.CreateSessionRequestV1.EmailAndCode} message EmailAndCode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EmailAndCode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.email = "";
                    object.code = "";
                }
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                return object;
            };

            /**
             * Converts this EmailAndCode to JSON.
             * @function toJSON
             * @memberof inout.CreateSessionRequestV1.EmailAndCode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EmailAndCode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EmailAndCode;
        })();

        CreateSessionRequestV1.Tokens = (function() {

            /**
             * Properties of a Tokens.
             * @memberof inout.CreateSessionRequestV1
             * @interface ITokens
             * @property {string|null} [accessToken] Tokens accessToken
             * @property {string|null} [refreshToken] Tokens refreshToken
             */

            /**
             * Constructs a new Tokens.
             * @memberof inout.CreateSessionRequestV1
             * @classdesc Represents a Tokens.
             * @implements ITokens
             * @constructor
             * @param {inout.CreateSessionRequestV1.ITokens=} [properties] Properties to set
             */
            function Tokens(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Tokens accessToken.
             * @member {string} accessToken
             * @memberof inout.CreateSessionRequestV1.Tokens
             * @instance
             */
            Tokens.prototype.accessToken = "";

            /**
             * Tokens refreshToken.
             * @member {string} refreshToken
             * @memberof inout.CreateSessionRequestV1.Tokens
             * @instance
             */
            Tokens.prototype.refreshToken = "";

            /**
             * Creates a new Tokens instance using the specified properties.
             * @function create
             * @memberof inout.CreateSessionRequestV1.Tokens
             * @static
             * @param {inout.CreateSessionRequestV1.ITokens=} [properties] Properties to set
             * @returns {inout.CreateSessionRequestV1.Tokens} Tokens instance
             */
            Tokens.create = function create(properties) {
                return new Tokens(properties);
            };

            /**
             * Encodes the specified Tokens message. Does not implicitly {@link inout.CreateSessionRequestV1.Tokens.verify|verify} messages.
             * @function encode
             * @memberof inout.CreateSessionRequestV1.Tokens
             * @static
             * @param {inout.CreateSessionRequestV1.ITokens} message Tokens message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tokens.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.accessToken);
                if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.refreshToken);
                return writer;
            };

            /**
             * Encodes the specified Tokens message, length delimited. Does not implicitly {@link inout.CreateSessionRequestV1.Tokens.verify|verify} messages.
             * @function encodeDelimited
             * @memberof inout.CreateSessionRequestV1.Tokens
             * @static
             * @param {inout.CreateSessionRequestV1.ITokens} message Tokens message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tokens.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Tokens message from the specified reader or buffer.
             * @function decode
             * @memberof inout.CreateSessionRequestV1.Tokens
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {inout.CreateSessionRequestV1.Tokens} Tokens
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tokens.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateSessionRequestV1.Tokens();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.accessToken = reader.string();
                        break;
                    case 2:
                        message.refreshToken = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Tokens message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof inout.CreateSessionRequestV1.Tokens
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {inout.CreateSessionRequestV1.Tokens} Tokens
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tokens.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Tokens message.
             * @function verify
             * @memberof inout.CreateSessionRequestV1.Tokens
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Tokens.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                    if (!$util.isString(message.accessToken))
                        return "accessToken: string expected";
                if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                    if (!$util.isString(message.refreshToken))
                        return "refreshToken: string expected";
                return null;
            };

            /**
             * Creates a Tokens message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof inout.CreateSessionRequestV1.Tokens
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {inout.CreateSessionRequestV1.Tokens} Tokens
             */
            Tokens.fromObject = function fromObject(object) {
                if (object instanceof $root.inout.CreateSessionRequestV1.Tokens)
                    return object;
                var message = new $root.inout.CreateSessionRequestV1.Tokens();
                if (object.accessToken != null)
                    message.accessToken = String(object.accessToken);
                if (object.refreshToken != null)
                    message.refreshToken = String(object.refreshToken);
                return message;
            };

            /**
             * Creates a plain object from a Tokens message. Also converts values to other types if specified.
             * @function toObject
             * @memberof inout.CreateSessionRequestV1.Tokens
             * @static
             * @param {inout.CreateSessionRequestV1.Tokens} message Tokens
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Tokens.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.accessToken = "";
                    object.refreshToken = "";
                }
                if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                    object.accessToken = message.accessToken;
                if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                    object.refreshToken = message.refreshToken;
                return object;
            };

            /**
             * Converts this Tokens to JSON.
             * @function toJSON
             * @memberof inout.CreateSessionRequestV1.Tokens
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tokens.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Tokens;
        })();

        return CreateSessionRequestV1;
    })();

    inout.CreateSessionBadRequestResponseV1 = (function() {

        /**
         * Properties of a CreateSessionBadRequestResponseV1.
         * @memberof inout
         * @interface ICreateSessionBadRequestResponseV1
         * @property {Array.<string>|null} [email] CreateSessionBadRequestResponseV1 email
         * @property {Array.<string>|null} [emailCode] CreateSessionBadRequestResponseV1 emailCode
         * @property {Array.<string>|null} [phone] CreateSessionBadRequestResponseV1 phone
         * @property {Array.<string>|null} [phoneCode] CreateSessionBadRequestResponseV1 phoneCode
         * @property {Array.<string>|null} [password] CreateSessionBadRequestResponseV1 password
         * @property {Array.<string>|null} [fingerprint] CreateSessionBadRequestResponseV1 fingerprint
         * @property {Array.<string>|null} [userAgent] CreateSessionBadRequestResponseV1 userAgent
         */

        /**
         * Constructs a new CreateSessionBadRequestResponseV1.
         * @memberof inout
         * @classdesc Represents a CreateSessionBadRequestResponseV1.
         * @implements ICreateSessionBadRequestResponseV1
         * @constructor
         * @param {inout.ICreateSessionBadRequestResponseV1=} [properties] Properties to set
         */
        function CreateSessionBadRequestResponseV1(properties) {
            this.email = [];
            this.emailCode = [];
            this.phone = [];
            this.phoneCode = [];
            this.password = [];
            this.fingerprint = [];
            this.userAgent = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateSessionBadRequestResponseV1 email.
         * @member {Array.<string>} email
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @instance
         */
        CreateSessionBadRequestResponseV1.prototype.email = $util.emptyArray;

        /**
         * CreateSessionBadRequestResponseV1 emailCode.
         * @member {Array.<string>} emailCode
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @instance
         */
        CreateSessionBadRequestResponseV1.prototype.emailCode = $util.emptyArray;

        /**
         * CreateSessionBadRequestResponseV1 phone.
         * @member {Array.<string>} phone
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @instance
         */
        CreateSessionBadRequestResponseV1.prototype.phone = $util.emptyArray;

        /**
         * CreateSessionBadRequestResponseV1 phoneCode.
         * @member {Array.<string>} phoneCode
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @instance
         */
        CreateSessionBadRequestResponseV1.prototype.phoneCode = $util.emptyArray;

        /**
         * CreateSessionBadRequestResponseV1 password.
         * @member {Array.<string>} password
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @instance
         */
        CreateSessionBadRequestResponseV1.prototype.password = $util.emptyArray;

        /**
         * CreateSessionBadRequestResponseV1 fingerprint.
         * @member {Array.<string>} fingerprint
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @instance
         */
        CreateSessionBadRequestResponseV1.prototype.fingerprint = $util.emptyArray;

        /**
         * CreateSessionBadRequestResponseV1 userAgent.
         * @member {Array.<string>} userAgent
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @instance
         */
        CreateSessionBadRequestResponseV1.prototype.userAgent = $util.emptyArray;

        /**
         * Creates a new CreateSessionBadRequestResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @static
         * @param {inout.ICreateSessionBadRequestResponseV1=} [properties] Properties to set
         * @returns {inout.CreateSessionBadRequestResponseV1} CreateSessionBadRequestResponseV1 instance
         */
        CreateSessionBadRequestResponseV1.create = function create(properties) {
            return new CreateSessionBadRequestResponseV1(properties);
        };

        /**
         * Encodes the specified CreateSessionBadRequestResponseV1 message. Does not implicitly {@link inout.CreateSessionBadRequestResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @static
         * @param {inout.ICreateSessionBadRequestResponseV1} message CreateSessionBadRequestResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateSessionBadRequestResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && message.email.length)
                for (var i = 0; i < message.email.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.email[i]);
            if (message.emailCode != null && message.emailCode.length)
                for (var i = 0; i < message.emailCode.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.emailCode[i]);
            if (message.phone != null && message.phone.length)
                for (var i = 0; i < message.phone.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.phone[i]);
            if (message.phoneCode != null && message.phoneCode.length)
                for (var i = 0; i < message.phoneCode.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.phoneCode[i]);
            if (message.password != null && message.password.length)
                for (var i = 0; i < message.password.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.password[i]);
            if (message.fingerprint != null && message.fingerprint.length)
                for (var i = 0; i < message.fingerprint.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.fingerprint[i]);
            if (message.userAgent != null && message.userAgent.length)
                for (var i = 0; i < message.userAgent.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.userAgent[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateSessionBadRequestResponseV1 message, length delimited. Does not implicitly {@link inout.CreateSessionBadRequestResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @static
         * @param {inout.ICreateSessionBadRequestResponseV1} message CreateSessionBadRequestResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateSessionBadRequestResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateSessionBadRequestResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateSessionBadRequestResponseV1} CreateSessionBadRequestResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateSessionBadRequestResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateSessionBadRequestResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.email && message.email.length))
                        message.email = [];
                    message.email.push(reader.string());
                    break;
                case 2:
                    if (!(message.emailCode && message.emailCode.length))
                        message.emailCode = [];
                    message.emailCode.push(reader.string());
                    break;
                case 3:
                    if (!(message.phone && message.phone.length))
                        message.phone = [];
                    message.phone.push(reader.string());
                    break;
                case 4:
                    if (!(message.phoneCode && message.phoneCode.length))
                        message.phoneCode = [];
                    message.phoneCode.push(reader.string());
                    break;
                case 5:
                    if (!(message.password && message.password.length))
                        message.password = [];
                    message.password.push(reader.string());
                    break;
                case 6:
                    if (!(message.fingerprint && message.fingerprint.length))
                        message.fingerprint = [];
                    message.fingerprint.push(reader.string());
                    break;
                case 7:
                    if (!(message.userAgent && message.userAgent.length))
                        message.userAgent = [];
                    message.userAgent.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateSessionBadRequestResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateSessionBadRequestResponseV1} CreateSessionBadRequestResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateSessionBadRequestResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateSessionBadRequestResponseV1 message.
         * @function verify
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateSessionBadRequestResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email")) {
                if (!Array.isArray(message.email))
                    return "email: array expected";
                for (var i = 0; i < message.email.length; ++i)
                    if (!$util.isString(message.email[i]))
                        return "email: string[] expected";
            }
            if (message.emailCode != null && message.hasOwnProperty("emailCode")) {
                if (!Array.isArray(message.emailCode))
                    return "emailCode: array expected";
                for (var i = 0; i < message.emailCode.length; ++i)
                    if (!$util.isString(message.emailCode[i]))
                        return "emailCode: string[] expected";
            }
            if (message.phone != null && message.hasOwnProperty("phone")) {
                if (!Array.isArray(message.phone))
                    return "phone: array expected";
                for (var i = 0; i < message.phone.length; ++i)
                    if (!$util.isString(message.phone[i]))
                        return "phone: string[] expected";
            }
            if (message.phoneCode != null && message.hasOwnProperty("phoneCode")) {
                if (!Array.isArray(message.phoneCode))
                    return "phoneCode: array expected";
                for (var i = 0; i < message.phoneCode.length; ++i)
                    if (!$util.isString(message.phoneCode[i]))
                        return "phoneCode: string[] expected";
            }
            if (message.password != null && message.hasOwnProperty("password")) {
                if (!Array.isArray(message.password))
                    return "password: array expected";
                for (var i = 0; i < message.password.length; ++i)
                    if (!$util.isString(message.password[i]))
                        return "password: string[] expected";
            }
            if (message.fingerprint != null && message.hasOwnProperty("fingerprint")) {
                if (!Array.isArray(message.fingerprint))
                    return "fingerprint: array expected";
                for (var i = 0; i < message.fingerprint.length; ++i)
                    if (!$util.isString(message.fingerprint[i]))
                        return "fingerprint: string[] expected";
            }
            if (message.userAgent != null && message.hasOwnProperty("userAgent")) {
                if (!Array.isArray(message.userAgent))
                    return "userAgent: array expected";
                for (var i = 0; i < message.userAgent.length; ++i)
                    if (!$util.isString(message.userAgent[i]))
                        return "userAgent: string[] expected";
            }
            return null;
        };

        /**
         * Creates a CreateSessionBadRequestResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateSessionBadRequestResponseV1} CreateSessionBadRequestResponseV1
         */
        CreateSessionBadRequestResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateSessionBadRequestResponseV1)
                return object;
            var message = new $root.inout.CreateSessionBadRequestResponseV1();
            if (object.email) {
                if (!Array.isArray(object.email))
                    throw TypeError(".inout.CreateSessionBadRequestResponseV1.email: array expected");
                message.email = [];
                for (var i = 0; i < object.email.length; ++i)
                    message.email[i] = String(object.email[i]);
            }
            if (object.emailCode) {
                if (!Array.isArray(object.emailCode))
                    throw TypeError(".inout.CreateSessionBadRequestResponseV1.emailCode: array expected");
                message.emailCode = [];
                for (var i = 0; i < object.emailCode.length; ++i)
                    message.emailCode[i] = String(object.emailCode[i]);
            }
            if (object.phone) {
                if (!Array.isArray(object.phone))
                    throw TypeError(".inout.CreateSessionBadRequestResponseV1.phone: array expected");
                message.phone = [];
                for (var i = 0; i < object.phone.length; ++i)
                    message.phone[i] = String(object.phone[i]);
            }
            if (object.phoneCode) {
                if (!Array.isArray(object.phoneCode))
                    throw TypeError(".inout.CreateSessionBadRequestResponseV1.phoneCode: array expected");
                message.phoneCode = [];
                for (var i = 0; i < object.phoneCode.length; ++i)
                    message.phoneCode[i] = String(object.phoneCode[i]);
            }
            if (object.password) {
                if (!Array.isArray(object.password))
                    throw TypeError(".inout.CreateSessionBadRequestResponseV1.password: array expected");
                message.password = [];
                for (var i = 0; i < object.password.length; ++i)
                    message.password[i] = String(object.password[i]);
            }
            if (object.fingerprint) {
                if (!Array.isArray(object.fingerprint))
                    throw TypeError(".inout.CreateSessionBadRequestResponseV1.fingerprint: array expected");
                message.fingerprint = [];
                for (var i = 0; i < object.fingerprint.length; ++i)
                    message.fingerprint[i] = String(object.fingerprint[i]);
            }
            if (object.userAgent) {
                if (!Array.isArray(object.userAgent))
                    throw TypeError(".inout.CreateSessionBadRequestResponseV1.userAgent: array expected");
                message.userAgent = [];
                for (var i = 0; i < object.userAgent.length; ++i)
                    message.userAgent[i] = String(object.userAgent[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateSessionBadRequestResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @static
         * @param {inout.CreateSessionBadRequestResponseV1} message CreateSessionBadRequestResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateSessionBadRequestResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.email = [];
                object.emailCode = [];
                object.phone = [];
                object.phoneCode = [];
                object.password = [];
                object.fingerprint = [];
                object.userAgent = [];
            }
            if (message.email && message.email.length) {
                object.email = [];
                for (var j = 0; j < message.email.length; ++j)
                    object.email[j] = message.email[j];
            }
            if (message.emailCode && message.emailCode.length) {
                object.emailCode = [];
                for (var j = 0; j < message.emailCode.length; ++j)
                    object.emailCode[j] = message.emailCode[j];
            }
            if (message.phone && message.phone.length) {
                object.phone = [];
                for (var j = 0; j < message.phone.length; ++j)
                    object.phone[j] = message.phone[j];
            }
            if (message.phoneCode && message.phoneCode.length) {
                object.phoneCode = [];
                for (var j = 0; j < message.phoneCode.length; ++j)
                    object.phoneCode[j] = message.phoneCode[j];
            }
            if (message.password && message.password.length) {
                object.password = [];
                for (var j = 0; j < message.password.length; ++j)
                    object.password[j] = message.password[j];
            }
            if (message.fingerprint && message.fingerprint.length) {
                object.fingerprint = [];
                for (var j = 0; j < message.fingerprint.length; ++j)
                    object.fingerprint[j] = message.fingerprint[j];
            }
            if (message.userAgent && message.userAgent.length) {
                object.userAgent = [];
                for (var j = 0; j < message.userAgent.length; ++j)
                    object.userAgent[j] = message.userAgent[j];
            }
            return object;
        };

        /**
         * Converts this CreateSessionBadRequestResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateSessionBadRequestResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateSessionBadRequestResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateSessionBadRequestResponseV1;
    })();

    inout.CreateSessionResponseV1 = (function() {

        /**
         * Properties of a CreateSessionResponseV1.
         * @memberof inout
         * @interface ICreateSessionResponseV1
         * @property {string|null} [refreshToken] CreateSessionResponseV1 refreshToken
         * @property {string|null} [accessToken] CreateSessionResponseV1 accessToken
         */

        /**
         * Constructs a new CreateSessionResponseV1.
         * @memberof inout
         * @classdesc Represents a CreateSessionResponseV1.
         * @implements ICreateSessionResponseV1
         * @constructor
         * @param {inout.ICreateSessionResponseV1=} [properties] Properties to set
         */
        function CreateSessionResponseV1(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateSessionResponseV1 refreshToken.
         * @member {string} refreshToken
         * @memberof inout.CreateSessionResponseV1
         * @instance
         */
        CreateSessionResponseV1.prototype.refreshToken = "";

        /**
         * CreateSessionResponseV1 accessToken.
         * @member {string} accessToken
         * @memberof inout.CreateSessionResponseV1
         * @instance
         */
        CreateSessionResponseV1.prototype.accessToken = "";

        /**
         * Creates a new CreateSessionResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.CreateSessionResponseV1
         * @static
         * @param {inout.ICreateSessionResponseV1=} [properties] Properties to set
         * @returns {inout.CreateSessionResponseV1} CreateSessionResponseV1 instance
         */
        CreateSessionResponseV1.create = function create(properties) {
            return new CreateSessionResponseV1(properties);
        };

        /**
         * Encodes the specified CreateSessionResponseV1 message. Does not implicitly {@link inout.CreateSessionResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.CreateSessionResponseV1
         * @static
         * @param {inout.ICreateSessionResponseV1} message CreateSessionResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateSessionResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.refreshToken);
            if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.accessToken);
            return writer;
        };

        /**
         * Encodes the specified CreateSessionResponseV1 message, length delimited. Does not implicitly {@link inout.CreateSessionResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.CreateSessionResponseV1
         * @static
         * @param {inout.ICreateSessionResponseV1} message CreateSessionResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateSessionResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateSessionResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.CreateSessionResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.CreateSessionResponseV1} CreateSessionResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateSessionResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.CreateSessionResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.refreshToken = reader.string();
                    break;
                case 2:
                    message.accessToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateSessionResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.CreateSessionResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.CreateSessionResponseV1} CreateSessionResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateSessionResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateSessionResponseV1 message.
         * @function verify
         * @memberof inout.CreateSessionResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateSessionResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                if (!$util.isString(message.accessToken))
                    return "accessToken: string expected";
            return null;
        };

        /**
         * Creates a CreateSessionResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.CreateSessionResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.CreateSessionResponseV1} CreateSessionResponseV1
         */
        CreateSessionResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.CreateSessionResponseV1)
                return object;
            var message = new $root.inout.CreateSessionResponseV1();
            if (object.refreshToken != null)
                message.refreshToken = String(object.refreshToken);
            if (object.accessToken != null)
                message.accessToken = String(object.accessToken);
            return message;
        };

        /**
         * Creates a plain object from a CreateSessionResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.CreateSessionResponseV1
         * @static
         * @param {inout.CreateSessionResponseV1} message CreateSessionResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateSessionResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.refreshToken = "";
                object.accessToken = "";
            }
            if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                object.refreshToken = message.refreshToken;
            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                object.accessToken = message.accessToken;
            return object;
        };

        /**
         * Converts this CreateSessionResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.CreateSessionResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateSessionResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateSessionResponseV1;
    })();

    inout.GetUserViewResponseV1 = (function() {

        /**
         * Properties of a GetUserViewResponseV1.
         * @memberof inout
         * @interface IGetUserViewResponseV1
         * @property {Uint8Array|null} [id] GetUserViewResponseV1 id
         * @property {number|Long|null} [created] GetUserViewResponseV1 created
         * @property {Array.<string>|null} [roles] GetUserViewResponseV1 roles
         * @property {Array.<string>|null} [phones] GetUserViewResponseV1 phones
         * @property {Array.<string>|null} [emails] GetUserViewResponseV1 emails
         */

        /**
         * Constructs a new GetUserViewResponseV1.
         * @memberof inout
         * @classdesc Represents a GetUserViewResponseV1.
         * @implements IGetUserViewResponseV1
         * @constructor
         * @param {inout.IGetUserViewResponseV1=} [properties] Properties to set
         */
        function GetUserViewResponseV1(properties) {
            this.roles = [];
            this.phones = [];
            this.emails = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserViewResponseV1 id.
         * @member {Uint8Array} id
         * @memberof inout.GetUserViewResponseV1
         * @instance
         */
        GetUserViewResponseV1.prototype.id = $util.newBuffer([]);

        /**
         * GetUserViewResponseV1 created.
         * @member {number|Long} created
         * @memberof inout.GetUserViewResponseV1
         * @instance
         */
        GetUserViewResponseV1.prototype.created = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetUserViewResponseV1 roles.
         * @member {Array.<string>} roles
         * @memberof inout.GetUserViewResponseV1
         * @instance
         */
        GetUserViewResponseV1.prototype.roles = $util.emptyArray;

        /**
         * GetUserViewResponseV1 phones.
         * @member {Array.<string>} phones
         * @memberof inout.GetUserViewResponseV1
         * @instance
         */
        GetUserViewResponseV1.prototype.phones = $util.emptyArray;

        /**
         * GetUserViewResponseV1 emails.
         * @member {Array.<string>} emails
         * @memberof inout.GetUserViewResponseV1
         * @instance
         */
        GetUserViewResponseV1.prototype.emails = $util.emptyArray;

        /**
         * Creates a new GetUserViewResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.GetUserViewResponseV1
         * @static
         * @param {inout.IGetUserViewResponseV1=} [properties] Properties to set
         * @returns {inout.GetUserViewResponseV1} GetUserViewResponseV1 instance
         */
        GetUserViewResponseV1.create = function create(properties) {
            return new GetUserViewResponseV1(properties);
        };

        /**
         * Encodes the specified GetUserViewResponseV1 message. Does not implicitly {@link inout.GetUserViewResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.GetUserViewResponseV1
         * @static
         * @param {inout.IGetUserViewResponseV1} message GetUserViewResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserViewResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.created != null && Object.hasOwnProperty.call(message, "created"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.created);
            if (message.roles != null && message.roles.length)
                for (var i = 0; i < message.roles.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.roles[i]);
            if (message.phones != null && message.phones.length)
                for (var i = 0; i < message.phones.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.phones[i]);
            if (message.emails != null && message.emails.length)
                for (var i = 0; i < message.emails.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.emails[i]);
            return writer;
        };

        /**
         * Encodes the specified GetUserViewResponseV1 message, length delimited. Does not implicitly {@link inout.GetUserViewResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.GetUserViewResponseV1
         * @static
         * @param {inout.IGetUserViewResponseV1} message GetUserViewResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserViewResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserViewResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.GetUserViewResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.GetUserViewResponseV1} GetUserViewResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserViewResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.GetUserViewResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.created = reader.int64();
                    break;
                case 3:
                    if (!(message.roles && message.roles.length))
                        message.roles = [];
                    message.roles.push(reader.string());
                    break;
                case 4:
                    if (!(message.phones && message.phones.length))
                        message.phones = [];
                    message.phones.push(reader.string());
                    break;
                case 5:
                    if (!(message.emails && message.emails.length))
                        message.emails = [];
                    message.emails.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserViewResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.GetUserViewResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.GetUserViewResponseV1} GetUserViewResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserViewResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserViewResponseV1 message.
         * @function verify
         * @memberof inout.GetUserViewResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserViewResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.created != null && message.hasOwnProperty("created"))
                if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                    return "created: integer|Long expected";
            if (message.roles != null && message.hasOwnProperty("roles")) {
                if (!Array.isArray(message.roles))
                    return "roles: array expected";
                for (var i = 0; i < message.roles.length; ++i)
                    if (!$util.isString(message.roles[i]))
                        return "roles: string[] expected";
            }
            if (message.phones != null && message.hasOwnProperty("phones")) {
                if (!Array.isArray(message.phones))
                    return "phones: array expected";
                for (var i = 0; i < message.phones.length; ++i)
                    if (!$util.isString(message.phones[i]))
                        return "phones: string[] expected";
            }
            if (message.emails != null && message.hasOwnProperty("emails")) {
                if (!Array.isArray(message.emails))
                    return "emails: array expected";
                for (var i = 0; i < message.emails.length; ++i)
                    if (!$util.isString(message.emails[i]))
                        return "emails: string[] expected";
            }
            return null;
        };

        /**
         * Creates a GetUserViewResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.GetUserViewResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.GetUserViewResponseV1} GetUserViewResponseV1
         */
        GetUserViewResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.GetUserViewResponseV1)
                return object;
            var message = new $root.inout.GetUserViewResponseV1();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.created != null)
                if ($util.Long)
                    (message.created = $util.Long.fromValue(object.created)).unsigned = false;
                else if (typeof object.created === "string")
                    message.created = parseInt(object.created, 10);
                else if (typeof object.created === "number")
                    message.created = object.created;
                else if (typeof object.created === "object")
                    message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber();
            if (object.roles) {
                if (!Array.isArray(object.roles))
                    throw TypeError(".inout.GetUserViewResponseV1.roles: array expected");
                message.roles = [];
                for (var i = 0; i < object.roles.length; ++i)
                    message.roles[i] = String(object.roles[i]);
            }
            if (object.phones) {
                if (!Array.isArray(object.phones))
                    throw TypeError(".inout.GetUserViewResponseV1.phones: array expected");
                message.phones = [];
                for (var i = 0; i < object.phones.length; ++i)
                    message.phones[i] = String(object.phones[i]);
            }
            if (object.emails) {
                if (!Array.isArray(object.emails))
                    throw TypeError(".inout.GetUserViewResponseV1.emails: array expected");
                message.emails = [];
                for (var i = 0; i < object.emails.length; ++i)
                    message.emails[i] = String(object.emails[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUserViewResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.GetUserViewResponseV1
         * @static
         * @param {inout.GetUserViewResponseV1} message GetUserViewResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserViewResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.roles = [];
                object.phones = [];
                object.emails = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.created = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.created != null && message.hasOwnProperty("created"))
                if (typeof message.created === "number")
                    object.created = options.longs === String ? String(message.created) : message.created;
                else
                    object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber() : message.created;
            if (message.roles && message.roles.length) {
                object.roles = [];
                for (var j = 0; j < message.roles.length; ++j)
                    object.roles[j] = message.roles[j];
            }
            if (message.phones && message.phones.length) {
                object.phones = [];
                for (var j = 0; j < message.phones.length; ++j)
                    object.phones[j] = message.phones[j];
            }
            if (message.emails && message.emails.length) {
                object.emails = [];
                for (var j = 0; j < message.emails.length; ++j)
                    object.emails[j] = message.emails[j];
            }
            return object;
        };

        /**
         * Converts this GetUserViewResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.GetUserViewResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserViewResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserViewResponseV1;
    })();

    inout.ListUserViewResponseV1 = (function() {

        /**
         * Properties of a ListUserViewResponseV1.
         * @memberof inout
         * @interface IListUserViewResponseV1
         * @property {Array.<inout.IGetUserViewResponseV1>|null} [data] ListUserViewResponseV1 data
         */

        /**
         * Constructs a new ListUserViewResponseV1.
         * @memberof inout
         * @classdesc Represents a ListUserViewResponseV1.
         * @implements IListUserViewResponseV1
         * @constructor
         * @param {inout.IListUserViewResponseV1=} [properties] Properties to set
         */
        function ListUserViewResponseV1(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListUserViewResponseV1 data.
         * @member {Array.<inout.IGetUserViewResponseV1>} data
         * @memberof inout.ListUserViewResponseV1
         * @instance
         */
        ListUserViewResponseV1.prototype.data = $util.emptyArray;

        /**
         * Creates a new ListUserViewResponseV1 instance using the specified properties.
         * @function create
         * @memberof inout.ListUserViewResponseV1
         * @static
         * @param {inout.IListUserViewResponseV1=} [properties] Properties to set
         * @returns {inout.ListUserViewResponseV1} ListUserViewResponseV1 instance
         */
        ListUserViewResponseV1.create = function create(properties) {
            return new ListUserViewResponseV1(properties);
        };

        /**
         * Encodes the specified ListUserViewResponseV1 message. Does not implicitly {@link inout.ListUserViewResponseV1.verify|verify} messages.
         * @function encode
         * @memberof inout.ListUserViewResponseV1
         * @static
         * @param {inout.IListUserViewResponseV1} message ListUserViewResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListUserViewResponseV1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.inout.GetUserViewResponseV1.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListUserViewResponseV1 message, length delimited. Does not implicitly {@link inout.ListUserViewResponseV1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inout.ListUserViewResponseV1
         * @static
         * @param {inout.IListUserViewResponseV1} message ListUserViewResponseV1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListUserViewResponseV1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListUserViewResponseV1 message from the specified reader or buffer.
         * @function decode
         * @memberof inout.ListUserViewResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inout.ListUserViewResponseV1} ListUserViewResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListUserViewResponseV1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inout.ListUserViewResponseV1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.inout.GetUserViewResponseV1.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListUserViewResponseV1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inout.ListUserViewResponseV1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inout.ListUserViewResponseV1} ListUserViewResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListUserViewResponseV1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListUserViewResponseV1 message.
         * @function verify
         * @memberof inout.ListUserViewResponseV1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListUserViewResponseV1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.inout.GetUserViewResponseV1.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListUserViewResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inout.ListUserViewResponseV1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inout.ListUserViewResponseV1} ListUserViewResponseV1
         */
        ListUserViewResponseV1.fromObject = function fromObject(object) {
            if (object instanceof $root.inout.ListUserViewResponseV1)
                return object;
            var message = new $root.inout.ListUserViewResponseV1();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".inout.ListUserViewResponseV1.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".inout.ListUserViewResponseV1.data: object expected");
                    message.data[i] = $root.inout.GetUserViewResponseV1.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListUserViewResponseV1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inout.ListUserViewResponseV1
         * @static
         * @param {inout.ListUserViewResponseV1} message ListUserViewResponseV1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListUserViewResponseV1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.inout.GetUserViewResponseV1.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this ListUserViewResponseV1 to JSON.
         * @function toJSON
         * @memberof inout.ListUserViewResponseV1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListUserViewResponseV1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListUserViewResponseV1;
    })();

    return inout;
})();

module.exports = $root;
