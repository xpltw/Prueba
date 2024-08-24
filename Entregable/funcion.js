document.getElementById("calcular").addEventListener("click", function() {
    const dia = parseInt(document.getElementById("dia").value, 10);
    const mes = parseInt(document.getElementById("mes").value, 10) - 1; 
    const año = parseInt(document.getElementById("año").value, 10);

    if (dia && mes >= 0 && año) {
        const fechaIngresada = new Date(año, mes, dia);
        const fechaActual = new Date();

        const diferenciaFecha = fechaActual - fechaIngresada;

        const differenceInDay = Math.floor(diferenciaFecha / (1000 * 60 * 60 * 24));
        const differenceInWeek = Math.floor(differenceInDay / 7);
        const differenceInMonth = Math.floor(differenceInDay / 30.4375);
        const differenceInYear = Math.floor(differenceInDay / 365);

        document.getElementById("resultado1").textContent = "Han pasado " + differenceInDay + " días desde la fecha ingresada." 
        document.getElementById("resultado2").textContent = "Han pasado " + differenceInWeek + " semanas desde la fecha ingresada."
        document.getElementById("resultado3").textContent = "Han pasado " + differenceInMonth + " meses desde la fecha ingresada."
        document.getElementById("resultado4").textContent = "Han pasado " + differenceInYear + " años desde la fecha ingresada."

        console.log("Han pasado " + differenceInDay + " días desde la fecha ingresada");
        console.log("Han pasado " + differenceInWeek + " semanas desde la fecha ingresada");
        console.log("Han pasado " + differenceInMonth + " meses desde la fecha ingresada");
        console.log("Han pasado " + differenceInYear + " años desde la fecha ingresada");
    }
});



//const differenceInDay = Math.floor((new date() - new date(dia, mes, año)) / (1000 * 60 * 60 *24))
//console.log(differenceInDay)