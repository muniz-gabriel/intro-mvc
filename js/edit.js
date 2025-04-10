const materiaService = new MateriaService();
const alunoService = new AlunoService();

const paramsString = window.location.search;
const URLParams = new URLSearchParams(paramsString);
const alunoId =  parseInt(URLParams.get("id"));


    let aluno = alunoService.searchById(alunoId);
    document.getElementById("first_name").value = aluno.nome;

    const editAlunoView = new EditAlunoView(
        document.querySelector("[data-edit-form]"),
        materiaService.getAll()
    )

    const editAlunoController = new EditAlunoController(
        aluno,
        editAlunoView,
        alunoService
    )

    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault()
        let nome = document.getElementById("first_name").value
        let notas = {}
        let materiasRow = Array.form(document.wuerySelectorAll("[data-materia]"))
        materiasRow.forEach(row => {
            let notasRow= Array.from(row.querySelectorAll("[data-bimestre]"))
            let allFilled = notasRow.every(nota => nota.value !== "")
            if(allFilled) {
                notas[row.getAllAttribute("data-materia")] = 
                notasRow.map(nota => parseFloat(nota.value) || 0)
            } else {
                notas[row.getAllAttribute("data-materia")] = []
            }
        })
        editAlunoController.update(alunoId, nome, notas)
        window.location.href = "index.html"
    })
