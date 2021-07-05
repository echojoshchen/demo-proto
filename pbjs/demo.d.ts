import * as $protobuf from "protobufjs";
/** Properties of a DemoContainer. */
export interface IDemoContainer {

    /** DemoContainer objects */
    objects?: (IDemoObject[]|null);
}

/** Represents a DemoContainer. */
export class DemoContainer implements IDemoContainer {

    /**
     * Constructs a new DemoContainer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDemoContainer);

    /** DemoContainer objects. */
    public objects: IDemoObject[];

    /**
     * Creates a new DemoContainer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DemoContainer instance
     */
    public static create(properties?: IDemoContainer): DemoContainer;

    /**
     * Encodes the specified DemoContainer message. Does not implicitly {@link DemoContainer.verify|verify} messages.
     * @param message DemoContainer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDemoContainer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DemoContainer message, length delimited. Does not implicitly {@link DemoContainer.verify|verify} messages.
     * @param message DemoContainer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDemoContainer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DemoContainer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DemoContainer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DemoContainer;

    /**
     * Decodes a DemoContainer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DemoContainer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DemoContainer;

    /**
     * Verifies a DemoContainer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DemoContainer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DemoContainer
     */
    public static fromObject(object: { [k: string]: any }): DemoContainer;

    /**
     * Creates a plain object from a DemoContainer message. Also converts values to other types if specified.
     * @param message DemoContainer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DemoContainer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DemoContainer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DemoObject. */
export interface IDemoObject {

    /** DemoObject name */
    name?: (string|null);

    /** DemoObject type */
    type?: (string|null);

    /** DemoObject count */
    count?: (number|null);
}

/** Represents a DemoObject. */
export class DemoObject implements IDemoObject {

    /**
     * Constructs a new DemoObject.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDemoObject);

    /** DemoObject name. */
    public name: string;

    /** DemoObject type. */
    public type: string;

    /** DemoObject count. */
    public count: number;

    /**
     * Creates a new DemoObject instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DemoObject instance
     */
    public static create(properties?: IDemoObject): DemoObject;

    /**
     * Encodes the specified DemoObject message. Does not implicitly {@link DemoObject.verify|verify} messages.
     * @param message DemoObject message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDemoObject, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DemoObject message, length delimited. Does not implicitly {@link DemoObject.verify|verify} messages.
     * @param message DemoObject message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDemoObject, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DemoObject message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DemoObject
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DemoObject;

    /**
     * Decodes a DemoObject message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DemoObject
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DemoObject;

    /**
     * Verifies a DemoObject message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DemoObject message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DemoObject
     */
    public static fromObject(object: { [k: string]: any }): DemoObject;

    /**
     * Creates a plain object from a DemoObject message. Also converts values to other types if specified.
     * @param message DemoObject
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DemoObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DemoObject to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** MyEnum enum. */
export enum MyEnum {
    DEFAULT = 0,
    ENABLED = 1
}
