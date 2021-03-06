import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';
import BackgroundImage from './background-image';

//
// Background
//

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export const Background = ({ image, color, children, style }) =>
  image ? (
    <BackgroundImage image={image} style={styles.background}>
      <ContentWrapper style={style}>{children}</ContentWrapper>
    </BackgroundImage>
  ) : (
    <View style={[{ backgroundColor: color }, styles.background, style]}>
      <ContentWrapper style={style}>{children}</ContentWrapper>
    </View>
  );

Background.propTypes = {
  image: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  style: View.propTypes.style,
};

//
// Split Background
//

const splitStyles = StyleSheet.create({
  top: {
    flex: 1,
  },
  bottom: {
    flex: 1,
  },
});

export const SplitBackground = ({ image, bottom, children, style }) => (
  <BackgroundImage image={image} style={styles.background}>
    <View style={splitStyles.top} />
    <View style={[splitStyles.bottom, { backgroundColor: bottom }]} />
    <View style={StyleSheet.absoluteFill}>
      <ContentWrapper style={style}>{children}</ContentWrapper>
    </View>
  </BackgroundImage>
);

SplitBackground.propTypes = {
  image: PropTypes.string,
  bottom: PropTypes.string,
  children: PropTypes.node,
  style: View.propTypes.style,
};

//
// ContentWrapper
//

const wrapperStyles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});

export const ContentWrapper = ({ children, style }) => (
  <SafeAreaView style={wrapperStyles.safe}>
    <KeyboardAvoidingView
      style={[wrapperStyles.avoid, style]}
      behavior="padding"
    >
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
);

ContentWrapper.propTypes = {
  children: PropTypes.node,
  style: View.propTypes.style,
};

export default Background;
