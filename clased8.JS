class estudiante {
    constructor(nombreest,  sexo, IDe) {
        this.nombreest = nombreest;
        this.sexo = sexo;
        this.IDe = IDe;
    }
}

class materia {
    constructor( materia, idm) {
        this.materia = materia;
        this.idm = idm;       
    }
}



class notas {
    constructor(nota, materia, estudiante) 
     {
        this.nota = nota;
        this.idm = materia;
        this.IDe = estudiante;
    }

    
}

estudiante1 = new estudiante("marcela", "femenino",5);
estudiante2 = new estudiante("armando", "masculino",1);
estudiante3 = new estudiante("daniel", "masculino",3);
estudiante4 = new estudiante("nicolas", "masculino",2);
estudiante5 = new estudiante("maria", "femenino",4);
estudiante6 = new estudiante("alexandra", "femenino",6);

materia1 = new materia("quimica",1);
materia2 = new materia("idiomas",2);
materia3 = new materia("historia",3);

nota1 = new notas(1.1,1,1);

