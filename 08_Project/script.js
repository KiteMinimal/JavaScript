const container = document.getElementById("container");

console.log(container)

window.addEventListener("keydown", (e) => {
  container.innerHTML = `
    <div id="table">
        <table>
            <tr>
                <th>key</th>
                <th>keyCode</th>
                <th>code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? "space": e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `;
});
