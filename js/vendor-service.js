const url = "http://localhost:8080/api/vendors/";

const vendorList = () => {
    return $.getJSON(url);
}

const vendorDetail = (id) => {
    return $.getJSON(`${url}/${id}`);
}

const vendorCreate = (vendor) => {
    return $.ajax({
        method: "POST",
        url: url,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
}

const vendorUpdate = (id, vendor) => {
    return $.ajax({
        method: "PUT",
        url: url,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
}

const vendorRemove = (id) => {

}