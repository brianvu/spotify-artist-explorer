import React from 'react'

// components
import Card from '../components/Card'

const MainDisplay = props => {
  const { data } = props

  console.log(data)
  if (data.length === []) return 'hi'
  // return <Card data={item} key={item.id} />
  return data.map(item => <Card data={item} key={item.id} />)
}

export default MainDisplay
