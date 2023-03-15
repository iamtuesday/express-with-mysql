import { FC, PropsWithChildren } from 'react'
// import { CustomHead } from '../globals'
import { Footer, Header } from '../ui'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {/* <CustomHead /> */}
      {/* +52 618 170 0526 */}
      <Header />
      {children}
      <Footer />
    </>
  )
}

