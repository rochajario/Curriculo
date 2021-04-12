/*Renderizador de Boxes*/

//Construtor do Box
function addBox(titulo,parentId,childrenClass,id,conteudo){
    if(!document.getElementById(id)){
        //Obtém Container Pai
        containerPai = document.getElementById(parentId);
        //Cria Box que Recebe conteúdo e o insere em uma função que intitula o box
        header = adicionaCabecalhoAoBox(titulo,box = criaBox(id,childrenClass));
        //Conecta Elementos de coneteúdo ao Box
        box.append(header,conteudo);
        //Associa o Box ao Container Pai 
        containerPai.append(box);
    }
}

//Funções Complementares à Construção de Box
function criaBox(id,childrenClass){
    x = document.createElement('div');
    x.id = id;
    x.className = childrenClass;
    return x;
}
function adicionaCabecalhoAoBox(nome,box){
    box_titulo = document.createElement('div');
    box_titulo.className = 'box-titulo';
    titulo = document.createElement('div')
    conteudo = document.createElement('h3');
    conteudo.innerHTML = nome;
    titulo.append(conteudo);
    fechar = document.createElement('div');
    conteudo = document.createElement('a');
    conteudo.innerHTML="<i class='far fa-times-circle fechar'></i>";
    conteudo.href='#';
    conteudo.addEventListener('click',
        function(){
            document.getElementById(box.id).remove();
        }
    );
    fechar.append(conteudo);
    box_titulo.append(titulo,fechar);
    return box_titulo;
}

//Construtor de Tabelas
function addTabela(template){
    table = document.createElement('table');
    table.innerHTML = template;
    return table;
}

//Construtor de Formulários
function addFormulario(metodo, destino, template){
    form = document.createElement('form');
    form.method = metodo;
    form.action = destino;
    form.innerHTML = template;
    return form;
}