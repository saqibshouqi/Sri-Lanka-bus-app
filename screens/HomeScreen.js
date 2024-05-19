import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Custom Color_6'],
          flexDirection: 'column',
          justifyContent: 'space-around',
        },
        dimensions.width
      )}
    >
      <Image
        resizeMode={'cover'}
        {...GlobalStyles.ImageStyles(theme)['Image'].props}
        source={Images.Wp3328592WorldMapBlackWallpaperHd}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
            height: '40%',
            width: '100%',
          }),
          dimensions.width
        )}
      />
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            alignSelf: 'auto',
            justifyContent: 'space-between',
            marginTop: '-20%',
          },
          dimensions.width
        )}
      >
        <Button
          onPress={() => {
            try {
              navigation.push('BusRecommendationScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: theme.colors['Background'],
                borderRadius: 20,
                color: theme.colors['Custom Color_6'],
                margin: 6,
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Bus Recommendation'}
        />
        {/* Button 2 */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('ComplainsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: theme.colors['Background'],
                borderRadius: 20,
                color: theme.colors['Custom Color_6'],
                margin: 6,
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Make A Complain'}
        />
        {/* Button 4 */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('PaymentScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: theme.colors['Background'],
                borderRadius: 20,
                color: theme.colors['Custom Color_6'],
                margin: 6,
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Payments'}
        />
        {/* Button 3 */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('AddNewCardScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: theme.colors['Background'],
                borderRadius: 20,
                color: theme.colors['Custom Color_6'],
                margin: 6,
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Add New Card'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
