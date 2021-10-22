let students = [
    {
        ime: "Ivo",
        prezime: "Ivovic",
        upisan: false,
        status: false
    },
    {
        ime: "Iva",
        prezime: "Ivovic",
        upisan: false,
        status: false
    },
    {
        ime: "Stipe",
        prezime: "Stipic",
        upisan: true,
        status: true
    },
    {
        ime: "Marko",
        prezime: "Markic",
        upisan: false,
        status: false
    },
    {
        ime: "Janko",
        prezime: "Jankic",
        upisan: true,
        status: true
    },
    {
        ime: "Mirko",
        prezime: "Mirkovic",
        upisan: true,
        status: false
    },
    {
        ime: "Filip",
        prezime: "Filipovic",
        upisan: true,
        status: false
    },
    {
        ime: "Josip",
        prezime: "Josipovic",
        upisan: false,
        status: false
    },
    {
        ime: "Luka",
        prezime: "Horvat",
        upisan: false,
        status: false
    },
    {
        ime: "Mario",
        prezime: "Maretic",
        upisan: false,
        status: false
    }
];

let provjeri_2 = (lista, pojam, status = true) => {
    for (let i = 0; i < lista.length; i++)
    {
        if (lista[i].upisan === true && lista[i].status === status){
            if (lista[i].ime.toLowerCase().includes(pojam.toLowerCase()) || lista[i].prezime.toLowerCase().includes(pojam.toLowerCase()))
                return true;
        }      
    }
    return false;
}