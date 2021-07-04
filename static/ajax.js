const Ajax = Object.create(null);

Ajax.json = (response) => console.log(response);

//contacts the root with new data to store
Ajax.query = function (requestObj) {

    return window.fetch("/storerecipe", {
        "method": "POST",
        "body": JSON.stringify(requestObj),
        "headers": {
            "Content-Type": "application/json"
        }
    }).then(Ajax.json());
};

export default Object.freeze(Ajax);