export class Person {

  constructor(
      public rowidObject: string,
      public label: string,
      public partyType: string,
      public firstName: string,
      public lastName: string,
      public birthdate:string,
      public taxId:string,
      public generationSuffixCd:string,
      public displayName:string,
      public $original?:Person,
      public name?:string
  ) {  }

}