import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  Picker,
  ScreenContainer,
  Surface,
  Swiper,
  SwiperItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const BusRecommendationScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [multiSelectPickerValue2, setMultiSelectPickerValue2] = React.useState(
    []
  );
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Custom Color_6'],
        },
        dimensions.width
      )}
    >
      {/* Top Navigation Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { height: 48, justifyContent: 'center', width: 48 },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('HomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Surface
              elevation={0}
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderRadius: 24,
                  height: 48,
                  justifyContent: 'center',
                  minHeight: 48,
                  width: 48,
                },
                dimensions.width
              )}
            >
              <Icon size={24} name={'Entypo/chevron-left'} />
            </Surface>
          </Touchable>
        </View>
      </View>
      {/* Top Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            justifyContent: 'space-between',
            marginTop: 20,
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Track Your Bus */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Background'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
            },
            dimensions.width
          )}
        >
          {'Track Your Bus'}
        </Text>
      </View>
      {/* Form */}
      <View
        style={StyleSheet.applyWidth(
          {
            marginLeft: 16,
            marginRight: 16,
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 16, paddingRight: 16 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Background'],
                fontFamily: 'Inter_500Medium',
                fontSize: 14,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'From'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.divider,
                borderRadius: 12,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 10,
                paddingLeft: 16,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors.textPlaceholder}
              name={'Feather/map-pin'}
              size={16}
            />
            <Picker
              autoDismissKeyboard={true}
              dropDownBackgroundColor={theme.colors.background}
              dropDownBorderColor={theme.colors.divider}
              dropDownBorderRadius={8}
              dropDownBorderWidth={1}
              dropDownTextColor={theme.colors.strong}
              iconSize={24}
              leftIconMode={'inset'}
              mode={'native'}
              onValueChange={newPickerValue => {
                const pickerValue = newPickerValue;
                try {
                  setPickerValue(newPickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Select an option'}
              selectedIconColor={theme.colors.strong}
              selectedIconName={'Feather/check'}
              selectedIconSize={20}
              type={'solid'}
              style={StyleSheet.applyWidth({ width: '80%' }, dimensions.width)}
              value={pickerValue}
            />
          </View>
        </View>

        <View
          style={StyleSheet.applyWidth(
            { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Background'],
                fontFamily: 'Inter_500Medium',
                fontSize: 14,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'To'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.divider,
                borderRadius: 12,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 10,
                paddingLeft: 16,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors.textPlaceholder}
              name={'Feather/map-pin'}
              size={16}
            />
            <Picker
              autoDismissKeyboard={true}
              dropDownBackgroundColor={theme.colors.background}
              dropDownBorderColor={theme.colors.divider}
              dropDownBorderRadius={8}
              dropDownBorderWidth={1}
              dropDownTextColor={theme.colors.strong}
              iconSize={24}
              leftIconMode={'inset'}
              mode={'native'}
              onValueChange={newPickerValue => {
                const pickerValue = newPickerValue;
                try {
                  setPickerValue2(newPickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Select an option'}
              selectedIconColor={theme.colors.strong}
              selectedIconName={'Feather/check'}
              selectedIconSize={20}
              type={'solid'}
              style={StyleSheet.applyWidth({ width: '80%' }, dimensions.width)}
              value={pickerValue2}
            />
          </View>
        </View>
      </View>
      {/* Button Solid */}
      <Button
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(33, 103, 234)',
            borderColor: theme.colors['Surface'],
            borderRadius: 21,
            color: theme.colors['Surface'],
            fontFamily: 'System',
            fontWeight: '700',
            height: 40,
            marginTop: 16,
            textAlign: 'center',
            width: '60%',
          },
          dimensions.width
        )}
        title={'Search'}
      />
      <Swiper
        dotActiveColor={theme.colors.primary}
        dotColor={theme.colors.light}
        dotsTouchable={true}
        loop={false}
        minDistanceForAction={0.2}
        minDistanceToCapture={5}
        timeout={0}
        vertical={false}
        {...GlobalStyles.SwiperStyles(theme)['Swiper'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.SwiperStyles(theme)['Swiper'].style,
          dimensions.width
        )}
      >
        <SwiperItem
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'column' },
            dimensions.width
          )}
        >
          {/* Bus info */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'space-around',
                alignItems: 'baseline',
                backgroundColor: theme.colors['Medium'],
                borderColor: 'rgba(0, 0, 0, 0)',
                borderRadius: 30,
                borderWidth: 1,
                flexWrap: 'nowrap',
                justifyContent: 'space-around',
                marginBottom: '2%',
                marginTop: '20%',
                paddingBottom: '10%',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: '10%',
              },
              dimensions.width
            )}
          >
            {/* Arrival */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                  gap: 10,
                  justifyContent: 'space-around',
                  padding: 5,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-end',
                      color: theme.colors['Background'],
                      marginRight: 1,
                      paddingRight: 1,
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Estimated Arrival Time :'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors['Background'],
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'5 minutes '}
              </Text>
            </View>
            {/* Destination */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                  gap: 10,
                  justifyContent: 'space-around',
                  padding: 5,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-end',
                      color: theme.colors['Background'],
                      marginRight: 1,
                      paddingRight: 1,
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Estimated Time To Reach The Destination: '}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors['Background'],
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'14:56'}
              </Text>
            </View>
            {/* route */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                  gap: 10,
                  justifyContent: 'space-around',
                  padding: 5,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-end',
                      color: theme.colors['Background'],
                      marginRight: 1,
                      paddingRight: 1,
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Bus Route: '}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors['Background'],
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Aluthgama-Colombo(400)'}
              </Text>
            </View>
          </View>
        </SwiperItem>
        {/* Swiper Item 3 */}
        <SwiperItem
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'column' },
            dimensions.width
          )}
        >
          {/* Bus info */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'space-around',
                alignItems: 'baseline',
                backgroundColor: theme.colors['Medium'],
                borderColor: 'rgba(0, 0, 0, 0)',
                borderRadius: 30,
                borderWidth: 1,
                flexWrap: 'nowrap',
                justifyContent: 'space-around',
                marginBottom: '2%',
                marginTop: '20%',
                paddingBottom: '10%',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: '10%',
              },
              dimensions.width
            )}
          >
            {/* Arrival */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                  gap: 10,
                  justifyContent: 'space-around',
                  padding: 5,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-end',
                      color: theme.colors['Background'],
                      marginRight: 1,
                      paddingRight: 1,
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Estimated Arrival Time :'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors['Background'],
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'15 minutes '}
              </Text>
            </View>
            {/* Destination */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                  gap: 10,
                  justifyContent: 'space-around',
                  padding: 5,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-end',
                      color: theme.colors['Background'],
                      marginRight: 1,
                      paddingRight: 1,
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Estimated Time To Reach The Destination: '}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors['Background'],
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'15:02'}
              </Text>
            </View>
            {/* route */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  flexDirection: 'row',
                  flexWrap: 'wrap-reverse',
                  gap: 10,
                  justifyContent: 'space-around',
                  padding: 5,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-end',
                      color: theme.colors['Background'],
                      marginRight: 1,
                      paddingRight: 1,
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Bus Route: '}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors['Background'],
                      textAlign: 'left',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Galle-Colombo(02)'}
              </Text>
            </View>
          </View>
        </SwiperItem>
      </Swiper>
    </ScreenContainer>
  );
};

export default withTheme(BusRecommendationScreen);
