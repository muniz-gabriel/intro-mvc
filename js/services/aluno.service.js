class Alunoservice {
    constructor() {
        this.alunos = []
    }

    addAluno(aluno) {
        if (!aluno instanceof AlunoModel) {
            throw new Error('O aluno deve ser uma instância de AlunoModel')
        }
        this.alunos.push(aluno)
    }

    update(aluno) {
        return aluno
    }
}