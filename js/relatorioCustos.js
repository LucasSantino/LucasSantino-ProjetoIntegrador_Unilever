const form = document.getElementById('cost-report-form');
const tableBody = document.getElementById('cost-report-table-body');

// Evento para gerar relatório
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    // Exemplo de dados de relatório
    const exampleData = [
        { department: 'Produção', totalCost: 'R$ 20.000', reportDate: '2024-10-15' },
        { department: 'Vendas', totalCost: 'R$ 15.000', reportDate: '2024-10-15' },
        { department: 'Marketing', totalCost: 'R$ 10.000', reportDate: '2024-10-15' }
    ];

    tableBody.innerHTML = ''; // Limpa a tabela

    // Insere dados de exemplo na tabela
    exampleData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.department}</td>
            <td>${data.totalCost}</td>
            <td>${data.reportDate}</td>
        `;
        tableBody.appendChild(row);
    });
});
