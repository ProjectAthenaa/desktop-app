import services from '../../protos/integration_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import {caCert, clientCert, clientKey} from '../../certs';
import {
  CreateTaskGroup,
  CreateTaskGroupResponse,
  CreateTaskResponse, DeleteGroup, DeleteGroupRequest,
  Product,
  Site,
  Task,
  TaskGroup
} from '../../protos/integration_pb';
import {Metadata} from '@grpc/grpc-js';

// Required to make the connection
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = String(0);

const INTEGRATION_SERVICE = 'svc.integration.athenabot.com:443';
const certs = grpc.credentials.createSsl(caCert, clientKey, clientCert);

export const tasksClient = new services.TasksClient(
  INTEGRATION_SERVICE,
  certs
);

/**
 * Creates a Task Group
 * @param name
 */
export const createTaskGroup = (name: string): Promise<CreateTaskGroupResponse> => {
  const createTaskGroup = new CreateTaskGroup();
  createTaskGroup.setName(name);
  createTaskGroup.setTasksList([]);

  return new Promise(function (resolve, reject) {
    tasksClient.createGroup(createTaskGroup, (error, createTaskResponse) => {
      if (error) return reject(error);
      return resolve(createTaskResponse);
    });
  });
};

export const deleteTaskGroup = (id: string): Promise<CreateTaskGroupResponse> => {
  const deleteGroupRequest = new DeleteGroupRequest();
  deleteGroupRequest.setId(id);

  const meta = new Metadata();
  meta.set('Authorization', '');

  return new Promise(function (resolve, reject) {
    tasksClient.deleteGroup(deleteGroupRequest, meta,(error, createTaskResponse) => {
      if (error) return reject(error);
      return resolve(createTaskResponse);
    });
  });
};

/**
 * Creates a Task
 * @param site
 * @param taskGroupId
 * @param proxyListId
 * @param profileGroupId
 * @param product
 * @param startTime
 */
export const createTask = (site: Site, taskGroupId: string, proxyListId: string, profileGroupId: string, product: Product, startTime?: number): Promise<CreateTaskResponse> => {
  const task = new Task()
  task.setSite(site);
  task.setTaskgroupid(taskGroupId);
  task.setProduct(product);
  task.setProxylistid(proxyListId);
  task.setProfilegroupid(profileGroupId);
  if (startTime) task.setStarttime(startTime);

  return new Promise(function (resolve, reject) {
    tasksClient.create(task, (error, createTaskResponse) => {
      if (error) return reject(error);
      return resolve(createTaskResponse);
    });
  });
};

