import { isValidElement, useEffect, useRef, useState } from "react"
// mui v5
import { createTheme, ThemeProvider } from "@mui/material";

/*
const styles = (theme) => ({
  card : { height : '100%',
    backgroundColor : "transparent",
    perspective : theme.spacing(125), },
  innerCard : {
    padding : theme.spacing(2),
    borderRadius : theme.spacing(1),
    transformStyle : "preserve-3d",
    boxShadow : "0 4px 8px 0 rgba(0,0,0,0.2)",
    backgroundColor : "#fff",
    cursor : "pointer",
  },
  content : { backfaceVisibility : "hidden", },
  frontContent : {},
  backContent : { transform : "scale(-1, 1)",maxWidth : "50vw" },
});
*/

let theme = createTheme()

function GetChild(children, key) {
  if (children.length != 2) throw Error("FlipCard requires exactly two child components");

  return children[key];
}

function FlipCard({ children, duration = 500, onClick, onShow }) {
  const [flipped, setFlipped] = useState(false)
  const [activeBack, setActiveBack] = useState(false)

  const timeout = useRef(null)

  const Front = GetChild(children, 0);
  const Back = GetChild(children, 1);

  useEffect(() => {
    // This function makes sure that the inner content of the card disappears roughly
    // after 30 deg rotation has already occured. It will ensure that the user doesn't gets
    // a "blank" card while the card is rotating
    //
    // This guarantee can be offered because of two main reasons:
    // 1. In sufficiently modern browsers JS and CSS are handled in different threads
    // hence ones execution doesn't blocks another.
    // 2. setTimeout will put its callback at the end of current context's end hence ensuring
    // this callback doesn't gets blocked by another JS process.
    if (timeout.current) clearTimeout(timeout.current)

    timeout.current = setTimeout(() => {
      setActiveBack(flipped)
    }, duration / 6)
  }, [flipped])

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height : "100%", backgroundColor : "transparent", perspective : theme.spacing(125) }}
        onClick={() => {
          setFlipped((flipped) => !flipped)
          onClick && onClick
          onShow && onShow
        }}>
        <div
          style={{
            transform : flipped
              ? "scale(-1,1)"
              : undefined,
            transition : `transform ${duration}ms`,
            transformOrigin : "50% 50% 10%",
            transformStyle : "preserve-3d",
            boxShadow : "0 4px 8px 0 rgba(0,0,0,0.2)",
            backgroundColor : "#FFF",
            cursor : "pointer",
            padding : theme.spacing(2),
            borderRadius : theme.spacing(1),
          }}>
          {!activeBack
            ? (
              <div style={{ backfaceVisibility : "hidden" }}>
                {isValidElement(Front)
                  ? Front : null
                }
              </div>
            )
            :
            (
              <div style={{ transform : "scale(-1, 1)" }}>
                {isValidElement(Back)
                  ? Back : null
                }
              </div>
            )
          }
        </div>
      </div>
    </ThemeProvider>
  )
}

export default FlipCard