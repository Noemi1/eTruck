// Paginação da tabela de overview em dashboard
let tableItemsOverview = $('.overview__table tbody tr'); // Lista de linhas 
let tableItemsLenghtOverview = $('.overview__table tbody tr').length; // Quantidade de linhas 
let itemsPerPageOverview = 3; // Quantidade de por paginacao 

tableItemsOverview.slice(itemsPerPageOverview).hide(); // Esconde todas as linhas exceto a qtd de itemsPerPage primeiras

// Se houver mais de 3 linhas
if (tableItemsLenghtOverview > 3) {
    $('#paginator-overview').pagination({
        items: tableItemsLenghtOverview,
        itemsOnPage: itemsPerPageOverview,

        pageSize: itemsPerPageOverview,

        showPageNumbers: false,
        showNavigator: true,

        prevText: `<i class="fas fa-chevron-left paginator-button paginator-button-prev paginator-overview-prev"></i>`,
        nextText: `<i class="fas fa-chevron-right paginator-button paginator-button-next paginator-overview-next"></i>`,

        callback: function(data, pagination) {
            // template method of yourself
            var html = template(data);
            dataContainer.html(html);

        },
        onPageClick: function(pageNumber) {
            var showFrom = itemsPerPageOverview * (pageNumber - 1);
            var showTo = showFrom + itemsPerPageOverview;
            tableItemsOverview.hide().slice(showFrom, showTo).show();
        }
    });

}
// Fim Paginação da tabela de overview em dashboard

// Paginação da tabela de detalhes do evento em dashboard

let tableItemsEventos = $('.eventos__table tbody tr'); // Lista de linhas 
let tableItemsLenghtEventos = $('.eventos__table tbody tr').length; // Quantidade de linhas 
let itemsPerPageEventos = 5; // Quantidade de por paginacao 

tableItemsEventos.slice(itemsPerPageEventos).hide(); // Esconde todas as linhas exceto a qtd de itemsPerPage primeiras

// Se houver mais de 3 linhas
if (tableItemsLenghtEventos > 3) {
    $('#paginator-eventos').pagination({
        items: tableItemsLenghtEventos,
        itemsOnPage: itemsPerPageEventos,

        pageSize: itemsPerPageEventos,

        showPageNumbers: false,
        showNavigator: true,

        prevText: `<i class="fas fa-chevron-left paginator-button paginator-button-prev paginator-eventos-prev"></i>`,
        nextText: `<i class="fas fa-chevron-right paginator-button paginator-button-next paginator-eventos-next"></i>`,

        callback: function(data, pagination) {
            // template method of yourself
            var html = template(data);
            dataContainer.html(html);

        },
        onPageClick: function(pageNumber) {
            var showFrom = itemsPerPageEventos * (pageNumber - 1);
            var showTo = showFrom + itemsPerPageEventos;
            tableItemsEventos.hide().slice(showFrom, showTo).show();
        }
    });

}


// Fim Paginação da tabela de detalhes do evento em dashboard

// Paginacao de entregas realizadas em dashboard

let tableItemsEntregas = $('.entregas__table tbody tr'); // Lista de linhas 
let tableItemsLenghtEntregas = $('.entregas__table tbody tr').length; // Quantidade de linhas 
let itemsPerPageEntregas = 5; // Quantidade de por paginacao 

tableItemsEntregas.slice(itemsPerPageEntregas).hide(); // Esconde todas as linhas exceto a qtd de itemsPerPage primeiras

// Se houver mais de 3 linhas
if (tableItemsLenghtEntregas > 3) {
    $('#paginator-entregas').pagination({
        items: tableItemsLenghtEntregas,
        itemsOnPage: itemsPerPageEntregas,

        pageSize: itemsPerPageEntregas,

        showPageNumbers: false,
        showNavigator: true,

        prevText: `<i class="fas fa-chevron-left paginator-button paginator-button-prev paginator-entregas-prev"></i>`,

        nextText: `<i class="fas fa-chevron-right paginator-button paginator-button-next paginator-entregas-next"></i>`,

        callback: function(data, pagination) {
            // template method of yourself
            var html = template(data);
            dataContainer.html(html);

        },
        onPageClick: function(pageNumber) {
            var showFrom = itemsPerPageEntregas * (pageNumber - 1);
            var showTo = showFrom + itemsPerPageEntregas;
            tableItemsEntregas.hide().slice(showFrom, showTo).show();
        }
    });

}

// Fim Paginacao de entregas realizadas em dashboard

// Paginacao de manutencao em dashboard
tableItems = $('.manutencao__table tbody tr'); // Lista de linhas 
tableItemsLenght = $('.manutencao__table tbody tr').length; // Quantidade de linhas 
itemsPerPage = 5; // Quantidade de por paginacao 

tableItems.slice(itemsPerPage).hide(); // Esconde todas as linhas exceto a qtd de itemsPerPage primeiras

// Se houver mais de 3 linhas
if (tableItemsLenght > 3) {
    $('#paginator-manutencao').pagination({
        items: tableItemsLenght,
        itemsOnPage: itemsPerPage,

        pageSize: itemsPerPage,

        showPageNumbers: false,
        showNavigator: true,

        prevText: `<i class="fas fa-chevron-left paginator-button paginator-button-prev paginator-manutencao-prev"></i>`,

        nextText: `<i class="fas fa-chevron-right paginator-button paginator-button-next paginator-manutencao-next"></i>`,


        callback: function(data, pagination) {
            // template method of yourself
            var html = template(data);
            dataContainer.html(html);

        },
        onPageClick: function(pageNumber) {
            var showFrom = itemsPerPage * (pageNumber - 1);
            var showTo = showFrom + itemsPerPage;
            tableItems.hide().slice(showFrom, showTo).show();
        }
    });

}

// Fim Paginacao de manutencao em dashboard