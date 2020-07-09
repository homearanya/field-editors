import { File, ContentType, Entry, EntrySys } from '../typesEntity';
export declare function getFieldValue({
  /**
   * Expects an entity fetched with a flag Skip-Transformation: true
   */
  entity,
  fieldId,
  localeCode,
  defaultLocaleCode,
}: {
  entity: {
    fields: {
      [key: string]: {
        [valueKey: string]: string | undefined;
      };
    };
  };
  fieldId: string;
  localeCode: string;
  defaultLocaleCode: string;
}): string | undefined;
export declare function getAssetTitle({
  asset,
  localeCode,
  defaultLocaleCode,
  defaultTitle,
}: {
  asset: Entry;
  localeCode: string;
  defaultLocaleCode: string;
  defaultTitle: string;
}): string;
export declare function getEntityDescription({
  entity,
  contentType,
  localeCode,
  defaultLocaleCode,
}: {
  entity: Entry;
  contentType?: ContentType;
  localeCode: string;
  defaultLocaleCode: string;
}): string;
export declare function getEntryTitle({
  entry,
  contentType,
  localeCode,
  defaultLocaleCode,
  defaultTitle,
}: {
  entry: Entry;
  contentType?: ContentType;
  localeCode: string;
  defaultLocaleCode: string;
  defaultTitle: string;
}): string;
export declare function getEntryStatus(
  sys: EntrySys
): 'deleted' | 'archived' | 'changed' | 'published' | 'draft';
/**
 * Gets a promise resolving with a localized asset image field representing a
 * given entities file. The promise may resolve with null.
 */
export declare const getEntryImage: (
  {
    entry,
    contentType,
    localeCode,
  }: {
    entry: Entry;
    contentType?: ContentType | undefined;
    localeCode: string;
    defaultLocaleCode: string;
  },
  getAsset: (assetId: string) => Promise<unknown>
) => Promise<File | null>;
