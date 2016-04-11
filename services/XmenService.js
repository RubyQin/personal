(function(){
	'use strict';

	angular
	    .module('myApp')
	    .factory('Xmen',Xmen);

	function Xmen(){
		var Xmen = {};
        Xmen.cast = [{
        name : 'Hugh Jackman',
        code: 'The Wolverine',
        character: 'James "Logan" Howlett',
        img: 'img/Hugh_Jackman_2015.jpg'},
        {name: 'Patrick Stewart',
         code: 'Professor X',
         character: 'Charles Xavier',
         img: 'img/Patrick_Stewart_TIFF_2015.jpg'},
        {name: 'Ian McKellen',
         code: 'Magneto',
         character: 'Erik Lehnsherr',
         img: 'img/SDCC13_-_Ian_McKellen.jpg'},
        {name: 'James Marsden',
         code: 'Cyclops',
         character: 'Scott Summers',
         img: 'img/330px-James_Marsden_at_the_World_Premiere_of_Robot_and_Frank,_January_2012.jpg'},
        {name: 'Famke Janssen',
         code: 'Phoenix',
         character: 'Jean Grey',
         img:'img/Famke_Janssen_at_ATX_2014_(cropped).jpg'},
        {name: 'Halle Berry',
         code: 'Storm',
         character: 'Ororo Munroe',
         img: 'img/Halle_Berry_by_Gage_Skidmore.jpg'},
        {name: 'Shawn Ashmore',
         code: 'Iceman',
         character: 'Bobby Drake',
         img:'img/Shawn_Ashmore_SDCC_2014.jpg'},
        {name: 'Anna Paquin',
         code: 'Rogue',
         character: 'Marie D Ancanto',
         img: 'img/Anna_Paquin_Comic-Con_2012.jpg'},
        {name: 'Rebecca Romijn',
         code: 'Mystique',
         character: 'Raven Darkholme',
         img: 'img/330px-Rebecca_Romijn_in_Marchesa_2.jpg'},
        {name: 'Ellen Page',
         code: 'Shadowcat',
         character: 'Kitty Pryde',
         img: 'img/330px-Ellen_Page_by_Gage_Skidmore.jpg'},
        {name: 'Aaron Stanford',
         code: 'Pyro',
         character: 'John Allerdyce',
         img: 'img/330px-Aaron_Stanford_-_Nikita_(cropped).jpg'},
        {name: 'Kea Wong',
         code: 'Jubilee',
         character: 'Jubilation Lee',
         img:'img/'
        },
        {name: 'Kelsey Grammer',
         code: 'Beast',
         character: 'Henry "Hank" McCoy',
         img: 'img/Kelsey_Grammer_May_2010_(cropped).jpg'},
        {name: 'Daniel Cudmore',
         code: 'Colossus',
         character: 'Piotr "Peter" Rasputin',
         img:'img/D.Cudmore.jpg'},
        {name: 'Brian Cox',
         code:'',
         character: 'William Stryker',
         img: 'img/330px-BrianCoxTIFFSept2011.jpg'},
        {name: 'Olivia Williams',
         code: '',
         character: 'Moira MacTaggert',
         img: 'img/Olivia_Williams_July_9,_2014_(cropped).jpg'},
        {name: 'Ryan Reynolds',
         code: 'Deadpool/Weapon XI',
         character: 'Wade Wilson',
         img: 'img/Ryan_Reynolds_by_Gage_Skidmore.jpg'},
        {name: 'Lucas Till',
         code: 'Havok',
         character: 'Alex Summers',
         img: 'img/330px-Lucas_Till_2011.jpg'}
        ];
    return Xmen;
    }
	
})();