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

console.assert(napredna_pretraga(studenti, "ma ić") == 0) // → prvi student
console.assert(napredna_pretraga(studenti, "ko lić ri") == 3) // → zadnji student
console.assert(napredna_pretraga(studenti, "ić za") == 2) // → treći student
console.assert(napredna_pretraga(studenti, "ić ko la ri") == 3) // → zadnji student