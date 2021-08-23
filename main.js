var btn = document.getElementById('decode');

function change(arr) {
    for (var i = 0; i < arr.length; i++) {
        var temp_0 = arr[i][0];
        var temp_1 = arr[i][1];
        var temp_2 = arr[i][2];
        var temp_3 = arr[i][3];
        var temp_4 = arr[i][4];
        var temp_5 = arr[i][5];
        var temp_6 = arr[i][6];
        var temp_7 = arr[i][7];
        var temp_8 = arr[i][8];
        var temp_9 = arr[i][9];
        var temp_10 = arr[i][10];
        var temp_11 = arr[i][11];
        var temp_12 = arr[i][12];
        var temp_13 = arr[i][13];
        var temp_14 = arr[i][14];
        var temp_15 = arr[i][15];
        arr[i].splice(0, 1, temp_3);
        arr[i].splice(1, 1, temp_0);
        arr[i].splice(2, 1, temp_5);
        arr[i].splice(3, 1, temp_12);
        arr[i].splice(4, 1, temp_8);
        arr[i].splice(5, 1, temp_14);
        arr[i].splice(6, 1, temp_6);
        arr[i].splice(7, 1, temp_7);
        arr[i].splice(8, 1, temp_11);
        arr[i].splice(9, 1, temp_2);
        arr[i].splice(10, 1, temp_13);
        arr[i].splice(11, 1, temp_4);
        arr[i].splice(12, 1, temp_9);
        arr[i].splice(13, 1, temp_10);
        arr[i].splice(14, 1, temp_1);
        arr[i].splice(15, 1, temp_15);
    }
}

function replace(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/BM/g, "*");
        arr[i] = arr[i].replace(/AA/g, " ");
        arr[i] = arr[i].replace(/IK/g, "о");
        arr[i] = arr[i].replace(/EM/g, "е");
        arr[i] = arr[i].replace(/FH/g, "в");
        arr[i] = arr[i].replace(/IO/g, "и");
        arr[i] = arr[i].replace(/KK/g, "б");
        arr[i] = arr[i].replace(/HD/g, "м");
        arr[i] = arr[i].replace(/MB/g, "С");
        arr[i] = arr[i].replace(/DH/g, "Д");
        arr[i] = arr[i].replace(/FC/g, "Ш");
        arr[i] = arr[i].replace(/NF/g, "ь");
        arr[i] = arr[i].replace(/AF/g, "з");
        arr[i] = arr[i].replace(/OP/g, "2");
        arr[i] = arr[i].replace(/GA/g, "3");
        arr[i] = arr[i].replace(/PB/g, "М");
        arr[i] = arr[i].replace(/OE/g, "ш");
        arr[i] = arr[i].replace(/CL/g, "Л");
        arr[i] = arr[i].replace(/EI/g, "й");
        arr[i] = arr[i].replace(/EO/g, "В");
        arr[i] = arr[i].replace(/PH/g, "5");
        arr[i] = arr[i].replace(/AJ/g, "0");
        arr[i] = arr[i].replace(/BF/g, "6");
        arr[i] = arr[i].replace(/LA/g, "П");
        arr[i] = arr[i].replace(/LD/g, "Ф");
        arr[i] = arr[i].replace(/LM/g, "(");
        arr[i] = arr[i].replace(/EC/g, ")");
        arr[i] = arr[i].replace(/JE/g, ",");
        arr[i] = arr[i].replace(/GH/g, "7");
        arr[i] = arr[i].replace(/ED/g, "щ");
        arr[i] = arr[i].replace(/KC/g, "х");
        arr[i] = arr[i].replace(/CK/g, "ч");
        arr[i] = arr[i].replace(/PJ/g, "ю");
        arr[i] = arr[i].replace(/HH/g, "п");
        arr[i] = arr[i].replace(/ON/g, "к");
        arr[i] = arr[i].replace(/OO/g, "у");
        arr[i] = arr[i].replace(/HN/g, "Б");
        arr[i] = arr[i].replace(/MF/g, "ы");
        arr[i] = arr[i].replace(/HC/g, "р");
        arr[i] = arr[i].replace(/CM/g, "c");
        arr[i] = arr[i].replace(/AN/g, "а");
        arr[i] = arr[i].replace(/BE/g, "я");
        arr[i] = arr[i].replace(/CP/g, "ц");
        arr[i] = arr[i].replace(/GF/g, "т");
        arr[i] = arr[i].replace(/NO/g, "д");
        arr[i] = arr[i].replace(/PD/g, "л");
        arr[i] = arr[i].replace(/JA/g, "н");
        arr[i] = arr[i].replace(/DC/g, "1");
        arr[i] = arr[i].replace(/FO/g, "9");
        arr[i] = arr[i].replace(/KB/g, "4");
        arr[i] = arr[i].replace(/KJ/g, "К");
        arr[i] = arr[i].replace(/AL/g, "8");
        arr[i] = arr[i].replace(/DL/g, "-");
        arr[i] = arr[i].replace(/FP/g, "Т");
        arr[i] = arr[i].replace(/DD/g, "г");
        arr[i] = arr[i].replace(/GN/g, ".");
    }
}
btn.onclick = function () {
    var text = document.getElementById('text').value;
    const spanDecrypt = document.getElementById('spanDecrypt');
    var re = /(.{16}|.)/g;
    var res = text.match(re);
    var output = '';
    var arr = [];
    var array = [];
    var temp = '';
    for (var i = 0; i < res.length; i++) {
        output += (res[i] + '\n');
        arr = output.split('\n');
        array.push(arr[i].split(''));
    }
    change(array);
    console.log(array);
    var arr_out = [];
    for (var k = 0; k < array.length; k++) {
        arr_out.push(array[k].join(''));
    }

    arr_out = arr_out.join('');
    var re1 = /(.{2}|.)/g;
    var res1 = arr_out.match(re1);
    var out = [];
    for (var j = 0; j < res1.length; j++) {
        out.push(res1[j]);
    }
    replace(out);
    spanDecrypt.innerText = out.join('');
    console.log(out.join(''));
}