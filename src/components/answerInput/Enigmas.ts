export interface EnigmaInterface {
  answer: string,
  nextUrl: string,
}

const Enigmas: Array<EnigmaInterface> = [{answer: "ifnothingmakessense", nextUrl: "enigma/reflection"}, {answer: "idontmakesense", nextUrl: "doubt"}]

export default Enigmas
