import services from '../../protos/integration_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import {caCert, clientCert, clientKey} from '../../certs';
import {
  CreateTaskGroup,
  CreateTaskGroupResponse,
  CreateTaskResponse, DeleteGroup, DeleteGroupRequest, DeleteTask, GetTask,
  Product,
  Site, StatusResponse,
  Task,
  TaskGroup, UpdateTask, UpdateTaskGroupRequest
} from '../../protos/integration_pb';
import {Metadata} from '@grpc/grpc-js';
import store from '../../util/store';


// Required to make the connection
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = String(0);

const INTEGRATION_SERVICE = 'svc.integration.athenabot.com:443';
const certs = grpc.credentials.createSsl(caCert, clientKey, clientCert);
const metadata = new Metadata();

metadata.set('Authorization', store.get('token'));

export const tasksClient = new services.TasksClient(
  INTEGRATION_SERVICE,
  certs
);

// Custom Types
type ModifiedTask = {
  product?: Product;
  startTime?: number;
  site?: Site;
  proxyListId?: string;
  profileGroupId?: string;
};


/**
 * Creates a Task Group
 * @param name
 */
export const createTaskGroup = (name: string): Promise<CreateTaskGroupResponse> => {
  const createTaskGroup = new CreateTaskGroup();
  createTaskGroup.setName(name);
  createTaskGroup.setTasksList([]);

  return new Promise(function (resolve, reject) {
    tasksClient.createGroup(createTaskGroup, metadata, (error, createTaskResponse) => {
      if (error) return reject(error);
      return resolve(createTaskResponse);
    });
  });
};

/**
 * Deletes a Task Group by it's ID
 * @param id
 */
export const deleteTaskGroup = (id: string): Promise<StatusResponse> => {
  const deleteGroupRequest = new DeleteGroupRequest();

  deleteGroupRequest.setId(id);

  return new Promise(function (resolve, reject) {
    tasksClient.deleteGroup(deleteGroupRequest, metadata,(error, statusResponse) => {
      if (error) return reject(error);
      return resolve(statusResponse);
    });
  });
};

/**
 * Adds a Task to a Task Group by it's ID
 * @param id
 * @param task
 */
export const addTaskToGroup = (id: string, task: Task): Promise<StatusResponse> => {
  const updateTaskGroupRequest = new UpdateTaskGroupRequest();

  updateTaskGroupRequest.setId(id);
  updateTaskGroupRequest.addTasks(task);

  return new Promise(function (resolve, reject) {
    tasksClient.updateGroup(updateTaskGroupRequest, metadata,(error, statusResponse) => {
      if (error) return reject(error);
      return resolve(statusResponse);
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
    tasksClient.create(task, metadata, (error, createTaskResponse) => {
      if (error) return reject(error);
      return resolve(createTaskResponse);
    });
  });
};

/**
 * Gets a Task by it's ID
 * @param id
 */
export const getTask = (id: string): Promise<Task> => {
  const getTask = new GetTask();

  getTask.setId(id);

  return new Promise(function (resolve, reject) {
    tasksClient.get(getTask, metadata, (error, task) => {
      if (error) return reject(error);
      return resolve(task);
    });
  });
};

/**
 * Modifies a Task by it's ID
 * @param id
 * @param modifiedTask
 */
export const modifyTask = (id: string, modifiedTask: ModifiedTask): Promise<StatusResponse> => {
  const updateTask = new UpdateTask();

  updateTask.setId(id);
  if (modifiedTask.product) updateTask.setProduct(modifiedTask.product);
  if (modifiedTask.site) updateTask.setSite(modifiedTask.site);
  if (modifiedTask.startTime) updateTask.setStarttime(modifiedTask.startTime);
  if (modifiedTask.proxyListId) updateTask.setProxylistid(modifiedTask.proxyListId);
  if (modifiedTask.profileGroupId) updateTask.setProfilegroupid(modifiedTask.profileGroupId);

  return new Promise(function (resolve, reject) {
    tasksClient.update(updateTask, metadata, (error, statusResponse) => {
      if (error) return reject(error);
      return resolve(statusResponse);
    });
  });
};

/**
 * Deletes a Task by it's ID
 * @param id
 */
export const deleteTask = (id: string): Promise<StatusResponse> => {
  const deleteTaskRequest = new DeleteTask();

  deleteTaskRequest.setId(id);

  return new Promise(function (resolve, reject) {
    tasksClient.delete(deleteTaskRequest, metadata,(error, statusResponse) => {
      if (error) return reject(error);
      return resolve(statusResponse);
    });
  });
};
