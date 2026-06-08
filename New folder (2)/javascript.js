const form = document.getElementById("studentForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    await fetch("/api/add", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    });

    loadRecords();
});

async function loadRecords() {

    const response = await fetch("/api/list");

    const records = await response.json();

    let html = "";

    records.forEach(record => {
        html += `<p>${record.name} - ${record.email}</p>`;
    });

    document.getElementById("records").innerHTML = html;
}

loadRecords();