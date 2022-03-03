
import React from 'react';
import { CFooter } from '@coreui/react';
import { useTranslation } from 'react-i18next';

const AppFooter = () => {
    const translate = useTranslation().t;

  return (
    <CFooter className="d-flex justify-content-center">
      <div>
        <a href="/impressum" rel="noopener noreferrer">
          {translate('page.title.imprint')}
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter);