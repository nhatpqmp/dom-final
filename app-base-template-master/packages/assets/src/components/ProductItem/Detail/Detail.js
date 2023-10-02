import {Stack, TextStyle, Thumbnail, Card, Button, Page, Icon} from '@shopify/polaris';
import React from 'react';
import './Detail.css';
import {TickMinor} from '@shopify/polaris-icons';

function Detail({
  image = 'https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=500',
  position = 'New York',
  name = 'Sport Sneaker',
  time = 'a day ago'
}) {
  return (
    <div className="Mageplaza-NotificationItemDetail">
      <Stack alignment="center">
        <Stack.Item>
          <Thumbnail source={image} alt="Black choker necklace" />
        </Stack.Item>

        <Stack.Item fill>
          <Stack>
            <Stack.Item fill>
              <p>Someone in {position}</p>
              <p>Purchased {name}</p>
              <Stack>
                <Stack.Item fill>{time}</Stack.Item>
                <Stack.Item>
                  <Stack>
                    <Stack.Item>
                      <Icon source={TickMinor} color="primary" />
                    </Stack.Item>
                    <Stack.Item>
                      <p className="Primary-Text">by AVADA</p>
                    </Stack.Item>
                  </Stack>
                </Stack.Item>
              </Stack>
            </Stack.Item>
            <Stack.Item>x</Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    </div>
  );
}

export default Detail;
