export interface EnigmaInterface {
  answer: string,
  nextUrl: string,
}

const Enigmas: Array<EnigmaInterface> = [{answer: "ifnothingmakessense", nextUrl: "reflection"}, {answer: "idontmakesense", nextUrl: "doubt"}, {answer: "soidontthinkIshouldcontinue", nextUrl: "certainties"}]

export default Enigmas
