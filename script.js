function findConsultancy(arr, m, n) {
    let temp = 0;
    if (arr[m][n] === "0") {
        temp = 1;
    }
    return temp;
}

function checkAvailability() {
    const dayInput = document.getElementById("day").value.toLowerCase();
    const timeInput = document.getElementById("time").value;

    const saiJyoti = [
        ["1", "1", "1", "1", "0", "1", "1", "0"],
        ["1", "1", "1", "0", "1", "1", "0", "0"],
        ["0", "1", "1", "0", "0", "1", "1", "1"],
        ["1", "1", "1", "0", "1", "0", "1", "1"],
        ["1", "1", "1", "1", "0", "0", "1", "0"]
    ];
    const kironMrinal = [
        ["1", "1", "1", "1", "0", "1", "0", "0"],
        ["0", "1", "1", "1", "0", "1", "1", "0"],
        ["1", "1", "1", "1", "0", "1", "0", "0"],
        ["1", "1", "1", "1", "0", "1", "1", "1"],
        ["1", "1", "0", "1", "0", "0", "1", "1"]
    ];
    const sukanyaManab = [
        ["0", "0", "1", "1", "0", "1", "1", "0"],
        ["1", "1", "1", "0", "1", "1", "1", "0"],
        ["1", "1", "1", "0", "1", "1", "1", "0"],
        ["1", "1", "1", "0", "1", "1", "0", "0"],
        ["0", "0", "1", "1", "0", "1", "1", "1"]
    ];

    let m = -1; // Row index (initialize to an invalid value)
    let n = -1; // Column index (initialize to an invalid value)

    switch (dayInput) {
        case "monday":
            n = 0;
            break;
        case "tuesday":
            n = 1;
            break;
        case "wednesday":
            n = 2;
            break;
        case "thursday":
            n = 3;
            break;
        case "friday":
            n = 4;
            break;
        default:
            document.getElementById("result").innerText = "Invalid day";
            return;
    }

    switch (timeInput) {
        case "8:00-8:55":
            m = 0;
            break;
        case "8:55-9:50":
            m = 1;
            break;
        case "9:50-10:45":
            m = 2;
            break;
        case "10:45-11:40":
            m = 3;
            break;
        case "11:40-12:35":
            m = 4;
            break;
        case "12:35-1:30":
            m = 5;
            break;
        case "1:30-2:25":
            m = 6;
            break;
        case "2:25-3:20":
            m = 7;
            break;
        default:
            document.getElementById("result").innerText = "Invalid timeslot";
            return;
    }

    const temp1 = findConsultancy(saiJyoti, n, m);
    const temp2 = findConsultancy(kironMrinal, n, m);
    const temp3 = findConsultancy(sukanyaManab, n, m);

    let resultMessage = "";

    if (temp1 === 1) {
        resultMessage += "Sai & Jyoti are free\n";
    }
    if (temp2 === 1) {
        resultMessage += "Kiron & Mrinal are free\n";
    }
    if (temp3 === 1) {
        resultMessage += "Sukanya & Manab are free";
    }

    document.getElementById("result").innerText = resultMessage || "Everyone is busy";
}
