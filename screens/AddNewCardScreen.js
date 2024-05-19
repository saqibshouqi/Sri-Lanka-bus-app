import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  DatePicker,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const AddNewCardScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [PaymentModal, setPaymentModal] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [sliderValue, setSliderValue] = React.useState(0);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

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
            {
              flexDirection: 'column',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
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

      <SimpleStyleKeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors['Custom Color_6'] },
          dimensions.width
        )}
      >
        {/* Form */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, flexDirection: 'column' },
            dimensions.width
          )}
        >
          {/* Card Image */}
          <View>
            <Image
              resizeMode={'center'}
              source={Images.NewCard}
              style={StyleSheet.applyWidth({ height: 300 }, dimensions.width)}
            />
          </View>
          {/* Card Number */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: '-8%', paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Background'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Card Number'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              placeholder={'Enter a value...'}
              webShowOutline={true}
              editable={true}
              placeholderTextColor={theme.colors['BG Gray']}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Divider'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: 16,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors['Custom Color_6'],
                  fontFamily: 'Inter_400Regular',
                  height: 56,
                  marginTop: 14,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Card Name */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginBottom: 9,
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Background'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Card Name'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              placeholder={'Enter a value...'}
              webShowOutline={true}
              editable={true}
              placeholderTextColor={theme.colors['BG Gray']}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Divider'],
                  borderBottomWidth: 1,
                  borderColor: theme.colors.divider,
                  borderLeftWidth: 1,
                  borderRadius: 16,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors['Custom Color_6'],
                  fontFamily: 'Inter_400Regular',
                  height: 56,
                  marginTop: 14,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            {/* Pressable 1 */}
            <Pressable
              onPress={() => {
                try {
                  setPaymentModal(true);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { marginTop: 12, width: '50%' },
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
                    justifyContent: 'space-between',
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
            {/* Pressable 2 */}
            <Pressable
              onPress={() => {
                try {
                  setPaymentModal(true);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { marginTop: 12, width: '50%' },
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
                    justifyContent: 'space-between',
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
                        marginRight: 50,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Visa\n'}
                </Text>
              </View>
            </Pressable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_6'],
                flexDirection: 'row',
              },
              dimensions.width
            )}
          >
            {/* Expiration Date */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginTop: 20, paddingLeft: 20, paddingRight: 20 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Background'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {'Expiration Date'}
              </Text>
              <DatePicker
                autoDismissKeyboard={true}
                disabled={false}
                hideLabel={false}
                label={'Date'}
                leftIconMode={'inset'}
                mode={'date'}
                onDateChange={newDatePickerValue => {
                  try {
                    setDatePickerValue(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                type={'solid'}
                date={datePickerValue}
                format={'mm/yy'}
                rightIconName={'EvilIcons/calendar'}
                style={StyleSheet.applyWidth(
                  { fontSize: 12, marginTop: 5 },
                  dimensions.width
                )}
              />
            </View>
            {/* CVV */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color_6'],
                  flex: 1,
                  marginTop: 20,
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Background'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {'CVV'}
              </Text>
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                placeholder={'Enter a value...'}
                webShowOutline={true}
                editable={true}
                keyboardType={'phone-pad'}
                placeholderTextColor={theme.colors['BG Gray']}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Divider'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors.divider,
                    borderLeftWidth: 1,
                    borderRadius: 16,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    fontFamily: 'Inter_400Regular',
                    height: 56,
                    marginTop: 14,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              />
            </View>
          </View>
          {/* Button */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderTopWidth: 2,
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
            {/* Add */}
            <Button
              onPress={() => {
                try {
                  showAlertUtil({
                    title: undefined,
                    message: 'Card added',
                    buttonText: undefined,
                  });

                  navigation.navigate('HomeScreen');
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
              title={'Add'}
            />
          </View>
        </View>
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(AddNewCardScreen);
