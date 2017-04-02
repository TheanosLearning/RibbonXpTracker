const gearsStatsUrl = "https://gearsofwar.com/en-us/stats/gears-of-war-4/xbox-one/service-records/players";

if (window.location.href.includes(gearsStatsUrl)) {
    // create ribbon => xp mapping
    var ribbonXP = new Map();
    ribbonXP.set('1056InProgress', 100);       ribbonXP.set('3rdAndLong', 125);        ribbonXP.set('Annihilation', 50);
    ribbonXP.set('ApexPredator', 50);          ribbonXP.set('AwwMan', 50);             ribbonXP.set('Bagman', 50);
    ribbonXP.set('BetterMan', 100);            ribbonXP.set('GrenadeAttach', 75);      ribbonXP.set('BigOlHero', 100);
    ribbonXP.set('BigPoppa', 25);              ribbonXP.set('Boombadier', 50);         ribbonXP.set('Bravado', 25);
    ribbonXP.set('BrotherhoodInBattle', 50);   ribbonXP.set('CarminesStar', 100);      ribbonXP.set('ChainLightning', null);
    ribbonXP.set('Charge', 100);               ribbonXP.set('JohnnyOnTheSpot', 100);   ribbonXP.set('CloseShave', 125);
    ribbonXP.set('Fragtastic', 100);           ribbonXP.set('Clutch', 25);             ribbonXP.set('CompleteResurrection', 100);
    ribbonXP.set('ConstructionWorker', 20);    ribbonXP.set('Contender', 75);          ribbonXP.set('EndBig', 50);
    ribbonXP.set('RingSkunk', 100);            ribbonXP.set('ThanksPal', 50);          ribbonXP.set('Martyr', 75);
    ribbonXP.set('DeathFromBeyond', 25);       ribbonXP.set('Kablooey', 100);          ribbonXP.set('Diversity', 50);
    ribbonXP.set('Downer', 75);                ribbonXP.set('Downtime', 75);           ribbonXP.set('Duelist', 75);
    ribbonXP.set('EqualOpportunity', 50);      ribbonXP.set('Evasive', 100);           ribbonXP.set('Executioner', 125);
    ribbonXP.set('EyeOnThePrize', 75);         ribbonXP.set('Expendable', 150);        ribbonXP.set('LastKill', 50);
    ribbonXP.set('Financier', 150);            ribbonXP.set('Aggressor', 150);         ribbonXP.set('FirstBlood', 125);
    ribbonXP.set('FishInABarrel', 100);        ribbonXP.set('GettingItDone', 75);      ribbonXP.set('Gladiator', 75);
    ribbonXP.set('GoOnWithoutMe', 25);         ribbonXP.set('Grenadier', 100);         ribbonXP.set('MostTimeDBNO', 25);
    ribbonXP.set('HailMary', 100);             ribbonXP.set('HairTrigger', 75);        ribbonXP.set('LastHurrah', 75);
    ribbonXP.set('HatTrick', 150);             ribbonXP.set('Headhunter', 100);        ribbonXP.set('HelpingHand', 75);
    ribbonXP.set('HighROI', 75);               ribbonXP.set('Hunter', 75);             ribbonXP.set('IGotcha', 25);
    ribbonXP.set('KaBlock', 75);               ribbonXP.set('Igor', 50);               ribbonXP.set('ImFine', 50);
    ribbonXP.set('Industrious', 100);          ribbonXP.set('InsideOut', 150);         ribbonXP.set('KillJoy', 100);
    ribbonXP.set('KingSlayer', 50);            ribbonXP.set('LastHope', 150);          ribbonXP.set('LastManOut', 100);
    ribbonXP.set('LastResort', null);          ribbonXP.set('LeadByExample', 75);      ribbonXP.set('LeaveItAllOnTheField', 50);
    ribbonXP.set('LikeABoss', 150);            ribbonXP.set('LockAndLoad', 25);        ribbonXP.set('LongHauler', 150);
    ribbonXP.set('ChainBang', 100);            ribbonXP.set('MasterOfTheZone', 50);    ribbonXP.set('Medic', 125);
    ribbonXP.set('Methodical', 50);            ribbonXP.set('ForwardObserver', 150);   ribbonXP.set('MoreGutsThanSkill', 75);
    ribbonXP.set('MVP', 100);                  ribbonXP.set('MyHouse', 100);           ribbonXP.set('Negotiator', 75);
    ribbonXP.set('Nemesis', 75);               ribbonXP.set('Skunked', 100);           ribbonXP.set('NeverSurrender', 75);
    ribbonXP.set('NicePick', 50);              ribbonXP.set('NoRansom', 50);           ribbonXP.set('NoRespect', 50);
    ribbonXP.set('NoSmoking', 100);            ribbonXP.set('NoWait', 75);             ribbonXP.set('NotSoFast', 100);
    ribbonXP.set('NotToday', null);            ribbonXP.set('Ole', null);              ribbonXP.set('RoadieRun', 25);
    ribbonXP.set('OurHouse', 50);              ribbonXP.set('OutFromUnder', 100);      ribbonXP.set('Pacifist', null);
    ribbonXP.set('PhatLoot', 100);             ribbonXP.set('Pioneer', 50);            ribbonXP.set('Pistoleer', 75);
    ribbonXP.set('PointMan', 125);             ribbonXP.set('FieldStripper', 75);      ribbonXP.set('ComebackKids', null);
    ribbonXP.set('RepairMan', 50);             ribbonXP.set('RingKing', 100);          ribbonXP.set('RingMaster', 50);
    ribbonXP.set('SleightOfHand', 25);         ribbonXP.set('BulletMagnet', 150);      ribbonXP.set('Sacrifice', 75);
    ribbonXP.set('Sapper', 100);               ribbonXP.set('Sawdust', 100);           ribbonXP.set('SmoothOperator', 75);
    ribbonXP.set('Smorgasbord', null);         ribbonXP.set('SoClose', 100);           ribbonXP.set('Solid', 50);
    ribbonXP.set('SorryCharlie', 50);          ribbonXP.set('SpecialDelivery', 25);    ribbonXP.set('SprayAndPray', 50);
    ribbonXP.set('StabEm', 75);                ribbonXP.set('StandupGuy', 50);         ribbonXP.set('StayDown', 25);
    ribbonXP.set('Observer', 100);             ribbonXP.set('Survivor', 25);           ribbonXP.set('SwiftVengeance', 50);
    ribbonXP.set('TeamPlayer', 50);            ribbonXP.set('Cleaner', 100);           ribbonXP.set('TheDouble', 100);
    ribbonXP.set('TheTriple', 125);            ribbonXP.set('TheQuad', 150);           ribbonXP.set('TheQuinn', 175);
    ribbonXP.set('TheSpecialists', 100);       ribbonXP.set('Evade', 25);              ribbonXP.set('ThreeAndOut', 75);
    ribbonXP.set('TopOfTheHill', null);        ribbonXP.set('HardTarget', 50);         ribbonXP.set('TrickShot', 75);
    ribbonXP.set('ShowedUp', null);            ribbonXP.set('UnluckyBastard', 25);     ribbonXP.set('Valiant', 25);
    ribbonXP.set('Vigilant', 100);             ribbonXP.set('WellProtected', 75);      ribbonXP.set('YoureWelcome', 100);

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
