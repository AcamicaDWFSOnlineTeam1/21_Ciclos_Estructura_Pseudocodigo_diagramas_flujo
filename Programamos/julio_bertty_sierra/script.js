let ejercicio = parseInt(prompt('Escriba el numero del ejecicio a realizar: \n 1--> ¿Llega? \n 2--> ¿Cuantos tanques de nafta? \n 3--> Dial radio \n 4--> Transferencia Bancariaa'));

switch (ejercicio) {
    case 1:
        // ** ¿Llega?
        const CONSUMO_X_LITRO = 15;
        const ALMACENAMIENTO_TANQUE_X_LITRO = 45;
        const CONSUMO_MAX_KM_AUTO = CONSUMO_X_LITRO * ALMACENAMIENTO_TANQUE_X_LITRO;

        let kmXrecorrer = parseFloat(prompt('Kilometros a Recorrer: '));
        let consumo = kmXrecorrer/CONSUMO_X_LITRO

        if (kmXrecorrer > CONSUMO_MAX_KM_AUTO) {    
            alert('Usted deberá abastacer conbustible en su trayecto')
        } else {
            alert('Puede recorrer la distancia con un solo tanque')
        };
        
        break;

    case 2:
        // ** ¿Cuantos tanques de nafta?
        const V1 = 15;
        const V2 = 12;
        const V3 = 10;

        const TANQUE = 50

        let versionAutomovil = parseInt(prompt('Escriba el numero de la version que está utilizando:\n 1--> Motor 1.6 \n 2--> Motor 1.8 \n 3--> Motor 2.0'));
        let kmArecorrer = parseFloat(prompt('Escriba Los Kilometros a recorrer: '));
        
        if (versionAutomovil == 1) {
            let tanques = (kmArecorrer / V1) / TANQUE;
            alert("Usted va ha necesitar: " + tanques + ' ' + "Tanques de Nafta para realizar ese recorrido");
        }else if (versionAutomovil == 2) {
            let tanques = (kmArecorrer / V2) / TANQUE;
            alert("Usted va ha necesitar: " + tanques + ' ' + "Tanques de Nafta para realizar ese recorrido")
        } else {
            let tanques = (kmArecorrer / V3) / TANQUE;
            alert("Usted va ha necesitar: " + tanques + ' ' + "Tanques de Nafta para realizar ese recorrido")
        }
        
        break;

    case 3:
        // Dial de radio
        let dial = parseFloat(prompt('Ingrese dial de radio a escuchar: '));
        if (((dial % 2) != 0) && (dial >= 89.9) && (dial < 107.9)) {
            alert('¡Ese dial de Radio EXISTE!');
        }else {
            alert('¡Ese dial de Radio NO EXISTE!')
        }
        
        break;

    case 4:
        // Transferencia Bancaria
        let fondos = 10000;
        let usuarios = ['JULIO', 'JOSE', 'ANDREA', 'SOFIA']        
        let validation = true;
        while (validation) {
            let monto = parseFloat(prompt('Monto de dinero a transferir: '));
            let usuario = (prompt('Ingrese destinatario: ')).toUpperCase();
            debugger;
            if (monto > fondos) {
                alert('No tiene fondos suficientes');
            }else if (!usuarios.includes(usuario)) {
                alert('Destinatario no existe');
            } else {
                alert('Transaccion exitosa');
                validation = false;
            }
        }        
        break;

    default:
        alert('Opcion no valida')
        break;
}

