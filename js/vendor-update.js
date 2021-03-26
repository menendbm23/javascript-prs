$().ready(() => {
    $("#update").click(() => {
        let vendor = {
            id: $("#pid").val(),
            code: $("#pcode").val(),
            name: $("#pname").val(),
            address: $("#paddress").val(),
            city: $("#pcity").val(),
            state: $("#pstate").val(),
            zip: $("#pzip").val(),
            phone: $("#pphone").val(),
            email: $("#pemail").val(),
        }
        vendorUpdate(vendor.id, vendor)
        .done((res) => {
            console.log("Update Successful:", res);
        })
        .fail((err) => {
            console.error("Update failed:", err);
        })
    });
    
    $("button").click(() => {
        let id = $("#vid").val();
        vendorDetail(id)
        .done((vendor) => {
            console.log("Vendor:", vendor);
            display(vendor);
        })
        .fail((err) => {
            alert("Vendor not found!");
        });
    });
});

const display = (vendor) => {
    $("#pid").val(vendor.id)
    $("#pcode").val(vendor.code);
    $("#pname").val(vendor.name);
    $("#paddress").val(vendor.address);
    $("#pcity").val(vendor.city);
    $("#pstate").val(vendor.state);
    $("#pzip").val(vendor.zip);
    $("#pphone").val(vendor.phone ?? "NA");
    $("#pemail").val(vendor.email ?? "NA");  
};



