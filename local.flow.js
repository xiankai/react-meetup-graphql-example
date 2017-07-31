declare type RaidBoss = Tyranitar | Legendary;

declare type Legendary = Articuno | Moltres | Zapdos;

declare type Tyranitar = {
    name: "Tyranitar";
    type: [
        "Rock",
        "Dark",
    ];
}

declare type Articuno = {
    name: "Articuno";
    type: [
        "Ice",
        "Flying",
    ];
}

declare type Moltres = {
    name: "Moltres";
    type: [
        "Fire",
        "Flying",
    ];
}

declare type Zapdos = {
    name: "Zapdos";
    type: [
        "Electric",
        "Flying",
    ];
}
