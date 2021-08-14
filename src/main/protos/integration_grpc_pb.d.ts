// package: integration
// file: integration.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as integration_pb from "./integration_pb";

interface ISettingsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setSuccessWebhook: ISettingsService_ISetSuccessWebhook;
    setDeclineWebhook: ISettingsService_ISetDeclineWebhook;
    setCheckoutDelay: ISettingsService_ISetCheckoutDelay;
    setATCDelay: ISettingsService_ISetATCDelay;
    get: ISettingsService_IGet;
    testSuccessWebhook: ISettingsService_ITestSuccessWebhook;
    testDeclineWebhook: ISettingsService_ITestDeclineWebhook;
}

interface ISettingsService_ISetSuccessWebhook extends grpc.MethodDefinition<integration_pb.Webhook, integration_pb.SetResponse> {
    path: "/integration.Settings/SetSuccessWebhook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.Webhook>;
    requestDeserialize: grpc.deserialize<integration_pb.Webhook>;
    responseSerialize: grpc.serialize<integration_pb.SetResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.SetResponse>;
}
interface ISettingsService_ISetDeclineWebhook extends grpc.MethodDefinition<integration_pb.Webhook, integration_pb.SetResponse> {
    path: "/integration.Settings/SetDeclineWebhook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.Webhook>;
    requestDeserialize: grpc.deserialize<integration_pb.Webhook>;
    responseSerialize: grpc.serialize<integration_pb.SetResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.SetResponse>;
}
interface ISettingsService_ISetCheckoutDelay extends grpc.MethodDefinition<integration_pb.Delay, integration_pb.SetResponse> {
    path: "/integration.Settings/SetCheckoutDelay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.Delay>;
    requestDeserialize: grpc.deserialize<integration_pb.Delay>;
    responseSerialize: grpc.serialize<integration_pb.SetResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.SetResponse>;
}
interface ISettingsService_ISetATCDelay extends grpc.MethodDefinition<integration_pb.Delay, integration_pb.SetResponse> {
    path: "/integration.Settings/SetATCDelay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.Delay>;
    requestDeserialize: grpc.deserialize<integration_pb.Delay>;
    responseSerialize: grpc.serialize<integration_pb.SetResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.SetResponse>;
}
interface ISettingsService_IGet extends grpc.MethodDefinition<integration_pb.EmptyRequest, integration_pb.UserSettings> {
    path: "/integration.Settings/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<integration_pb.UserSettings>;
    responseDeserialize: grpc.deserialize<integration_pb.UserSettings>;
}
interface ISettingsService_ITestSuccessWebhook extends grpc.MethodDefinition<integration_pb.EmptyRequest, integration_pb.TestResponse> {
    path: "/integration.Settings/TestSuccessWebhook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<integration_pb.TestResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.TestResponse>;
}
interface ISettingsService_ITestDeclineWebhook extends grpc.MethodDefinition<integration_pb.EmptyRequest, integration_pb.TestResponse> {
    path: "/integration.Settings/TestDeclineWebhook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<integration_pb.TestResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.TestResponse>;
}

export const SettingsService: ISettingsService;

export interface ISettingsServer {
    setSuccessWebhook: grpc.handleUnaryCall<integration_pb.Webhook, integration_pb.SetResponse>;
    setDeclineWebhook: grpc.handleUnaryCall<integration_pb.Webhook, integration_pb.SetResponse>;
    setCheckoutDelay: grpc.handleUnaryCall<integration_pb.Delay, integration_pb.SetResponse>;
    setATCDelay: grpc.handleUnaryCall<integration_pb.Delay, integration_pb.SetResponse>;
    get: grpc.handleUnaryCall<integration_pb.EmptyRequest, integration_pb.UserSettings>;
    testSuccessWebhook: grpc.handleUnaryCall<integration_pb.EmptyRequest, integration_pb.TestResponse>;
    testDeclineWebhook: grpc.handleUnaryCall<integration_pb.EmptyRequest, integration_pb.TestResponse>;
}

export interface ISettingsClient {
    setSuccessWebhook(request: integration_pb.Webhook, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    setSuccessWebhook(request: integration_pb.Webhook, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    setSuccessWebhook(request: integration_pb.Webhook, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    setDeclineWebhook(request: integration_pb.Webhook, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    setDeclineWebhook(request: integration_pb.Webhook, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    setDeclineWebhook(request: integration_pb.Webhook, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    setCheckoutDelay(request: integration_pb.Delay, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    setCheckoutDelay(request: integration_pb.Delay, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    setCheckoutDelay(request: integration_pb.Delay, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    setATCDelay(request: integration_pb.Delay, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    setATCDelay(request: integration_pb.Delay, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    setATCDelay(request: integration_pb.Delay, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    get(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.UserSettings) => void): grpc.ClientUnaryCall;
    get(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.UserSettings) => void): grpc.ClientUnaryCall;
    get(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.UserSettings) => void): grpc.ClientUnaryCall;
    testSuccessWebhook(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.TestResponse) => void): grpc.ClientUnaryCall;
    testSuccessWebhook(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.TestResponse) => void): grpc.ClientUnaryCall;
    testSuccessWebhook(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.TestResponse) => void): grpc.ClientUnaryCall;
    testDeclineWebhook(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.TestResponse) => void): grpc.ClientUnaryCall;
    testDeclineWebhook(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.TestResponse) => void): grpc.ClientUnaryCall;
    testDeclineWebhook(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.TestResponse) => void): grpc.ClientUnaryCall;
}

export class SettingsClient extends grpc.Client implements ISettingsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setSuccessWebhook(request: integration_pb.Webhook, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    public setSuccessWebhook(request: integration_pb.Webhook, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    public setSuccessWebhook(request: integration_pb.Webhook, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    public setDeclineWebhook(request: integration_pb.Webhook, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    public setDeclineWebhook(request: integration_pb.Webhook, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    public setDeclineWebhook(request: integration_pb.Webhook, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    public setCheckoutDelay(request: integration_pb.Delay, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    public setCheckoutDelay(request: integration_pb.Delay, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    public setCheckoutDelay(request: integration_pb.Delay, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    public setATCDelay(request: integration_pb.Delay, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    public setATCDelay(request: integration_pb.Delay, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    public setATCDelay(request: integration_pb.Delay, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.SetResponse) => void): grpc.ClientUnaryCall;
    public get(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.UserSettings) => void): grpc.ClientUnaryCall;
    public get(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.UserSettings) => void): grpc.ClientUnaryCall;
    public get(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.UserSettings) => void): grpc.ClientUnaryCall;
    public testSuccessWebhook(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.TestResponse) => void): grpc.ClientUnaryCall;
    public testSuccessWebhook(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.TestResponse) => void): grpc.ClientUnaryCall;
    public testSuccessWebhook(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.TestResponse) => void): grpc.ClientUnaryCall;
    public testDeclineWebhook(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.TestResponse) => void): grpc.ClientUnaryCall;
    public testDeclineWebhook(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.TestResponse) => void): grpc.ClientUnaryCall;
    public testDeclineWebhook(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.TestResponse) => void): grpc.ClientUnaryCall;
}

interface IProxyListService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IProxyListService_ICreate;
    get: IProxyListService_IGet;
    update: IProxyListService_IUpdate;
    delete: IProxyListService_IDelete;
    test: IProxyListService_ITest;
    getAll: IProxyListService_IGetAll;
}

interface IProxyListService_ICreate extends grpc.MethodDefinition<integration_pb.CreateListRequest, integration_pb.CreateListResponse> {
    path: "/integration.ProxyList/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.CreateListRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.CreateListRequest>;
    responseSerialize: grpc.serialize<integration_pb.CreateListResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.CreateListResponse>;
}
interface IProxyListService_IGet extends grpc.MethodDefinition<integration_pb.GetListRequest, integration_pb.GetListResponse> {
    path: "/integration.ProxyList/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.GetListRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.GetListRequest>;
    responseSerialize: grpc.serialize<integration_pb.GetListResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.GetListResponse>;
}
interface IProxyListService_IUpdate extends grpc.MethodDefinition<integration_pb.UpdateListRequest, integration_pb.StatusResponse> {
    path: "/integration.ProxyList/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.UpdateListRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.UpdateListRequest>;
    responseSerialize: grpc.serialize<integration_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.StatusResponse>;
}
interface IProxyListService_IDelete extends grpc.MethodDefinition<integration_pb.DeleteListRequest, integration_pb.StatusResponse> {
    path: "/integration.ProxyList/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.DeleteListRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.DeleteListRequest>;
    responseSerialize: grpc.serialize<integration_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.StatusResponse>;
}
interface IProxyListService_ITest extends grpc.MethodDefinition<integration_pb.TestListRequest, integration_pb.TestListResponse> {
    path: "/integration.ProxyList/Test";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.TestListRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.TestListRequest>;
    responseSerialize: grpc.serialize<integration_pb.TestListResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.TestListResponse>;
}
interface IProxyListService_IGetAll extends grpc.MethodDefinition<integration_pb.EmptyRequest, integration_pb.ProxyLists> {
    path: "/integration.ProxyList/GetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<integration_pb.ProxyLists>;
    responseDeserialize: grpc.deserialize<integration_pb.ProxyLists>;
}

export const ProxyListService: IProxyListService;

export interface IProxyListServer {
    create: grpc.handleUnaryCall<integration_pb.CreateListRequest, integration_pb.CreateListResponse>;
    get: grpc.handleUnaryCall<integration_pb.GetListRequest, integration_pb.GetListResponse>;
    update: grpc.handleUnaryCall<integration_pb.UpdateListRequest, integration_pb.StatusResponse>;
    delete: grpc.handleUnaryCall<integration_pb.DeleteListRequest, integration_pb.StatusResponse>;
    test: grpc.handleUnaryCall<integration_pb.TestListRequest, integration_pb.TestListResponse>;
    getAll: grpc.handleUnaryCall<integration_pb.EmptyRequest, integration_pb.ProxyLists>;
}

export interface IProxyListClient {
    create(request: integration_pb.CreateListRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateListResponse) => void): grpc.ClientUnaryCall;
    create(request: integration_pb.CreateListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateListResponse) => void): grpc.ClientUnaryCall;
    create(request: integration_pb.CreateListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateListResponse) => void): grpc.ClientUnaryCall;
    get(request: integration_pb.GetListRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    get(request: integration_pb.GetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    get(request: integration_pb.GetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    update(request: integration_pb.UpdateListRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    update(request: integration_pb.UpdateListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    update(request: integration_pb.UpdateListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    delete(request: integration_pb.DeleteListRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    delete(request: integration_pb.DeleteListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    delete(request: integration_pb.DeleteListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    test(request: integration_pb.TestListRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.TestListResponse) => void): grpc.ClientUnaryCall;
    test(request: integration_pb.TestListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.TestListResponse) => void): grpc.ClientUnaryCall;
    test(request: integration_pb.TestListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.TestListResponse) => void): grpc.ClientUnaryCall;
    getAll(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.ProxyLists) => void): grpc.ClientUnaryCall;
    getAll(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.ProxyLists) => void): grpc.ClientUnaryCall;
    getAll(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.ProxyLists) => void): grpc.ClientUnaryCall;
}

export class ProxyListClient extends grpc.Client implements IProxyListClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: integration_pb.CreateListRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateListResponse) => void): grpc.ClientUnaryCall;
    public create(request: integration_pb.CreateListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateListResponse) => void): grpc.ClientUnaryCall;
    public create(request: integration_pb.CreateListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateListResponse) => void): grpc.ClientUnaryCall;
    public get(request: integration_pb.GetListRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public get(request: integration_pb.GetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public get(request: integration_pb.GetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public update(request: integration_pb.UpdateListRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public update(request: integration_pb.UpdateListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public update(request: integration_pb.UpdateListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public delete(request: integration_pb.DeleteListRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public delete(request: integration_pb.DeleteListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public delete(request: integration_pb.DeleteListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public test(request: integration_pb.TestListRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.TestListResponse) => void): grpc.ClientUnaryCall;
    public test(request: integration_pb.TestListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.TestListResponse) => void): grpc.ClientUnaryCall;
    public test(request: integration_pb.TestListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.TestListResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.ProxyLists) => void): grpc.ClientUnaryCall;
    public getAll(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.ProxyLists) => void): grpc.ClientUnaryCall;
    public getAll(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.ProxyLists) => void): grpc.ClientUnaryCall;
}

interface IProfilesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IProfilesService_ICreate;
    update: IProfilesService_IUpdate;
    get: IProfilesService_IGet;
    delete: IProfilesService_IDelete;
    createGroup: IProfilesService_ICreateGroup;
    updateGroup: IProfilesService_IUpdateGroup;
    getGroup: IProfilesService_IGetGroup;
    deleteGroup: IProfilesService_IDeleteGroup;
    getGroups: IProfilesService_IGetGroups;
}

interface IProfilesService_ICreate extends grpc.MethodDefinition<integration_pb.Profile, integration_pb.IDResponse> {
    path: "/integration.Profiles/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.Profile>;
    requestDeserialize: grpc.deserialize<integration_pb.Profile>;
    responseSerialize: grpc.serialize<integration_pb.IDResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.IDResponse>;
}
interface IProfilesService_IUpdate extends grpc.MethodDefinition<integration_pb.UpdateProfileRequest, integration_pb.StatusResponse> {
    path: "/integration.Profiles/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.UpdateProfileRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.UpdateProfileRequest>;
    responseSerialize: grpc.serialize<integration_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.StatusResponse>;
}
interface IProfilesService_IGet extends grpc.MethodDefinition<integration_pb.GetProfileRequest, integration_pb.Profile> {
    path: "/integration.Profiles/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.GetProfileRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.GetProfileRequest>;
    responseSerialize: grpc.serialize<integration_pb.Profile>;
    responseDeserialize: grpc.deserialize<integration_pb.Profile>;
}
interface IProfilesService_IDelete extends grpc.MethodDefinition<integration_pb.DeleteProfileRequest, integration_pb.StatusResponse> {
    path: "/integration.Profiles/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.DeleteProfileRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.DeleteProfileRequest>;
    responseSerialize: grpc.serialize<integration_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.StatusResponse>;
}
interface IProfilesService_ICreateGroup extends grpc.MethodDefinition<integration_pb.CreateProfileGroup, integration_pb.IDResponse> {
    path: "/integration.Profiles/CreateGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.CreateProfileGroup>;
    requestDeserialize: grpc.deserialize<integration_pb.CreateProfileGroup>;
    responseSerialize: grpc.serialize<integration_pb.IDResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.IDResponse>;
}
interface IProfilesService_IUpdateGroup extends grpc.MethodDefinition<integration_pb.UpdateGroupRequest, integration_pb.StatusResponse> {
    path: "/integration.Profiles/UpdateGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.UpdateGroupRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.UpdateGroupRequest>;
    responseSerialize: grpc.serialize<integration_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.StatusResponse>;
}
interface IProfilesService_IGetGroup extends grpc.MethodDefinition<integration_pb.GetGroupRequest, integration_pb.ProfileGroup> {
    path: "/integration.Profiles/GetGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.GetGroupRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.GetGroupRequest>;
    responseSerialize: grpc.serialize<integration_pb.ProfileGroup>;
    responseDeserialize: grpc.deserialize<integration_pb.ProfileGroup>;
}
interface IProfilesService_IDeleteGroup extends grpc.MethodDefinition<integration_pb.DeleteGroupRequest, integration_pb.StatusResponse> {
    path: "/integration.Profiles/DeleteGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.DeleteGroupRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.DeleteGroupRequest>;
    responseSerialize: grpc.serialize<integration_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.StatusResponse>;
}
interface IProfilesService_IGetGroups extends grpc.MethodDefinition<integration_pb.EmptyRequest, integration_pb.ProfileGroups> {
    path: "/integration.Profiles/GetGroups";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<integration_pb.ProfileGroups>;
    responseDeserialize: grpc.deserialize<integration_pb.ProfileGroups>;
}

export const ProfilesService: IProfilesService;

export interface IProfilesServer {
    create: grpc.handleUnaryCall<integration_pb.Profile, integration_pb.IDResponse>;
    update: grpc.handleUnaryCall<integration_pb.UpdateProfileRequest, integration_pb.StatusResponse>;
    get: grpc.handleUnaryCall<integration_pb.GetProfileRequest, integration_pb.Profile>;
    delete: grpc.handleUnaryCall<integration_pb.DeleteProfileRequest, integration_pb.StatusResponse>;
    createGroup: grpc.handleUnaryCall<integration_pb.CreateProfileGroup, integration_pb.IDResponse>;
    updateGroup: grpc.handleUnaryCall<integration_pb.UpdateGroupRequest, integration_pb.StatusResponse>;
    getGroup: grpc.handleUnaryCall<integration_pb.GetGroupRequest, integration_pb.ProfileGroup>;
    deleteGroup: grpc.handleUnaryCall<integration_pb.DeleteGroupRequest, integration_pb.StatusResponse>;
    getGroups: grpc.handleUnaryCall<integration_pb.EmptyRequest, integration_pb.ProfileGroups>;
}

export interface IProfilesClient {
    create(request: integration_pb.Profile, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    create(request: integration_pb.Profile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    create(request: integration_pb.Profile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    update(request: integration_pb.UpdateProfileRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    update(request: integration_pb.UpdateProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    update(request: integration_pb.UpdateProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    get(request: integration_pb.GetProfileRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.Profile) => void): grpc.ClientUnaryCall;
    get(request: integration_pb.GetProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.Profile) => void): grpc.ClientUnaryCall;
    get(request: integration_pb.GetProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.Profile) => void): grpc.ClientUnaryCall;
    delete(request: integration_pb.DeleteProfileRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    delete(request: integration_pb.DeleteProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    delete(request: integration_pb.DeleteProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    createGroup(request: integration_pb.CreateProfileGroup, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    createGroup(request: integration_pb.CreateProfileGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    createGroup(request: integration_pb.CreateProfileGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    updateGroup(request: integration_pb.UpdateGroupRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    updateGroup(request: integration_pb.UpdateGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    updateGroup(request: integration_pb.UpdateGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    getGroup(request: integration_pb.GetGroupRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.ProfileGroup) => void): grpc.ClientUnaryCall;
    getGroup(request: integration_pb.GetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.ProfileGroup) => void): grpc.ClientUnaryCall;
    getGroup(request: integration_pb.GetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.ProfileGroup) => void): grpc.ClientUnaryCall;
    deleteGroup(request: integration_pb.DeleteGroupRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    deleteGroup(request: integration_pb.DeleteGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    deleteGroup(request: integration_pb.DeleteGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    getGroups(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.ProfileGroups) => void): grpc.ClientUnaryCall;
    getGroups(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.ProfileGroups) => void): grpc.ClientUnaryCall;
    getGroups(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.ProfileGroups) => void): grpc.ClientUnaryCall;
}

export class ProfilesClient extends grpc.Client implements IProfilesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: integration_pb.Profile, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    public create(request: integration_pb.Profile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    public create(request: integration_pb.Profile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    public update(request: integration_pb.UpdateProfileRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public update(request: integration_pb.UpdateProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public update(request: integration_pb.UpdateProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public get(request: integration_pb.GetProfileRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.Profile) => void): grpc.ClientUnaryCall;
    public get(request: integration_pb.GetProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.Profile) => void): grpc.ClientUnaryCall;
    public get(request: integration_pb.GetProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.Profile) => void): grpc.ClientUnaryCall;
    public delete(request: integration_pb.DeleteProfileRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public delete(request: integration_pb.DeleteProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public delete(request: integration_pb.DeleteProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public createGroup(request: integration_pb.CreateProfileGroup, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    public createGroup(request: integration_pb.CreateProfileGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    public createGroup(request: integration_pb.CreateProfileGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    public updateGroup(request: integration_pb.UpdateGroupRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public updateGroup(request: integration_pb.UpdateGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public updateGroup(request: integration_pb.UpdateGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public getGroup(request: integration_pb.GetGroupRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.ProfileGroup) => void): grpc.ClientUnaryCall;
    public getGroup(request: integration_pb.GetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.ProfileGroup) => void): grpc.ClientUnaryCall;
    public getGroup(request: integration_pb.GetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.ProfileGroup) => void): grpc.ClientUnaryCall;
    public deleteGroup(request: integration_pb.DeleteGroupRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public deleteGroup(request: integration_pb.DeleteGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public deleteGroup(request: integration_pb.DeleteGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public getGroups(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.ProfileGroups) => void): grpc.ClientUnaryCall;
    public getGroups(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.ProfileGroups) => void): grpc.ClientUnaryCall;
    public getGroups(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.ProfileGroups) => void): grpc.ClientUnaryCall;
}

interface ITasksService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ITasksService_ICreate;
    update: ITasksService_IUpdate;
    get: ITasksService_IGet;
    delete: ITasksService_IDelete;
    createGroup: ITasksService_ICreateGroup;
    updateGroup: ITasksService_IUpdateGroup;
    deleteGroup: ITasksService_IDeleteGroup;
    getGroups: ITasksService_IGetGroups;
}

interface ITasksService_ICreate extends grpc.MethodDefinition<integration_pb.Task, integration_pb.CreateTaskResponse> {
    path: "/integration.Tasks/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.Task>;
    requestDeserialize: grpc.deserialize<integration_pb.Task>;
    responseSerialize: grpc.serialize<integration_pb.CreateTaskResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.CreateTaskResponse>;
}
interface ITasksService_IUpdate extends grpc.MethodDefinition<integration_pb.UpdateTask, integration_pb.StatusResponse> {
    path: "/integration.Tasks/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.UpdateTask>;
    requestDeserialize: grpc.deserialize<integration_pb.UpdateTask>;
    responseSerialize: grpc.serialize<integration_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.StatusResponse>;
}
interface ITasksService_IGet extends grpc.MethodDefinition<integration_pb.GetTask, integration_pb.Task> {
    path: "/integration.Tasks/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.GetTask>;
    requestDeserialize: grpc.deserialize<integration_pb.GetTask>;
    responseSerialize: grpc.serialize<integration_pb.Task>;
    responseDeserialize: grpc.deserialize<integration_pb.Task>;
}
interface ITasksService_IDelete extends grpc.MethodDefinition<integration_pb.DeleteTask, integration_pb.StatusResponse> {
    path: "/integration.Tasks/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.DeleteTask>;
    requestDeserialize: grpc.deserialize<integration_pb.DeleteTask>;
    responseSerialize: grpc.serialize<integration_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.StatusResponse>;
}
interface ITasksService_ICreateGroup extends grpc.MethodDefinition<integration_pb.CreateTaskGroup, integration_pb.CreateTaskGroupResponse> {
    path: "/integration.Tasks/CreateGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.CreateTaskGroup>;
    requestDeserialize: grpc.deserialize<integration_pb.CreateTaskGroup>;
    responseSerialize: grpc.serialize<integration_pb.CreateTaskGroupResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.CreateTaskGroupResponse>;
}
interface ITasksService_IUpdateGroup extends grpc.MethodDefinition<integration_pb.UpdateTaskGroupRequest, integration_pb.StatusResponse> {
    path: "/integration.Tasks/UpdateGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.UpdateTaskGroupRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.UpdateTaskGroupRequest>;
    responseSerialize: grpc.serialize<integration_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.StatusResponse>;
}
interface ITasksService_IDeleteGroup extends grpc.MethodDefinition<integration_pb.DeleteGroupRequest, integration_pb.StatusResponse> {
    path: "/integration.Tasks/DeleteGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.DeleteGroupRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.DeleteGroupRequest>;
    responseSerialize: grpc.serialize<integration_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.StatusResponse>;
}
interface ITasksService_IGetGroups extends grpc.MethodDefinition<integration_pb.EmptyRequest, integration_pb.TaskGroups> {
    path: "/integration.Tasks/GetGroups";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<integration_pb.TaskGroups>;
    responseDeserialize: grpc.deserialize<integration_pb.TaskGroups>;
}

export const TasksService: ITasksService;

export interface ITasksServer {
    create: grpc.handleUnaryCall<integration_pb.Task, integration_pb.CreateTaskResponse>;
    update: grpc.handleUnaryCall<integration_pb.UpdateTask, integration_pb.StatusResponse>;
    get: grpc.handleUnaryCall<integration_pb.GetTask, integration_pb.Task>;
    delete: grpc.handleUnaryCall<integration_pb.DeleteTask, integration_pb.StatusResponse>;
    createGroup: grpc.handleUnaryCall<integration_pb.CreateTaskGroup, integration_pb.CreateTaskGroupResponse>;
    updateGroup: grpc.handleUnaryCall<integration_pb.UpdateTaskGroupRequest, integration_pb.StatusResponse>;
    deleteGroup: grpc.handleUnaryCall<integration_pb.DeleteGroupRequest, integration_pb.StatusResponse>;
    getGroups: grpc.handleUnaryCall<integration_pb.EmptyRequest, integration_pb.TaskGroups>;
}

export interface ITasksClient {
    create(request: integration_pb.Task, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateTaskResponse) => void): grpc.ClientUnaryCall;
    create(request: integration_pb.Task, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateTaskResponse) => void): grpc.ClientUnaryCall;
    create(request: integration_pb.Task, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateTaskResponse) => void): grpc.ClientUnaryCall;
    update(request: integration_pb.UpdateTask, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    update(request: integration_pb.UpdateTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    update(request: integration_pb.UpdateTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    get(request: integration_pb.GetTask, callback: (error: grpc.ServiceError | null, response: integration_pb.Task) => void): grpc.ClientUnaryCall;
    get(request: integration_pb.GetTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.Task) => void): grpc.ClientUnaryCall;
    get(request: integration_pb.GetTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.Task) => void): grpc.ClientUnaryCall;
    delete(request: integration_pb.DeleteTask, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    delete(request: integration_pb.DeleteTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    delete(request: integration_pb.DeleteTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    createGroup(request: integration_pb.CreateTaskGroup, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateTaskGroupResponse) => void): grpc.ClientUnaryCall;
    createGroup(request: integration_pb.CreateTaskGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateTaskGroupResponse) => void): grpc.ClientUnaryCall;
    createGroup(request: integration_pb.CreateTaskGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateTaskGroupResponse) => void): grpc.ClientUnaryCall;
    updateGroup(request: integration_pb.UpdateTaskGroupRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    updateGroup(request: integration_pb.UpdateTaskGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    updateGroup(request: integration_pb.UpdateTaskGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    deleteGroup(request: integration_pb.DeleteGroupRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    deleteGroup(request: integration_pb.DeleteGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    deleteGroup(request: integration_pb.DeleteGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    getGroups(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.TaskGroups) => void): grpc.ClientUnaryCall;
    getGroups(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.TaskGroups) => void): grpc.ClientUnaryCall;
    getGroups(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.TaskGroups) => void): grpc.ClientUnaryCall;
}

export class TasksClient extends grpc.Client implements ITasksClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: integration_pb.Task, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateTaskResponse) => void): grpc.ClientUnaryCall;
    public create(request: integration_pb.Task, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateTaskResponse) => void): grpc.ClientUnaryCall;
    public create(request: integration_pb.Task, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateTaskResponse) => void): grpc.ClientUnaryCall;
    public update(request: integration_pb.UpdateTask, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public update(request: integration_pb.UpdateTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public update(request: integration_pb.UpdateTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public get(request: integration_pb.GetTask, callback: (error: grpc.ServiceError | null, response: integration_pb.Task) => void): grpc.ClientUnaryCall;
    public get(request: integration_pb.GetTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.Task) => void): grpc.ClientUnaryCall;
    public get(request: integration_pb.GetTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.Task) => void): grpc.ClientUnaryCall;
    public delete(request: integration_pb.DeleteTask, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public delete(request: integration_pb.DeleteTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public delete(request: integration_pb.DeleteTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public createGroup(request: integration_pb.CreateTaskGroup, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateTaskGroupResponse) => void): grpc.ClientUnaryCall;
    public createGroup(request: integration_pb.CreateTaskGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateTaskGroupResponse) => void): grpc.ClientUnaryCall;
    public createGroup(request: integration_pb.CreateTaskGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.CreateTaskGroupResponse) => void): grpc.ClientUnaryCall;
    public updateGroup(request: integration_pb.UpdateTaskGroupRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public updateGroup(request: integration_pb.UpdateTaskGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public updateGroup(request: integration_pb.UpdateTaskGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public deleteGroup(request: integration_pb.DeleteGroupRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public deleteGroup(request: integration_pb.DeleteGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public deleteGroup(request: integration_pb.DeleteGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public getGroups(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.TaskGroups) => void): grpc.ClientUnaryCall;
    public getGroups(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.TaskGroups) => void): grpc.ClientUnaryCall;
    public getGroups(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.TaskGroups) => void): grpc.ClientUnaryCall;
}

interface IAccountGroupsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IAccountGroupsService_ICreate;
    getAll: IAccountGroupsService_IGetAll;
    update: IAccountGroupsService_IUpdate;
}

interface IAccountGroupsService_ICreate extends grpc.MethodDefinition<integration_pb.AccountGroup, integration_pb.IDResponse> {
    path: "/integration.AccountGroups/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.AccountGroup>;
    requestDeserialize: grpc.deserialize<integration_pb.AccountGroup>;
    responseSerialize: grpc.serialize<integration_pb.IDResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.IDResponse>;
}
interface IAccountGroupsService_IGetAll extends grpc.MethodDefinition<integration_pb.EmptyRequest, integration_pb.AccGroups> {
    path: "/integration.AccountGroups/GetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<integration_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<integration_pb.AccGroups>;
    responseDeserialize: grpc.deserialize<integration_pb.AccGroups>;
}
interface IAccountGroupsService_IUpdate extends grpc.MethodDefinition<integration_pb.AccountGroup, integration_pb.IDResponse> {
    path: "/integration.AccountGroups/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<integration_pb.AccountGroup>;
    requestDeserialize: grpc.deserialize<integration_pb.AccountGroup>;
    responseSerialize: grpc.serialize<integration_pb.IDResponse>;
    responseDeserialize: grpc.deserialize<integration_pb.IDResponse>;
}

export const AccountGroupsService: IAccountGroupsService;

export interface IAccountGroupsServer {
    create: grpc.handleUnaryCall<integration_pb.AccountGroup, integration_pb.IDResponse>;
    getAll: grpc.handleUnaryCall<integration_pb.EmptyRequest, integration_pb.AccGroups>;
    update: grpc.handleUnaryCall<integration_pb.AccountGroup, integration_pb.IDResponse>;
}

export interface IAccountGroupsClient {
    create(request: integration_pb.AccountGroup, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    create(request: integration_pb.AccountGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    create(request: integration_pb.AccountGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    getAll(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.AccGroups) => void): grpc.ClientUnaryCall;
    getAll(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.AccGroups) => void): grpc.ClientUnaryCall;
    getAll(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.AccGroups) => void): grpc.ClientUnaryCall;
    update(request: integration_pb.AccountGroup, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    update(request: integration_pb.AccountGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    update(request: integration_pb.AccountGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
}

export class AccountGroupsClient extends grpc.Client implements IAccountGroupsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: integration_pb.AccountGroup, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    public create(request: integration_pb.AccountGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    public create(request: integration_pb.AccountGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: integration_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: integration_pb.AccGroups) => void): grpc.ClientUnaryCall;
    public getAll(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.AccGroups) => void): grpc.ClientUnaryCall;
    public getAll(request: integration_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.AccGroups) => void): grpc.ClientUnaryCall;
    public update(request: integration_pb.AccountGroup, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    public update(request: integration_pb.AccountGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
    public update(request: integration_pb.AccountGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: integration_pb.IDResponse) => void): grpc.ClientUnaryCall;
}
