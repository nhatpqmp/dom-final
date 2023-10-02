import React, {useState} from 'react';
import {
  Layout,
  Page,
  TextStyle,
  ResourceList,
  ResourceItem,
  Card,
  Pagination
} from '@shopify/polaris';
import ProductItem from '@assets/components/ProductItem/ProductItem';

export default function Notifications() {
  const items = [
    {
      id: '1',
      url: 'posts/6',
      state: 'Someone in New York, Unite state',
      name: 'Jonathan Mangrove',
      img: 'https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=500',
      status: 'a day ago',
      date: 'From September 27, 2023'
    },
    {
      id: '1',
      url: 'posts/6',
      state: 'Someone in New York, Unite state',
      name: 'Jonathan Mangrove',
      img: 'https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=500',
      status: 'a day ago',
      date: 'From September 27, 2023'
    },
    {
      id: '1',
      url: 'posts/6',
      state: 'Someone in New York, Unite state',
      name: 'Jonathan Mangrove',
      img: 'https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=500',
      status: 'a day ago',
      date: 'From September 27, 2023'
    }
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <Page title="Notifications">
      <Layout>
        <Layout.Section>
          <TextStyle>List of sales notification from Shopify</TextStyle>
          <Page>
            <Card>
              <ResourceList
                resourceName={{singular: 'notification', plural: 'notifications'}}
                items={items}
                selectedItems={selectedItems}
                onSelectionChange={setSelectedItems}
                selectable
                renderItem={item => {
                  const {id, url, state, name, img, status, date} = item;
                  return (
                    <ResourceItem
                      id={id}
                      url={url}
                      accessibilityLabel={`View details for ${state}`}
                      name={state}
                    >
                      <ProductItem item={item} />
                    </ResourceItem>
                  );
                }}
              />
            </Card>
          </Page>
          <div className="Pagination-Center">
            <Pagination
              hasPrevious
              onPrevious={() => {
                console.log('Previous');
              }}
              hasNext
              onNext={() => {
                console.log('Next');
              }}
            />
          </div>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
