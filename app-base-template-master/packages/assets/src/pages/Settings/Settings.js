import React, {useState} from 'react';
import {Card, Page, Stack, Tabs} from '@shopify/polaris';
import './Settings.css';
import Detail from '@assets/components/ProductItem/Detail/Detail';
import {DesktopPosition} from '@assets/components/DesktopPosition/DesktopPosition';
import {positions} from '@assets/config/settingConfig';
import CustomCheckbox from '@assets/components/CustomCheckbox/CustomCheckbox';
import TimingSlider from '@assets/components/TimingSlider/TimingSlider';
import PagesRestriction from '@assets/components/PagesRestriction/PagesRestriction';

/**
 * @return {JSX.Element}
 */
export default function Settings() {
  const [settings, setSettings] = useState({position: '_topLeft'});
  const [selected, setSelected] = useState(0);

  const handleTabChange = selectedTabIndex => {
    setSelected(selectedTabIndex);
  };

  const handleSelectPosition = position => {
    setSettings(prev => ({...prev, position}));
  };

  const tabs = [
    {
      id: 'display',
      content: 'Display',
      accessibilityLabel: 'Display',
      panelID: 'all-customers-content-1'
    },
    {
      id: 'trigger',
      content: 'Trigger',
      accessibilityLabel: 'Trigger',
      panelID: 'accepts-marketing-content-1'
    }
  ];

  return (
    <Page title="Settings" subtitle="Decide how your notifications will display" fullWidth>
      <Stack>
        <Stack.Item>
          <Detail />
        </Stack.Item>
        <Stack.Item fill>
          <Card>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
              {selected === 0 && (
                <Card.Section>
                  <Stack>
                    {positions?.map(item => (
                      <Stack.Item>
                        <DesktopPosition
                          position={item.position}
                          selected={item.position === settings.position}
                          onChange={handleSelectPosition}
                        />
                      </Stack.Item>
                    ))}
                  </Stack>
                  <CustomCheckbox itemKey="hideTime" />
                  <CustomCheckbox itemKey="truncate" />
                  <Stack>
                    <Stack.Item fill>
                      <TimingSlider itemKey="displayDuration" />
                    </Stack.Item>
                    <Stack.Item>
                      <TimingSlider itemKey="timeBefore" />
                    </Stack.Item>
                  </Stack>
                  <Stack distribution="equalSpacing">
                    <Stack.Item fill>
                      <TimingSlider itemKey="gapTime" />
                    </Stack.Item>
                    <Stack.Item>
                      <TimingSlider itemKey="maximum" />
                    </Stack.Item>
                  </Stack>
                </Card.Section>
              )}
              {selected === 1 && <PagesRestriction></PagesRestriction>}
            </Tabs>
          </Card>
        </Stack.Item>
      </Stack>
    </Page>
  );
}

Settings.propTypes = {};
