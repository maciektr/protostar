import React from 'react'
import Main from '@theme-original/DocPage/Layout/Main'
import Giscus from '@giscus/react'
import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function MainWrapper({ children, ...props }) {
  const { isDarkTheme } = useColorMode()
  const { siteConfig } = useDocusaurusContext()

  return (
    <Main {...props}>
      {children}
      <div className='row margin-top--md'>
        <div className='col'>
          <Giscus
            repo='software-mansion/protostar'
            repoId='R_kgDOGw_HxA'
            categoryId='DIC_kwDOGw_HxM4CSDJD'
            category='Documentation'
            mapping='title'
            reactionsEnabled='0'
            emitMetadata='0'
            inputPosition='top'
            theme={isDarkTheme ? 'dark' : 'light'}
            lang={siteConfig.i18n.defaultLocale}
            loading='lazy'
          />
        </div>
        <div className='col col--3' />
      </div>
    </Main>
  )
}
