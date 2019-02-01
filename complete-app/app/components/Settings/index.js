import React from 'react';
import { Page, Layout, Link, Card } from '@shopify/polaris';

const Settings = () => {
  const pagePrimaryAction = {
    content: 'Create Widget',
    onAction: () => console.log('Log Create Widget')
  };

  return (
    <Page title="Settings" primaryAction={pagePrimaryAction}>
      <Layout>
        <Layout.Section>
          <Card title="Settings Card">
            <Link url="/">Go to Home View</Link>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Settings;
