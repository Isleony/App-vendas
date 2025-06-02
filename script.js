document.addEventListener("DOMContentLoaded", function () {
    const modal = new bootstrap.Modal(document.getElementById("formModal"));
    const form = document.getElementById("form");
    const tasks = document.getElementById("tasks");
    const msg = document.getElementById("msg");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const produto = document.getElementById("produto").value;
        const preco = document.getElementById("preco").value;
        const quantidade = document.getElementById("quantidade").value;
        const pagamento = document.getElementById("pagamento").value;
        const endereco = document.getElementById("endereco").value;
        const data = document.getElementById("dateInput").value;

        if (!produto || !preco || !quantidade || !pagamento || !endereco || !data) {
            msg.textContent = "Por favor, preencha todos os campos!";
            return;
        }

        const total = (preco * quantidade).toFixed(2);

        const newTask = document.createElement("div");
        newTask.innerHTML = `
            <h6>Produto: ${produto}</h6>
            <p>Preço Unitário: R$ ${preco}</p>
            <p>Quantidade: ${quantidade}</p>
            <p>Total: R$ ${total}</p>
            <p>Forma de Pagamento: ${pagamento}</p>
            <p>Endereço: ${endereco}</p>
            <p>Data: ${data}</p>
            <div class="options">
                <i class="fas fa-trash" style="color: red;"></i>
            </div>
        `;

       
        tasks.appendChild(newTask);

        const deleteBtn = newTask.querySelector(".fa-trash");
        deleteBtn.addEventListener("click", function () {
            tasks.removeChild(newTask);
        });

       
        form.reset();
        modal.hide();
    });
});
