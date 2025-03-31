class MateriaService {
    constructor() {
        this.materias = []
        this.updateListMaterialsFromLocalStorage()
    }


    add(materia) {
        if (!materia instanceof MateriaModel) {
            throw new Error('A matéria deve ser uma instância de MateriaModel')
        }
        this.materias.push(materia)
        this.updateLocalStorage()
    }

    update(materia) {
        return materia
    }   

    searchById(id) {
        return this.materias.find(materia => materia._id == id)
    }   

    getAll() {
        return this.materias
    }

    updateLocalStorage() {
        let materias = JSON.stringify(this.materias)
        localStorage.setItem('materias', materias)
    }

    updateListMaterialsFromLocalStorage() {
        let local = localStorage.getItem('materias')
        let materias = []
        if (local) {
            materias = JSON.parse(local)
        }
        materias.forEach(materia => {
            this.add(new MateriaModel(materia))
        })
    }
};