<div id="events"></div>

<script>
const monthNames = {
  "01": "STYCZEŃ",
  "02": "LUTY",
  "03": "MARZEC",
  "04": "KWIECIEŃ",
  "05": "MAJ",
  "06": "CZERWIEC",
  "07": "LIPIEC",
  "08": "SIERPIEŃ",
  "09": "WRZESIEŃ",
  "10": "PAŹDZIERNIK",
  "11": "LISTOPAD",
  "12": "GRUDZIEŃ"
};

fetch("https://wczucior-jpg.github.io/wydarzenia/events.json")
  .then(r => r.json())
  .then(data => {

    // sortowanie po dacie (żeby miesiące się nie mieszały)
    data.sort((a, b) => a.date.localeCompare(b.date));

    let html = "";
    let lastMonth = "";

    data.forEach(e => {

      const month = e.date.split(".")[1];

      // nagłówek miesiąca
      if (month !== lastMonth) {
        html += `<div style="margin:0;">▽ ${monthNames[month]} ▷ ▷ ▷ ▷</div>`;
        lastMonth = month;
      }

      // event linia (FORMAT JAK NA PLAKATACH)
      html += `
        <div style="margin:0;">
          ${e.date} – ${e.artists} – ${e.venue} – ${e.city}
        </div>
      `;
    });

    document.getElementById("events").innerHTML = html;
  });
</script>
