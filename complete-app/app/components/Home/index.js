import React from 'react';
import { Page, Layout, Link, Card } from '@shopify/polaris';

const Home = () => {
  const pagePrimaryAction = {
    content: 'Create Widget',
    onAction: () => console.log('Log Create Widget')
  };

  return (
    <Page title="Home" primaryAction={pagePrimaryAction}>
      <Layout>
        <Layout.Section>
          <Card title="Home Card">
            <Link url="/settings">Go to Settings View</Link>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Home;
