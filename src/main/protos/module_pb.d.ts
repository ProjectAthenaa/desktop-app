// package: module
// file: module.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Status extends jspb.Message { 
    getStatus(): STATUS;
    setStatus(value: STATUS): Status;

    hasError(): boolean;
    clearError(): void;
    getError(): string | undefined;
    setError(value: string): Status;

    getInformationMap(): jspb.Map<string, string>;
    clearInformationMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Status.AsObject;
    static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Status;
    static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
    export type AsObject = {
        status: STATUS,
        error?: string,

        informationMap: Array<[string, string]>,
    }
}

export class Controller extends jspb.Message { 
    getCommand(): COMMAND;
    setCommand(value: COMMAND): Controller;

    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): Controller;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Controller.AsObject;
    static toObject(includeInstance: boolean, msg: Controller): Controller.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Controller, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Controller;
    static deserializeBinaryFromReader(message: Controller, reader: jspb.BinaryReader): Controller;
}

export namespace Controller {
    export type AsObject = {
        command: COMMAND,
        data?: Data.AsObject,
    }
}

export class Data extends jspb.Message { 

    hasProfile(): boolean;
    clearProfile(): void;
    getProfile(): Profile | undefined;
    setProfile(value?: Profile): Data;

    hasProxy(): boolean;
    clearProxy(): void;
    getProxy(): Proxy | undefined;
    setProxy(value?: Proxy): Data;
    getMonitorchannel(): string;
    setMonitorchannel(value: string): Data;

    hasTaskdata(): boolean;
    clearTaskdata(): void;
    getTaskdata(): TaskData | undefined;
    setTaskdata(value?: TaskData): Data;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
    export type AsObject = {
        profile?: Profile.AsObject,
        proxy?: Proxy.AsObject,
        monitorchannel: string,
        taskdata?: TaskData.AsObject,
    }
}

export class TaskData extends jspb.Message { 
    getRandomsize(): boolean;
    setRandomsize(value: boolean): TaskData;
    getRandomcolor(): boolean;
    setRandomcolor(value: boolean): TaskData;
    clearColorList(): void;
    getColorList(): Array<string>;
    setColorList(value: Array<string>): TaskData;
    addColor(value: string, index?: number): string;
    clearSizeList(): void;
    getSizeList(): Array<string>;
    setSizeList(value: Array<string>): TaskData;
    addSize(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskData.AsObject;
    static toObject(includeInstance: boolean, msg: TaskData): TaskData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskData;
    static deserializeBinaryFromReader(message: TaskData, reader: jspb.BinaryReader): TaskData;
}

export namespace TaskData {
    export type AsObject = {
        randomsize: boolean,
        randomcolor: boolean,
        colorList: Array<string>,
        sizeList: Array<string>,
    }
}

export class SizeColor extends jspb.Message { 
    clearColorList(): void;
    getColorList(): Array<string>;
    setColorList(value: Array<string>): SizeColor;
    addColor(value: string, index?: number): string;
    clearSizeList(): void;
    getSizeList(): Array<string>;
    setSizeList(value: Array<string>): SizeColor;
    addSize(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SizeColor.AsObject;
    static toObject(includeInstance: boolean, msg: SizeColor): SizeColor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SizeColor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SizeColor;
    static deserializeBinaryFromReader(message: SizeColor, reader: jspb.BinaryReader): SizeColor;
}

export namespace SizeColor {
    export type AsObject = {
        colorList: Array<string>,
        sizeList: Array<string>,
    }
}

export class Profile extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): Profile;

    hasShipping(): boolean;
    clearShipping(): void;
    getShipping(): Shipping | undefined;
    setShipping(value?: Shipping): Profile;

    hasBilling(): boolean;
    clearBilling(): void;
    getBilling(): Billing | undefined;
    setBilling(value?: Billing): Profile;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Profile.AsObject;
    static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Profile;
    static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
    export type AsObject = {
        email: string,
        shipping?: Shipping.AsObject,
        billing?: Billing.AsObject,
    }
}

export class Shipping extends jspb.Message { 
    getFirstname(): string;
    setFirstname(value: string): Shipping;
    getLastname(): string;
    setLastname(value: string): Shipping;
    getPhonenumber(): string;
    setPhonenumber(value: string): Shipping;

    hasShippingaddress(): boolean;
    clearShippingaddress(): void;
    getShippingaddress(): Address | undefined;
    setShippingaddress(value?: Address): Shipping;

    hasBillingaddress(): boolean;
    clearBillingaddress(): void;
    getBillingaddress(): Address | undefined;
    setBillingaddress(value?: Address): Shipping;
    getBillingisshipping(): boolean;
    setBillingisshipping(value: boolean): Shipping;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Shipping.AsObject;
    static toObject(includeInstance: boolean, msg: Shipping): Shipping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Shipping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Shipping;
    static deserializeBinaryFromReader(message: Shipping, reader: jspb.BinaryReader): Shipping;
}

export namespace Shipping {
    export type AsObject = {
        firstname: string,
        lastname: string,
        phonenumber: string,
        shippingaddress?: Address.AsObject,
        billingaddress?: Address.AsObject,
        billingisshipping: boolean,
    }
}

export class Address extends jspb.Message { 
    getAddressline(): string;
    setAddressline(value: string): Address;

    hasAddressline2(): boolean;
    clearAddressline2(): void;
    getAddressline2(): string | undefined;
    setAddressline2(value: string): Address;
    getCountry(): string;
    setCountry(value: string): Address;
    getState(): string;
    setState(value: string): Address;
    getCity(): string;
    setCity(value: string): Address;
    getZip(): string;
    setZip(value: string): Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
    export type AsObject = {
        addressline: string,
        addressline2?: string,
        country: string,
        state: string,
        city: string,
        zip: string,
    }
}

export class Billing extends jspb.Message { 
    getNumber(): string;
    setNumber(value: string): Billing;
    getExpirationmonth(): string;
    setExpirationmonth(value: string): Billing;
    getExpirationyear(): string;
    setExpirationyear(value: string): Billing;
    getCvv(): string;
    setCvv(value: string): Billing;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Billing.AsObject;
    static toObject(includeInstance: boolean, msg: Billing): Billing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Billing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Billing;
    static deserializeBinaryFromReader(message: Billing, reader: jspb.BinaryReader): Billing;
}

export namespace Billing {
    export type AsObject = {
        number: string,
        expirationmonth: string,
        expirationyear: string,
        cvv: string,
    }
}

export class Proxy extends jspb.Message { 

    hasUsername(): boolean;
    clearUsername(): void;
    getUsername(): string | undefined;
    setUsername(value: string): Proxy;

    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): string | undefined;
    setPassword(value: string): Proxy;
    getIp(): string;
    setIp(value: string): Proxy;
    getPort(): string;
    setPort(value: string): Proxy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Proxy.AsObject;
    static toObject(includeInstance: boolean, msg: Proxy): Proxy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Proxy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Proxy;
    static deserializeBinaryFromReader(message: Proxy, reader: jspb.BinaryReader): Proxy;
}

export namespace Proxy {
    export type AsObject = {
        username?: string,
        password?: string,
        ip: string,
        port: string,
    }
}

export enum COMMAND {
    STOP = 0,
    START = 1,
    PAUSE = 2,
    CONTINUE = 3,
}

export enum STATUS {
    STARTING = 0,
    MONITORING = 1,
    PRODUCT_FOUND = 2,
    ADDING_TO_CART = 3,
    SOLVING_CAPTCHA = 4,
    CHECKING_OUT = 5,
    CHECKED_OUT = 6,
    ERROR = 7,
    ACTION_NEEDED = 8,
    GENERATING_COOKIES = 9,
    TASK_NOT_FOUND = 10,
    WAITING_FOR_CHECKOUT = 11,
    CHECKOUT_ERROR = 12,
    CHECKOUT_FAILED = 13,
    CHECKOUT_DUPLICATE = 14,
    CHECKOUT_OOS = 15,
    CHECKOUT_DECLINE = 16,
    CHECKOUT_WAITING_FOR_3DS = 17,
    CHECKOUT_3DS_ERROR = 18,
}
