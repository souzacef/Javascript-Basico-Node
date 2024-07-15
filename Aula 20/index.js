async function espera() {
    const promise =  new Promise(resolve => {
        setTimeout(() => (console.log("Olá, demorei 3 segundos")),3000);
    })
    const esperando = await promise;
    console.log("Não demorei nada.")
}

espera();