"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function parseStatValue(value: string) {
  const match = value.trim().match(/^([^0-9]*)(\d+(?:[.,]\d+)?)(.*)$/);

  if (!match) {
    return null;
  }

  const rawNumber = match[2].replace(",", ".");
  const decimals = rawNumber.includes(".") ? rawNumber.split(".")[1].length : 0;

  return {
    prefix: match[1],
    number: Number(rawNumber),
    suffix: match[3],
    decimals,
  };
}

export function AnimatedStat({
  value,
  animate = true,
}: {
  value: string;
  animate?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const elementRef = useRef<HTMLSpanElement>(null);
  const parsed = parseStatValue(value);
  // Server HTML always carries the real value, so search engines and
  // no-JS visitors never see "0". The count-up starts only in the browser.
  const [displayValue, setDisplayValue] = useState(value);
  const canAnimate = Boolean(parsed) && animate;

  useEffect(() => {
    const element = elementRef.current;
    const current = parseStatValue(value);

    if (!element || !current || reduceMotion || !animate) {
      setDisplayValue(value);
      return;
    }

    setDisplayValue(`${current.prefix}${(0).toFixed(current.decimals)}${current.suffix}`);

    let animationFrame = 0;
    let startedAt = 0;
    const duration = 1800;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.disconnect();

        const animate = (timestamp: number) => {
          if (!startedAt) {
            startedAt = timestamp;
          }

          const progress = Math.min((timestamp - startedAt) / duration, 1);
          const eased = progress * progress * (3 - 2 * progress);
          const number = current.number * eased;
          const formatted = number.toFixed(current.decimals);
          setDisplayValue(`${current.prefix}${formatted}${current.suffix}`);

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [animate, reduceMotion, value]);

  return (
    <span ref={elementRef} className="tabular-nums">
      <span aria-hidden={canAnimate ? "true" : undefined}>{displayValue}</span>
      {canAnimate ? <span className="sr-only">{value}</span> : null}
    </span>
  );
}
