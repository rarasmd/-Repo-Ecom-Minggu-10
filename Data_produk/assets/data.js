var nama_produk = document.getElementById("nama_produk");
var stok = document.getElementById("stok");
var id_produk = document.getElementById("id_produk");
var harga = document.getElementById("harga");

function prosesCari() {
    $.ajax({
        type: "POST",
        url: baseurl + "Data_produk/produk/pencarian",
        data: {
            idproduk: $("#idproduk").val()
        },
        dataType: "json",
        beforeSend: function (e) {
            if (e && e.overrideMimeType) {
                e.overrideMimeType("application/json;charset=UTF-8");
            }
        },
        success: function (response) {
            if (response.status == "success") {
                $("#hasil").show();
                nama_produk.innerHTML = response.nama_produk;
                id_produk.innerHTML = "ID : " + response.id_produk;
                stok.innerHTML = "Stok : " + response.stok;
                harga.innerHTML = "Harga : " + response.harga;

            } else {
                $("#hasil").hide();
                alert("Produk tidak ditemukan !")
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.responseText);
        }
    });
}


$(document).ready(function () {
    $("#btn-search").click(function () {
        prosesCari();
    });

    $("#hasil").hide();
    $("#idproduk").keyup(function () {
        if (event.keyCode == 13) {
            prosesCari();
        }
    });
});