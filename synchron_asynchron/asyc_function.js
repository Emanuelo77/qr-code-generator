async function asyncOperation() {
    let promise = neu Promise ((resolve, reject) => {
        setTimeout(() => resolve("Abgeschlossen!"), 2000;
    });

    let result = await promise;
    return result;
}

asyncOperation();