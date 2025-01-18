'use client';

import { Layout } from 'antd';
import { NavMenu } from './nav-menu';
import { PageBreadcrumb } from './breadcrumb';

const { Sider, Content } = Layout;

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout className="h-screen">
      <Sider 
        theme="light" 
        className="border-r fixed h-full" 
        width={220}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold">DeepSeek</h1>
          </div>
          <div className="flex-1 overflow-y-auto">
            <NavMenu />
          </div>
        </div>
      </Sider>
      <Layout className="ml-[220px]">
        <Content className="h-full overflow-hidden">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
} 