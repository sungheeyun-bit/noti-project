import * as React from "react";
import { useLayer, useHover, Arrow } from "react-laag";
import { motion, AnimatePresence } from "framer-motion";

function Tooltip({ children, text }) {
  const [isOver, hoverProps] = useHover({ delayEnter: 100, delayLeave: 300 });
  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    placement: "top-center",
    triggerOffset: 8
  });
  let trigger;
  if (isReactText(children)) {
    trigger = (
      <span className="tooltip-text-wrapper" {...triggerProps} {...hoverProps}>
        {children}
      </span>
    );
  } else {
    trigger = React.cloneElement(children, {
      ...triggerProps,
      ...hoverProps
    });
  }

  return (
    <>
      {trigger}
      {renderLayer(
        <AnimatePresence>
          {isOver && (
            <motion.div
              className="tooltip-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              {...layerProps}
            >
              {text}
              <Arrow
                {...arrowProps}
                borderWidth={1}
                size={6}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}

function isReactText(children) {
  return ["string", "number"].includes(typeof children);
}

export default Tooltip;