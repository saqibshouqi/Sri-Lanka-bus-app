import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import showAlertUtil from '../utils/showAlert';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  ScreenContainer,
  StarRating,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const ComplainsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
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
          { height: 48, marginTop: 20, paddingBottom: 16, width: '100%' },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Background'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
              marginLeft: 35,
            }),
            dimensions.width
          )}
        >
          {'Share your complains and feedback'}
        </Text>
      </View>
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            marginTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Background'],
              fontFamily: 'Inter_500Medium',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {'What is your opinion of TravelGo?'}
        </Text>
        <StarRating
          isEditable={true}
          maxStars={5}
          onPress={newStarRatingValue => {
            const starRatingValue = newStarRatingValue;
            try {
              setStarRatingValue(newStarRatingValue);
            } catch (err) {
              console.error(err);
            }
          }}
          activeColor={theme.colors['Custom Color_8']}
          inactiveColor={theme.colors['Custom Color_7']}
          rating={starRatingValue}
          starSize={35}
          style={StyleSheet.applyWidth({ marginTop: 12 }, dimensions.width)}
        />
        {/* Feedback View */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Medium'],
              borderRadius: 12,
              marginTop: 25,
              width: '90%',
            },
            dimensions.width
          )}
        >
          <TextInput
            autoCorrect={true}
            changeTextDelay={500}
            multiline={true}
            numberOfLines={4}
            onChangeText={newTextAreaValue => {
              const textInputValue = newTextAreaValue;
              try {
                setTextAreaValue(newTextAreaValue);
              } catch (err) {
                console.error(err);
              }
            }}
            textAlignVertical={'top'}
            webShowOutline={true}
            {...GlobalStyles.TextInputStyles(theme)['Text Area'].props}
            placeholder={'Write your complaint here.'}
            placeholderTextColor={theme.colors['Light Inverse']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Area'].style,
                {
                  color: theme.colors['Background'],
                  fontFamily: 'Inter_400Regular',
                  height: 200,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                }
              ),
              dimensions.width
            )}
            value={textAreaValue}
          />
        </View>

        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await openImagePickerUtil({
                  mediaTypes: 'All',
                  allowsEditing: false,
                  quality: 0.2,
                  allowsMultipleSelection: false,
                  permissionErrorMessage:
                    'Sorry, we need media library permissions to make this work.',
                  showAlertOnPermissionError: true,
                });
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              borderColor: theme.colors['Background'],
              marginTop: 40,
              width: '70%',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors['Surface'],
                borderLeftWidth: 1,
                borderRadius: 15,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            <Icon
              name={'FontAwesome/photo'}
              size={24}
              color={theme.colors['Surface']}
              style={StyleSheet.applyWidth(
                { height: 30, width: 30 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { color: theme.colors['Surface'], paddingLeft: '20%' }
                ),
                dimensions.width
              )}
            >
              {'Attach evidence.'}
            </Text>
          </View>
        </Touchable>
        <Button
          onPress={() => {
            try {
              showAlertUtil({
                title: undefined,
                message: 'Review Sent',
                buttonText: undefined,
              });

              setTextAreaValue(props.route?.params?.String ?? null);
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
                borderRadius: 12,
                color: theme.colors['Custom Color_6'],
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                height: 48,
                marginBottom: 25,
                marginTop: 60,
                paddingBottom: 10,
                paddingTop: 10,
                width: 170,
              }
            ),
            dimensions.width
          )}
          title={'Submit Form\n'}
        />
        {/* Touchable 2 */}
        <Touchable
          onPress={() => {
            try {
              showAlertUtil({
                title: 'Contact Details',
                message: 'Tel No 1: 0773778387',
                buttonText: undefined,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              borderColor: theme.colors['Background'],
              marginTop: 50,
              width: '80%',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Background'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Medium'],
                borderLeftWidth: 1,
                borderRadius: 15,
                borderRightWidth: 1,
                borderStyle: 'dashed',
                borderTopWidth: 1,
                flexDirection: 'row',
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Custom Color_6']}
              name={'Ionicons/call-sharp'}
              style={StyleSheet.applyWidth(
                { height: 20, width: 20 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Custom Color_6'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 18,
                    marginLeft: 45,
                    paddingLeft: 16,
                  }
                ),
                dimensions.width
              )}
            >
              {'Call our Staff'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ComplainsScreen);
