export interface EnigmaInterface {
  answer: string,
  nextUrl: string,
}

const Enigmas: Array<EnigmaInterface> = [{answer: "ifnothingmakessense", nextUrl: "reflection"}, {answer: "idontmakesense", nextUrl: "doubt"}, {answer: "soidontthinkishouldcontinue", nextUrl: "certainties"}, {answer: "besincere", nextUrl: "truth"}, {answer: "ilha", nextUrl: "depenumbra"}]

export default Enigmas
