import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return   <main className='root'>
    <div className="root-container">
        
    </div>
    <div className="wrapper">
    {children}
    </div>
    
    </main>
;
};

export default Layout;
