import { EntrySys } from 'contentful-ui-extensions-sdk';
export {
  BaseExtensionSDK,
  ContentType,
  ContentTypeField,
  Link,
  EntrySys,
} from 'contentful-ui-extensions-sdk';
export interface Entry {
  sys: EntrySys;
  fields: {
    [key: string]: {
      [localeKey: string]: any;
    };
  };
}
export declare type Asset = {
  sys: EntrySys;
  fields: {
    title: {
      [locale: string]: string;
    };
    file: {
      [locale: string]: File;
    };
  };
};
export interface File {
  url: string;
  fileName: string;
  contentType: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
}
