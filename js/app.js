import { MateriaModel } from "./models/materia.model.js"
import { Alunoservice } from "./services/aluno.service.js"
import { MateriaService } from "./services/materia.service"
import { AlunoView } from "./views/aluno.view.js"
import { alunoController } from "./controllers/aluno.controller.js"

const materiaService = new MateriaService()
let materias = materiaService.getAll()
if (materias.length === 0) {
    materiaService.add(new MateriaModel({ nome: 'Back-End 1' }))
    materiaService.add(new MateriaModel({ nome: 'Front-End 2' }))
    materiaService.add(new MateriaModel({ nome: 'Banco de Dados' }))
    materiaService.add(new MateriaModel({ nome: 'Ferramentas Web' }))
}

const alunoService = new Alunoservice()

const alunoView = new AlunoView(
document.querySelector('[data-table="alunos"]'),
materiaService.getAll()
)

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
    const nome = document.getElementById('first_name').value;
    alunoController.add({ nome });
})

document.querySelector('#search_name').addEventListener('input', function (e) {
    let nome = this.value
    sessionStorage.settItem('search', nome)
    if (nome.length > 2 || nome.lenght === 0) {
        alunoController.search(nome)
    }
})

if(sessionStorage.getItem('search')) {
    let nome = sessionStorage.getItem('search')
    document.querySelector('#search_name').value = nome
    alunoController.search(nome)
}
