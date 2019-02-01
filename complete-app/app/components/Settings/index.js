import React from 'react';
import { Page, Layout, Link, Card, TextStyle } from '@shopify/polaris';

const Settings = () => {
  const pagePrimaryAction = {
    content: 'Create Widget',
  };

  return (
    <Page forceRender title="Settings" primaryAction={pagePrimaryAction}>
      <Layout>
        <Layout.Section>
          <Card title="Settings Card">
            <div>
              <TextStyle variation="positive">
                “We don't make mistakes, just happy little accidents.”
              </TextStyle>
            </div>
            <Link url="/">Go to Home View</Link>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Settings;
