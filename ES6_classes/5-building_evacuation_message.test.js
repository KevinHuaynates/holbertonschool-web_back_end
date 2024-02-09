// 5-building_evacuation_message.test.js
import Building from './5-building.js';

class TestBuilding extends Building {}

test('Check if class forces override', () => {
  const t = new TestBuilding(100);
  expect(() => t.evacuationWarningMessage()).toThrow('Class extending Building must override evacuationWarningMessage');
});
