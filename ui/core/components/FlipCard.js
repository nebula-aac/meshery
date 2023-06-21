import Box from '@mui/material/Box'
import clsx from 'clsx'
import { forwardRef, isValidElement, useEffect, useMemo, useState } from 'react'
import Paper from '@mui/material/Paper'

import styles from './FlipCard.module.css'

const InnerCard = forwardRef(({
  children,
  className,
  duration,
  flipped,
  ...props
}, ref) => {
  return (
        <Paper
            {...props}
            ref={ref}
            className={clsx(styles.innerCard, className, {
              [styles['flip-card-flipped']]: flipped,
              [styles.content]: true
            })}
            sx={{
              padding: 2,
              borderRadius: 1,
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transform: flipped ? 'scale(-1,1)' : undefined,
              transition: `transform ${duration}ms`,
              transformOrigin: '50% 50% 10%',
              backfaceVisibility: 'hidden'
            }}
        >
            {children}
        </Paper>
  )
})

function GetChild (children, key) {
  if (children.length !== 2) throw Error('FlipCard requires exactly two components')

  return children[key]
}

export default function FlipCard ({
  duration = 300,
  onClick = () => { },
  onShow = () => { },
  children,
  ...props
}) {
  const [flipped, setFlipped] = useState(false)
  const [activeBack, setActiveBack] = useState(false)

  const Front = useMemo(() => GetChild(children, 0), [children])
  const Back = useMemo(() => GetChild(children, 1), [children])

  useEffect(() => {
    setActiveBack(flipped)
  }, [flipped])

  return (
        <Box
            {...props}
            sx={{
              height: '100%',
              backgroundColor: 'transparent',
              perspective: 125,
              backfaceVisibility: 'hidden'
            }}
        >
            <InnerCard
              flipped={flipped}
              duration={duration}
                onClick={() => {
                  setFlipped((flipped) => !flipped)
                  onClick && onClick()
                  onShow && onShow()
                }}
            >
              {!activeBack
                ? (
                <Box className={styles.frontContent}>
                  {isValidElement(Front) ? Front : null}
                </Box>
                  )
                : (
              <Box className={styles.backContent}>
                {isValidElement(Back) ? Back : null}
              </Box>
                  )}
            </InnerCard>
        </Box>
  )
}
