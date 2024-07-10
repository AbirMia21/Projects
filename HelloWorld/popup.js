$(function(){
    $('#name').keyup(function(){
        $('#greet').text('Tor '+$('#name').val()+'r'+' heda');
    })
})