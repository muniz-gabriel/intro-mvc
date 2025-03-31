const alunoService = new Alunoservice()

    alunos.forEach(aluno => {
        alunoService.add(new AlunoModel(aluno))
})

const alunoView = new AlunoView(document.querySelector('[data-table="alunos"]'))
const alunoController = new AlunoController(alunoService, alunoView)

document.querySelector('from').addEventListener('submit', function (event) {
    event.preventDefault()
    const nome = document.getElementById('first_name').value;
    alunoController.add(nome);
})
