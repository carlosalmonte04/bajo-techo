import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";
const AnimatedWrapper = WrappedComponent => class AnimatedWrapper
 extends Component {

  state = {
   animate: new Animated.Value(0)
  }

 componentWillAppear = (cb) => {
  Animated.spring(this.state.animate, { toValue: 1 }).start();
 }
 componentWillEnter = (cb) => {
  setTimeout(
   () => Animated.spring(this.state.animate, { toValue: 1 }).start(),
   250
  );
  cb();
 }
 componentWillLeave = (cb) => {
  Animated.spring(this.state.animate, { toValue: 0 }).start();
  setTimeout(() => {return cb()}, 175);
 }

 componentDidMount() {
     this.componentWillEnter(this.componentWillAppear)
 }

 componentWillUnmount() {
     this.componentWillLeave(() => {})
 }

 render() {
  const style = {
   opacity: Animated.template`${this.state.animate}`,
  };
  return (
   <Animated.div style={style} className="animated-page-wrapper">
    <WrappedComponent {...this.props} />
   </Animated.div>
  );
 }
};
export default AnimatedWrapper;