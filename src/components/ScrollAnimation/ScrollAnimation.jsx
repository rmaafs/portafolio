/*
 * Portado desde "react-animate-on-scroll" (MIT), abandonada y declarada solo
 * hasta React 18. Es una traducción directa de la implementación original,
 * incluyendo su cálculo de visibilidad y sus valores por defecto.
 *
 * Único cambio: la librería usaba `lodash.throttle`; aquí se reemplaza por un
 * throttle local equivalente (50 ms, con llamada final) para no arrastrar esa
 * dependencia. Las clases de animación siguen siendo las de animate.css, que se
 * carga desde el CDN en index.html.
 */
import React, { Component } from "react";

/**
 * Throttle con trailing call, equivalente al comportamiento por defecto de
 * lodash.throttle que usaba la librería original.
 */
function throttle(fn, wait) {
  let lastCall = 0;
  let timeout = null;

  const invoke = () => {
    lastCall = Date.now();
    timeout = null;
    fn();
  };

  const throttled = () => {
    const remaining = wait - (Date.now() - lastCall);
    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      invoke();
    } else if (!timeout) {
      timeout = setTimeout(invoke, remaining);
    }
  };

  throttled.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return throttled;
}

class ScrollAnimation extends Component {
  constructor(props) {
    super(props);

    this.serverSide = typeof window === "undefined";
    this.listener = throttle(this.handleScroll.bind(this), 50);
    this.visibility = { onScreen: false, inViewport: false };

    this.state = {
      classes: "animated",
      style: {
        animationDuration: `${this.props.duration}s`,
        opacity: this.props.initiallyVisible ? 1 : 0,
      },
    };
  }

  getElementTop(elm) {
    let yPos = 0;
    while (elm && elm.offsetTop !== undefined && elm.clientTop !== undefined) {
      yPos += elm.offsetTop + elm.clientTop;
      elm = elm.offsetParent;
    }
    return yPos;
  }

  getScrollPos() {
    if (this.scrollableParent.pageYOffset !== undefined) {
      return this.scrollableParent.pageYOffset;
    }
    return this.scrollableParent.scrollTop;
  }

  getScrollableParentHeight() {
    if (this.scrollableParent.innerHeight !== undefined) {
      return this.scrollableParent.innerHeight;
    }
    return this.scrollableParent.clientHeight;
  }

  getViewportTop() {
    return this.getScrollPos() + this.props.offset;
  }

  getViewportBottom() {
    return (
      this.getScrollPos() + this.getScrollableParentHeight() - this.props.offset
    );
  }

  isInViewport(y) {
    return y >= this.getViewportTop() && y <= this.getViewportBottom();
  }

  isAboveViewport(y) {
    return y < this.getViewportTop();
  }

  isBelowViewport(y) {
    return y > this.getViewportBottom();
  }

  inViewport(elementTop, elementBottom) {
    return (
      this.isInViewport(elementTop) ||
      this.isInViewport(elementBottom) ||
      (this.isAboveViewport(elementTop) && this.isBelowViewport(elementBottom))
    );
  }

  isAboveScreen(y) {
    return y < this.getScrollPos();
  }

  isBelowScreen(y) {
    return y > this.getScrollPos() + this.getScrollableParentHeight();
  }

  onScreen(elementTop, elementBottom) {
    return (
      !this.isAboveScreen(elementBottom) && !this.isBelowScreen(elementTop)
    );
  }

  getVisibility() {
    const elementTop =
      this.getElementTop(this.node) - this.getElementTop(this.scrollableParent);
    const elementBottom = elementTop + this.node.clientHeight;
    return {
      inViewport: this.inViewport(elementTop, elementBottom),
      onScreen: this.onScreen(elementTop, elementBottom),
    };
  }

  componentDidMount() {
    if (this.serverSide) return;

    const parentSelector = this.props.scrollableParentSelector;
    this.scrollableParent = parentSelector
      ? document.querySelector(parentSelector)
      : window;

    if (this.scrollableParent && this.scrollableParent.addEventListener) {
      this.scrollableParent.addEventListener("scroll", this.listener);
    } else {
      console.warn(
        `Cannot find element by locator: ${this.props.scrollableParentSelector}`,
      );
    }

    if (this.props.animatePreScroll) {
      this.handleScroll();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.delayedAnimationTimeout);
    clearTimeout(this.callbackTimeout);
    this.listener.cancel();
    if (this.scrollableParent && this.scrollableParent.removeEventListener) {
      this.scrollableParent.removeEventListener("scroll", this.listener);
    }
  }

  visibilityHasChanged(previousVis, currentVis) {
    return (
      previousVis.inViewport !== currentVis.inViewport ||
      previousVis.onScreen !== currentVis.onScreen
    );
  }

  animate(animation, callback) {
    this.delayedAnimationTimeout = setTimeout(() => {
      this.animating = true;
      this.setState({
        classes: `animated ${animation}`,
        style: { animationDuration: `${this.props.duration}s` },
      });
      this.callbackTimeout = setTimeout(callback, this.props.duration * 1000);
    }, this.props.delay);
  }

  animateIn(callback) {
    this.animate(this.props.animateIn, () => {
      if (!this.props.animateOnce) {
        this.setState({
          style: {
            animationDuration: `${this.props.duration}s`,
            opacity: 1,
          },
        });
        this.animating = false;
      }
      const vis = this.getVisibility();
      if (callback) callback(vis);
    });
  }

  animateOut(callback) {
    this.animate(this.props.animateOut, () => {
      this.setState({
        classes: "animated",
        style: {
          animationDuration: `${this.props.duration}s`,
          opacity: 0,
        },
      });
      const vis = this.getVisibility();
      if (vis.inViewport && this.props.animateIn) {
        this.animateIn(this.props.afterAnimatedIn);
      } else {
        this.animating = false;
      }
      if (callback) callback(vis);
    });
  }

  handleScroll() {
    if (this.animating) return;

    const currentVis = this.getVisibility();
    if (!this.visibilityHasChanged(this.visibility, currentVis)) return;

    clearTimeout(this.delayedAnimationTimeout);
    if (!currentVis.onScreen) {
      this.setState({
        classes: "animated",
        style: {
          animationDuration: `${this.props.duration}s`,
          opacity: this.props.initiallyVisible ? 1 : 0,
        },
      });
    } else if (currentVis.inViewport && this.props.animateIn) {
      this.animateIn(this.props.afterAnimatedIn);
    } else if (
      currentVis.onScreen &&
      this.visibility.inViewport &&
      this.props.animateOut &&
      this.state.style.opacity === 1
    ) {
      this.animateOut(this.props.afterAnimatedOut);
    }
    this.visibility = currentVis;
  }

  render() {
    const classes = this.props.className
      ? `${this.props.className} ${this.state.classes}`
      : this.state.classes;

    return (
      <div
        ref={(node) => {
          this.node = node;
        }}
        className={classes}
        style={{ ...this.state.style, ...this.props.style }}
      >
        {this.props.children}
      </div>
    );
  }
}

ScrollAnimation.defaultProps = {
  offset: 150,
  duration: 1,
  initiallyVisible: false,
  delay: 0,
  animateOnce: false,
  animatePreScroll: true,
};

export default ScrollAnimation;
