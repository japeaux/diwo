angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.home'
      2) Using $state.go programatically:
        $state.go('tabsController.home');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab4/page2
  */
  .state('onboardingcomercio', {
    url: '/onboardingcomercio',
    templateUrl: 'templates/onboardingcomercio.html',
    controller: 'onboardingcomercioCtrl'
  })
  .state('onboardingcomercionegocio1', {
    url: '/onboardingcomercionegocio1',
    templateUrl: 'templates/onboardingcomercionegocio1.html',
    controller: 'onboardingcomercionegocio1Ctrl'
  })
  .state('onboardingcomercionegocio2', {
    url: '/onboardingcomercionegocio2',
    templateUrl: 'templates/onboardingcomercionegocio2.html',
    controller: 'onboardingcomercionegocio2Ctrl'
  })
  .state('onboardingcomercionegocio3', {
    url: '/onboardingcomercionegocio3',
    templateUrl: 'templates/onboardingcomercionegocio3.html',
    controller: 'onboardingcomercionegocio3Ctrl'
  })
  .state('onboardingcomercionegocio4', {
    url: '/onboardingcomercionegocio4',
    templateUrl: 'templates/onboardingcomercionegocio4.html',
    controller: 'onboardingcomercionegocio4Ctrl'
  })
  .state('onboardingcomerciopessoa1', {
    url: '/onboardingcomerciopessoa1',
    templateUrl: 'templates/onboardingcomerciopessoa1.html',
    controller: 'onboardingcomerciopessoa1Ctrl'
  })
  .state('onboardingcomerciopessoa2', {
    url: '/onboardingcomerciopessoa2',
    templateUrl: 'templates/onboardingcomerciopessoa2.html',
    controller: 'onboardingcomerciopessoa2Ctrl'
  })
  .state('onboardingcomerciopessoa3', {
    url: '/onboardingcomerciopessoa3',
    templateUrl: 'templates/onboardingcomerciopessoa3.html',
    controller: 'onboardingcomerciopessoa3Ctrl'
  })
  .state('onboardingcomerciopessoa4', {
    url: '/onboardingcomerciopessoa4',
    templateUrl: 'templates/onboardingcomerciopessoa4.html',
    controller: 'onboardingcomerciopessoa4Ctrl'
  })

  
  .state('perfilComercio', {
    url: '/perfilComercio',

        templateUrl: 'templates/perfilComercio.html',
        controller: 'perfilComercioCtrl'
      
    
  })
  .state('ComercioStats', {
    url: '/ComercioStats',

        templateUrl: 'templates/ComercioStats.html',
        controller: 'ComercioStatsCtrl'
      
    
  })
   .state('ComercioEditaPerfil', {
    url: '/ComercioEditaPerfil',

        templateUrl: 'templates/ComercioEditaPerfil.html',
        controller: 'ComercioEditaPerfilCtrl'
      
    
  })
    .state('comerciomudasenha', {
    url: '/comerciomudasenha',

        templateUrl: 'templates/comerciomudasenha.html',
        controller: 'comerciomudasenhaCtrl'
      
    
  })
   .state('comercioeditainfocomercio', {
    url: '/comercioeditainfocomercio',

        templateUrl: 'templates/comercioeditainfocomercio.html',
        controller: 'comercioeditainfocomercioCtrl'
      
    
  })
   .state('comercioeditaqmehcomercio', {
    url: '/comercioeditaqmehcomercio',

        templateUrl: 'templates/comercioeditaqmehcomercio.html',
        controller: 'comercioeditaqmehcomercioCtrl'
      
    
  })
  .state('comercioeditaincluso', {
    url: '/comercioeditaincluso',

        templateUrl: 'templates/comercioeditaincluso.html',
        controller: 'comercioeditainclusoCtrl'
      
    
  })
  .state('comercioeditalocal', {
    url: '/comercioeditalocal',

        templateUrl: 'templates/comercioeditalocal.html',
        controller: 'comercioeditalocalCtrl'
      
    
  })
  .state('comercioeditanumeropessoas', {
    url: '/comercioeditanumeropessoas',

        templateUrl: 'templates/comercioeditanumeropessoas.html',
        controller: 'comercioeditanumeropessoasCtrl'
      
    
  })
  .state('comercioeditapreco', {
    url: '/comercioeditapreco',

        templateUrl: 'templates/comercioeditapreco.html',
        controller: 'comercioeditaprecoCtrl'
      
    
  })
  .state('comercioeditaduracao', {
    url: '/comercioeditaduracao',

        templateUrl: 'templates/comercioeditaduracao.html',
        controller: 'comercioeditaduracaoCtrl'
      
    
  })
  .state('comercioeditafoto', {
    url: '/comercioeditafoto',

        templateUrl: 'templates/comercioeditafoto.html',
        controller: 'comercioeditafotoCtrl'
      
    
  })
  .state('comercioeditatelefone', {
    url: '/comercioeditatelefone',

        templateUrl: 'templates/comercioeditatelefone.html',
        controller: 'comercioeditatelefoneCtrl'
      
    
  })
  .state('comercioeditausername', {
    url: '/comercioeditausername',

        templateUrl: 'templates/comercioeditausername.html',
        controller: 'comercioeditausernameCtrl'
      
    
  })
  .state('comercioedtaatendimento', {
    url: '/comercioedtaatendimento',

        templateUrl: 'templates/comercioedtaatendimento.html',
        controller: 'comercioedtaatendimentoCtrl'
      
    
  })
  .state('comercioeditadescontopacote', {
    url: '/comercioeditadescontopacote',

        templateUrl: 'templates/comercioeditadescontopacote.html',
        controller: 'comercioeditadescontopacoteCtrl'
      
    
  })
   .state('comercioeditainteresse', {
    url: '/comercioeditainteresse',

        templateUrl: 'templates/comercioeditainteresse.html',
        controller: 'comercioeditainteresseCtrl'
      
    
  })

   .state('comercioeditaoqtem', {
    url: '/comercioeditaoqtem',

        templateUrl: 'templates/comercioeditaoqtem.html',
        controller: 'comercioeditaoqtemCtrl'
      
    
  })
  .state('CriarEventoComercio', {
    url: '/CriarEventoComercio',

        templateUrl: 'templates/CriarEventoComercio.html',
        controller: 'CriarEventoComercioCtrl' 
  })
  .state('notificacoesComercio', {
    url: '/notificacoesComercio',

        templateUrl: 'templates/notificacoesComercio.html',
        controller: 'notificacoesComercioCtrl'
  
  })

  .state('campanhacria', {
    url: '/campanhacria',

        templateUrl: 'templates/campanhacria.html',
        controller: 'campanhacriaCtrl'
      
    
  })

  .state('campanhacriadia', {
    url: '/campanhacriadia',

        templateUrl: 'templates/campanhacriadia.html',
        controller: 'campanhacriadiaCtrl'
      
    
  })
  .state('campanhacriaduracao', {
    url: '/campanhacriaduracao',

        templateUrl: 'templates/campanhacriaduracao.html',
        controller: 'campanhacriaduracaoCtrl'
      
    
  })
  .state('campanhacrialimiteconfirmacao', {
    url: '/campanhacrialimiteconfirmacao',

        templateUrl: 'templates/campanhacrialimiteconfirmacao.html',
        controller: 'campanhacrialimiteconfirmacaoCtrl'
      
    
  })
  .state('campanhadesconto', {
    url: '/campanhadesconto',

        templateUrl: 'templates/campanhadesconto.html',
        controller: 'campanhadescontoCtrl'
      
    
  })
  .state('campanhacriapreco', {
    url: '/campanhacriapreco',

        templateUrl: 'templates/campanhacriapreco.html',
        controller: 'campanhacriaprecoCtrl'
      
    
  })
  .state('campanhacriadescricao', {
    url: '/campanhacriadescricao',

        templateUrl: 'templates/campanhacriadescricao.html',
        controller: 'campanhacriadescricaoCtrl'
      
    
  })
  .state('campanhacriafoto', {
    url: '/campanhacriafoto',

        templateUrl: 'templates/campanhacriafoto.html',
        controller: 'campanhacriafotoCtrl'
      
    
  })
  .state('campanhacrialocal', {
    url: '/campanhacrialocal',

        templateUrl: 'templates/campanhacrialocal.html',
        controller: 'campanhacrialocalCtrl'
      
    
  })
  .state('campanhacriatitulo', {
    url: '/campanhacriatitulo',

        templateUrl: 'templates/campanhacriatitulo.html',
        controller: 'campanhacriatituloCtrl'
      
    
  })

  .state('sobrecampanhas', {
    url: '/sobrecampanhas',

        templateUrl: 'templates/sobrecampanhas.html',
        controller: 'sobrecampanhasCtrl'
      
    
  })


  .state('tabsController.cartela', {
    url: '/cartela',
    views: {
      'tab5': {
        templateUrl: 'templates/cartela.html',
        controller: 'cartelaCtrl'
      }
    }
  })

   .state('tabsController.telacomercio', {
    url: '/telacomercio',
    views: {
      'tab5': {
        templateUrl: 'templates/TelaComercio.html',
        controller: 'telacomercioCtrl'
      }
    }
  })

  .state('tabsController.Eventocomercio', {
    url: '/Eventocomercio',
    views: {
      'tab5': {
        templateUrl: 'templates/Eventocomercio.html',
        controller: 'EventocomercioCtrl'
      }
    }
  })
  
  .state('tabsController.CriaEventoViaComercio', {
    url: '/CriaEventoViaComercio',
    views: {
      'tab5': {
        templateUrl: 'templates/CriaEventoViaComercio.html',
        controller: 'CriaEventoViaComercioCtrl'
      }
    }
  })
  

  .state('tabsController.bairroapresenta', {
    url: '/bairroapresenta',
    views: {
      'tab3': {
        templateUrl: 'templates/bairroapresenta.html',
        controller: 'bairroapresentaCtrl'
      }
    }
  })
  .state('tabsController.bairromanutencao', {
    url: '/bairromanutencao',
    views: {
      'tab3': {
        templateUrl: 'templates/bairromanutencao.html',
        controller: 'bairromanutencaoCtrl'
      }
    }
  })
  .state('tabsController.bairrocadastra', {
    url: '/bairrocadastra',
    views: {
      'tab3': {
        templateUrl: 'templates/bairrocadastra.html',
        controller: 'bairrocadastraCtrl'
      }
    }
  })
  .state('tabsController.bairroinfo', {
    url: '/bairroinfo',
    views: {
      'tab3': {
        templateUrl: 'templates/bairroinfo.html',
        controller: 'bairroinfoCtrl'
      }
    }
  })

  .state('tabsController.bairroconfirma', {
    url: '/bairroconfirma',
    views: {
      'tab3': {
        templateUrl: 'templates/bairroconfirma.html',
        controller: 'bairroconfirmaCtrl'
      }
    }
  })

  .state('tabsController.bairrosolicitado', {
    url: '/bairrosolicitado',
    views: {
      'tab3': {
        templateUrl: 'templates/bairrosolicitado.html',
        controller: 'bairrosolicitadoCtrl'
      }
    }
  })

  .state('tabsController.bairroendereconaoconfirmado', {
    url: '/bairroendereconaoconfirmado',
    views: {
      'tab3': {
        templateUrl: 'templates/bairroendereconaoconfirmado.html',
        controller: 'bairroendereconaoconfirmadoCtrl'
      }
    }
  })

  .state('tabsController.bairrosemgente', {
    url: '/bairrosemgente',
    views: {
      'tab3': {
        templateUrl: 'templates/bairrosemgente.html',
        controller: 'bairrosemgenteCtrl'
      }
    }
  })
  .state('tabsController.bairronbatecode', {
    url: '/bairronbatecode',
    views: {
      'tab3': {
        templateUrl: 'templates/bairronbatecode.html',
        controller: 'bairronbatecodeCtrl'
      }
    }
  })


  .state('tabsController.meubairro', {
    url: '/meubairro',
    views: {
      'tab3': {
        templateUrl: 'templates/meubairro.html',
        controller: 'meubairroCtrl'
      }
    }
  })

  .state('tabsController.meuspost', {
    url: '/meuspost',
    views: {
      'tab3': {
        templateUrl: 'templates/meuspost.html',
        controller: 'meuspostCtrl'
      }
    }
  })



    .state('tabsController.perfilPost', {
    url: '/perfilPost',
    views: {
      'tab3': {
        templateUrl: 'templates/perfilPost.html',
        controller: 'perfilPostCtrl'
      }
    }
  })

    .state('tabsController.badgesPerfilPost', {
    url: '/badgesPerfilPost',
    views: {
      'tab3': {
        templateUrl: 'templates/badgesPerfilPost.html',
        controller: 'badgesPerfilPostCtrl'
      }
    }
  })

   .state('tabsController.badgesexplicaPerfilPost', {
    url: '/badgesexplicaPerfilPost',
    views: {
      'tab3': {
        templateUrl: 'templates/badgesexplicaPerfilPost.html',
        controller: 'badgesexplicaPerfilPostCtrl'
      }
    }
  })




  .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })
  .state('tabsController.telacomerciohome', {
    url: '/telacomerciohome',
    views: {
      'tab1': {
        templateUrl: 'templates/TelaComercioHome.html',
        controller: 'telacomerciohomeCtrl'
      }
    }
  })
  .state('tabsController.escolheperiodo', {
    url: '/escolheperiodo',
    views: {
      'tab1': {
        templateUrl: 'templates/escolheperiodo.html',
        controller: 'escolheperiodoCtrl'
      }
    }
  })

  .state('chathome', {
    url: '/chathome',

    templateUrl: 'templates/chathome.html',
    controller: 'chathomeCtrl'
      
  })
   .state('filtro', {
    url: '/page8',

    templateUrl: 'templates/filtro.html',
    controller: 'filtroCtrl'
      
    
  })

   .state('tabsController.eventofiltroEncerrado', {
    url: '/EFE',
    views: {
      'tab1': {
    templateUrl: 'templates/eventofiltroEncerrado.html',
    controller: 'eventofiltroEncerradoCtrl'
      }
    }
  })
   .state('tabsController.comentariosEFE', {
    url: '/comentariosEFE',
    views: {
          'tab1': {
    templateUrl: 'templates/comentariosEFE.html',
    controller: 'comentariosEFECtrl'
          }
        }
  })



    .state('tabsController.criandoEventoPart1', {
    url: '/page20',
     views: {
      'tab4': {
    templateUrl: 'templates/criandoEventoPart1.html',
    controller: 'criandoEventoPart1Ctrl'
        }
      }
  })
  
  .state('tabsController.criandoEventoPart2', {
    url: '/page21',
     views: {
      'tab4': {
    templateUrl: 'templates/criandoEventoPart2.html',
    controller: 'criandoEventoPart2Ctrl'
  }}
  })

  .state('tabsController.criandoEventoPart3', {
    url: '/page22',
     views: {
      'tab4': {
    templateUrl: 'templates/criandoEventoPart3.html',
    controller: 'criandoEventoPart3Ctrl'
  }}
  })

  .state('tabsController.criandoEventoPart4', {
    url: '/page23',
     views: {
      'tab4': {
    templateUrl: 'templates/criandoEventoPart4.html',
    controller: 'criandoEventoPart4Ctrl'
  }}
  })

    .state('tabsController.repeteEventoPart1', {
    url: '/page39',
     views: {
      'tab1': {
    templateUrl: 'templates/repeteEventoPart1.html',
    controller: 'repeteEventoPart1Ctrl'
        }
      }
  })
  
  .state('tabsController.repeteEventoPart2', {
    url: '/page221',
     views: {
      'tab1': {
    templateUrl: 'templates/repeteEventoPart2.html',
    controller: 'repeteEventoPart2Ctrl'
  }}
  })

  .state('tabsController.repeteEventoPart3', {
    url: '/page222',
     views: {
      'tab1': {
    templateUrl: 'templates/repeteEventoPart3.html',
    controller: 'repeteEventoPart3Ctrl'
  }}
  })

  .state('tabsController.repeteEventoPart4', {
    url: '/page223',
     views: {
      'tab1': {
    templateUrl: 'templates/repeteEventoPart4.html',
    controller: 'repeteEventoPart4Ctrl'
  }}
  })





  .state('tabsController.eventosAbertos', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/eventosAbertos.html',
        controller: 'eventosAbertosCtrl'
      }
    }
  })

   .state('tabsController.EditaEventoPart1', {
    url: '/page339',
     views: {
      'tab1': {
    templateUrl: 'templates/EditaEventoPart1.html',
    controller: 'EditaEventoPart1Ctrl'
        }
      }
  })
  
  .state('tabsController.EditaEventoPart2', {
    url: '/page3221',
     views: {
      'tab2': {
    templateUrl: 'templates/EditaEventoPart2.html',
    controller: 'EditaEventoPart2Ctrl'
  }}
  })

  .state('tabsController.EditaEventoPart3', {
    url: '/page3222',
     views: {
      'tab2': {
    templateUrl: 'templates/EditaEventoPart3.html',
    controller: 'EditaEventoPart3Ctrl'
  }}
  })

  .state('tabsController.EditaEventoPart4', {
    url: '/page3223',
     views: {
      'tab1': {
    templateUrl: 'templates/EditaEventoPart4.html',
    controller: 'EditaEventoPart4Ctrl'
  }}
  })



  .state('tabsController.perfil', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })


  .state('tabsController.convitescriar', {
    url: '/convitescriar',
    views: {
      'tab1': {
        templateUrl: 'templates/convitescriar.html',
        controller: 'convitescriarCtrl'
      }
    }
  })

  .state('tabsController.perfilFollow', {
    url: '/perfilFollow',
    views: {
      'tab1': {
        templateUrl: 'templates/perfilFollow.html',
        controller: 'perfilFollowCtrl'
      }
    }
  })
  .state('tabsController.badgesPerfilFollow', {
    url: '/badgesPerfilFollow',
    views: {
      'tab1': {
        templateUrl: 'templates/badgesPerfilFollow.html',
        controller: 'badgesPerfilFollowCtrl'
      }
    }
  })
  .state('tabsController.badgesexplicaPerfilFollow', {
    url: '/badgesexplicaPerfilFollow',
    views: {
      'tab1': {
        templateUrl: 'templates/badgesexplicaPerfilFollow.html',
        controller: 'badgesexplicaPerfilFollowCtrl'
      }
    }
  })

  .state('tabsController.comentarios', {
    url: '/page30',
    views: {
      'tab1': {
        templateUrl: 'templates/comentarios.html',
        controller: 'comentariosCtrl'
      }
    }
  })

  .state('tabsController.indice', {
    url: '/indice',
    views: {
      'tab1': {
        templateUrl: 'templates/indice.html',
        controller: 'indiceCtrl'
      }
    }
  })

   .state('tabsController.comentariosdosoutros', {
    url: '/comentariosdosoutros',
    views: {
      'tab2': {
        templateUrl: 'templates/comentariosdosoutros.html',
        controller: 'comentariosdosoutrosCtrl'
      }
    }
  })

  .state('tabsController.ranking', {
    url: '/ranking',
    views: {
      'tab1': {
    templateUrl: 'templates/ranking.html',
    controller: 'rankingCtrl'
      }
    }
  })

  .state('tabsController.nivelestrela', {
    url: '/nivelestrela',
    views: {
      'tab1': {
    templateUrl: 'templates/nivelestrela.html',
    controller: 'nivelestrelaCtrl'
      }
    }
  })

  .state('tabsController.infoestrela', {
    url: '/infoestrela',
    views: {
      'tab1': {
        templateUrl: 'templates/infoestrela.html',
        controller: 'infoestrelaCtrl'
      }
    }
  })

   .state('tabsController.sigo', {
    url: '/page26',
     views: {
      'tab1': {
    templateUrl: 'templates/sigo.html',
    controller: 'sigoCtrl'
    }}
  })

  .state('tabsController.eventoFechado', {
    url: '/page13',
          views: {
          'tab1': {
        templateUrl: 'templates/eventoFechado.html',
        controller: 'eventoFechadoCtrl'
      }
    }
  })

  .state('tabsController.chatfechado', {
    url: '/chatfechado',
    views: {
      'tab1': {
    templateUrl: 'templates/chatfechado.html',
    controller: 'chatfechadoCtrl'
      }
    }
  })

   .state('tabsController.comentRiosEvento', {
    url: '/page29',
    views: {
          'tab1': {
    templateUrl: 'templates/comentRiosEvento.html',
    controller: 'comentRiosEventoCtrl'
          }
        }
  })

  .state('tabsController.avaliaODoUsuario', {
    url: '/Avaliausuario',
    views: {
          'tab1': {
    templateUrl: 'templates/avaliaODoUsuario.html',
    controller: 'avaliaODoUsuarioCtrl'
   }}
  })

  .state('tabsController.avaliaODoEvento', {
    url: '/page25',
    views: {
          'tab1': {
    templateUrl: 'templates/avaliaODoEvento.html',
    controller: 'avaliaODoEventoCtrl'
    }}
  })
  

   .state('tabsController.eventoCriado', {
    url: '/page12',
     views: {
          'tab1': {
        templateUrl: 'templates/eventoCriado.html',
        controller: 'eventoCriadoCtrl'
      }
    }
  })

   .state('tabsController.perfil_outro_evento_criados', {
    url: '/page40',
    views: {
      'tab1': {
        templateUrl: 'templates/perfil_outro_evento_criados.html',
        controller: 'perfil_outro_evento_criadosCtrl'
      }
    }
  })

    .state('tabsController.comentariosdosoutrosnoperfil', {
    url: '/comentariosdosoutrosnoperfil',
    views: {
      'tab1': {
        templateUrl: 'templates/comentariosdosoutrosnoperfil.html',
        controller: 'comentariosdosoutrosnoperfilCtrl'
      }
    }
  })

   .state('tabsController.evento_do_eventoCriados_do_outro', {
    url: '/page41',
    views: {
      'tab1': {
        templateUrl: 'templates/evento_do_eventoCriados_do_outro.html',
        controller: 'evento_do_eventoCriados_do_outroCtrl'
      }
    }
  })

  .state('tabsController.evento_do_eventoAbertos', {
    url: '/evento_do_eventoAbertos',
    views: {
      'tab2': {
        templateUrl: 'templates/evento_do_eventoAbertos.html',
        controller: 'evento_do_eventoAbertosCtrl'
      }
    }
  })

  .state('tabsController.marcandoquando', {
    url: '/marcandoquando',
    views: {
      'tab2': {
        templateUrl: 'templates/marcandoquando.html',
        controller: 'marcandoquandoCtrl'
      }
    }
  })

  .state('tabsController.criarmarcandoquando', {
    url: '/criarmarcandoquando',
    views: {
      'tab2': {
        templateUrl: 'templates/criarmarcandoquando.html',
        controller: 'criarmarcandoquandoCtrl'
      }
    }
  })

  .state('tabsController.criarmarcandoduracao', {
    url: '/criarmarcandoduracao',
    views: {
      'tab2': {
        templateUrl: 'templates/criarmarcandoduracao.html',
        controller: 'criarmarcandoduracaoCtrl'
      }
    }
  })

  .state('tabsController.criarmarcandolimiteconfirma', {
    url: '/criarmarcandolimiteconfirma',
    views: {
      'tab2': {
        templateUrl: 'templates/criarmarcandolimiteconfirma.html',
        controller: 'criarmarcandolimiteconfirmaCtrl'
      }
    }
  })

  .state('tabsController.criarmarcandolocal', {
    url: '/criarmarcandolocal',
    views: {
      'tab2': {
        templateUrl: 'templates/criarmarcandolocal.html',
        controller: 'criarmarcandolocalCtrl'
      }
    }
  })

  .state('tabsController.criarmarcandopreco', {
    url: '/criarmarcandopreco',
    views: {
      'tab2': {
        templateUrl: 'templates/criarmarcandopreco.html',
        controller: 'criarmarcandoprecoCtrl'
      }
    }
  })

   .state('tabsController.criarmarcandodia', {
    url: '/criarmarcandodia',
    views: {
      'tab4': {
        templateUrl: 'templates/criarmarcandodia.html',
        controller: 'criarmarcandodiaCtrl'
      }
    }
  })

  .state('tabsController.criarmarcandogenero', {
    url: '/criarmarcandogenero',
    views: {
      'tab2': {
        templateUrl: 'templates/criarmarcandogenero.html',
        controller: 'criarmarcandogeneroCtrl'
      }
    }
  })

  .state('tabsController.criarmarcandopminmax', {
    url: '/criarmarcandopminmax',
    views: {
      'tab2': {
        templateUrl: 'templates/criarmarcandopminmax.html',
        controller: 'criarmarcandopminmaxCtrl'
      }
    }
  })

  .state('tabsController.criarmarcandotag', {
    url: '/criarmarcandotag',
    views: {
      'tab2': {
        templateUrl: 'templates/criarmarcandotag.html',
        controller: 'criarmarcandotagCtrl'
      }
    }
  })

  .state('tabsController.criarmarcandotitulo', {
    url: '/criarmarcandotitulo',
    views: {
      'tab2': {
        templateUrl: 'templates/criarmarcandotitulo.html',
        controller: 'criarmarcandotituloCtrl'
      }
    }
  }) 

  .state('tabsController.criarmarcandodescricao', {
    url: '/criarmarcandodescricao',
    views: {
      'tab2': {
        templateUrl: 'templates/criarmarcandodescricao.html',
        controller: 'criarmarcandodescricaoCtrl'
      }
    }
  })  

  .state('tabsController.criarmarcandofoto', {
    url: '/criarmarcandofoto',
    views: {
      'tab2': {
        templateUrl: 'templates/criarmarcandofoto.html',
        controller: 'criarmarcandofotoCtrl'
      }
    }
  })











   .state('tabsController.criarquando', {
    url: '/criarquando',
    views: {
      'tab4': {
        templateUrl: 'templates/criarquando.html',
        controller: 'criarquandoCtrl'
      }
    }
  })

  .state('tabsController.criarduracao', {
    url: '/criarduracao',
    views: {
      'tab4': {
        templateUrl: 'templates/criarduracao.html',
        controller: 'criarduracaoCtrl'
      }
    }
  })

  .state('tabsController.criarlimiteconfirma', {
    url: '/criarlimiteconfirma',
    views: {
      'tab4': {
        templateUrl: 'templates/criarlimiteconfirma.html',
        controller: 'criarlimiteconfirmaCtrl'
      }
    }
  })

  .state('tabsController.criarlocal', {
    url: '/criarlocal',
    views: {
      'tab4': {
        templateUrl: 'templates/criarlocal.html',
        controller: 'criarlocalCtrl'
      }
    }
  })

  .state('tabsController.criarpreco', {
    url: '/criarpreco',
    views: {
      'tab4': {
        templateUrl: 'templates/criarpreco.html',
        controller: 'criarprecoCtrl'
      }
    }
  })

  
  .state('tabsController.criargenero', {
    url: '/criargenero',
    views: {
      'tab4': {
        templateUrl: 'templates/criargenero.html',
        controller: 'criargeneroCtrl'
      }
    }
  })

  .state('tabsController.criarpminmax', {
    url: '/criarpminmax',
    views: {
      'tab4': {
        templateUrl: 'templates/criarpminmax.html',
        controller: 'criarpminmaxCtrl'
      }
    }
  })

  .state('tabsController.criartag', {
    url: '/criartag',
    views: {
      'tab4': {
        templateUrl: 'templates/criartag.html',
        controller: 'criartagCtrl'
      }
    }
  })

  .state('tabsController.criartitulo', {
    url: '/criartitulo',
    views: {
      'tab4': {
        templateUrl: 'templates/criartitulo.html',
        controller: 'criartituloCtrl'
      }
    }
  }) 

  .state('tabsController.criardescricao', {
    url: '/criardescricao',
    views: {
      'tab4': {
        templateUrl: 'templates/criardescricao.html',
        controller: 'criardescricaoCtrl'
      }
    }
  })  

  .state('tabsController.criarfoto', {
    url: '/criarfoto',
    views: {
      'tab4': {
        templateUrl: 'templates/criarfoto.html',
        controller: 'criarfotoCtrl'
      }
    }
  })









  .state('tabsController.EditEv', {
    url: '/EditEv',
     views: {
      'tab2': {
    templateUrl: 'templates/EditEv.html',
    controller: 'EditEvCtrl'
  }}
  })

  .state('tabsController.EditaEEAPart1', {
    url: '/editaeeap1',
     views: {
      'tab1': {
    templateUrl: 'templates/EditaEEAPart1.html',
    controller: 'EditaEEAPart1Ctrl'
        }
      }
  })
  
  .state('tabsController.EditaEEAPart2', {
    url: '/editaeeap2',
     views: {
      'tab1': {
    templateUrl: 'templates/EditaEEAPart2.html',
    controller: 'EditaEEAPart2Ctrl'
  }}
  })

  .state('tabsController.EditaEEAPart3', {
    url: '/editaeeap3',
     views: {
      'tab1': {
    templateUrl: 'templates/EditaEEAPart3.html',
    controller: 'EditaEEAPart3Ctrl'
  }}
  })

  .state('tabsController.EditaEEAPart4', {
    url: '/editaeeap4',
     views: {
      'tab2': {
    templateUrl: 'templates/EditaEEAPart4.html',
    controller: 'EditaEEAPart4Ctrl'
  }}
  })


  .state('tabsController.chat', {
    url: '/chat',
    views: {
      'tab2': {
    templateUrl: 'templates/chat.html',
    controller: 'chatCtrl'
      }
    }
  })


  .state('tabsController.ver_onde_mapa_Eventoabertos', {
    url: '/ver_onde_mapa_Eventoabertos',
     views: {
      'tab2': {
    templateUrl: 'templates/ver_onde_mapa_Eventoabertos.html',
    controller: 'ver_onde_mapa_EventoabertosCtrl'
  }}
  })

  .state('tabsController.ver_onde_mapa_Comercio', {
    url: '/ver_onde_mapa_Comercio',
     views: {
      'tab5': {
    templateUrl: 'templates/ver_onde_mapa_Comercio.html',
    controller: 'ver_onde_mapa_ComercioCtrl'
  }}
  })

    .state('tabsController.evento_do_eventoAbertos_do_outro', {
    url: '/evento_do_eventoAbertos_do_outro',
    views: {
      'tab2': {
        templateUrl: 'templates/evento_do_eventoAbertos_do_outro.html',
        controller: 'evento_do_eventoAbertos_do_outroCtrl'
      }
    }
  })

   .state('tabsController.perfil_outro_eventoabertos', {
    url: '/page19',
    views: {
      'tab2': {
        templateUrl: 'templates/perfil_outro_eventoabertos.html',
        controller: 'perfil_outro_eventoabertosCtrl'
      }
    }
  })

   .state('tabsController.badgesperfil_outro_eventoabertos', {
    url: '/badgesperfil_outro_eventoabertos',
    views: {
      'tab2': {
        templateUrl: 'templates/badgesperfil_outro_eventoabertos.html',
        controller: 'badgesperfil_outro_eventoabertosCtrl'
      }
    }
  })
   .state('tabsController.badgesexplicaperfil_outro_eventoabertos', {
    url: '/badgesexplicaperfil_outro_eventoabertos',
    views: {
      'tab2': {
        templateUrl: 'templates/badgesexplicaperfil_outro_eventoabertos.html',
        controller: 'badgesexplicaperfil_outro_eventoabertosCtrl'
      }
    }
  })

   .state('tabsController.eventoConvidado', {
    params: {idevento: 0},
    url: '/eventoConvidado/:idevento',
    views: {
      'tab1': {
        templateUrl: 'templates/eventoConvidado.html',
        controller: 'eventoConvidadoCtrl'
      }
    }
  })

   .state('tabsController.eventoAberto', {
    params: {idevento: 0},
    url: '/home/:idevento',
    views: {
      'tab1': {
        templateUrl: 'templates/eventoAberto.html',
        controller: 'eventoAbertoCtrl'
      }
    }
  })

   .state('tabsController.eventoPinzado', {
    url: '/eventoPinzado',
    views: {
      'tab2': {
        templateUrl: 'templates/eventoPinzado.html',
        controller: 'eventoPinzadoCtrl'
      }
    }
  })

   .state('tabsController.ver_onde_mapa', {
    url: '/ver_onde_mapa',
     views: {
      'tab1': {
    templateUrl: 'templates/ver_onde_mapa.html',
    controller: 'ver_onde_mapaCtrl'
  }}
  })

   .state('tabsController.badgesPerfilOutro', {
    url: '/badgesPerfilOutro',
    views: {
      'tab1': {
        templateUrl: 'templates/badgesPerfilOutro.html',
        controller: 'badgesPerfilOutroCtrl'
      }
    }
  })
  .state('tabsController.badgesexplicaPerfilOutro', {
    url: '/badgesexplicaPerfilOutro',
    views: {
      'tab1': {
        templateUrl: 'templates/badgesexplicaPerfilOutro.html',
        controller: 'badgesexplicaPerfilOutroCtrl'
      }
    }
  })
   .state('tabsController.perfilOutro', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/perfilOutro.html',
        controller: 'perfilOutroCtrl'
      }
    }
  })

   .state('tabsController.comentariosperfiloutros', {
    url: '/comentariosperfiloutros',
    views: {
      'tab1': {
        templateUrl: 'templates/comentariosperfiloutros.html',
        controller: 'comentariosperfiloutrosCtrl'
      }
    }
  })
  .state('tabsController.badges', {
    url: '/badges',
    views: {
      'tab1': {
        templateUrl: 'templates/badges.html',
        controller: 'badgesCtrl'
      }
    }
  })

   .state('tabsController.badgesexplica', {
    url: '/badgesexplica',
    views: {
      'tab1': {
        templateUrl: 'templates/badgesexplica.html',
        controller: 'badgesexplicaCtrl'
      }
    }
  })
   

      .state('tabsController.editarPerfil', {
    url: '/editarperfil',
    views: {
      'tab1': {
        templateUrl: 'templates/editarPerfil.html',
        controller: 'editarPerfilCtrl'
      }
    }
  })

        .state('tabsController.editaperfilbairrocadastra', {
    url: '/editaperfilbairrocadastra',
    views: {
      'tab1': {
        templateUrl: 'templates/editaperfilbairrocadastra.html',
        controller: 'editaperfilbairrocadastraCtrl'
      }
    }
  })

           .state('tabsController.notificaEs', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/notificaEs.html',
        controller: 'notificaEsCtrl'
      }
    }
  })

  // .state('geral', {


  //   url: '/geral',

  //       templateUrl: 'templates/geral.html',
  //       controller: 'geralCtrl'
    
    
  // })
  .state('tabsController.geral', {
    url: '/geral',
    views: {
      'tab1': {
        templateUrl: 'templates/geral.html',
        controller: 'geralCtrl'
      }
    }
  })

  .state('tabsController.deletaconta', {
    url: '/deletaconta',
    views: {
      'tab1': {
        templateUrl: 'templates/deletaconta.html',
        controller: 'deletacontaCtrl'
      }
    }
  })


  .state('idadegenero', {


    url: '/idadegenero',

        templateUrl: 'templates/idadegenero.html',
        controller: 'idadegeneroCtrl'
    
    
  })

  .state('areacobertura', {


    url: '/areacobertura',

        templateUrl: 'templates/areacobertura.html',
        controller: 'areacoberturaCtrl'
    
    
  })

  .state('tabsController.sobre', {
    url: '/sobre',
    views: {
      'tab1': {
        templateUrl: 'templates/sobre.html',
        controller: 'sobreCtrl'
      }
    }
  })

  .state('qmFoiMesmo', {
    url: '/page27',
    templateUrl: 'templates/qmFoiMesmo.html',
    controller: 'qmFoiMesmoCtrl'
  })
  

        .state('perfilAceitar', {
    url: '/page17',
    templateUrl: 'templates/perfilAceitar.html',
    controller: 'perfilAceitarCtrl'
  })

             .state('perfilAceitarGeral', {
    url: '/perfilAceitarGeral',
    templateUrl: 'templates/perfilAceitarGeral.html',
    controller: 'perfilAceitarGeralCtrl'
  })
             
.state('comentariosperfilaceitargeral', {
    url: '/comentariosperfilaceitargeral',
    templateUrl: 'templates/comentariosperfilaceitargeral.html',
    controller: 'comentariosperfilaceitargeralCtrl'
   
  })
  .state('logando', {
    url: '/logando',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('esquecisenha', {
    url: '/esquecisenha',
    templateUrl: 'templates/esquecisenha.html',
    controller: 'esquecisenhaCtrl'
  })

  .state('nomeuser', {
    url: '/nomeuser',
    templateUrl: 'templates/username.html',
    controller: 'nomeuserCtrl'
  })
  

  .state('comentariosperfilaceitar', {
    url: '/comentariosperfilaceitar',

        templateUrl: 'templates/comentariosperfilaceitar.html',
        controller: 'comentariosperfilaceitarCtrl'
   
  })


  .state('novahomesemlogin', {
    url: '/novahomesemlogin',
    templateUrl: 'templates/novahomesemlogin.html',
    controller: 'novahomesemloginCtrl'
  })

  .state('versao', {
    url: '/versao',
    templateUrl: 'templates/versao.html',
    controller: 'versaoCtrl'
  })


  .state('tabsController.post', {
    url: '/post',
    views: {
      'tab3': {
        templateUrl: 'templates/post.html',
        controller: 'postCtrl'
      }
    }
  })

  .state('tabsController.feedpost', {
    url: '/feedpost',
    views: {
      'tab3': {
        templateUrl: 'templates/feedpost.html',
        controller: 'feedpostCtrl'
      }
    }
  })
  .state('novacontaconfirma', {
    url: '/novacontaconfirma',
    templateUrl: 'templates/novacontaconfirma.html',
    controller: 'novacontaconfirmaCtrl'
  })
  .state('novacontaemail', {
    url: '/novacontaemail',
    templateUrl: 'templates/novacontaemail.html',
    controller: 'novacontaemailCtrl'
  })
  .state('novacontafoto', {
    url: '/novacontafoto',
    templateUrl: 'templates/novacontafoto.html',
    controller: 'novacontafotoCtrl'
  })
  .state('novacontagenero', {
    url: '/novacontagenero',
    templateUrl: 'templates/novacontagenero.html',
    controller: 'novacontageneroCtrl'
  })
  .state('novacontaidade', {
    url: '/novacontaidade',
    templateUrl: 'templates/novacontaidade.html',
    controller: 'novacontaidadeCtrl'
  })

  .state('novacontainteresse', {
    url: '/novacontainteresse',
    templateUrl: 'templates/novacontainteresse.html',
    controller: 'novacontainteresseCtrl'
  })
  .state('novacontainteresseFB', {
    url: '/novacontainteresseFB',
    templateUrl: 'templates/novacontainteresseFB.html',
    controller: 'novacontainteresseFBCtrl'
  })

   .state('tabsController.novacontainteresseEdita', {
    url: '/novacontainteresseEdita',
    views: {
      'tab1': {
        templateUrl: 'templates/novacontainteresseEdita.html',
        controller: 'novacontainteresseEditaCtrl'
      }
    }
  })

  .state('novacontasenha', {
    url: '/novacontasenha',
    templateUrl: 'templates/novacontasenha.html',
    controller: 'novacontasenhaCtrl'
  })
  .state('novacontausername', {
    url: '/novacontausername',
    templateUrl: 'templates/novacontausername.html',
    controller: 'novacontausernameCtrl'
  })

   .state('fuiconvidado', {
    url: '/fuiconvidado',
    templateUrl: 'templates/fuiconvidado.html',
    controller: 'fuiconvidadoCtrl'
  })


  //  .state('contacomercioconfirma', {
  //   url: '/contacomercioconfirma',
  //   templateUrl: 'templates/contacomercioconfirma.html',
  //   controller: 'contacomercioconfirmaCtrl'
  // })
  .state('contacomercioemail', {
    url: '/contacomercioemail',
    templateUrl: 'templates/contacomercioemail.html',
    controller: 'contacomercioemailCtrl'
  })
  .state('contacomerciofoto', {
    url: '/contacomerciofoto',
    templateUrl: 'templates/contacomerciofoto.html',
    controller: 'contacomerciofotoCtrl'
  })

  .state('contacomercioatendimento', {
    url: '/contacomercioatendimento',
    templateUrl: 'templates/contacomercioatendimento.html',
    controller: 'contacomercioatendimentoCtrl'
  })

  .state('contacomercioduracao', {
    url: '/contacomercioduracao',
    templateUrl: 'templates/contacomercioduracao.html',
    controller: 'contacomercioduracaoCtrl'
  })
  .state('contacomerciolocal', {
    url: '/contacomerciolocal',
    templateUrl: 'templates/contacomerciolocal.html',
    controller: 'contacomerciolocalCtrl'
  })
  .state('contacomerciodescricao', {
    url: '/contacomerciodescricao',
    templateUrl: 'templates/contacomerciodescricao.html',
    controller: 'contacomerciodescricaoCtrl'
  })
  .state('contacomercioqmehcomercio', {
    url: '/contacomercioqmehcomercio',
    templateUrl: 'templates/contacomercioqmehcomercio.html',
    controller: 'contacomercioqmehcomercioCtrl'
  })

  .state('contacomerciooqtem', {
    url: '/contacomerciooqtem',
    templateUrl: 'templates/contacomerciooqtem.html',
    controller: 'contacomerciooqtemCtrl'
  })
  

  .state('contacomerciointeresse', {
    url: '/contacomerciointeresse',
    templateUrl: 'templates/contacomerciointeresse.html',
    controller: 'contacomerciointeresseCtrl'
  })
 
  .state('contacomercionumeropessoas', {
    url: '/contacomercionumeropessoas',
    templateUrl: 'templates/contacomercionumeropessoas.html',
    controller: 'contacomercionumeropessoasCtrl'
  })

  .state('contacomerciopreco', {
    url: '/contacomerciopreco',
    templateUrl: 'templates/contacomerciopreco.html',
    controller: 'contacomercioprecoCtrl'
  })

  .state('contacomerciodescontopacote', {
    url: '/contacomerciodescontopacote',
    templateUrl: 'templates/contacomerciodescontopacote.html',
    controller: 'contacomerciodescontopacoteCtrl'
  })

  .state('contacomerciotelefone', {
    url: '/contacomerciotelefone',
    templateUrl: 'templates/contacomerciotelefone.html',
    controller: 'contacomerciotelefoneCtrl'
  })
  .state('contacomerciousername', {
    url: '/contacomerciousername',
    templateUrl: 'templates/contacomerciousername.html',
    controller: 'contacomerciousernameCtrl'
  })

  .state('tabsController.PagSeguroMetodo', {
    url: '/PagSeguroMetodo',
    views: {
      'tab1': {
        templateUrl: 'templates/PagSeguroMetodo.html',
        controller: 'PagSeguroMetodoCtrl'
      }
    }
  })

  .state('tabsController.PagSeguroNomeConta', {
    url: '/PagSeguroNomeConta',
    views: {
      'tab1': {
        templateUrl: 'templates/PagSeguroNomeConta.html',
        controller: 'PagSeguroNomeContaCtrl'
      }
    }
  })

  .state('tabsController.PagSeguroEndereco', {
    url: '/PagSeguroEndereco',
    views: {
      'tab1': {
        templateUrl: 'templates/PagSeguroEndereco.html',
        controller: 'PagSeguroEnderecoCtrl'
      }
    }
  })

   .state('tabsController.PagSeguroConfirmaCompra', {
    url: '/PagSeguroConfirmaCompra',
    views: {
      'tab1': {
        templateUrl: 'templates/PagSeguroConfirmaCompra.html',
        controller: 'PagSeguroConfirmaCompraCtrl'
      }
    }
  })

  .state('tabsController.PagSeguroDadosBoleto', {
    url: '/PagSeguroDadosBoleto',
    views: {
      'tab1': {
        templateUrl: 'templates/PagSeguroDadosBoleto.html',
        controller: 'PagSeguroDadosBoletoCtrl'
      }
    }
  })

  .state('tabsController.PagarmeDadosCC', {
    url: '/PagarmeDadosCC',
    views: {
      'tab1': {
        templateUrl: 'templates/PagarmeDadosCC.html',
        controller: 'PagarmeDadosCCCtrl'
      }
    }
  })

  .state('tabsControllersemlogin', {
    url: '/tabsControllersemlogin',
    templateUrl: 'templates/tabsControllersemlogin.html',
    abstract:true
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })
  .state('new', {
    url: '/new',

    templateUrl: 'templates/new.html',
    controller: 'newCtrl'
      
    
  })




//$urlRouterProvider.otherwise('/new')
$urlRouterProvider.otherwise('/versao')


});