import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Coin Market</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout