import {LookupType, Site, Task} from '../../../../types/task';
import {gql} from 'graphql-request';
import {integrationClient} from '../../index';
import {FetchedTask} from './get-task';

type UpdatedTask = {
  StartTime?: string;
  ProductID?: string;
  ProxyListID?: string;
  ProfileGroupID?: string;
  TaskGroupID?: string;
  Product?: {
    Name: string;
    Image?: string;
    LookupType: LookupType;
    PositiveKeywords: string[];
    NegativeKeywords: string[];
    Link?: string;
    Quantity?: number;
    Sizes: string[];
    Colors: string[];
    Site: Site;
    Metadata: Record<string, string>;
  }
};

const UPDATE_TASK = gql`
    mutation UpdateTask($taskID: UUID!, $updatedTask: UpdatedTask!) {
        updateTask(taskID: $taskID, updatedTask: $updatedTask) {
            ID
            StartTime
            Product {
                ID
                Name
                Image
                LookupType
                PositiveKeywords
                NegativeKeywords
                Link
                Quantity
                Sizes
                Colors
                Site
                Metadata
            }
            ProxyList {
                ID
                Name
            }
            ProfileGroup {
                ID
                Name
            }
        }
    }
`;
const UPDATE_PRODUCT = gql`
    mutation UpdateProduct($productID: UUID!, $updatedProduct: ProductIn!) {
        updateProduct(productID: $productID, updatedProduct: $updatedProduct) {
            ID
        }
    }
`;

const updateTask = async (taskId: string, updatedPayload: UpdatedTask): Promise<FetchedTask> => {
  await (await integrationClient()).request<{ updateTask: FetchedTask }>(UPDATE_PRODUCT, {
    productID: updatedPayload.ProductID,
    updatedProduct: updatedPayload.Product,
  });

  const response = await (await integrationClient()).request<{ updateTask: FetchedTask }>(UPDATE_TASK, {
    taskID: taskId,
    updatedTask: {
      StartTime: updatedPayload.StartTime
        ? updatedPayload.StartTime
        : undefined,
      ProductID: updatedPayload.ProductID
        ? updatedPayload.ProductID
        : undefined,
      ProxyListID: updatedPayload.ProxyListID
        ? updatedPayload.ProxyListID
        : undefined,
      ProfileGroupID: updatedPayload.ProfileGroupID
        ? updatedPayload.ProfileGroupID
        : undefined,
      TaskGroupID: updatedPayload.TaskGroupID
        ? updatedPayload.TaskGroupID
        : undefined,
    }
  });

  return response.updateTask;
};

export default updateTask;




