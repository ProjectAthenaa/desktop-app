// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var authentication_pb = require('./authentication_pb.js');

function serialize_authentication_LoginRequest(arg) {
  if (!(arg instanceof authentication_pb.LoginRequest)) {
    throw new Error('Expected argument of type authentication.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authentication_LoginRequest(buffer_arg) {
  return authentication_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authentication_LoginResponse(arg) {
  if (!(arg instanceof authentication_pb.LoginResponse)) {
    throw new Error('Expected argument of type authentication.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authentication_LoginResponse(buffer_arg) {
  return authentication_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthenticationService = exports.AuthenticationService = {
  login: {
    path: '/authentication.Authentication/Login',
    requestStream: false,
    responseStream: false,
    requestType: authentication_pb.LoginRequest,
    responseType: authentication_pb.LoginResponse,
    requestSerialize: serialize_authentication_LoginRequest,
    requestDeserialize: deserialize_authentication_LoginRequest,
    responseSerialize: serialize_authentication_LoginResponse,
    responseDeserialize: deserialize_authentication_LoginResponse,
  },
};

exports.AuthenticationClient = grpc.makeGenericClientConstructor(AuthenticationService);
