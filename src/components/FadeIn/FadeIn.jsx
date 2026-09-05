/*
 * Portado desde "react-fade-in" (MIT), abandonada y declarada solo para
 * React <= 17. Es una traducción directa de la implementación original: cada
 * hijo aparece de forma escalonada desplazándose 20px hacia arriba.
 */
import React, { useEffect, useState } from "react";

const FadeIn = ({
  children,
  className,
  childClassName,
  transitionDuration = 400,
  delay = 50,
  wrapperTag: WrapperTag = "div",
  childTag: ChildTag = "div",
  visible = true,
  onComplete,
}) => {
  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const childCount = React.Children.count(children);

  useEffect(() => {
    // Si no es visible, animamos todos los hijos hacia afuera.
    const count = visible ? childCount : 0;

    if (count === maxIsVisible) {
      // Ya terminamos de mover maxIsVisible: avisamos al acabar la animación.
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    // Acercamos maxIsVisible a count, de uno en uno.
    const increment = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible(maxIsVisible + increment);
    }, delay);
    return () => clearTimeout(timeout);
  }, [
    childCount,
    delay,
    maxIsVisible,
    visible,
    transitionDuration,
    onComplete,
  ]);

  return (
    <WrapperTag className={className}>
      {React.Children.map(children, (child, i) => (
        <ChildTag
          className={childClassName}
          style={{
            transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
            transform: maxIsVisible > i ? "none" : "translateY(20px)",
            opacity: maxIsVisible > i ? 1 : 0,
          }}
        >
          {child}
        </ChildTag>
      ))}
    </WrapperTag>
  );
};

export default FadeIn;
