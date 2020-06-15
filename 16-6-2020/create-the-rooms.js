// Add rooms here
var rooms = {
  name: {
    nameA: 'Room 1',
    nameB: 'Room 2',
    nameC: 'Room 3',
  },
  description: {
    descriptionA: 'Some description A',
    descriptionB: 'Some description B',
    descriptionC: 'Some description C',
  },
  completed: {
    completedA: true,
    completedB: true,
    completedC: false,
  },
};

describe('room creation', () => {
  const keys = Object.keys(rooms);
  it('should have at least three rooms', () => {
    Test.assertEquals(keys.length >= 3, true);
  });
  it('each room should be an object', () => {
    keys.forEach((name) => {
      Test.expect(
        typeof rooms[name] === 'object',
        `${name} should be an object`
      );
    });
  });
  it('should contain at least three properties per room', () => {
    keys.forEach((name) => {
      let numKeys = Object.keys(rooms[name]).length;
      Test.expect(numKeys >= 3, `not enough properties for room: ${name}`);
    });
  });
});
