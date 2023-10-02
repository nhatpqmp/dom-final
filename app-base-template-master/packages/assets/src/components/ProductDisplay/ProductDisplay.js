import {Card, Checkbox, Page, Stack, Tabs} from '@shopify/polaris';
import React from 'react';
import './ProductDisplay.css';
import TimingSliders from '@assets/components/TimingSliders/TimingSliders';

class ProductDisplay extends React.Component {
  state = {
    selectedTabIndex: 0
  };

  handleTabChange = selectedTabIndex => {
    this.setState({selectedTabIndex});
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedPosition: null
    };
  }

  handleDesktopPositionClick = event => {
    const selectedPosition = event.currentTarget.getAttribute('data-position');
    const allDesktopOptions = document.querySelectorAll('.Mageplaza-Desktop-Options');
    allDesktopOptions.forEach(option => {
      option.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');

    this.setState({selectedPosition});
  };

  render() {
    const tabs = [
      {
        id: 'display',
        content: 'Display'
      },
      {
        id: 'trigger',
        content: 'Trigger'
      }
    ];

    return (
      <Card>
        <Tabs
          tabs={tabs}
          selected={this.state.selectedTabIndex}
          onSelect={this.handleTabChange}
          fitted
        >
          <Card.Section>
            {this.state.selectedTabIndex === 0 && (
              <Page title="APPEARANCE">
                <p>Desktop position</p>
                <div className="Sellect-Desktop-Position">
                  <div
                    className="Mageplaza-Desktop-Options"
                    onClick={this.handleDesktopPositionClick}
                  >
                    <div className="Mageplaza-Desktop-Option Top-Left"></div>
                    <div className="Mageplaza-Desktop-Option Top-Right"></div>
                    <div className="Mageplaza-Desktop-Option Bottom-Left MP-Gray"></div>
                    <div className="Mageplaza-Desktop-Option Bottom-Right"></div>
                  </div>
                  <div
                    className="Mageplaza-Desktop-Options"
                    onClick={this.handleDesktopPositionClick}
                  >
                    <div className="Mageplaza-Desktop-Option Top-Left"></div>
                    <div className="Mageplaza-Desktop-Option Top-Right"></div>
                    <div className="Mageplaza-Desktop-Option Bottom-Left"></div>
                    <div className="Mageplaza-Desktop-Option Bottom-Right MP-Gray"></div>
                  </div>
                  <div
                    className="Mageplaza-Desktop-Options"
                    onClick={this.handleDesktopPositionClick}
                  >
                    <div className="Mageplaza-Desktop-Option Top-Left MP-Gray"></div>
                    <div className="Mageplaza-Desktop-Option Top-Right"></div>
                    <div className="Mageplaza-Desktop-Option Bottom-Left"></div>
                    <div className="Mageplaza-Desktop-Option Bottom-Right"></div>
                  </div>
                  <div
                    className="Mageplaza-Desktop-Options"
                    onClick={this.handleDesktopPositionClick}
                  >
                    <div className="Mageplaza-Desktop-Option Top-Left"></div>
                    <div className="Mageplaza-Desktop-Option Top-Right MP-Gray"></div>
                    <div className="Mageplaza-Desktop-Option Bottom-Left"></div>
                    <div className="Mageplaza-Desktop-Option Bottom-Right"></div>
                  </div>
                </div>
                <p className="Description">The display position of the pop on your website</p>
                <div className="Mageplaza-Flex-Column">
                  <div className="Checkbox-With-Description">
                    <Checkbox label="Hide time ago" />
                  </div>
                  <div className="Checkbox-With-Description">
                    <Checkbox label="Truncate content text" />
                    <p className="Description-With-Padding-Left">
                      This option will truncate the content text when enabled.
                    </p>
                  </div>
                </div>
                <TimingSliders></TimingSliders>
              </Page>
            )}
            {this.state.selectedTabIndex === 1 && <p>Content for Tab 2</p>}
          </Card.Section>
        </Tabs>
      </Card>
    );
  }
}

export default ProductDisplay;
