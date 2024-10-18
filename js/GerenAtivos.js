const form = document.getElementById('asset-form');
const tableBody = document.getElementById('asset-table-body');

// Evento para cadastrar ativo
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const assetId = document.getElementById('asset-id').value;
    const assetName = document.getElementById('asset-name').value;
    const category = document.getElementById('category').value;
    const status = document.getElementById('status').value;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${assetId}</td>
        <td>${assetName}</td>
        <td>${category}</td>
        <td>${status}</td>
        <td><button class="delete-btn">Excluir</button></td>
    `;
    tableBody.appendChild(row);

    form.reset();
});

// Evento para excluir ativo
tableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.parentElement.remove();
    }
});
