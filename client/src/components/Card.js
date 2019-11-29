import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'

const StyledCard = styled(animated.div)`
  height: 320px;
  width: 200px;
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0.25rem;
  position: relative;
  transition: 0.4s ease-out;
  background: black;
  :hover {
    transform: translateY(-5px);
    :before {
      opacity: 1;
    }
  }
  :before {
    content: '';
		position: absolute;
		display: block;
		width: 100%
		height: 100%
		background: rgba(0, 0, 0, 0.4);
		z-index: 2
		transition: 0.5s
		opacity: 0
  }
`

const StyledCardImage = styled.div`
  background: url(${props => props.src}) center center;
  background-size: cover;
  height: 100%;
  width: 100%;
`

const StyledCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipses;

  height: fit-content;
  color: black;
  position: inherit;
  z-index: 3;
  transform: translateY(20px);
  transition: 0.5s;
  opacity: 1;

  ${StyledCard}:hover & {
    transform: translateY(-120px);
  }
`

const StyledCardHeader = styled.header`
  font-size: 1rem;
  font-weight: bold;
  opacity: 1;
  color: white;
  transition: 0.5s;
`
const StyledCardLabel = styled.label`
  font-size: 0.25rem;
  font-weight: regular;
  margin-bottom: 0.25rem;
  opacity: 0;
  transition: 0.5s;
  ${StyledCard}:hover & {
    opacity: 1;
    color: white;
  }
`

const Card = ({ data }) => {
  const { name, followers, link, genres, image } = data

  const animatedProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  })

  // const [animatedProps, setAnimatedProps] = useSpring(() => {
  //   return {
  //     xys: [0, 0, 1],
  //     config: { mass: 5, tension: 500, friction: 40 },
  //   }
  // })

  return (
    <StyledCard
      style={animatedProps}
      // style={{
      //   ...fadeIn,
      //   zIndex: hovered ? 2 : 1,
      //   transform: animatedProps.xys.interpolate(
      //     (x, y, s) =>
      //       `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
      //   ),
      // }}
      // onMouseEnter={() => setHovered(true)}
      // onMouseMove={({ clientX, clientY }) => {
      //   // Get mouse x position within card
      //   const x =
      //     clientX -
      //     (ref.current.offsetLeft -
      //       (window.scrollX || window.pageXOffset || document.body.scrollLeft))

      //   // Get mouse y position within card
      //   const y =
      //     clientY -
      //     (ref.current.offsetTop -
      //       (window.scrollY || window.pageYOffset || document.body.scrollTop))

      //   // Set animated values based on mouse position and card dimensions
      //   const dampen = 10 // Lower the number the less rotation
      //   const xys = [
      //     -(y - ref.current.clientHeight / 2) / dampen, // rotateX
      //     (x - ref.current.clientWidth / 2) / dampen, // rotateY
      //     1.07, // Scale
      //   ]

      //   // Update values to animate to
      //   setAnimatedProps({ xys: xys })
      // }}
      // onMouseLeave={() => {
      //   setHovered(false)
      //   setAnimatedProps({ xys: [0, 0, 1] })
      // }}
    >
      {image && <StyledCardImage src={image.url} />}
      <StyledCardDescription>
        <StyledCardHeader primary>{name}</StyledCardHeader>
        <StyledCardLabel>{genres[0] || ''}</StyledCardLabel>
        <StyledCardLabel>{followers + ' followers'}</StyledCardLabel>
      </StyledCardDescription>
    </StyledCard>
  )
}

export default Card
