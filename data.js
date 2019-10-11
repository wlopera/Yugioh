    
     $scope.newCard = {
        nombre: 'Mago Oscuro',
        name: 'Dark Magician',
        level: '7',
        attribute: 'Oscuridad',
        image: 'Mago_oscuro.jpg',
        type: 'Lanzador de Conjuros',
        ATK: '2500',
        DEF: '2100',
        description: 'El más grande de los magos en cuanto al ataque y la defensa.'
    }
    
    $scope.createCard();
	
	
	 $scope.newCard = {
        nombre: 'Dragón Blanco de Ojos Azules',
        name: 'Blue-Eyes White Dragon',
        level: '8',
        attribute: 'Luz',
        image: 'Dragón_blanco_de_ojos_azules.jpg',
        type: 'Dragón',
        ATK: '3000',
        DEF: '2500',
        description: 'Este legendario dragón es una poderosa máquina de destrucción. Virtualmente invencible, muy pocos se han enfrentado a esta impresionante criatura y han vivido para contarlo.'
    }
    
    $scope.createCard();
	
	db.products.insert( { item: "card", qty: 15 } )
	
	db.cards.insert({nombre: 'Agujero Trampa',
        name: 'Tramp Hole',
        attribute: 'Trampa',
        image: 'Agujero_trampa.jpg',
        description: 'Cuando tu adversario Invoca de Modo Normal o por Volteo 1 monstruo con 1000 ATK o más: selecciona ese monstruo; destruye ese objetivo.'
	})
	
	db.cards.insert({nombre: 'Espada de la Luz Reveladora',
        name: 'Swords of Revealing Light',
        attribute: 'Mágica',
        image: 'Espada_Luz_reveladora.jpg',
        description: 'Después de la activación de esta carta, ésta permanece en el Campo, pero destrúyela durante la End Phase del 3er turno de tu adversario. Cuando esta carta es activada: si tu adversario controla un monstruo boca abajo, voltea boca arriba todos los monstruos que controle. Mientras esta carta esté boca arriba en el Campo, los monstruos de tu adversario no pueden declarar un ataque.'
    })
    
    
    $scope.newAttibute = {
        name: 'Agua',
        icon: null
    }
    $scope.createAttribute();

    $scope.newAttibute = {
        name: 'Viento',
        icon: null
    }
    $scope.createAttribute();

    $scope.newAttibute = {
        name: 'Magia',
        icon: null
    }
    $scope.createAttribute();

    $scope.newAttibute = {
        name: 'Trampa',
        icon: null
    }
    $scope.createAttribute();
    