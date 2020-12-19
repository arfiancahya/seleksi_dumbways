const students = [
    ['David', 80],
    ['Vinoth', 77],
    ['Divya', 88],
    ['Ishitha', 95],
    ['Thomas', 60]
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