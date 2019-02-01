import React from 'react';
import { Page, Layout, Link, Card, TextStyle } from '@shopify/polaris';

const Home = () => {
  const pagePrimaryAction = {
    content: 'Create Widget',
  };

  return (
    <Page forceRender title="Home" primaryAction={pagePrimaryAction}>
      <Layout>
        <Layout.Section>
          <Card title="Home Card">
            <div>
              <TextStyle variation="positive">
                “All you need to paint is a few tools, a little instruction, and a vision in your mind.” 
              </TextStyle>
            </div>
            <Link url="/settings">Go to Settings View</Link>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Home;
