class Res {
  name: string
  avaliation: string
  description: string
  image: string
  infos: string[]
  id: number

  constructor(
    name: string,
    avaliation: string,
    description: string,
    image: string,
    infos: string[],
    id: number
  ) {
    ;(this.name = name),
      (this.avaliation = avaliation),
      (this.description = description),
      (this.image = image),
      (this.infos = infos),
      (this.id = id)
  }
}

export default Res
