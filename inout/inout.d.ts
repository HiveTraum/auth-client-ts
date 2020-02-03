import * as Long from "long";

import * as $protobuf from "@apollo/protobufjs";
/** Namespace inout. */
export namespace inout {

    /** Properties of a CreateRoleRequestV1. */
    interface ICreateRoleRequestV1 {

        /** CreateRoleRequestV1 title */
        title?: (string|null);
    }

    /** Represents a CreateRoleRequestV1. */
    class CreateRoleRequestV1 implements ICreateRoleRequestV1 {

        /**
         * Constructs a new CreateRoleRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateRoleRequestV1);

        /** CreateRoleRequestV1 title. */
        public title: string;

        /**
         * Creates a new CreateRoleRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoleRequestV1 instance
         */
        public static create(properties?: inout.ICreateRoleRequestV1): inout.CreateRoleRequestV1;

        /**
         * Encodes the specified CreateRoleRequestV1 message. Does not implicitly {@link inout.CreateRoleRequestV1.verify|verify} messages.
         * @param message CreateRoleRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateRoleRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoleRequestV1 message, length delimited. Does not implicitly {@link inout.CreateRoleRequestV1.verify|verify} messages.
         * @param message CreateRoleRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateRoleRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoleRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoleRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateRoleRequestV1;

        /**
         * Decodes a CreateRoleRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoleRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateRoleRequestV1;

        /**
         * Verifies a CreateRoleRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoleRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoleRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateRoleRequestV1;

        /**
         * Creates a plain object from a CreateRoleRequestV1 message. Also converts values to other types if specified.
         * @param message CreateRoleRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateRoleRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoleRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateRoleBadRequestV1. */
    interface ICreateRoleBadRequestV1 {

        /** CreateRoleBadRequestV1 title */
        title?: (string[]|null);
    }

    /** Represents a CreateRoleBadRequestV1. */
    class CreateRoleBadRequestV1 implements ICreateRoleBadRequestV1 {

        /**
         * Constructs a new CreateRoleBadRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateRoleBadRequestV1);

        /** CreateRoleBadRequestV1 title. */
        public title: string[];

        /**
         * Creates a new CreateRoleBadRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoleBadRequestV1 instance
         */
        public static create(properties?: inout.ICreateRoleBadRequestV1): inout.CreateRoleBadRequestV1;

        /**
         * Encodes the specified CreateRoleBadRequestV1 message. Does not implicitly {@link inout.CreateRoleBadRequestV1.verify|verify} messages.
         * @param message CreateRoleBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateRoleBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoleBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreateRoleBadRequestV1.verify|verify} messages.
         * @param message CreateRoleBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateRoleBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoleBadRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoleBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateRoleBadRequestV1;

        /**
         * Decodes a CreateRoleBadRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoleBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateRoleBadRequestV1;

        /**
         * Verifies a CreateRoleBadRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoleBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoleBadRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateRoleBadRequestV1;

        /**
         * Creates a plain object from a CreateRoleBadRequestV1 message. Also converts values to other types if specified.
         * @param message CreateRoleBadRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateRoleBadRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoleBadRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRoleResponseV1. */
    interface IGetRoleResponseV1 {

        /** GetRoleResponseV1 id */
        id?: (Uint8Array|null);

        /** GetRoleResponseV1 created */
        created?: (number|Long|null);

        /** GetRoleResponseV1 title */
        title?: (string|null);
    }

    /** Represents a GetRoleResponseV1. */
    class GetRoleResponseV1 implements IGetRoleResponseV1 {

        /**
         * Constructs a new GetRoleResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.IGetRoleResponseV1);

        /** GetRoleResponseV1 id. */
        public id: Uint8Array;

        /** GetRoleResponseV1 created. */
        public created: (number|Long);

        /** GetRoleResponseV1 title. */
        public title: string;

        /**
         * Creates a new GetRoleResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoleResponseV1 instance
         */
        public static create(properties?: inout.IGetRoleResponseV1): inout.GetRoleResponseV1;

        /**
         * Encodes the specified GetRoleResponseV1 message. Does not implicitly {@link inout.GetRoleResponseV1.verify|verify} messages.
         * @param message GetRoleResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.IGetRoleResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoleResponseV1 message, length delimited. Does not implicitly {@link inout.GetRoleResponseV1.verify|verify} messages.
         * @param message GetRoleResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.IGetRoleResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoleResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoleResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.GetRoleResponseV1;

        /**
         * Decodes a GetRoleResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoleResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.GetRoleResponseV1;

        /**
         * Verifies a GetRoleResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRoleResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoleResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.GetRoleResponseV1;

        /**
         * Creates a plain object from a GetRoleResponseV1 message. Also converts values to other types if specified.
         * @param message GetRoleResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.GetRoleResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoleResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListRoleResponseV1. */
    interface IListRoleResponseV1 {

        /** ListRoleResponseV1 data */
        data?: (inout.IGetRoleResponseV1[]|null);
    }

    /** Represents a ListRoleResponseV1. */
    class ListRoleResponseV1 implements IListRoleResponseV1 {

        /**
         * Constructs a new ListRoleResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.IListRoleResponseV1);

        /** ListRoleResponseV1 data. */
        public data: inout.IGetRoleResponseV1[];

        /**
         * Creates a new ListRoleResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListRoleResponseV1 instance
         */
        public static create(properties?: inout.IListRoleResponseV1): inout.ListRoleResponseV1;

        /**
         * Encodes the specified ListRoleResponseV1 message. Does not implicitly {@link inout.ListRoleResponseV1.verify|verify} messages.
         * @param message ListRoleResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.IListRoleResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListRoleResponseV1 message, length delimited. Does not implicitly {@link inout.ListRoleResponseV1.verify|verify} messages.
         * @param message ListRoleResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.IListRoleResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRoleResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListRoleResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.ListRoleResponseV1;

        /**
         * Decodes a ListRoleResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListRoleResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.ListRoleResponseV1;

        /**
         * Verifies a ListRoleResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListRoleResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListRoleResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.ListRoleResponseV1;

        /**
         * Creates a plain object from a ListRoleResponseV1 message. Also converts values to other types if specified.
         * @param message ListRoleResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.ListRoleResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListRoleResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateUserRoleRequestV1. */
    interface ICreateUserRoleRequestV1 {

        /** CreateUserRoleRequestV1 userID */
        userID?: (Uint8Array|null);

        /** CreateUserRoleRequestV1 roleID */
        roleID?: (Uint8Array|null);
    }

    /** Represents a CreateUserRoleRequestV1. */
    class CreateUserRoleRequestV1 implements ICreateUserRoleRequestV1 {

        /**
         * Constructs a new CreateUserRoleRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateUserRoleRequestV1);

        /** CreateUserRoleRequestV1 userID. */
        public userID: Uint8Array;

        /** CreateUserRoleRequestV1 roleID. */
        public roleID: Uint8Array;

        /**
         * Creates a new CreateUserRoleRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateUserRoleRequestV1 instance
         */
        public static create(properties?: inout.ICreateUserRoleRequestV1): inout.CreateUserRoleRequestV1;

        /**
         * Encodes the specified CreateUserRoleRequestV1 message. Does not implicitly {@link inout.CreateUserRoleRequestV1.verify|verify} messages.
         * @param message CreateUserRoleRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateUserRoleRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateUserRoleRequestV1 message, length delimited. Does not implicitly {@link inout.CreateUserRoleRequestV1.verify|verify} messages.
         * @param message CreateUserRoleRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateUserRoleRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateUserRoleRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateUserRoleRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateUserRoleRequestV1;

        /**
         * Decodes a CreateUserRoleRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateUserRoleRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateUserRoleRequestV1;

        /**
         * Verifies a CreateUserRoleRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateUserRoleRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateUserRoleRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateUserRoleRequestV1;

        /**
         * Creates a plain object from a CreateUserRoleRequestV1 message. Also converts values to other types if specified.
         * @param message CreateUserRoleRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateUserRoleRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateUserRoleRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateUserRoleBadRequestV1. */
    interface ICreateUserRoleBadRequestV1 {

        /** CreateUserRoleBadRequestV1 userID */
        userID?: (string[]|null);

        /** CreateUserRoleBadRequestV1 roleID */
        roleID?: (string[]|null);

        /** CreateUserRoleBadRequestV1 errors */
        errors?: (string[]|null);
    }

    /** Represents a CreateUserRoleBadRequestV1. */
    class CreateUserRoleBadRequestV1 implements ICreateUserRoleBadRequestV1 {

        /**
         * Constructs a new CreateUserRoleBadRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateUserRoleBadRequestV1);

        /** CreateUserRoleBadRequestV1 userID. */
        public userID: string[];

        /** CreateUserRoleBadRequestV1 roleID. */
        public roleID: string[];

        /** CreateUserRoleBadRequestV1 errors. */
        public errors: string[];

        /**
         * Creates a new CreateUserRoleBadRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateUserRoleBadRequestV1 instance
         */
        public static create(properties?: inout.ICreateUserRoleBadRequestV1): inout.CreateUserRoleBadRequestV1;

        /**
         * Encodes the specified CreateUserRoleBadRequestV1 message. Does not implicitly {@link inout.CreateUserRoleBadRequestV1.verify|verify} messages.
         * @param message CreateUserRoleBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateUserRoleBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateUserRoleBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreateUserRoleBadRequestV1.verify|verify} messages.
         * @param message CreateUserRoleBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateUserRoleBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateUserRoleBadRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateUserRoleBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateUserRoleBadRequestV1;

        /**
         * Decodes a CreateUserRoleBadRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateUserRoleBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateUserRoleBadRequestV1;

        /**
         * Verifies a CreateUserRoleBadRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateUserRoleBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateUserRoleBadRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateUserRoleBadRequestV1;

        /**
         * Creates a plain object from a CreateUserRoleBadRequestV1 message. Also converts values to other types if specified.
         * @param message CreateUserRoleBadRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateUserRoleBadRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateUserRoleBadRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateUserRolesRequestV1. */
    interface ICreateUserRolesRequestV1 {

        /** CreateUserRolesRequestV1 userRoles */
        userRoles?: (inout.ICreateUserRoleRequestV1[]|null);
    }

    /** Represents a CreateUserRolesRequestV1. */
    class CreateUserRolesRequestV1 implements ICreateUserRolesRequestV1 {

        /**
         * Constructs a new CreateUserRolesRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateUserRolesRequestV1);

        /** CreateUserRolesRequestV1 userRoles. */
        public userRoles: inout.ICreateUserRoleRequestV1[];

        /**
         * Creates a new CreateUserRolesRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateUserRolesRequestV1 instance
         */
        public static create(properties?: inout.ICreateUserRolesRequestV1): inout.CreateUserRolesRequestV1;

        /**
         * Encodes the specified CreateUserRolesRequestV1 message. Does not implicitly {@link inout.CreateUserRolesRequestV1.verify|verify} messages.
         * @param message CreateUserRolesRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateUserRolesRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateUserRolesRequestV1 message, length delimited. Does not implicitly {@link inout.CreateUserRolesRequestV1.verify|verify} messages.
         * @param message CreateUserRolesRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateUserRolesRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateUserRolesRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateUserRolesRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateUserRolesRequestV1;

        /**
         * Decodes a CreateUserRolesRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateUserRolesRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateUserRolesRequestV1;

        /**
         * Verifies a CreateUserRolesRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateUserRolesRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateUserRolesRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateUserRolesRequestV1;

        /**
         * Creates a plain object from a CreateUserRolesRequestV1 message. Also converts values to other types if specified.
         * @param message CreateUserRolesRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateUserRolesRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateUserRolesRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateUserRolesBadRequestV1. */
    interface ICreateUserRolesBadRequestV1 {

        /** CreateUserRolesBadRequestV1 errors */
        errors?: (inout.ICreateUserRoleBadRequestV1[]|null);
    }

    /** Represents a CreateUserRolesBadRequestV1. */
    class CreateUserRolesBadRequestV1 implements ICreateUserRolesBadRequestV1 {

        /**
         * Constructs a new CreateUserRolesBadRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateUserRolesBadRequestV1);

        /** CreateUserRolesBadRequestV1 errors. */
        public errors: inout.ICreateUserRoleBadRequestV1[];

        /**
         * Creates a new CreateUserRolesBadRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateUserRolesBadRequestV1 instance
         */
        public static create(properties?: inout.ICreateUserRolesBadRequestV1): inout.CreateUserRolesBadRequestV1;

        /**
         * Encodes the specified CreateUserRolesBadRequestV1 message. Does not implicitly {@link inout.CreateUserRolesBadRequestV1.verify|verify} messages.
         * @param message CreateUserRolesBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateUserRolesBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateUserRolesBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreateUserRolesBadRequestV1.verify|verify} messages.
         * @param message CreateUserRolesBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateUserRolesBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateUserRolesBadRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateUserRolesBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateUserRolesBadRequestV1;

        /**
         * Decodes a CreateUserRolesBadRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateUserRolesBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateUserRolesBadRequestV1;

        /**
         * Verifies a CreateUserRolesBadRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateUserRolesBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateUserRolesBadRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateUserRolesBadRequestV1;

        /**
         * Creates a plain object from a CreateUserRolesBadRequestV1 message. Also converts values to other types if specified.
         * @param message CreateUserRolesBadRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateUserRolesBadRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateUserRolesBadRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserRoleResponseV1. */
    interface IGetUserRoleResponseV1 {

        /** GetUserRoleResponseV1 id */
        id?: (Uint8Array|null);

        /** GetUserRoleResponseV1 created */
        created?: (number|Long|null);

        /** GetUserRoleResponseV1 userID */
        userID?: (Uint8Array|null);

        /** GetUserRoleResponseV1 roleID */
        roleID?: (Uint8Array|null);
    }

    /** Represents a GetUserRoleResponseV1. */
    class GetUserRoleResponseV1 implements IGetUserRoleResponseV1 {

        /**
         * Constructs a new GetUserRoleResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.IGetUserRoleResponseV1);

        /** GetUserRoleResponseV1 id. */
        public id: Uint8Array;

        /** GetUserRoleResponseV1 created. */
        public created: (number|Long);

        /** GetUserRoleResponseV1 userID. */
        public userID: Uint8Array;

        /** GetUserRoleResponseV1 roleID. */
        public roleID: Uint8Array;

        /**
         * Creates a new GetUserRoleResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserRoleResponseV1 instance
         */
        public static create(properties?: inout.IGetUserRoleResponseV1): inout.GetUserRoleResponseV1;

        /**
         * Encodes the specified GetUserRoleResponseV1 message. Does not implicitly {@link inout.GetUserRoleResponseV1.verify|verify} messages.
         * @param message GetUserRoleResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.IGetUserRoleResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserRoleResponseV1 message, length delimited. Does not implicitly {@link inout.GetUserRoleResponseV1.verify|verify} messages.
         * @param message GetUserRoleResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.IGetUserRoleResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserRoleResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserRoleResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.GetUserRoleResponseV1;

        /**
         * Decodes a GetUserRoleResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserRoleResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.GetUserRoleResponseV1;

        /**
         * Verifies a GetUserRoleResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserRoleResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserRoleResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.GetUserRoleResponseV1;

        /**
         * Creates a plain object from a GetUserRoleResponseV1 message. Also converts values to other types if specified.
         * @param message GetUserRoleResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.GetUserRoleResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserRoleResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListUserRolesResponseV1. */
    interface IListUserRolesResponseV1 {

        /** ListUserRolesResponseV1 data */
        data?: (inout.IGetUserRoleResponseV1[]|null);
    }

    /** Represents a ListUserRolesResponseV1. */
    class ListUserRolesResponseV1 implements IListUserRolesResponseV1 {

        /**
         * Constructs a new ListUserRolesResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.IListUserRolesResponseV1);

        /** ListUserRolesResponseV1 data. */
        public data: inout.IGetUserRoleResponseV1[];

        /**
         * Creates a new ListUserRolesResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListUserRolesResponseV1 instance
         */
        public static create(properties?: inout.IListUserRolesResponseV1): inout.ListUserRolesResponseV1;

        /**
         * Encodes the specified ListUserRolesResponseV1 message. Does not implicitly {@link inout.ListUserRolesResponseV1.verify|verify} messages.
         * @param message ListUserRolesResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.IListUserRolesResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListUserRolesResponseV1 message, length delimited. Does not implicitly {@link inout.ListUserRolesResponseV1.verify|verify} messages.
         * @param message ListUserRolesResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.IListUserRolesResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListUserRolesResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListUserRolesResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.ListUserRolesResponseV1;

        /**
         * Decodes a ListUserRolesResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListUserRolesResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.ListUserRolesResponseV1;

        /**
         * Verifies a ListUserRolesResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListUserRolesResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListUserRolesResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.ListUserRolesResponseV1;

        /**
         * Creates a plain object from a ListUserRolesResponseV1 message. Also converts values to other types if specified.
         * @param message ListUserRolesResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.ListUserRolesResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListUserRolesResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateEmailRequestV1. */
    interface ICreateEmailRequestV1 {

        /** CreateEmailRequestV1 email */
        email?: (string|null);

        /** CreateEmailRequestV1 code */
        code?: (string|null);

        /** CreateEmailRequestV1 userID */
        userID?: (Uint8Array|null);
    }

    /** Represents a CreateEmailRequestV1. */
    class CreateEmailRequestV1 implements ICreateEmailRequestV1 {

        /**
         * Constructs a new CreateEmailRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateEmailRequestV1);

        /** CreateEmailRequestV1 email. */
        public email: string;

        /** CreateEmailRequestV1 code. */
        public code: string;

        /** CreateEmailRequestV1 userID. */
        public userID: Uint8Array;

        /**
         * Creates a new CreateEmailRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateEmailRequestV1 instance
         */
        public static create(properties?: inout.ICreateEmailRequestV1): inout.CreateEmailRequestV1;

        /**
         * Encodes the specified CreateEmailRequestV1 message. Does not implicitly {@link inout.CreateEmailRequestV1.verify|verify} messages.
         * @param message CreateEmailRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateEmailRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateEmailRequestV1 message, length delimited. Does not implicitly {@link inout.CreateEmailRequestV1.verify|verify} messages.
         * @param message CreateEmailRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateEmailRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateEmailRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateEmailRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateEmailRequestV1;

        /**
         * Decodes a CreateEmailRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateEmailRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateEmailRequestV1;

        /**
         * Verifies a CreateEmailRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateEmailRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateEmailRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateEmailRequestV1;

        /**
         * Creates a plain object from a CreateEmailRequestV1 message. Also converts values to other types if specified.
         * @param message CreateEmailRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateEmailRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateEmailRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateEmailBadRequestV1. */
    interface ICreateEmailBadRequestV1 {

        /** CreateEmailBadRequestV1 email */
        email?: (string[]|null);

        /** CreateEmailBadRequestV1 code */
        code?: (string[]|null);

        /** CreateEmailBadRequestV1 userId */
        userId?: (string[]|null);
    }

    /** Represents a CreateEmailBadRequestV1. */
    class CreateEmailBadRequestV1 implements ICreateEmailBadRequestV1 {

        /**
         * Constructs a new CreateEmailBadRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateEmailBadRequestV1);

        /** CreateEmailBadRequestV1 email. */
        public email: string[];

        /** CreateEmailBadRequestV1 code. */
        public code: string[];

        /** CreateEmailBadRequestV1 userId. */
        public userId: string[];

        /**
         * Creates a new CreateEmailBadRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateEmailBadRequestV1 instance
         */
        public static create(properties?: inout.ICreateEmailBadRequestV1): inout.CreateEmailBadRequestV1;

        /**
         * Encodes the specified CreateEmailBadRequestV1 message. Does not implicitly {@link inout.CreateEmailBadRequestV1.verify|verify} messages.
         * @param message CreateEmailBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateEmailBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateEmailBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreateEmailBadRequestV1.verify|verify} messages.
         * @param message CreateEmailBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateEmailBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateEmailBadRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateEmailBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateEmailBadRequestV1;

        /**
         * Decodes a CreateEmailBadRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateEmailBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateEmailBadRequestV1;

        /**
         * Verifies a CreateEmailBadRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateEmailBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateEmailBadRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateEmailBadRequestV1;

        /**
         * Creates a plain object from a CreateEmailBadRequestV1 message. Also converts values to other types if specified.
         * @param message CreateEmailBadRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateEmailBadRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateEmailBadRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateEmailResponseV1. */
    interface ICreateEmailResponseV1 {

        /** CreateEmailResponseV1 id */
        id?: (Uint8Array|null);

        /** CreateEmailResponseV1 created */
        created?: (number|Long|null);

        /** CreateEmailResponseV1 userID */
        userID?: (Uint8Array|null);

        /** CreateEmailResponseV1 email */
        email?: (string|null);
    }

    /** Represents a CreateEmailResponseV1. */
    class CreateEmailResponseV1 implements ICreateEmailResponseV1 {

        /**
         * Constructs a new CreateEmailResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateEmailResponseV1);

        /** CreateEmailResponseV1 id. */
        public id: Uint8Array;

        /** CreateEmailResponseV1 created. */
        public created: (number|Long);

        /** CreateEmailResponseV1 userID. */
        public userID: Uint8Array;

        /** CreateEmailResponseV1 email. */
        public email: string;

        /**
         * Creates a new CreateEmailResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateEmailResponseV1 instance
         */
        public static create(properties?: inout.ICreateEmailResponseV1): inout.CreateEmailResponseV1;

        /**
         * Encodes the specified CreateEmailResponseV1 message. Does not implicitly {@link inout.CreateEmailResponseV1.verify|verify} messages.
         * @param message CreateEmailResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateEmailResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateEmailResponseV1 message, length delimited. Does not implicitly {@link inout.CreateEmailResponseV1.verify|verify} messages.
         * @param message CreateEmailResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateEmailResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateEmailResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateEmailResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateEmailResponseV1;

        /**
         * Decodes a CreateEmailResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateEmailResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateEmailResponseV1;

        /**
         * Verifies a CreateEmailResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateEmailResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateEmailResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateEmailResponseV1;

        /**
         * Creates a plain object from a CreateEmailResponseV1 message. Also converts values to other types if specified.
         * @param message CreateEmailResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateEmailResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateEmailResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateEmailConfirmationRequestV1. */
    interface ICreateEmailConfirmationRequestV1 {

        /** CreateEmailConfirmationRequestV1 email */
        email?: (string|null);
    }

    /** Represents a CreateEmailConfirmationRequestV1. */
    class CreateEmailConfirmationRequestV1 implements ICreateEmailConfirmationRequestV1 {

        /**
         * Constructs a new CreateEmailConfirmationRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateEmailConfirmationRequestV1);

        /** CreateEmailConfirmationRequestV1 email. */
        public email: string;

        /**
         * Creates a new CreateEmailConfirmationRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateEmailConfirmationRequestV1 instance
         */
        public static create(properties?: inout.ICreateEmailConfirmationRequestV1): inout.CreateEmailConfirmationRequestV1;

        /**
         * Encodes the specified CreateEmailConfirmationRequestV1 message. Does not implicitly {@link inout.CreateEmailConfirmationRequestV1.verify|verify} messages.
         * @param message CreateEmailConfirmationRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateEmailConfirmationRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateEmailConfirmationRequestV1 message, length delimited. Does not implicitly {@link inout.CreateEmailConfirmationRequestV1.verify|verify} messages.
         * @param message CreateEmailConfirmationRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateEmailConfirmationRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateEmailConfirmationRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateEmailConfirmationRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateEmailConfirmationRequestV1;

        /**
         * Decodes a CreateEmailConfirmationRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateEmailConfirmationRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateEmailConfirmationRequestV1;

        /**
         * Verifies a CreateEmailConfirmationRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateEmailConfirmationRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateEmailConfirmationRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateEmailConfirmationRequestV1;

        /**
         * Creates a plain object from a CreateEmailConfirmationRequestV1 message. Also converts values to other types if specified.
         * @param message CreateEmailConfirmationRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateEmailConfirmationRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateEmailConfirmationRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateEmailConfirmationBadRequestV1. */
    interface ICreateEmailConfirmationBadRequestV1 {

        /** CreateEmailConfirmationBadRequestV1 email */
        email?: (string[]|null);
    }

    /** Represents a CreateEmailConfirmationBadRequestV1. */
    class CreateEmailConfirmationBadRequestV1 implements ICreateEmailConfirmationBadRequestV1 {

        /**
         * Constructs a new CreateEmailConfirmationBadRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateEmailConfirmationBadRequestV1);

        /** CreateEmailConfirmationBadRequestV1 email. */
        public email: string[];

        /**
         * Creates a new CreateEmailConfirmationBadRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateEmailConfirmationBadRequestV1 instance
         */
        public static create(properties?: inout.ICreateEmailConfirmationBadRequestV1): inout.CreateEmailConfirmationBadRequestV1;

        /**
         * Encodes the specified CreateEmailConfirmationBadRequestV1 message. Does not implicitly {@link inout.CreateEmailConfirmationBadRequestV1.verify|verify} messages.
         * @param message CreateEmailConfirmationBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateEmailConfirmationBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateEmailConfirmationBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreateEmailConfirmationBadRequestV1.verify|verify} messages.
         * @param message CreateEmailConfirmationBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateEmailConfirmationBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateEmailConfirmationBadRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateEmailConfirmationBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateEmailConfirmationBadRequestV1;

        /**
         * Decodes a CreateEmailConfirmationBadRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateEmailConfirmationBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateEmailConfirmationBadRequestV1;

        /**
         * Verifies a CreateEmailConfirmationBadRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateEmailConfirmationBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateEmailConfirmationBadRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateEmailConfirmationBadRequestV1;

        /**
         * Creates a plain object from a CreateEmailConfirmationBadRequestV1 message. Also converts values to other types if specified.
         * @param message CreateEmailConfirmationBadRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateEmailConfirmationBadRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateEmailConfirmationBadRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateEmailConfirmationResponseV1. */
    interface ICreateEmailConfirmationResponseV1 {

        /** CreateEmailConfirmationResponseV1 created */
        created?: (number|Long|null);

        /** CreateEmailConfirmationResponseV1 expire */
        expire?: (number|Long|null);

        /** CreateEmailConfirmationResponseV1 email */
        email?: (string|null);
    }

    /** Represents a CreateEmailConfirmationResponseV1. */
    class CreateEmailConfirmationResponseV1 implements ICreateEmailConfirmationResponseV1 {

        /**
         * Constructs a new CreateEmailConfirmationResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateEmailConfirmationResponseV1);

        /** CreateEmailConfirmationResponseV1 created. */
        public created: (number|Long);

        /** CreateEmailConfirmationResponseV1 expire. */
        public expire: (number|Long);

        /** CreateEmailConfirmationResponseV1 email. */
        public email: string;

        /**
         * Creates a new CreateEmailConfirmationResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateEmailConfirmationResponseV1 instance
         */
        public static create(properties?: inout.ICreateEmailConfirmationResponseV1): inout.CreateEmailConfirmationResponseV1;

        /**
         * Encodes the specified CreateEmailConfirmationResponseV1 message. Does not implicitly {@link inout.CreateEmailConfirmationResponseV1.verify|verify} messages.
         * @param message CreateEmailConfirmationResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateEmailConfirmationResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateEmailConfirmationResponseV1 message, length delimited. Does not implicitly {@link inout.CreateEmailConfirmationResponseV1.verify|verify} messages.
         * @param message CreateEmailConfirmationResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateEmailConfirmationResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateEmailConfirmationResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateEmailConfirmationResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateEmailConfirmationResponseV1;

        /**
         * Decodes a CreateEmailConfirmationResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateEmailConfirmationResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateEmailConfirmationResponseV1;

        /**
         * Verifies a CreateEmailConfirmationResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateEmailConfirmationResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateEmailConfirmationResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateEmailConfirmationResponseV1;

        /**
         * Creates a plain object from a CreateEmailConfirmationResponseV1 message. Also converts values to other types if specified.
         * @param message CreateEmailConfirmationResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateEmailConfirmationResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateEmailConfirmationResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePhoneRequestV1. */
    interface ICreatePhoneRequestV1 {

        /** CreatePhoneRequestV1 phone */
        phone?: (string|null);

        /** CreatePhoneRequestV1 code */
        code?: (string|null);

        /** CreatePhoneRequestV1 userID */
        userID?: (Uint8Array|null);
    }

    /** Represents a CreatePhoneRequestV1. */
    class CreatePhoneRequestV1 implements ICreatePhoneRequestV1 {

        /**
         * Constructs a new CreatePhoneRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreatePhoneRequestV1);

        /** CreatePhoneRequestV1 phone. */
        public phone: string;

        /** CreatePhoneRequestV1 code. */
        public code: string;

        /** CreatePhoneRequestV1 userID. */
        public userID: Uint8Array;

        /**
         * Creates a new CreatePhoneRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePhoneRequestV1 instance
         */
        public static create(properties?: inout.ICreatePhoneRequestV1): inout.CreatePhoneRequestV1;

        /**
         * Encodes the specified CreatePhoneRequestV1 message. Does not implicitly {@link inout.CreatePhoneRequestV1.verify|verify} messages.
         * @param message CreatePhoneRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreatePhoneRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePhoneRequestV1 message, length delimited. Does not implicitly {@link inout.CreatePhoneRequestV1.verify|verify} messages.
         * @param message CreatePhoneRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreatePhoneRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePhoneRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePhoneRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreatePhoneRequestV1;

        /**
         * Decodes a CreatePhoneRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePhoneRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreatePhoneRequestV1;

        /**
         * Verifies a CreatePhoneRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePhoneRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePhoneRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreatePhoneRequestV1;

        /**
         * Creates a plain object from a CreatePhoneRequestV1 message. Also converts values to other types if specified.
         * @param message CreatePhoneRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreatePhoneRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePhoneRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePhoneBadRequestV1. */
    interface ICreatePhoneBadRequestV1 {

        /** CreatePhoneBadRequestV1 phone */
        phone?: (string[]|null);

        /** CreatePhoneBadRequestV1 code */
        code?: (string[]|null);

        /** CreatePhoneBadRequestV1 userID */
        userID?: (string[]|null);
    }

    /** Represents a CreatePhoneBadRequestV1. */
    class CreatePhoneBadRequestV1 implements ICreatePhoneBadRequestV1 {

        /**
         * Constructs a new CreatePhoneBadRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreatePhoneBadRequestV1);

        /** CreatePhoneBadRequestV1 phone. */
        public phone: string[];

        /** CreatePhoneBadRequestV1 code. */
        public code: string[];

        /** CreatePhoneBadRequestV1 userID. */
        public userID: string[];

        /**
         * Creates a new CreatePhoneBadRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePhoneBadRequestV1 instance
         */
        public static create(properties?: inout.ICreatePhoneBadRequestV1): inout.CreatePhoneBadRequestV1;

        /**
         * Encodes the specified CreatePhoneBadRequestV1 message. Does not implicitly {@link inout.CreatePhoneBadRequestV1.verify|verify} messages.
         * @param message CreatePhoneBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreatePhoneBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePhoneBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreatePhoneBadRequestV1.verify|verify} messages.
         * @param message CreatePhoneBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreatePhoneBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePhoneBadRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePhoneBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreatePhoneBadRequestV1;

        /**
         * Decodes a CreatePhoneBadRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePhoneBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreatePhoneBadRequestV1;

        /**
         * Verifies a CreatePhoneBadRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePhoneBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePhoneBadRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreatePhoneBadRequestV1;

        /**
         * Creates a plain object from a CreatePhoneBadRequestV1 message. Also converts values to other types if specified.
         * @param message CreatePhoneBadRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreatePhoneBadRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePhoneBadRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePhoneResponseV1. */
    interface ICreatePhoneResponseV1 {

        /** CreatePhoneResponseV1 id */
        id?: (Uint8Array|null);

        /** CreatePhoneResponseV1 created */
        created?: (number|Long|null);

        /** CreatePhoneResponseV1 userID */
        userID?: (Uint8Array|null);

        /** CreatePhoneResponseV1 phone */
        phone?: (string|null);
    }

    /** Represents a CreatePhoneResponseV1. */
    class CreatePhoneResponseV1 implements ICreatePhoneResponseV1 {

        /**
         * Constructs a new CreatePhoneResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreatePhoneResponseV1);

        /** CreatePhoneResponseV1 id. */
        public id: Uint8Array;

        /** CreatePhoneResponseV1 created. */
        public created: (number|Long);

        /** CreatePhoneResponseV1 userID. */
        public userID: Uint8Array;

        /** CreatePhoneResponseV1 phone. */
        public phone: string;

        /**
         * Creates a new CreatePhoneResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePhoneResponseV1 instance
         */
        public static create(properties?: inout.ICreatePhoneResponseV1): inout.CreatePhoneResponseV1;

        /**
         * Encodes the specified CreatePhoneResponseV1 message. Does not implicitly {@link inout.CreatePhoneResponseV1.verify|verify} messages.
         * @param message CreatePhoneResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreatePhoneResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePhoneResponseV1 message, length delimited. Does not implicitly {@link inout.CreatePhoneResponseV1.verify|verify} messages.
         * @param message CreatePhoneResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreatePhoneResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePhoneResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePhoneResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreatePhoneResponseV1;

        /**
         * Decodes a CreatePhoneResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePhoneResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreatePhoneResponseV1;

        /**
         * Verifies a CreatePhoneResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePhoneResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePhoneResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreatePhoneResponseV1;

        /**
         * Creates a plain object from a CreatePhoneResponseV1 message. Also converts values to other types if specified.
         * @param message CreatePhoneResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreatePhoneResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePhoneResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePhoneConfirmationRequestV1. */
    interface ICreatePhoneConfirmationRequestV1 {

        /** CreatePhoneConfirmationRequestV1 phone */
        phone?: (string|null);
    }

    /** Represents a CreatePhoneConfirmationRequestV1. */
    class CreatePhoneConfirmationRequestV1 implements ICreatePhoneConfirmationRequestV1 {

        /**
         * Constructs a new CreatePhoneConfirmationRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreatePhoneConfirmationRequestV1);

        /** CreatePhoneConfirmationRequestV1 phone. */
        public phone: string;

        /**
         * Creates a new CreatePhoneConfirmationRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePhoneConfirmationRequestV1 instance
         */
        public static create(properties?: inout.ICreatePhoneConfirmationRequestV1): inout.CreatePhoneConfirmationRequestV1;

        /**
         * Encodes the specified CreatePhoneConfirmationRequestV1 message. Does not implicitly {@link inout.CreatePhoneConfirmationRequestV1.verify|verify} messages.
         * @param message CreatePhoneConfirmationRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreatePhoneConfirmationRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePhoneConfirmationRequestV1 message, length delimited. Does not implicitly {@link inout.CreatePhoneConfirmationRequestV1.verify|verify} messages.
         * @param message CreatePhoneConfirmationRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreatePhoneConfirmationRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePhoneConfirmationRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePhoneConfirmationRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreatePhoneConfirmationRequestV1;

        /**
         * Decodes a CreatePhoneConfirmationRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePhoneConfirmationRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreatePhoneConfirmationRequestV1;

        /**
         * Verifies a CreatePhoneConfirmationRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePhoneConfirmationRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePhoneConfirmationRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreatePhoneConfirmationRequestV1;

        /**
         * Creates a plain object from a CreatePhoneConfirmationRequestV1 message. Also converts values to other types if specified.
         * @param message CreatePhoneConfirmationRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreatePhoneConfirmationRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePhoneConfirmationRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePhoneConfirmationBadRequestV1. */
    interface ICreatePhoneConfirmationBadRequestV1 {

        /** CreatePhoneConfirmationBadRequestV1 phone */
        phone?: (string[]|null);
    }

    /** Represents a CreatePhoneConfirmationBadRequestV1. */
    class CreatePhoneConfirmationBadRequestV1 implements ICreatePhoneConfirmationBadRequestV1 {

        /**
         * Constructs a new CreatePhoneConfirmationBadRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreatePhoneConfirmationBadRequestV1);

        /** CreatePhoneConfirmationBadRequestV1 phone. */
        public phone: string[];

        /**
         * Creates a new CreatePhoneConfirmationBadRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePhoneConfirmationBadRequestV1 instance
         */
        public static create(properties?: inout.ICreatePhoneConfirmationBadRequestV1): inout.CreatePhoneConfirmationBadRequestV1;

        /**
         * Encodes the specified CreatePhoneConfirmationBadRequestV1 message. Does not implicitly {@link inout.CreatePhoneConfirmationBadRequestV1.verify|verify} messages.
         * @param message CreatePhoneConfirmationBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreatePhoneConfirmationBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePhoneConfirmationBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreatePhoneConfirmationBadRequestV1.verify|verify} messages.
         * @param message CreatePhoneConfirmationBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreatePhoneConfirmationBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePhoneConfirmationBadRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePhoneConfirmationBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreatePhoneConfirmationBadRequestV1;

        /**
         * Decodes a CreatePhoneConfirmationBadRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePhoneConfirmationBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreatePhoneConfirmationBadRequestV1;

        /**
         * Verifies a CreatePhoneConfirmationBadRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePhoneConfirmationBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePhoneConfirmationBadRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreatePhoneConfirmationBadRequestV1;

        /**
         * Creates a plain object from a CreatePhoneConfirmationBadRequestV1 message. Also converts values to other types if specified.
         * @param message CreatePhoneConfirmationBadRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreatePhoneConfirmationBadRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePhoneConfirmationBadRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePhoneConfirmationResponseV1. */
    interface ICreatePhoneConfirmationResponseV1 {

        /** CreatePhoneConfirmationResponseV1 created */
        created?: (number|Long|null);

        /** CreatePhoneConfirmationResponseV1 expire */
        expire?: (number|Long|null);

        /** CreatePhoneConfirmationResponseV1 phone */
        phone?: (string|null);
    }

    /** Represents a CreatePhoneConfirmationResponseV1. */
    class CreatePhoneConfirmationResponseV1 implements ICreatePhoneConfirmationResponseV1 {

        /**
         * Constructs a new CreatePhoneConfirmationResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreatePhoneConfirmationResponseV1);

        /** CreatePhoneConfirmationResponseV1 created. */
        public created: (number|Long);

        /** CreatePhoneConfirmationResponseV1 expire. */
        public expire: (number|Long);

        /** CreatePhoneConfirmationResponseV1 phone. */
        public phone: string;

        /**
         * Creates a new CreatePhoneConfirmationResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePhoneConfirmationResponseV1 instance
         */
        public static create(properties?: inout.ICreatePhoneConfirmationResponseV1): inout.CreatePhoneConfirmationResponseV1;

        /**
         * Encodes the specified CreatePhoneConfirmationResponseV1 message. Does not implicitly {@link inout.CreatePhoneConfirmationResponseV1.verify|verify} messages.
         * @param message CreatePhoneConfirmationResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreatePhoneConfirmationResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePhoneConfirmationResponseV1 message, length delimited. Does not implicitly {@link inout.CreatePhoneConfirmationResponseV1.verify|verify} messages.
         * @param message CreatePhoneConfirmationResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreatePhoneConfirmationResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePhoneConfirmationResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePhoneConfirmationResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreatePhoneConfirmationResponseV1;

        /**
         * Decodes a CreatePhoneConfirmationResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePhoneConfirmationResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreatePhoneConfirmationResponseV1;

        /**
         * Verifies a CreatePhoneConfirmationResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePhoneConfirmationResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePhoneConfirmationResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreatePhoneConfirmationResponseV1;

        /**
         * Creates a plain object from a CreatePhoneConfirmationResponseV1 message. Also converts values to other types if specified.
         * @param message CreatePhoneConfirmationResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreatePhoneConfirmationResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePhoneConfirmationResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePasswordRequestV1. */
    interface ICreatePasswordRequestV1 {

        /** CreatePasswordRequestV1 userID */
        userID?: (Uint8Array|null);

        /** CreatePasswordRequestV1 value */
        value?: (string|null);
    }

    /** Represents a CreatePasswordRequestV1. */
    class CreatePasswordRequestV1 implements ICreatePasswordRequestV1 {

        /**
         * Constructs a new CreatePasswordRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreatePasswordRequestV1);

        /** CreatePasswordRequestV1 userID. */
        public userID: Uint8Array;

        /** CreatePasswordRequestV1 value. */
        public value: string;

        /**
         * Creates a new CreatePasswordRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePasswordRequestV1 instance
         */
        public static create(properties?: inout.ICreatePasswordRequestV1): inout.CreatePasswordRequestV1;

        /**
         * Encodes the specified CreatePasswordRequestV1 message. Does not implicitly {@link inout.CreatePasswordRequestV1.verify|verify} messages.
         * @param message CreatePasswordRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreatePasswordRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePasswordRequestV1 message, length delimited. Does not implicitly {@link inout.CreatePasswordRequestV1.verify|verify} messages.
         * @param message CreatePasswordRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreatePasswordRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePasswordRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePasswordRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreatePasswordRequestV1;

        /**
         * Decodes a CreatePasswordRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePasswordRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreatePasswordRequestV1;

        /**
         * Verifies a CreatePasswordRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePasswordRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePasswordRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreatePasswordRequestV1;

        /**
         * Creates a plain object from a CreatePasswordRequestV1 message. Also converts values to other types if specified.
         * @param message CreatePasswordRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreatePasswordRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePasswordRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePasswordBadRequestResponseV1. */
    interface ICreatePasswordBadRequestResponseV1 {

        /** CreatePasswordBadRequestResponseV1 userID */
        userID?: (string[]|null);

        /** CreatePasswordBadRequestResponseV1 value */
        value?: (string[]|null);
    }

    /** Represents a CreatePasswordBadRequestResponseV1. */
    class CreatePasswordBadRequestResponseV1 implements ICreatePasswordBadRequestResponseV1 {

        /**
         * Constructs a new CreatePasswordBadRequestResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreatePasswordBadRequestResponseV1);

        /** CreatePasswordBadRequestResponseV1 userID. */
        public userID: string[];

        /** CreatePasswordBadRequestResponseV1 value. */
        public value: string[];

        /**
         * Creates a new CreatePasswordBadRequestResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePasswordBadRequestResponseV1 instance
         */
        public static create(properties?: inout.ICreatePasswordBadRequestResponseV1): inout.CreatePasswordBadRequestResponseV1;

        /**
         * Encodes the specified CreatePasswordBadRequestResponseV1 message. Does not implicitly {@link inout.CreatePasswordBadRequestResponseV1.verify|verify} messages.
         * @param message CreatePasswordBadRequestResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreatePasswordBadRequestResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePasswordBadRequestResponseV1 message, length delimited. Does not implicitly {@link inout.CreatePasswordBadRequestResponseV1.verify|verify} messages.
         * @param message CreatePasswordBadRequestResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreatePasswordBadRequestResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePasswordBadRequestResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePasswordBadRequestResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreatePasswordBadRequestResponseV1;

        /**
         * Decodes a CreatePasswordBadRequestResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePasswordBadRequestResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreatePasswordBadRequestResponseV1;

        /**
         * Verifies a CreatePasswordBadRequestResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePasswordBadRequestResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePasswordBadRequestResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreatePasswordBadRequestResponseV1;

        /**
         * Creates a plain object from a CreatePasswordBadRequestResponseV1 message. Also converts values to other types if specified.
         * @param message CreatePasswordBadRequestResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreatePasswordBadRequestResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePasswordBadRequestResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePasswordResponseV1. */
    interface ICreatePasswordResponseV1 {

        /** CreatePasswordResponseV1 id */
        id?: (Uint8Array|null);

        /** CreatePasswordResponseV1 created */
        created?: (number|Long|null);

        /** CreatePasswordResponseV1 userID */
        userID?: (Uint8Array|null);
    }

    /** Represents a CreatePasswordResponseV1. */
    class CreatePasswordResponseV1 implements ICreatePasswordResponseV1 {

        /**
         * Constructs a new CreatePasswordResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreatePasswordResponseV1);

        /** CreatePasswordResponseV1 id. */
        public id: Uint8Array;

        /** CreatePasswordResponseV1 created. */
        public created: (number|Long);

        /** CreatePasswordResponseV1 userID. */
        public userID: Uint8Array;

        /**
         * Creates a new CreatePasswordResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePasswordResponseV1 instance
         */
        public static create(properties?: inout.ICreatePasswordResponseV1): inout.CreatePasswordResponseV1;

        /**
         * Encodes the specified CreatePasswordResponseV1 message. Does not implicitly {@link inout.CreatePasswordResponseV1.verify|verify} messages.
         * @param message CreatePasswordResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreatePasswordResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePasswordResponseV1 message, length delimited. Does not implicitly {@link inout.CreatePasswordResponseV1.verify|verify} messages.
         * @param message CreatePasswordResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreatePasswordResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePasswordResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePasswordResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreatePasswordResponseV1;

        /**
         * Decodes a CreatePasswordResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePasswordResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreatePasswordResponseV1;

        /**
         * Verifies a CreatePasswordResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePasswordResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePasswordResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreatePasswordResponseV1;

        /**
         * Creates a plain object from a CreatePasswordResponseV1 message. Also converts values to other types if specified.
         * @param message CreatePasswordResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreatePasswordResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePasswordResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateUserRequestV1. */
    interface ICreateUserRequestV1 {

        /** CreateUserRequestV1 password */
        password?: (string|null);

        /** CreateUserRequestV1 phone */
        phone?: (string|null);

        /** CreateUserRequestV1 email */
        email?: (string|null);

        /** CreateUserRequestV1 phoneCode */
        phoneCode?: (string|null);

        /** CreateUserRequestV1 emailCode */
        emailCode?: (string|null);
    }

    /** Represents a CreateUserRequestV1. */
    class CreateUserRequestV1 implements ICreateUserRequestV1 {

        /**
         * Constructs a new CreateUserRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateUserRequestV1);

        /** CreateUserRequestV1 password. */
        public password: string;

        /** CreateUserRequestV1 phone. */
        public phone: string;

        /** CreateUserRequestV1 email. */
        public email: string;

        /** CreateUserRequestV1 phoneCode. */
        public phoneCode: string;

        /** CreateUserRequestV1 emailCode. */
        public emailCode: string;

        /**
         * Creates a new CreateUserRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateUserRequestV1 instance
         */
        public static create(properties?: inout.ICreateUserRequestV1): inout.CreateUserRequestV1;

        /**
         * Encodes the specified CreateUserRequestV1 message. Does not implicitly {@link inout.CreateUserRequestV1.verify|verify} messages.
         * @param message CreateUserRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateUserRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateUserRequestV1 message, length delimited. Does not implicitly {@link inout.CreateUserRequestV1.verify|verify} messages.
         * @param message CreateUserRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateUserRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateUserRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateUserRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateUserRequestV1;

        /**
         * Decodes a CreateUserRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateUserRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateUserRequestV1;

        /**
         * Verifies a CreateUserRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateUserRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateUserRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateUserRequestV1;

        /**
         * Creates a plain object from a CreateUserRequestV1 message. Also converts values to other types if specified.
         * @param message CreateUserRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateUserRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateUserRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateUserBadRequestV1. */
    interface ICreateUserBadRequestV1 {

        /** CreateUserBadRequestV1 password */
        password?: (string[]|null);

        /** CreateUserBadRequestV1 phone */
        phone?: (string[]|null);

        /** CreateUserBadRequestV1 email */
        email?: (string[]|null);

        /** CreateUserBadRequestV1 phoneCode */
        phoneCode?: (string[]|null);

        /** CreateUserBadRequestV1 emailCode */
        emailCode?: (string[]|null);

        /** CreateUserBadRequestV1 errors */
        errors?: (string[]|null);
    }

    /** Represents a CreateUserBadRequestV1. */
    class CreateUserBadRequestV1 implements ICreateUserBadRequestV1 {

        /**
         * Constructs a new CreateUserBadRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateUserBadRequestV1);

        /** CreateUserBadRequestV1 password. */
        public password: string[];

        /** CreateUserBadRequestV1 phone. */
        public phone: string[];

        /** CreateUserBadRequestV1 email. */
        public email: string[];

        /** CreateUserBadRequestV1 phoneCode. */
        public phoneCode: string[];

        /** CreateUserBadRequestV1 emailCode. */
        public emailCode: string[];

        /** CreateUserBadRequestV1 errors. */
        public errors: string[];

        /**
         * Creates a new CreateUserBadRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateUserBadRequestV1 instance
         */
        public static create(properties?: inout.ICreateUserBadRequestV1): inout.CreateUserBadRequestV1;

        /**
         * Encodes the specified CreateUserBadRequestV1 message. Does not implicitly {@link inout.CreateUserBadRequestV1.verify|verify} messages.
         * @param message CreateUserBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateUserBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateUserBadRequestV1 message, length delimited. Does not implicitly {@link inout.CreateUserBadRequestV1.verify|verify} messages.
         * @param message CreateUserBadRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateUserBadRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateUserBadRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateUserBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateUserBadRequestV1;

        /**
         * Decodes a CreateUserBadRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateUserBadRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateUserBadRequestV1;

        /**
         * Verifies a CreateUserBadRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateUserBadRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateUserBadRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateUserBadRequestV1;

        /**
         * Creates a plain object from a CreateUserBadRequestV1 message. Also converts values to other types if specified.
         * @param message CreateUserBadRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateUserBadRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateUserBadRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserResponseV1. */
    interface IGetUserResponseV1 {

        /** GetUserResponseV1 id */
        id?: (Uint8Array|null);

        /** GetUserResponseV1 created */
        created?: (number|Long|null);
    }

    /** Represents a GetUserResponseV1. */
    class GetUserResponseV1 implements IGetUserResponseV1 {

        /**
         * Constructs a new GetUserResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.IGetUserResponseV1);

        /** GetUserResponseV1 id. */
        public id: Uint8Array;

        /** GetUserResponseV1 created. */
        public created: (number|Long);

        /**
         * Creates a new GetUserResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserResponseV1 instance
         */
        public static create(properties?: inout.IGetUserResponseV1): inout.GetUserResponseV1;

        /**
         * Encodes the specified GetUserResponseV1 message. Does not implicitly {@link inout.GetUserResponseV1.verify|verify} messages.
         * @param message GetUserResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.IGetUserResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserResponseV1 message, length delimited. Does not implicitly {@link inout.GetUserResponseV1.verify|verify} messages.
         * @param message GetUserResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.IGetUserResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.GetUserResponseV1;

        /**
         * Decodes a GetUserResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.GetUserResponseV1;

        /**
         * Verifies a GetUserResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.GetUserResponseV1;

        /**
         * Creates a plain object from a GetUserResponseV1 message. Also converts values to other types if specified.
         * @param message GetUserResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.GetUserResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListUserResponseV1. */
    interface IListUserResponseV1 {

        /** ListUserResponseV1 data */
        data?: (inout.IGetUserResponseV1[]|null);
    }

    /** Represents a ListUserResponseV1. */
    class ListUserResponseV1 implements IListUserResponseV1 {

        /**
         * Constructs a new ListUserResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.IListUserResponseV1);

        /** ListUserResponseV1 data. */
        public data: inout.IGetUserResponseV1[];

        /**
         * Creates a new ListUserResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListUserResponseV1 instance
         */
        public static create(properties?: inout.IListUserResponseV1): inout.ListUserResponseV1;

        /**
         * Encodes the specified ListUserResponseV1 message. Does not implicitly {@link inout.ListUserResponseV1.verify|verify} messages.
         * @param message ListUserResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.IListUserResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListUserResponseV1 message, length delimited. Does not implicitly {@link inout.ListUserResponseV1.verify|verify} messages.
         * @param message ListUserResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.IListUserResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListUserResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListUserResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.ListUserResponseV1;

        /**
         * Decodes a ListUserResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListUserResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.ListUserResponseV1;

        /**
         * Verifies a ListUserResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListUserResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListUserResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.ListUserResponseV1;

        /**
         * Creates a plain object from a ListUserResponseV1 message. Also converts values to other types if specified.
         * @param message ListUserResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.ListUserResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListUserResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateSessionRequestV1. */
    interface ICreateSessionRequestV1 {

        /** CreateSessionRequestV1 fingerprint */
        fingerprint?: (string|null);

        /** CreateSessionRequestV1 userAgent */
        userAgent?: (string|null);

        /** CreateSessionRequestV1 phoneAndPassword */
        phoneAndPassword?: (inout.CreateSessionRequestV1.IPhoneAndPassword|null);

        /** CreateSessionRequestV1 phoneAndCode */
        phoneAndCode?: (inout.CreateSessionRequestV1.IPhoneAndCode|null);

        /** CreateSessionRequestV1 emailAndPassword */
        emailAndPassword?: (inout.CreateSessionRequestV1.IEmailAndPassword|null);

        /** CreateSessionRequestV1 emailAndCode */
        emailAndCode?: (inout.CreateSessionRequestV1.IEmailAndCode|null);

        /** CreateSessionRequestV1 tokens */
        tokens?: (inout.CreateSessionRequestV1.ITokens|null);
    }

    /** Represents a CreateSessionRequestV1. */
    class CreateSessionRequestV1 implements ICreateSessionRequestV1 {

        /**
         * Constructs a new CreateSessionRequestV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateSessionRequestV1);

        /** CreateSessionRequestV1 fingerprint. */
        public fingerprint: string;

        /** CreateSessionRequestV1 userAgent. */
        public userAgent: string;

        /** CreateSessionRequestV1 phoneAndPassword. */
        public phoneAndPassword?: (inout.CreateSessionRequestV1.IPhoneAndPassword|null);

        /** CreateSessionRequestV1 phoneAndCode. */
        public phoneAndCode?: (inout.CreateSessionRequestV1.IPhoneAndCode|null);

        /** CreateSessionRequestV1 emailAndPassword. */
        public emailAndPassword?: (inout.CreateSessionRequestV1.IEmailAndPassword|null);

        /** CreateSessionRequestV1 emailAndCode. */
        public emailAndCode?: (inout.CreateSessionRequestV1.IEmailAndCode|null);

        /** CreateSessionRequestV1 tokens. */
        public tokens?: (inout.CreateSessionRequestV1.ITokens|null);

        /** CreateSessionRequestV1 data. */
        public data?: ("phoneAndPassword"|"phoneAndCode"|"emailAndPassword"|"emailAndCode"|"tokens");

        /**
         * Creates a new CreateSessionRequestV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateSessionRequestV1 instance
         */
        public static create(properties?: inout.ICreateSessionRequestV1): inout.CreateSessionRequestV1;

        /**
         * Encodes the specified CreateSessionRequestV1 message. Does not implicitly {@link inout.CreateSessionRequestV1.verify|verify} messages.
         * @param message CreateSessionRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateSessionRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateSessionRequestV1 message, length delimited. Does not implicitly {@link inout.CreateSessionRequestV1.verify|verify} messages.
         * @param message CreateSessionRequestV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateSessionRequestV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateSessionRequestV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateSessionRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateSessionRequestV1;

        /**
         * Decodes a CreateSessionRequestV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateSessionRequestV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateSessionRequestV1;

        /**
         * Verifies a CreateSessionRequestV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateSessionRequestV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateSessionRequestV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateSessionRequestV1;

        /**
         * Creates a plain object from a CreateSessionRequestV1 message. Also converts values to other types if specified.
         * @param message CreateSessionRequestV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateSessionRequestV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateSessionRequestV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CreateSessionRequestV1 {

        /** Properties of a PhoneAndPassword. */
        interface IPhoneAndPassword {

            /** PhoneAndPassword phone */
            phone?: (string|null);

            /** PhoneAndPassword password */
            password?: (string|null);
        }

        /** Represents a PhoneAndPassword. */
        class PhoneAndPassword implements IPhoneAndPassword {

            /**
             * Constructs a new PhoneAndPassword.
             * @param [properties] Properties to set
             */
            constructor(properties?: inout.CreateSessionRequestV1.IPhoneAndPassword);

            /** PhoneAndPassword phone. */
            public phone: string;

            /** PhoneAndPassword password. */
            public password: string;

            /**
             * Creates a new PhoneAndPassword instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhoneAndPassword instance
             */
            public static create(properties?: inout.CreateSessionRequestV1.IPhoneAndPassword): inout.CreateSessionRequestV1.PhoneAndPassword;

            /**
             * Encodes the specified PhoneAndPassword message. Does not implicitly {@link inout.CreateSessionRequestV1.PhoneAndPassword.verify|verify} messages.
             * @param message PhoneAndPassword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: inout.CreateSessionRequestV1.IPhoneAndPassword, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhoneAndPassword message, length delimited. Does not implicitly {@link inout.CreateSessionRequestV1.PhoneAndPassword.verify|verify} messages.
             * @param message PhoneAndPassword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: inout.CreateSessionRequestV1.IPhoneAndPassword, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhoneAndPassword message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhoneAndPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateSessionRequestV1.PhoneAndPassword;

            /**
             * Decodes a PhoneAndPassword message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhoneAndPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateSessionRequestV1.PhoneAndPassword;

            /**
             * Verifies a PhoneAndPassword message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhoneAndPassword message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhoneAndPassword
             */
            public static fromObject(object: { [k: string]: any }): inout.CreateSessionRequestV1.PhoneAndPassword;

            /**
             * Creates a plain object from a PhoneAndPassword message. Also converts values to other types if specified.
             * @param message PhoneAndPassword
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: inout.CreateSessionRequestV1.PhoneAndPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhoneAndPassword to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PhoneAndCode. */
        interface IPhoneAndCode {

            /** PhoneAndCode phone */
            phone?: (string|null);

            /** PhoneAndCode code */
            code?: (string|null);
        }

        /** Represents a PhoneAndCode. */
        class PhoneAndCode implements IPhoneAndCode {

            /**
             * Constructs a new PhoneAndCode.
             * @param [properties] Properties to set
             */
            constructor(properties?: inout.CreateSessionRequestV1.IPhoneAndCode);

            /** PhoneAndCode phone. */
            public phone: string;

            /** PhoneAndCode code. */
            public code: string;

            /**
             * Creates a new PhoneAndCode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhoneAndCode instance
             */
            public static create(properties?: inout.CreateSessionRequestV1.IPhoneAndCode): inout.CreateSessionRequestV1.PhoneAndCode;

            /**
             * Encodes the specified PhoneAndCode message. Does not implicitly {@link inout.CreateSessionRequestV1.PhoneAndCode.verify|verify} messages.
             * @param message PhoneAndCode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: inout.CreateSessionRequestV1.IPhoneAndCode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhoneAndCode message, length delimited. Does not implicitly {@link inout.CreateSessionRequestV1.PhoneAndCode.verify|verify} messages.
             * @param message PhoneAndCode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: inout.CreateSessionRequestV1.IPhoneAndCode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhoneAndCode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhoneAndCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateSessionRequestV1.PhoneAndCode;

            /**
             * Decodes a PhoneAndCode message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhoneAndCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateSessionRequestV1.PhoneAndCode;

            /**
             * Verifies a PhoneAndCode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhoneAndCode message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhoneAndCode
             */
            public static fromObject(object: { [k: string]: any }): inout.CreateSessionRequestV1.PhoneAndCode;

            /**
             * Creates a plain object from a PhoneAndCode message. Also converts values to other types if specified.
             * @param message PhoneAndCode
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: inout.CreateSessionRequestV1.PhoneAndCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhoneAndCode to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EmailAndPassword. */
        interface IEmailAndPassword {

            /** EmailAndPassword email */
            email?: (string|null);

            /** EmailAndPassword password */
            password?: (string|null);
        }

        /** Represents an EmailAndPassword. */
        class EmailAndPassword implements IEmailAndPassword {

            /**
             * Constructs a new EmailAndPassword.
             * @param [properties] Properties to set
             */
            constructor(properties?: inout.CreateSessionRequestV1.IEmailAndPassword);

            /** EmailAndPassword email. */
            public email: string;

            /** EmailAndPassword password. */
            public password: string;

            /**
             * Creates a new EmailAndPassword instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EmailAndPassword instance
             */
            public static create(properties?: inout.CreateSessionRequestV1.IEmailAndPassword): inout.CreateSessionRequestV1.EmailAndPassword;

            /**
             * Encodes the specified EmailAndPassword message. Does not implicitly {@link inout.CreateSessionRequestV1.EmailAndPassword.verify|verify} messages.
             * @param message EmailAndPassword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: inout.CreateSessionRequestV1.IEmailAndPassword, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EmailAndPassword message, length delimited. Does not implicitly {@link inout.CreateSessionRequestV1.EmailAndPassword.verify|verify} messages.
             * @param message EmailAndPassword message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: inout.CreateSessionRequestV1.IEmailAndPassword, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EmailAndPassword message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EmailAndPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateSessionRequestV1.EmailAndPassword;

            /**
             * Decodes an EmailAndPassword message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EmailAndPassword
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateSessionRequestV1.EmailAndPassword;

            /**
             * Verifies an EmailAndPassword message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EmailAndPassword message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EmailAndPassword
             */
            public static fromObject(object: { [k: string]: any }): inout.CreateSessionRequestV1.EmailAndPassword;

            /**
             * Creates a plain object from an EmailAndPassword message. Also converts values to other types if specified.
             * @param message EmailAndPassword
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: inout.CreateSessionRequestV1.EmailAndPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EmailAndPassword to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EmailAndCode. */
        interface IEmailAndCode {

            /** EmailAndCode email */
            email?: (string|null);

            /** EmailAndCode code */
            code?: (string|null);
        }

        /** Represents an EmailAndCode. */
        class EmailAndCode implements IEmailAndCode {

            /**
             * Constructs a new EmailAndCode.
             * @param [properties] Properties to set
             */
            constructor(properties?: inout.CreateSessionRequestV1.IEmailAndCode);

            /** EmailAndCode email. */
            public email: string;

            /** EmailAndCode code. */
            public code: string;

            /**
             * Creates a new EmailAndCode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EmailAndCode instance
             */
            public static create(properties?: inout.CreateSessionRequestV1.IEmailAndCode): inout.CreateSessionRequestV1.EmailAndCode;

            /**
             * Encodes the specified EmailAndCode message. Does not implicitly {@link inout.CreateSessionRequestV1.EmailAndCode.verify|verify} messages.
             * @param message EmailAndCode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: inout.CreateSessionRequestV1.IEmailAndCode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EmailAndCode message, length delimited. Does not implicitly {@link inout.CreateSessionRequestV1.EmailAndCode.verify|verify} messages.
             * @param message EmailAndCode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: inout.CreateSessionRequestV1.IEmailAndCode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EmailAndCode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EmailAndCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateSessionRequestV1.EmailAndCode;

            /**
             * Decodes an EmailAndCode message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EmailAndCode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateSessionRequestV1.EmailAndCode;

            /**
             * Verifies an EmailAndCode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EmailAndCode message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EmailAndCode
             */
            public static fromObject(object: { [k: string]: any }): inout.CreateSessionRequestV1.EmailAndCode;

            /**
             * Creates a plain object from an EmailAndCode message. Also converts values to other types if specified.
             * @param message EmailAndCode
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: inout.CreateSessionRequestV1.EmailAndCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EmailAndCode to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Tokens. */
        interface ITokens {

            /** Tokens accessToken */
            accessToken?: (string|null);

            /** Tokens refreshToken */
            refreshToken?: (string|null);
        }

        /** Represents a Tokens. */
        class Tokens implements ITokens {

            /**
             * Constructs a new Tokens.
             * @param [properties] Properties to set
             */
            constructor(properties?: inout.CreateSessionRequestV1.ITokens);

            /** Tokens accessToken. */
            public accessToken: string;

            /** Tokens refreshToken. */
            public refreshToken: string;

            /**
             * Creates a new Tokens instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Tokens instance
             */
            public static create(properties?: inout.CreateSessionRequestV1.ITokens): inout.CreateSessionRequestV1.Tokens;

            /**
             * Encodes the specified Tokens message. Does not implicitly {@link inout.CreateSessionRequestV1.Tokens.verify|verify} messages.
             * @param message Tokens message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: inout.CreateSessionRequestV1.ITokens, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Tokens message, length delimited. Does not implicitly {@link inout.CreateSessionRequestV1.Tokens.verify|verify} messages.
             * @param message Tokens message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: inout.CreateSessionRequestV1.ITokens, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Tokens message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Tokens
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateSessionRequestV1.Tokens;

            /**
             * Decodes a Tokens message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Tokens
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateSessionRequestV1.Tokens;

            /**
             * Verifies a Tokens message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Tokens message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Tokens
             */
            public static fromObject(object: { [k: string]: any }): inout.CreateSessionRequestV1.Tokens;

            /**
             * Creates a plain object from a Tokens message. Also converts values to other types if specified.
             * @param message Tokens
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: inout.CreateSessionRequestV1.Tokens, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Tokens to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a CreateSessionBadRequestResponseV1. */
    interface ICreateSessionBadRequestResponseV1 {

        /** CreateSessionBadRequestResponseV1 email */
        email?: (string[]|null);

        /** CreateSessionBadRequestResponseV1 emailCode */
        emailCode?: (string[]|null);

        /** CreateSessionBadRequestResponseV1 phone */
        phone?: (string[]|null);

        /** CreateSessionBadRequestResponseV1 phoneCode */
        phoneCode?: (string[]|null);

        /** CreateSessionBadRequestResponseV1 password */
        password?: (string[]|null);

        /** CreateSessionBadRequestResponseV1 fingerprint */
        fingerprint?: (string[]|null);

        /** CreateSessionBadRequestResponseV1 userAgent */
        userAgent?: (string[]|null);
    }

    /** Represents a CreateSessionBadRequestResponseV1. */
    class CreateSessionBadRequestResponseV1 implements ICreateSessionBadRequestResponseV1 {

        /**
         * Constructs a new CreateSessionBadRequestResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateSessionBadRequestResponseV1);

        /** CreateSessionBadRequestResponseV1 email. */
        public email: string[];

        /** CreateSessionBadRequestResponseV1 emailCode. */
        public emailCode: string[];

        /** CreateSessionBadRequestResponseV1 phone. */
        public phone: string[];

        /** CreateSessionBadRequestResponseV1 phoneCode. */
        public phoneCode: string[];

        /** CreateSessionBadRequestResponseV1 password. */
        public password: string[];

        /** CreateSessionBadRequestResponseV1 fingerprint. */
        public fingerprint: string[];

        /** CreateSessionBadRequestResponseV1 userAgent. */
        public userAgent: string[];

        /**
         * Creates a new CreateSessionBadRequestResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateSessionBadRequestResponseV1 instance
         */
        public static create(properties?: inout.ICreateSessionBadRequestResponseV1): inout.CreateSessionBadRequestResponseV1;

        /**
         * Encodes the specified CreateSessionBadRequestResponseV1 message. Does not implicitly {@link inout.CreateSessionBadRequestResponseV1.verify|verify} messages.
         * @param message CreateSessionBadRequestResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateSessionBadRequestResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateSessionBadRequestResponseV1 message, length delimited. Does not implicitly {@link inout.CreateSessionBadRequestResponseV1.verify|verify} messages.
         * @param message CreateSessionBadRequestResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateSessionBadRequestResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateSessionBadRequestResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateSessionBadRequestResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateSessionBadRequestResponseV1;

        /**
         * Decodes a CreateSessionBadRequestResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateSessionBadRequestResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateSessionBadRequestResponseV1;

        /**
         * Verifies a CreateSessionBadRequestResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateSessionBadRequestResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateSessionBadRequestResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateSessionBadRequestResponseV1;

        /**
         * Creates a plain object from a CreateSessionBadRequestResponseV1 message. Also converts values to other types if specified.
         * @param message CreateSessionBadRequestResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateSessionBadRequestResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateSessionBadRequestResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateSessionResponseV1. */
    interface ICreateSessionResponseV1 {

        /** CreateSessionResponseV1 refreshToken */
        refreshToken?: (string|null);

        /** CreateSessionResponseV1 accessToken */
        accessToken?: (string|null);
    }

    /** Represents a CreateSessionResponseV1. */
    class CreateSessionResponseV1 implements ICreateSessionResponseV1 {

        /**
         * Constructs a new CreateSessionResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.ICreateSessionResponseV1);

        /** CreateSessionResponseV1 refreshToken. */
        public refreshToken: string;

        /** CreateSessionResponseV1 accessToken. */
        public accessToken: string;

        /**
         * Creates a new CreateSessionResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateSessionResponseV1 instance
         */
        public static create(properties?: inout.ICreateSessionResponseV1): inout.CreateSessionResponseV1;

        /**
         * Encodes the specified CreateSessionResponseV1 message. Does not implicitly {@link inout.CreateSessionResponseV1.verify|verify} messages.
         * @param message CreateSessionResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.ICreateSessionResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateSessionResponseV1 message, length delimited. Does not implicitly {@link inout.CreateSessionResponseV1.verify|verify} messages.
         * @param message CreateSessionResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.ICreateSessionResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateSessionResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateSessionResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.CreateSessionResponseV1;

        /**
         * Decodes a CreateSessionResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateSessionResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.CreateSessionResponseV1;

        /**
         * Verifies a CreateSessionResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateSessionResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateSessionResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.CreateSessionResponseV1;

        /**
         * Creates a plain object from a CreateSessionResponseV1 message. Also converts values to other types if specified.
         * @param message CreateSessionResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.CreateSessionResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateSessionResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserViewResponseV1. */
    interface IGetUserViewResponseV1 {

        /** GetUserViewResponseV1 id */
        id?: (Uint8Array|null);

        /** GetUserViewResponseV1 created */
        created?: (number|Long|null);

        /** GetUserViewResponseV1 roles */
        roles?: (string[]|null);

        /** GetUserViewResponseV1 phones */
        phones?: (string[]|null);

        /** GetUserViewResponseV1 emails */
        emails?: (string[]|null);
    }

    /** Represents a GetUserViewResponseV1. */
    class GetUserViewResponseV1 implements IGetUserViewResponseV1 {

        /**
         * Constructs a new GetUserViewResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.IGetUserViewResponseV1);

        /** GetUserViewResponseV1 id. */
        public id: Uint8Array;

        /** GetUserViewResponseV1 created. */
        public created: (number|Long);

        /** GetUserViewResponseV1 roles. */
        public roles: string[];

        /** GetUserViewResponseV1 phones. */
        public phones: string[];

        /** GetUserViewResponseV1 emails. */
        public emails: string[];

        /**
         * Creates a new GetUserViewResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserViewResponseV1 instance
         */
        public static create(properties?: inout.IGetUserViewResponseV1): inout.GetUserViewResponseV1;

        /**
         * Encodes the specified GetUserViewResponseV1 message. Does not implicitly {@link inout.GetUserViewResponseV1.verify|verify} messages.
         * @param message GetUserViewResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.IGetUserViewResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserViewResponseV1 message, length delimited. Does not implicitly {@link inout.GetUserViewResponseV1.verify|verify} messages.
         * @param message GetUserViewResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.IGetUserViewResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserViewResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserViewResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.GetUserViewResponseV1;

        /**
         * Decodes a GetUserViewResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserViewResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.GetUserViewResponseV1;

        /**
         * Verifies a GetUserViewResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserViewResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserViewResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.GetUserViewResponseV1;

        /**
         * Creates a plain object from a GetUserViewResponseV1 message. Also converts values to other types if specified.
         * @param message GetUserViewResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.GetUserViewResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserViewResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListUserViewResponseV1. */
    interface IListUserViewResponseV1 {

        /** ListUserViewResponseV1 data */
        data?: (inout.IGetUserViewResponseV1[]|null);
    }

    /** Represents a ListUserViewResponseV1. */
    class ListUserViewResponseV1 implements IListUserViewResponseV1 {

        /**
         * Constructs a new ListUserViewResponseV1.
         * @param [properties] Properties to set
         */
        constructor(properties?: inout.IListUserViewResponseV1);

        /** ListUserViewResponseV1 data. */
        public data: inout.IGetUserViewResponseV1[];

        /**
         * Creates a new ListUserViewResponseV1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListUserViewResponseV1 instance
         */
        public static create(properties?: inout.IListUserViewResponseV1): inout.ListUserViewResponseV1;

        /**
         * Encodes the specified ListUserViewResponseV1 message. Does not implicitly {@link inout.ListUserViewResponseV1.verify|verify} messages.
         * @param message ListUserViewResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inout.IListUserViewResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListUserViewResponseV1 message, length delimited. Does not implicitly {@link inout.ListUserViewResponseV1.verify|verify} messages.
         * @param message ListUserViewResponseV1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inout.IListUserViewResponseV1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListUserViewResponseV1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListUserViewResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inout.ListUserViewResponseV1;

        /**
         * Decodes a ListUserViewResponseV1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListUserViewResponseV1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inout.ListUserViewResponseV1;

        /**
         * Verifies a ListUserViewResponseV1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListUserViewResponseV1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListUserViewResponseV1
         */
        public static fromObject(object: { [k: string]: any }): inout.ListUserViewResponseV1;

        /**
         * Creates a plain object from a ListUserViewResponseV1 message. Also converts values to other types if specified.
         * @param message ListUserViewResponseV1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inout.ListUserViewResponseV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListUserViewResponseV1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
