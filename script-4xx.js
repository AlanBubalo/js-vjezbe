let a = {
    naziv: "neki objekt"
};
a.unutarnji = a;
console.log(a.unutarnji.unutarnji.unutarnji.naziv);

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

let provjeri = (lista, pojam) => {
    for (let i = 0; i < lista.length; i++)
    {
        if (lista[i].upisan === true && (lista[i].ime === pojam || lista[i].prezime === pojam))
            return true;
    }
    return false;
}

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

let zagrade = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] === "{" || s[i] === "[" || s[i] === "(")
        {
                stack.push(s[i])
        }
        else if (s[i] === "}"){
            if (stack[stack.length - 1] === "{")
                stack.pop();
            else
                return false;
        }
        else if (s[i] === "]"){
            if (stack[stack.length - 1] === "[")
                stack.pop();
            else
                return false;
        }
        else if (s[i] === ")"){
            if (stack[stack.length - 1] === "(")
                stack.pop();
            else
                return false;
        }
    }
    return true;
}

let studenti = [
    {
        ime: "Marko",
        prezime: "Marković",
        grad: "Pula"
    },
    {
        ime: "Iva",
        prezime: "Ivić",
        grad: "Našice"
    },
    {
        ime: "Lucija",
        prezime: "Lucić",
        grad: "Zagreb"
    },
    {
        ime: "Nikola",
        prezime: "Nikolić",
        grad: "Rijeka"
    }
];

function napredna_pretraga(lista, pojam) {
    var pojmovi = pojam.split(" ");
    for (let i = 0; i < lista.length; i++)
    {
        let count = 0;
        for (let j = 0; j < pojmovi.length; j++)
        {
            if (lista[i].ime.toLowerCase().includes(pojmovi[j].toLowerCase()) || lista[i].prezime.toLowerCase().includes(pojmovi[j].toLowerCase()) || lista[i].grad.toLowerCase().includes(pojmovi[j].toLowerCase())){
                count += 1;
            }
            else
                break;
        }
        if (count >= pojmovi.length)
            return i;
    }
}