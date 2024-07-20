import Team from '../app';

// const types = [
//     'Bowerman',
//     'Swordsman',
//     'Magician',
//     'Daemon',
//     'Undead',
//     'Zombie'
// ];


const Zombie = { name: 'Zombie', className: 'Zombie' };
const Daemon = { name: 'Daemon', className: 'Daemon' };
const Magician = { name: 'Magician', className: 'Magician' };

test('добавить в команду нужного персонажа', () => {
    const myTeam = new Team();
    myTeam.add(Magician);
    const recieved = myTeam.members.has(Magician);
    expect(recieved).toBe(true);
});

test('ошибка если персонаж есть в команде', () => {
    expect(() => {
        const myTeam = new Team();
        myTeam.add(Zombie);
        myTeam.add(Zombie);
    }).toThrow('Ошибка');
});

test('несколько персонажей без дублирования', () => {
    const myTeam = new Team();
    myTeam.addAll(Daemon, Magician, Zombie, Daemon, Zombie);
    const recieved = myTeam.members.size;
    expect(recieved).toBe(3);
});

test('преобразовать набор в массив', () => {
    const myTeam = new Team();
    myTeam.addAll(Zombie, Daemon);
    const recieved = myTeam.toArray();
    const expected = [
        { name: 'Zombie', className: 'Zombie' },
        { name: 'Daemon', className: 'Daemon' },
    ];

    expect(recieved).toEqual(expected);
});