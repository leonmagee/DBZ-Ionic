angular.module('app', [
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'views/home.html'
                });
            $urlRouterProvider.otherwise('/home')
        }
    )
    .controller('game', function () {

        var game = this;
        /**
         * The data should be moved somewhere else
         */
        game.characters = [
            {
                id: 0,
                name: 'Goku',
                race: 'Saiyan',
                alignment: 'Hero',
                level1: [0, 500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9001],
                level2: [0, 500, 1000, 5000, 9000, 13000, 17000, 21000, 25000, 29000, 33000],
                level3: [0, 50000, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000],
                level4: [0, 100000, 200000, 400000, 600000, 800000, 1000000, 1200000, 1350000, 1500000, 1650000]
            },
            {
                id: 1,
                name: 'Vegeta',
                race: 'Saiyan',
                alignment: 'Villain',
                level1: [0, 250, 500, 1000, 2000, 3000, 4000, 5000, 6000, 8000, 10000],
                level2: [0, 500, 1000, 2000, 3000, 4000, 5000, 10000, 15000, 20000, 25000],
                level3: [0, 500, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 125000, 150000],
                level4: [0, 1000, 10000, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000]
            },
            {
                id: 2,
                name: 'Gohan',
                race: 'Saiyan, Namekian',
                alignment: 'Hero',
                level1: [0, 200, 400, 600, 800, 1000, 1500, 2000, 2500, 3000, 3500],
                level2: [0, 1000, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000],
                level3: [0, 750, 7500, 75000, 100000, 150000, 200000, 250000, 300000, 350000, 400000],
                level4: [0, 500, 5000, 50000, 125000, 200000, 225000, 300000, 375000, 450000, 525000]
            },
            {
                id: 3,
                name: 'Krillin',
                race: 'Human',
                alignment: 'Hero',
                level1: [0, 400, 800, 1200, 1600, 2000, 2400, 2800, 3200, 3600, 4000],
                level2: [0, 3000, 5000, 7000, 9000, 11000, 13000, 15000, 17000, 19000, 21000],
                level3: [0, 1000, 5000, 10000, 25000, 50000, 75000, 150000, 225000, 300000, 375000],
                level4: [0, 1000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000]
            },
            {
                id: 4,
                name: 'Frieza',
                race: 'Human',
                alignment: 'Villain',
                level1: [0, 450, 900, 4500, 9000, 19000, 34000, 49000, 64000, 79000, 94000],
                level2: [0, 900, 9000, 19000, 39000, 59000, 79000, 99000, 199000, 399000, 599000],
                level3: [0, 1000, 5000, 10000, 25000, 50000, 100000, 200000, 400000, 700000, 1000000],
                level4: [0, 25000, 50000, 100000, 200000, 400000, 600000, 800000, 1000000, 1200000, 1400000]
            },
            {
                id: 5,
                name: 'Piccolo',
                race: 'Namekian',
                alignment: 'Hero',
                level1: [0, 900, 1100, 1300, 1700, 2200, 3500, 4500, 5500, 7000, 8500],
                level2: [0, 500, 1000, 2000, 5000, 8000, 11000, 14000, 17000, 20000, 23000],
                level3: [0, 1000, 10000, 50000, 100000, 150000, 200000, 300000, 400000, 500000, 600000],
                level4: [0, 5000, 50000, 100000, 150000, 250000, 350000, 450000, 550000, 650000, 750000]
            }
        ];

        game.masteries = [
            {
                id: 0,
                card_no: 'S25',
                card_set: 'Premiere',
                name: 'Saiyan Empowered Mastery',
                image: 'PrS25.jpg',
                mastery: 'Saiyan',
                status_change: {
                    Continuous: ["Can't win by MPPV", "Saiyan attacks gain +1 anger", "Saiyan HIT attacks gain +3 power stages", "Rejuvenated cards raise your anger +1"]
                },
            },
            {
                id: 1,
                card_no: 'S26',
                card_set: 'Premiere',
                name: 'Orange Adaptive Mastery',
                image: 'PrS26.jpg',
                mastery: 'Orange',
                status_change: {
                    Continuous: ["Drills are not discarded after changing MP level", "Energy attacks gain +1 life card", "If you use critical damage effect during combat, at the end, grab a Styled Drill from your discard pile and put it in play"]
                },
            },
            {
                id: 2,
                card_no: 'S27',
                card_set: 'Premiere',
                name: 'Red Enraged Mastery',
                image: 'PrS27.jpg',
                mastery: 'Red',
                status_change: {
                    Continuous: ["Every time you use critical damage effect, raise your anger +1", "If you raise an MP level, draw 1 card and discard 1 card", "If you lower an MP level, draw 1 card"]
                },
            },
            {
                id: 3,
                card_no: 'S28',
                card_set: 'Premiere',
                name: 'Black Devious Mastery',
                image: 'PrS28.jpg',
                mastery: 'Black',
                status_change: {
                    Continuous: ["Attacks gain +1 life card", "Attacks gain +1 power stage"],
                    Power: ["Discard 1 card from your hand to banish the bottom 2 cards in your opponent's discard pile", "If the discarded card is Styled, you opponent discards a card"]
                },
            },
            {
                id: 4,
                card_no: 'S29',
                card_set: 'Premiere',
                name: 'Blue Protective Mastery',
                image: 'PrS29.jpg',
                mastery: 'Blue',
                status_change: {
                    Continuous: ["Opponent needs 6 anger to raise MP level"],
                    Power: ["Discard 1 Physical Combat card from your hand to block an Energy attack OR Discard 1 Energy Combat card from your hand to block a Physical attack", "If the discarded card is Blue, raise/lower any player's anger +1/-1"]
                },
            },
            {
                id: 5,
                card_no: 'S30',
                card_set: 'Premiere',
                name: 'Namekian Knowledge Mastery',
                image: 'PrS30.jpg',
                mastery: 'Namekian',
                status_change: {
                    Continuous: ["Rejuvenated cards raise your anger +1", "Shuffled cards raise your anger +1", "If you or your opponent play a Dragon Ball, destroy the top card in your opponent's Life Deck", "Your opponent can capture all but 1 of your Dragon Balls you control with a critical damage effect"]
                },
            },
        ];



        /**
         * Instead of having a game.start boolean I should have screen stage number?
         * 1) Choose Personalities
         * 2) Choose Materies
         * 3) Play game
         */

        game.personality = true;
        game.mastery = false;
        game.start = false;
        game.spinner_section = false;

        // maybe not necessary?
        //game.setMasteries = function () {
        //    game.personality = false;
        //    game.mastery = true;
        //    game.start = false;
        //};

        // maybe not necessary?
        //game.startMatch = function () {
        //    game.personality = false;
        //    game.mastery = false;
        //    game.start = true;
        //};

        game.resetMatch = function () {
            game.personality = true;
            game.mastery = false;
            game.start = false;
            game.selected_one = 69;
            game.selected_two = 69;
            game.mastery_selected_one = 69;
            game.mastery_selected_two = 69;
        };

        /**
         * Set default characters
         */
        game.player_1 = game.characters[0];
        game.player_2 = game.characters[1];

        /**
         * Set default selected states
         */
        game.selected_one = 69;
        game.selected_two = 69;

        game.switch_to_mastery = function () {

            game.personality = false;
            game.mastery = true;
            game.spinner_section = false;

            setTimeout(function () {

                    game.spinner_section = false;
                    game.mastery = true;
                    //game.$apply();
                },

                2000);
        };

        game.switch_to_game = function () {

            game.personality = false;
            game.mastery = false;
            game.start = true;
            game.spinner_section = false;

            //setTimeout(function () {
            //
            //        game.spinner_section = false;
            //        game.mastery = true;
            //        //game.$apply();
            //    },
            //
            //    2000);
        };

        game.select_one = function ($index) {

            game.selected_one = $index;
            game.player_1 = game.characters[$index];

            if (game.selected_two !== 69) {
                game.switch_to_mastery();
            }
        };

        game.select_two = function ($index) {

            game.selected_two = $index;
            game.player_2 = game.characters[$index];

            if (game.selected_one !== 69) {
                game.switch_to_mastery();
            }
        };

        game.setMastery = function (mastery_id) {

            game.masteryTitle = game.masteries[mastery_id].name;
            game.masteryClass = game.masteries[mastery_id].mastery;
            game.currentContinuous = game.masteries[mastery_id].status_change.Continuous;
            game.currentPower = game.masteries[mastery_id].status_change.Power;
            game.masteryModal();
        };

        game.modalActive = false;

        game.masteryModal = function () {

            if (game.modalActive === false) {

                game.modalActive = true;

            } else {

                game.modalActive = false;
            }
        };

        game.mastery_select_one = function ($index) {

            game.mastery_selected_one = $index;
            game.mastery_1 = game.masteries[$index];

            if (game.mastery_selected_two !== 69) {
                game.switch_to_game();
            }
        };

        game.mastery_select_two = function ($index) {

            game.mastery_selected_two = $index;
            game.mastery_2 = game.masteries[$index];

            if (game.mastery_selected_one !== 69) {
                game.switch_to_game();
            }
        };

        /**
         * Set default masteries??? Prob shouldn't do this...
         */
        //game.mastery_1 = game.masteries[0];
        //game.mastery_1 = game.masteries[0];
        game.mastery_selected_one = 69;
        game.mastery_selected_two = 69;
    })
    .controller('anger', function () {
        /**
         *  Set Anger Buttons
         *  This may change based on the main personality and mastery
         */
        var anger = this;
        anger.buttons_left = [1, 2, 3, 4, 5];
        anger.buttons_right = [5, 4, 3, 2, 1];
        anger.selected_left = 0;
        anger.selected_right = 4;

        anger.select_left = function (index) {
            anger.selected_left = index;
        };
        anger.select_right = function (index) {
            anger.selected_right = index;
        };

    })
    .controller('header', function () {

        var header = this;

        /**
         * Attack Table
         */
        header.attackTable = false;

        header.viewAttackTable = function () {

            if (header.attackTable === false) {

                header.attackTable = true;

            } else {

                header.attackTable = false;
            }
        }
    })
    .directive('updateLineHeight', function () {

        /**
         * Change line height
         */
        return {
            link: function (scope, element, attr) {

                var elementHeight = element[0].offsetHeight;
                var anger_button = angular.element(element[0].querySelector('a'));
                // not working on ionic ios???
                //anger_button.css('line-height', elementHeight + 'px');
            }
        }
    })
;
