import '@/styles/globals.css'
import '@/styles/input.css'

import Core from '@/config/core'
import Footer from '@/containers/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <meta
        name="viewport"
        content="width=device-width, height=device-height, minimal-ui, viewport-fit=cover, initial-scale=1"
      />
      <body>
        <div id="global-modal"></div>
        <Core>{children}</Core>
        <Footer />
      </body>
    </html>
  )
}
