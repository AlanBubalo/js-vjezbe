let students = [
    {
        ime: "Ivo",
        prezime: "Ivovic",
        upisan: false,
    },
    {
        ime: "Iva",
        prezime: "Ivovic",
        upisan: false,
    },
    {
        ime: "Stipe",
        prezime: "Stipic",
        upisan: true,
    },
    {
        ime: "Marko",
        prezime: "Markic",
        upisan: false,
    },
    {
        ime: "Janko",
        prezime: "Jankic",
        upisan: true,
    },
    {
        ime: "Mirko",
        prezime: "Mirkovic",
        upisan: true,
    },
    {
        ime: "Filip",
        prezime: "Filipovic",
        upisan: true,
    },
    {
        ime: "Josip",
        prezime: "Josipovic",
        upisan: false,
    },
    {
        ime: "Luka",
        prezime: "Horvat",
        upisan: false,
    },
    {
        ime: "Mario",
        prezime: "Maretic",
        upisan: false,
    }
];

let provjeri = (lista, pojam) => {
    for (let i = 0; i < lista.length; i++)
    {
        if (lista[i].upisan === true && (lista[i].ime === pojam || lista[i].prezime === pojam))
            return true;
    }
    return false;
}