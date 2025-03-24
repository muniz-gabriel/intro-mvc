const alunos = [
    {
    nome: "chico melato",
    notas: {
        backend_1: [7, 8.5, 9, 6.5],
        frontend_2: [2, 2, 2, 2],
        bancodados: [2, 2, 3, 3],
        ferramentas: [3, 3, 3, 3],
    },
    },
    {
    nome: "talita lima",
    notas: {
        backend_1: [4, 4, 4, 4],
        frontend_2: [4, 4, 5, 5],
        bancodados: [5, 5, 6, 6],
        ferramentas: [7, 7, 8, 9],
    },
    },
    {
    nome: "fulano de tal",
    notas: {
        backend_1: [4, 8, 10, 4],
        frontend_2: [4, 8, 5, 5],
        bancodados: [5, 8, 6, 6],
        ferramentas: [7, 7, 8, 9],
    },
    },
    ];

    const alunoService = new Alunoservice()

alunos.forEach(aluno => {
    alunoService.addAluno(new AlunoModel(aluno))
})

const alunoView = new AlunoView(document.querySelector('[data-table="alunos"]'))
const alunoController = new AlunoController(alunoService, alunoView)

document.querySelector('from').addEventListener('submit', function (event) {
    event.preventDefault()
    const nome = document.getElementById('first_name').value;
    alunoController.add(nome);
})
