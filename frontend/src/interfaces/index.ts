export interface IProject {
  id: number,
  attributes: {
    description: string,
    images: {
      data: {
        id: number,
        attributes: {
          name: string | null
          url: string
          width: number
          height: number
          formats: {
            small: {
              name: string | null
              url: string
              width: number
              height: number
            },
            thumbnail: {
              name: string | null
              url: string
              width: number
              height: number
            }
          }
        }
    }[]},
    title: string,
    text: string
  }
}

export interface ITarifParagraphItem {
  type: string
  text: string
}

export interface ITarifParagraph {
  type?: string
  text?: string
  children: ITarifParagraphItem[]
}

export interface ITarifParagraphList {
  indentLevel?: number
  children: ITarifParagraph[]
}

export interface ITarifService {
  children: ITarifParagraphList[]
}

export interface ITarif {
  id: number,
  attributes: {
   name: string,
   price: number,
   services: ITarifService[]
  }
}