import React, { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ScrollFloat.css'

gsap.registerPlugin(ScrollTrigger)

interface ScrollFloatProps {
  children: React.ReactNode
  scrollContainerRef?: React.RefObject<HTMLElement | null>
  containerClassName?: string
  textClassName?: string
  animationDuration?: number
  ease?: string
  scrollStart?: string
  scrollEnd?: string
  stagger?: number
}

export const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'power2.out',
  scrollStart = 'top 90%',
  scrollEnd = 'top 30%',
  stagger = 0.010
}) => {
  const containerRef = useRef<HTMLHeadingElement | null>(null)

  // Recursively process string tokens and nested colored spans into word and char units
  const splitText = useMemo(() => {
    const renderNode = (node: React.ReactNode, keyPrefix = ''): React.ReactNode => {
      if (typeof node === 'string') {
        const words = node.split(' ')
        return words.map((word, wordIndex) => {
          if (!word && wordIndex === words.length - 1) return null
          return (
            <React.Fragment key={`${keyPrefix}-w-${wordIndex}`}>
              <span className="word">
                {word.split('').map((char, charIndex) => (
                  <span className="char" key={`${keyPrefix}-c-${wordIndex}-${charIndex}`}>
                    {char}
                  </span>
                ))}
              </span>
              {wordIndex < words.length - 1 && <span className="space">&nbsp;</span>}
            </React.Fragment>
          )
        })
      }

      if (React.isValidElement(node)) {
        const element = node as React.ReactElement<{ children?: React.ReactNode; className?: string }>
        return React.cloneElement(
          element,
          { key: keyPrefix },
          renderNode(element.props.children, `${keyPrefix}-child`)
        )
      }

      return node
    }

    if (Array.isArray(children)) {
      return children.map((child, i) => renderNode(child, `root-${i}`))
    }
    return renderNode(children, 'root')
  }, [children])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window

    const charElements = el.querySelectorAll('.char')

    const ctx = gsap.context(() => {
      gsap.fromTo(
        charElements,
        {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: 35
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          yPercent: 0,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: 0.5
          }
        }
      )
    }, el)

    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => {
      clearTimeout(timer)
      ctx.revert()
    }
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger])

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  )
}

export default ScrollFloat
