import clsx from 'clsx';
import React from 'react';
import CncfIconDark from '../../../../static/img/cncf-dark.svg';
import CncfIconDLight from '../../../../static/img/cncf-light.svg';
import { useColorMode } from '@docusaurus/theme-common';

/**
 * Swizzled FooterLayout component to include CNCf logo
 * See: https://docusaurus.io/docs/swizzling#swizzling-process
 */
export default function FooterLayout({ style, links, logo, copyright }) {
  const { isDarkTheme } = useColorMode();
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {isDarkTheme ? <CncfIconDark style={{ width: 300 }} /> : <CncfIconDLight style={{ width: 300 }} />}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
