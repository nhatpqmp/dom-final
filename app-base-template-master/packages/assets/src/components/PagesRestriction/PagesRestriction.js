import React, {useState} from 'react';
import {Page, Select, TextField} from '@shopify/polaris';

function PagesRestriction() {
  const [pageType, setPageType] = useState('all');
  const [excludePage, setExcludePage] = useState('');
  const [includePage, setIncludePage] = useState('');

  const handlePageTypeChange = value => {
    setPageType(value);
  };

  return (
    <Page title="PAGES RESTRICTION" fullWidth>
      <Select
        options={[
          {label: 'All Page', value: 'all'},
          {label: 'Specific Page', value: 'specific'}
        ]}
        value={pageType}
        onChange={handlePageTypeChange}
      />

      {pageType === 'specific' && (
        <TextField
          label="Include Pages"
          value={includePage}
          onChange={setIncludePage}
          type="text"
          multiline={4}
          helpText="Page URLs to show the pop-up (separated by new lines)"
        />
      )}

      <TextField
        label="Exclude Pages"
        value={excludePage}
        onChange={setExcludePage}
        type="text"
        multiline={4}
        helpText="Pages URLs NOT to show the pop-up (seperated by new lines)"
      />
    </Page>
  );
}

export default PagesRestriction;
