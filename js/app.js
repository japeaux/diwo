// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services', 'ngCordova', 'ion-datetime-picker','chart.js','ionic-ratings', 'ionic.contrib.ui.tinderCards' ,'ionic.native'])

.config(function($ionicConfigProvider, $sceDelegateProvider){

  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.platform.android.tabs.position("bottom");
   $ionicConfigProvider.navBar.alignTitle('center');
 })

.run(function($ionicPlatform, $cordovaPushV5, $rootScope, $http,  $cordovaDeeplinks, $timeout, $state) {
  $ionicPlatform.ready(function() {

        $cordovaDeeplinks.route({
            '/eventoConvidado/:idevento': {
                target: 'tabsController.eventoConvidado',
                parent: 'tabsController.home'
            },
            '/home': {
                target: 'tabsController.home',
                parent: 'tabsController.home'
            }
        }).subscribe(function(match) {
            //ALERT('matching' , match.$route.parent ,  match.$args, match.$args.idevento);
            console.dir(match);
            $timeout(function() {
                $state.go(match.$route.parent, match.$args);
                 //ALERT('2matching' , match.$route.parent ,  match.$args, match.$args.idevento);
                if (match.$route.target != match.$route.parent) {
                    $timeout(function() {
                       //ALERT('3333' , match.$route.parent ,  match.$args, match.$args.idevento);
                        window.localStorage.setItem( 'convite2', match.$args.idevento);
                        $state.go(match.$route.target, {idevento: match.$args.idevento});
                    }, 800);
                }
            }, 100); // Timeouts can be tweaked to customize the feel of the deeplink
        }, function(nomatch) {
            //console.warn('No match', nomatch);
            //console.dir(nomatch);
            // console.dir(nomatch);
            // alert(nomatch.$link.url)
            // alert(nomatch.$link.host)
            // alert(nomatch.$link.path)
            // alert(nomatch.$link.path.substring(1))
            // alert(nomatch.$link.path.idevento)
           
            //alert(nomatch.$link.queryString)
            var codigo
            var res2 = nomatch.$link.queryString.split("=") ;
            if(res2.length>1){
              if(res2[0]=='idevento'){
                var idevento = res2[1];
              }
              if(res2[0]=='codigo'){
                for(var w = 0; w < res2.length; w++){
                  if(w==1){
                    codigo = res2[1];
                  }
                  if(w>1){
                    codigo = codigo+'=';
                  }
                }
                
              }
            }
            ////alert(idevento)
            //alert(codigo)
            if(nomatch.$link.host == "eventoConvidado" ){
              //window.localStorage.setItem( 'convite', JSON.stringify({idevento: nomatch.$link.path.substring(1)}) );
              window.localStorage.setItem( 'convite2', nomatch.$link.path.substring(1) );
              $state.go('novahomesemlogin');
              //$state.go('tabsController.eventoConvidado', {idevento: nomatch.$link.path.substring(1)});
            }
            if(nomatch.$link.host == "validarQRCODE" ){
              //window.localStorage.setItem( 'convite', JSON.stringify({idevento: nomatch.$link.path.substring(1)}) );
              window.localStorage.setItem( 'validarQRCODE', nomatch.$link.path.substring(1) );
              $state.go('novahomesemlogin');
              //$state.go('tabsController.eventoConvidado', {idevento: nomatch.$link.path.substring(1)});
            }
            if(idevento){
              //window.localStorage.setItem( 'convite', JSON.stringify({idevento: nomatch.$link.path.substring(1)}) );
              window.localStorage.setItem( 'convite2', idevento );
              $state.go('novahomesemlogin');
              //$state.go('tabsController.eventoConvidado', {idevento: nomatch.$link.path.substring(1)});
            }
            if(codigo){
              //window.localStorage.setItem( 'convite', JSON.stringify({idevento: nomatch.$link.path.substring(1)}) );
              window.localStorage.setItem( 'validarQRCODE', codigo );
              $state.go('novahomesemlogin');
              //$state.go('tabsController.eventoConvidado', {idevento: nomatch.$link.path.substring(1)});
            }
        });




        window.localStorage.setItem('versao', '1');
     if (window.FirebasePlugin) {
            var Token
            window.FirebasePlugin.grantPermission(); //in ios
            // window.FirebasePlugin.hasPermission(function(data){
            //     if (data.isEnabled)
            //         alert("Permission to receive notification is granted.");
            //     else
            //         alert("Permission to receive notification is NOT granted.");
            // });
             window.FirebasePlugin.getToken(token => {
              // save this server-side and use it to push notifications to this device
              //alert(`Obtained token: ${token}`);
              window.localStorage.setItem( 'token', token );
               window.FirebasePlugin.subscribe('all');
            }, error => {
              console.error(`Error: ${error}`);
            });
            window.FirebasePlugin.getToken(function (token) {

                Token = token;
                //alert(token);
                if (token) {
                  sendTokenToServer(token);
                  updateUIForPushEnabled(token);
                  //alert("foi")
                } else {
                  // Show permission request.
                  //alert('No Instance ID token available. Request permission to generate one.');
                  // Show permission UI.
                  updateUIForPushPermissionRequired();
                  setTokenSentToServer(false);
                }
            }, function (error) {

            });

            window.FirebasePlugin.onTokenRefresh(function (token) {

                Token = token;
                console.log(token);

                 setTokenSentToServer(false);
                    // Send Instance ID token to app server.
                  sendTokenToServer(token);
            }, function (error) {

            });
            window.FirebasePlugin.onNotificationOpen(function(notification) {
                console.log(JSON.stringify(notification));
                cordova.plugins.notification.badge.configure({ autoClear: true });
                var user = JSON.parse( window.localStorage.getItem( 'user' ));
                $http.post('https://ec2.diwoapp.com.br/notificacao.php' , {iduser : user.iduser}).then(function(result) {
                  if (result.data.success == true){
                    cordova.plugins.notification.badge.set(result.data.nrow);
                  }
                });
            }, function(error) {
                console.error(error);
            }); 
            //  window.FirebasePlugin.onNotificationOpen(function(notification) {
            //     console.log(JSON.stringify(notification));
            //     alert("The notification is open!");
            // }, function(error) {
            //     console.error(error);
            // });   
        }
       

        cordova.plugins.notification.badge.configure({ autoClear: true });
        var user = JSON.parse( window.localStorage.getItem( 'user' ));
        $http.post('https://ec2.diwoapp.com.br/notificacao.php' , {iduser : user.iduser}).then(function(result) {
          if (result.data.success == true){
            cordova.plugins.notification.badge.set(result.data.nrow);
          }
        });
        
         cordova.getAppVersion(function(version) {
           $http.post('https://ec2.diwoapp.com.br/versao.php' ).then(function(result) {
                                                                      
            if(result.data[0].versao!=version){
              window.localStorage.setItem('versao', '0');  
            }else{
              window.localStorage.setItem('versao', '1');
            }
                //appVersion = version;
            });
         });

        


    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})
/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});
 
