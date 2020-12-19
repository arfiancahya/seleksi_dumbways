const students = [
    ['David', 20],
    ['Vinoth', 50],
    ['Divya', 65],
    ['Ishitha', 70],
    ['Thomas', 80],
    ['Eren', 80],
    ['Arnold', 30],
    ['Fian', 55],
    ['Elaine', 75]
];

var Avgmarks = 0;

for (let i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length);
}

console.log(students);
console.log("Nilai yang di submit: " + students.length);
console.log("Rata-rata Nilai: " + (Avgmarks) / students.length);

if (avg < 65) {
    console.log("Keterangan : Tidak Lulus");
} else if (avg >= 65) {
    console.log("Keterangan : Lulus");
}