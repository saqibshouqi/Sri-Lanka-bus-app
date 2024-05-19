import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const SwiperStyles = theme =>
  StyleSheet.create({
    Swiper: { style: { height: 300, width: '100%' }, props: {} },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    'Action button': {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        height: 48,
        marginTop: 25,
        textAlign: 'center',
      },
      props: {},
    },
    'Action button 2': {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        height: 48,
        marginTop: 25,
        textAlign: 'center',
      },
      props: {},
    },
    'Action button 3': {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        height: 48,
        marginTop: 25,
        textAlign: 'center',
      },
      props: {},
    },
    Button: {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
    'action btn tablet': {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: [
          { minWidth: Breakpoints.Mobile, value: 16 },
          { minWidth: Breakpoints.BigScreen, value: 24 },
          { minWidth: Breakpoints.Desktop, value: 20 },
          { minWidth: Breakpoints.Laptop, value: 20 },
          { minWidth: Breakpoints.Tablet, value: 20 },
        ],
        height: [
          { minWidth: Breakpoints.Mobile, value: 48 },
          { minWidth: Breakpoints.BigScreen, value: 80 },
          { minWidth: Breakpoints.Desktop, value: 60 },
          { minWidth: Breakpoints.Laptop, value: 60 },
          { minWidth: Breakpoints.Tablet, value: 60 },
        ],
        marginTop: 10,
        textAlign: 'center',
      },
      props: {},
    },
    'action btn tablet 2': {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: [
          { minWidth: Breakpoints.Mobile, value: 16 },
          { minWidth: Breakpoints.BigScreen, value: 24 },
          { minWidth: Breakpoints.Desktop, value: 20 },
          { minWidth: Breakpoints.Laptop, value: 20 },
          { minWidth: Breakpoints.Tablet, value: 20 },
        ],
        height: [
          { minWidth: Breakpoints.Mobile, value: 48 },
          { minWidth: Breakpoints.BigScreen, value: 80 },
          { minWidth: Breakpoints.Desktop, value: 60 },
          { minWidth: Breakpoints.Laptop, value: 60 },
          { minWidth: Breakpoints.Tablet, value: 60 },
        ],
        marginTop: 10,
        textAlign: 'center',
      },
      props: {},
    },
    'action btn tablet 3': {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: [
          { minWidth: Breakpoints.Mobile, value: 16 },
          { minWidth: Breakpoints.BigScreen, value: 24 },
          { minWidth: Breakpoints.Desktop, value: 20 },
          { minWidth: Breakpoints.Laptop, value: 20 },
          { minWidth: Breakpoints.Tablet, value: 20 },
        ],
        height: [
          { minWidth: Breakpoints.Mobile, value: 48 },
          { minWidth: Breakpoints.BigScreen, value: 80 },
          { minWidth: Breakpoints.Desktop, value: 60 },
          { minWidth: Breakpoints.Laptop, value: 60 },
          { minWidth: Breakpoints.Tablet, value: 60 },
        ],
        marginTop: 10,
        textAlign: 'center',
      },
      props: {},
    },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    'Text Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    'Text Input 2': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    'Text Input 3': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const ViewStyles = theme =>
  StyleSheet.create({
    'header action': {
      style: {
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',
        width: 48,
      },
      props: {},
    },
    'header action 2': {
      style: {
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',
        width: 48,
      },
      props: {},
    },
    'header action 3': {
      style: {
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',
        width: 48,
      },
      props: {},
    },
    'screen header view': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    'screen header view 2': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    'screen header view 3': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { style: { color: theme.colors.strong }, props: {} },
    'Text 2': { style: { color: theme.colors.strong }, props: {} },
    'Text 3': { style: { color: theme.colors.strong }, props: {} },
    'Text 4': { style: { color: theme.colors.strong }, props: {} },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
    'Image 2': { style: { height: 100, width: 100 }, props: {} },
    'Image 3': { style: { height: 100, width: 100 }, props: {} },
    'Image 4': { style: { height: 100, width: 100 }, props: {} },
  });
