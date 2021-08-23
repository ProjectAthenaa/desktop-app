// package: integration
// file: integration.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class EmptyRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyRequest;
    static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
    export type AsObject = {
    }
}

export class StatusResponse extends jspb.Message { 
    getStatus(): STATUS;
    setStatus(value: STATUS): StatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusResponse;
    static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse;
}

export namespace StatusResponse {
    export type AsObject = {
        status: STATUS,
    }
}

export class IDResponse extends jspb.Message { 
    getStatus(): STATUS;
    setStatus(value: STATUS): IDResponse;
    getId(): string;
    setId(value: string): IDResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IDResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IDResponse): IDResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IDResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IDResponse;
    static deserializeBinaryFromReader(message: IDResponse, reader: jspb.BinaryReader): IDResponse;
}

export namespace IDResponse {
    export type AsObject = {
        status: STATUS,
        id: string,
    }
}

export class Webhook extends jspb.Message { 
    getWebhook(): string;
    setWebhook(value: string): Webhook;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Webhook.AsObject;
    static toObject(includeInstance: boolean, msg: Webhook): Webhook.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Webhook, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Webhook;
    static deserializeBinaryFromReader(message: Webhook, reader: jspb.BinaryReader): Webhook;
}

export namespace Webhook {
    export type AsObject = {
        webhook: string,
    }
}

export class SetResponse extends jspb.Message { 
    getStatus(): STATUS;
    setStatus(value: STATUS): SetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetResponse): SetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetResponse;
    static deserializeBinaryFromReader(message: SetResponse, reader: jspb.BinaryReader): SetResponse;
}

export namespace SetResponse {
    export type AsObject = {
        status: STATUS,
    }
}

export class Delay extends jspb.Message { 
    getDelay(): number;
    setDelay(value: number): Delay;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Delay.AsObject;
    static toObject(includeInstance: boolean, msg: Delay): Delay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Delay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Delay;
    static deserializeBinaryFromReader(message: Delay, reader: jspb.BinaryReader): Delay;
}

export namespace Delay {
    export type AsObject = {
        delay: number,
    }
}

export class TestResponse extends jspb.Message { 
    getStatus(): STATUS;
    setStatus(value: STATUS): TestResponse;
    getLatency(): number;
    setLatency(value: number): TestResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TestResponse): TestResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestResponse;
    static deserializeBinaryFromReader(message: TestResponse, reader: jspb.BinaryReader): TestResponse;
}

export namespace TestResponse {
    export type AsObject = {
        status: STATUS,
        latency: number,
    }
}

export class UserSettings extends jspb.Message { 
    getId(): string;
    setId(value: string): UserSettings;
    getSuccesswebhook(): string;
    setSuccesswebhook(value: string): UserSettings;
    getDeclinewebhook(): string;
    setDeclinewebhook(value: string): UserSettings;

    hasCheckoutdelay(): boolean;
    clearCheckoutdelay(): void;
    getCheckoutdelay(): number | undefined;
    setCheckoutdelay(value: number): UserSettings;

    hasAtcdelay(): boolean;
    clearAtcdelay(): void;
    getAtcdelay(): number | undefined;
    setAtcdelay(value: number): UserSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserSettings.AsObject;
    static toObject(includeInstance: boolean, msg: UserSettings): UserSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserSettings;
    static deserializeBinaryFromReader(message: UserSettings, reader: jspb.BinaryReader): UserSettings;
}

export namespace UserSettings {
    export type AsObject = {
        id: string,
        successwebhook: string,
        declinewebhook: string,
        checkoutdelay?: number,
        atcdelay?: number,
    }
}

export class ProxyTest extends jspb.Message { 
    getLatency(): number;
    setLatency(value: number): ProxyTest;
    getStatus(): TEST_STATUS;
    setStatus(value: TEST_STATUS): ProxyTest;

    hasProxy(): boolean;
    clearProxy(): void;
    getProxy(): Proxy | undefined;
    setProxy(value?: Proxy): ProxyTest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProxyTest.AsObject;
    static toObject(includeInstance: boolean, msg: ProxyTest): ProxyTest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProxyTest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProxyTest;
    static deserializeBinaryFromReader(message: ProxyTest, reader: jspb.BinaryReader): ProxyTest;
}

export namespace ProxyTest {
    export type AsObject = {
        latency: number,
        status: TEST_STATUS,
        proxy?: Proxy.AsObject,
    }
}

export class List extends jspb.Message { 
    getId(): string;
    setId(value: string): List;
    getName(): string;
    setName(value: string): List;
    clearProxiesList(): void;
    getProxiesList(): Array<Proxy>;
    setProxiesList(value: Array<Proxy>): List;
    addProxies(value?: Proxy, index?: number): Proxy;
    getType(): PROXY_TYPE;
    setType(value: PROXY_TYPE): List;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): List.AsObject;
    static toObject(includeInstance: boolean, msg: List): List.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): List;
    static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
}

export namespace List {
    export type AsObject = {
        id: string,
        name: string,
        proxiesList: Array<Proxy.AsObject>,
        type: PROXY_TYPE,
    }
}

export class Proxy extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): string | undefined;
    setId(value: string): Proxy;

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
        id?: string,
        username?: string,
        password?: string,
        ip: string,
        port: string,
    }
}

export class CreateListRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateListRequest;
    getType(): PROXY_TYPE;
    setType(value: PROXY_TYPE): CreateListRequest;
    clearProxiesList(): void;
    getProxiesList(): Array<Proxy>;
    setProxiesList(value: Array<Proxy>): CreateListRequest;
    addProxies(value?: Proxy, index?: number): Proxy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateListRequest): CreateListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateListRequest;
    static deserializeBinaryFromReader(message: CreateListRequest, reader: jspb.BinaryReader): CreateListRequest;
}

export namespace CreateListRequest {
    export type AsObject = {
        name: string,
        type: PROXY_TYPE,
        proxiesList: Array<Proxy.AsObject>,
    }
}

export class CreateListResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): CreateListResponse;
    getStatus(): STATUS;
    setStatus(value: STATUS): CreateListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateListResponse): CreateListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateListResponse;
    static deserializeBinaryFromReader(message: CreateListResponse, reader: jspb.BinaryReader): CreateListResponse;
}

export namespace CreateListResponse {
    export type AsObject = {
        id: string,
        status: STATUS,
    }
}

export class GetListRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetListRequest): GetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetListRequest;
    static deserializeBinaryFromReader(message: GetListRequest, reader: jspb.BinaryReader): GetListRequest;
}

export namespace GetListRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetListResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetListResponse;
    getName(): string;
    setName(value: string): GetListResponse;
    getType(): PROXY_TYPE;
    setType(value: PROXY_TYPE): GetListResponse;
    clearProxiesList(): void;
    getProxiesList(): Array<Proxy>;
    setProxiesList(value: Array<Proxy>): GetListResponse;
    addProxies(value?: Proxy, index?: number): Proxy;
    getStatus(): STATUS;
    setStatus(value: STATUS): GetListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetListResponse): GetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetListResponse;
    static deserializeBinaryFromReader(message: GetListResponse, reader: jspb.BinaryReader): GetListResponse;
}

export namespace GetListResponse {
    export type AsObject = {
        id: string,
        name: string,
        type: PROXY_TYPE,
        proxiesList: Array<Proxy.AsObject>,
        status: STATUS,
    }
}

export class UpdateListRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateListRequest;
    getUpdatetype(): PROXYLIST_UPDATE_TYPE;
    setUpdatetype(value: PROXYLIST_UPDATE_TYPE): UpdateListRequest;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): UpdateListRequest;

    hasType(): boolean;
    clearType(): void;
    getType(): PROXY_TYPE | undefined;
    setType(value: PROXY_TYPE): UpdateListRequest;
    clearProxiesList(): void;
    getProxiesList(): Array<Proxy>;
    setProxiesList(value: Array<Proxy>): UpdateListRequest;
    addProxies(value?: Proxy, index?: number): Proxy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateListRequest): UpdateListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateListRequest;
    static deserializeBinaryFromReader(message: UpdateListRequest, reader: jspb.BinaryReader): UpdateListRequest;
}

export namespace UpdateListRequest {
    export type AsObject = {
        id: string,
        updatetype: PROXYLIST_UPDATE_TYPE,
        name?: string,
        type?: PROXY_TYPE,
        proxiesList: Array<Proxy.AsObject>,
    }
}

export class DeleteListRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteListRequest): DeleteListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteListRequest;
    static deserializeBinaryFromReader(message: DeleteListRequest, reader: jspb.BinaryReader): DeleteListRequest;
}

export namespace DeleteListRequest {
    export type AsObject = {
        id: string,
    }
}

export class TestListRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): TestListRequest;
    getSite(): string;
    setSite(value: string): TestListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TestListRequest): TestListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestListRequest;
    static deserializeBinaryFromReader(message: TestListRequest, reader: jspb.BinaryReader): TestListRequest;
}

export namespace TestListRequest {
    export type AsObject = {
        id: string,
        site: string,
    }
}

export class TestListResponse extends jspb.Message { 
    clearTestsList(): void;
    getTestsList(): Array<ProxyTest>;
    setTestsList(value: Array<ProxyTest>): TestListResponse;
    addTests(value?: ProxyTest, index?: number): ProxyTest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TestListResponse): TestListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestListResponse;
    static deserializeBinaryFromReader(message: TestListResponse, reader: jspb.BinaryReader): TestListResponse;
}

export namespace TestListResponse {
    export type AsObject = {
        testsList: Array<ProxyTest.AsObject>,
    }
}

export class ProxyLists extends jspb.Message { 
    clearListsList(): void;
    getListsList(): Array<List>;
    setListsList(value: Array<List>): ProxyLists;
    addLists(value?: List, index?: number): List;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProxyLists.AsObject;
    static toObject(includeInstance: boolean, msg: ProxyLists): ProxyLists.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProxyLists, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProxyLists;
    static deserializeBinaryFromReader(message: ProxyLists, reader: jspb.BinaryReader): ProxyLists;
}

export namespace ProxyLists {
    export type AsObject = {
        listsList: Array<List.AsObject>,
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
    getStatecode(): string;
    setStatecode(value: string): Address;
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
        statecode: string,
        city: string,
        zip: string,
    }
}

export class Billing extends jspb.Message { 
    getCardholdername(): string;
    setCardholdername(value: string): Billing;
    getCardnumber(): string;
    setCardnumber(value: string): Billing;
    getExpirymonth(): string;
    setExpirymonth(value: string): Billing;
    getExpiryyear(): string;
    setExpiryyear(value: string): Billing;
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
        cardholdername: string,
        cardnumber: string,
        expirymonth: string,
        expiryyear: string,
        cvv: string,
    }
}

export class EncryptedBilling extends jspb.Message { 
    getCardholdername(): string;
    setCardholdername(value: string): EncryptedBilling;
    getCardnumber(): string;
    setCardnumber(value: string): EncryptedBilling;
    getExpirymonth(): string;
    setExpirymonth(value: string): EncryptedBilling;
    getExpiryyear(): string;
    setExpiryyear(value: string): EncryptedBilling;
    getCvv(): string;
    setCvv(value: string): EncryptedBilling;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EncryptedBilling.AsObject;
    static toObject(includeInstance: boolean, msg: EncryptedBilling): EncryptedBilling.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EncryptedBilling, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EncryptedBilling;
    static deserializeBinaryFromReader(message: EncryptedBilling, reader: jspb.BinaryReader): EncryptedBilling;
}

export namespace EncryptedBilling {
    export type AsObject = {
        cardholdername: string,
        cardnumber: string,
        expirymonth: string,
        expiryyear: string,
        cvv: string,
    }
}

export class Profile extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): string | undefined;
    setId(value: string): Profile;

    hasGroupid(): boolean;
    clearGroupid(): void;
    getGroupid(): string | undefined;
    setGroupid(value: string): Profile;
    getName(): string;
    setName(value: string): Profile;
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
        id?: string,
        groupid?: string,
        name: string,
        email: string,
        shipping?: Shipping.AsObject,
        billing?: Billing.AsObject,
    }
}

export class UpdateProfileRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateProfileRequest;
    getUpdatetype(): UPDATE_PROFILE_TYPE;
    setUpdatetype(value: UPDATE_PROFILE_TYPE): UpdateProfileRequest;
    getGroupid(): string;
    setGroupid(value: string): UpdateProfileRequest;

    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): string | undefined;
    setEmail(value: string): UpdateProfileRequest;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): UpdateProfileRequest;

    hasShipping(): boolean;
    clearShipping(): void;
    getShipping(): Shipping | undefined;
    setShipping(value?: Shipping): UpdateProfileRequest;

    hasBilling(): boolean;
    clearBilling(): void;
    getBilling(): Billing | undefined;
    setBilling(value?: Billing): UpdateProfileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
    static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
    export type AsObject = {
        id: string,
        updatetype: UPDATE_PROFILE_TYPE,
        groupid: string,
        email?: string,
        name?: string,
        shipping?: Shipping.AsObject,
        billing?: Billing.AsObject,
    }
}

export class GetProfileRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetProfileRequest;
    getGroupid(): string;
    setGroupid(value: string): GetProfileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProfileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProfileRequest): GetProfileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProfileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProfileRequest;
    static deserializeBinaryFromReader(message: GetProfileRequest, reader: jspb.BinaryReader): GetProfileRequest;
}

export namespace GetProfileRequest {
    export type AsObject = {
        id: string,
        groupid: string,
    }
}

export class DeleteProfileRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteProfileRequest;
    getGroupid(): string;
    setGroupid(value: string): DeleteProfileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteProfileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteProfileRequest): DeleteProfileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteProfileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteProfileRequest;
    static deserializeBinaryFromReader(message: DeleteProfileRequest, reader: jspb.BinaryReader): DeleteProfileRequest;
}

export namespace DeleteProfileRequest {
    export type AsObject = {
        id: string,
        groupid: string,
    }
}

export class ProfileGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): ProfileGroup;
    getName(): string;
    setName(value: string): ProfileGroup;
    clearProfilesList(): void;
    getProfilesList(): Array<Profile>;
    setProfilesList(value: Array<Profile>): ProfileGroup;
    addProfiles(value?: Profile, index?: number): Profile;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProfileGroup.AsObject;
    static toObject(includeInstance: boolean, msg: ProfileGroup): ProfileGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProfileGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProfileGroup;
    static deserializeBinaryFromReader(message: ProfileGroup, reader: jspb.BinaryReader): ProfileGroup;
}

export namespace ProfileGroup {
    export type AsObject = {
        id: string,
        name: string,
        profilesList: Array<Profile.AsObject>,
    }
}

export class CreateProfileGroup extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): string | undefined;
    setId(value: string): CreateProfileGroup;
    getName(): string;
    setName(value: string): CreateProfileGroup;
    clearProfilesList(): void;
    getProfilesList(): Array<string>;
    setProfilesList(value: Array<string>): CreateProfileGroup;
    addProfiles(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProfileGroup.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProfileGroup): CreateProfileGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProfileGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProfileGroup;
    static deserializeBinaryFromReader(message: CreateProfileGroup, reader: jspb.BinaryReader): CreateProfileGroup;
}

export namespace CreateProfileGroup {
    export type AsObject = {
        id?: string,
        name: string,
        profilesList: Array<string>,
    }
}

export class UpdateGroupRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateGroupRequest;
    getUpdatetype(): UPDATE_PROFILEGROUP_TYPE;
    setUpdatetype(value: UPDATE_PROFILEGROUP_TYPE): UpdateGroupRequest;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): UpdateGroupRequest;
    clearProfileidsList(): void;
    getProfileidsList(): Array<string>;
    setProfileidsList(value: Array<string>): UpdateGroupRequest;
    addProfileids(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateGroupRequest): UpdateGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateGroupRequest;
    static deserializeBinaryFromReader(message: UpdateGroupRequest, reader: jspb.BinaryReader): UpdateGroupRequest;
}

export namespace UpdateGroupRequest {
    export type AsObject = {
        id: string,
        updatetype: UPDATE_PROFILEGROUP_TYPE,
        name?: string,
        profileidsList: Array<string>,
    }
}

export class GetGroupRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetGroupRequest): GetGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGroupRequest;
    static deserializeBinaryFromReader(message: GetGroupRequest, reader: jspb.BinaryReader): GetGroupRequest;
}

export namespace GetGroupRequest {
    export type AsObject = {
        id: string,
    }
}

export class DeleteGroupRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteGroupRequest): DeleteGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteGroupRequest;
    static deserializeBinaryFromReader(message: DeleteGroupRequest, reader: jspb.BinaryReader): DeleteGroupRequest;
}

export namespace DeleteGroupRequest {
    export type AsObject = {
        id: string,
    }
}

export class ProfileGroups extends jspb.Message { 
    clearGroupsList(): void;
    getGroupsList(): Array<ProfileGroup>;
    setGroupsList(value: Array<ProfileGroup>): ProfileGroups;
    addGroups(value?: ProfileGroup, index?: number): ProfileGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProfileGroups.AsObject;
    static toObject(includeInstance: boolean, msg: ProfileGroups): ProfileGroups.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProfileGroups, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProfileGroups;
    static deserializeBinaryFromReader(message: ProfileGroups, reader: jspb.BinaryReader): ProfileGroups;
}

export namespace ProfileGroups {
    export type AsObject = {
        groupsList: Array<ProfileGroup.AsObject>,
    }
}

export class TaskGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): TaskGroup;
    getName(): string;
    setName(value: string): TaskGroup;
    clearTasksList(): void;
    getTasksList(): Array<Task>;
    setTasksList(value: Array<Task>): TaskGroup;
    addTasks(value?: Task, index?: number): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskGroup.AsObject;
    static toObject(includeInstance: boolean, msg: TaskGroup): TaskGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskGroup;
    static deserializeBinaryFromReader(message: TaskGroup, reader: jspb.BinaryReader): TaskGroup;
}

export namespace TaskGroup {
    export type AsObject = {
        id: string,
        name: string,
        tasksList: Array<Task.AsObject>,
    }
}

export class Product extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): string | undefined;
    setId(value: string): Product;
    getName(): string;
    setName(value: string): Product;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): string | undefined;
    setImage(value: string): Product;
    clearPositivekeywordsList(): void;
    getPositivekeywordsList(): Array<string>;
    setPositivekeywordsList(value: Array<string>): Product;
    addPositivekeywords(value: string, index?: number): string;
    clearNegativekeywordsList(): void;
    getNegativekeywordsList(): Array<string>;
    setNegativekeywordsList(value: Array<string>): Product;
    addNegativekeywords(value: string, index?: number): string;
    clearSizesList(): void;
    getSizesList(): Array<string>;
    setSizesList(value: Array<string>): Product;
    addSizes(value: string, index?: number): string;

    hasLink(): boolean;
    clearLink(): void;
    getLink(): string | undefined;
    setLink(value: string): Product;
    getQuantity(): number;
    setQuantity(value: number): Product;
    getLookuptype(): LOOKUP_TYPE;
    setLookuptype(value: LOOKUP_TYPE): Product;
    clearColorsList(): void;
    getColorsList(): Array<string>;
    setColorsList(value: Array<string>): Product;
    addColors(value: string, index?: number): string;

    hasSupremecategory(): boolean;
    clearSupremecategory(): void;
    getSupremecategory(): SupremeCategory | undefined;
    setSupremecategory(value: SupremeCategory): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        id?: string,
        name: string,
        image?: string,
        positivekeywordsList: Array<string>,
        negativekeywordsList: Array<string>,
        sizesList: Array<string>,
        link?: string,
        quantity: number,
        lookuptype: LOOKUP_TYPE,
        colorsList: Array<string>,
        supremecategory?: SupremeCategory,
    }
}

export class Task extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): string | undefined;
    setId(value: string): Task;
    getSite(): Site;
    setSite(value: Site): Task;

    hasStarttime(): boolean;
    clearStarttime(): void;
    getStarttime(): number | undefined;
    setStarttime(value: number): Task;

    hasProduct(): boolean;
    clearProduct(): void;
    getProduct(): Product | undefined;
    setProduct(value?: Product): Task;
    getProxylistid(): string;
    setProxylistid(value: string): Task;
    getProfilegroupid(): string;
    setProfilegroupid(value: string): Task;
    getTaskgroupid(): string;
    setTaskgroupid(value: string): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        id?: string,
        site: Site,
        starttime?: number,
        product?: Product.AsObject,
        proxylistid: string,
        profilegroupid: string,
        taskgroupid: string,
    }
}

export class CreateTaskResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): CreateTaskResponse;
    getStatus(): STATUS;
    setStatus(value: STATUS): CreateTaskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTaskResponse): CreateTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTaskResponse;
    static deserializeBinaryFromReader(message: CreateTaskResponse, reader: jspb.BinaryReader): CreateTaskResponse;
}

export namespace CreateTaskResponse {
    export type AsObject = {
        id: string,
        status: STATUS,
    }
}

export class CreateTaskGroupResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): CreateTaskGroupResponse;
    getStatus(): STATUS;
    setStatus(value: STATUS): CreateTaskGroupResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTaskGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTaskGroupResponse): CreateTaskGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTaskGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTaskGroupResponse;
    static deserializeBinaryFromReader(message: CreateTaskGroupResponse, reader: jspb.BinaryReader): CreateTaskGroupResponse;
}

export namespace CreateTaskGroupResponse {
    export type AsObject = {
        id: string,
        status: STATUS,
    }
}

export class UpdateTask extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateTask;
    getUpdatetype(): TASK_UPDATE_TYPE;
    setUpdatetype(value: TASK_UPDATE_TYPE): UpdateTask;

    hasSite(): boolean;
    clearSite(): void;
    getSite(): Site | undefined;
    setSite(value: Site): UpdateTask;

    hasStarttime(): boolean;
    clearStarttime(): void;
    getStarttime(): number | undefined;
    setStarttime(value: number): UpdateTask;

    hasProduct(): boolean;
    clearProduct(): void;
    getProduct(): Product | undefined;
    setProduct(value?: Product): UpdateTask;

    hasProxylistid(): boolean;
    clearProxylistid(): void;
    getProxylistid(): string | undefined;
    setProxylistid(value: string): UpdateTask;

    hasProfilegroupid(): boolean;
    clearProfilegroupid(): void;
    getProfilegroupid(): string | undefined;
    setProfilegroupid(value: string): UpdateTask;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTask.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTask): UpdateTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTask;
    static deserializeBinaryFromReader(message: UpdateTask, reader: jspb.BinaryReader): UpdateTask;
}

export namespace UpdateTask {
    export type AsObject = {
        id: string,
        updatetype: TASK_UPDATE_TYPE,
        site?: Site,
        starttime?: number,
        product?: Product.AsObject,
        proxylistid?: string,
        profilegroupid?: string,
    }
}

export class GetTask extends jspb.Message { 
    getId(): string;
    setId(value: string): GetTask;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTask.AsObject;
    static toObject(includeInstance: boolean, msg: GetTask): GetTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTask;
    static deserializeBinaryFromReader(message: GetTask, reader: jspb.BinaryReader): GetTask;
}

export namespace GetTask {
    export type AsObject = {
        id: string,
    }
}

export class DeleteTask extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteTask;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTask.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTask): DeleteTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTask;
    static deserializeBinaryFromReader(message: DeleteTask, reader: jspb.BinaryReader): DeleteTask;
}

export namespace DeleteTask {
    export type AsObject = {
        id: string,
    }
}

export class CreateTaskGroup extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateTaskGroup;
    clearTasksList(): void;
    getTasksList(): Array<string>;
    setTasksList(value: Array<string>): CreateTaskGroup;
    addTasks(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTaskGroup.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTaskGroup): CreateTaskGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTaskGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTaskGroup;
    static deserializeBinaryFromReader(message: CreateTaskGroup, reader: jspb.BinaryReader): CreateTaskGroup;
}

export namespace CreateTaskGroup {
    export type AsObject = {
        name: string,
        tasksList: Array<string>,
    }
}

export class UpdateTaskGroupRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateTaskGroupRequest;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): UpdateTaskGroupRequest;
    clearTasksList(): void;
    getTasksList(): Array<Task>;
    setTasksList(value: Array<Task>): UpdateTaskGroupRequest;
    addTasks(value?: Task, index?: number): Task;
    getUpdatetype(): TASK_GROUP_UPDATE_TYPE;
    setUpdatetype(value: TASK_GROUP_UPDATE_TYPE): UpdateTaskGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTaskGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTaskGroupRequest): UpdateTaskGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTaskGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTaskGroupRequest;
    static deserializeBinaryFromReader(message: UpdateTaskGroupRequest, reader: jspb.BinaryReader): UpdateTaskGroupRequest;
}

export namespace UpdateTaskGroupRequest {
    export type AsObject = {
        id: string,
        name?: string,
        tasksList: Array<Task.AsObject>,
        updatetype: TASK_GROUP_UPDATE_TYPE,
    }
}

export class DeleteGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteGroup;
    getDeletetasks(): boolean;
    setDeletetasks(value: boolean): DeleteGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteGroup.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteGroup): DeleteGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteGroup;
    static deserializeBinaryFromReader(message: DeleteGroup, reader: jspb.BinaryReader): DeleteGroup;
}

export namespace DeleteGroup {
    export type AsObject = {
        id: string,
        deletetasks: boolean,
    }
}

export class TaskGroups extends jspb.Message { 
    clearGroupsList(): void;
    getGroupsList(): Array<TaskGroup>;
    setGroupsList(value: Array<TaskGroup>): TaskGroups;
    addGroups(value?: TaskGroup, index?: number): TaskGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskGroups.AsObject;
    static toObject(includeInstance: boolean, msg: TaskGroups): TaskGroups.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskGroups, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskGroups;
    static deserializeBinaryFromReader(message: TaskGroups, reader: jspb.BinaryReader): TaskGroups;
}

export namespace TaskGroups {
    export type AsObject = {
        groupsList: Array<TaskGroup.AsObject>,
    }
}

export class AccGroups extends jspb.Message { 
    clearGroupsList(): void;
    getGroupsList(): Array<AccountGroup>;
    setGroupsList(value: Array<AccountGroup>): AccGroups;
    addGroups(value?: AccountGroup, index?: number): AccountGroup;
    getStatus(): STATUS;
    setStatus(value: STATUS): AccGroups;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccGroups.AsObject;
    static toObject(includeInstance: boolean, msg: AccGroups): AccGroups.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccGroups, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccGroups;
    static deserializeBinaryFromReader(message: AccGroups, reader: jspb.BinaryReader): AccGroups;
}

export namespace AccGroups {
    export type AsObject = {
        groupsList: Array<AccountGroup.AsObject>,
        status: STATUS,
    }
}

export class AccountGroup extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): string | undefined;
    setId(value: string): AccountGroup;
    getName(): string;
    setName(value: string): AccountGroup;
    getSite(): Site;
    setSite(value: Site): AccountGroup;

    getAccountsMap(): jspb.Map<string, string>;
    clearAccountsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountGroup.AsObject;
    static toObject(includeInstance: boolean, msg: AccountGroup): AccountGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountGroup;
    static deserializeBinaryFromReader(message: AccountGroup, reader: jspb.BinaryReader): AccountGroup;
}

export namespace AccountGroup {
    export type AsObject = {
        id?: string,
        name: string,
        site: Site,

        accountsMap: Array<[string, string]>,
    }
}

export enum STATUS {
    CREATED = 0,
    RETRIEVED = 1,
    UPDATED = 2,
    DELETED = 3,
    NOT_FOUND = 4,
    ERROR = 5,
    TIMEOUT = 6,
    UNAUTHORIZED = 7,
    EXECUTED = 8,
    RESOURCE_ALREADY_EXISTS = 9,
    SITE_NOT_SUPPORTED = 10,
}

export enum PROXY_TYPE {
    RESIDENTIAL = 0,
    DATACENTER = 1,
    ISP = 2,
}

export enum PROXYLIST_UPDATE_TYPE {
    NAME = 0,
    TYPE = 1,
    PROXIES = 2,
}

export enum TEST_STATUS {
    PINGING = 0,
    NOT_PINGING = 1,
}

export enum UPDATE_PROFILE_TYPE {
    PROFILE_NAME = 0,
    PROFILE_EMAIL = 1,
    PROFILE_GROUP_ID = 2,
    SHIPPING = 3,
    BILLING = 4,
}

export enum UPDATE_PROFILEGROUP_TYPE {
    PROFILEGROUP_NAME = 0,
    GROUP_PROFILES = 1,
}

export enum TASK_UPDATE_TYPE {
    TASK_SITE = 0,
    TASK_STARTTIME = 1,
    TASK_PRODUCT = 2,
    TASK_PROXYLIST = 3,
    TASK_PROFILE = 4,
}

export enum TASK_GROUP_UPDATE_TYPE {
    GROUP_NAME = 0,
    GROUP_TASKS_ADD = 1,
    GROUP_TASKS_DELETE = 2,
}

export enum Site {
    FINISHLINE = 0,
    JDSPORTS = 1,
    YEEZYSUPPLY = 2,
    SUPREME = 3,
    EASYBAYUS = 4,
    CHAMPSUS = 5,
    FOOTACTIONUS = 6,
    FOOTLOCKERUS = 7,
    BESTBUY = 8,
    POKEMONCENTER = 9,
    PANINIUS = 10,
    TOPPS = 11,
    NORDSTORM = 12,
    END = 13,
    TARGET = 14,
    AMAZON = 15,
    SOLEBOX = 16,
    ONYGO = 17,
    SNIPES = 18,
    SSENSE = 19,
    WALMART = 20,
    HIBBET = 21,
}

export enum LOOKUP_TYPE {
    KEYWORDS = 0,
    LINK = 1,
}

export enum SupremeCategory {
    SKATE = 0,
    ACCESSORIES = 1,
    BAGS = 2,
    PANTS = 3,
    TOPSSWEATERS = 4,
    HATS = 5,
    JACKETS = 6,
    SHIRTS = 7,
    SWEATSHIRTS = 8,
    SHORTS = 9,
}
