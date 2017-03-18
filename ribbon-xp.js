const gearsStatsUrl = "https://gearsofwar.com/en-us/stats/gears-of-war-4/xbox-one/service-records/players";

if (window.location.href.includes(gearsStatsUrl)) {
    // create ribbon => xp mapping
    var ribbonXP = new Map();
    ribbonXP.set('1056InProgress', null);       ribbonXP.set('3rdAndLong', null);       ribbonXP.set('Annihilation', null);
    ribbonXP.set('ApexPredator', null);         ribbonXP.set('AwwMan', null);           ribbonXP.set('Bagman', null);
    ribbonXP.set('BetterMan', null);            ribbonXP.set('GrenadeAttach', 75);      ribbonXP.set('BigOlHero', null);
    ribbonXP.set('BigPoppa', null);             ribbonXP.set('Boombadier', 50);         ribbonXP.set('Bravado', null);
    ribbonXP.set('BrotherhoodInBattle', null);  ribbonXP.set('CarminesStar', null);     ribbonXP.set('ChainLightning', null);
    ribbonXP.set('Charge', 100);                ribbonXP.set('JohnnyOnTheSpot', 100);   ribbonXP.set('CloseShave', null);
    ribbonXP.set('Fragtastic', 100);            ribbonXP.set('Clutch', null);           ribbonXP.set('CompleteResurrection', null);
    ribbonXP.set('ConstructionWorker', 20);     ribbonXP.set('Contender', 75);          ribbonXP.set('EndBig', 50);
    ribbonXP.set('RingSkunk', null);            ribbonXP.set('ThanksPal', null);        ribbonXP.set('Martyr', null);
    ribbonXP.set('DeathFromBeyond', 25);        ribbonXP.set('Kablooey', 100);          ribbonXP.set('Diversity', 50);
    ribbonXP.set('Downer', 75);                 ribbonXP.set('Downtime', null);         ribbonXP.set('Duelist', null);
    ribbonXP.set('EqualOpportunity', 50);       ribbonXP.set('Evasive', 100);           ribbonXP.set('Executioner', null);
    ribbonXP.set('EyeOnThePrize', null);        ribbonXP.set('Expendable', null);       ribbonXP.set('LastKill', 50);
    ribbonXP.set('Financier', 150);             ribbonXP.set('Aggressor', null);        ribbonXP.set('FirstBlood', 125);
    ribbonXP.set('FishInABarrel', null);        ribbonXP.set('GettingItDone', null);    ribbonXP.set('Gladiator', null);
    ribbonXP.set('GoOnWithoutMe', 25);          ribbonXP.set('Grenadier', 100);         ribbonXP.set('MostTimeDBNO', 25);
    ribbonXP.set('HailMary', 100);              ribbonXP.set('HairTrigger', null);      ribbonXP.set('LastHurrah', null);
    ribbonXP.set('HatTrick', 150);              ribbonXP.set('Headhunter', 100);        ribbonXP.set('HelpingHand', 75);
    ribbonXP.set('HighROI', 75);                ribbonXP.set('Hunter', null);           ribbonXP.set('IGotcha', 25);
    ribbonXP.set('KaBlock', 75);                ribbonXP.set('Igor', null);             ribbonXP.set('ImFine', null);
    ribbonXP.set('Industrious', null);          ribbonXP.set('InsideOut', null);        ribbonXP.set('KillJoy', null);
    ribbonXP.set('KingSlayer', null);           ribbonXP.set('LastHope', 150);          ribbonXP.set('LastManOut', null);
    ribbonXP.set('LastResort', null);           ribbonXP.set('LeadByExample', null);    ribbonXP.set('LeaveItAllOnTheField', null);
    ribbonXP.set('LikeABoss', 150);             ribbonXP.set('LockAndLoad', null);      ribbonXP.set('LongHauler', 150);
    ribbonXP.set('ChainBang', 100);             ribbonXP.set('MasterOfTheZone', null);  ribbonXP.set('Medic', 125);
    ribbonXP.set('Methodical', 50);             ribbonXP.set('ForwardObserver', 150);   ribbonXP.set('MoreGutsThanSkill', 75);
    ribbonXP.set('MVP', 100);                   ribbonXP.set('MyHouse', null);          ribbonXP.set('Negotiator', null);
    ribbonXP.set('Nemesis', null);              ribbonXP.set('Skunked', null);          ribbonXP.set('NeverSurrender', null);
    ribbonXP.set('NicePick', null);             ribbonXP.set('NoRansom', null);         ribbonXP.set('NoRespect', null);
    ribbonXP.set('NoSmoking', 100);             ribbonXP.set('NoWait', null);           ribbonXP.set('NotSoFast', 100);
    ribbonXP.set('NotToday', null);             ribbonXP.set('Ole', null);              ribbonXP.set('RoadieRun', null);
    ribbonXP.set('OurHouse', null);             ribbonXP.set('OutFromUnder', null);     ribbonXP.set('Pacifist', null);
    ribbonXP.set('PhatLoot', 100);              ribbonXP.set('Pioneer', null);          ribbonXP.set('Pistoleer', null);
    ribbonXP.set('PointMan', 125);              ribbonXP.set('FieldStripper', 75);      ribbonXP.set('ComebackKids', null);
    ribbonXP.set('RepairMan', 50);              ribbonXP.set('RingKing', null);         ribbonXP.set('RingMaster', null);
    ribbonXP.set('SleightOfHand', 25);          ribbonXP.set('BulletMagnet', 150);      ribbonXP.set('Sacrifice', null);
    ribbonXP.set('Sapper', null);               ribbonXP.set('Sawdust', null);          ribbonXP.set('SmoothOperator', null);
    ribbonXP.set('Smorgasbord', null);          ribbonXP.set('SoClose', null);          ribbonXP.set('Solid', null);
    ribbonXP.set('SorryCharlie', null);         ribbonXP.set('SpecialDelivery', 25);    ribbonXP.set('SprayAndPray', 50);
    ribbonXP.set('StabEm', 75);                 ribbonXP.set('StandupGuy', null);       ribbonXP.set('StayDown', null);
    ribbonXP.set('Observer', 100);              ribbonXP.set('Survivor', null);         ribbonXP.set('SwiftVengeance', null);
    ribbonXP.set('TeamPlayer', 50);             ribbonXP.set('Cleaner', null);          ribbonXP.set('TheDouble', 100);
    ribbonXP.set('TheTriple', 125);             ribbonXP.set('TheQuad', 150);           ribbonXP.set('TheQuinn', 175);
    ribbonXP.set('TheSpecialists', 100);        ribbonXP.set('Evade', 25);              ribbonXP.set('ThreeAndOut', null);
    ribbonXP.set('TopOfTheHill', null);         ribbonXP.set('HardTarget', 50);         ribbonXP.set('TrickShot', 75);
    ribbonXP.set('ShowedUp', null);             ribbonXP.set('UnluckyBastard', null);   ribbonXP.set('Valiant', null);
    ribbonXP.set('Vigilant', null);             ribbonXP.set('WellProtected', 75);      ribbonXP.set('YoureWelcome', null);

    var totalRibbonsEarned = localStorage.getItem("totalRibbonsEarned") != null ? localStorage.getItem("totalRibbonsEarned").split(",") : [0];
    var totalRibbonXP = localStorage.getItem("totalRibbonXP") != null ? localStorage.getItem("totalRibbonXP").split(",") : [0];
    var gow4Data = JSON.parse(document.getElementById('initialState').textContent);
    var ribbons = gow4Data.ribbons;

    // new ribbons earned
    if (ribbons.TotalEarned > totalRibbonsEarned.slice(-1).pop()) {

        var totRibbonXP = 0;
        var ribbonNum = new Map();
        ribbons.Ribbons.forEach(r => ribbonNum.set(r.Name, r.NumEarned));

        for (var [name, xp] of ribbonXP) {
            if (xp !== null) {
                totRibbonXP += ribbonNum.get(name) * xp;
            }
        }

        totalRibbonXP.push(totRibbonXP);
        localStorage.setItem("totalRibbonXP", totalRibbonXP);
        totalRibbonsEarned.push(ribbons.TotalEarned);
        localStorage.setItem("totalRibbonsEarned", totalRibbonsEarned);

    }

}