import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
