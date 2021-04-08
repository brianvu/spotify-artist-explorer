import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { animated, useSpring, config } from 'react-spring'

// components
import Image from './Image'

const StyledCard = styled(animated.div)`
  background: black;
  border-radius: 5px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  height: 320px;
  margin: 0.25rem;
  position: relative;
  transition: 0.4s ease-out;
  width: 200px;
  :hover {
    transform: translateY(-5px);
    :before {
      opacity: 1;
    }
  }
  :before {
		background: rgba(0, 0, 0, 0.4);
		display: block;
		height: 100%
		opacity: 0
		position: absolute;
		transition: 0.5s
		width: 100%
		z-index: 2
    content: '';
  }
`

const StyledCardImage = styled(Image)`
  height: 100%;
  width: 100%;
`

const StyledCardDescription = styled.div`
  align-items: center;
  color: black;
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: center;
  opacity: 1;
  overflow: hidden;
  position: inherit;
  text-overflow: ellipses;
  transform: translateY(20px);
  transition: 0.5s;
  white-space: nowrap;
  z-index: 3;

  ${StyledCard}:hover & {
    transform: translateY(-120px);
  }
`

const StyledCardHeader = styled.header`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  opacity: 1;
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

const Card = ({ data, handleArtistSelected }) => {
  const { name, followers, genres, image } = data

  const animatedProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  })

  return (
    <StyledCard
      style={animatedProps}
      onClick={() => handleArtistSelected(data)}
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

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    followers: PropTypes.number,
    genres: PropTypes.array,
    image: PropTypes.object,
  }),
  handleArtistSelected: PropTypes.func,
}
