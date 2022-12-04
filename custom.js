// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

     });

     /*
      * Manipulação de eventos
      */
     $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto esgotado');

      })

      //CallBack
      //$('.featured-item:nth(1)')
      .hide(2000, function(){
         //este é o callback
         console.log($(this).find('h4').text()+' esgotado');
      })
      .show(2000, function(){
         console.log($(this).find('h4').text()+' em estoque');
      })
      
      //Animações
      const duracao = 1000 //equivalente a 1s
      

      $('#form-submit').on('click', function(evento){

         evento.preventDefault();

         if($('#email').val() != ''){

            $('#email').animate({
               opacity: "toggle",
               top: "-50"
            }, 500, function(){
               console.log($(this).val());
            });
         }
         
      });

      //Ouvinte de evento .modal-nav-open
      $('.nav-modal-open').on('click', function(event){

         event.preventDefault();

         let elemento = $(this).attr('rel');

         $('.modal-body').html($('#'+elemento).html());

         $('.modal-header h5.modal-title').html($(this).text());

         let myModal = new bootstrap.Modal($('#modelId'));

         myModal.show();
      })

      $('body').on('submit', '.modal-body .form', function(evento){
         
         evento.preventDefault();

         const InputNome = $('#nome');
         const InputEmail = $('#email');

         validaCampo(InputNome);
         validaCampo(InputEmail);

         if(InputEmail.hasClass('invalid') || InputNome.hasClass('invalid')){
            console.log('verificar');
            return false;
         }else{
            $(this).submit();
         }

      
      });

      function validaCampo(elemento){

         if(elemento.val() == ''){

            console.log('Campo ' + elemento.attr('nome')+ ' não preenchido');

            elemento.parent().find('.text-muted').show();

            $(this).addClass('invalid');

            return false;
         }else{
            elemento.parent().find('text-muted').hide();
            elemento.removeClass('invalid');
         }
      }

      $('body').on('blur', '#nome', function(){

         validaCampo($(this));
      });

      $('body').on('blur', '#email', function(){

         validaCampo($(this));
      });

      $('body').on('focus', '#date', function(){
         $(this).datepicker();
      })

      $('body').on('click', '#date', function(){

         validaCampo($(this));

         $(this).mask('00/00/0000');

      });

      $('body').on('click', '#time', function(){
        
         $(this).mask('00:00:00');
      });

      $('body').on('click', '#cep', function(){
         validaCampo($(this));

         $(this).mask('00000-000');
      });

      $('body').on('click', '#phone', function(){
         $(this).mask('(00) 00000-0000');
      });

      $('body').on('click', '#cpf', function(){
         validaCampo($(this));
         $(this).mask('000.000.000-00');

      })


});
