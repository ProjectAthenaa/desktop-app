export enum ProxyListType {
  Residential = "Residential",
  Datacenter  = "Datacenter",
  ISP         = "ISP",
}

export interface Proxy {
  ID: string;
  Username: string;
  Password: string;
  IP: string;
  Port: string;
}


export interface ProxyList {
  ID: string;
  Name: string;
  Type: ProxyListType;
  Proxies: Proxy[];
}

export interface NewProxy {
  Username: string;
  Password: string;
  IP: string;
  Port: string;
}

export interface NewProxyList {
  Name: string;
  Type: ProxyListType;
  Proxies: NewProxy[];
}
