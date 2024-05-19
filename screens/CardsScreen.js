import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleScrollView,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const CardsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [AddressRadioButtoGroup, setAddressRadioButtoGroup] = React.useState(1);
  const [PaymentModal, setPaymentModal] = React.useState(false);
  const [PromoCodeModal, setPromoCodeModal] = React.useState(false);
  const [ShippingAddressModal, setShippingAddressModal] = React.useState(false);
  const [paymentMethodRadioGroup, setPaymentMethodRadioGroup] =
    React.useState(1);

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
          {'Your Cards'}
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
          {/* Main View */}
          <View>
            {/* Payment method */}
            <View
              style={StyleSheet.applyWidth(
                {
                  marginTop: [
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.Laptop, value: 25 },
                    { minWidth: Breakpoints.Desktop, value: 30 },
                    { minWidth: Breakpoints.BigScreen, value: 35 },
                  ],
                  paddingBottom: 20,
                },
                dimensions.width
              )}
            >
              <Pressable
                onPress={() => {
                  try {
                    showAlertUtil({
                      title: undefined,
                      message: 'Card selected',
                      buttonText: undefined,
                    });

                    navigation.goBack();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginBottom: 20, marginTop: 12 },
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
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, marginLeft: 12 },
                      dimensions.width
                    )}
                  >
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
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Card 1'}
                    </Text>
                    {/* Card details */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: theme.colors['Background'],
                            fontFamily: 'Inter_300Light',
                            fontSize: [
                              { minWidth: Breakpoints.Mobile, value: 12 },
                              { minWidth: Breakpoints.BigScreen, value: 21 },
                              { minWidth: Breakpoints.Desktop, value: 19 },
                              { minWidth: Breakpoints.Laptop, value: 17 },
                              { minWidth: Breakpoints.Tablet, value: 15 },
                            ],
                            marginTop: 3,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Mastercard **** 7890'}
                    </Text>
                  </View>
                </View>
              </Pressable>
              {/* Pressable 2 */}
              <Pressable
                onPress={() => {
                  try {
                    showAlertUtil({
                      title: undefined,
                      message: 'Card selected',
                      buttonText: undefined,
                    });

                    navigation.goBack();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginBottom: 20, marginTop: 12 },
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
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, marginLeft: 12 },
                      dimensions.width
                    )}
                  >
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
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Card 2'}
                    </Text>
                    {/* Card details */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: theme.colors['Background'],
                            fontFamily: 'Inter_300Light',
                            fontSize: [
                              { minWidth: Breakpoints.Mobile, value: 12 },
                              { minWidth: Breakpoints.BigScreen, value: 21 },
                              { minWidth: Breakpoints.Desktop, value: 19 },
                              { minWidth: Breakpoints.Laptop, value: 17 },
                              { minWidth: Breakpoints.Tablet, value: 15 },
                            ],
                            marginTop: 3,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Mastercard **** 6798'}
                    </Text>
                  </View>
                </View>
              </Pressable>
              {/* Pressable 3 */}
              <Pressable
                onPress={() => {
                  try {
                    showAlertUtil({
                      title: undefined,
                      message: 'Card selected',
                      buttonText: undefined,
                    });

                    navigation.goBack();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginBottom: 20, marginTop: 12 },
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
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, marginLeft: 12 },
                      dimensions.width
                    )}
                  >
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
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Card 3'}
                    </Text>
                    {/* Card details */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: theme.colors['Background'],
                            fontFamily: 'Inter_300Light',
                            fontSize: [
                              { minWidth: Breakpoints.Mobile, value: 12 },
                              { minWidth: Breakpoints.BigScreen, value: 21 },
                              { minWidth: Breakpoints.Desktop, value: 19 },
                              { minWidth: Breakpoints.Laptop, value: 17 },
                              { minWidth: Breakpoints.Tablet, value: 15 },
                            ],
                            marginTop: 3,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Visacard **** 7432'}
                    </Text>
                  </View>
                </View>
              </Pressable>
              {/* Pressable 4 */}
              <Pressable
                onPress={() => {
                  try {
                    showAlertUtil({
                      title: undefined,
                      message: 'Card selected',
                      buttonText: undefined,
                    });

                    navigation.goBack();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginBottom: 20, marginTop: 12 },
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
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, marginLeft: 12 },
                      dimensions.width
                    )}
                  >
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
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Card 4'}
                    </Text>
                    {/* Card details */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: theme.colors['Background'],
                            fontFamily: 'Inter_300Light',
                            fontSize: [
                              { minWidth: Breakpoints.Mobile, value: 12 },
                              { minWidth: Breakpoints.BigScreen, value: 21 },
                              { minWidth: Breakpoints.Desktop, value: 19 },
                              { minWidth: Breakpoints.Laptop, value: 17 },
                              { minWidth: Breakpoints.Tablet, value: 15 },
                            ],
                            marginTop: 3,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Visacard **** 3434'}
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CardsScreen);
