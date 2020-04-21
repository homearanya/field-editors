import * as React from 'react';
import { ReferenceEditorProps } from '../common/ReferenceEditor';
import { SingleReferenceEditor } from '../common/SingleReferenceEditor';
import { FetchingWrappedEntryCard } from './WrappedEntryCard/FetchingWrappedEntryCard';

export function SingleEntryReferenceEditor(props: ReferenceEditorProps) {
  return (
    <SingleReferenceEditor {...props} entityType="Entry">
      {({ allContentTypes, isDisabled, entityId, setValue }) => {
        return (
          <FetchingWrappedEntryCard
            {...props}
            allContentTypes={allContentTypes}
            isDisabled={isDisabled}
            entryId={entityId}
            onRemove={() => {
              setValue(null);
            }}
          />
        );
      }}
    </SingleReferenceEditor>
  );
}

SingleEntryReferenceEditor.defaultProps = {
  isInitiallyDisabled: true
};