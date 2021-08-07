export interface ResponseObject {
    data: any;
    headers: object;
    method?: string;
    status?: number;
    statusText?: string
};

export interface HeaderObject {
    [key: string]: any;
  }