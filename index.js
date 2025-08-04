function sapa(nama){
    console.log("Halo, " + nama + "!");

}
sapa("Joy")
sapa("Seulgi")

function tambah(a,b){
    return a + b;

}
let hasil = tambah(5,3)
    console.log("Hasil: " + hasil)

    //
    let car = {
        name: "Fiat",
        model: 500,
        weight: "850kg",
        color: "white",
        start: function(){
            console.log("Mobil dinyalakan")
        },
                drive: function(){
            console.log("Mobil berjalan")
        },
                brake: function(){
            console.log("Mobil Mengerem")
        },
                stop: function(){
            console.log("Mobil Berhenti")
        },
    };
car.start()
car.drive(

)

    //
 
    let bike = {
        name: "Polygon",
        Gear: 24,
        weight: "25Kg",
        color: "white",
            drive: function(){
            console.log("Mobil berjalan")
        },
                brake: function(){
            console.log("Mobil Mengerem")
        },
    }
    bike.drive()
    bike.brake()
    console.log(bike.name)
        
function Car(name, model, color ,weight){
    this.name = name;
    this.model = model;
    this.color = color;
    this.weight = weight;
    this.start = function(){
        console.log(`${this.name} dinyalakan`)
    };
    this.drive = function(){
        console.log(`${this.name} sedang berjalan`)
    }
}

let car1 = new Car("Toyota", 2020, "blue", "1000kg")
let car2 = new Car("Honda", 2021, "red", "950")
car1.start()
car2.start()

class Sepeda {
    constructor(merk, warna, gear) {
        this.merk = merk;
        this.warna = warna;
        this.gear = gear;
    }

    start() {
        console.log("sepeda mulai dikayuh");
    }

    drive() {
        console.log("sepeda berjalan");
    }

    brake() {
        console.log("sepeda mengerem.");
    }

    stop() {
        console.log("sepeda berhenti.");
    }
}

// Membuat objek dari class Sepeda
const sepeda = new Sepeda("polygon", "merah", 21);

// Menampilkan properti dan memanggil metode
console.log(sepeda.merk);
console.log(sepeda.warna);
console.log("Jumlah gear: " + sepeda.gear);
sepeda.start();
sepeda.drive();
sepeda.brake();
sepeda.stop();
     class Student {
    constructor(nama, nim, jurusan, angkatan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.angkatan = angkatan;
    }

    introduce() {
        console.log(`Halo, nama saya ${this.nama}, NIM: ${this.nim}, jurusan ${this.jurusan}, angkatan ${this.angkatan}.`);
    }

    isSenior() {
        if (this.angkatan < 2025) {
            console.log(`${this.nama} adalah mahasiswa senior.`);
        } else {
            console.log(`${this.nama} adalah mahasiswa baru.`);
        }
    }

    displayInfo() {
        console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}, Angkatan: ${this.angkatan}`);
    }
}

// Membuat objek student
let student1 = new Student("Attar", "123456", "Teknik Informatika", 2020);
let student2 = new Student("Siraj", "654321", "Sistem Informasi", 2025);

// Memanggil method
student1.introduce();
student2.introduce();

student1.isSenior();
student2.isSenior();

student1.displayInfo();
student2.displayInfo();
 