import React, { FC, PropsWithChildren } from 'react'

export const Container: FC<PropsWithChildren> = ({ children }) => {
   return <div className="Contenedor">{children}</div>
}
