import {Asset} from 'contentful'

export interface IAuthor {
  name: string
  bio: string
  profession: string
  thumbnail: Asset
}
