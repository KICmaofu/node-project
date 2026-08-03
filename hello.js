console.log("hello world")
//乘法口诀
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        process.stdout.write(j + "*" + i + "=" + i * j + "\t");
    }
    console.log();
}
