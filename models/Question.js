class Question {
  constructor() {
    this.text = "alguna pregunta";
    this.choices = ["asdaf", "asdad"];
    this.answer = "sdfsfdd";
  }

  correctAnswer() {
    return true  
  }

}

const question = new Question()
const question1 = new Question()
const question2 = new Question()
const question3 = new Question()

console.log(question, question1, question2, question3)