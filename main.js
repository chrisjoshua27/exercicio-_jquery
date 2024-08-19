$(document).ready(function() {
    $('#tarefa-form').on('submit', function(e) {
        e.preventDefault();
        
        const tarefaTexto = $('#nova-tarefa').val().trim();
        if (tarefaTexto !== "") {
            const novaTarefa = $('<li></li>').text(tarefaTexto);
            $('#lista-tarefas').append(novaTarefa);
            $('#nova-tarefa').val('');
        }
    });
    
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
