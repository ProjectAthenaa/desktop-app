// package: authentication
// file: authentication.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as authentication_pb from "./authentication_pb";

interface IAuthenticationService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAuthenticationService_ILogin;
}

interface IAuthenticationService_ILogin extends grpc.MethodDefinition<authentication_pb.LoginRequest, authentication_pb.LoginResponse> {
    path: "/authentication.Authentication/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<authentication_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<authentication_pb.LoginRequest>;
    responseSerialize: grpc.serialize<authentication_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<authentication_pb.LoginResponse>;
}

export const AuthenticationService: IAuthenticationService;

export interface IAuthenticationServer {
    login: grpc.handleUnaryCall<authentication_pb.LoginRequest, authentication_pb.LoginResponse>;
}

export interface IAuthenticationClient {
    login(request: authentication_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: authentication_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: authentication_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authentication_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: authentication_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authentication_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}

export class AuthenticationClient extends grpc.Client implements IAuthenticationClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: authentication_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: authentication_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: authentication_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authentication_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: authentication_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authentication_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}
