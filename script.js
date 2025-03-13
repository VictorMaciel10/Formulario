function gerarCPF() {
    let n = (Math.random() * 9e9).toFixed(0);
    return n.substring(0, 3) + "." + n.substring(3, 6) + "." + n.substring(6, 9) + "-" + n.substring(9, 11);
}

function gerarRG() {
    let n = (Math.random() * 9e7).toFixed(0);
    return n.substring(0, 2) + "." + n.substring(2, 5) + "." + n.substring(5, 8) + "-" + n.substring(8, 9);
}

function gerarTelefone() {
    return "(11) 9" + (Math.random() * 89999999 + 10000000).toFixed(0);
}

function gerarData() {
    let dia = Math.floor(Math.random() * 28) + 1;
    let mes = Math.floor(Math.random() * 12) + 1;
    let ano = Math.floor(Math.random() * (2025 - 1990 + 1)) + 1990;
    return `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
}

function gerarNome() {
    const nomes = ["Ana Silva", "Carlos Souza", "Fernanda Oliveira", "Pedro Santos", "Mariana Costa"];
    return nomes[Math.floor(Math.random() * nomes.length)];
}

function gerarEmail(nome) {
    return nome.toLowerCase().replace(" ", ".") + "@email.com";
}

function gerarFaculdade() {
    const faculdades = ["USP", "Unicamp", "UFSC", "UFMG", "PUC"];
    return faculdades[Math.floor(Math.random() * faculdades.length)];
}

function gerarCurso() {
    const cursos = ["Engenharia", "Medicina", "Direito", "Ciência da Computação", "Administração"];
    return cursos[Math.floor(Math.random() * cursos.length)];
}

function carregarCidades() {
    const cidadesPorEstado = {
        SP: ["São Paulo", "Campinas", "Santos"],
        RJ: ["Rio de Janeiro", "Niterói", "Campos"],
        MG: ["Belo Horizonte", "Uberlândia", "Juiz de Fora"],
        BA: ["Salvador", "Feira de Santana", "Vitória da Conquista"]
    };

    let estado = document.getElementById("estado").value;
    let cidadeSelect = document.getElementById("cidade");

    cidadeSelect.innerHTML = "<option value=''>Selecione uma cidade</option>";

    if (estado && cidadesPorEstado[estado]) {
        cidadesPorEstado[estado].forEach(cidade => {
            let option = document.createElement("option");
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
    }
}

function preencherAutomatico() {
    let nome = gerarNome();
    
    document.getElementById("nome").value = nome;
    document.getElementById("data_nascimento").value = gerarData();
    document.getElementById("email").value = gerarEmail(nome);
    document.getElementById("cpf").value = gerarCPF();
    document.getElementById("telefone").value = gerarTelefone();
    document.getElementById("faculdade").value = gerarFaculdade();
    document.getElementById("curso").value = gerarCurso();
    document.getElementById("data_inicio").value = gerarData();
    document.getElementById("data_termino").value = gerarData();
}
