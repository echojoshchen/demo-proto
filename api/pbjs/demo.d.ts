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

    /** DemoObject info */
    info?: (IInfo|null);

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

    /** DemoObject info. */
    public info?: (IInfo|null);

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

/** Properties of an Info. */
export interface IInfo {

    /** Info id */
    id?: (string|null);
}

/** Represents an Info. */
export class Info implements IInfo {

    /**
     * Constructs a new Info.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInfo);

    /** Info id. */
    public id: string;

    /**
     * Creates a new Info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Info instance
     */
    public static create(properties?: IInfo): Info;

    /**
     * Encodes the specified Info message. Does not implicitly {@link Info.verify|verify} messages.
     * @param message Info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Info message, length delimited. Does not implicitly {@link Info.verify|verify} messages.
     * @param message Info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Info;

    /**
     * Decodes an Info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Info;

    /**
     * Verifies an Info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Info
     */
    public static fromObject(object: { [k: string]: any }): Info;

    /**
     * Creates a plain object from an Info message. Also converts values to other types if specified.
     * @param message Info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** MyEnum enum. */
export enum MyEnum {
    DEFAULT = 0,
    ENABLED = 1
}

/** Represents a DemoApi */
export class DemoApi extends $protobuf.rpc.Service {

    /**
     * Constructs a new DemoApi service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new DemoApi service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DemoApi;

    /**
     * Calls DoSomething.
     * @param request DemoObject message or plain object
     * @param callback Node-style callback called with the error, if any, and DemoObject
     */
    public doSomething(request: IDemoObject, callback: DemoApi.DoSomethingCallback): void;

    /**
     * Calls DoSomething.
     * @param request DemoObject message or plain object
     * @returns Promise
     */
    public doSomething(request: IDemoObject): Promise<DemoObject>;
}

export namespace DemoApi {

    /**
     * Callback as used by {@link DemoApi#doSomething}.
     * @param error Error, if any
     * @param [response] DemoObject
     */
    type DoSomethingCallback = (error: (Error|null), response?: DemoObject) => void;
}
