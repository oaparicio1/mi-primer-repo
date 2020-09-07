/*Total Ordinario 80000 (40 horas * $2000)
Horas Extra 5
Recargo por horas extra 3000 ($2000 * 1.5)
Total recargo por horas extra $15000 ($3000 * 5 horas extra)
Total devengado $95000 (Suma (Total recargo por horas extra, Total Ordinario))*/

function calculoSalario(horas, valorhora){

    if(horas > 40){
        var horasextras = horas - 40;
        var totalordinario = valorhora * 40;
        var recargoextra = valorhora * 1.5;
        var totalextras = recargoextra * horasextras;
        totaldevengado = totalextras + totalordinario;

    }else{
        var totaldevengado = valorhora * horas;
        var horasextras = 0;
        var totalextras = 0;
        var recargoextra = 0;
    }

       

        var salario = {
            "extras" : horasextras,
            "recargoext" : recargoextra,
            "totalhrextras": totalextras,
            "totaldev" :  totaldevengado,
        }

        return salario;
}

let res = calculoSalario(45, 2000);
console.log("Horas Extras: " +res.extras);
console.log("Recargo por Horas Extras: " +res.recargoext);
console.log("Total Recargo por Horas Extras: " +res.totalhrextras);
console.log("Total Devengado: " +res.totaldev);