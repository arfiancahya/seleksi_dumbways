/** class Produk **/
function Produk(nama, harga, jumlah) {
    this.nama = nama;
    this.harga = harga;
    this.jumlah = jumlah;
};
Produk.prototype.tersediaUntuk = function(dibutuhkan) {
    return this.jumlah >= dibutuhkan;
};

/** class ItemFaktur **/
function ItemFaktur(produk, jumlah, harga) {
    this.produk = produk;
    this.jumlah = jumlah;
    this.harga = harga;
};
ItemFaktur.prototype.total = function() {
    return this.jumlah * this.harga;
};


/** class Faktur **/
function Faktur(nomor, tanggal, diskon) {
    this.nomor = nomor;
    this.tanggal = tanggal;
    this.items = [];
    this.diskon = diskon;
};
Faktur.prototype = {
    total: function() {
        let totalItem = 0;
        this.items.forEach(function(item) {
            totalItem += item.total();
        });
        const totalDiskon = (this.diskon / 100) * totalItem;
        return totalItem - totalDiskon;

    },
    tambah: function(produk, jumlah, harga) {
        this.items.push(new ItemFaktur(produk, jumlah, harga));
    }
};

/** Contoh Penggunaan **/
const produkA = new Produk('Laptop Asus ROG', 120000, 10);
const produkB = new Produk('Playstasion 5', 85000, 5);
const produkC = new Produk('Xiaomi', 1000, 10);
const faktur = new Faktur('FA-001', Date.now(), 10);
faktur.tambah(produkA, 5, 130000);
faktur.tambah(produkB, 10, 12000);
faktur.tambah(produkC, 10, 1000);
console.log(faktur); // output: {nomor: "FA-001", tanggal, items: Array[2], diskon: 10}
console.log(faktur.total()); // output