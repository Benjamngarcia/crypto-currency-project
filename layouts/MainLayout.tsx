import { ReactNode } from 'react';

type MyProps = {
  children?: ReactNode;
}

export function MainLayout(props: MyProps) {
  const { children } = props

  return (
    <div className="bg-slate-100 h-screen">
      <div className="container mx-auto px-4 pt-4">
        {children}
      </div>
    </div>
  )
}
