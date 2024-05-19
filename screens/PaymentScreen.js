import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  Picker,
  Pressable,
  ScreenContainer,
  SimpleStyleScrollView,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const PaymentScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [AddressRadioButtoGroup, setAddressRadioButtoGroup] = React.useState(1);
  const [PaymentModal, setPaymentModal] = React.useState(false);
  const [PromoCodeModal, setPromoCodeModal] = React.useState(false);
  const [ShippingAddressModal, setShippingAddressModal] = React.useState(false);
  const [paymentMethodRadioGroup, setPaymentMethodRadioGroup] =
    React.useState(1);
  const [pickerValue, setPickerValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Custom Color_6'] },
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
          {'Make Payments'}
        </Text>
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Main View */}
        <View
          style={StyleSheet.applyWidth(
            {
              justifyContent: 'space-between',
              padding: [
                { minWidth: Breakpoints.Mobile, value: 20 },
                { minWidth: Breakpoints.BigScreen, value: 50 },
                { minWidth: Breakpoints.Desktop, value: 40 },
                { minWidth: Breakpoints.Laptop, value: 30 },
                { minWidth: Breakpoints.Tablet, value: 25 },
              ],
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                { color: theme.colors['Background'], fontSize: 16 }
              ),
              dimensions.width
            )}
          >
            {'Start Location'}
          </Text>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.divider,
                borderRadius: 12,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginBottom: 10,
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

          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                { color: theme.colors['Background'], fontSize: 16 }
              ),
              dimensions.width
            )}
          >
            {'Destination'}
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
          {/* Pressable 2 */}
          <Pressable
            onPress={() => {
              try {
                navigation.navigate('CardsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 30, marginTop: 30, width: '100%' },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderColor: theme.colors['Light'],
                  borderRadius: 8,
                  borderWidth: 1,
                  flexDirection: 'row',
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 56 },
                    { minWidth: Breakpoints.Tablet, value: 65 },
                    { minWidth: Breakpoints.Laptop, value: 70 },
                    { minWidth: Breakpoints.Desktop, value: 75 },
                    { minWidth: Breakpoints.BigScreen, value: 90 },
                  ],
                  justifyContent: 'flex-start',
                  paddingLeft: 15,
                  paddingRight: 15,
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={Images.Payoneer}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    {
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 22 },
                        { minWidth: Breakpoints.Tablet, value: 28 },
                        { minWidth: Breakpoints.Laptop, value: 33 },
                        { minWidth: Breakpoints.BigScreen, value: 37 },
                      ],
                      width: [
                        { minWidth: Breakpoints.Mobile, value: 32 },
                        { minWidth: Breakpoints.Tablet, value: 41 },
                        { minWidth: Breakpoints.Laptop, value: 48 },
                        { minWidth: Breakpoints.BigScreen, value: 54 },
                      ],
                    }
                  ),
                  dimensions.width
                )}
              />
              {/* Name */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Background'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Mobile, value: 16 },
                        { minWidth: Breakpoints.Tablet, value: 19 },
                        { minWidth: Breakpoints.Laptop, value: 21 },
                        { minWidth: Breakpoints.Desktop, value: 23 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                      marginLeft: 10,
                      marginRight: 20,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'MasterCard'}
              </Text>
            </View>
          </Pressable>
          {/* Pressable 1 */}
          <Pressable
            onPress={() => {
              try {
                navigation.navigate('CardsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginBottom: 30, width: '100%' },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderColor: theme.colors['Light'],
                  borderRadius: 8,
                  borderWidth: 1,
                  flexDirection: 'row',
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 56 },
                    { minWidth: Breakpoints.Tablet, value: 65 },
                    { minWidth: Breakpoints.Laptop, value: 70 },
                    { minWidth: Breakpoints.Desktop, value: 75 },
                    { minWidth: Breakpoints.BigScreen, value: 90 },
                  ],
                  justifyContent: 'flex-start',
                  paddingLeft: 15,
                  paddingRight: 15,
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={Images.TransferWise}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    {
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 22 },
                        { minWidth: Breakpoints.Tablet, value: 28 },
                        { minWidth: Breakpoints.Laptop, value: 33 },
                        { minWidth: Breakpoints.BigScreen, value: 37 },
                      ],
                      width: [
                        { minWidth: Breakpoints.Mobile, value: 32 },
                        { minWidth: Breakpoints.Tablet, value: 41 },
                        { minWidth: Breakpoints.Laptop, value: 48 },
                        { minWidth: Breakpoints.BigScreen, value: 54 },
                      ],
                    }
                  ),
                  dimensions.width
                )}
              />
              {/* Name */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Background'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Mobile, value: 16 },
                        { minWidth: Breakpoints.Tablet, value: 19 },
                        { minWidth: Breakpoints.Laptop, value: 21 },
                        { minWidth: Breakpoints.Desktop, value: 23 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                      marginLeft: 10,
                      marginRight: 20,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Visa'}
              </Text>
            </View>
          </Pressable>
          {/* Main View */}
          <View>
            {/* Amounts */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Light'],
                  borderStyle: 'dotted',
                  borderTopWidth: 1,
                  marginTop: [
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.Laptop, value: 25 },
                    { minWidth: Breakpoints.Desktop, value: 30 },
                    { minWidth: Breakpoints.BigScreen, value: 35 },
                  ],
                  paddingBottom: 30,
                  paddingTop: 30,
                },
                dimensions.width
              )}
            >
              {/* Subtotal */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
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
                        color: theme.colors['Background'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: [
                          { minWidth: Breakpoints.Mobile, value: 16 },
                          { minWidth: Breakpoints.Tablet, value: 19 },
                          { minWidth: Breakpoints.Laptop, value: 21 },
                          { minWidth: Breakpoints.Desktop, value: 23 },
                          { minWidth: Breakpoints.BigScreen, value: 25 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Bus Ride Total'}
                </Text>

                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: theme.colors['Background'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: [
                          { minWidth: Breakpoints.Mobile, value: 16 },
                          { minWidth: Breakpoints.Tablet, value: 19 },
                          { minWidth: Breakpoints.Laptop, value: 21 },
                          { minWidth: Breakpoints.Desktop, value: 23 },
                          { minWidth: Breakpoints.BigScreen, value: 25 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'$32.60'}
                </Text>
              </View>
              {/* Delivery */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: [
                      { minWidth: Breakpoints.Mobile, value: 15 },
                      { minWidth: Breakpoints.Tablet, value: 25 },
                      { minWidth: Breakpoints.Laptop, value: 30 },
                    ],
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
                        color: theme.colors['Background'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: [
                          { minWidth: Breakpoints.Mobile, value: 16 },
                          { minWidth: Breakpoints.Tablet, value: 19 },
                          { minWidth: Breakpoints.Laptop, value: 21 },
                          { minWidth: Breakpoints.Desktop, value: 23 },
                          { minWidth: Breakpoints.BigScreen, value: 25 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Additional Charge(5%)'}
                </Text>

                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: theme.colors['Background'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: [
                          { minWidth: Breakpoints.Tablet, value: 19 },
                          { minWidth: Breakpoints.Laptop, value: 21 },
                          { minWidth: Breakpoints.Desktop, value: 23 },
                          { minWidth: Breakpoints.BigScreen, value: 25 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'$1.63'}
                </Text>
              </View>
            </View>
            {/* Total */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderColor: theme.colors['Light'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 20,
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
                      color: theme.colors['Background'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 18 },
                        { minWidth: Breakpoints.Laptop, value: 20 },
                        { minWidth: Breakpoints.Desktop, value: 22 },
                        { minWidth: Breakpoints.BigScreen, value: 24 },
                        { minWidth: Breakpoints.Mobile, value: 18 },
                      ],
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Total'}
              </Text>

              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Background'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 19 },
                        { minWidth: Breakpoints.Mobile, value: 16 },
                        { minWidth: Breakpoints.Laptop, value: 21 },
                        { minWidth: Breakpoints.Desktop, value: 23 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                    }
                  ),
                  dimensions.width
                )}
              >
                {'$34.23'}
              </Text>
            </View>
          </View>
          {/* Pay */}
          <Button
            onPress={() => {
              try {
                showAlertUtil({
                  title: undefined,
                  message: 'Payment successfull',
                  buttonText: undefined,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Background'],
                borderRadius: 100,
                color: theme.colors['Custom Color_6'],
                fontFamily: 'System',
                fontSize: 18,
                fontWeight: '700',
                height: 58,
                marginBottom: 20,
                marginTop: 15,
                textAlign: 'center',
                width: '100%',
              },
              dimensions.width
            )}
            title={'Pay $34.60'}
          />
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PaymentScreen);
