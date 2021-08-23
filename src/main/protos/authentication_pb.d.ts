// package: authentication
// file: authentication.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class LoginRequest extends jspb.Message { 
    getKey(): string;
    setKey(value: string): LoginRequest;

    hasDevicename(): boolean;
    clearDevicename(): void;
    getDevicename(): string | undefined;
    setDevicename(value: string): LoginRequest;

    hasOs(): boolean;
    clearOs(): void;
    getOs(): string | undefined;
    setOs(value: string): LoginRequest;

    hasDevicetype(): boolean;
    clearDevicetype(): void;
    getDevicetype(): DeviceType | undefined;
    setDevicetype(value: DeviceType): LoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        key: string,
        devicename?: string,
        os?: string,
        devicetype?: DeviceType,
    }
}

export class LoginResponse extends jspb.Message { 
    getSessionid(): string;
    setSessionid(value: string): LoginResponse;
    getTheme(): Theme;
    setTheme(value: Theme): LoginResponse;
    getIsfirstlogin(): boolean;
    setIsfirstlogin(value: boolean): LoginResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        sessionid: string,
        theme: Theme,
        isfirstlogin: boolean,
    }
}

export enum Theme {
    VARIATION_1 = 0,
    VARIATION_2 = 1,
    VARIATION_3 = 2,
    VARIATION_4 = 3,
}

export enum DeviceType {
    PHONE = 0,
    TABLET = 1,
    PC = 2,
    LAPTOP = 3,
}
