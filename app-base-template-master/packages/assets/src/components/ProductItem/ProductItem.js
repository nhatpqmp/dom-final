import { Stack, TextStyle, Thumbnail, Card, Button, Page, Icon } from "@shopify/polaris";
import React from "react";
import './ProductItem.css';
import { TickMinor } from "@shopify/polaris-icons";
import Detail from "@assets/components/ProductItem/Detail/Detail";

function ProductItem({ item }) {
  return (
    <Page>
      <div className="Mageplaza-NotificationItem-Parent">
        <Detail item={item}/>
        <div>
          <TextStyle>{item.date}</TextStyle>
        </div>
      </div>
    </Page>
  );
}

export default ProductItem;
